import React, { FC, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';
const tok = () => { try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; } };
const auth = () => ({ Authorization: `Bearer ${tok()}` });

type TxStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'REVERSED';

interface Transaction {
  id: string;
  agentId: string;
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
  amount: number;
  currency: string;
  status: TxStatus;
  externalReferenceId: string;
  pgReferenceId?: string;
  fspReferenceId?: string;
  processingFee: number;
  platformFee: number;
  description?: string;
  failureReason?: string;
  retryCount: number;
  transactionDate: string;
  completionDate?: string;
}

interface LogEntry {
  id: number;
  stage: string;
  message: string;
  createdAt: string;
}

const STATUS_STYLES: Record<TxStatus, { bg: string; text: string; icon: string }> = {
  PENDING:    { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-400', icon: 'bx-time' },
  PROCESSING: { bg: 'bg-indigo-100 dark:bg-indigo-900/30',  text: 'text-indigo-700 dark:text-indigo-400',   icon: 'bx-loader-alt animate-spin' },
  COMPLETED:  { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-400', icon: 'bx-check-circle' },
  FAILED:     { bg: 'bg-red-100 dark:bg-red-900/30',    text: 'text-red-700 dark:text-red-400',     icon: 'bx-x-circle' },
  REVERSED:   { bg: 'bg-gray-100 dark:bg-gray-700',     text: 'text-gray-600 dark:text-gray-400',   icon: 'bx-revision' },
};

const fmtAmt   = (n: number) => n.toLocaleString('en-RW', { maximumFractionDigits: 2 });
const fmtDate  = (s: string) => new Date(s).toLocaleDateString('en-RW', { day: '2-digit', month: 'short', year: 'numeric' });
const fmtTime  = (s: string) => new Date(s).toLocaleTimeString('en-RW', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

const StatusBadge: FC<{ status: TxStatus }> = ({ status }) => {
  const s = STATUS_STYLES[status] || STATUS_STYLES.PENDING;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${s.bg} ${s.text}`}>
      <i className={`bx ${s.icon} text-sm`} />
      {status}
    </span>
  );
};

const NewMomoDisbursementTransactions: FC = () => {
  const [txs, setTxs]             = useState<Transaction[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState('');

  const [filterStatus, setFilterStatus] = useState<TxStatus | ''>('');
  const [filterFrom, setFilterFrom]     = useState('');
  const [filterTo, setFilterTo]         = useState('');
  const [search, setSearch]             = useState('');
  const [page, setPage]                 = useState(1);
  const perPage = 15;

  const [selected, setSelected]   = useState<Transaction | null>(null);
  const [logs, setLogs]           = useState<LogEntry[]>([]);
  const [logsLoading, setLogsLoading] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true); setError('');
    try {
      const res = await axios.get(`${API()}/v1/disbursement/disbursements/agent`, { headers: auth() });
      setTxs(res.data?.data || []);
    } catch (e: any) {
      setError(e.response?.data?.message || 'Failed to load transactions');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  const openDetail = async (tx: Transaction) => {
    setSelected(tx);
    setLogs([]);
    setLogsLoading(true);
    try {
      const res = await axios.get(`${API()}/v1/disbursement/disbursements/${tx.id}/logs`, { headers: auth() });
      setLogs(res.data?.data || []);
    } catch (_) {}
    finally { setLogsLoading(false); }
  };

  const filtered = txs.filter(t => {
    if (filterStatus && t.status !== filterStatus) return false;
    if (filterFrom && new Date(t.transactionDate) < new Date(filterFrom)) return false;
    if (filterTo && new Date(t.transactionDate) > new Date(filterTo + 'T23:59:59')) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        t.externalReferenceId?.toLowerCase().includes(q) ||
        t.accountNumber?.toLowerCase().includes(q) ||
        t.accountHolderName?.toLowerCase().includes(q) ||
        t.bankName?.toLowerCase().includes(q) ||
        (t.pgReferenceId || '').toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  const stats = {
    total:      txs.length,
    completed:  txs.filter(t => t.status === 'COMPLETED').length,
    failed:     txs.filter(t => t.status === 'FAILED').length,
    processing: txs.filter(t => t.status === 'PROCESSING' || t.status === 'PENDING').length,
    totalAmt:   txs.filter(t => t.status === 'COMPLETED').reduce((s, t) => s + Number(t.amount), 0),
  };

  if (selected) {
    return (
      <>
        <Pageheader currentpage="Transaction Detail" activepage="New MoMo Collections" mainpage="Disbursements" />
        <div className="max-w-2xl mx-auto space-y-4">
          <button onClick={() => setSelected(null)} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
            <i className="bx bx-arrow-back text-lg" />Back to transactions
          </button>

          {/* Detail card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
            <div className={`h-1.5 ${selected.status === 'COMPLETED' ? 'bg-emerald-500' : selected.status === 'FAILED' ? 'bg-red-500' : selected.status === 'REVERSED' ? 'bg-gray-400' : 'bg-indigo-500'}`} />
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white">Disbursement Details</h2>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">{selected.externalReferenceId}</p>
                </div>
                <StatusBadge status={selected.status} />
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div><p className="text-gray-500 text-xs mb-0.5">Amount</p><p className="font-bold text-lg text-indigo-700 dark:text-indigo-300">{fmtAmt(selected.amount)} {selected.currency}</p></div>
                <div><p className="text-gray-500 text-xs mb-0.5">Provider</p><p className="font-semibold">{selected.bankName}</p></div>
                <div><p className="text-gray-500 text-xs mb-0.5">Recipient</p><p className="font-semibold">{selected.accountHolderName}</p></div>
                <div><p className="text-gray-500 text-xs mb-0.5">Account Number</p><p className="font-mono text-xs">{selected.accountNumber}</p></div>
                <div><p className="text-gray-500 text-xs mb-0.5">Date</p><p>{fmtDate(selected.transactionDate)}</p></div>
                <div><p className="text-gray-500 text-xs mb-0.5">Time</p><p>{fmtTime(selected.transactionDate)}</p></div>
                {selected.completionDate && <div><p className="text-gray-500 text-xs mb-0.5">Completed</p><p>{fmtDate(selected.completionDate)} {fmtTime(selected.completionDate)}</p></div>}
                <div><p className="text-gray-500 text-xs mb-0.5">Platform Fee</p><p>{fmtAmt(selected.platformFee)} RWF</p></div>
                {selected.pgReferenceId && <div className="col-span-2"><p className="text-gray-500 text-xs mb-0.5">Payment Reference</p><p className="font-mono text-xs break-all">{selected.pgReferenceId}</p></div>}
                {selected.fspReferenceId && <div className="col-span-2"><p className="text-gray-500 text-xs mb-0.5">FSP Reference (Settlement)</p><p className="font-mono text-xs break-all">{selected.fspReferenceId}</p></div>}
                {selected.description && <div className="col-span-2"><p className="text-gray-500 text-xs mb-0.5">Description</p><p>{selected.description}</p></div>}
                {selected.failureReason && <div className="col-span-2"><p className="text-gray-500 text-xs mb-0.5">Failure Reason</p><p className="text-red-600 dark:text-red-400">{selected.failureReason}</p></div>}
                {selected.retryCount > 0 && <div><p className="text-gray-500 text-xs mb-0.5">Retry Count</p><p>{selected.retryCount}</p></div>}
              </div>
            </div>
          </div>

          {/* Audit log */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
            <div className="px-5 py-3.5 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
              <i className="bx bx-list-check text-indigo-500 text-lg" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Audit Log</span>
              {logs.length > 0 && <span className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 px-2 py-0.5 rounded-full">{logs.length} events</span>}
            </div>
            <div className="divide-y divide-gray-50 dark:divide-gray-700/50 max-h-80 overflow-y-auto">
              {logsLoading ? (
                <div className="p-6 text-center">
                  <svg className="w-5 h-5 animate-spin text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                </div>
              ) : logs.length === 0 ? (
                <p className="p-6 text-sm text-gray-400 text-center">No audit log entries</p>
              ) : logs.map((l, i) => (
                <div key={i} className="flex items-start gap-3 px-5 py-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-0.5">{l.stage}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{l.message}</p>
                  </div>
                  <p className="text-xs text-gray-400 flex-shrink-0">{fmtTime(l.createdAt)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Pageheader currentpage="Disbursement History" activepage="New MoMo Collections" mainpage="Disbursements" />

      <div className="space-y-5">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total', value: stats.total, icon: 'bx-transfer-alt', color: 'indigo' },
            { label: 'Completed', value: stats.completed, icon: 'bx-check-circle', color: 'emerald' },
            { label: 'In Progress', value: stats.processing, icon: 'bx-loader-alt', color: 'blue' },
            { label: 'Failed', value: stats.failed, icon: 'bx-x-circle', color: 'red' },
          ].map(s => (
            <div key={s.label} className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex items-center gap-3`}>
              <div className={`w-10 h-10 rounded-xl bg-${s.color}-100 dark:bg-${s.color}-900/30 flex items-center justify-center flex-shrink-0`}>
                <i className={`bx ${s.icon} text-${s.color}-600 dark:text-${s.color}-400 text-xl`} />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800 dark:text-white">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {stats.totalAmt > 0 && (
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-600 rounded-xl p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <i className="bx bx-money text-2xl text-white/80" />
              <div>
                <p className="text-sm text-white/70">Total Disbursed (Completed)</p>
                <p className="text-2xl font-bold">{fmtAmt(stats.totalAmt)} RWF</p>
              </div>
            </div>
            <button onClick={fetch} className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors" title="Refresh">
              <i className="bx bx-refresh text-xl" />
            </button>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative">
              <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
                placeholder="Search ref, account, name…"
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition" />
            </div>
            <select value={filterStatus} onChange={e => { setFilterStatus(e.target.value as TxStatus | ''); setPage(1); }}
              className="py-2 px-3 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition">
              <option value="">All statuses</option>
              {(['PENDING','PROCESSING','COMPLETED','FAILED','REVERSED'] as TxStatus[]).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <input type="date" value={filterFrom} onChange={e => { setFilterFrom(e.target.value); setPage(1); }}
              className="py-2 px-3 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition" />
            <input type="date" value={filterTo} onChange={e => { setFilterTo(e.target.value); setPage(1); }}
              className="py-2 px-3 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition" />
          </div>
          {(filterStatus || filterFrom || filterTo || search) && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xs text-gray-500">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</span>
              <button onClick={() => { setFilterStatus(''); setFilterFrom(''); setFilterTo(''); setSearch(''); setPage(1); }}
                className="text-xs text-indigo-600 hover:underline">Clear filters</button>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          {loading ? (
            <div className="flex items-center justify-center gap-3 py-16 text-gray-500">
              <svg className="w-5 h-5 animate-spin text-indigo-400" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading transactions…
            </div>
          ) : error ? (
            <div className="flex items-center gap-3 py-12 justify-center text-red-500">
              <i className="bx bx-error text-xl" /><span className="text-sm">{error}</span>
              <button onClick={fetch} className="text-sm text-indigo-600 underline">Retry</button>
            </div>
          ) : paged.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-gray-400">
              <i className="bx bx-transfer-alt text-5xl text-gray-200 dark:text-gray-600" />
              <p className="text-sm">{filtered.length === 0 && txs.length > 0 ? 'No results match the current filters' : 'No disbursement transactions yet'}</p>
              {txs.length === 0 && <Link to="/moola/new-momo/disbursement" className="text-sm text-indigo-600 underline">Make your first disbursement</Link>}
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Date</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Reference</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Recipient</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Provider</th>
                      <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Amount</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Status</th>
                      <th className="px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                    {paged.map(tx => (
                      <tr key={tx.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap">
                          <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{fmtDate(tx.transactionDate)}</p>
                          <p className="text-[11px] text-gray-400">{fmtTime(tx.transactionDate)}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-mono text-xs text-gray-600 dark:text-gray-300 truncate max-w-[140px]">{tx.externalReferenceId}</p>
                          {tx.pgReferenceId && <p className="text-[10px] text-gray-400 font-mono truncate max-w-[140px]">{tx.pgReferenceId}</p>}
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-800 dark:text-gray-200 text-xs">{tx.accountHolderName}</p>
                          <p className="text-[11px] text-gray-400 font-mono">{tx.accountNumber}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                            <i className="bx bx-buildings text-base text-gray-400" />{tx.bankName}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <p className="font-bold text-gray-800 dark:text-white">{fmtAmt(tx.amount)}</p>
                          <p className="text-[11px] text-gray-400">{tx.currency}</p>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <StatusBadge status={tx.status} />
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button onClick={() => openDetail(tx)}
                            className="inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 font-medium transition-colors">
                            View <i className="bx bx-chevron-right text-base" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    Showing {(page - 1) * perPage + 1}–{Math.min(page * perPage, filtered.length)} of {filtered.length}
                  </p>
                  <div className="flex gap-1">
                    <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                      className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                      <i className="bx bx-chevron-left" />
                    </button>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pg = totalPages <= 5 ? i + 1 : Math.max(1, Math.min(totalPages - 4, page - 2)) + i;
                      return (
                        <button key={pg} onClick={() => setPage(pg)}
                          className={`w-8 h-8 rounded-lg border text-xs font-semibold transition-colors ${pg === page ? 'border-indigo-500 bg-indigo-600 text-white' : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                          {pg}
                        </button>
                      );
                    })}
                    <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                      className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                      <i className="bx bx-chevron-right" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NewMomoDisbursementTransactions;
