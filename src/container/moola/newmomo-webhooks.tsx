import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';
const getToken = () => { try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; } };
const authHeaders = () => ({ Authorization: `Bearer ${getToken()}`, 'Content-Type': 'application/json' });
const getUserData = () => { try { return JSON.parse(localStorage.getItem('userData') || 'null'); } catch { return null; } };

const ALL_EVENTS = ['collection.success', 'collection.failed', 'collection.pending'];

function eventStyle(ev: string) {
  if (ev.includes('success')) return { dot: 'bg-emerald-500', pill: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700' };
  if (ev.includes('failed'))  return { dot: 'bg-red-500',     pill: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700' };
  return                             { dot: 'bg-amber-400',   pill: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700' };
}

const Spinner = () => (
  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
  </svg>
);

interface SubForm { clientId: string; clientName: string; callbackUrl: string; events: string[]; }

const inputCls = "w-full px-3 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition";
const inputIconCls = "w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition";

const NewMomoWebhooks: FC = () => {
  const [tab, setTab] = useState<'subscriptions' | 'logs'>('subscriptions');

  const userData = getUserData();
  const agentClientId = String(userData?.id || userData?.username || '');

  const [subs, setSubs]                 = useState<any[]>([]);
  const [subsLoading, setSubsLoading]   = useState(false);
  const [subsError, setSubsError]       = useState('');
  const [form, setForm]                 = useState<SubForm>({ clientId: agentClientId, clientName: userData?.name || '', callbackUrl: '', events: ['collection.success', 'collection.failed'] });
  const [submitting, setSubmitting]     = useState(false);
  const [formResult, setFormResult]     = useState<{ type: 'success' | 'error'; message: string; secret?: string } | null>(null);
  const [deletingId, setDeletingId]         = useState<string | null>(null);
  const [confirmDeleteSub, setConfirmDeleteSub] = useState<any | null>(null);
  const [deleteError, setDeleteError]       = useState('');
  const [copiedSecret, setCopiedSecret]     = useState(false);
  const [copiedPayload, setCopiedPayload]   = useState(false);

  const [logs, setLogs]                   = useState<any[]>([]);
  const [logsLoading, setLogsLoading]     = useState(false);
  const [logsError, setLogsError]         = useState('');
  const [logRef, setLogRef]               = useState('');
  const [logStatusFilter, setLogStatusFilter] = useState<'all' | 'success' | 'failed'>('all');
  const [logsTotal, setLogsTotal]         = useState(0);
  const [logsPage, setLogsPage]           = useState(1);
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);
  const logsLimit = 20;

  useEffect(() => { fetchSubs(); }, []);
  useEffect(() => { if (tab === 'logs') fetchLogs(); }, [tab, logsPage]);

  const fetchSubs = async () => {
    setSubsLoading(true); setSubsError('');
    try {
      const res = await axios.get(`${API()}/v1/momo/webhooks/subscriptions`, { headers: authHeaders() });
      setSubs(res.data.data || []);
    } catch { setSubsError('Failed to load subscriptions.'); }
    finally { setSubsLoading(false); }
  };

  const fetchLogs = async () => {
    setLogsLoading(true); setLogsError('');
    try {
      const params: any = { limit: logsLimit, offset: (logsPage - 1) * logsLimit };
      if (logRef.trim()) params.referenceId = logRef.trim();
      const res = await axios.get(`${API()}/v1/momo/webhooks/delivery-logs`, { headers: authHeaders(), params });
      setLogs(res.data.data || []);
      setLogsTotal(res.data.count || 0);
    } catch { setLogsError('Failed to load delivery logs.'); }
    finally { setLogsLoading(false); }
  };

  const toggleEvent = (ev: string) =>
    setForm(f => ({ ...f, events: f.events.includes(ev) ? f.events.filter(e => e !== ev) : [...f.events, ev] }));

  const registerSub = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.clientId.trim() || !form.callbackUrl.trim()) {
      setFormResult({ type: 'error', message: 'Client ID and Callback URL are required.' });
      return;
    }
    if (form.events.length === 0) {
      setFormResult({ type: 'error', message: 'Select at least one event to subscribe to.' });
      return;
    }
    setSubmitting(true); setFormResult(null);
    try {
      const res = await axios.post(`${API()}/v1/momo/webhooks/subscriptions`, {
        clientId:    form.clientId.trim(),
        clientName:  form.clientName.trim() || form.clientId.trim(),
        callbackUrl: form.callbackUrl.trim(),
        events:      form.events.join(','),
      }, { headers: authHeaders() });
      setFormResult({ type: 'success', message: res.data?.message || 'Webhook registered!', secret: res.data?.data?.secret });
      setForm(f => ({ ...f, callbackUrl: '', events: ['collection.success', 'collection.failed'] }));
      await fetchSubs();
    } catch (err: any) {
      setFormResult({ type: 'error', message: err.response?.data?.message || 'Failed to register webhook.' });
    } finally { setSubmitting(false); }
  };

  const confirmDelete = (sub: any) => {
    setDeleteError('');
    setConfirmDeleteSub(sub);
  };

  const deleteSub = async () => {
    if (!confirmDeleteSub) return;
    const clientId = confirmDeleteSub.clientId;
    setDeletingId(clientId);
    setDeleteError('');
    try {
      await axios.delete(`${API()}/v1/momo/webhooks/subscriptions/${clientId}`, { headers: authHeaders() });
      setConfirmDeleteSub(null);
      await fetchSubs();
    } catch (err: any) {
      setDeleteError(err.response?.data?.message || 'Failed to remove webhook. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const copySecret = (secret: string) => {
    navigator.clipboard.writeText(secret);
    setCopiedSecret(true);
    setTimeout(() => setCopiedSecret(false), 2000);
  };

  const logsTotalPages = Math.max(1, Math.ceil(logsTotal / logsLimit));

  return (
    <>
      <Pageheader currentpage="Webhooks" activepage="New MoMo Collections" mainpage="Webhook Management" />

      <div className="space-y-5">

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl p-6 text-white shadow-lg">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <i className="bx bx-link-alt text-3xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold mb-1">Webhook Callbacks</h2>
              <p className="text-white/75 text-sm leading-relaxed">
                Register a Callback URL to get real-time POST notifications when a payment succeeds, fails, or is pending.
                Each request includes an <span className="font-mono bg-white/10 px-1 rounded text-xs">X-Moola-Signature</span> header you can use to verify authenticity.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-1.5 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                collection.success
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                collection.failed
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                collection.pending
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 w-fit">
          {([
            { key: 'subscriptions', label: 'Subscriptions', icon: 'bx bx-bell' },
            { key: 'logs',          label: 'Delivery Logs', icon: 'bx bx-history' },
          ] as const).map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                tab === t.key
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <i className={t.icon} />
              {t.label}
              {t.key === 'subscriptions' && subs.length > 0 && (
                <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  {subs.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ═══ Subscriptions Tab ═══ */}
        {tab === 'subscriptions' && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

            {/* Register form — 2 cols */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                  <i className="bx bx-plus-circle text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white leading-none">Register Webhook</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Add a new callback endpoint</p>
                </div>
              </div>

              {/* Result banner */}
              {formResult && (
                <div className={`mb-5 rounded-xl border p-4 ${
                  formResult.type === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700'
                    : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'
                }`}>
                  <div className="flex items-start gap-2">
                    <i className={`text-xl mt-0.5 flex-shrink-0 ${formResult.type === 'success' ? 'bx bx-check-circle text-emerald-500' : 'bx bx-x-circle text-red-500'}`} />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold ${formResult.type === 'success' ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'}`}>
                        {formResult.message}
                      </p>
                      {formResult.secret && (
                        <div className="mt-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700 rounded-xl p-3 space-y-2">
                          <div className="flex items-center gap-1.5">
                            <i className="bx bx-key text-amber-600 dark:text-amber-400 text-base" />
                            <p className="text-xs font-bold text-amber-700 dark:text-amber-400">Signing Secret — copy now, won't show again</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <code className="flex-1 block text-xs font-mono text-amber-800 dark:text-amber-300 break-all bg-amber-100 dark:bg-amber-900/40 rounded-lg p-2.5">
                              {formResult.secret}
                            </code>
                            <button
                              onClick={() => copySecret(formResult.secret!)}
                              className="flex-shrink-0 p-2 bg-amber-200 dark:bg-amber-800 hover:bg-amber-300 dark:hover:bg-amber-700 rounded-lg transition-colors"
                              title="Copy secret"
                            >
                              <i className={`bx ${copiedSecret ? 'bx-check text-emerald-600' : 'bx-copy text-amber-700 dark:text-amber-300'} text-base`} />
                            </button>
                          </div>
                          <p className="text-xs text-amber-600 dark:text-amber-500">
                            Verify <code className="font-mono">X-Moola-Signature</code> header using HMAC-SHA256 with this secret.
                          </p>
                        </div>
                      )}
                    </div>
                    <button onClick={() => setFormResult(null)} className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                      <i className="bx bx-x text-xl" />
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={registerSub} className="space-y-4">
                {/* Client ID — read-only, from login */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                    Client ID
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50">
                    <i className="bx bx-user-circle text-gray-400 text-lg flex-shrink-0" />
                    <span className="text-sm font-mono text-gray-700 dark:text-gray-200 flex-1 truncate">{agentClientId}</span>
                    <span className="text-xs text-gray-400 bg-gray-200 dark:bg-gray-600 px-2 py-0.5 rounded-full flex-shrink-0">auto</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Taken from your account — cannot be changed</p>
                </div>

                {/* Client Name — read-only, from login */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                    Client Name
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50">
                    <i className="bx bx-id-card text-gray-400 text-lg flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-200 flex-1 truncate">{userData?.name || '—'}</span>
                    <span className="text-xs text-gray-400 bg-gray-200 dark:bg-gray-600 px-2 py-0.5 rounded-full flex-shrink-0">auto</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Taken from your account — cannot be changed</p>
                </div>

                {/* Callback URL */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                    Callback URL <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="bx bx-globe text-gray-400 text-lg" />
                    </div>
                    <input
                      type="url"
                      name="callbackUrl"
                      value={form.callbackUrl}
                      onChange={e => { setForm(f => ({ ...f, callbackUrl: e.target.value })); setFormResult(null); }}
                      placeholder="https://your-server.com/webhook"
                      required
                      className={inputIconCls}
                    />
                  </div>
                </div>

                {/* Events */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                    Events to Subscribe
                  </label>
                  <div className="space-y-2">
                    {ALL_EVENTS.map(ev => {
                      const s = eventStyle(ev);
                      const selected = form.events.includes(ev);
                      return (
                        <button
                          key={ev}
                          type="button"
                          onClick={() => toggleEvent(ev)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border-2 text-left transition-all ${
                            selected
                              ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                        >
                          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${s.dot}`} />
                          <span className="font-mono text-xs text-gray-700 dark:text-gray-200 flex-1">{ev}</span>
                          {selected && <i className="bx bx-check text-indigo-500 text-lg flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-600 hover:from-indigo-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {submitting ? <Spinner /> : <i className="bx bx-save text-xl" />}
                  {submitting ? 'Registering…' : 'Register Webhook'}
                </button>
              </form>
            </div>

            {/* Subscriptions list — 3 cols */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white">Active Subscriptions</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{subs.length} registered</p>
                </div>
                <button
                  onClick={fetchSubs}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  title="Refresh"
                >
                  <i className="bx bx-refresh text-lg" />
                </button>
              </div>

              {subsError && (
                <div className="px-5 py-3 flex items-center gap-2 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800">
                  <i className="bx bx-error text-red-500" />
                  <span className="text-sm text-red-600 dark:text-red-400">{subsError}</span>
                  <button onClick={fetchSubs} className="ml-auto text-xs text-red-600 font-semibold hover:underline">Retry</button>
                </div>
              )}

              {subsLoading ? (
                <div className="p-10 flex flex-col items-center gap-3 text-gray-400">
                  <Spinner />
                  <span className="text-sm">Loading…</span>
                </div>
              ) : subs.length === 0 ? (
                <div className="p-12 flex flex-col items-center gap-3 text-gray-400">
                  <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                    <i className="bx bx-bell-off text-3xl text-gray-300 dark:text-gray-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">No webhooks registered yet</p>
                  <p className="text-xs text-gray-400">Use the form to add your first callback endpoint</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {subs.map((sub, i) => (
                    <div key={sub.clientId ?? i} className="p-5 hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition-colors">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="bx bx-link-alt text-indigo-600 dark:text-indigo-400 text-lg" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <p className="text-sm font-bold text-gray-800 dark:text-gray-100">{sub.clientId}</p>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${sub.active !== 0 ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                                {sub.active !== 0 ? '● Active' : '○ Inactive'}
                              </span>
                            </div>
                            {sub.clientName && sub.clientName !== sub.clientId && (
                              <p className="text-xs text-gray-400 mb-1.5">{sub.clientName}</p>
                            )}
                            <div className="flex items-center gap-1.5 mb-2">
                              <i className="bx bx-globe text-gray-400 text-sm flex-shrink-0" />
                              <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400 truncate" title={sub.callbackUrl}>
                                {sub.callbackUrl}
                              </p>
                            </div>
                            {sub.events && (
                              <div className="flex flex-wrap gap-1.5">
                                {String(sub.events).split(',').map((ev: string) => {
                                  const s = eventStyle(ev.trim());
                                  return (
                                    <span key={ev} className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border font-medium font-mono ${s.pill}`}>
                                      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                                      {ev.trim()}
                                    </span>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => confirmDelete(sub)}
                          disabled={deletingId === sub.clientId}
                          className="flex-shrink-0 p-2 rounded-xl text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 disabled:opacity-50 transition-colors"
                          title="Remove webhook"
                        >
                          {deletingId === sub.clientId ? <Spinner /> : <i className="bx bx-trash text-lg" />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══ Delivery Logs Tab ═══ */}
        {tab === 'logs' && (() => {
          const isOk = (l: any) => l.httpStatus >= 200 && l.httpStatus < 300;
          const successCount = logs.filter(isOk).length;
          const failedCount  = logs.filter(l => !isOk(l)).length;
          const visibleLogs  = logStatusFilter === 'all' ? logs
            : logStatusFilter === 'success' ? logs.filter(isOk)
            : logs.filter(l => !isOk(l));

          const logPageNums: number[] = [];
          for (let i = Math.max(1, logsPage - 2); i <= Math.min(logsTotalPages, logsPage + 2); i++) logPageNums.push(i);

          return (
            <div className="space-y-4">

              {/* ── Filter bar ── */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Search */}
                  <div className="relative flex-1">
                    <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search by Reference ID…"
                      value={logRef}
                      onChange={e => { setLogRef(e.target.value); setLogsPage(1); }}
                      className={inputIconCls}
                    />
                  </div>
                  {/* Actions */}
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={fetchLogs} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors">
                      <i className="bx bx-search mr-1.5" />Search
                    </button>
                    <button
                      onClick={() => { setLogRef(''); setLogsPage(1); setLogStatusFilter('all'); setTimeout(fetchLogs, 0); }}
                      className="px-4 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 text-sm font-semibold rounded-xl transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                {/* Status pills */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {([
                    { key: 'all',     label: 'All',       count: logs.length },
                    { key: 'success', label: 'Delivered', count: successCount },
                    { key: 'failed',  label: 'Failed',    count: failedCount  },
                  ] as const).map(f => (
                    <button
                      key={f.key}
                      onClick={() => setLogStatusFilter(f.key)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        logStatusFilter === f.key
                          ? f.key === 'success' ? 'bg-emerald-600 text-white shadow-sm'
                            : f.key === 'failed'  ? 'bg-red-600 text-white shadow-sm'
                            : 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {f.label}
                      {!logsLoading && <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${logStatusFilter === f.key ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'}`}>{f.count}</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Stats row ── */}
              {!logsLoading && logs.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Total',     val: logsTotal || logs.length, icon: 'bx bx-history',     bg: 'bg-gray-100 dark:bg-gray-700',                iconCls: 'text-gray-500',   wrap: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700' },
                    { label: 'Delivered', val: successCount,             icon: 'bx bx-check-circle', bg: 'bg-emerald-100 dark:bg-emerald-900/40',       iconCls: 'text-emerald-600 dark:text-emerald-400', wrap: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' },
                    { label: 'Failed',    val: failedCount,              icon: 'bx bx-x-circle',     bg: 'bg-red-100 dark:bg-red-900/40',               iconCls: 'text-red-600 dark:text-red-400',         wrap: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' },
                  ].map(s => (
                    <div key={s.label} className={`rounded-xl border px-4 py-3 flex items-center gap-3 ${s.wrap}`}>
                      <div className={`w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <i className={`${s.icon} ${s.iconCls} text-lg`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{s.label}</p>
                        <p className="text-xl font-extrabold text-gray-900 dark:text-white">{s.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Error ── */}
              {logsError && (
                <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
                  <i className="bx bx-error text-red-500 text-lg flex-shrink-0" />
                  <span className="text-sm text-red-600 dark:text-red-400 flex-1">{logsError}</span>
                  <button onClick={fetchLogs} className="text-xs text-red-600 font-semibold hover:underline">Retry</button>
                </div>
              )}

              {/* ── Table ── */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Table header bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-900/30">
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Delivery Logs</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {logsLoading ? 'Loading…' : `${visibleLogs.length} of ${logsTotal || logs.length} entries`}
                    </p>
                  </div>
                  <button onClick={fetchLogs} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" title="Refresh">
                    <i className="bx bx-refresh text-lg" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-700/80">
                        {[
                          { label: '#',           cls: 'w-10 text-center' },
                          { label: 'Date & Time', cls: 'min-w-[120px]' },
                          { label: 'Reference ID',cls: 'min-w-[160px]' },
                          { label: 'Callback URL',cls: 'min-w-[180px]' },
                          { label: 'HTTP',        cls: 'w-20 text-center' },
                          { label: 'Status',      cls: 'min-w-[100px]' },
                          { label: 'Attempt',     cls: 'w-20 text-center' },
                          { label: 'Response',    cls: 'w-24 text-center' },
                        ].map(h => (
                          <th key={h.label} className={`px-4 py-3 text-left text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest whitespace-nowrap ${h.cls}`}>
                            {h.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-gray-700/40">
                      {logsLoading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                          <tr key={i} className="border-b border-gray-100 dark:border-gray-700/60">
                            {Array.from({ length: 8 }).map((_, j) => (
                              <td key={j} className="px-4 py-4">
                                <div className="h-3.5 rounded-full bg-gray-100 dark:bg-gray-700 animate-pulse" style={{ width: `${40 + (j * 17) % 40}%` }} />
                              </td>
                            ))}
                          </tr>
                        ))
                      ) : visibleLogs.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="py-20 text-center">
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                                <i className="bx bx-history text-3xl text-gray-300 dark:text-gray-600" />
                              </div>
                              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">No delivery logs found</p>
                              {(logRef || logStatusFilter !== 'all') && (
                                <button onClick={() => { setLogRef(''); setLogStatusFilter('all'); fetchLogs(); }} className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                                  Clear filters
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ) : (
                        visibleLogs.map((log, i) => {
                          const ok      = isOk(log);
                          const logKey  = log.id ?? i;
                          const expanded = expandedLogId === String(logKey);
                          return (
                            <React.Fragment key={logKey}>
                              <tr className="hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-colors">
                                {/* # */}
                                <td className="px-4 py-3.5 text-center">
                                  <span className="text-xs text-gray-400 tabular-nums">{(logsPage - 1) * logsLimit + i + 1}</span>
                                </td>

                                {/* Date & Time */}
                                <td className="px-4 py-3.5 whitespace-nowrap">
                                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                                    {log.sentAt ? new Date(log.sentAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
                                  </p>
                                  <p className="text-[11px] text-gray-400 mt-0.5">
                                    {log.sentAt ? new Date(log.sentAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : ''}
                                  </p>
                                </td>

                                {/* Reference ID */}
                                <td className="px-4 py-3.5">
                                  {log.referenceId ? (
                                    <div className="flex items-center gap-1">
                                      <span className="font-mono text-[11px] text-gray-600 dark:text-gray-300 truncate max-w-[140px]" title={log.referenceId}>
                                        {log.referenceId}
                                      </span>
                                      <button onClick={() => navigator.clipboard.writeText(log.referenceId)} className="text-gray-300 dark:text-gray-600 hover:text-indigo-500 transition-colors flex-shrink-0" title="Copy">
                                        <i className="bx bx-copy text-sm" />
                                      </button>
                                    </div>
                                  ) : <span className="text-xs text-gray-300 dark:text-gray-600">—</span>}
                                </td>

                                {/* Callback URL */}
                                <td className="px-4 py-3.5">
                                  <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400 truncate max-w-[170px] block" title={log.callbackUrl}>
                                    {log.callbackUrl || '—'}
                                  </span>
                                </td>

                                {/* HTTP status */}
                                <td className="px-4 py-3.5 text-center whitespace-nowrap">
                                  <span className={`inline-block text-sm font-extrabold tabular-nums ${ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                                    {log.httpStatus || '?'}
                                  </span>
                                  <p className={`text-[10px] font-bold ${ok ? 'text-emerald-500' : 'text-red-500'}`}>{ok ? 'OK' : 'FAIL'}</p>
                                </td>

                                {/* Status badge */}
                                <td className="px-4 py-3.5 whitespace-nowrap">
                                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                                    ok
                                      ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50'
                                      : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700/50'
                                  }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${ok ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                    {ok ? 'Delivered' : 'Failed'}
                                  </span>
                                </td>

                                {/* Attempt */}
                                <td className="px-4 py-3.5 text-center">
                                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg">
                                    #{log.attemptNumber ?? 1}
                                  </span>
                                </td>

                                {/* Response toggle */}
                                <td className="px-4 py-3.5 text-center">
                                  {log.responseBody ? (
                                    <button
                                      onClick={() => setExpandedLogId(expanded ? null : String(logKey))}
                                      className={`inline-flex items-center justify-center w-8 h-8 rounded-lg border transition-colors ${
                                        expanded
                                          ? 'bg-indigo-100 dark:bg-indigo-900/40 border-indigo-300 dark:border-indigo-600 text-indigo-600 dark:text-indigo-400'
                                          : 'border-gray-200 dark:border-gray-600 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-gray-200'
                                      }`}
                                      title={expanded ? 'Hide response' : 'View response'}
                                    >
                                      <i className={`bx ${expanded ? 'bx-chevron-up' : 'bx-code-block'} text-base`} />
                                    </button>
                                  ) : (
                                    <span className="text-xs text-gray-300 dark:text-gray-600">—</span>
                                  )}
                                </td>
                              </tr>

                              {/* Expanded response row */}
                              {expanded && log.responseBody && (
                                <tr>
                                  <td colSpan={8} className="px-5 pb-4 bg-gray-50/60 dark:bg-gray-900/20">
                                    <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900 dark:bg-gray-950">
                                      <div className="px-4 py-2.5 border-b border-gray-800 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                          <div className="flex gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                                          </div>
                                          <span className="text-xs text-gray-500 font-mono ml-1">response body</span>
                                        </div>
                                        <button
                                          onClick={() => navigator.clipboard.writeText(log.responseBody)}
                                          className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                                        >
                                          <i className="bx bx-copy text-sm" /> Copy
                                        </button>
                                      </div>
                                      <pre className="p-4 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed max-h-48">
                                        {(() => { try { return JSON.stringify(JSON.parse(log.responseBody), null, 2); } catch { return log.responseBody; } })()}
                                      </pre>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                {/* ── Pagination ── */}
                {!logsLoading && visibleLogs.length > 0 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-gray-100 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-900/30">
                    <p className="text-xs text-gray-400">
                      Showing <span className="font-bold text-gray-700 dark:text-gray-200">{(logsPage - 1) * logsLimit + 1}–{Math.min(logsPage * logsLimit, logsTotal || logs.length)}</span> of <span className="font-bold text-gray-700 dark:text-gray-200">{logsTotal || logs.length}</span>
                    </p>
                    <div className="flex items-center gap-1">
                      {/* First */}
                      <button onClick={() => setLogsPage(1)} disabled={logsPage === 1} className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0L9 10.414l5.293-5.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zM6 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                      </button>
                      {/* Prev */}
                      <button onClick={() => setLogsPage(p => Math.max(1, p - 1))} disabled={logsPage === 1} className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </button>

                      {logPageNums[0] > 1 && (
                        <>
                          <button onClick={() => setLogsPage(1)} className="w-8 h-8 flex items-center justify-center text-xs font-semibold rounded-lg border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">1</button>
                          {logPageNums[0] > 2 && <span className="w-8 h-8 flex items-center justify-center text-xs text-gray-400">…</span>}
                        </>
                      )}
                      {logPageNums.map(n => (
                        <button key={n} onClick={() => setLogsPage(n)} className={`w-8 h-8 flex items-center justify-center text-xs font-semibold rounded-lg border transition-colors ${n === logsPage ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm' : 'border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                          {n}
                        </button>
                      ))}
                      {logPageNums[logPageNums.length - 1] < logsTotalPages && (
                        <>
                          {logPageNums[logPageNums.length - 1] < logsTotalPages - 1 && <span className="w-8 h-8 flex items-center justify-center text-xs text-gray-400">…</span>}
                          <button onClick={() => setLogsPage(logsTotalPages)} className="w-8 h-8 flex items-center justify-center text-xs font-semibold rounded-lg border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">{logsTotalPages}</button>
                        </>
                      )}

                      {/* Next */}
                      <button onClick={() => setLogsPage(p => Math.min(logsTotalPages, p + 1))} disabled={logsPage === logsTotalPages} className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                      </button>
                      {/* Last */}
                      <button onClick={() => setLogsPage(logsTotalPages)} disabled={logsPage === logsTotalPages} className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L11 9.586l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414zM14 15a1 1 0 01-1-1V6a1 1 0 112 0v8a1 1 0 01-1 1z" clipRule="evenodd" /></svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Payload reference (collapsed by default) ── */}
              {(() => {
                const PAYLOAD = `{
  "event": "collection.success",
  "referenceId": "d8334b79-81c1-49b9-bc86-2095ab3238dc",
  "transactionId": "txn_abc123xyz",
  "status": "success",
  "amount": 5000,
  "currencyCode": "RWF",
  "customerName": "John Doe",
  "customerAccountNumber": "0781234567",
  "provider": "MTN",
  "timestamp": "2026-06-17T10:30:00.000Z"
}`;
                const copyPayload = () => {
                  navigator.clipboard.writeText(PAYLOAD);
                  setCopiedPayload(true);
                  setTimeout(() => setCopiedPayload(false), 2000);
                };

                // Each entry: [key, value, isString, isNumber]
                const lines: Array<{ key: string; val: string; type: 'string' | 'number' | 'last' }> = [
                  { key: 'event',                 val: '"collection.success"',                        type: 'string' },
                  { key: 'referenceId',            val: '"d8334b79-81c1-49b9-bc86-2095ab3238dc"',    type: 'string' },
                  { key: 'transactionId',          val: '"txn_abc123xyz"',                            type: 'string' },
                  { key: 'status',                 val: '"success"',                                  type: 'string' },
                  { key: 'amount',                 val: '5000',                                       type: 'number' },
                  { key: 'currencyCode',           val: '"RWF"',                                      type: 'string' },
                  { key: 'customerName',           val: '"John Doe"',                                 type: 'string' },
                  { key: 'customerAccountNumber',  val: '"0781234567"',                               type: 'string' },
                  { key: 'provider',               val: '"MTN"',                                      type: 'string' },
                  { key: 'timestamp',              val: '"2026-06-17T10:30:00.000Z"',                 type: 'last'   },
                ];

                return (
                  <details className="group bg-[#0d1117] rounded-2xl overflow-hidden border border-gray-800">
                    <summary className="px-5 py-3.5 flex items-center gap-3 cursor-pointer select-none list-none">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/70" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                      </div>
                      <p className="text-xs text-gray-400 font-mono flex-1">
                        <span className="text-indigo-400">POST</span>
                        <span className="text-gray-600 mx-2">/</span>
                        <span className="text-gray-300">Example Webhook Payload</span>
                      </p>
                      <i className="bx bx-chevron-down text-gray-500 text-base group-open:rotate-180 transition-transform" />
                    </summary>

                    <div className="border-t border-gray-800">
                      {/* Code toolbar */}
                      <div className="flex items-center justify-between px-5 py-2 bg-gray-900/60 border-b border-gray-800/60">
                        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">application/json</span>
                        <button
                          onClick={copyPayload}
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                            copiedPayload
                              ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-700/50'
                              : 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-200 border border-gray-700'
                          }`}
                        >
                          <i className={`bx ${copiedPayload ? 'bx-check' : 'bx-copy'} text-sm`} />
                          {copiedPayload ? 'Copied!' : 'Copy'}
                        </button>
                      </div>

                      {/* Syntax-highlighted payload */}
                      <div className="p-5 font-mono text-xs leading-6 overflow-x-auto">
                        <span className="text-gray-500">{'{'}</span>
                        {lines.map(({ key, val, type }) => (
                          <div key={key} className="pl-4">
                            <span className="text-[#79b8ff]">"{key}"</span>
                            <span className="text-gray-500">: </span>
                            {type === 'number'
                              ? <span className="text-[#f97316]">{val}</span>
                              : <span className="text-[#a8ff78]">{val}</span>
                            }
                            {type !== 'last' && <span className="text-gray-600">,</span>}
                          </div>
                        ))}
                        <span className="text-gray-500">{'}'}</span>
                      </div>

                      {/* Verify note */}
                      <div className="mx-5 mb-5 rounded-xl bg-indigo-950/60 border border-indigo-800/50 p-4 flex items-start gap-3">
                        <i className="bx bx-lock-alt text-indigo-400 text-xl flex-shrink-0 mt-0.5" />
                        <div className="text-xs text-gray-400 leading-relaxed space-y-1">
                          <p>
                            Verify each request by computing{' '}
                            <span className="font-mono text-indigo-400 bg-indigo-950/50 px-1.5 py-0.5 rounded">HMAC-SHA256(secret, rawBody)</span>{' '}
                            and comparing it to the{' '}
                            <span className="font-mono text-[#79b8ff] bg-indigo-950/50 px-1.5 py-0.5 rounded">X-Moola-Signature</span>{' '}
                            request header.
                          </p>
                          <p className="text-gray-600">Reject any request where the signatures do not match.</p>
                        </div>
                      </div>
                    </div>
                  </details>
                );
              })()}

            </div>
          );
        })()}

      </div>

      {/* ── Delete Confirmation Modal ─────────────────────────── */}
      {confirmDeleteSub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => { setConfirmDeleteSub(null); setDeleteError(''); }}
          />

          {/* Panel */}
          <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Red top accent */}
            <div className="h-1.5 bg-gradient-to-r from-red-500 to-red-500" />

            <div className="p-6">
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-trash text-red-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Remove Webhook</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">This action cannot be undone</p>
                </div>
              </div>

              {/* Warning */}
              <div className="mb-5 p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 flex items-start gap-3">
                <i className="bx bx-error text-amber-500 text-xl flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                  You are about to permanently remove this webhook subscription. The callback URL will stop receiving events immediately.
                </p>
              </div>

              {/* Subscription details */}
              <div className="mb-5 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-200 dark:border-gray-700 space-y-2.5">
                <div className="flex items-center gap-2">
                  <i className="bx bx-id-card text-gray-400 text-sm flex-shrink-0" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-20 flex-shrink-0">Client ID</span>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 font-mono">{confirmDeleteSub.clientId}</span>
                </div>
                <div className="flex items-start gap-2">
                  <i className="bx bx-link text-gray-400 text-sm flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-20 flex-shrink-0 mt-0.5">Callback</span>
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 font-mono break-all">{confirmDeleteSub.callbackUrl}</span>
                </div>
              </div>

              {/* Inline error */}
              {deleteError && (
                <div className="mb-4 flex items-center gap-2.5 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/40">
                  <i className="bx bx-x-circle text-red-500 text-lg flex-shrink-0" />
                  <span className="text-sm text-red-600 dark:text-red-400">{deleteError}</span>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => { setConfirmDeleteSub(null); setDeleteError(''); }}
                  disabled={deletingId === confirmDeleteSub.clientId}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteSub}
                  disabled={deletingId === confirmDeleteSub.clientId}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  {deletingId === confirmDeleteSub.clientId ? (
                    <><Spinner /> Removing…</>
                  ) : (
                    <><i className="bx bx-trash" /> Remove Webhook</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewMomoWebhooks;
