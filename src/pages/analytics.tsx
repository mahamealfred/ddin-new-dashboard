import { useState } from 'react';
import { useCollectionTransactions, CollectionTransaction } from '../hooks/useCollectionTransactions';
import Chart from 'react-apexcharts';

const PERIODS = [
  { label: 'Hourly', value: 'hourly' },
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
  { label: 'Yearly', value: 'yearly' },
];

const SERVICE_TYPES = [
  { label: 'All', value: 'all' },
  { label: 'DDIN', value: 'DDIN' },
  { label: 'MTN', value: 'MTN' },
];

export default function AnalyticsPage() {
  const [period, setPeriod] = useState('daily');
  const [serviceType, setServiceType] = useState('all');

  const { data } = useCollectionTransactions();

  // Filtered transactions by service type
  const filteredTransactions = serviceType === 'all'
    ? data
    : data.filter((t: CollectionTransaction) => t.provider === serviceType);

  // Group and summarize by period (placeholder logic)
  const totalRevenue = filteredTransactions.reduce(
    (sum: number, t: CollectionTransaction) => sum + Number(t.amount || 0),
    0
  );
  const count = filteredTransactions.length;

  // Chart data (placeholder)
  const chartOptions = {
    chart: { type: 'bar' as const },
    xaxis: { categories: ['A', 'B', 'C'] },
  };
  const chartSeries = [
    { name: 'Revenue', data: [1000, 2000, 3000] },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="flex gap-4 mb-6">
        <select value={period} onChange={e => setPeriod(e.target.value)} className="border p-2 rounded">
          {PERIODS.map(p => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
        <select value={serviceType} onChange={e => setServiceType(e.target.value)} className="border p-2 rounded">
          {SERVICE_TYPES.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded shadow p-4">
          <h2 className="font-semibold">{serviceType === 'all' ? 'All Services' : serviceType} Total Revenue</h2>
          <div className="text-3xl font-bold">{totalRevenue.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</div>
          <div className="text-gray-500">Transactions: {count}</div>
        </div>
        {/* Add more summary cards for DDIN, MTN if needed */}
      </div>
      <div className="bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Revenue Chart</h2>
        <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
      </div>
    </div>
  );
}
