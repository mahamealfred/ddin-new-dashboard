import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { 
  Calendar, 
  Search, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  XCircle, 
  DollarSign, 
  Activity,
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  RefreshCw,
  BarChart3,
  PieChart
} from 'lucide-react';

const MOMO_API_URL = 'https://core-api.ddin.rw/v1/thirdparty/collection';
const PERIODS = [
  { label: 'Daily', value: 'daily', icon: '📅' },
  { label: 'Weekly', value: 'weekly', icon: '📊' },
  { label: 'Monthly', value: 'monthly', icon: '📈' },
  { label: 'Quarterly', value: 'quarterly', icon: '📉' },
  { label: 'Yearly', value: 'yearly', icon: '🎯' },
  { label: 'Custom', value: 'custom', icon: '⚙️' },
];

function getDateRange(filter: string) {
  const now = new Date();
  let start, end;
  end = now.toISOString();
  switch (filter) {
    case 'daily':
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      break;
    case 'weekly':
      start = new Date(now);
      start.setDate(now.getDate() - now.getDay());
      break;
    case 'monthly':
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      break;
    case 'quarterly':
      start = new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1);
      break;
    case 'yearly':
      start = new Date(now.getFullYear(), 0, 1);
      break;
    default:
      start = null;
  }
  return {
    start: start ? start.toISOString() : undefined,
    end,
  };
}

function formatCurrency(amount: number, currency = 'RWF') {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(Number(amount));
}

