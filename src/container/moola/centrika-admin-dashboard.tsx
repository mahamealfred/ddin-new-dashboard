import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';
const getToken = () => { try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; } };
const getAuthHeaders = () => ({ Authorization: `Bearer ${getToken()}`, 'Content-Type': 'application/json' });
const getUserData = () => { try { return JSON.parse(localStorage.getItem('userData') || 'null'); } catch { return null; } };

const fmt = (n: number) => n.toLocaleString('en-US');
const fmtAmount = (n: number) =>
  n >= 1_000_000 ? `${(n / 1_000_000).toFixed(2)}M` : n >= 1_000 ? `${(n / 1_000).toFixed(1)}K` : String(Math.round(n));

const statusCfg = (status: string) => {
  const s = (status || '').toLowerCase();
  if (s.includes('success') || s.includes('complete'))
    return { label: 'Success', dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800' };
  if (s.includes('fail') || s.includes('error'))
    return { label: 'Failed', dot: 'bg-red-500', badge: 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800' };
  return { label: 'Pending', dot: 'bg-amber-400', badge: 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800' };
};

const PROVIDERS = ['All', 'MTN', 'AIRTEL', 'TIGO'];
const STATUSES = ['All', 'SUCCESSFUL', 'PENDING', 'FAILED'];
const PAGE_SIZE_OPTIONS = [25, 50, 100];

interface Transaction {
  id: string;
  referenceId: string;
  agentId: string;
  provider: string;
  customerName: string;
  customerAccountNumber: string;
  amount: number;
  currencyCode: string;
  status: string;
  createdAt: string;
  updatedAt?: string;
}

interface Filters {
  provider: string;
  status: string;
  agentId: string;
  startDate: string;
  endDate: string;
}

const SkeletonCard = () => (
  <div className="bg-white dark:bg-bodybg2 rounded-xl p-5 border border-gray-100 dark:border-white/10 animate-pulse">
    <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-1/2 mb-3" />
    <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-1/3" />
  </div>
);

const SkeletonRow = () => (
  <tr>
    {Array.from({ length: 9 }).map((_, i) => (
      <td key={i} className="px-4 py-3">
        <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded animate-pulse" />
      </td>
    ))}
  </tr>
);

const CentrikaAdminDashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [totalCount, setTotalCount] = useState(0);
  const [filters, setFilters] = useState<Filters>({
    provider: 'All', status: 'All', agentId: '', startDate: '', endDate: '',
  });
  const [agentInput, setAgentInput] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions'>('overview');

  const user = getUserData();

  const fetchTransactions = useCallback(async (f: Filters, pg: number, ps: number) => {
    setLoading(true); setError('');
    try {
      const params: Record<string, string | number> = { limit: ps, offset: pg * ps };
      if (f.provider !== 'All') params.provider = f.provider;
      if (f.status !== 'All') params.status = f.status;
      if (f.agentId.trim()) params.agentId = f.agentId.trim();
      if (f.startDate) params.startDate = f.startDate;
      if (f.endDate) params.endDate = f.endDate;

      const res = await axios.get(`${API()}/v1/momo/collection`, {
        headers: getAuthHeaders(), params,
      });
      const data = res.data.data || [];
      setTransactions(data);
      setTotalCount(res.data.count ?? data.length);
      setLastUpdated(new Date());
    } catch {
      setError('Failed to load transactions. Check your connection.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchTransactions(filters, page, pageSize); }, [fetchTransactions, filters, page, pageSize]);

  const applyFilters = () => {
    setPage(0);
    setFilters(f => ({ ...f, agentId: agentInput }));
  };

  const resetFilters = () => {
    setFilters({ provider: 'All', status: 'All', agentId: '', startDate: '', endDate: '' });
    setAgentInput('');
    setPage(0);
  };

  const stats = useMemo(() => {
    let success = 0, pending = 0, failed = 0, volume = 0;
    const agentSet = new Set<string>();
    transactions.forEach(t => {
      const s = (t.status || '').toLowerCase();
      if (s.includes('success') || s.includes('complete')) { success++; volume += Number(t.amount || 0); }
      else if (s.includes('fail') || s.includes('error')) failed++;
      else pending++;
      if (t.agentId) agentSet.add(t.agentId);
    });
    return { total: transactions.length, success, pending, failed, volume, uniqueAgents: agentSet.size };
  }, [transactions]);

  const successRate = stats.total > 0 ? Math.round((stats.success / stats.total) * 100) : 0;

  const areaChartData = useMemo(() => {
    const map: Record<string, { success: number; failed: number; pending: number }> = {};
    [...transactions].reverse().forEach(t => {
      const day = new Date(t.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      if (!map[day]) map[day] = { success: 0, failed: 0, pending: 0 };
      const s = (t.status || '').toLowerCase();
      if (s.includes('success') || s.includes('complete')) map[day].success++;
      else if (s.includes('fail') || s.includes('error')) map[day].failed++;
      else map[day].pending++;
    });
    const days = Object.keys(map).slice(-14);
    return {
      categories: days,
      success: days.map(d => map[d].success),
      failed: days.map(d => map[d].failed),
      pending: days.map(d => map[d].pending),
    };
  }, [transactions]);

  const donutSeries = [stats.success, stats.pending, stats.failed];
  const donutHasData = donutSeries.some(v => v > 0);

  const providerBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    transactions.forEach(t => {
      const p = (t.provider || 'UNKNOWN').toUpperCase();
      map[p] = (map[p] || 0) + Number(t.amount || 0);
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [transactions]);

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-bodybg">
      <Pageheader
        currentpage="Admin Dashboard"
        activepage="Centrika Admin"
        mainpage="MoMo Collections"
      />

      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 p-6 mb-6 shadow-lg shadow-indigo-900/20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                <i className="bx bx-shield-quarter me-1" /> CENTRIKA ADMIN
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white">MoMo Collections Overview</h1>
            <p className="text-indigo-200 text-sm mt-1">
              Welcome back, <span className="font-semibold text-white">{user?.name || user?.username || 'Admin'}</span>
              {lastUpdated && <span className="ms-2 opacity-70">· Updated {lastUpdated.toLocaleTimeString()}</span>}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchTransactions(filters, page, pageSize)}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-all border border-white/20 backdrop-blur-sm disabled:opacity-60"
            >
              <i className={`bx bx-refresh text-base ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <a
              href={`${import.meta.env.BASE_URL}moola/service-management/service-fees`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-indigo-700 text-sm font-semibold hover:bg-indigo-50 transition-all shadow-sm"
            >
              <i className="bx bx-cog text-base" /> Service Fees
            </a>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        ) : (
          <>
            <div className="col-span-2 sm:col-span-3 lg:col-span-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-5 text-white shadow-md shadow-indigo-300/30 dark:shadow-none">
              <div className="flex items-center justify-between mb-3">
                <span className="text-indigo-100 text-sm font-medium">Total Volume (RWF)</span>
                <span className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center"><i className="bx bx-money text-lg" /></span>
              </div>
              <div className="text-3xl font-bold">{fmtAmount(stats.volume)}</div>
              <div className="text-indigo-200 text-xs mt-1">{fmt(stats.volume)} RWF collected</div>
            </div>

            <div className="bg-white dark:bg-bodybg2 rounded-xl p-5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-500 dark:text-white/50 text-sm">Total Txns</span>
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center"><i className="bx bx-receipt text-base" /></span>
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">{fmt(totalCount || stats.total)}</div>
              <div className="text-xs text-gray-400 mt-1">{fmt(stats.total)} loaded</div>
            </div>

            <div className="bg-white dark:bg-bodybg2 rounded-xl p-5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-500 dark:text-white/50 text-sm">Success Rate</span>
                <span className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center"><i className="bx bx-check-circle text-base" /></span>
              </div>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{successRate}%</div>
              <div className="text-xs text-gray-400 mt-1">{fmt(stats.success)} successful</div>
            </div>

            <div className="bg-white dark:bg-bodybg2 rounded-xl p-5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-500 dark:text-white/50 text-sm">Pending</span>
                <span className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center"><i className="bx bx-time text-base" /></span>
              </div>
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{fmt(stats.pending)}</div>
              <div className="text-xs text-gray-400 mt-1">awaiting confirmation</div>
            </div>

            <div className="bg-white dark:bg-bodybg2 rounded-xl p-5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-500 dark:text-white/50 text-sm">Failed</span>
                <span className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center"><i className="bx bx-x-circle text-base" /></span>
              </div>
              <div className="text-2xl font-bold text-red-500 dark:text-red-400">{fmt(stats.failed)}</div>
              <div className="text-xs text-gray-400 mt-1">need attention</div>
            </div>
          </>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-white dark:bg-bodybg2 rounded-xl p-1 border border-gray-100 dark:border-white/10 shadow-sm w-fit">
        {(['overview', 'transactions'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all capitalize ${activeTab === tab ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/80'}`}
          >
            {tab === 'overview' ? <><i className="bx bx-chart me-1.5" />Overview</> : <><i className="bx bx-list-ul me-1.5" />All Transactions</>}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Area Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-bodybg2 rounded-xl p-5 border border-gray-100 dark:border-white/10 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Transaction Trends</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Last 14 days • all agents</p>
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded-md">{areaChartData.categories.length} days</span>
              </div>
              {loading ? (
                <div className="h-64 bg-gray-50 dark:bg-white/5 rounded-lg animate-pulse" />
              ) : (
                <Chart
                  type="area"
                  height={260}
                  series={[
                    { name: 'Successful', data: areaChartData.success },
                    { name: 'Pending', data: areaChartData.pending },
                    { name: 'Failed', data: areaChartData.failed },
                  ]}
                  options={{
                    chart: { toolbar: { show: false }, background: 'transparent', fontFamily: 'inherit' },
                    colors: ['#10b981', '#f59e0b', '#ef4444'],
                    stroke: { curve: 'smooth', width: 2 },
                    fill: { type: 'gradient', gradient: { opacityFrom: 0.3, opacityTo: 0.05 } },
                    xaxis: { categories: areaChartData.categories, labels: { style: { fontSize: '11px', colors: '#94a3b8' } }, axisBorder: { show: false }, axisTicks: { show: false } },
                    yaxis: { labels: { style: { colors: '#94a3b8' }, formatter: (v: number) => String(Math.round(v)) } },
                    grid: { borderColor: '#f1f5f9', strokeDashArray: 4, xaxis: { lines: { show: false } } },
                    legend: { position: 'top', horizontalAlign: 'right', fontSize: '12px' },
                    tooltip: { theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light' },
                    dataLabels: { enabled: false },
                    theme: { mode: document.documentElement.classList.contains('dark') ? 'dark' : 'light' },
                  }}
                />
              )}
            </div>

            {/* Donut Chart */}
            <div className="bg-white dark:bg-bodybg2 rounded-xl p-5 border border-gray-100 dark:border-white/10 shadow-sm">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Status Breakdown</h3>
              <p className="text-xs text-gray-400 mb-4">Current filter results</p>
              {loading ? (
                <div className="h-48 bg-gray-50 dark:bg-white/5 rounded-lg animate-pulse" />
              ) : donutHasData ? (
                <>
                  <Chart
                    type="donut"
                    height={200}
                    series={donutSeries}
                    options={{
                      labels: ['Successful', 'Pending', 'Failed'],
                      colors: ['#10b981', '#f59e0b', '#ef4444'],
                      chart: { background: 'transparent' },
                      plotOptions: { pie: { donut: { size: '70%', labels: { show: true, total: { show: true, label: 'Total', formatter: () => fmt(stats.total) } } } } },
                      legend: { show: false },
                      dataLabels: { enabled: false },
                      theme: { mode: document.documentElement.classList.contains('dark') ? 'dark' : 'light' },
                      stroke: { show: false },
                    }}
                  />
                  <div className="space-y-2 mt-4">
                    {[
                      { label: 'Successful', value: stats.success, color: 'bg-emerald-500' },
                      { label: 'Pending', value: stats.pending, color: 'bg-amber-400' },
                      { label: 'Failed', value: stats.failed, color: 'bg-red-500' },
                    ].map(item => (
                      <div key={item.label} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                          <span className="text-gray-600 dark:text-white/60">{item.label}</span>
                        </div>
                        <span className="font-semibold text-gray-800 dark:text-white">{fmt(item.value)}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                  <i className="bx bx-pie-chart text-4xl mb-2" />
                  <span className="text-sm">No data</span>
                </div>
              )}
            </div>
          </div>

          {/* Provider Breakdown */}
          {providerBreakdown.length > 0 && (
            <div className="bg-white dark:bg-bodybg2 rounded-xl p-5 border border-gray-100 dark:border-white/10 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Volume by Provider</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {providerBreakdown.map(([provider, vol]) => {
                  const pct = stats.volume > 0 ? Math.round((vol / stats.volume) * 100) : 0;
                  const colors: Record<string, string> = { MTN: 'bg-yellow-400', AIRTEL: 'bg-red-500', TIGO: 'bg-blue-500', UNKNOWN: 'bg-gray-400' };
                  const bg = colors[provider] || 'bg-indigo-500';
                  return (
                    <div key={provider} className="relative overflow-hidden rounded-xl border border-gray-100 dark:border-white/10 p-4 bg-gray-50 dark:bg-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-3 h-3 rounded-full ${bg}`} />
                        <span className="font-semibold text-sm text-gray-700 dark:text-white/80">{provider}</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">{fmtAmount(vol)}</div>
                      <div className="text-xs text-gray-400 mt-0.5">RWF · {pct}% of total</div>
                      <div className="mt-3 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full ${bg} rounded-full transition-all`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}

      {activeTab === 'transactions' && (
        <>
          {/* Filters */}
          <div className="bg-white dark:bg-bodybg2 rounded-xl p-5 border border-gray-100 dark:border-white/10 shadow-sm mb-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500 dark:text-white/50">Provider</label>
                <select
                  value={filters.provider}
                  onChange={e => { setFilters(f => ({ ...f, provider: e.target.value })); setPage(0); }}
                  className="px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-[120px]"
                >
                  {PROVIDERS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500 dark:text-white/50">Status</label>
                <select
                  value={filters.status}
                  onChange={e => { setFilters(f => ({ ...f, status: e.target.value })); setPage(0); }}
                  className="px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-[130px]"
                >
                  {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500 dark:text-white/50">Agent ID</label>
                <input
                  type="text"
                  value={agentInput}
                  onChange={e => setAgentInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && applyFilters()}
                  placeholder="Filter by agent..."
                  className="px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-44"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500 dark:text-white/50">From</label>
                <input
                  type="date"
                  value={filters.startDate}
                  onChange={e => { setFilters(f => ({ ...f, startDate: e.target.value })); setPage(0); }}
                  className="px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500 dark:text-white/50">To</label>
                <input
                  type="date"
                  value={filters.endDate}
                  onChange={e => { setFilters(f => ({ ...f, endDate: e.target.value })); setPage(0); }}
                  className="px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500 dark:text-white/50">Per page</label>
                <select
                  value={pageSize}
                  onChange={e => { setPageSize(Number(e.target.value)); setPage(0); }}
                  className="px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {PAGE_SIZE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <div className="flex gap-2 pb-0.5">
                <button
                  onClick={applyFilters}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  <i className="bx bx-search me-1" /> Apply
                </button>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/15 text-gray-600 dark:text-white/70 text-sm font-medium rounded-lg transition-colors"
                >
                  <i className="bx bx-x me-1" /> Reset
                </button>
              </div>
            </div>

            {/* Active filter chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {filters.provider !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700">
                  Provider: {filters.provider}
                  <button onClick={() => { setFilters(f => ({ ...f, provider: 'All' })); setPage(0); }}><i className="bx bx-x" /></button>
                </span>
              )}
              {filters.status !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700">
                  Status: {filters.status}
                  <button onClick={() => { setFilters(f => ({ ...f, status: 'All' })); setPage(0); }}><i className="bx bx-x" /></button>
                </span>
              )}
              {filters.agentId && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700">
                  Agent: {filters.agentId}
                  <button onClick={() => { setFilters(f => ({ ...f, agentId: '' })); setAgentInput(''); setPage(0); }}><i className="bx bx-x" /></button>
                </span>
              )}
              {filters.startDate && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700">
                  From: {filters.startDate}
                  <button onClick={() => { setFilters(f => ({ ...f, startDate: '' })); setPage(0); }}><i className="bx bx-x" /></button>
                </span>
              )}
              {filters.endDate && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700">
                  To: {filters.endDate}
                  <button onClick={() => { setFilters(f => ({ ...f, endDate: '' })); setPage(0); }}><i className="bx bx-x" /></button>
                </span>
              )}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 mb-4">
              <i className="bx bx-error-circle text-xl" />
              <span className="text-sm">{error}</span>
              <button onClick={() => fetchTransactions(filters, page, pageSize)} className="ms-auto text-xs underline">Retry</button>
            </div>
          )}

          {/* Table */}
          <div className="bg-white dark:bg-bodybg2 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-white/10">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">All Transactions</h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  {loading ? 'Loading...' : `${fmt(totalCount)} total · showing ${fmt(Math.min(transactions.length, pageSize))} results`}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Page {page + 1} of {Math.max(1, totalPages)}</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-white/50 uppercase text-[11px] tracking-wider">
                    <th className="px-4 py-3 text-left font-semibold">#</th>
                    <th className="px-4 py-3 text-left font-semibold">Reference</th>
                    <th className="px-4 py-3 text-left font-semibold">Agent ID</th>
                    <th className="px-4 py-3 text-left font-semibold">Customer</th>
                    <th className="px-4 py-3 text-left font-semibold">Phone</th>
                    <th className="px-4 py-3 text-left font-semibold">Provider</th>
                    <th className="px-4 py-3 text-right font-semibold">Amount</th>
                    <th className="px-4 py-3 text-center font-semibold">Status</th>
                    <th className="px-4 py-3 text-left font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                  {loading ? (
                    Array.from({ length: 10 }).map((_, i) => <SkeletonRow key={i} />)
                  ) : transactions.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="text-center py-16 text-gray-400">
                        <div className="flex flex-col items-center gap-2">
                          <i className="bx bx-search-alt text-4xl opacity-40" />
                          <span>No transactions found</span>
                          <button onClick={resetFilters} className="text-xs text-indigo-600 underline mt-1">Clear filters</button>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    transactions.map((t, idx) => {
                      const cfg = statusCfg(t.status);
                      const providerColors: Record<string, string> = {
                        MTN: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
                        AIRTEL: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
                        TIGO: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
                      };
                      return (
                        <tr key={t.id || t.referenceId} className="hover:bg-gray-50/50 dark:hover:bg-white/3 transition-colors group">
                          <td className="px-4 py-3 text-gray-400 text-xs">{page * pageSize + idx + 1}</td>
                          <td className="px-4 py-3">
                            <span className="font-mono text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded">
                              {t.referenceId?.slice(0, 12)}…
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs text-gray-500 dark:text-white/50 font-mono">{t.agentId || '—'}</td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-gray-700 dark:text-white/80">{t.customerName || '—'}</div>
                          </td>
                          <td className="px-4 py-3 text-xs text-gray-500 dark:text-white/50">{t.customerAccountNumber || '—'}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold ${providerColors[(t.provider || '').toUpperCase()] || 'bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-white/70'}`}>
                              {t.provider || '—'}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-gray-800 dark:text-white">
                            {fmt(Number(t.amount || 0))} <span className="text-xs font-normal text-gray-400">{t.currencyCode || 'RWF'}</span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${cfg.badge}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                              {cfg.label}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs text-gray-400">
                            {t.createdAt ? new Date(t.createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 dark:border-white/10">
                <span className="text-xs text-gray-400">
                  Page {page + 1} of {totalPages} · {fmt(totalCount)} total records
                </span>
                <div className="flex gap-1">
                  <button
                    disabled={page === 0 || loading}
                    onClick={() => setPage(0)}
                    className="px-2 py-1.5 rounded-lg text-xs text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 disabled:opacity-30 transition-colors"
                  >
                    <i className="bx bx-chevrons-left" />
                  </button>
                  <button
                    disabled={page === 0 || loading}
                    onClick={() => setPage(p => Math.max(0, p - 1))}
                    className="px-3 py-1.5 rounded-lg text-xs text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 disabled:opacity-30 transition-colors"
                  >
                    <i className="bx bx-chevron-left me-0.5" /> Prev
                  </button>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const start = Math.max(0, Math.min(page - 2, totalPages - 5));
                    const pg = start + i;
                    return (
                      <button
                        key={pg}
                        onClick={() => setPage(pg)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${pg === page ? 'bg-indigo-600 text-white' : 'text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10'}`}
                      >
                        {pg + 1}
                      </button>
                    );
                  })}
                  <button
                    disabled={page >= totalPages - 1 || loading}
                    onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                    className="px-3 py-1.5 rounded-lg text-xs text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 disabled:opacity-30 transition-colors"
                  >
                    Next <i className="bx bx-chevron-right ms-0.5" />
                  </button>
                  <button
                    disabled={page >= totalPages - 1 || loading}
                    onClick={() => setPage(totalPages - 1)}
                    className="px-2 py-1.5 rounded-lg text-xs text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 disabled:opacity-30 transition-colors"
                  >
                    <i className="bx bx-chevrons-right" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CentrikaAdminDashboard;
