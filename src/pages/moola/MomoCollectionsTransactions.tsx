  // CSV Download
  const downloadCSV = () => {
    try {
      if (!transactions.length) return;
      const header = [
        'Date',
        'Customer Name',
        'Customer Account',
        'Amount',
        'Currency',
        'Status',
        'Reference',
        'Provider',
        'Agent ID',
        'Transaction ID',
      ];
      const rows = transactions.map(tx => [
        new Date(tx.createdAt).toLocaleString(),
        tx.customerName,
        tx.customerAccountNumber,
        tx.amount,
        tx.currencyCode,
        tx.status,
        tx.referenceId,
        tx.provider,
        tx.agentId,
        tx.transactionId,
      ]);
      // Add BOM for Excel compatibility
      const BOM = '\uFEFF';
      const csvContent = BOM + [header, ...rows]
        .map(e => e.map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
        .join('\r\n');
      // Use a temporary anchor for download
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'momo-collections-transactions.csv';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (e) {
      alert('CSV download failed. Please try again or check your browser settings.');
    }
  };

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MOMO_API_URL = 'https://core-api.ddin.rw/v1/thirdparty/collection';

const FILTERS = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
  { label: 'Yearly', value: 'yearly' },
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

const MomoCollectionsTransactions: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('daily');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchTransactions();
    // eslint-disable-next-line
  }, [page, limit, filter, search]);

  const fetchTransactions = async () => {
    setLoading(true);
    setError('');
    try {
      const { start, end } = getDateRange(filter);
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
      setTransactions(res.data.data || []);
      setTotal(res.data.count || 0);
    } catch (err) {
      setError('Failed to fetch transactions');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleFilter = (val: string) => {
    setFilter(val);
    setPage(1);
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg min-h-[60vh]">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Momo Collections Transactions</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto items-center">
          <input
            type="text"
            placeholder="Search by customer, reference, etc."
            value={search}
            onChange={handleSearch}
            className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <div className="flex gap-1 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-150 ${filter === f.value ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900'}`}
                onClick={() => handleFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
          {/* Download CSV button removed as requested */}
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Reference</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Provider</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Agent ID</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Transaction ID</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
            {loading ? (
              <tr>
                <td colSpan={8} className="text-center py-8 text-gray-400 dark:text-gray-500">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={8} className="text-center py-8 text-red-500">{error}</td>
              </tr>
            ) : transactions.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-8 text-gray-400 dark:text-gray-500">No transactions found.</td>
              </tr>
            ) : (
              transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
                  <td className="px-4 py-2 whitespace-nowrap">{new Date(tx.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800 dark:text-gray-100">{tx.customerName}</div>
                    <div className="text-xs text-gray-500">{tx.customerAccountNumber}</div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-semibold">{tx.amount} {tx.currencyCode}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${tx.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{tx.status}</span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">{tx.referenceId}</td>
                  <td className="px-4 py-2 whitespace-nowrap uppercase">{tx.provider}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{tx.agentId}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{tx.transactionId}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
        <div className="text-gray-700 dark:text-gray-200">
          Page {page} of {totalPages}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-50 font-semibold"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-50 font-semibold"
          >
            Next
          </button>
        </div>
        <div>
          <select
            value={limit}
            onChange={e => { setLimit(Number(e.target.value)); setPage(1); }}
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {[10, 25, 50, 100].map(l => <option key={l} value={l}>{l} / page</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MomoCollectionsTransactions;
