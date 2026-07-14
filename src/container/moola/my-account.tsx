import { FC, useEffect, useState } from 'react';
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

interface UserData {
  id?: string | number;
  name?: string;
  email?: string;
  username?: string;
  role?: string;
  phoneNumber?: string;
}

const avatarColors = [
  'from-indigo-500 to-indigo-600',
  'from-emerald-500 to-indigo-600',
  'from-red-500 to-indigo-600',
  'from-amber-500 to-amber-600',
];

const getAvatarColor = (name: string) => avatarColors[(name.charCodeAt(0) || 0) % avatarColors.length];

const roleColor = (role?: string) => {
  switch ((role || '').toLowerCase()) {
    case 'staff':    return 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300';
    case 'agent':    return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300';
    case 'corporate': return 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300';
    default:          return 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300';
  }
};

const MyAccount: FC = () => {
  const [user, setUser]         = useState<UserData>({});
  const [accounts, setAccounts] = useState<any[]>([]);
  const [accsLoading, setAccsLoading] = useState(true);
  const [copied, setCopied]     = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('userData');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  useEffect(() => {
    const fetchAccounts = async () => {
      setAccsLoading(true);
      try {
        const res = await axios.get(`${API()}/v1/agency/accounts/all/accounts/info/balance`, { headers: authHeaders() });
        if (res.data?.success) {
          const all = res.data.accounts || res.data.data?.accounts || [];
          setAccounts(all.filter((a: any) =>
            a.accountName === 'Agent Business Account' || a.accountName === 'Agent Float A/C'
          ));
        }
      } catch { setAccounts([]); }
      finally { setAccsLoading(false); }
    };
    fetchAccounts();
  }, []);

  const copyId = () => {
    if (!user.id) return;
    navigator.clipboard.writeText(String(user.id));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const initials = (user.name || user.username || 'U').charAt(0).toUpperCase();
  const avatarGrad = getAvatarColor(user.name || user.username || 'U');

  const profileFields = [
    { icon: 'bx-user', label: 'Username',     value: user.username,    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' },
    { icon: 'bx-envelope', label: 'Email',    value: user.email,       color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' },
    { icon: 'bx-phone', label: 'Phone',       value: user.phoneNumber, color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' },
    { icon: 'bx-shield-alt-2', label: 'Role', value: user.role,        color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' },
  ];

  const accCardColors = [
    'from-indigo-600 via-indigo-700 to-indigo-800',
    'from-emerald-600 via-emerald-700 to-indigo-800',
  ];

  return (
    <>
      <Pageheader currentpage="My Account" activepage="Dashboard" mainpage="Account" />

      <div className="space-y-5">

        {/* ── Hero Profile Card ── */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl p-6 text-white shadow-lg">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Avatar */}
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${avatarGrad} flex items-center justify-center text-white text-3xl font-extrabold shadow-lg flex-shrink-0 border-2 border-white/30`}>
              {initials}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-xl font-bold">{user.name || 'User'}</h2>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold bg-white/20`}>
                  {user.role || 'User'}
                </span>
              </div>
              <p className="text-white/70 text-sm">{user.email || '—'}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-white/60">Agent ID:</span>
                <span className="font-mono text-xs text-white/90 bg-white/10 px-2 py-0.5 rounded">{user.id || '—'}</span>
                <button
                  onClick={copyId}
                  className="text-white/60 hover:text-white transition-colors"
                  title="Copy ID"
                >
                  <i className={`bx ${copied ? 'bx-check' : 'bx-copy'} text-sm`} />
                </button>
              </div>
            </div>

            {/* Status badge */}
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <div className="flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Balance Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {accsLoading ? (
            [0, 1].map(i => (
              <div key={i} className="rounded-2xl h-36 bg-gray-200 dark:bg-gray-700 animate-pulse" />
            ))
          ) : accounts.length === 0 ? (
            <div className="sm:col-span-2 flex items-center justify-center gap-3 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <i className="bx bx-wallet text-3xl text-gray-300 dark:text-gray-600" />
              <p className="text-sm text-gray-500 dark:text-gray-400">No account balances found</p>
            </div>
          ) : (
            accounts.map((acc, i) => (
              <div key={acc.accountId} className={`relative overflow-hidden bg-gradient-to-br ${accCardColors[i % accCardColors.length]} rounded-2xl p-5 text-white shadow-lg`}>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="bx bx-credit-card text-xl" />
                    </div>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-semibold">
                      {acc.currency || 'RWF'}
                    </span>
                  </div>
                  <p className="text-xs text-white/70 mb-1">{acc.accountName}</p>
                  <p className="text-2xl font-extrabold tracking-tight">
                    {acc.formattedAvailableBalance || acc.formattedBalance || '0'}
                  </p>
                  <p className="text-xs text-white/60 mt-1.5">ID: {acc.accountId}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          {/* ── Profile Details (2/3) ── */}
          <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
              <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                <i className="bx bx-id-card text-indigo-600 dark:text-indigo-400 text-lg" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Profile Information</h3>
                <p className="text-xs text-gray-400">Your account details from the system</p>
              </div>
            </div>

            <div className="p-6">
              {/* Avatar + name row */}
              <div className="flex items-center gap-4 mb-6 pb-5 border-b border-gray-100 dark:border-gray-700">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarGrad} flex items-center justify-center text-white text-2xl font-extrabold flex-shrink-0`}>
                  {initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{user.name || 'User'}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{user.email || '—'}</p>
                  <span className={`inline-block mt-1.5 text-xs px-2.5 py-0.5 rounded-full font-semibold ${roleColor(user.role)}`}>
                    {user.role || 'User'}
                  </span>
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileFields.map(f => (
                  <div key={f.label} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${f.color}`}>
                      <i className={`bx ${f.icon} text-lg`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{f.label}</p>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">{f.value || '—'}</p>
                    </div>
                  </div>
                ))}

                {/* Agent ID full-width */}
                <div className="sm:col-span-2 flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                    <i className="bx bx-fingerprint text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Agent / User ID</p>
                    <p className="font-mono text-sm font-semibold text-gray-800 dark:text-gray-100">{user.id || '—'}</p>
                  </div>
                  <button
                    onClick={copyId}
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors ${copied ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'}`}
                  >
                    <i className={`bx ${copied ? 'bx-check' : 'bx-copy'} text-sm`} />
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right panel (1/3) ── */}
          <div className="xl:col-span-1 space-y-5">

            {/* Account summary */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                  <i className="bx bx-bar-chart-alt-2 text-emerald-600 dark:text-emerald-400 text-lg" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Account Summary</h3>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: 'Linked Accounts', value: accsLoading ? '…' : String(accounts.length) },
                  { label: 'Account Status',  value: 'Active' },
                  { label: 'Settlement Currency', value: 'RWF' },
                  { label: 'Member Since',    value: '—' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between py-1.5 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
                    <span className={`text-xs font-semibold ${value === 'Active' ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-800 dark:text-gray-200'}`}>
                      {value === 'Active' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 mb-0.5" />}
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
