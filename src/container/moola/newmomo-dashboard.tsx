import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';
const getToken = () => { try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; } };
const getAuthHeaders = () => ({ Authorization: `Bearer ${getToken()}`, 'Content-Type': 'application/json' });
const getUserData = () => { try { return JSON.parse(localStorage.getItem('userData') || 'null'); } catch { return null; } };

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

const fmt = (n: number) => n.toLocaleString('en-US');

const statusCfg = (status: string) => {
  const s = (status || '').toLowerCase();
  if (s.includes('success') || s.includes('complete'))
    return { label: 'Success', dot: 'bg-emerald-500', badge: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' };
  if (s.includes('fail') || s.includes('error'))
    return { label: 'Failed', dot: 'bg-red-500', badge: 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300' };
  return { label: 'Pending', dot: 'bg-amber-400', badge: 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' };
};

const NewMomoCollectionsDashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState('');
  const [balance, setBalance]           = useState<number | null>(null);
  const [balanceLoading, setBalanceLoading] = useState(true);
  const [lastUpdated, setLastUpdated]   = useState<Date | null>(null);

  const user = getUserData();

  useEffect(() => { fetchData(); fetchBalance(); }, []);

  const fetchData = async () => {
    setLoading(true); setError('');
    try {
      const res = await axios.get(`${API()}/v1/momo/collection/agent/transactions`, {
        headers: getAuthHeaders(), params: { limit: 200, offset: 0 },
      });
      setTransactions(res.data.data || []);
      setLastUpdated(new Date());
    } catch { setError('Failed to load transactions.'); }
    finally { setLoading(false); }
  };

  const fetchBalance = async () => {
    setBalanceLoading(true);
    try {
      const res = await axios.get(`${API()}/v1/agency/accounts/all/accounts/info/balance`, { headers: getAuthHeaders() });
      if (res.data?.success) {
        const all = res.data.accounts || res.data.data?.accounts || [];
        const biz = all.find((a: any) => a.accountName === 'Agent Business Account');
        setBalance(Number(biz?.availableBalance ?? biz?.balance ?? 0));
      }
    } catch { setBalance(null); }
    finally { setBalanceLoading(false); }
  };

  const stats = useMemo(() => {
    let success = 0, pending = 0, failed = 0, collectedAmt = 0;
    transactions.forEach(t => {
      const s = (t.status || '').toLowerCase();
      if (s.includes('success') || s.includes('complete')) { success++; collectedAmt += Number(t.amount || 0); }
      else if (s.includes('fail') || s.includes('error')) failed++;
      else pending++;
    });
    return { total: transactions.length, success, pending, failed, collectedAmt };
  }, [transactions]);

  const successRate = stats.total > 0 ? Math.round((stats.success / stats.total) * 100) : 0;

  const recentTxns = useMemo(() =>
    [...transactions].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5),
    [transactions]
  );

  const areaData = useMemo(() => {
    const map: Record<string, number> = {};
    transactions.forEach(t => {
      const d = new Date(t.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
      map[d] = (map[d] || 0) + Number(t.amount || 0);
    });
    return Object.entries(map).slice(-14);
  }, [transactions]);

  const areaOptions = useMemo(() => ({
    chart: { type: 'area', toolbar: { show: false }, background: 'transparent', sparkline: { enabled: false } },
    xaxis: {
      categories: areaData.map(([d]) => d),
      labels: { style: { colors: '#94a3b8', fontSize: '11px', fontFamily: 'inherit' } },
      axisBorder: { show: false }, axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { colors: '#94a3b8', fontSize: '11px', fontFamily: 'inherit' },
        formatter: (v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v),
      },
    },
    stroke: { curve: 'smooth' as const, width: 2.5, colors: ['#6366f1'] },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical', opacityFrom: 0.3, opacityTo: 0.0,
        colorStops: [{ offset: 0, color: '#6366f1', opacity: 0.3 }, { offset: 100, color: '#6366f1', opacity: 0 }],
      },
    },
    grid: { borderColor: 'rgba(148,163,184,0.08)', strokeDashArray: 4, padding: { left: 8, right: 8, top: 0, bottom: 0 } },
    tooltip: {
      theme: 'dark',
      y: { formatter: (v: number) => `RWF ${fmt(v)}` },
      style: { fontFamily: 'inherit' },
    },
    dataLabels: { enabled: false },
    markers: { size: 0, hover: { size: 5, sizeOffset: 2 } },
  }), [areaData]);

  const donutOptions = useMemo(() => ({
    labels: ['Successful', 'Pending', 'Failed'],
    colors: ['#22c55e', '#f59e0b', '#ef4444'],
    legend: { show: false },
    tooltip: { theme: 'dark', style: { fontFamily: 'inherit' } },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true, label: 'Total', color: '#94a3b8', fontSize: '12px',
              formatter: () => String(stats.total),
            },
            value: { fontSize: '22px', fontWeight: 800, color: '#6366f1', fontFamily: 'inherit' },
            name: { color: '#94a3b8', fontSize: '11px', fontFamily: 'inherit' },
          },
        },
      },
    },
    stroke: { width: 2, colors: ['transparent'] },
  }), [stats]);

  const kpiCards = [
    {
      label: 'Total Collected',
      value: `RWF ${fmt(stats.collectedAmt)}`,
      sub: `${stats.success} successful transaction${stats.success !== 1 ? 's' : ''}`,
      icon: 'bx bx-trending-up',
      accentBar: 'bg-indigo-500',
      iconBg: 'bg-indigo-50 dark:bg-indigo-900/30',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      trend: stats.success > 0 ? '+active' : null,
    },
    {
      label: 'Successful',
      value: String(stats.success),
      sub: `${successRate}% success rate`,
      icon: 'bx bx-check-circle',
      accentBar: 'bg-emerald-500',
      iconBg: 'bg-emerald-50 dark:bg-emerald-900/30',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      trend: null,
    },
    {
      label: 'Pending',
      value: String(stats.pending),
      sub: 'Awaiting confirmation',
      icon: 'bx bx-time-five',
      accentBar: 'bg-amber-400',
      iconBg: 'bg-amber-50 dark:bg-amber-900/30',
      iconColor: 'text-amber-600 dark:text-amber-400',
      trend: null,
    },
    {
      label: 'Failed',
      value: String(stats.failed),
      sub: stats.failed > 0 ? 'Require attention' : 'No failures',
      icon: 'bx bx-x-circle',
      accentBar: stats.failed > 0 ? 'bg-red-500' : 'bg-gray-300',
      iconBg: stats.failed > 0 ? 'bg-red-50 dark:bg-red-900/30' : 'bg-gray-100 dark:bg-gray-700',
      iconColor: stats.failed > 0 ? 'text-red-600 dark:text-red-400' : 'text-gray-400',
      trend: null,
    },
  ];

  const quickActions = [
    { label: 'New Collection', icon: 'bx bx-plus-circle', to: `${import.meta.env.BASE_URL}moola/new-momo/collect`,       color: 'bg-indigo-600 hover:bg-indigo-700 text-white' },
    { label: 'Transactions',  icon: 'bx bx-list-ul',     to: `${import.meta.env.BASE_URL}moola/new-momo/transactions`,   color: 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600' },
    { label: 'Webhooks',      icon: 'bx bx-link-alt',    to: `${import.meta.env.BASE_URL}moola/new-momo/webhooks`,       color: 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600' },
    { label: 'Bank Details',  icon: 'bx bx-buildings',   to: `${import.meta.env.BASE_URL}moola/new-momo/bank-details`,   color: 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600' },
  ];

  return (
    <>
      <Pageheader currentpage="Dashboard" activepage="New MoMo Collections" mainpage="MoMo Collections" />

      <div className="space-y-5">

        {/* ── Top header bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              {getGreeting()}, {user?.name?.split(' ')[0] || 'there'}
            </h2>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5 flex items-center gap-2">
              <i className="bx bx-calendar text-base" />
              {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              {lastUpdated && (
                <span className="text-gray-300 dark:text-gray-600">·</span>
              )}
              {lastUpdated && (
                <span className="text-xs">Updated {lastUpdated.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => { fetchData(); fetchBalance(); }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
            >
              <i className="bx bx-refresh text-base" /> Refresh
            </button>
            <Link
              to={`${import.meta.env.BASE_URL}moola/new-momo/collect`}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-xl text-sm shadow-sm transition-colors"
            >
              <i className="bx bx-plus text-lg" /> New Collection
            </Link>
          </div>
        </div>

        {/* ── Balance hero + 4 KPI cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {/* Balance Card — spans 1 col on sm, 2 on lg */}
          <div className="sm:col-span-2 lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between min-h-[180px]">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/5 rounded-full pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="bx bx-wallet text-base" />
                  </div>
                  <span className="text-white/75 text-xs font-semibold uppercase tracking-widest">Business Wallet</span>
                </div>
                <button onClick={fetchBalance} className="w-7 h-7 bg-white/10 hover:bg-white/25 rounded-lg flex items-center justify-center transition-colors" title="Refresh balance">
                  <i className="bx bx-refresh text-sm" />
                </button>
              </div>

              {balanceLoading ? (
                <div className="space-y-2">
                  <div className="h-8 w-32 bg-white/20 rounded-lg animate-pulse" />
                  <div className="h-3 w-20 bg-white/10 rounded animate-pulse" />
                </div>
              ) : (
                <>
                  <p className="text-[11px] text-white/50 mb-0.5">Available Balance</p>
                  <p className="text-3xl font-extrabold tracking-tight leading-none">
                    {balance !== null ? fmt(balance) : '—'}
                  </p>
                  <p className="text-white/50 text-xs mt-1">RWF · Agent Business Account</p>
                </>
              )}
            </div>

            <div className="relative z-10 mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-2">
              <div>
                <p className="text-white/45 text-[10px] uppercase tracking-wide mb-0.5">Success Rate</p>
                <p className="text-lg font-extrabold">{successRate}%</p>
              </div>
              <div>
                <p className="text-white/45 text-[10px] uppercase tracking-wide mb-0.5">Total Txns</p>
                <p className="text-lg font-extrabold">{stats.total}</p>
              </div>
            </div>
          </div>

          {/* 4 KPI cards */}
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 animate-pulse">
                <div className="h-3 w-16 bg-gray-200 dark:bg-gray-600 rounded mb-4" />
                <div className="h-7 w-24 bg-gray-200 dark:bg-gray-600 rounded mb-2" />
                <div className="h-2.5 w-14 bg-gray-100 dark:bg-gray-700 rounded" />
              </div>
            ))
          ) : (
            kpiCards.map(card => (
              <div key={card.label} className="relative bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-200 group">
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${card.accentBar}`} />
                <div className="flex items-start justify-between mb-3">
                  <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-tight pr-2">{card.label}</p>
                  <div className={`w-9 h-9 rounded-xl ${card.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <i className={`${card.icon} text-xl ${card.iconColor}`} />
                  </div>
                </div>
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-none mb-1.5">
                  {card.value}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-tight">{card.sub}</p>
              </div>
            ))
          )}
        </div>

        {/* ── Error banner ── */}
        {error && (
          <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4">
            <i className="bx bx-error-circle text-red-500 text-xl flex-shrink-0" />
            <span className="text-red-700 dark:text-red-400 text-sm flex-1">{error}</span>
            <button onClick={fetchData} className="text-sm text-red-600 dark:text-red-400 font-semibold hover:underline flex-shrink-0">Retry</button>
          </div>
        )}

        {/* ── Main content grid ── */}
        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Left — Area chart + Recent transactions */}
            <div className="lg:col-span-2 space-y-5">

              {/* Area chart */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Collection Volume</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Daily collected amount — last 14 days (RWF)</p>
                  </div>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-lg">
                    {areaData.length} days
                  </span>
                </div>
                {areaData.length > 0 ? (
                  <Chart
                    options={areaOptions as any}
                    series={[{ name: 'Collected (RWF)', data: areaData.map(([, v]) => v) }]}
                    type="area"
                    height={220}
                  />
                ) : (
                  <div className="h-52 flex flex-col items-center justify-center gap-3 text-center">
                    <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                      <i className="bx bx-line-chart text-3xl text-gray-300 dark:text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">No collection data yet</p>
                      <p className="text-xs text-gray-400 mt-0.5">Data appears once collections are made</p>
                    </div>
                    <Link
                      to={`${import.meta.env.BASE_URL}moola/new-momo/collect`}
                      className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                    >
                      Start your first collection →
                    </Link>
                  </div>
                )}
              </div>

              {/* Recent Transactions mini-table */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Last 5 transactions</p>
                  </div>
                  <Link
                    to={`${import.meta.env.BASE_URL}moola/new-momo/transactions`}
                    className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    View all <i className="bx bx-chevron-right text-sm" />
                  </Link>
                </div>

                {recentTxns.length === 0 ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                      <i className="bx bx-receipt text-2xl text-gray-300 dark:text-gray-600" />
                    </div>
                    <p className="text-sm text-gray-400">No transactions yet</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-50 dark:divide-gray-700/60">
                    {recentTxns.map((tx, i) => {
                      const cfg = statusCfg(tx.status);
                      return (
                        <div key={tx.referenceId || i} className="flex items-center gap-3 px-6 py-3.5 hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition-colors">
                          {/* Provider icon */}
                          <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 text-sm font-bold text-gray-600 dark:text-gray-300">
                            {(tx.provider || 'M').charAt(0).toUpperCase()}
                          </div>
                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
                              {tx.customerName || '—'}
                            </p>
                            <p className="text-xs text-gray-400 font-mono truncate">{tx.referenceId || '—'}</p>
                          </div>
                          {/* Amount */}
                          <div className="text-right flex-shrink-0">
                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                              RWF {fmt(Number(tx.amount || 0))}
                            </p>
                            <p className="text-[10px] text-gray-400">
                              {tx.createdAt ? new Date(tx.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : '—'}
                            </p>
                          </div>
                          {/* Status badge */}
                          <span className={`flex-shrink-0 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full ${cfg.badge}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                            {cfg.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-5">

              {/* Success rate ring */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Status Breakdown</h3>
                  <span className="text-xs text-gray-400">{stats.total} total</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">Transaction outcomes</p>

                {stats.total > 0 ? (
                  <>
                    <Chart
                      options={donutOptions as any}
                      series={[stats.success, stats.pending, stats.failed]}
                      type="donut"
                      height={175}
                    />
                    <div className="space-y-2.5 mt-3">
                      {[
                        { label: 'Successful', val: stats.success,  pct: stats.total > 0 ? Math.round(stats.success / stats.total * 100) : 0,  dot: 'bg-emerald-500', bar: 'bg-emerald-500' },
                        { label: 'Pending',    val: stats.pending,  pct: stats.total > 0 ? Math.round(stats.pending  / stats.total * 100) : 0,  dot: 'bg-amber-400',  bar: 'bg-amber-400' },
                        { label: 'Failed',     val: stats.failed,   pct: stats.total > 0 ? Math.round(stats.failed   / stats.total * 100) : 0,  dot: 'bg-red-500',    bar: 'bg-red-400' },
                      ].map(leg => (
                        <div key={leg.label}>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${leg.dot}`} />
                              <span className="text-xs text-gray-500 dark:text-gray-400">{leg.label}</span>
                            </div>
                            <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{leg.val} <span className="font-normal text-gray-400">({leg.pct}%)</span></span>
                          </div>
                          <div className="h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className={`h-full ${leg.bar} rounded-full transition-all duration-700`} style={{ width: `${leg.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="h-40 flex flex-col items-center justify-center gap-2 text-center">
                    <i className="bx bx-pie-chart-alt-2 text-4xl text-gray-200 dark:text-gray-700" />
                    <p className="text-xs text-gray-400">No transaction data</p>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map(a => (
                    <Link
                      key={a.label}
                      to={a.to}
                      className={`flex flex-col items-center justify-center gap-2 py-4 rounded-xl text-xs font-semibold transition-all duration-150 ${a.color}`}
                    >
                      <i className={`${a.icon} text-xl`} />
                      <span className="leading-tight text-center">{a.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Agent info card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-lg font-extrabold">
                    {(user?.name || user?.username || 'U').charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{user?.name || user?.username || '—'}</p>
                    <p className="text-xs text-gray-400 truncate">{user?.email || '—'}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Agent ID',  value: user?.id || '—' },
                    { label: 'Role',      value: user?.role || '—' },
                    { label: 'Provider',  value: 'MTN MoMo' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{label}</span>
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 font-mono">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default NewMomoCollectionsDashboard;
