import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';

const authHeaders = () => {
  try {
    const raw = localStorage.getItem('token');
    const token = raw ? JSON.parse(raw) : null;
    return token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : {};
  } catch { return {}; }
};

const getUserData = () => {
  try {
    const raw = localStorage.getItem('userData');
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
};

const inputCls =
  'w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition';

const DURATIONS = ['Daily', 'Weekly', 'Monthly'];

const Settlement: FC = () => {
  const userData = getUserData();

  const [balance, setBalance] = useState('—');
  const [balanceLoading, setBalanceLoading] = useState(true);

  const [autoEnabled, setAutoEnabled]   = useState(() => localStorage.getItem('settlement_auto_enabled') === 'true');
  const [autoDuration, setAutoDuration] = useState(() => localStorage.getItem('settlement_auto_duration') || 'Daily');

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate]     = useState('');
  const [includeZero, setIncludeZero] = useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      setBalanceLoading(true);
      try {
        const res = await axios.get(`${API()}/v1/agency/accounts/all/accounts/info/balance`, { headers: authHeaders() });
        if (res.data?.success) {
          const all = res.data.accounts || res.data.data?.accounts || [];
          const biz = all.find((a: any) => a.accountName === 'Agent Business Account');
          setBalance(biz ? (biz.formattedAvailableBalance || biz.formattedBalance) : '0');
        }
      } catch { setBalance('0'); }
      finally { setBalanceLoading(false); }
    };
    fetchBalance();
  }, []);

  useEffect(() => {
    localStorage.setItem('settlement_auto_enabled', String(autoEnabled));
    localStorage.setItem('settlement_auto_duration', autoDuration);
  }, [autoEnabled, autoDuration]);

  const resetFilters = () => { setFromDate(''); setToDate(''); setIncludeZero(false); };

  return (
    <>
      <Pageheader currentpage="Settlement" activepage="New MoMo Collections" mainpage="Settlement" />

      <div className="space-y-5">

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl p-6 text-white shadow-lg">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5">
            {/* Balance */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="bx bx-transfer-alt text-3xl" />
              </div>
              <div>
                <p className="text-xs text-white/70 mb-1">Settlement Wallet Balance</p>
                {balanceLoading ? (
                  <div className="h-8 w-36 bg-white/20 animate-pulse rounded-lg" />
                ) : (
                  <p className="text-3xl font-extrabold tracking-tight">{balance} <span className="text-lg font-semibold text-white/80">RWF</span></p>
                )}
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-white/70">Settlement service active</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                to={`${import.meta.env.BASE_URL}moola/new-momo/bank-details`}
                className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                <i className="bx bx-buildings" /> Manage Bank Details
              </Link>
              <button
                type="button"
                className="px-4 py-2.5 rounded-xl bg-white text-indigo-700 hover:bg-gray-100 text-sm font-semibold flex items-center gap-2 shadow-lg transition-colors"
              >
                <i className="bx bx-play-circle" /> Run Manual Settlement
              </button>
            </div>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-l-4 border-emerald-500 p-5 shadow-sm">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Total Settled</p>
            <p className="text-3xl font-extrabold text-gray-900 dark:text-white">0 <span className="text-base font-semibold text-gray-400">RWF</span></p>
            <p className="text-xs text-gray-400 mt-1">No settlements recorded yet</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-l-4 border-amber-500 p-5 shadow-sm">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Pending Settlement</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">N/A</p>
            <p className="text-xs text-gray-400 mt-1">Awaiting eligible transactions</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-l-4 border-indigo-500 p-5 shadow-sm">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Auto Settlement</p>
            <div className="flex items-center gap-2 mt-1">
              <span className={`w-2.5 h-2.5 rounded-full ${autoEnabled ? 'bg-emerald-500 animate-pulse' : 'bg-gray-300'}`} />
              <p className="text-sm font-bold text-gray-900 dark:text-white">{autoEnabled ? 'Enabled' : 'Disabled'}</p>
            </div>
            <p className="text-xs text-gray-400 mt-1">Frequency: {autoDuration}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          {/* ── Settlement History (2/3) ── */}
          <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
              <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                <i className="bx bx-history text-indigo-600 dark:text-indigo-400 text-lg" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Settlement History</h3>
                <p className="text-xs text-gray-400">View and filter past settlement records</p>
              </div>
            </div>

            {/* Filters */}
            <div className="p-5 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">From Date</label>
                  <input
                    type="date"
                    value={fromDate}
                    onChange={e => setFromDate(e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">To Date</label>
                  <input
                    type="date"
                    value={toDate}
                    onChange={e => setToDate(e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div className="flex items-center gap-2 pb-1">
                  <input
                    type="checkbox"
                    id="includeZero"
                    checked={includeZero}
                    onChange={e => setIncludeZero(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="includeZero" className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    Include zero-amount
                  </label>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 px-3 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors"
                  >
                    Apply
                  </button>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="flex-1 px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700/40">
                    {['Vendor', 'Date Range', 'Created At', 'Amount (RWF)', 'Fee %', 'Reservation %', 'Settled (RWF)', 'Bank', 'Account', 'Txns', 'Type', 'Status', ''].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  <tr>
                    <td colSpan={13} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                          <i className="bx bx-receipt text-3xl text-gray-300 dark:text-gray-600" />
                        </div>
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">No settlement records</p>
                        <p className="text-xs text-gray-400">Once settlements are processed, records will appear here.</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
              <p className="text-xs text-gray-400">Showing 0 records · Page 1 of 0</p>
            </div>
          </div>

          {/* ── Right panel (1/3) ── */}
          <div className="xl:col-span-1 space-y-5">

            {/* Auto Settlement config */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                  <i className="bx bx-refresh text-indigo-600 dark:text-indigo-400 text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Auto Settlement</h3>
                  <p className="text-xs text-gray-400">Configure automatic payouts</p>
                </div>
              </div>
              <div className="p-5 space-y-4">

                {/* Toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/40">
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Activate Auto Settlement</p>
                    <p className="text-xs text-gray-400">Automatically settle collected funds</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAutoEnabled(v => !v)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${autoEnabled ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-600'}`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${autoEnabled ? 'translate-x-5' : 'translate-x-0'}`}
                    />
                  </button>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Settlement Frequency</label>
                  <div className="grid grid-cols-3 gap-2">
                    {DURATIONS.map(d => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setAutoDuration(d)}
                        className={`py-2 rounded-xl text-xs font-semibold transition-colors ${autoDuration === d ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                  {[
                    { label: 'Next Settlement', value: 'N/A' },
                    { label: 'Last Settlement', value: 'N/A' },
                    { label: 'Account', value: 'Not linked' },
                    { label: 'Settled Amount', value: '0 RWF' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-1.5">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <div className="w-9 h-9 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                  <i className="bx bx-check-shield text-amber-600 dark:text-amber-400 text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Readiness Checklist</h3>
                  <p className="text-xs text-gray-400">Complete these before settling</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                  <p className="text-xs text-gray-700 dark:text-gray-300">Register a bank account to receive payouts.</p>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                  <p className="text-xs text-gray-700 dark:text-gray-300">Settlement service is active and ready.</p>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                  <p className="text-xs text-gray-700 dark:text-gray-300">Review auto-settlement frequency before activating.</p>
                </div>
                <Link
                  to={`${import.meta.env.BASE_URL}moola/new-momo/bank-details`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors mt-1"
                >
                  <i className="bx bx-buildings" /> Go to Bank Details
                </Link>
              </div>
            </div>

            {/* Info box */}
            <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-700/30 flex items-start gap-3">
              <i className="bx bx-info-circle text-indigo-500 text-lg flex-shrink-0 mt-0.5" />
              <p className="text-xs text-indigo-700 dark:text-indigo-300 leading-relaxed">
                All settlements are processed in <strong>RWF</strong>. Service commission is automatically deducted before payout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settlement;
