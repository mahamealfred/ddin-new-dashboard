import { FC, useState } from 'react';
import { ApiEndpoint, HttpMethod } from '../../../data/apiDocsData';
import { API_BASE_URL } from '../../../config/api';
import CodeBlock from './CodeBlock';
import TryItPanel from './TryItPanel';

const METHOD_STYLES: Record<HttpMethod, string> = {
  GET: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-700/50',
  POST: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-700/50',
  PATCH: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-700/50',
  DELETE: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-700/50',
};

const buildBodyExample = (endpoint: ApiEndpoint) => {
  const bodyParams = endpoint.params.filter(p => p.in === 'body');
  const body: Record<string, unknown> = {};
  bodyParams.forEach(p => { body[p.name] = p.example; });
  return body;
};

const buildFullPath = (endpoint: ApiEndpoint, externalPrefix: string) => {
  let path = endpoint.path;
  endpoint.params.filter(p => p.in === 'path').forEach(p => {
    path = path.replace(`:${p.name}`, String(p.example ?? `{${p.name}}`));
  });
  return `${externalPrefix}${path}`;
};

const buildCurl = (endpoint: ApiEndpoint, externalPrefix: string) => {
  const fullPath = buildFullPath(endpoint, externalPrefix);
  const queryParams = endpoint.params.filter(p => p.in === 'query' && p.example !== undefined);
  const qs = queryParams.length ? '?' + queryParams.map(p => `${p.name}=${encodeURIComponent(String(p.example))}`).join('&') : '';
  const bodyParams = endpoint.params.filter(p => p.in === 'body');

  const authHeader = endpoint.auth === 'none' ? '' : ` \\\n  -H "Authorization: Bearer YOUR_TOKEN"`;
  let cmd = `curl -X ${endpoint.method} "${API_BASE_URL}${fullPath}${qs}"${authHeader} \\\n  -H "Content-Type: application/json"`;

  if (bodyParams.length && endpoint.method !== 'GET' && endpoint.method !== 'DELETE') {
    const bodyObj: Record<string, unknown> = {};
    bodyParams.forEach(p => { bodyObj[p.name] = p.example; });
    cmd += ` \\\n  -d '${JSON.stringify(bodyObj)}'`;
  }
  return cmd;
};

const buildJs = (endpoint: ApiEndpoint, externalPrefix: string) => {
  const fullPath = buildFullPath(endpoint, externalPrefix);
  const queryParams = endpoint.params.filter(p => p.in === 'query' && p.example !== undefined);
  const bodyParams = endpoint.params.filter(p => p.in === 'body');
  const method = endpoint.method.toLowerCase();

  const needsToken = endpoint.auth !== 'none';
  const optsLines: string[] = needsToken ? [`  headers: { Authorization: \`Bearer \${token}\` }`] : [];
  if (queryParams.length) {
    const qObj = queryParams.map(p => `${p.name}: ${JSON.stringify(p.example)}`).join(', ');
    optsLines.push(`  params: { ${qObj} }`);
  }
  const tokenLine = needsToken ? `const token = 'YOUR_TOKEN';\n\n` : '';
  const optsArg = optsLines.length ? `,\n  {\n${optsLines.join(',\n')}\n  }` : '';

  if (bodyParams.length && endpoint.method !== 'GET' && endpoint.method !== 'DELETE') {
    const bodyObj: Record<string, unknown> = {};
    bodyParams.forEach(p => { bodyObj[p.name] = p.example; });
    return `import axios from 'axios';\n\n${tokenLine}const { data } = await axios.${method}(\n  '${API_BASE_URL}${fullPath}',\n  ${JSON.stringify(bodyObj, null, 2).replace(/\n/g, '\n  ')}${optsArg}\n);\n\nconsole.log(data);`;
  }

  return `import axios from 'axios';\n\n${tokenLine}const { data } = await axios.${method}(\n  '${API_BASE_URL}${fullPath}'${optsArg}\n);\n\nconsole.log(data);`;
};

interface EndpointCardProps {
  endpoint: ApiEndpoint;
  externalPrefix: string;
}

