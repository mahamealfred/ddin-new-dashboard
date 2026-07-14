import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';
const getToken = () => { try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; } };
const authHeaders = () => ({ Authorization: `Bearer ${getToken()}` });

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

const PERIOD_PRESETS = [
  { label: 'Today',      days: 0 },
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 90 days', days: 90 },
];

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}
function isoDate(d: Date) { return d.toISOString().slice(0, 10); }

function statusConfig(status: string) {
  switch ((status || '').toLowerCase()) {
    case 'success': return { label: 'Success', cls: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' };
    case 'pending': return { label: 'Pending', cls: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' };
    case 'failed':  return { label: 'Failed',  cls: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' };
    default:        return { label: status || '—', cls: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300' };
  }
}

interface Tx {
  id: number;
  referenceId: string;
  operationReferenceId?: string;
  agentId?: number | string;
  agentName?: string;
  provider: string;
  customerName: string;
  customerAccountNumber: string;
  amount: string | number;
  currencyCode?: string;
  fee?: string | number;
  fee_type?: string;
  fee_amount?: string | number;
  status: string;
  message?: string;
  transactionId?: string | null;
  callbackUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}

const SkeletonRow: React.FC<{ cols: number }> = ({ cols }) => (
  <tr>
    {Array.from({ length: cols }).map((_, i) => (
      <td key={i} className="px-4 py-3">
        <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded animate-pulse" style={{ width: `${60 + (i * 17) % 40}%` }} />
      </td>
    ))}
  </tr>
);

const MomoCollectionsTransactions: React.FC = () => {
  // ── Filters ────────────────────────────────────────────────────────────────
  const [search, setSearch]         = useState('');
  const [statusFilter, setStatus]   = useState('');
  const [providerFilter, setProvider] = useState('');
  const [startDate, setStartDate]   = useState(isoDate(startOfToday()));
  const [endDate, setEndDate]       = useState(isoDate(new Date()));
  const [activePreset, setPreset]   = useState(0); // index into PERIOD_PRESETS

  // ── Pagination ─────────────────────────────────────────────────────────────
  const [page, setPage]     = useState(1);
  const [pageSize, setPageSize] = useState(25);

  // ── Data ───────────────────────────────────────────────────────────────────
  const [allRows, setAllRows]   = useState<Tx[]>([]);
  const [total, setTotal]       = useState(0);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [downloading, setDownloading] = useState(false);

  // ── Summary stats (from current server page for the KPI strip) ─────────────
  const successCount = useMemo(() => allRows.filter(r => r.status === 'success').length, [allRows]);
  const pendingCount = useMemo(() => allRows.filter(r => r.status === 'pending').length, [allRows]);
  const failedCount  = useMemo(() => allRows.filter(r => r.status === 'failed').length,  [allRows]);
  const totalVolume  = useMemo(() =>
    allRows.filter(r => r.status === 'success').reduce((s, r) => s + Number(r.amount || 0), 0),
    [allRows]
  );
  const totalFees = useMemo(() =>
    allRows.filter(r => r.status === 'success').reduce((s, r) => s + Number(r.fee || 0), 0),
    [allRows]
  );

  // ── Client-side text search applied on top of server results ──────────────
  const displayRows = useMemo(() => {
    if (!search.trim()) return allRows;
    const q = search.trim().toLowerCase();
    return allRows.filter(r =>
      r.customerName?.toLowerCase().includes(q) ||
      r.customerAccountNumber?.toLowerCase().includes(q) ||
      r.referenceId?.toLowerCase().includes(q) ||
      String(r.agentId || '').toLowerCase().includes(q) ||
      (r.transactionId || '').toLowerCase().includes(q)
    );
  }, [allRows, search]);

  // ── Fetch ──────────────────────────────────────────────────────────────────
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params: Record<string, any> = {
        limit: pageSize,
        offset: (page - 1) * pageSize,
      };
      if (statusFilter)   params.status   = statusFilter;
      if (providerFilter) params.provider = providerFilter;
      if (startDate) params.startDate = `${startDate}T00:00:00.000Z`;
      if (endDate)   params.endDate   = `${endDate}T23:59:59.999Z`;

      const res = await axios.get(`${API()}/v1/momo/collection`, {
        headers: authHeaders(),
        params,
      });

      setAllRows(res.data?.data || []);
      setTotal(res.data?.total ?? res.data?.count ?? 0);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch transactions. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, statusFilter, providerFilter, startDate, endDate]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // ── Preset selector ────────────────────────────────────────────────────────
  const applyPreset = (idx: number) => {
    setPreset(idx);
    setPage(1);
    const today = startOfToday();
    const end = new Date();
    if (idx === 0) {
      setStartDate(isoDate(today));
    } else {
      const start = new Date(today);
      start.setDate(today.getDate() - PERIOD_PRESETS[idx].days + 1);
      setStartDate(isoDate(start));
    }
    setEndDate(isoDate(end));
  };

  // ── CSV export ─────────────────────────────────────────────────────────────
  const downloadCSV = async () => {
    setDownloading(true);
    try {
      const params: Record<string, any> = { limit: 10000, offset: 0 };
      if (statusFilter)   params.status   = statusFilter;
      if (providerFilter) params.provider = providerFilter;
      if (startDate) params.startDate = `${startDate}T00:00:00.000Z`;
      if (endDate)   params.endDate   = `${endDate}T23:59:59.999Z`;

      const res = await axios.get(`${API()}/v1/momo/collection`, {
        headers: authHeaders(),
        params,
      });
      const rows: Tx[] = res.data?.data || [];
      if (!rows.length) { alert('No data to export.'); return; }

      const header = ['Date', 'Reference', 'Customer Name', 'Phone', 'Provider', 'Amount', 'Fee', 'Net Amount', 'Currency', 'Status', 'Message', 'Agent ID', 'Agent Name', 'Transaction ID'];
      const body = rows.map(r => {
        const amt = Number(r.amount || 0);
        const fee = Number(r.fee || 0);
        return [
          new Date(r.createdAt).toLocaleString(),
          r.referenceId,
          r.customerName,
          r.customerAccountNumber,
          r.provider,
          amt,
          fee,
          (amt - fee).toFixed(2),
          r.currencyCode || 'RWF',
          r.status,
          r.message || '',
          r.agentId || '',
          r.agentName || '',
          r.transactionId || '',
        ];
      });
      const csv = '﻿' + [header, ...body]
        .map(row => row.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(','))
        .join('\r\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `newmomo-collections-${startDate}-to-${endDate}.csv`;
      document.body.appendChild(a); a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
    } catch { alert('Export failed. Please try again.'); }
    finally { setDownloading(false); }
  };

  // ── Pagination helpers ─────────────────────────────────────────────────────
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pageNumbers: number[] = [];
  for (let i = Math.max(1, page - 2); i <= Math.min(totalPages, page + 2); i++) pageNumbers.push(i);

  return (
    <>
      <Pageheader currentpage="Transactions" activepage="MoMo Collections" mainpage="Transactions" />

      <div className="space-y-5">

        {/* ── KPI strip ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
          {[
            { label: 'Total Volume',  value: `${(totalVolume / 1000).toFixed(1)}K RWF`, icon: 'bx bx-money',        grad: 'from-violet-500 to-indigo-600' },
            { label: 'Total Fees',    value: `${(totalFees  / 1000).toFixed(1)}K RWF`,  icon: 'bx bx-receipt',      grad: 'from-pink-500 to-fuchsia-600'  },
            { label: 'Successful',    value: successCount.toLocaleString(),              icon: 'bx bx-check-circle', grad: 'from-emerald-400 to-green-600' },
            { label: 'Pending',       value: pendingCount.toLocaleString(),              icon: 'bx bx-time',         grad: 'from-amber-400 to-orange-500'  },
            { label: 'Failed',        value: failedCount.toLocaleString(),               icon: 'bx bx-x-circle',     grad: 'from-red-400 to-rose-600'      },
          ].map(k => (
            <div key={k.label} className="box !mb-0">
              <div className="box-body !p-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${k.grad} flex items-center justify-center flex-shrink-0`}>
                  <i className={`${k.icon} text-white text-xl`} />
                </div>
                <div>
                  <div className="text-[1.25rem] font-bold text-defaulttextcolor dark:text-defaulttextcolor/70 leading-tight">
                    {loading ? <span className="block w-12 h-5 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" /> : k.value}
                  </div>
                  <div className="text-[0.7rem] font-semibold text-[#8c9097] dark:text-white/50">{k.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Filter bar ─────────────────────────────────────────────────────── */}
        <div className="box !mb-0">
          <div className="box-body !p-4 space-y-3">
            {/* Period presets */}
            <div className="flex flex-wrap gap-2">
              {PERIOD_PRESETS.map((p, i) => (
                <button key={p.label} onClick={() => applyPreset(i)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activePreset === i
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600'
                  }`}>
                  {p.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 items-end">
              {/* Date range */}
              <div>
                <label className="block text-[0.72rem] text-[#8c9097] mb-1">From</label>
                <input type="date" value={startDate} max={endDate}
                  onChange={e => { setStartDate(e.target.value); setPage(1); setPreset(-1); }}
                  className="form-control !text-sm !py-2 !px-3 w-40" />
              </div>
              <div>
                <label className="block text-[0.72rem] text-[#8c9097] mb-1">To</label>
                <input type="date" value={endDate} min={startDate}
                  onChange={e => { setEndDate(e.target.value); setPage(1); setPreset(-1); }}
                  className="form-control !text-sm !py-2 !px-3 w-40" />
              </div>

              {/* Status */}
              <div>
                <label className="block text-[0.72rem] text-[#8c9097] mb-1">Status</label>
                <select value={statusFilter} onChange={e => { setStatus(e.target.value); setPage(1); }}
                  className="form-control !text-sm !py-2 !px-3 w-36">
                  <option value="">All Statuses</option>
                  <option value="success">Success</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
              </div>

              {/* Provider */}
              <div>
                <label className="block text-[0.72rem] text-[#8c9097] mb-1">Provider</label>
                <select value={providerFilter} onChange={e => { setProvider(e.target.value); setPage(1); }}
                  className="form-control !text-sm !py-2 !px-3 w-36">
                  <option value="">All Providers</option>
                  <option value="MTN">MTN</option>
                  <option value="AIRTEL">Airtel</option>
                </select>
              </div>

              {/* Search */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-[0.72rem] text-[#8c9097] mb-1">Search</label>
                <div className="relative">
                  <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <input type="text" value={search} placeholder="Customer, phone, reference…"
                    onChange={e => setSearch(e.target.value)}
                    className="form-control !text-sm !py-2 !pl-9 !pr-3" />
                </div>
              </div>

              {/* Page size */}
              <div>
                <label className="block text-[0.72rem] text-[#8c9097] mb-1">Per page</label>
                <select value={pageSize} onChange={e => { setPageSize(Number(e.target.value)); setPage(1); }}
                  className="form-control !text-sm !py-2 !px-3 w-24">
                  {PAGE_SIZE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              {/* Export */}
              <button onClick={downloadCSV} disabled={downloading || loading}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-colors self-end">
                {downloading
                  ? <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Exporting…</>
                  : <><i className="bx bx-download text-lg" />Export CSV</>}
              </button>
            </div>
          </div>
        </div>

        {/* ── Table ──────────────────────────────────────────────────────────── */}
        <div className="box !mb-0">
          <div className="box-header justify-between">
            <div className="box-title">
              {loading ? 'Loading…' : `${total.toLocaleString()} collection${total !== 1 ? 's' : ''}`}
              {search && ` · ${displayRows.length} match${displayRows.length !== 1 ? 'es' : ''}`}
            </div>
            <button onClick={fetchData} disabled={loading}
              className="inline-flex items-center gap-1.5 text-sm text-[#8c9097] hover:text-indigo-600 disabled:opacity-50 transition-colors">
              <i className={`bx bx-refresh text-lg ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
          <div className="box-body !p-0">
            <div className="overflow-x-auto">
              <table className="table min-w-full whitespace-nowrap text-[0.8rem]">
                <thead>
                  <tr className="border-b dark:border-defaultborder/10 bg-gray-50 dark:bg-gray-900/50">
                    {['Date & Time', 'Reference', 'Customer', 'Phone', 'Provider', 'Amount (RWF)', 'Fee (RWF)', 'Net (RWF)', 'Status', 'Agent', 'Tx ID'].map(h => (
                      <th key={h} className="!text-start !font-semibold !py-2.5 !px-4 text-[#8c9097] dark:text-white/50 text-[0.72rem] uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    Array.from({ length: Math.min(pageSize, 6) }).map((_, i) => <SkeletonRow key={i} cols={11} />)
                  ) : error ? (
                    <tr>
                      <td colSpan={11} className="!py-16 !px-4 text-center">
                        <div className="flex flex-col items-center gap-2 text-red-500">
                          <i className="bx bx-error-circle text-4xl" />
                          <p className="text-sm font-medium">{error}</p>
                          <button onClick={fetchData}
                            className="text-sm text-indigo-600 hover:underline font-medium">
                            Retry
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) : displayRows.length === 0 ? (
                    <tr>
                      <td colSpan={11} className="!py-16 !px-4 text-center">
                        <div className="flex flex-col items-center gap-2 text-[#8c9097] dark:text-white/50">
                          <i className="bx bx-transfer text-4xl" />
                          <p className="text-sm font-medium">No transactions found</p>
                          <p className="text-xs">Try adjusting the date range or filters</p>
                        </div>
                      </td>
                    </tr>
                  ) : displayRows.map((tx, idx) => {
                    const sc  = statusConfig(tx.status);
                    const amt = Number(tx.amount || 0);
                    const fee = Number(tx.fee || 0);
                    const net = amt - fee;
                    return (
                      <tr key={tx.id ?? idx}
                        className="border-b dark:border-defaultborder/10 hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-colors">
                        <td className="!py-2.5 !px-4 text-[#8c9097] dark:text-white/50">
                          {new Date(tx.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                          <div className="text-[0.65rem]">
                            {new Date(tx.createdAt).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>
                        <td className="!py-2.5 !px-4">
                          <span className="font-mono text-[0.68rem] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded">
                            {tx.referenceId.length > 16 ? tx.referenceId.slice(0, 16) + '…' : tx.referenceId}
                          </span>
                        </td>
                        <td className="!py-2.5 !px-4 font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">
                          {tx.customerName}
                        </td>
                        <td className="!py-2.5 !px-4 text-[#8c9097] dark:text-white/50 font-mono text-[0.72rem]">
                          {tx.customerAccountNumber}
                        </td>
                        <td className="!py-2.5 !px-4">
                          <span className="inline-flex items-center text-[0.7rem] font-bold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                            {tx.provider}
                          </span>
                        </td>
                        <td className="!py-2.5 !px-4 font-bold text-defaulttextcolor dark:text-defaulttextcolor/70">
                          {amt.toLocaleString()}
                          <span className="text-[0.65rem] font-normal text-[#8c9097] ml-1">{tx.currencyCode || 'RWF'}</span>
                        </td>
                        <td className="!py-2.5 !px-4">
                          {tx.status === 'success' ? (
                            <span className="text-[0.8rem] font-semibold text-pink-600 dark:text-pink-400">
                              {fee.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                            </span>
                          ) : (
                            <span className="text-[0.72rem] text-[#8c9097]">—</span>
                          )}
                          {tx.fee_type && tx.status === 'success' && (
                            <div className="text-[0.6rem] text-[#8c9097] mt-0.5">
                              {tx.fee_type === 'PERCENTAGE' ? `${tx.fee_amount}%` : `Fixed`}
                            </div>
                          )}
                        </td>
                        <td className="!py-2.5 !px-4">
                          {tx.status === 'success' ? (
                            <span className="text-[0.8rem] font-bold text-emerald-600 dark:text-emerald-400">
                              {net.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                            </span>
                          ) : (
                            <span className="text-[0.72rem] text-[#8c9097]">—</span>
                          )}
                        </td>
                        <td className="!py-2.5 !px-4">
                          <span className={`inline-flex items-center text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full ${sc.cls}`}>
                            {sc.label}
                          </span>
                          {tx.message && (
                            <div className="text-[0.62rem] text-[#8c9097] mt-0.5 max-w-[140px] truncate" title={tx.message}>
                              {tx.message}
                            </div>
                          )}
                        </td>
                        <td className="!py-2.5 !px-4">
                          <div className="font-medium text-[0.78rem] text-defaulttextcolor dark:text-defaulttextcolor/70">
                            {tx.agentName || `Agent ${tx.agentId}`}
                          </div>
                          <div className="font-mono text-[0.62rem] text-[#8c9097]">ID: {tx.agentId || '—'}</div>
                        </td>
                        <td className="!py-2.5 !px-4 font-mono text-[0.7rem] text-[#8c9097] dark:text-white/50">
                          {tx.transactionId || '—'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t dark:border-defaultborder/10 bg-gray-50 dark:bg-gray-900/30">
              <div className="text-[0.78rem] text-[#8c9097] dark:text-white/50">
                {loading ? '…' : (
                  <>
                    Showing <span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">{((page - 1) * pageSize) + 1}</span>
                    {' '}–{' '}
                    <span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">{Math.min(page * pageSize, total)}</span>
                    {' '}of{' '}
                    <span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">{total.toLocaleString()}</span>
                    {search && ` (${displayRows.length} visible)`}
                  </>
                )}
              </div>

              <div className="flex items-center gap-1">
                <button onClick={() => setPage(1)} disabled={page === 1}
                  className="p-1.5 rounded-lg text-[#8c9097] hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors" title="First">
                  <i className="bx bx-chevrons-left text-lg" />
                </button>
                <button onClick={() => setPage(p => p - 1)} disabled={page === 1}
                  className="p-1.5 rounded-lg text-[#8c9097] hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors">
                  <i className="bx bx-chevron-left text-lg" />
                </button>

                {pageNumbers[0] > 1 && (
                  <><button onClick={() => setPage(1)} className="w-8 h-8 text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-[#8c9097]">1</button>
                  {pageNumbers[0] > 2 && <span className="text-[#8c9097] px-1 text-sm">…</span>}</>
                )}
                {pageNumbers.map(n => (
                  <button key={n} onClick={() => setPage(n)}
                    className={`w-8 h-8 text-sm font-medium rounded-lg transition-colors ${
                      n === page
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-[#8c9097] hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}>
                    {n}
                  </button>
                ))}
                {pageNumbers[pageNumbers.length - 1] < totalPages && (
                  <>{pageNumbers[pageNumbers.length - 1] < totalPages - 1 && <span className="text-[#8c9097] px-1 text-sm">…</span>}
                  <button onClick={() => setPage(totalPages)} className="w-8 h-8 text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-[#8c9097]">{totalPages}</button></>
                )}

                <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages}
                  className="p-1.5 rounded-lg text-[#8c9097] hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors">
                  <i className="bx bx-chevron-right text-lg" />
                </button>
                <button onClick={() => setPage(totalPages)} disabled={page === totalPages}
                  className="p-1.5 rounded-lg text-[#8c9097] hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 transition-colors" title="Last">
                  <i className="bx bx-chevrons-right text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default MomoCollectionsTransactions;
