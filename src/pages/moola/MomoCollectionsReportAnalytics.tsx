import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import ApexchartsComponent from '../../@spk/spk-packages/apexcharts-component';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';
const getToken = () => { try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; } };
const authHeaders = () => ({ Authorization: `Bearer ${getToken()}` });

function isoDate(d: Date) { return d.toISOString().slice(0, 10); }
function todayStart() { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }

const PRESETS = [
  { label: 'Today',       days: 0 },
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 90 days', days: 90 },
  { label: 'This year',   days: 365 },
];

interface Tx {
  id: number;
  referenceId: string;
  agentId?: number | string;
  provider: string;
  customerName: string;
  customerAccountNumber: string;
  amount: string | number;
  currencyCode?: string;
  status: 'success' | 'pending' | 'failed';
  message?: string;
  transactionId?: string | null;
  createdAt: string;
}

const fmtRwf = (n: number) =>
  n >= 1_000_000
    ? `${(n / 1_000_000).toFixed(2)}M`
    : n >= 1_000
    ? `${(n / 1_000).toFixed(1)}K`
    : n.toFixed(0);

const chartBase = {
  toolbar: { show: false },
  events: { mounted: (c: any) => c.windowResizeHandler() },
};

const MomoCollectionsReportAnalytics: React.FC = () => {
  const [startDate, setStartDate] = useState(isoDate((() => { const d = todayStart(); d.setDate(d.getDate() - 29); return d; })()));
  const [endDate, setEndDate]     = useState(isoDate(new Date()));
  const [activePreset, setActivePreset] = useState(2); // Last 30 days
  const [providerFilter, setProviderFilter] = useState('');
  const [statusFilter, setStatusFilter]     = useState('');

  const [rows, setRows]     = useState<Tx[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState('');
  const [lastFetched, setLastFetched] = useState<Date | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params: Record<string, any> = {
        limit: 2000,
        offset: 0,
        startDate: `${startDate}T00:00:00.000Z`,
        endDate:   `${endDate}T23:59:59.999Z`,
      };
      if (providerFilter) params.provider = providerFilter;
      if (statusFilter)   params.status   = statusFilter;

      const res = await axios.get(`${API()}/v1/momo/collection`, {
        headers: authHeaders(),
        params,
      });
      setRows(res.data?.data || []);
      setLastFetched(new Date());
    } catch (e: any) {
      setError(e.response?.data?.message || 'Failed to fetch analytics data.');
    } finally {
      setLoading(false);
    }
  }, [startDate, endDate, providerFilter, statusFilter]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const applyPreset = (idx: number) => {
    setActivePreset(idx);
    const end = new Date();
    const start = new Date(todayStart());
    if (idx === 0) {
      // today
    } else {
      start.setDate(start.getDate() - PRESETS[idx].days + 1);
    }
    setStartDate(isoDate(start));
    setEndDate(isoDate(end));
  };

  // ── Core metrics ────────────────────────────────────────────────────────────
  const success = useMemo(() => rows.filter(r => r.status === 'success'), [rows]);
  const pending = useMemo(() => rows.filter(r => r.status === 'pending'), [rows]);
  const failed  = useMemo(() => rows.filter(r => r.status === 'failed'),  [rows]);

  const totalVolume  = useMemo(() => success.reduce((s, r) => s + Number(r.amount || 0), 0), [success]);
  const pendingVolume = useMemo(() => pending.reduce((s, r) => s + Number(r.amount || 0), 0), [pending]);
  const successRate  = rows.length > 0 ? (success.length / rows.length) * 100 : 0;
  const avgAmount    = success.length > 0 ? totalVolume / success.length : 0;

  // ── Trend chart — daily breakdown ──────────────────────────────────────────
  const trendData = useMemo(() => {
    const dayMs = 86_400_000;
    const start = new Date(`${startDate}T00:00:00`);
    const end   = new Date(`${endDate}T23:59:59`);
    const days  = Math.min(Math.floor((end.getTime() - start.getTime()) / dayMs) + 1, 90);

    const labels: string[] = [];
    const sArr: number[] = [];
    const pArr: number[] = [];
    const fArr: number[] = [];
    const vArr: number[] = [];

    for (let i = 0; i < days; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      labels.push(d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }));
      sArr.push(0); pArr.push(0); fArr.push(0); vArr.push(0);
    }

    rows.forEach(r => {
      const d = new Date(r.createdAt);
      const norm = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      const normS = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
      const idx = Math.floor((norm - normS) / dayMs);
      if (idx >= 0 && idx < days) {
        if (r.status === 'success') { sArr[idx]++; vArr[idx] += Number(r.amount || 0); }
        else if (r.status === 'pending') pArr[idx]++;
        else fArr[idx]++;
      }
    });

    return { labels, success: sArr, pending: pArr, failed: fArr, volume: vArr };
  }, [rows, startDate, endDate]);

  const trendOpts = useMemo(() => ({
    chart: { ...chartBase, type: 'area', height: 300 },
    colors: ['#10b981', '#f59e0b', '#ef4444'],
    fill: { type: 'gradient', gradient: { opacityFrom: 0.3, opacityTo: 0.02 } },
    stroke: { curve: 'smooth', width: 2.5 },
    dataLabels: { enabled: false },
    grid: { borderColor: '#f1f1f1', strokeDashArray: 3 },
    xaxis: {
      categories: trendData.labels,
      labels: { rotate: trendData.labels.length > 20 ? -45 : 0, style: { fontSize: '11px' } },
      axisTicks: { show: false },
    },
    yaxis: { min: 0, labels: { formatter: (v: number) => v.toFixed(0) } },
    legend: { position: 'top' as const, horizontalAlign: 'left' as const },
    tooltip: { shared: true, intersect: false },
  }), [trendData.labels]);

  const trendSeries = useMemo(() => [
    { name: 'Success', data: trendData.success },
    { name: 'Pending', data: trendData.pending },
    { name: 'Failed',  data: trendData.failed },
  ], [trendData]);

  // ── Volume chart ───────────────────────────────────────────────────────────
  const volumeOpts = useMemo(() => ({
    chart: { ...chartBase, type: 'bar', height: 300 },
    colors: ['#6366f1'],
    plotOptions: { bar: { borderRadius: 4, columnWidth: '65%' } },
    dataLabels: { enabled: false },
    grid: { borderColor: '#f1f1f1', strokeDashArray: 3 },
    xaxis: {
      categories: trendData.labels,
      labels: { rotate: trendData.labels.length > 20 ? -45 : 0, style: { fontSize: '11px' } },
      axisTicks: { show: false },
    },
    yaxis: { labels: { formatter: (v: number) => fmtRwf(v) } },
    tooltip: { y: { formatter: (v: number) => `${fmtRwf(v)} RWF` } },
  }), [trendData.labels]);

  const volumeSeries = useMemo(() => [
    { name: 'Volume (RWF)', data: trendData.volume },
  ], [trendData.volume]);

  // ── Status donut ───────────────────────────────────────────────────────────
  const donutOpts = useMemo(() => ({
    labels: ['Success', 'Pending', 'Failed'],
    chart: { ...chartBase, type: 'donut', height: 260 },
    colors: ['#10b981', '#f59e0b', '#ef4444'],
    dataLabels: { enabled: false },
    legend: { position: 'bottom' as const },
    stroke: { width: 0 },
    plotOptions: { pie: { expandOnClick: false, donut: { size: '75%' } } },
    tooltip: { y: { formatter: (v: number) => `${v} (${rows.length > 0 ? ((v / rows.length) * 100).toFixed(1) : 0}%)` } },
  }), [rows.length]);

  const donutSeries = useMemo(() => [success.length, pending.length, failed.length], [success.length, pending.length, failed.length]);

  // ── Provider breakdown ─────────────────────────────────────────────────────
  const providerStats = useMemo(() => {
    const map: Record<string, { count: number; volume: number; success: number; failed: number }> = {};
    rows.forEach(r => {
      const p = r.provider || 'Unknown';
      if (!map[p]) map[p] = { count: 0, volume: 0, success: 0, failed: 0 };
      map[p].count++;
      if (r.status === 'success') { map[p].success++; map[p].volume += Number(r.amount || 0); }
      if (r.status === 'failed') map[p].failed++;
    });
    return Object.entries(map).map(([provider, v]) => ({ provider, ...v })).sort((a, b) => b.count - a.count);
  }, [rows]);

  const providerBarOpts = useMemo(() => ({
    chart: { ...chartBase, type: 'bar', height: 220 },
    colors: ['#6366f1', '#10b981', '#ef4444'],
    plotOptions: { bar: { horizontal: true, borderRadius: 4, dataLabels: { position: 'top' } } },
    dataLabels: { enabled: false },
    grid: { borderColor: '#f1f1f1', strokeDashArray: 3 },
    xaxis: { categories: providerStats.map(p => p.provider), axisTicks: { show: false } },
    tooltip: { shared: true, intersect: false },
    legend: { position: 'top' as const },
  }), [providerStats]);

  const providerBarSeries = useMemo(() => [
    { name: 'Total',   data: providerStats.map(p => p.count) },
    { name: 'Success', data: providerStats.map(p => p.success) },
    { name: 'Failed',  data: providerStats.map(p => p.failed) },
  ], [providerStats]);

  // ── Hourly distribution ────────────────────────────────────────────────────
  const hourlyData = useMemo(() => {
    const hours = Array(24).fill(0);
    rows.forEach(r => { hours[new Date(r.createdAt).getHours()]++; });
    return hours;
  }, [rows]);

  const hourlyOpts = useMemo(() => ({
    chart: { ...chartBase, type: 'bar', height: 200 },
    colors: ['#8b5cf6'],
    plotOptions: { bar: { borderRadius: 3, columnWidth: '75%' } },
    dataLabels: { enabled: false },
    grid: { borderColor: '#f1f1f1', strokeDashArray: 3 },
    xaxis: {
      categories: Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}h`),
      labels: { style: { fontSize: '10px' } },
      axisTicks: { show: false },
    },
    yaxis: { labels: { formatter: (v: number) => v.toFixed(0) } },
    tooltip: { y: { formatter: (v: number) => `${v} collections` } },
  }), []);

  // ── Top agents ─────────────────────────────────────────────────────────────
  const agentStats = useMemo(() => {
    const map: Record<string, { count: number; volume: number; success: number }> = {};
    rows.forEach(r => {
      const k = String(r.agentId || 'Unknown');
      if (!map[k]) map[k] = { count: 0, volume: 0, success: 0 };
      map[k].count++;
      if (r.status === 'success') { map[k].success++; map[k].volume += Number(r.amount || 0); }
    });
    return Object.entries(map)
      .map(([agentId, v]) => ({ agentId, ...v }))
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 10);
  }, [rows]);

  // ── Export CSV ─────────────────────────────────────────────────────────────
  const exportCSV = async () => {
    const params: Record<string, any> = {
      limit: 10000, offset: 0,
      startDate: `${startDate}T00:00:00.000Z`,
      endDate:   `${endDate}T23:59:59.999Z`,
    };
    if (providerFilter) params.provider = providerFilter;
    if (statusFilter)   params.status   = statusFilter;

    try {
      const res = await axios.get(`${API()}/v1/momo/collection`, { headers: authHeaders(), params });
      const all: Tx[] = res.data?.data || [];
      const header = ['Date', 'Reference', 'Customer', 'Phone', 'Provider', 'Amount', 'Currency', 'Status', 'Agent ID', 'Tx ID'];
      const body = all.map(r => [
        new Date(r.createdAt).toLocaleString(), r.referenceId, r.customerName,
        r.customerAccountNumber, r.provider, r.amount, r.currencyCode || 'RWF',
        r.status, r.agentId || '', r.transactionId || '',
      ]);
      const csv = '﻿' + [header, ...body].map(row =>
        row.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')
      ).join('\r\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `momo-analytics-${startDate}-to-${endDate}.csv`;
      document.body.appendChild(a); a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
    } catch { alert('Export failed. Please try again.'); }
  };

  const kpiCards = [
    { label: 'Total Volume',   value: `${fmtRwf(totalVolume)} RWF`,    sub: `${success.length} successful`,         icon: 'bx bx-money',         grad: 'from-violet-500 to-indigo-600' },
    { label: 'Pending Volume', value: `${fmtRwf(pendingVolume)} RWF`,  sub: `${pending.length} awaiting`,           icon: 'bx bx-time',           grad: 'from-amber-400 to-orange-500' },
    { label: 'Success Rate',   value: `${successRate.toFixed(1)}%`,     sub: `${rows.length} total collections`,     icon: 'bx bx-check-shield',   grad: 'from-emerald-400 to-green-600' },
    { label: 'Avg Amount',     value: `${fmtRwf(avgAmount)} RWF`,      sub: 'per successful collection',            icon: 'bx bx-bar-chart-alt-2', grad: 'from-blue-400 to-cyan-500' },
    { label: 'Collections',    value: rows.length.toLocaleString(),     sub: `${failed.length} failed`,              icon: 'bx bx-transfer',       grad: 'from-pink-400 to-fuchsia-600' },
    { label: 'Providers',      value: providerStats.length.toString(),  sub: providerStats.map(p => p.provider).join(', ') || '—', icon: 'bx bx-network-chart', grad: 'from-teal-400 to-cyan-600' },
  ];

  return (
    <>
      <Pageheader currentpage="Reports & Analytics" activepage="MoMo Collections" mainpage="Analytics" />

      <div className="space-y-6">

        {/* ── Controls ─────────────────────────────────────────────────────── */}
        <div className="box !mb-0">
          <div className="box-body !p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((p, i) => (
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

              <div className="flex items-center gap-2">
                <button onClick={fetchData} disabled={loading}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#8c9097] hover:text-indigo-600 disabled:opacity-50 transition-colors">
                  <i className={`bx bx-refresh text-lg ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
                <button onClick={exportCSV} disabled={loading}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-50">
                  <i className="bx bx-download text-lg" />Export CSV
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 items-end">
              <div>
                <label className="block text-[0.72rem] text-[#8c9097] mb-1">From</label>
                <input type="date" value={startDate} max={endDate}
                  onChange={e => { setStartDate(e.target.value); setActivePreset(-1); }}
                  className="form-control !text-sm !py-2 !px-3 w-40" />
              </div>
              <div>
                <label className="block text-[0.72rem] text-[#8c9097] mb-1">To</label>
                <input type="date" value={endDate} min={startDate}
                  onChange={e => { setEndDate(e.target.value); setActivePreset(-1); }}
                  className="form-control !text-sm !py-2 !px-3 w-40" />
              </div>
              <div>
                <label className="block text-[0.72rem] text-[#8c9097] mb-1">Status</label>
                <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
                  className="form-control !text-sm !py-2 !px-3 w-36">
                  <option value="">All Statuses</option>
                  <option value="success">Success</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
              </div>
              <div>
                <label className="block text-[0.72rem] text-[#8c9097] mb-1">Provider</label>
                <select value={providerFilter} onChange={e => setProviderFilter(e.target.value)}
                  className="form-control !text-sm !py-2 !px-3 w-36">
                  <option value="">All Providers</option>
                  <option value="MTN">MTN</option>
                  <option value="AIRTEL">Airtel</option>
                </select>
              </div>
              {lastFetched && (
                <span className="text-[0.7rem] text-[#8c9097] dark:text-white/40 self-end pb-2">
                  Updated {lastFetched.toLocaleTimeString()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Error ────────────────────────────────────────────────────────── */}
        {error && (
          <div className="ti-alert ti-alert-danger flex items-center gap-2">
            <i className="bx bx-error-circle text-xl" />{error}
            <button onClick={fetchData} className="ms-auto text-sm underline">Retry</button>
          </div>
        )}

        {/* ── KPI Cards ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
          {kpiCards.map(card => (
            <div key={card.label} className="box !mb-0">
              <div className="box-body !p-4">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.grad} flex items-center justify-center mb-3`}>
                  <i className={`${card.icon} text-white text-lg`} />
                </div>
                {loading
                  ? <span className="block w-20 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse rounded mb-1" />
                  : <div className="text-[1.2rem] font-bold text-defaulttextcolor dark:text-defaulttextcolor/70 leading-tight truncate">{card.value}</div>
                }
                <div className="text-[0.7rem] font-semibold text-[#8c9097] dark:text-white/50 mt-0.5">{card.label}</div>
                <div className="text-[0.62rem] text-[#8c9097] dark:text-white/40 truncate" title={card.sub}>{card.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <svg className="animate-spin w-10 h-10 text-indigo-500" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* ── Trend + Volume ───────────────────────────────────────────── */}
            <div className="grid grid-cols-12 gap-x-6">
              <div className="xxl:col-span-8 xl:col-span-7 col-span-12">
                <div className="box !mb-0">
                  <div className="box-header justify-between">
                    <div className="box-title">Collection Trend (Success / Pending / Failed)</div>
                    <span className="text-[0.72rem] text-[#8c9097]">{rows.length.toLocaleString()} records</span>
                  </div>
                  <div className="box-body !pt-0">
                    {rows.length === 0
                      ? <div className="h-[300px] flex items-center justify-center text-[#8c9097] text-sm">No data for selected range</div>
                      : <ApexchartsComponent chartOptions={trendOpts} chartSeries={trendSeries} type="area" height={300} />
                    }
                  </div>
                </div>
              </div>

              <div className="xxl:col-span-4 xl:col-span-5 col-span-12">
                <div className="box !mb-0 h-full">
                  <div className="box-header">
                    <div className="box-title">Status Distribution</div>
                  </div>
                  <div className="box-body">
                    {rows.length === 0
                      ? <div className="h-[260px] flex items-center justify-center text-[#8c9097] text-sm">No data</div>
                      : <ApexchartsComponent chartOptions={donutOpts} chartSeries={donutSeries} type="donut" height={260} />
                    }
                    <div className="grid grid-cols-3 border-t dark:border-defaultborder/10 mt-2 pt-3">
                      {[
                        { label: 'Success', count: success.length, color: 'text-emerald-500', pct: rows.length > 0 ? (success.length / rows.length * 100).toFixed(1) : '0' },
                        { label: 'Pending', count: pending.length, color: 'text-amber-500',   pct: rows.length > 0 ? (pending.length / rows.length * 100).toFixed(1) : '0' },
                        { label: 'Failed',  count: failed.length,  color: 'text-red-500',     pct: rows.length > 0 ? (failed.length  / rows.length * 100).toFixed(1) : '0' },
                      ].map(s => (
                        <div key={s.label} className="text-center">
                          <div className={`text-[1rem] font-bold ${s.color}`}>{s.count}</div>
                          <div className="text-[0.65rem] text-[#8c9097]">{s.label} · {s.pct}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Volume bar + Hourly heatmap ──────────────────────────────── */}
            <div className="grid grid-cols-12 gap-x-6">
              <div className="xxl:col-span-7 xl:col-span-6 col-span-12">
                <div className="box !mb-0">
                  <div className="box-header">
                    <div className="box-title">Daily Collected Volume (RWF)</div>
                  </div>
                  <div className="box-body !pt-0">
                    {rows.length === 0
                      ? <div className="h-[300px] flex items-center justify-center text-[#8c9097] text-sm">No data</div>
                      : <ApexchartsComponent chartOptions={volumeOpts} chartSeries={volumeSeries} type="bar" height={300} />
                    }
                  </div>
                </div>
              </div>

              <div className="xxl:col-span-5 xl:col-span-6 col-span-12">
                <div className="box !mb-0 h-full">
                  <div className="box-header">
                    <div className="box-title">Collections by Hour of Day</div>
                  </div>
                  <div className="box-body !pt-0">
                    <ApexchartsComponent chartOptions={hourlyOpts} chartSeries={[{ name: 'Collections', data: hourlyData }]} type="bar" height={200} />
                    <div className="mt-3 flex items-center justify-between text-[0.72rem] text-[#8c9097] dark:text-white/50 px-1">
                      <span>Peak hour: <strong className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                        {String(hourlyData.indexOf(Math.max(...hourlyData))).padStart(2, '0')}:00
                      </strong></span>
                      <span>Max: <strong className="text-defaulttextcolor dark:text-defaulttextcolor/70">{Math.max(...hourlyData)} collections</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Provider breakdown + Top agents ─────────────────────────── */}
            <div className="grid grid-cols-12 gap-x-6">
              <div className="xxl:col-span-5 xl:col-span-5 col-span-12">
                <div className="box !mb-0 h-full">
                  <div className="box-header">
                    <div className="box-title">Provider Breakdown</div>
                  </div>
                  <div className="box-body !pt-0">
                    {providerStats.length === 0
                      ? <div className="h-[220px] flex items-center justify-center text-[#8c9097] text-sm">No data</div>
                      : <ApexchartsComponent chartOptions={providerBarOpts} chartSeries={providerBarSeries} type="bar" height={220} />
                    }
                    <div className="space-y-3 mt-4">
                      {providerStats.map((p, i) => {
                        const pct = rows.length > 0 ? (p.count / rows.length) * 100 : 0;
                        const colors = ['bg-violet-500', 'bg-cyan-500', 'bg-amber-500', 'bg-rose-500'];
                        return (
                          <div key={p.provider}>
                            <div className="flex justify-between text-[0.78rem] mb-1">
                              <span className="font-semibold flex items-center gap-1.5">
                                <span className={`w-2 h-2 rounded-full ${colors[i % colors.length]}`} />
                                {p.provider}
                              </span>
                              <span className="text-[#8c9097]">
                                <span className="text-emerald-600 font-semibold">{p.success}✓</span>
                                {' · '}
                                <span className="text-red-500">{p.failed}✗</span>
                                {' · '}
                                <span className="font-bold text-defaulttextcolor dark:text-defaulttextcolor/70">{p.count} total</span>
                              </span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                              <div className={`h-1.5 rounded-full ${colors[i % colors.length]}`} style={{ width: `${pct}%` }} />
                            </div>
                            <div className="flex justify-between text-[0.62rem] text-[#8c9097] mt-0.5">
                              <span>{pct.toFixed(1)}%</span>
                              <span>{fmtRwf(p.volume)} RWF</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="xxl:col-span-7 xl:col-span-7 col-span-12">
                <div className="box !mb-0 h-full">
                  <div className="box-header justify-between">
                    <div className="box-title">Top 10 Agents by Volume</div>
                    <span className="text-[0.72rem] text-[#8c9097]">Successful collections only</span>
                  </div>
                  <div className="box-body !p-0">
                    {agentStats.length === 0
                      ? <div className="flex items-center justify-center h-48 text-[#8c9097] text-sm">No agent data</div>
                      : (
                        <div className="overflow-x-auto">
                          <table className="table min-w-full text-[0.8rem]">
                            <thead>
                              <tr className="border-b dark:border-defaultborder/10 bg-gray-50 dark:bg-gray-900/30">
                                {['Rank', 'Agent ID', 'Collections', 'Volume (RWF)', 'Success Rate', 'Share'].map(h => (
                                  <th key={h} className="!text-start !font-semibold !py-2 !px-4 text-[0.7rem] text-[#8c9097] uppercase tracking-wide">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {agentStats.map((a, i) => {
                                const share = totalVolume > 0 ? (a.volume / totalVolume) * 100 : 0;
                                const agentRows = rows.filter(r => String(r.agentId) === a.agentId);
                                const rate = agentRows.length > 0 ? (a.success / agentRows.length) * 100 : 0;
                                return (
                                  <tr key={a.agentId} className="border-b dark:border-defaultborder/10 hover:bg-gray-50 dark:hover:bg-gray-800/40">
                                    <td className="!py-2 !px-4">
                                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[0.65rem] font-bold ${
                                        i === 0 ? 'bg-amber-100 text-amber-700' :
                                        i === 1 ? 'bg-gray-100 text-gray-600' :
                                        i === 2 ? 'bg-orange-100 text-orange-700' :
                                        'bg-gray-50 text-gray-500'
                                      }`}>{i + 1}</span>
                                    </td>
                                    <td className="!py-2 !px-4">
                                      <div className="flex items-center gap-2">
                                        <span className="w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center text-[0.7rem] font-bold flex-shrink-0">
                                          {String(a.agentId).charAt(0).toUpperCase()}
                                        </span>
                                        <span className="font-medium">Agent {a.agentId}</span>
                                      </div>
                                    </td>
                                    <td className="!py-2 !px-4 font-semibold">{a.count}</td>
                                    <td className="!py-2 !px-4 font-bold text-violet-600 dark:text-violet-400">{fmtRwf(a.volume)}</td>
                                    <td className="!py-2 !px-4">
                                      <span className={`text-[0.7rem] font-semibold ${rate >= 80 ? 'text-emerald-600' : rate >= 50 ? 'text-amber-600' : 'text-red-500'}`}>
                                        {rate.toFixed(1)}%
                                      </span>
                                    </td>
                                    <td className="!py-2 !px-4">
                                      <div className="flex items-center gap-2">
                                        <div className="w-16 bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                                          <div className="h-1.5 bg-violet-500 rounded-full" style={{ width: `${share}%` }} />
                                        </div>
                                        <span className="text-[0.65rem] text-[#8c9097] w-8">{share.toFixed(1)}%</span>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>

            {/* ── Summary table ────────────────────────────────────────────── */}
            <div className="box !mb-0">
              <div className="box-header justify-between">
                <div className="box-title">Period Summary</div>
                <span className="text-[0.72rem] text-[#8c9097]">{startDate} → {endDate}</span>
              </div>
              <div className="box-body">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Collections',    value: rows.length.toLocaleString(),              note: 'all statuses' },
                    { label: 'Collected (Success)',  value: `${fmtRwf(totalVolume)} RWF`,             note: `${success.length} transactions` },
                    { label: 'Pending Value',        value: `${fmtRwf(pendingVolume)} RWF`,           note: `${pending.length} awaiting` },
                    { label: 'Success Rate',         value: `${successRate.toFixed(2)}%`,              note: `${failed.length} failed` },
                    { label: 'Average Amount',       value: `${fmtRwf(avgAmount)} RWF`,               note: 'per success' },
                    { label: 'Peak Hour',            value: `${String(hourlyData.indexOf(Math.max(...hourlyData))).padStart(2,'0')}:00`, note: `${Math.max(...hourlyData)} collections` },
                    { label: 'Top Provider',         value: providerStats[0]?.provider || '—',         note: `${providerStats[0]?.count ?? 0} collections` },
                    { label: 'Unique Agents',        value: agentStats.length.toLocaleString(),        note: 'active in period' },
                  ].map(s => (
                    <div key={s.label} className="text-center py-3 border border-dashed dark:border-defaultborder/10 rounded-xl">
                      <div className="text-[1.3rem] font-bold text-defaulttextcolor dark:text-defaulttextcolor/70">{s.value}</div>
                      <div className="text-[0.72rem] font-semibold text-[#8c9097] mt-0.5">{s.label}</div>
                      <div className="text-[0.62rem] text-[#8c9097] dark:text-white/30">{s.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MomoCollectionsReportAnalytics;
