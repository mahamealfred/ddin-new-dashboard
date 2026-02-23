import { useState } from 'react';
import { FC } from 'react';

interface DateRangeFilterProps {
  onDateChange?: (startDate: string, endDate: string) => void;
  onPeriodChange?: (period: 'today' | 'week' | 'month' | 'quarter' | 'year' | 'custom') => void;
}

const DateRangeFilter: FC<DateRangeFilterProps> = ({ onDateChange, onPeriodChange }) => {
  const today = new Date();
  const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
  const threeMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
  const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

  const [startDate, setStartDate] = useState<string>(formatDate(oneMonthAgo));
  const [endDate, setEndDate] = useState<string>(formatDate(today));
  const [selectedPeriod, setSelectedPeriod] = useState<'today' | 'week' | 'month' | 'quarter' | 'year' | 'custom'>('month');

  function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  const handlePeriodChange = (period: 'today' | 'week' | 'month' | 'quarter' | 'year' | 'custom') => {
    setSelectedPeriod(period);
    let start = '';
    let end = formatDate(today);

    switch (period) {
      case 'today':
        start = formatDate(today);
        break;
      case 'week':
        start = formatDate(oneWeekAgo);
        break;
      case 'month':
        start = formatDate(oneMonthAgo);
        break;
      case 'quarter':
        start = formatDate(threeMonthsAgo);
        break;
      case 'year':
        start = formatDate(oneYearAgo);
        break;
      case 'custom':
        return;
    }

    setStartDate(start);
    setEndDate(end);
    onPeriodChange?.(period);
    onDateChange?.(start, end);
  };

  const handleCustomDateChange = () => {
    onDateChange?.(startDate, endDate);
    onPeriodChange?.('custom');
  };

  return (
    <div className="box mb-6">
      <div className="box-body">
        <div className="grid grid-cols-12 gap-4">
          {/* Period Quick Select */}
          <div className="col-span-12 lg:col-span-6">
            <label className="text-sm font-semibold mb-3 block">Quick Period Select</label>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Today', value: 'today' as const },
                { label: 'This Week', value: 'week' as const },
                { label: 'This Month', value: 'month' as const },
                { label: 'Q3', value: 'quarter' as const },
                { label: 'This Year', value: 'year' as const },
              ].map((period) => (
                <button
                  key={period.value}
                  onClick={() => handlePeriodChange(period.value)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedPeriod === period.value
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Date Range */}
          <div className="col-span-12 lg:col-span-6">
            <label className="text-sm font-semibold mb-3 block">Custom Date Range</label>
            <div className="flex gap-3 items-end flex-wrap">
              <div className="flex-1 min-w-[150px]">
                <label className="text-xs text-gray-600 dark:text-gray-400 block mb-1">From</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="ti-form-control w-full !text-sm"
                />
              </div>
              <div className="flex-1 min-w-[150px]">
                <label className="text-xs text-gray-600 dark:text-gray-400 block mb-1">To</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="ti-form-control w-full !text-sm"
                />
              </div>
              <button
                onClick={handleCustomDateChange}
                className="ti-btn ti-btn-primary !py-2 !px-4 !text-sm font-medium"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Selected Range Info */}
          <div className="col-span-12">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <i className="ri-information-line me-2"></i>
                Selected Period: <span className="font-semibold">{startDate}</span> to{' '}
                <span className="font-semibold">{endDate}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRangeFilter;
