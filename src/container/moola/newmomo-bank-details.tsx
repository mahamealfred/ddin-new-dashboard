import { FC, FormEvent, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';
const getToken = () => { try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; } };
const getUserData = () => { try { return JSON.parse(localStorage.getItem('userData') || 'null'); } catch { return null; } };
const authHeader = () => ({ Authorization: `Bearer ${getToken()}` });

const PROVIDERS = [
  { code: 'MTN',        label: 'MTN Mobile Money',   type: 'MNO' },
  { code: 'AIRTEL',     label: 'Airtel Money',        type: 'MNO' },
  { code: 'BK',         label: 'Banque de Kigali',    type: 'Bank' },
  { code: 'EQUITY',     label: 'Equity Bank Rwanda',  type: 'Bank' },
  { code: 'GTBANK',     label: 'GT Bank Rwanda',       type: 'Bank' },
  { code: 'I&M',        label: 'I&M Bank Rwanda',     type: 'Bank' },
  { code: 'BOA',        label: 'Bank of Africa Rwanda', type: 'Bank' },
  { code: 'BPR',        label: 'Banque Populaire du Rwanda', type: 'Bank' },
  { code: 'ECOBANK',    label: 'Ecobank Rwanda',      type: 'Bank' },
  { code: 'ACCESS',     label: 'Access Bank Rwanda',  type: 'Bank' },
  { code: 'COGEBANQUE', label: 'Cogebanque',          type: 'Bank' },
  { code: 'BRD',        label: 'BRD Rwanda',          type: 'Bank' },
  { code: 'UNGUKA',     label: 'Unguka Bank',         type: 'Bank' },
];

interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
  branchCode?: string;
  swiftBic?: string;
  country: string;
  currency: string;
  isVerified: number;
  verificationDate?: string;
  verifiedName?: string;
  isPrimary: number;
  isActive: number;
  createdAt: string;
}

const inputCls = 'w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition';

