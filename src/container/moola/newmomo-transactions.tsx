import React, { useEffect, useState, useCallback, FC, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';
const getToken  = () => { try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; } };
const getAgId   = () => { try { const d = JSON.parse(localStorage.getItem('userData') || 'null'); return d?.id ?? null; } catch { return null; } };
const hdrs      = () => ({ Authorization: `Bearer ${getToken()}`, 'Content-Type': 'application/json' });

interface Fee { fee_type: 'PERCENTAGE' | 'FLAT'; fee_amount: number; serviceName?: string; }
interface Tx {
  id?: number;
  createdAt: string;
  updatedAt?: string;
  customerName: string;
  customerAccountNumber: string;
  amount: number;
  currencyCode?: string;
  status: string;
  message?: string;
  provider: string;
  referenceId: string;
  operationReferenceId?: string;
  transactionId?: string;
  agentId?: string;
  callbackUrl?: string;
}

const PERIODS = [
  { label: 'Today', value: 'daily' },
  { label: 'This Week', value: 'weekly' },
  { label: 'This Month', value: 'monthly' },
  { label: 'This Quarter', value: 'quarterly' },
  { label: 'This Year', value: 'yearly' },
  { label: 'All Time', value: 'all' },
];

function dateRange(filter: string) {
  const now = new Date(); const end = now.toISOString(); let start: string | undefined;
  switch (filter) {
    case 'daily':     start = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString(); break;
    case 'weekly':    { const d = new Date(now); d.setDate(now.getDate() - now.getDay()); start = d.toISOString(); break; }
    case 'monthly':   start = new Date(now.getFullYear(), now.getMonth(), 1).toISOString(); break;
    case 'quarterly': start = new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1).toISOString(); break;
    case 'yearly':    start = new Date(now.getFullYear(), 0, 1).toISOString(); break;
  }
  return { start, end };
}

function calcFee(fee: Fee | null, amount: number) {
  const f = fee ? (fee.fee_type === 'PERCENTAGE' ? amount * (fee.fee_amount / 100) : fee.fee_amount) : amount * 0.015;
  return { feeAmt: parseFloat(f.toFixed(2)), netAmt: parseFloat(Math.max(0, amount - f).toFixed(2)) };
}

const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

