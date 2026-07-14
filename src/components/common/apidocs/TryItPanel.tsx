import { FC, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ApiEndpoint } from '../../../data/apiDocsData';
import { API_BASE_URL } from '../../../config/api';
import CodeBlock from './CodeBlock';

const getSessionToken = (): string | null => {
  try {
    return JSON.parse(localStorage.getItem('token') || 'null');
  } catch {
    return null;
  }
};

const applyPathParams = (path: string, values: Record<string, string>) =>
  path.replace(/:([a-zA-Z_][a-zA-Z0-9_]*)/g, (_, name) => encodeURIComponent(values[name] ?? ''));

const castValue = (raw: string, type: string): unknown => {
  if (type === 'number') return raw === '' ? undefined : Number(raw);
  if (type === 'boolean') return raw === 'true';
  return raw;
};

const inputClass = 'w-full px-2.5 py-1.5 text-xs font-mono rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/40';

interface TryItPanelProps {
  endpoint: ApiEndpoint;
  externalPrefix: string;
}

const TryItPanel: FC<TryItPanelProps> = ({ endpoint, externalPrefix }) => {
  const token = getSessionToken();
  const needsAuth = endpoint.auth !== 'none';
  const isLoggedIn = !needsAuth || !!token;

  const pathParams = endpoint.params.filter(p => p.in === 'path');
  const queryParams = endpoint.params.filter(p => p.in === 'query');
  const bodyParams = endpoint.params.filter(p => p.in === 'body' && endpoint.method !== 'GET' && endpoint.method !== 'DELETE');

  const [pathValues, setPathValues] = useState<Record<string, string>>(
    () => Object.fromEntries(pathParams.map(p => [p.name, p.example !== undefined ? String(p.example) : '']))
  );
  const [queryValues, setQueryValues] = useState<Record<string, string>>(
    () => Object.fromEntries(queryParams.map(p => [p.name, p.example !== undefined ? String(p.example) : '']))
  );
  const [bodyValues, setBodyValues] = useState<Record<string, string>>(
    () => Object.fromEntries(bodyParams.map(p => [p.name, p.example !== undefined ? String(p.example) : '']))
  );
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ status: number; ok: boolean; durationMs: number; body: unknown } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const [sseConnected, setSseConnected] = useState(false);
  const [sseEvents, setSseEvents] = useState<{ at: string; data: unknown }[]>([]);
  const esRef = useRef<EventSource | null>(null);

  useEffect(() => () => { esRef.current?.close(); }, []);

  const fullPath = `${externalPrefix}${applyPathParams(endpoint.path, pathValues)}`;
  const url = `${API_BASE_URL}${fullPath}`;

  const missingRequiredPath = pathParams.some(p => p.required && !pathValues[p.name]?.trim());
  const missingRequiredBody = bodyParams.some(p => p.required && !bodyValues[p.name]?.trim());
  const canSend = isLoggedIn && !missingRequiredPath && !missingRequiredBody && (!endpoint.mutating || confirmed);

  const send = async () => {
    setLoading(true);
    setErrorMsg('');
    setResult(null);
    const started = performance.now();
    try {
      const params: Record<string, string> = {};
      queryParams.forEach(p => { if (queryValues[p.name]?.trim()) params[p.name] = queryValues[p.name]; });

      const data: Record<string, unknown> = {};
      bodyParams.forEach(p => {
        const raw = bodyValues[p.name];
        if (raw !== '' && raw !== undefined) data[p.name] = castValue(raw, p.type);
      });

      const headers: Record<string, string> = {};
      if (needsAuth && token) headers.Authorization = `Bearer ${token}`;

      const res = await axios.request({
        url,
        method: endpoint.method,
        headers,
        params: Object.keys(params).length ? params : undefined,
        data: Object.keys(data).length ? data : undefined,
        validateStatus: () => true,
      });
      setResult({ status: res.status, ok: res.status < 400, durationMs: Math.round(performance.now() - started), body: res.data });
    } catch (e: any) {
      setErrorMsg(e.message || 'Request failed — check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  const connectSSE = () => {
    const qs = new URLSearchParams();
    if (token) qs.set('token', token);
    const es = new EventSource(`${url}${qs.toString() ? `?${qs}` : ''}`);
    esRef.current = es;
    setSseEvents([]);
    setSseConnected(true);
    es.onmessage = evt => {
      let parsed: unknown = evt.data;
      try { parsed = JSON.parse(evt.data); } catch { /* plain text event */ }
      setSseEvents(prev => [...prev, { at: new Date().toLocaleTimeString(), data: parsed }]);
    };
    es.onerror = () => {
      es.close();
      esRef.current = null;
      setSseConnected(false);
    };
  };

  const disconnectSSE = () => {
    esRef.current?.close();
    esRef.current = null;
    setSseConnected(false);
  };

  return (
    <div className="rounded-2xl border border-indigo-100 dark:border-indigo-900/40 bg-indigo-50/40 dark:bg-indigo-950/20 p-4 space-y-4">
      <div className="flex items-center gap-2">
        <i className="bx bx-play-circle text-indigo-500" />
        <h5 className="text-xs font-bold text-gray-700 dark:text-gray-200">Try it live</h5>
      </div>

      {!isLoggedIn && (
        <div className="flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-lg px-3 py-2">
          <i className="bx bx-error flex-shrink-0" /> Log in to test this endpoint — it needs your session's Bearer token.
        </div>
      )}

      {isLoggedIn && needsAuth && (
        <p className="text-[11px] text-gray-400 flex items-center gap-1">
          <i className="bx bx-check-shield text-emerald-500" /> Using your current session's Bearer token
        </p>
      )}

      {endpoint.isSSE ? (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <button
              onClick={sseConnected ? disconnectSSE : connectSSE}
              disabled={!isLoggedIn}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-lg transition-colors"
            >
              <i className={`bx ${sseConnected ? 'bx-stop-circle' : 'bx-broadcast'}`} />
              {sseConnected ? 'Disconnect' : 'Connect'}
            </button>
            {sseConnected && (
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Live
              </span>
            )}
          </div>
          <div className="rounded-xl border border-gray-800 bg-[#0d1117] p-3 max-h-64 overflow-y-auto space-y-1.5">
            {sseEvents.length === 0 ? (
              <p className="text-xs text-gray-500">{sseConnected ? 'Connected — waiting for events…' : 'Not connected'}</p>
            ) : (
              sseEvents.map((e, i) => (
                <div key={i} className="text-[11px] font-mono text-gray-300 break-all">
                  <span className="text-gray-500">[{e.at}]</span> {typeof e.data === 'string' ? e.data : JSON.stringify(e.data)}
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <>
          {pathParams.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pathParams.map(p => (
                <div key={p.name}>
                  <label className="block text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-1">
                    {p.name} <span className="font-normal text-gray-400">(path{p.required ? ', required' : ''})</span>
                  </label>
                  <input
                    value={pathValues[p.name] || ''}
                    onChange={e => setPathValues(v => ({ ...v, [p.name]: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              ))}
            </div>
          )}

          {queryParams.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {queryParams.map(p => (
                <div key={p.name}>
                  <label className="block text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-1">
                    {p.name} <span className="font-normal text-gray-400">(query, optional)</span>
                  </label>
                  <input
                    value={queryValues[p.name] || ''}
                    onChange={e => setQueryValues(v => ({ ...v, [p.name]: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              ))}
            </div>
          )}

          {bodyParams.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bodyParams.map(p => (
                <div key={p.name}>
                  <label className="block text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-1">
                    {p.name} <span className="font-normal text-gray-400">(body{p.required ? ', required' : ', optional'})</span>
                  </label>
                  {p.type === 'boolean' ? (
                    <select
                      value={bodyValues[p.name] || 'true'}
                      onChange={e => setBodyValues(v => ({ ...v, [p.name]: e.target.value }))}
                      className={inputClass}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                  ) : (
                    <input
                      type={p.type === 'number' ? 'number' : 'text'}
                      value={bodyValues[p.name] || ''}
                      onChange={e => setBodyValues(v => ({ ...v, [p.name]: e.target.value }))}
                      className={inputClass}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {endpoint.mutating && (
            <label className="flex items-start gap-2 text-xs bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-lg px-3 py-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={e => setConfirmed(e.target.checked)}
                className="mt-0.5 flex-shrink-0"
              />
              <span className="text-amber-700 dark:text-amber-400 leading-relaxed">
                {endpoint.dangerNote || 'This sends a real request that mutates data.'} I understand and want to proceed.
              </span>
            </label>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={send}
              disabled={!canSend || loading}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-lg transition-colors"
            >
              <i className={`bx ${loading ? 'bx-loader-alt animate-spin' : 'bx-send'}`} />
              {loading ? 'Sending…' : 'Send Request'}
            </button>
            <span className="text-[11px] font-mono text-gray-400 truncate">{endpoint.method} {fullPath}</span>
          </div>

          {errorMsg && (
            <div className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1.5">
              <i className="bx bx-error-circle flex-shrink-0" /> {errorMsg}
            </div>
          )}

          {result && (
            <CodeBlock
              json={result.body}
              label={`${result.status} ${result.ok ? 'success' : 'error'} · ${result.durationMs}ms`}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TryItPanel;
