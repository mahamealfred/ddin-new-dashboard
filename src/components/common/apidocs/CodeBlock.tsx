import { FC, useState, ReactNode, Fragment } from 'react';

// ─── JSON pretty-printer with manual syntax coloring (no Prism dependency) ──
const JSON_COLORS = {
  key: 'text-[#79b8ff]',
  string: 'text-[#a8ff78]',
  number: 'text-[#f97316]',
  boolean: 'text-[#c792ea]',
  null: 'text-[#ff8080]',
  punct: 'text-gray-500',
};

function renderJsonValue(value: unknown, indent: number): ReactNode {
  const pad = '  '.repeat(indent);
  const padClose = '  '.repeat(Math.max(indent - 1, 0));

  if (value === null) {
    return <span className={JSON_COLORS.null}>null</span>;
  }
  if (typeof value === 'string') {
    return <span className={JSON_COLORS.string}>"{value}"</span>;
  }
  if (typeof value === 'number') {
    return <span className={JSON_COLORS.number}>{value}</span>;
  }
  if (typeof value === 'boolean') {
    return <span className={JSON_COLORS.boolean}>{String(value)}</span>;
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return <span className={JSON_COLORS.punct}>[]</span>;
    return (
      <Fragment>
        <span className={JSON_COLORS.punct}>[</span>
        {value.map((item, i) => (
          <div key={i}>
            {pad}
            {renderJsonValue(item, indent + 1)}
            {i < value.length - 1 && <span className={JSON_COLORS.punct}>,</span>}
          </div>
        ))}
        {padClose}
        <span className={JSON_COLORS.punct}>]</span>
      </Fragment>
    );
  }
  if (typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return <span className={JSON_COLORS.punct}>{'{}'}</span>;
    return (
      <Fragment>
        <span className={JSON_COLORS.punct}>{'{'}</span>
        {entries.map(([k, v], i) => (
          <div key={k}>
            {pad}
            <span className={JSON_COLORS.key}>"{k}"</span>
            <span className={JSON_COLORS.punct}>: </span>
            {renderJsonValue(v, indent + 1)}
            {i < entries.length - 1 && <span className={JSON_COLORS.punct}>,</span>}
          </div>
        ))}
        {padClose}
        <span className={JSON_COLORS.punct}>{'}'}</span>
      </Fragment>
    );
  }
  return <span>{String(value)}</span>;
}

// ─── Very light bash/JS token coloring for cURL and SDK snippets ────────────
function colorizePlainLine(line: string, lang: 'bash' | 'javascript'): ReactNode {
  const parts: ReactNode[] = [];
  const stringRe = /"([^"]*)"|'([^']*)'/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let partKey = 0;

  while ((match = stringRe.exec(line))) {
    if (match.index > lastIndex) {
      parts.push(<Fragment key={partKey++}>{colorizeWords(line.slice(lastIndex, match.index), lang)}</Fragment>);
    }
    parts.push(
      <span key={partKey++} className="text-[#a8ff78]">
        {match[0]}
      </span>
    );
    lastIndex = stringRe.lastIndex;
  }
  if (lastIndex < line.length) {
    parts.push(<Fragment key={partKey++}>{colorizeWords(line.slice(lastIndex), lang)}</Fragment>);
  }
  return parts;
}

function colorizeWords(segment: string, lang: 'bash' | 'javascript'): ReactNode {
  const keywords = lang === 'bash'
    ? ['curl', '-X', '-H', '-d', '--data', '--header', '--request']
    : ['const', 'let', 'var', 'await', 'async', 'function', 'import', 'from', 'return', 'new'];

  const re = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  const pieces = segment.split(re);
  return pieces.map((piece, i) =>
    keywords.includes(piece)
      ? <span key={i} className="text-[#79b8ff]">{piece}</span>
      : <Fragment key={i}>{piece}</Fragment>
  );
}

interface CodeBlockProps {
  /** Pass a JS value to render as pretty-printed, colorized JSON. */
  json?: unknown;
  /** Pass raw text (e.g. a cURL command or JS snippet) instead of `json`. */
  code?: string;
  lang?: 'bash' | 'javascript' | 'json';
  label?: string;
  className?: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ json, code, lang = 'json', label, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const rawText = json !== undefined ? JSON.stringify(json, null, 2) : (code || '');

  const copy = () => {
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className={`rounded-xl overflow-hidden border border-gray-800 bg-[#0d1117] ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900/60 border-b border-gray-800/60">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          </div>
          {label && <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest ml-1">{label}</span>}
        </div>
        <button
          onClick={copy}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg transition-all ${
            copied
              ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-700/50'
              : 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-200 border border-gray-700'
          }`}
        >
          <i className={`bx ${copied ? 'bx-check' : 'bx-copy'} text-sm`} />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 text-xs font-mono leading-6 overflow-x-auto max-h-[420px] bg-transparent border-0 text-gray-300">
        <code>
          {json !== undefined
            ? renderJsonValue(json, 1)
            : rawText.split('\n').map((line, i) => (
                <div key={i}>{lang === 'bash' || lang === 'javascript' ? colorizePlainLine(line, lang) : line}</div>
              ))}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