function statusCfg(s: string) {
  const v = (s || '').toLowerCase();
  if (v.includes('success') || v.includes('complete'))
    return { label: 'Success', dot: 'bg-emerald-500', cls: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700/50' };
  if (v.includes('fail') || v.includes('error'))
    return { label: 'Failed',  dot: 'bg-red-500',     cls: 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700/50' };
  return   { label: 'Pending', dot: 'bg-amber-400',   cls: 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50' };
}

function provCfg(p: string) {
  const v = (p || '').toUpperCase();
  if (v.includes('MTN'))    return { label: 'MTN',    cls: 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-700/50' };
  if (v.includes('AIRTEL')) return { label: 'Airtel', cls: 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-700/50' };
  return { label: v || '—', cls: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600' };
}

const CopyBtn: FC<{ text: string }> = ({ text }) => {
  const [ok, setOk] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text).then(() => { setOk(true); setTimeout(() => setOk(false), 1500); }); }}
      className="ml-1 text-gray-300 hover:text-indigo-500 transition-colors flex-shrink-0">
      <i className={`bx ${ok ? 'bx-check text-emerald-500' : 'bx-copy'} text-sm`} />
    </button>
  );
};

const SkRow = () => (
  <tr className="border-b border-gray-50 dark:border-gray-700/40">
    {[22, 38, 50, 28, 32, 25, 22, 48, 40, 30, 18].map((w, i) => (
      <td key={i} className="px-4 py-4">
        <div className="h-3 rounded-full bg-gray-100 dark:bg-gray-700/60 animate-pulse" style={{ width: `${w}%` }} />
        {(i === 2 || i === 8) && <div className="h-2.5 rounded-full bg-gray-100 dark:bg-gray-700/60 animate-pulse mt-1.5 w-2/3" />}
      </td>
    ))}
  </tr>
);

const PAGE_SIZE = 15;

const NewMomoAgentTransactions: FC = () => {
  const [all, setAll]               = useState<Tx[]>([]);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState('');
  const [fee, setFee]               = useState<Fee | null>(null);
  const [feeLoading, setFeeLoading] = useState(false);
  const [period, setPeriod]         = useState('monthly');
  const [statusF, setStatusF]       = useState('');
  const [provF, setProvF]           = useState('');
  const [search, setSearch]         = useState('');
  const [page, setPage]             = useState(1);
  const [downloading, setDl]        = useState(false);
  const [syncing, setSyncing]       = useState<string | null>(null);

  // Fetch service fee once
  useEffect(() => {
    const id = getAgId(); if (!id) return;
    setFeeLoading(true);
    axios.get(`${API()}/v1/momo/service-fee/agent/${id}`, { headers: hdrs() })
      .then(r => setFee(r.data?.data ?? null)).catch(() => {}).finally(() => setFeeLoading(false));
  }, []);

  // Fetch ALL transactions for the selected server-side filters; search + pagination are client-side
  const fetchAll = useCallback(async () => {
    setLoading(true); setError('');
    try {
      const { start, end } = dateRange(period);
      const params: Record<string, any> = { limit: 5000, offset: 0 };
      if (start && period !== 'all') { params.startDate = start; params.endDate = end; }
      if (statusF) params.status   = statusF;
      if (provF)   params.provider = provF;
      const res = await axios.get(`${API()}/v1/momo/collection/agent/transactions`, { headers: hdrs(), params });
      setAll(res.data?.data ?? []);
      setPage(1);
    } catch { setError('Failed to load transactions.'); }
    finally { setLoading(false); }
  }, [period, statusF, provF]);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  // Client-side search filter
  const filtered = useMemo(() => {
    if (!search.trim()) return all;
    const q = search.toLowerCase();
    return all.filter(t =>
      (t.customerName          || '').toLowerCase().includes(q) ||
      (t.customerAccountNumber || '').toLowerCase().includes(q) ||
      (t.referenceId           || '').toLowerCase().includes(q) ||
      (t.transactionId         || '').toLowerCase().includes(q),
    );
  }, [all, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage   = Math.min(page, totalPages);
  const rows       = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  // Keep page in bounds when filtered set shrinks
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [filtered.length]);

  // KPI stats over ALL filtered results (not just current page)
  const stats = useMemo(() => {
    let success = 0, pending = 0, failed = 0, gross = 0, fees = 0;
    filtered.forEach(t => {
      const v = (t.status || '').toLowerCase();
      const ok = v.includes('success') || v.includes('complete');
      if (ok) success++; else if (v.includes('fail') || v.includes('error')) failed++; else pending++;
      const a = Number(t.amount || 0); gross += a;
      if (ok) fees += calcFee(fee, a).feeAmt;
    });
    return { success, pending, failed, gross, fees, total: filtered.length };
  }, [filtered, fee]);

  const syncStatus = async (referenceId: string) => {
    setSyncing(referenceId);
    try {
      await axios.post(`${API()}/v1/momo/collection/${referenceId}/check-status`, {}, { headers: hdrs() });
      await fetchAll();
    } catch { } finally { setSyncing(null); }
  };

  const exportCSV = async () => {
    setDl(true);
    try {
      const rows = filtered.length ? filtered : all;
      if (!rows.length) { alert('No data to export.'); return; }
      const header = ['Date', 'Customer Name', 'Phone', 'Amount', 'Fee', 'Net', 'Currency', 'Status', 'Provider', 'Reference ID', 'Transaction ID'];
      const data = rows.map(t => {
        const { feeAmt, netAmt } = calcFee(fee, Number(t.amount));
        return [new Date(t.createdAt).toLocaleString(), t.customerName, t.customerAccountNumber, t.amount, feeAmt, netAmt, t.currencyCode || 'RWF', t.status, t.provider, t.referenceId, t.transactionId || ''];
      });
      const csv = '﻿' + [header, ...data].map(r => r.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
      const a = Object.assign(document.createElement('a'), {
        href: URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' })),
        download: `transactions-${period}-${new Date().toISOString().slice(0, 10)}.csv`,
      });
      document.body.appendChild(a); a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(a.href); }, 150);
    } catch { alert('Export failed.'); } finally { setDl(false); }
  };

  const feeLabel = fee
    ? fee.fee_type === 'PERCENTAGE' ? `${fee.fee_amount}%` : `${fmt(fee.fee_amount)} RWF flat`
    : '1.5% (default)';

  const successRate = stats.total ? Math.round((stats.success / stats.total) * 100) : 0;

  // Page number list for pagination
  const pageNums: number[] = [];
  for (let i = Math.max(1, safePage - 2); i <= Math.min(totalPages, safePage + 2); i++) pageNums.push(i);

  const PgBtn: FC<{ onClick: () => void; disabled: boolean; children: React.ReactNode; active?: boolean }> =
    ({ onClick, disabled, children, active }) => (
      <button onClick={onClick} disabled={disabled}
        className={`min-w-[34px] h-[34px] px-1.5 flex items-center justify-center rounded-lg border text-xs font-semibold transition-colors disabled:opacity-30 disabled:cursor-not-allowed
          ${active
            ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
            : 'border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700'
          }`}>
        {children}
      </button>
    );

  return (
    <>
      <Pageheader currentpage="My Transactions" activepage="New MoMo Collections" mainpage="Transactions" />

      <div className="flex flex-col gap-5">

        {/* ── Hero ── */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl p-6 text-white shadow-xl">
          <div className="absolute -top-14 -right-14 w-52 h-52 bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-receipt text-2xl" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">MoMo Transactions</h1>
                  <p className="text-white/60 text-xs mt-0.5">All collections on your agent account</p>
                </div>
              </div>
              {!feeLoading && (
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mt-1 ${fee ? 'bg-white/20' : 'bg-white/10 border border-white/20'}`}>
                  <i className="bx bx-badge-check text-sm" />
                  Fee: {feeLabel}
                  {fee?.serviceName && <span className="opacity-70">· {fee.serviceName}</span>}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button onClick={exportCSV} disabled={downloading || loading}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold rounded-xl border border-white/20 transition-colors disabled:opacity-50">
                {downloading
                  ? <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                  : <i className="bx bx-download text-base" />}
                Export CSV
              </button>
              <Link to={`${import.meta.env.BASE_URL}moola/new-momo/collect`}
                className="flex items-center gap-2 px-4 py-2.5 bg-white text-indigo-700 text-sm font-bold rounded-xl shadow hover:bg-white/90 transition-colors">
                <i className="bx bx-plus text-lg" /> New Collection
              </Link>
            </div>
          </div>
        </div>

        {/* ── KPI cards ── */}
        {!loading && !error && stats.total > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3">
            {[
              { label: 'Total', value: stats.total.toLocaleString(), sub: PERIODS.find(p => p.value === period)?.label, icon: 'bx bx-list-ul', bar: 'from-indigo-500 to-indigo-600', iconCls: 'text-indigo-600', iconBg: 'bg-indigo-50 dark:bg-indigo-900/30' },
              { label: 'Successful', value: stats.success.toLocaleString(), sub: `${successRate}% success rate`, icon: 'bx bx-check-circle', bar: 'from-emerald-500 to-emerald-600', iconCls: 'text-emerald-600', iconBg: 'bg-emerald-50 dark:bg-emerald-900/30' },
              { label: 'Pending', value: stats.pending.toLocaleString(), sub: 'Awaiting confirmation', icon: 'bx bx-time-five', bar: 'from-amber-400 to-amber-500', iconCls: 'text-amber-600', iconBg: 'bg-amber-50 dark:bg-amber-900/30' },
              { label: 'Gross (RWF)', value: fmt(stats.gross), sub: 'Before fees', icon: 'bx bx-wallet-alt', bar: 'from-indigo-500 to-indigo-600', iconCls: 'text-indigo-600', iconBg: 'bg-indigo-50 dark:bg-indigo-900/30' },
              { label: 'Total Fees', value: fmt(stats.fees), sub: `Rate: ${feeLoading ? '…' : feeLabel}`, icon: 'bx bx-dollar-circle', bar: 'from-indigo-500 to-indigo-600', iconCls: 'text-indigo-600', iconBg: 'bg-indigo-50 dark:bg-indigo-900/30' },
            ].map(c => (
              <div key={c.label} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-1 bg-gradient-to-r ${c.bar}`} />
                <div className="p-4 flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <i className={`${c.icon} text-xl ${c.iconCls}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{c.label}</p>
                    <p className="text-xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight truncate mt-0.5">{c.value}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 truncate">{c.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Filters ── */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Filters</p>
            <button onClick={fetchAll} className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              <i className={`bx bx-refresh text-sm ${loading ? 'animate-spin' : ''}`} /> Refresh
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {PERIODS.map(p => (
              <button key={p.value} onClick={() => { setPeriod(p.value); setPage(1); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${period === p.value
                  ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300/40'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}>
                {p.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input type="text" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
                placeholder="Search name, phone, reference…"
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition" />
            </div>
            <select value={statusF} onChange={e => { setStatusF(e.target.value); setPage(1); }}
              className="px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition">
              <option value="">All Statuses</option>
              <option value="success">Success</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
            <select value={provF} onChange={e => { setProvF(e.target.value); setPage(1); }}
              className="px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition">
              <option value="">All Providers</option>
              <option value="MTN">MTN</option>
              <option value="AIRTEL">Airtel</option>
            </select>
          </div>
          {search && (
            <p className="text-xs text-gray-400">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "<span className="font-semibold text-gray-600 dark:text-gray-300">{search}</span>"
              <button onClick={() => { setSearch(''); setPage(1); }} className="ml-2 text-indigo-500 hover:underline">Clear</button>
            </p>
          )}
        </div>

        {/* ── Error ── */}
        {error && (
          <div className="flex items-center gap-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 px-4 py-3 text-sm">
            <i className="bx bx-error-circle text-red-500 text-xl flex-shrink-0" />
            <span className="flex-1 text-red-700 dark:text-red-400">{error}</span>
            <button onClick={fetchAll} className="font-semibold text-red-600 hover:underline">Retry</button>
          </div>
        )}

        {/* ── Table card ── */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">

          {/* Table toolbar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-900/30">
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Transaction Records</p>
              <p className="text-xs text-gray-400 mt-0.5">
                {loading ? 'Loading…' : filtered.length === 0 ? 'No results' : `${(safePage - 1) * PAGE_SIZE + 1}–${Math.min(safePage * PAGE_SIZE, filtered.length)} of ${filtered.length}`}
              </p>
            </div>
            {!loading && filtered.length > 0 && (
              <span className="text-xs text-gray-400 tabular-nums">Page {safePage} / {totalPages}</span>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-50/50 dark:bg-gray-900/20 border-b border-gray-100 dark:border-gray-700/80">
                  {[
                    { h: '#',           align: 'center', w: 'w-10' },
                    { h: 'Date',        align: 'left' },
                    { h: 'Customer',    align: 'left' },
                    { h: 'Amount',      align: 'right' },
                    { h: 'Fee / Net',   align: 'right' },
                    { h: 'Status',      align: 'left' },
                    { h: 'Message',     align: 'left' },
                    { h: 'Provider',    align: 'left' },
                    { h: 'References',  align: 'left' },
                    { h: 'Updated',     align: 'left' },
                    { h: 'Sync',        align: 'center', w: 'w-14' },
                  ].map(({ h, align, w }) => (
                    <th key={h} className={`px-4 py-3 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest whitespace-nowrap text-${align} ${w ?? ''}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-700/30">
                {loading
                  ? Array.from({ length: 8 }).map((_, i) => <SkRow key={i} />)
                  : rows.length === 0
                    ? (
                      <tr>
                        <td colSpan={11} className="py-20 text-center">
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700/50 rounded-2xl flex items-center justify-center">
                              <i className="bx bx-receipt text-4xl text-gray-300 dark:text-gray-600" />
                            </div>
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">No transactions found</p>
                            <p className="text-xs text-gray-400">
                              {search ? 'Try a different search term' : 'Adjust filters or '}
                              {!search && (
                                <Link to={`${import.meta.env.BASE_URL}moola/new-momo/collect`} className="text-indigo-600 hover:underline font-medium">
                                  start a new collection
                                </Link>
                              )}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )
                    : rows.map((tx, idx) => {
                        const amt           = Number(tx.amount || 0);
                        const { feeAmt, netAmt } = calcFee(fee, amt);
                        const isOk          = (tx.status || '').toLowerCase().includes('success') || (tx.status || '').toLowerCase().includes('complete');
                        const sc            = statusCfg(tx.status);
                        const pc            = provCfg(tx.provider);
                        const rowNum        = (safePage - 1) * PAGE_SIZE + idx + 1;
                        return (
                          <tr key={tx.id ?? idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">

                            {/* # */}
                            <td className="px-4 py-3.5 text-center">
                              <span className="text-[11px] text-gray-400 dark:text-gray-500 tabular-nums font-medium">{rowNum}</span>
                            </td>

                            {/* Date created */}
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 leading-snug">
                                {new Date(tx.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                              </p>
                              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                                {new Date(tx.createdAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                              </p>
                            </td>

                            {/* Customer */}
                            <td className="px-4 py-3.5 max-w-[200px]">
                              <p className="font-semibold text-sm text-gray-800 dark:text-gray-100 truncate leading-snug">{tx.customerName || '—'}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <i className="bx bx-phone text-[11px] text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                <span className="font-mono text-[11px] text-gray-500 dark:text-gray-400 truncate">{tx.customerAccountNumber}</span>
                                <CopyBtn text={tx.customerAccountNumber} />
                              </div>
                            </td>

                            {/* Amount */}
                            <td className="px-4 py-3.5 text-right whitespace-nowrap">
                              <p className="text-sm font-extrabold text-gray-900 dark:text-white tabular-nums leading-snug">{fmt(amt)}</p>
                              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{tx.currencyCode || 'RWF'}</p>
                            </td>

                            {/* Fee / Net */}
                            <td className="px-4 py-3.5 text-right whitespace-nowrap">
                              <p className="text-[11px] tabular-nums leading-snug text-red-500 dark:text-red-400">
                                <span className="text-gray-400 dark:text-gray-500 text-[10px] mr-0.5">fee</span>−{fmt(feeAmt)}
                              </p>
                              <p className={`text-sm font-bold tabular-nums mt-0.5 ${isOk ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-300 dark:text-gray-600'}`}>
                                {fmt(netAmt)}
                              </p>
                            </td>

                            {/* Status */}
                            <td className="px-4 py-3.5">
                              <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${sc.cls}`}>
                                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${sc.dot}`} />
                                {sc.label}
                              </span>
                            </td>

                            {/* Message */}
                            <td className="px-4 py-3.5 max-w-[200px]">
                              {tx.message ? (
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug line-clamp-2" title={tx.message}>
                                  {tx.message}
                                </p>
                              ) : (
                                <span className="text-[11px] text-gray-300 dark:text-gray-600">—</span>
                              )}
                            </td>

                            {/* Provider */}
                            <td className="px-4 py-3.5">
                              <span className={`inline-flex text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${pc.cls}`}>
                                {pc.label}
                              </span>
                            </td>

                            {/* References — referenceId + operationReferenceId + transactionId */}
                            <td className="px-4 py-3.5 max-w-[210px]">
                              <div className="flex items-center gap-0.5 mb-0.5">
                                <span className="text-[9px] font-bold text-gray-300 dark:text-gray-600 uppercase tracking-widest w-7 flex-shrink-0">Ref</span>
                                <span className="font-mono text-[11px] text-gray-600 dark:text-gray-300 truncate flex-1" title={tx.referenceId}>{tx.referenceId}</span>
                                <CopyBtn text={tx.referenceId} />
                              </div>
                              {tx.operationReferenceId && (
                                <div className="flex items-center gap-0.5 mb-0.5">
                                  <span className="text-[9px] font-bold text-gray-300 dark:text-gray-600 uppercase tracking-widest w-7 flex-shrink-0">Op</span>
                                  <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 truncate flex-1" title={tx.operationReferenceId}>{tx.operationReferenceId}</span>
                                  <CopyBtn text={tx.operationReferenceId} />
                                </div>
                              )}
                              {tx.transactionId && (
                                <div className="flex items-center gap-0.5">
                                  <span className="text-[9px] font-bold text-gray-300 dark:text-gray-600 uppercase tracking-widest w-7 flex-shrink-0">Tx</span>
                                  <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 truncate flex-1" title={tx.transactionId}>{tx.transactionId}</span>
                                  <CopyBtn text={tx.transactionId} />
                                </div>
                              )}
                            </td>

                            {/* Updated at */}
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              {tx.updatedAt ? (
                                <>
                                  <p className="text-[11px] text-gray-600 dark:text-gray-300 leading-snug">
                                    {new Date(tx.updatedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                                  </p>
                                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
                                    {new Date(tx.updatedAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                  </p>
                                </>
                              ) : (
                                <span className="text-[11px] text-gray-300 dark:text-gray-600">—</span>
                              )}
                            </td>

                            {/* Sync */}
                            <td className="px-4 py-3.5 text-center">
                              <button onClick={() => syncStatus(tx.referenceId)} disabled={syncing === tx.referenceId}
                                title="Sync status from provider"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 disabled:opacity-30 transition-colors">
                                {syncing === tx.referenceId
                                  ? <svg className="animate-spin w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                                  : <i className="bx bx-refresh text-base" />}
                              </button>
                            </td>

                          </tr>
                        );
                      })
                }
              </tbody>
            </table>
          </div>

          {/* ── Pagination ── */}
          {!loading && filtered.length > PAGE_SIZE && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-gray-100 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-900/30">
              <p className="text-xs text-gray-400">
                Showing{' '}
                <span className="font-bold text-gray-700 dark:text-gray-200">{(safePage - 1) * PAGE_SIZE + 1}</span>
                {' – '}
                <span className="font-bold text-gray-700 dark:text-gray-200">{Math.min(safePage * PAGE_SIZE, filtered.length)}</span>
                {' of '}
                <span className="font-bold text-gray-700 dark:text-gray-200">{filtered.length}</span>
              </p>

              <div className="flex items-center gap-1">
                {/* First */}
                <PgBtn onClick={() => setPage(1)} disabled={safePage === 1}>
                  <i className="bx bx-chevrons-left text-base" />
                </PgBtn>
                {/* Prev */}
                <PgBtn onClick={() => setPage(p => Math.max(1, p - 1))} disabled={safePage === 1}>
                  <i className="bx bx-chevron-left text-base" />
                </PgBtn>

                {pageNums[0] > 1 && (
                  <>
                    <PgBtn onClick={() => setPage(1)} disabled={false}>1</PgBtn>
                    {pageNums[0] > 2 && <span className="px-1 text-gray-400 text-xs">…</span>}
                  </>
                )}

                {pageNums.map(n => (
                  <PgBtn key={n} onClick={() => setPage(n)} disabled={false} active={n === safePage}>{n}</PgBtn>
                ))}

                {pageNums[pageNums.length - 1] < totalPages && (
                  <>
                    {pageNums[pageNums.length - 1] < totalPages - 1 && <span className="px-1 text-gray-400 text-xs">…</span>}
                    <PgBtn onClick={() => setPage(totalPages)} disabled={false}>{totalPages}</PgBtn>
                  </>
                )}

                {/* Next */}
                <PgBtn onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={safePage === totalPages}>
                  <i className="bx bx-chevron-right text-base" />
                </PgBtn>
                {/* Last */}
                <PgBtn onClick={() => setPage(totalPages)} disabled={safePage === totalPages}>
                  <i className="bx bx-chevrons-right text-base" />
                </PgBtn>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default NewMomoAgentTransactions;