const NewMomoBankDetails: FC = () => {
  const userData = getUserData();
  const [accounts, setAccounts]   = useState<BankAccount[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const [form, setForm] = useState({
    bankName: '', accountNumber: '', accountHolderName: '', branchCode: '', swiftBic: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [saving, setSaving]         = useState(false);

  const [verifyingId, setVerifyingId] = useState<string | null>(null);
  const [deletingId, setDeletingId]   = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<BankAccount | null>(null);

  const [azampayBalance, setAzampayBalance] = useState<string | null>(null);
  const [balanceLoading, setBalanceLoading] = useState(false);

  const fetchAccounts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API()}/v1/disbursement/bank-accounts`, { headers: authHeader() });
      setAccounts(res.data?.data || []);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load bank accounts');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchBalance = async () => {
    setBalanceLoading(true);
    try {
      const res = await axios.get(`${API()}/v1/disbursement/disbursements/balance`, { headers: authHeader() });
      setAzampayBalance(res.data?.data?.raw || null);
    } catch { setAzampayBalance(null); } finally { setBalanceLoading(false); }
  };

  useEffect(() => { fetchAccounts(); fetchBalance(); }, [fetchAccounts]);

  const flash = (msg: string) => { setSuccessMsg(msg); setTimeout(() => setSuccessMsg(''), 5000); };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.bankName) e.bankName = 'Select a provider';
    if (!form.accountHolderName.trim()) e.accountHolderName = 'Account holder name is required';
    if (!form.accountNumber.trim()) e.accountNumber = 'Account number is required';
    else if (!/^[a-zA-Z0-9\-_.+]+$/.test(form.accountNumber.trim())) e.accountNumber = 'Invalid characters in account number';
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setFormErrors(errs); return; }
    setFormErrors({});
    setSaving(true);
    setError('');
    try {
      await axios.post(`${API()}/v1/disbursement/bank-accounts`, {
        bankName: form.bankName,
        accountNumber: form.accountNumber.trim(),
        accountHolderName: form.accountHolderName.trim(),
        branchCode: form.branchCode.trim() || undefined,
        swiftBic: form.swiftBic.trim() || undefined,
        country: 'RW',
        currency: 'RWF',
      }, { headers: authHeader() });
      setForm({ bankName: '', accountNumber: '', accountHolderName: '', branchCode: '', swiftBic: '' });
      flash('Bank account registered successfully!');
      fetchAccounts();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to register bank account');
    } finally {
      setSaving(false);
    }
  };

  const verify = async (id: string) => {
    setVerifyingId(id);
    setError('');
    try {
      const res = await axios.post(`${API()}/v1/disbursement/bank-accounts/${id}/verify`, {}, { headers: authHeader() });
      flash(`Verified as: ${res.data?.data?.verifiedName || 'OK'}`);
      fetchAccounts();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Verification failed');
    } finally {
      setVerifyingId(null); }
  };

  const setPrimary = async (id: string) => {
    setError('');
    try {
      await axios.post(`${API()}/v1/disbursement/bank-accounts/${id}/primary`, {}, { headers: authHeader() });
      flash('Primary account updated');
      fetchAccounts();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to set primary');
    }
  };

  const deleteAccount = async (id: string) => {
    setDeletingId(id);
    setError('');
    try {
      await axios.delete(`${API()}/v1/disbursement/bank-accounts/${id}`, { headers: authHeader() });
      flash('Bank account removed');
      setConfirmDelete(null);
      fetchAccounts();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to remove account');
    } finally {
      setDeletingId(null);
    }
  };

  const primaryBank = accounts.find(a => a.isPrimary);
  const selectedProvider = PROVIDERS.find(p => p.code === form.bankName);
  const isMNO = selectedProvider?.type === 'MNO';

  return (
    <>
      <Pageheader currentpage="Bank Details" activepage="New MoMo Collections" mainpage="Bank Details" />

      <div className="space-y-5">

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl p-6 text-white shadow-lg">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <i className="bx bx-buildings text-3xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold mb-1">Disbursement Bank Accounts</h2>
              <p className="text-white/75 text-sm leading-relaxed">
                Register your MoMo or bank account to receive payouts via AzamPay Disbursement.
                Accounts must be verified before funds can be transferred.
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <p className="text-xs text-white/60">Registered by</p>
              <p className="text-sm font-semibold">{userData?.name || userData?.username || '—'}</p>
              <span className="text-xs bg-white/15 px-2 py-0.5 rounded-full">ID: {userData?.id || '—'}</span>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <div className="rounded-xl p-4 flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
            <i className="bx bx-x-circle text-xl text-red-500 mt-0.5" />
            <p className="text-sm text-red-700 dark:text-red-300 flex-1">{error}</p>
            <button onClick={() => setError('')}><i className="bx bx-x text-gray-400" /></button>
          </div>
        )}
        {successMsg && (
          <div className="rounded-xl p-4 flex items-start gap-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700">
            <i className="bx bx-check-circle text-xl text-emerald-500 mt-0.5" />
            <p className="text-sm text-emerald-700 dark:text-emerald-300">{successMsg}</p>
          </div>
        )}

        {/* KPI row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-l-4 border-indigo-500 p-5 shadow-sm">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Registered Accounts</p>
            <p className="text-3xl font-extrabold text-gray-900 dark:text-white">{accounts.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-l-4 border-emerald-500 p-5 shadow-sm">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Primary Account</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{primaryBank ? PROVIDERS.find(p => p.code === primaryBank.bankName)?.label || primaryBank.bankName : '—'}</p>
            <p className="text-xs text-gray-400 truncate">{primaryBank?.accountNumber || 'None set'}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-l-4 border-amber-500 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Disbursement Wallet</p>
              <button onClick={fetchBalance} disabled={balanceLoading} className="text-indigo-500 hover:text-indigo-700 text-xs">
                <i className={`bx bx-refresh ${balanceLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
              {azampayBalance ? `${parseFloat(azampayBalance).toLocaleString()} RWF` : '—'}
            </p>
            <p className="text-xs text-gray-400">Disbursement wallet</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">

          {/* ── Register Account Form ── */}
          <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
              <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                <i className="bx bx-plus text-indigo-600 dark:text-indigo-400 text-lg" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Register Account</h3>
                <p className="text-xs text-gray-400">MoMo or bank account for disbursements</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Provider */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Provider <span className="text-red-500">*</span></label>
                <select value={form.bankName} onChange={e => { setForm(f => ({ ...f, bankName: e.target.value })); setFormErrors(er => ({ ...er, bankName: '' })); }} className={inputCls}>
                  <option value="">Select provider…</option>
                  <optgroup label="Mobile Money">
                    {PROVIDERS.filter(p => p.type === 'MNO').map(p => <option key={p.code} value={p.code}>{p.label}</option>)}
                  </optgroup>
                  <optgroup label="Banks">
                    {PROVIDERS.filter(p => p.type === 'Bank').map(p => <option key={p.code} value={p.code}>{p.label}</option>)}
                  </optgroup>
                </select>
                {formErrors.bankName && <p className="mt-1 text-xs text-red-500">{formErrors.bankName}</p>}
              </div>

              {/* Account Number */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  {isMNO ? 'Phone Number (MSISDN)' : 'Account Number'} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <i className="bx bx-hash absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                  <input
                    type="text" value={form.accountNumber}
                    onChange={e => { setForm(f => ({ ...f, accountNumber: e.target.value })); setFormErrors(er => ({ ...er, accountNumber: '' })); }}
                    placeholder={isMNO ? '250781916866' : 'Bank account number'}
                    className={`${inputCls} pl-9`}
                  />
                </div>
                {isMNO && <p className="text-xs text-gray-400 mt-1">Include country code: 250…</p>}
                {formErrors.accountNumber && <p className="mt-1 text-xs text-red-500">{formErrors.accountNumber}</p>}
              </div>

              {/* Account Holder Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Account Holder Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <i className="bx bx-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                  <input type="text" value={form.accountHolderName}
                    onChange={e => { setForm(f => ({ ...f, accountHolderName: e.target.value })); setFormErrors(er => ({ ...er, accountHolderName: '' })); }}
                    placeholder="Full name on account"
                    className={`${inputCls} pl-9`}
                  />
                </div>
                {formErrors.accountHolderName && <p className="mt-1 text-xs text-red-500">{formErrors.accountHolderName}</p>}
              </div>

              {/* Branch Code (banks only) */}
              {!isMNO && form.bankName && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Branch Code</label>
                    <input type="text" value={form.branchCode} onChange={e => setForm(f => ({ ...f, branchCode: e.target.value }))}
                      placeholder="Optional" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Swift/BIC</label>
                    <input type="text" value={form.swiftBic} onChange={e => setForm(f => ({ ...f, swiftBic: e.target.value }))}
                      placeholder="Optional" className={inputCls} />
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-700/30">
                <i className="bx bx-info-circle text-amber-500 text-sm flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                  After adding, click <strong>Verify</strong> to confirm the account via AzamPay NameLookup. Disbursements require a verified account.
                </p>
              </div>

              <button type="submit" disabled={saving} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-sm font-semibold transition-colors">
                {saving ? (<><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Saving…</>) : (<><i className="bx bx-plus" />Add Account</>)}
              </button>
            </form>
          </div>

          {/* ── Accounts List ── */}
          <div className="xl:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                  <i className="bx bx-list-ul text-indigo-600 dark:text-indigo-400 text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Registered Accounts</h3>
                  <p className="text-xs text-gray-400">{accounts.length} account{accounts.length !== 1 ? 's' : ''} on file</p>
                </div>
              </div>
              <button onClick={fetchAccounts} className="text-indigo-500 hover:text-indigo-700 text-sm">
                <i className="bx bx-refresh" />
              </button>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16">
                <svg className="w-8 h-8 animate-spin text-indigo-400" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              </div>
            ) : accounts.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 px-6">
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                  <i className="bx bx-buildings text-3xl text-gray-300 dark:text-gray-600" />
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">No accounts yet</p>
                <p className="text-xs text-gray-400 text-center">Add a MoMo or bank account to receive disbursements.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {accounts.map(account => {
                  const provLabel = PROVIDERS.find(p => p.code === account.bankName)?.label || account.bankName;
                  return (
                    <div key={account.id} className="p-5 hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition-colors">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="bx bx-buildings text-indigo-600 dark:text-indigo-400 text-lg" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-1.5 mb-1">
                              <p className="text-sm font-bold text-gray-800 dark:text-gray-100">{provLabel}</p>
                              {account.isPrimary ? (
                                <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400">★ Primary</span>
                              ) : null}
                              {account.isVerified ? (
                                <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                                  <i className="bx bx-check mr-0.5" />Verified
                                </span>
                              ) : (
                                <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Unverified</span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{account.accountHolderName}</p>
                            {account.verifiedName && account.verifiedName !== account.accountHolderName && (
                              <p className="text-xs text-emerald-600 dark:text-emerald-400">Verified as: {account.verifiedName}</p>
                            )}
                            <p className="font-mono text-xs text-gray-700 dark:text-gray-300 mt-0.5">{account.accountNumber}</p>
                            <p className="text-xs text-gray-400 mt-1">Added {new Date(account.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {!account.isVerified && (
                            <button onClick={() => verify(account.id)} disabled={verifyingId === account.id}
                              className="p-2 rounded-xl text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 disabled:opacity-50 transition-colors text-xs font-medium" title="Verify account">
                              {verifyingId === account.id ? <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> : <i className="bx bx-check-shield text-lg" />}
                            </button>
                          )}
                          {!account.isPrimary && (
                            <button onClick={() => setPrimary(account.id)}
                              className="p-2 rounded-xl text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 transition-colors" title="Set as primary">
                              <i className="bx bx-star text-lg" />
                            </button>
                          )}
                          {!account.isPrimary && (
                            <button onClick={() => setConfirmDelete(account)} disabled={deletingId === account.id}
                              className="p-2 rounded-xl text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 disabled:opacity-50 transition-colors" title="Remove">
                              <i className="bx bx-trash text-lg" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {accounts.length > 0 && (
              <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  <i className="bx bx-info-circle mr-1" />
                  Verify each account via AzamPay before initiating disbursements. The primary account is used for auto-disbursements.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setConfirmDelete(null)} />
          <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-red-500 to-red-500" />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-trash text-red-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Remove Account</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">This cannot be undone</p>
                </div>
              </div>
              <div className="mb-5 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-200 dark:border-gray-700 space-y-2">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{confirmDelete.bankName}</p>
                <p className="font-mono text-sm text-gray-700 dark:text-gray-300">{confirmDelete.accountNumber}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setConfirmDelete(null)} className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Cancel</button>
                <button onClick={() => deleteAccount(confirmDelete.id)} disabled={deletingId === confirmDelete.id}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60">
                  {deletingId === confirmDelete.id ? 'Removing…' : <><i className="bx bx-trash" />Remove</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewMomoBankDetails;
