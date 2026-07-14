import React, { FC, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';
const tok  = () => { try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; } };
const auth = () => ({ Authorization: `Bearer ${tok()}` });

interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
  isVerified: number;
  isPrimary: number;
  verifiedName?: string;
}

interface DisbResult {
  referenceId: string;
  externalReferenceId: string;
  pgReferenceId: string;
  status: string;
  amount: number;
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
}

type Step = 'form' | 'confirm' | 'tracking';

const fmtAmt = (n: number) => n.toLocaleString('en-RW', { maximumFractionDigits: 2 });

const NewMomoDisbursementForm: FC = () => {
  const [accounts, setAccounts]       = useState<BankAccount[]>([]);
  const [loadingAccounts, setLoadingAccounts] = useState(true);

  const [accountBalance, setAccountBalance]   = useState<{ available: number; formatted: string; currency: string } | null>(null);
  const [loadingAccountBalance, setLoadingAccountBalance] = useState(true);

  const [bankAccountId, setBankAccountId] = useState('');
  const [amount, setAmount]           = useState('');
  const [description, setDescription] = useState('');
  const [error, setError]             = useState('');

  const [lookupResult, setLookupResult] = useState<{ accountName: string; provider: string } | null>(null);
  const [looking, setLooking]         = useState(false);

  const [step, setStep]               = useState<Step>('form');
  const [submitting, setSubmitting]   = useState(false);
  const [result, setResult]           = useState<DisbResult | null>(null);

  // SSE tracking
  const [trackStatus, setTrackStatus] = useState<string>('PROCESSING');
  const [trackMsg, setTrackMsg]       = useState('');
  const [logs, setLogs]               = useState<{ stage: string; message: string; createdAt: string }[]>([]);
  const [elapsed, setElapsed]         = useState(0);
  const startedAt = useRef(Date.now());
  const sseRef    = useRef<EventSource | null>(null);
  const elRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const logsEnd   = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setLoadingAccounts(true);
    axios.get(`${API()}/v1/disbursement/bank-accounts`, { headers: auth() })
      .then(r => setAccounts((r.data?.data || []).filter((a: BankAccount) => a.isVerified)))
      .catch(() => {})
      .finally(() => setLoadingAccounts(false));

    setLoadingAccountBalance(true);
    axios.get(`${API()}/v1/agency/accounts/all/accounts/info/balance`, { headers: auth() })
      .then(r => {
        const accs = r.data?.accounts || r.data?.data?.accounts || [];
        const acc = accs.find((a: any) => a.currency === 'RWF') || accs[0];
        if (acc) {
          setAccountBalance({
            available: Number(acc.availableBalance ?? acc.balance ?? 0),
            formatted: acc.formattedAvailableBalance || acc.formattedBalance || String(acc.availableBalance ?? acc.balance ?? 0),
            currency: acc.currency || 'RWF',
          });
        }
      })
      .catch(() => {})
      .finally(() => setLoadingAccountBalance(false));
  }, []);

  useEffect(() => { logsEnd.current?.scrollIntoView({ behavior: 'smooth' }); }, [logs.length]);

  // NameLookup when account selection changes
  useEffect(() => {
    setLookupResult(null);
    const account = accounts.find(a => a.id === bankAccountId);
    if (!account) return;

    setLooking(true);
    axios.post(`${API()}/v1/disbursement/disbursements/name-lookup`,
      { accountNumber: account.accountNumber }, { headers: auth() })
      .then(r => setLookupResult(r.data?.data || null))
      .catch(() => setLookupResult(null))
      .finally(() => setLooking(false));
  }, [bankAccountId, accounts]);

  const selectedAccount = accounts.find(a => a.id === bankAccountId);
  const amtNum = parseFloat(amount);

  const totalDeducted = amtNum + 100;
  const exceedsBalance = accountBalance !== null && !isNaN(amtNum) && totalDeducted > accountBalance.available;

  const validate = () => {
    if (!bankAccountId) return 'Select a destination account';
    if (!amount || isNaN(amtNum) || amtNum < 500) return 'Minimum disbursement is 500 RWF';
    if (exceedsBalance) return `Amount exceeds your available account balance (${accountBalance!.formatted})`;
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setError('');
    setStep('confirm');
  };

  const confirm = async () => {
    setSubmitting(true);
    setError('');
    try {
      const res = await axios.post(`${API()}/v1/disbursement/disbursements/initiate`, {
        bankAccountId, amount: amtNum, description,
      }, { headers: auth() });

      if (!res.data?.success) {
        setError(res.data?.message || 'Disbursement failed');
        setStep('form');
        return;
      }

      setResult(res.data.data);
      setStep('tracking');
      startTracking(res.data.data.referenceId);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to initiate disbursement');
      setStep('form');
    } finally {
      setSubmitting(false);
    }
  };

  const startTracking = (id: string) => {
    startedAt.current = Date.now();
    elRef.current = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt.current) / 1000)), 1000);

    // Fetch existing logs
    axios.get(`${API()}/v1/disbursement/disbursements/${id}/logs`, { headers: auth() })
      .then(r => { if (Array.isArray(r.data?.data)) setLogs(r.data.data); })
      .catch(() => {});

    const url = `${API()}/v1/disbursement/disbursements/${id}/status-stream${tok() ? `?token=${encodeURIComponent(tok())}` : ''}`;
    const sse = new EventSource(url);
    sseRef.current = sse;

    sse.onmessage = (ev) => {
      try {
        const d = JSON.parse(ev.data);
        if (!d) return;
        if (d.type === 'log') {
          setLogs(prev => {
            if (d.id && prev.some((l: any) => l.id === d.id)) return prev;
            return [...prev, { id: d.id, stage: d.stage, message: d.message, createdAt: d.createdAt }];
          });
          return;
        }
        if (d.status && d.status !== 'PROCESSING' && d.status !== 'PENDING') {
          setTrackStatus(d.status);
          setTrackMsg(d.message || '');
          clearInterval(elRef.current!);
          sse.close();
        }
      } catch (_) {}
    };

    sse.onerror = () => sse.close();
  };

  const reset = () => {
    clearInterval(elRef.current!);
    sseRef.current?.close();
    setBankAccountId(''); setAmount(''); setDescription('');
    setLookupResult(null); setResult(null); setLogs([]);
    setTrackStatus('PROCESSING'); setTrackMsg(''); setElapsed(0);
    setStep('form'); setError('');
  };

  const fmtElapsed = (s: number) => s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`;

  if (step === 'tracking' && result) {
    const isDone  = trackStatus === 'COMPLETED';
    const isFailed = trackStatus === 'FAILED';
    const isPending = !isDone && !isFailed;

    return (
      <>
        <Pageheader currentpage="Disbursement" activepage="New MoMo Collections" mainpage="Disburse" />
        <div className="max-w-lg mx-auto space-y-4">
          <div className={`rounded-2xl border-2 overflow-hidden shadow-xl ${isDone ? 'border-emerald-300' : isFailed ? 'border-red-300' : 'border-indigo-300'}`}>
            <div className={`h-1.5 ${isDone ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : isFailed ? 'bg-gradient-to-r from-red-400 to-red-500' : 'bg-gradient-to-r from-indigo-500 to-indigo-600 animate-pulse'}`} />
            <div className="bg-white dark:bg-gray-800 p-8">
              <div className="flex justify-center mb-6">
                {isPending && (
                  <div className="relative w-24 h-24">
                    <svg className="absolute inset-0 w-full h-full animate-spin" viewBox="0 0 96 96">
                      <circle cx="48" cy="48" r="44" fill="none" stroke="#e0e7ff" strokeWidth="4" />
                      <circle cx="48" cy="48" r="44" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="138 138" strokeDashoffset="100" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                        <i className="bx bx-transfer-alt text-3xl text-indigo-600" />
                      </div>
                    </div>
                  </div>
                )}
                {isDone && <div className="w-24 h-24 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center ring-4 ring-emerald-100"><i className="bx bx-check-circle text-5xl text-emerald-500" /></div>}
                {isFailed && <div className="w-24 h-24 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center ring-4 ring-red-100"><i className="bx bx-x-circle text-5xl text-red-500" /></div>}
              </div>

              <div className="text-center mb-6">
                {isPending && <><h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Processing disbursement…</h2><p className="text-sm text-gray-500">Funds are being transferred to the destination account</p></>}
                {isDone && <><h2 className="text-xl font-bold text-emerald-600 mb-1">Disbursement Successful!</h2><p className="text-sm text-gray-500">{trackMsg || 'Funds sent to destination account'}</p></>}
                {isFailed && <><h2 className="text-xl font-bold text-red-600 mb-1">Disbursement Failed</h2><p className="text-sm text-gray-500">{trackMsg || 'The transfer could not be completed'}</p></>}
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-2.5 mb-6 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Recipient</span><span className="font-semibold">{result.accountHolderName}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Account</span><span className="font-mono text-xs">{result.accountNumber}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Provider</span><span className="font-semibold">{result.bankName}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Amount</span><span className="font-bold text-indigo-700">{fmtAmt(result.amount)} RWF</span></div>
                {result.pgReferenceId && <div className="flex justify-between"><span className="text-gray-500">Payment Ref</span><span className="font-mono text-xs truncate max-w-[160px]">{result.pgReferenceId}</span></div>}
                {isPending && elapsed > 0 && <div className="flex justify-between pt-1 border-t border-gray-200 dark:border-gray-600"><span className="text-gray-500">Elapsed</span><span className="font-medium">{fmtElapsed(elapsed)}</span></div>}
              </div>

              <div className="flex gap-3">
                {isDone || isFailed ? (
                  <button onClick={reset} className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-600 text-white text-sm font-semibold hover:shadow-lg transition-all">
                    <i className="bx bx-plus me-1.5" />New Disbursement
                  </button>
                ) : (
                  <p className="flex-1 text-center text-xs text-gray-400 py-2">Settlement typically takes 5–30 s for MNO, 1–3 min for banks</p>
                )}
              </div>
            </div>
          </div>

          {/* Audit log */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
              <i className="bx bx-list-check text-indigo-500 text-lg" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Transaction Log</span>
              {logs.length > 0 && <span className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 px-2 py-0.5 rounded-full">{logs.length} events</span>}
            </div>
            <div className="max-h-64 overflow-y-auto px-4 py-3 space-y-2">
              {logs.length === 0 ? <p className="text-xs text-gray-400 text-center py-2">Waiting for log entries…</p> : logs.map((l, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <i className="bx bx-circle text-base text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-snug">{l.message}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{new Date(l.createdAt).toLocaleTimeString()}</p>
                  </div>
                </div>
              ))}
              <div ref={logsEnd} />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (step === 'confirm' && selectedAccount) {
    return (
      <>
        <Pageheader currentpage="Disbursement" activepage="New MoMo Collections" mainpage="Disburse" />
        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600" />
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bx bx-transfer-alt text-3xl text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Confirm Disbursement</h2>
                <p className="text-sm text-gray-500 mt-1">Review the details before sending</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-3 mb-6 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Provider</span><span className="font-semibold">{selectedAccount.bankName}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Account</span><span className="font-mono text-xs">{selectedAccount.accountNumber}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Recipient</span><span className="font-semibold">{lookupResult?.accountName || selectedAccount.accountHolderName}</span></div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="text-gray-500">Amount</span>
                  <span className="text-lg font-bold text-indigo-700 dark:text-indigo-300">{fmtAmt(amtNum)} RWF</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Platform fee</span>
                  <span className="text-gray-500">100 RWF</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Total deducted</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{fmtAmt(amtNum + 100)} RWF</span>
                </div>
                {description && <div className="flex justify-between"><span className="text-gray-500">Note</span><span className="text-right max-w-[200px] truncate">{description}</span></div>}
              </div>

              {error && <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 text-sm text-red-700 dark:text-red-400">{error}</div>}

              <div className="flex gap-3">
                <button onClick={() => { setStep('form'); setError(''); }} disabled={submitting}
                  className="flex-1 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50">
                  Back
                </button>
                <button onClick={confirm} disabled={submitting}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-600 text-white text-sm font-semibold hover:shadow-lg transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                  {submitting ? (<><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending…</>) : (<><i className="bx bx-send" />Send Funds</>)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Pageheader currentpage="Disbursement" activepage="New MoMo Collections" mainpage="Disburse" />

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="bx bx-transfer-alt text-3xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Initiate Disbursement</h1>
              <p className="text-white/70 text-sm mt-0.5">Send funds to a registered bank or mobile money account</p>
            </div>
          </div>
        </div>

        {/* Agent's own account balance — what actually gets debited on disbursement */}
        <div className="bg-gradient-to-r from-indigo-50 to-indigo-50 dark:from-indigo-900/20 dark:to-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="bx bx-wallet-alt text-indigo-600 dark:text-indigo-400 text-lg" />
            </div>
            <div>
              <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">Your Account Balance</p>
              <p className="text-xs text-indigo-500 dark:text-indigo-400/80">Available to disburse</p>
            </div>
          </div>
          {loadingAccountBalance ? (
            <div className="h-6 w-24 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 animate-pulse" />
          ) : accountBalance ? (
            <span className="text-lg font-bold text-indigo-700 dark:text-indigo-300">{accountBalance.formatted}</span>
          ) : (
            <span className="text-xs text-gray-400">Unavailable</span>
          )}
        </div>


        {error && (
          <div className="rounded-xl p-4 flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
            <i className="bx bx-x-circle text-xl mt-0.5 text-red-500" />
            <p className="text-sm font-semibold text-red-700 dark:text-red-400 flex-1">{error}</p>
            <button onClick={() => setError('')}><i className="bx bx-x text-gray-400 text-xl" /></button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-6">

          {/* Destination Account */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Destination Account <span className="text-red-500">*</span>
            </label>
            {loadingAccounts ? (
              <div className="h-11 rounded-xl bg-gray-100 dark:bg-gray-700 animate-pulse" />
            ) : accounts.length === 0 ? (
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 text-sm text-amber-700 dark:text-amber-300">
                <i className="bx bx-info-circle mr-2" />
                No verified accounts found. <Link to="/moola/new-momo/bank-details" className="underline font-semibold">Register and verify a bank account</Link> first.
              </div>
            ) : (
              <div className="grid gap-3">
                {accounts.map(a => (
                  <label key={a.id} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${bankAccountId === a.id ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'}`}>
                    <input type="radio" name="bankAccountId" value={a.id} checked={bankAccountId === a.id} onChange={() => setBankAccountId(a.id)} className="sr-only" />
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="bx bx-buildings text-indigo-600 text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-100">{a.bankName}</p>
                        {a.isPrimary ? <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-1.5 py-0.5 rounded-full">Primary</span> : null}
                        <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded-full"><i className="bx bx-check mr-0.5" />Verified</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{a.verifiedName || a.accountHolderName}</p>
                      <p className="font-mono text-xs text-gray-600 dark:text-gray-400">{a.accountNumber}</p>
                    </div>
                    {bankAccountId === a.id && <i className="bx bx-check-circle text-xl text-indigo-600 flex-shrink-0" />}
                  </label>
                ))}
              </div>
            )}

            {/* NameLookup result */}
            {bankAccountId && (
              <div className="mt-2 flex items-center gap-2">
                {looking ? (
                  <><svg className="w-4 h-4 animate-spin text-indigo-400" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg><span className="text-xs text-gray-400">Confirming recipient…</span></>
                ) : lookupResult ? (
                  <><i className="bx bx-check-circle text-emerald-500" /><span className="text-xs text-emerald-700 dark:text-emerald-300">Recipient confirmed: <strong>{lookupResult.accountName}</strong> ({lookupResult.provider})</span></>
                ) : null}
              </div>
            )}
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Amount <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bx bx-money text-gray-400 text-lg" />
              </div>
              <input type="number" value={amount} onChange={e => { setAmount(e.target.value); setError(''); }}
                placeholder="0" min="500" step="1" required
                className={`w-full pl-10 pr-16 py-2.5 text-sm rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition ${
                  exceedsBalance
                    ? 'border-red-300 dark:border-red-700 focus:ring-red-500/40 focus:border-red-400'
                    : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500/40 focus:border-indigo-400'
                }`} />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-xs font-bold text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-lg">RWF</span>
              </div>
            </div>
            {amtNum >= 500 && <p className="text-xs text-gray-400 mt-1">Total deducted from your account: <strong>{fmtAmt(totalDeducted)} RWF</strong> (incl. 100 RWF platform fee)</p>}
            {exceedsBalance && (
              <p className="text-xs text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                <i className="bx bx-error-circle" /> Exceeds your available balance ({accountBalance!.formatted})
              </p>
            )}
            <p className="text-xs text-gray-400 mt-0.5">Minimum: 500 RWF · Maximum: 10,000,000 RWF</p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Description <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bx bx-note text-gray-400 text-lg" />
              </div>
              <input type="text" value={description} onChange={e => setDescription(e.target.value)}
                placeholder="Reason for disbursement" maxLength={200}
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition" />
            </div>
          </div>

          <button type="submit" disabled={!bankAccountId || !amount || isNaN(amtNum) || amtNum < 500 || exceedsBalance}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-600 text-white text-sm font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all">
            <i className="bx bx-right-arrow-alt text-xl" />
            Review & Confirm
          </button>
        </form>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl p-4">
          <div className="flex gap-3">
            <i className="bx bx-info-circle text-indigo-500 text-xl mt-0.5" />
            <div className="text-sm text-indigo-700 dark:text-indigo-300">
              <p className="font-semibold mb-1">How disbursements work</p>
              <ol className="list-decimal list-inside space-y-1 text-indigo-600 dark:text-indigo-400 text-xs">
                <li>Your agent account is debited for the requested amount</li>
                <li>Funds are sent via the payment network to the destination account</li>
                <li>MNO transfers settle in 5–30 seconds</li>
                <li>Bank transfers settle in 1–3 minutes during banking hours</li>
                <li>You receive a live status update here</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMomoDisbursementForm;