const EndpointCard: FC<EndpointCardProps> = ({ endpoint, externalPrefix }) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<'curl' | 'js' | 'response'>('curl');
  const [showTryIt, setShowTryIt] = useState(false);
  const bodyParams = endpoint.params.filter(p => p.in === 'body');
  const hasBody = bodyParams.length > 0 && endpoint.method !== 'GET' && endpoint.method !== 'DELETE';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition-colors"
      >
        <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg border tracking-wide ${METHOD_STYLES[endpoint.method]}`}>
          {endpoint.method}
        </span>
        <span className="font-mono text-xs sm:text-sm text-gray-700 dark:text-gray-300 truncate flex-1">
          {externalPrefix}{endpoint.path}
        </span>
        {endpoint.mutating && (
          <span className="hidden sm:inline text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 px-2 py-0.5 rounded-full flex-shrink-0">
            MUTATES
          </span>
        )}
        {endpoint.isSSE && (
          <span className="hidden sm:inline text-[10px] font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700/40 px-2 py-0.5 rounded-full flex-shrink-0">
            SSE
          </span>
        )}
        <i className={`bx bx-chevron-down text-gray-400 text-lg flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-700 pt-4 space-y-4">
          <div>
            <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-1">{endpoint.title}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{endpoint.description}</p>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="inline-flex items-center gap-1 text-gray-400">
              <i className={`bx ${endpoint.auth === 'none' ? 'bx-lock-open-alt' : 'bx-lock-alt'}`} />
              {endpoint.auth === 'bearer'
                ? 'Requires Bearer token'
                : endpoint.auth === 'static-secret'
                ? 'Static secret (provider-only)'
                : 'No authentication required'}
            </span>
          </div>

          {endpoint.params.length > 0 && (
            <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="min-w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/40 border-b border-gray-100 dark:border-gray-700">
                    <th className="px-3 py-2 text-left font-bold text-gray-500 dark:text-gray-400">Param</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-500 dark:text-gray-400">In</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-500 dark:text-gray-400">Type</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-500 dark:text-gray-400">Required</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-500 dark:text-gray-400">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                  {endpoint.params.map(p => (
                    <tr key={p.name}>
                      <td className="px-3 py-2 font-mono text-indigo-600 dark:text-indigo-400">{p.name}</td>
                      <td className="px-3 py-2 text-gray-400">{p.in}</td>
                      <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{p.type}</td>
                      <td className="px-3 py-2">
                        {p.required
                          ? <span className="text-red-500 font-semibold">required</span>
                          : <span className="text-gray-300 dark:text-gray-600">optional</span>}
                      </td>
                      <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{p.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {hasBody && (
            <div>
              <h5 className="text-xs font-bold text-gray-600 dark:text-gray-300 mb-2 flex items-center gap-1.5">
                <i className="bx bx-braces text-indigo-500" /> Request Body
              </h5>
              <CodeBlock json={buildBodyExample(endpoint)} label="application/json" />
            </div>
          )}

          {/* Code tabs */}
          <div>
            <div className="flex gap-1 mb-2">
              {([
                { key: 'curl', label: 'cURL' },
                { key: 'js', label: 'JavaScript' },
                { key: 'response', label: 'Response' },
              ] as const).map(t => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    tab === t.key
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {tab === 'curl' && <CodeBlock code={buildCurl(endpoint, externalPrefix)} lang="bash" label="shell" />}
            {tab === 'js' && <CodeBlock code={buildJs(endpoint, externalPrefix)} lang="javascript" label="javascript" />}
            {tab === 'response' && (
              <div className="space-y-3">
                <CodeBlock json={endpoint.responseExample.body} label={`${endpoint.responseExample.status} success`} />
                {endpoint.errorExample && (
                  <CodeBlock json={endpoint.errorExample.body} label={`${endpoint.errorExample.status} error`} />
                )}
              </div>
            )}
          </div>

          {/* Try it toggle */}
          {!showTryIt ? (
            <button
              onClick={() => setShowTryIt(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <i className="bx bx-play-circle" /> Try this endpoint live
            </button>
          ) : (
            <TryItPanel endpoint={endpoint} externalPrefix={externalPrefix} />
          )}
        </div>
      )}
    </div>
  );
};

export default EndpointCard;