const MomoCollectionsReportAnalytics = () => {
  const [period, setPeriod] = useState('monthly');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [customStart, setCustomStart] = useState('2026-03-09');
  const [customEnd, setCustomEnd] = useState('2026-04-10');

  useEffect(() => {
    fetchData();
  }, [period, search, page, limit, customStart, customEnd]);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      let start: string | undefined, end: string | undefined;
      if (period === 'custom') {
        start = customStart ? new Date(customStart).toISOString() : undefined;
        end = customEnd ? new Date(customEnd).toISOString() : undefined;
      } else {
        const range = getDateRange(period);
        start = range.start;
        end = range.end;
      }
      const params: any = {
        limit,
        offset: (page - 1) * limit,
      };
      if (start && end) {
        params.startDate = start;
        params.endDate = end;
      }
      if (search) {
        params.search = search;
      }
      const res = await axios.get(MOMO_API_URL, { params });
      setData(res.data.data || []);
      setTotal(res.data.count || 0);
    } catch (err) {
      setError('Failed to fetch analytics');
    } finally {
      setLoading(false);
    }
  };

  const summary = useMemo(() => {
    let completed = 0, pending = 0, failed = 0, amount = 0;
    data.forEach((t: any) => {
      const status = String(t.status || '').toLowerCase();
      if (status.includes('success') || status.includes('complete')) completed++;
      else if (status.includes('pending') || status.includes('process')) pending++;
      else if (status.includes('fail') || status.includes('error') || status.includes('reject')) failed++;
      else pending++;
      amount += Number(t.amount || 0);
    });
    return {
      total: data.length,
      completed,
      pending,
      failed,
      amount,
    };
  }, [data]);

  const dailyVolumeChartData = useMemo(() => {
    const map: Record<string, number> = {};
    data.forEach((t: any) => {
      const d = new Date(t.createdAt).toLocaleDateString();
      map[d] = (map[d] || 0) + 1;
    });
    const labels = Object.keys(map);
    const dataArr = Object.values(map);
    return {
      options: {
        chart: { type: 'area', toolbar: { show: false }, zoom: { enabled: false }, background: 'transparent' },
        xaxis: { categories: labels, labels: { style: { colors: ['#64748b', '#cbd5e1'] } } },
        yaxis: { labels: { style: { colors: ['#64748b', '#cbd5e1'] } } },
        stroke: { curve: 'smooth', width: 3, colors: ['#2563eb'] },
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.8, opacityTo: 0.2, colorStops: [{ offset: 0, color: '#2563eb', opacity: 0.8 }, { offset: 100, color: '#60a5fa', opacity: 0.2 }] } },
        grid: { borderColor: '#334155' },
        tooltip: { theme: 'dark' },
      },
      series: [{ name: 'Transactions', data: dataArr }],
    };
  }, [data]);

  const topProvidersChartData = useMemo(() => {
    const map: Record<string, number> = {};
    data.forEach((t: any) => {
      const provider = String(t.provider || 'Unknown').toUpperCase();
      map[provider] = (map[provider] || 0) + Number(t.amount || 0);
    });
    const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 6);
    return {
      options: {
        chart: { type: 'bar', toolbar: { show: false }, background: 'transparent' },
        xaxis: { categories: sorted.map(([p]) => p), labels: { style: { colors: ['#fbbf24', '#f472b6', '#38bdf8', '#a78bfa', '#34d399', '#f87171'] } } },
        yaxis: { labels: { style: { colors: ['#64748b', '#cbd5e1'] } } },
        plotOptions: { bar: { borderRadius: 8, columnWidth: '60%' } },
        colors: ['#22d3ee', '#fbbf24', '#a78bfa', '#f472b6', '#34d399', '#f87171'],
        grid: { borderColor: '#334155' },
        tooltip: { theme: 'dark' },
      },
      series: [{ name: 'Amount (RWF)', data: sorted.map(([, amt]) => amt) }],
    };
  }, [data]);

  const statusPieChartData = useMemo(() => {
    return {
      options: {
        labels: ['Completed', 'Pending', 'Failed'],
        legend: { position: 'bottom', labels: { colors: ['#a3e635', '#fbbf24', '#f87171'] } },
        colors: ['#22c55e', '#fbbf24', '#ef4444'],
        tooltip: { theme: 'dark' },
        dataLabels: { style: { colors: ['#fff'] } },
      },
      series: [summary.completed, summary.pending, summary.failed],
    };
  }, [summary]);

  const countByProviderChartData = useMemo(() => {
    const map: Record<string, number> = {};
    data.forEach((t: any) => {
      const provider = String(t.provider || 'Unknown').toUpperCase();
      map[provider] = (map[provider] || 0) + 1;
    });
    const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 6);
    return {
      options: {
        labels: sorted.map(([p]) => p),
        legend: { position: 'bottom', labels: { colors: ['#38bdf8', '#a78bfa', '#fbbf24', '#f472b6', '#34d399', '#f87171'] } },
        colors: ['#38bdf8', '#a78bfa', '#fbbf24', '#f472b6', '#34d399', '#f87171'],
        tooltip: { theme: 'dark' },
        dataLabels: { style: { colors: ['#fff'] } },
      },
      series: sorted.map(([, count]) => count),
    };
  }, [data]);

  const totalPages = Math.ceil(total / limit);

  const StatCard = ({ title, value, icon: Icon, color, subtitle }: any) => (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all duration-300 group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 dark:from-blue-900/10 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />
      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} bg-opacity-20 mb-4`}>
          <Icon className={`w-6 h-6 ${color.split(' ')[1]?.replace('from-', 'text-') || 'text-blue-400'}`} />
        </div>
        <h3 className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{value}</p>
        {subtitle && <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{subtitle}</p>}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Momo Collections
            </h1>
            <p className="text-gray-400 mt-2">Real-time analytics & transaction insights</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-gray-800/50 backdrop-blur-md rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all flex items-center gap-2 border border-gray-700">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button onClick={fetchData} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white hover:shadow-lg transition-all flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by customer, reference, or provider..."
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {PERIODS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => { setPeriod(f.value); setPage(1); }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    period === f.value 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900 border border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <span>{f.icon}</span>
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          {period === 'custom' && (
            <div className="mt-4 flex flex-col sm:flex-row gap-3 items-end pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">Start Date</label>
                <input
                  type="date"
                  value={customStart}
                  onChange={e => { setCustomStart(e.target.value); setPage(1); }}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">End Date</label>
                <input
                  type="date"
                  value={customEnd}
                  onChange={e => { setCustomEnd(e.target.value); setPage(1); }}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <button className="px-6 py-2 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-500/20 hover:bg-blue-600/20 transition-all">
                Apply Range
              </button>
            </div>
          )}
        </div>

        {/* Loading & Error States */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin mb-4" />
            <p className="text-gray-400">Loading analytics...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-2xl p-6 text-center">
            <p className="text-red-400">{error}</p>
            <button onClick={fetchData} className="mt-4 px-4 py-2 bg-red-200 dark:bg-red-800 rounded-lg text-red-700 dark:text-red-300">Try Again</button>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard title="Total Volume" value={formatCurrency(summary.amount)} icon={DollarSign} color="from-blue-600 to-blue-400" subtitle={`${summary.total} transactions`} />
              <StatCard title="Completed" value={summary.completed} icon={CheckCircle} color="from-green-600 to-green-400" subtitle="Successfully processed" />
              <StatCard title="Pending" value={summary.pending} icon={Clock} color="from-yellow-600 to-yellow-400" subtitle="Awaiting confirmation" />
              <StatCard title="Failed" value={summary.failed} icon={XCircle} color="from-red-600 to-red-400" subtitle="Requires attention" />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Daily Transaction Volume</h3>
                </div>
                <Chart options={dailyVolumeChartData.options} series={dailyVolumeChartData.series} type="area" height={280} />
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Top Providers by Amount</h3>
                </div>
                <Chart options={topProvidersChartData.options} series={topProvidersChartData.series} type="bar" height={280} />
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <PieChart className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Status Distribution</h3>
                </div>
                <Chart options={statusPieChartData.options} series={statusPieChartData.series} type="pie" height={280} />
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <BarChart3 className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-semibold text-white">Transaction Count by Provider</h3>
                </div>
                <Chart options={countByProviderChartData.options} series={countByProviderChartData.series} type="donut" height={280} />
              </div>
            </div>

            {/* Pagination */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                Showing <span className="text-white font-medium">{(page-1)*limit + 1}</span> to <span className="text-white font-medium">{Math.min(page*limit, total)}</span> of <span className="text-white font-medium">{total}</span> transactions
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded-xl bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white disabled:opacity-50 disabled:hover:bg-gray-800/50 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-1">
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    let pageNum = page;
                    if (totalPages <= 5) pageNum = i + 1;
                    else if (page <= 3) pageNum = i + 1;
                    else if (page >= totalPages - 2) pageNum = totalPages - 4 + i;
                    else pageNum = page - 2 + i;
                    
                    if (pageNum > totalPages) return null;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`w-10 h-10 rounded-xl font-medium transition-all ${
                          page === pageNum
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                            : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-2 rounded-xl bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white disabled:opacity-50 disabled:hover:bg-gray-800/50 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <select
                value={limit}
                onChange={e => { setLimit(Number(e.target.value)); setPage(1); }}
                className="px-3 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                {[10, 25, 50, 100].map(l => <option key={l} value={l}>{l} per page</option>)}
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MomoCollectionsReportAnalytics;