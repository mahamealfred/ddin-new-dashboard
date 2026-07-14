import React, { useState, FC, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pageheader from '../../components/common/page-header/pageheader';
import { API } from '../../config/api';

const getToken = () => {
  try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; }
};
const genRef = () =>
  typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      });

const PROVIDERS = [
  { value: 'MTN', label: 'MTN MoMo', icon: '🟡', color: 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20', disabled: false },
  { value: 'Airtel', label: 'Airtel Money', icon: '🔴', color: 'border-red-400 bg-red-50 dark:bg-red-900/20', disabled: false },
];

interface FormState {
  provider: string;
  customerAccountNumber: string;
  customerName: string;
  amount: string;
  currencyCode: string;
  referenceId: string;
  callbackUrl: string;
}

type TrackingStatus = 'pending' | 'success' | 'failed' | 'timeout';

interface TrackingState {
  referenceId: string;
  status: TrackingStatus;
  message: string;
  elapsed: number;
  customerName: string;
  amount: string;
  provider: string;
}

interface LogEntry {
  id?: number;
  stage: string;
  message: string;
  createdAt: string;
}

const STAGE_ICON: Record<string, { icon: string; color: string }> = {
  INITIATED:          { icon: 'bx-play-circle',    color: 'text-indigo-500' },
  AUTH_FETCHED:       { icon: 'bx-key',             color: 'text-indigo-400' },
  CHECKOUT_SENT:      { icon: 'bx-send',            color: 'text-indigo-500' },
  CHECKOUT_SUCCESS:   { icon: 'bx-mobile-alt',      color: 'text-indigo-600' },
  CHECKOUT_FAILED:    { icon: 'bx-x-circle',        color: 'text-red-500' },
  CALLBACK_RECEIVED:  { icon: 'bx-bell',            color: 'text-indigo-500' },
  STATUS_API_CHECKED: { icon: 'bx-search-alt',      color: 'text-indigo-500' },
  STATUS_API_PENDING: { icon: 'bx-time',            color: 'text-amber-500' },
  STATUS_API_FAILED:  { icon: 'bx-wifi-off',        color: 'text-amber-500' },
  CIRCUIT_OPEN:       { icon: 'bx-error',           color: 'text-red-400' },
  FLOAT_CREDITED:     { icon: 'bx-wallet',          color: 'text-emerald-500' },
  FLOAT_FAILED:       { icon: 'bx-wallet',          color: 'text-red-500' },
  WEBHOOK_SENT:       { icon: 'bx-broadcast',       color: 'text-indigo-500' },
  RESOLVED_SUCCESS:   { icon: 'bx-check-circle',    color: 'text-emerald-500' },
  RESOLVED_FAILED:    { icon: 'bx-x-circle',        color: 'text-red-500' },
};

const fmtTime = (iso: string) => {
  try {
    return new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  } catch { return iso; }
};

// Wait up to 10 minutes for the provider (USSD can take 1-4 min; backend SSE also times out at 10 min)
const MAX_WAIT_MS = 600_000;

const StatusTracker: FC<{
  tracking: TrackingState;
  onDone: () => void;
  onNewCollection: () => void;
}> = ({ tracking, onDone, onNewCollection }) => {
  const [state, setState] = useState<TrackingState>(tracking);
  const [dots, setDots] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [logsExpanded, setLogsExpanded] = useState(true);
  const logsEndRef = useRef<HTMLDivElement | null>(null);
  const elapsedRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sseRef = useRef<EventSource | null>(null);
  const startedAt = useRef(Date.now());

  // Fetch existing logs on mount
  useEffect(() => {
    const token = getToken();
    axios.get(`${API()}/v1/momo/collection/${tracking.referenceId}/logs`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => {
      if (Array.isArray(res.data?.data)) setLogs(res.data.data);
    }).catch(() => {});
  }, [tracking.referenceId]);

  // Auto-scroll logs to bottom when new entries arrive
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs.length]);

  useEffect(() => {
    if (state.status !== 'pending') return;

    // Dots animation
    const dotsTimer = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 500);

    // Elapsed counter + hard timeout (10 min)
    elapsedRef.current = setInterval(() => {
      const secs = Math.floor((Date.now() - startedAt.current) / 1000);
      setState(s => ({ ...s, elapsed: secs }));
      if (Date.now() - startedAt.current >= MAX_WAIT_MS) {
        setState(s => ({ ...s, status: 'timeout', message: 'Payment is still being processed — check your transactions list.' }));
        clearInterval(elapsedRef.current!);
        clearInterval(dotsTimer);
        sseRef.current?.close();
      }
    }, 1000);

    // SSE stream — backend pushes status update the moment the provider resolves
    // It also probes the provider's status API every 30s as fallback
    const token = getToken();
    const url = `${API()}/v1/momo/collection/${state.referenceId}/status-stream${token ? `?token=${encodeURIComponent(token)}` : ''}`;
    const sse = new EventSource(url);
    sseRef.current = sse;

    sse.onmessage = (ev) => {
      try {
        const data = JSON.parse(ev.data);
        if (!data || data.error) return;

        // Log entry pushed from backend
        if (data.type === 'log') {
          setLogs(prev => {
            // deduplicate by id if present
            if (data.id && prev.some(l => l.id === data.id)) return prev;
            return [...prev, { id: data.id, stage: data.stage, message: data.message, createdAt: data.createdAt }];
          });
          return;
        }

        // Status update (type === 'status' or no type for backwards compat)
        const status = (data.status || '').toLowerCase() as TrackingStatus;
        if (status && status !== 'pending') {
          setState(s => ({ ...s, status, message: data.message || '' }));
          clearInterval(elapsedRef.current!);
          clearInterval(dotsTimer);
          sse.close();
        }
      } catch (_) {}
    };

    sse.onerror = () => {
      // SSE disconnected — fall back to polling every 5s
      sse.close();
      const fallbackPoll = setInterval(async () => {
        try {
          const res = await axios.get(
            `${API()}/v1/momo/collection/${state.referenceId}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          const tx = res.data?.data;
          if (!tx) return;
          const status = (tx.status || '').toLowerCase() as TrackingStatus;
          if (status !== 'pending') {
            setState(s => ({ ...s, status, message: tx.message || '' }));
            clearInterval(fallbackPoll);
            clearInterval(elapsedRef.current!);
            clearInterval(dotsTimer);
          }
        } catch (_) {}
      }, 5_000);
      // store ref so cleanup can clear it
      (sseRef as any).current = { close: () => clearInterval(fallbackPoll) };
    };

    return () => {
      clearInterval(dotsTimer);
      clearInterval(elapsedRef.current!);
      sseRef.current?.close();
    };
  }, [state.status, state.referenceId]);

  const isResolved = state.status !== 'pending';
  const isSuccess = state.status === 'success';
  const isFailed = state.status === 'failed';

  const fmtElapsed = (s: number) =>
    s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`;

  return (
    <div className="max-w-lg mx-auto">
      <div className={`rounded-2xl border-2 overflow-hidden transition-all duration-500 shadow-xl ${
        isSuccess
          ? 'border-emerald-300 dark:border-emerald-700'
          : isFailed || state.status === 'timeout'
            ? 'border-red-300 dark:border-red-700'
            : 'border-indigo-300 dark:border-indigo-700'
      }`}>
        {/* Top gradient bar */}
        <div className={`h-1.5 ${
          isSuccess ? 'bg-gradient-to-r from-emerald-400 to-emerald-500'
          : isFailed || state.status === 'timeout' ? 'bg-gradient-to-r from-red-400 to-red-500'
          : 'bg-gradient-to-r from-indigo-500 to-indigo-600 animate-pulse'
        }`} />

        <div className="bg-white dark:bg-gray-800 p-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            {state.status === 'pending' && (
              <div className="relative w-24 h-24">
                {/* Spinning ring */}
                <svg className="absolute inset-0 w-full h-full animate-spin" viewBox="0 0 96 96">
                  <circle cx="48" cy="48" r="44" fill="none" stroke="#e0e7ff" strokeWidth="4" />
                  <circle cx="48" cy="48" r="44" fill="none" stroke="#6366f1" strokeWidth="4"
                    strokeDasharray="138 138" strokeDashoffset="100" strokeLinecap="round" />
                </svg>
                {/* Phone icon center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <i className="bx bx-mobile-alt text-3xl text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
              </div>
            )}
            {isSuccess && (
              <div className="w-24 h-24 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center ring-4 ring-emerald-100 dark:ring-emerald-900/30">
                <i className="bx bx-check-circle text-5xl text-emerald-500" />
              </div>
            )}
            {(isFailed || state.status === 'timeout') && (
              <div className="w-24 h-24 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center ring-4 ring-red-100 dark:ring-red-900/30">
                <i className="bx bx-x-circle text-5xl text-red-500" />
              </div>
            )}
          </div>

          {/* Status heading */}
          <div className="text-center mb-6">
            {state.status === 'pending' && (
              <>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  Waiting for approval{dots}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Payment prompt sent to customer's phone
                </p>
              </>
            )}
            {isSuccess && (
              <>
                <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  Payment Successful!
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {state.message || 'The collection was completed successfully.'}
                </p>
              </>
            )}
            {isFailed && (
              <>
                <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-1">
                  Payment Failed
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {state.message || 'The customer declined or the payment did not go through.'}
                </p>
              </>
            )}
            {state.status === 'timeout' && (
              <>
                <h2 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-1">
                  Still Processing
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Check your transactions list for the final status.
                </p>
              </>
            )}
          </div>

          {/* Transaction details */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-2.5 mb-6 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Customer</span>
              <span className="font-semibold text-gray-800 dark:text-white">{state.customerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Amount</span>
              <span className="font-bold text-indigo-700 dark:text-indigo-300">
                {Number(state.amount).toLocaleString()} RWF
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Provider</span>
              <span className="font-semibold text-gray-800 dark:text-white">{state.provider}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Reference</span>
              <span className="font-mono text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-0.5 rounded truncate max-w-[160px]">
                {state.referenceId}
              </span>
            </div>
            {state.status === 'pending' && state.elapsed > 0 && (
              <div className="flex justify-between pt-1 border-t border-gray-200 dark:border-gray-600">
                <span className="text-gray-500 dark:text-gray-400">Elapsed</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">{fmtElapsed(state.elapsed)}</span>
              </div>
            )}
          </div>

          {/* Pending status steps */}
          {state.status === 'pending' && (
            <div className="space-y-2 mb-6">
              {[
                { done: true, text: 'Payment request sent to provider' },
                { done: true, text: "Prompt sent to customer's phone" },
                { done: false, text: 'Waiting for customer to enter PIN' },
                { done: false, text: 'Confirming with mobile network' },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm">
                  {step.done ? (
                    <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <i className="bx bx-check text-xs" />
                    </span>
                  ) : (
                    <span className="w-5 h-5 rounded-full border-2 border-gray-200 dark:border-gray-600 flex-shrink-0" />
                  )}
                  <span className={step.done ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}>
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            {state.status === 'pending' ? (
              <Link
                to={`${import.meta.env.BASE_URL}moola/new-momo/transactions`}
                className="flex-1 text-center py-2.5 px-4 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
              >
                <i className="bx bx-list-ul me-1.5" />View Transactions
              </Link>
            ) : (
              <>
                <button
                  onClick={onNewCollection}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-600 text-white text-sm font-semibold hover:shadow-lg transition-all"
                >
                  <i className="bx bx-plus me-1.5" />New Collection
                </button>
                <Link
                  to={`${import.meta.env.BASE_URL}moola/new-momo/transactions`}
                  className="flex-1 text-center py-2.5 px-4 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
                >
                  <i className="bx bx-list-ul me-1.5" />View Transactions
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {state.status === 'pending' && (
        <p className="text-center text-xs text-gray-400 mt-3">
          Live updates via server push · closes after 10 minutes
        </p>
      )}

      {/* ── Staging Log ── */}
      <div className="mt-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
        <button
          onClick={() => setLogsExpanded(v => !v)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
        >
          <span className="flex items-center gap-2">
            <i className="bx bx-list-check text-indigo-500 text-lg" />
            Transaction Log
            {logs.length > 0 && (
              <span className="ml-1 text-xs font-normal bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                {logs.length} events
              </span>
            )}
          </span>
          <i className={`bx ${logsExpanded ? 'bx-chevron-up' : 'bx-chevron-down'} text-gray-400 text-lg`} />
        </button>

        {logsExpanded && (
          <div className="border-t border-gray-100 dark:border-gray-700 max-h-64 overflow-y-auto px-4 py-3 space-y-2">
            {logs.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-2">Waiting for log entries…</p>
            ) : (
              logs.map((entry, i) => {
                const ic = STAGE_ICON[entry.stage] || { icon: 'bx-circle', color: 'text-gray-400' };
                return (
                  <div key={entry.id ?? i} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 mt-0.5">
                      <i className={`bx ${ic.icon} text-base ${ic.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-700 dark:text-gray-300 leading-snug">{entry.message}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{fmtTime(entry.createdAt)}</p>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={logsEndRef} />
          </div>
        )}
      </div>
    </div>
  );
};

const NewMomoCollectionForm: FC = () => {
  const [form, setForm] = useState<FormState>({
    provider: 'MTN',
    customerAccountNumber: '',
    customerName: '',
    amount: '',
    currencyCode: 'RWF',
    referenceId: genRef(),
    callbackUrl: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [tracking, setTracking] = useState<TrackingState | null>(null);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const resetForm = () => {
    setForm({
      provider: 'MTN',
      customerAccountNumber: '',
      customerName: '',
      amount: '',
      currencyCode: 'RWF',
      referenceId: genRef(),
      callbackUrl: '',
    });
    setError('');
    setTracking(null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.provider || !form.customerAccountNumber || !form.customerName || !form.amount || !form.referenceId) {
      setError('Please fill in all required fields.');
      return;
    }
    const amt = parseFloat(form.amount);
    if (isNaN(amt) || amt <= 0) {
      setError('Amount must be a positive number.');
      return;
    }

    setSubmitting(true);
    setError('');
    try {
      const payload: any = {
        provider: form.provider,
        customerAccountNumber: form.customerAccountNumber.trim(),
        customerName: form.customerName.trim(),
        amount: amt,
        currencyCode: form.currencyCode,
        referenceId: form.referenceId.trim(),
      };
      if (form.callbackUrl.trim()) payload.callbackUrl = form.callbackUrl.trim();

      const res = await axios.post(`${API()}/v1/momo/collection/initiate`, payload, {
        headers: { Authorization: `Bearer ${getToken()}`, 'Content-Type': 'application/json' },
      });

      // Switch to live status tracker
      setTracking({
        referenceId: res.data?.data?.referenceId || form.referenceId,
        status: 'pending',
        message: '',
        elapsed: 0,
        customerName: form.customerName.trim(),
        amount: form.amount,
        provider: form.provider,
      });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to initiate collection. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (tracking) {
    return (
      <>
        <Pageheader currentpage="Collect Money" activepage="New MoMo Collections" mainpage="Collect" />
        <StatusTracker
          tracking={tracking}
          onDone={() => {}}
          onNewCollection={resetForm}
        />
      </>
    );
  }

  return (
    <>
      <Pageheader currentpage="Collect Money" activepage="New MoMo Collections" mainpage="Collect" />

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header card */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="bx bx-mobile-alt text-3xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Request Mobile Money Payment</h1>
              <p className="text-white/70 text-sm mt-0.5">Initiate a MoMo collection from your customer's phone</p>
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-xl p-4 flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
            <i className="bx bx-x-circle text-xl mt-0.5 text-red-500" />
            <p className="text-sm font-semibold text-red-700 dark:text-red-400 flex-1">{error}</p>
            <button onClick={() => setError('')} className="text-gray-400 hover:text-gray-600">
              <i className="bx bx-x text-xl" />
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={submit} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-6">

          {/* Provider selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Mobile Money Provider <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {PROVIDERS.map(p => (
                <label
                  key={p.value}
                  className={`relative flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-150 ${
                    p.disabled
                      ? 'cursor-not-allowed opacity-50 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50'
                      : form.provider === p.value
                        ? p.color + ' border-opacity-100 shadow-md cursor-pointer'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 cursor-pointer'
                  }`}
                >
                  <input type="radio" name="provider" value={p.value} checked={form.provider === p.value} onChange={handle} disabled={p.disabled} className="sr-only" />
                  <span className="text-2xl">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{p.label}</p>
                    <p className="text-xs text-gray-400">{p.value}</p>
                  </div>
                  {p.disabled
                    ? <span className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-500 px-2 py-0.5 rounded-full">Soon</span>
                    : form.provider === p.value
                      ? <i className="bx bx-check-circle text-xl text-indigo-600 ml-auto" />
                      : null}
                </label>
              ))}
            </div>
          </div>

          {/* Customer details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="bx bx-phone text-gray-400 text-lg" />
                </div>
                <input type="text" name="customerAccountNumber" value={form.customerAccountNumber} onChange={handle} placeholder="e.g. 078XXXXXXX" required
                  className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition" />
              </div>
              <p className="text-xs text-gray-400 mt-1">Customer's mobile money number</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="bx bx-user text-gray-400 text-lg" />
                </div>
                <input type="text" name="customerName" value={form.customerName} onChange={handle} placeholder="Full name" required
                  className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition" />
              </div>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Amount <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bx bx-money text-gray-400 text-lg" />
              </div>
              <input type="number" name="amount" value={form.amount} onChange={handle} placeholder="0" min="1" step="1" required
                className="w-full pl-10 pr-16 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition" />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-lg">RWF</span>
              </div>
            </div>
          </div>

          {/* Reference ID */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Reference ID <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input type="text" name="referenceId" value={form.referenceId} onChange={handle} required
                className="flex-1 px-3 py-2.5 text-sm font-mono rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition" />
              <button type="button" onClick={() => setForm(f => ({ ...f, referenceId: genRef() }))}
                className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl text-gray-600 dark:text-gray-300 text-sm font-medium transition-colors" title="Generate new reference">
                <i className="bx bx-refresh text-lg" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1">Unique identifier. Auto-generated or enter your own.</p>
          </div>

          {/* Callback URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Callback URL <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bx bx-link text-gray-400 text-lg" />
              </div>
              <input type="url" name="callbackUrl" value={form.callbackUrl} onChange={handle} placeholder="https://your-server.com/webhook"
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition" />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              We POST the payment result to this URL.{' '}
              <Link to={`${import.meta.env.BASE_URL}moola/new-momo/webhooks`} className="text-indigo-600 hover:underline">Manage webhooks</Link>
            </p>
          </div>

          {/* Summary */}
          {form.amount && Number(form.amount) > 0 && (
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl p-4">
              <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Collection Summary</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-gray-500 dark:text-gray-400">Provider:</span>
                <span className="font-medium text-gray-800 dark:text-gray-200">{form.provider}</span>
                <span className="text-gray-500 dark:text-gray-400">Customer:</span>
                <span className="font-medium text-gray-800 dark:text-gray-200">{form.customerName || '—'}</span>
                <span className="text-gray-500 dark:text-gray-400">Phone:</span>
                <span className="font-medium text-gray-800 dark:text-gray-200">{form.customerAccountNumber || '—'}</span>
                <span className="text-gray-500 dark:text-gray-400">Amount:</span>
                <span className="font-bold text-indigo-700 dark:text-indigo-300">{Number(form.amount).toLocaleString()} {form.currencyCode}</span>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={submitting}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200">
              {submitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending request…
                </>
              ) : (
                <>
                  <i className="bx bx-send text-xl" />
                  Initiate Collection
                </>
              )}
            </button>
            <button type="button" onClick={resetForm} disabled={submitting}
              className="px-5 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-colors disabled:opacity-50">
              Reset
            </button>
          </div>
        </form>

        {/* Info box */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl p-4">
          <div className="flex gap-3">
            <i className="bx bx-info-circle text-indigo-500 text-xl mt-0.5" />
            <div className="text-sm text-indigo-700 dark:text-indigo-300">
              <p className="font-semibold mb-1">How it works</p>
              <ol className="list-decimal list-inside space-y-1 text-indigo-600 dark:text-indigo-400">
                <li>Customer receives a payment prompt on their phone</li>
                <li>They enter their PIN to approve the transaction</li>
                <li>Status updates live — usually within seconds</li>
                <li>If a Callback URL is set, we notify your server automatically</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMomoCollectionForm;
