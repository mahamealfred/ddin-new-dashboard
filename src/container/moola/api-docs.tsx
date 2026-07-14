import { FC, useState } from 'react';
import Pageheader from '../../components/common/page-header/pageheader';
import CodeBlock from '../../components/common/apidocs/CodeBlock';
import EndpointCard from '../../components/common/apidocs/EndpointCard';
import { API_SECTIONS } from '../../data/apiDocsData';
import { API_BASE_URL } from '../../config/api';

type TabKey = 'auth' | 'collection' | 'disbursement' | 'webhooks';

const bufferToHex = (buf: ArrayBuffer) => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');

const SignatureVerifier: FC = () => {
  const [payload, setPayload] = useState('{"event":"collection.success","timestamp":"2026-07-11T10:15:32.120Z","data":{"referenceId":"4a29f6d1-8b3c-4e97-a615-7d2c9f4e8b30","status":"success"}}');
  const [secret, setSecret] = useState('');
  const [signature, setSignature] = useState('');
  const [result, setResult] = useState<'valid' | 'invalid' | null>(null);
  const [computed, setComputed] = useState('');
  const [checking, setChecking] = useState(false);

  const verify = async () => {
    setChecking(true);
    setResult(null);
    try {
      const enc = new TextEncoder();
      const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
      const sigBuffer = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
      const hex = bufferToHex(sigBuffer);
      setComputed(hex);
      const cleanIncoming = signature.trim().toLowerCase();
      setResult(hex === cleanIncoming ? 'valid' : 'invalid');
    } catch {
      setResult('invalid');
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
          <i className="bx bx-shield-quarter text-indigo-600 dark:text-indigo-400 text-xl" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-white">Signature Verifier</h3>
          <p className="text-xs text-gray-400">Paste a webhook payload, your secret, and the received signature — verified entirely in your browser, nothing is sent anywhere.</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Raw request body</label>
        <textarea
          value={payload}
          onChange={e => setPayload(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Your webhook secret</label>
          <input
            value={secret}
            onChange={e => setSecret(e.target.value)}
            placeholder="the secret shown when you registered"
            className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">X-Moola-Signature header value</label>
          <input
            value={signature}
            onChange={e => setSignature(e.target.value)}
            placeholder="hex signature you received"
            className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>
      </div>

      <button
        onClick={verify}
        disabled={checking || !secret || !payload}
        className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors"
      >
        {checking ? <i className="bx bx-loader-alt animate-spin" /> : <i className="bx bx-check-shield" />}
        Verify Signature
      </button>

      {result && (
        <div className={`rounded-xl border p-4 ${result === 'valid' ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'}`}>
          <p className={`text-sm font-bold flex items-center gap-2 ${result === 'valid' ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'}`}>
            <i className={`bx ${result === 'valid' ? 'bx-check-circle' : 'bx-x-circle'} text-lg`} />
            {result === 'valid' ? 'Signature matches — this request is authentic.' : 'Signature does NOT match — reject this request.'}
          </p>
          <p className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mt-2 break-all">computed: {computed}</p>
        </div>
      )}
    </div>
  );
};

const WebhooksTab: FC = () => (
  <div className="space-y-5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
          <i className="bx bx-mobile-alt text-indigo-500" /> Collection events
        </h3>
        <div className="space-y-2 mb-4">
          {['collection.success', 'collection.failed'].map(ev => (
            <span key={ev} className="inline-block font-mono text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-lg mr-2">{ev}</span>
          ))}
        </div>
        <CodeBlock
          label="collection.success payload"
          json={{
            event: 'collection.success',
            timestamp: '2026-07-11T10:15:32.120Z',
            data: {
              referenceId: '4a29f6d1-8b3c-4e97-a615-7d2c9f4e8b30',
              operationReferenceId: 'AZ-REF-88213',
              provider: 'MTN',
              customerAccountNumber: '0788123456',
              customerName: 'Jean Mugisha',
              currencyCode: 'RWF',
              amount: 5000,
              status: 'success',
              transactionId: 'CYC-559013',
            },
          }}
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
          <i className="bx bx-send text-indigo-500" /> Disbursement events
        </h3>
        <div className="space-y-2 mb-4">
          {['disbursement.completed', 'disbursement.failed'].map(ev => (
            <span key={ev} className="inline-block font-mono text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-lg mr-2">{ev}</span>
          ))}
        </div>
        <CodeBlock
          label="disbursement.completed payload"
          json={{
            event: 'disbursement.completed',
            timestamp: '2026-07-11T10:22:04.500Z',
            data: {
              referenceId: '3fa1b2c4-5e6d-4a8b-9c1f-8e2d6a4b7c90',
              externalReferenceId: 'DSB-LX9K3F2-A1B2',
              bankName: 'MTN',
              accountNumber: '0788123456',
              amount: 25000,
              status: 'COMPLETED',
            },
          }}
        />
      </div>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
      <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
        <i className="bx bx-lock-alt text-indigo-500" /> Verifying authenticity
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        Every webhook is signed with HMAC-SHA256 using the secret you were given when you registered the subscription.
        Always verify the signature against the <strong>raw request body</strong> before trusting a webhook.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CodeBlock
          label="headers sent with every webhook"
          code={`Content-Type: application/json\nX-Moola-Event: collection.success\nX-Moola-Timestamp: 2026-07-11T10:15:32.120Z\nX-Moola-Signature: 7a3f9e...c21b (hex HMAC-SHA256)`}
        />
        <CodeBlock
          label="node.js verification"
          lang="javascript"
          code={`import crypto from 'crypto';\n\nfunction isValid(rawBody, signatureHeader, secret) {\n  const expected = crypto\n    .createHmac('sha256', secret)\n    .update(rawBody) // the raw, unparsed request body\n    .digest('hex');\n  return expected === signatureHeader;\n}`}
        />
      </div>
    </div>

    <SignatureVerifier />
  </div>
);

const ApiDocs: FC = () => {
  const [tab, setTab] = useState<TabKey>('auth');
  const activeSection = API_SECTIONS.find(s => s.id === tab);

  return (
    <>
      <Pageheader currentpage="Developer Tools" activepage="Developers" mainpage="Integration Guide" />

      <div className="space-y-5">
        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl p-6 text-white shadow-lg">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <i className="bx bx-code-alt text-3xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold mb-1">Developer Tools</h2>
              <p className="text-white/75 text-sm leading-relaxed">
                Everything you need to integrate Collection (USSD push) and Disbursement (payouts)
                — request bodies, response &amp; error examples, ready-to-run cURL &amp; JavaScript snippets, and a live "Try it" console for every endpoint.
              </p>
            </div>
          </div>
        </div>

        {/* Getting started */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
            <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
              <i className="bx bx-rocket text-indigo-500" /> Getting Started
            </h3>
            <ol className="space-y-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              <li className="flex gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold flex items-center justify-center">1</span>
                <span>Call <strong>Login</strong> in the Auth &amp; Accounts API to get an access token, then send it as <code className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded">Authorization: Bearer &lt;token&gt;</code> on every request below. Use <strong>Refresh Token</strong> to get a new one without asking the user to log in again.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold flex items-center justify-center">2</span>
                <span>Pick a section below — <strong>Collection</strong> to pull money in. (Disbursement API docs are coming soon.)</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold flex items-center justify-center">3</span>
                <span>Register a webhook subscription so you're notified the instant a transaction resolves, instead of polling.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold flex items-center justify-center">4</span>
                <span>Expand any endpoint below for its <strong>request body</strong>, response shape, copy-paste cURL / JavaScript snippets, and click <strong>"Try this endpoint live"</strong> to fire a real request using your current session.</span>
              </li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
            <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
              <i className="bx bx-globe text-indigo-500" /> Base URL
            </h3>
            <code className="block text-xs font-mono bg-gray-100 dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 rounded-lg px-3 py-2 mb-3 break-all">
              {API_BASE_URL}
            </code>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every path documented below is relative to this base URL, e.g.
              <code className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded mx-1">{API_BASE_URL}/v1/momo/collection/initiate</code>.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 w-fit flex-wrap">
          {([
            { key: 'auth', label: 'Auth & Accounts', icon: 'bx bx-key' },
            { key: 'collection', label: 'Collection API', icon: 'bx bx-mobile-alt' },
            { key: 'disbursement', label: 'Disbursement API', icon: 'bx bx-send', disabled: true },
            { key: 'webhooks', label: 'Webhooks & Signatures', icon: 'bx bx-shield-quarter' },
          ] as const).map(t => (
            <button
              key={t.key}
              onClick={() => !t.disabled && setTab(t.key)}
              disabled={t.disabled}
              title={t.disabled ? 'Coming soon' : undefined}
              className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                t.disabled
                  ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                  : tab === t.key
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <i className={t.icon} />
              {t.label}
              {t.disabled && (
                <span className="ml-1 text-[9px] font-bold uppercase tracking-wide bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-1.5 py-0.5 rounded-full">
                  Soon
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === 'webhooks' ? (
          <WebhooksTab />
        ) : activeSection ? (
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 flex items-start gap-3">
              <div className="w-9 h-9 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className={`${activeSection.icon} text-indigo-600 dark:text-indigo-400 text-lg`} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 dark:text-white">{activeSection.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{activeSection.intro}</p>
              </div>
            </div>

            <div className="space-y-3">
              {activeSection.endpoints.map(ep => (
                <EndpointCard key={ep.id} endpoint={ep} externalPrefix={activeSection.externalPrefix} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ApiDocs;
