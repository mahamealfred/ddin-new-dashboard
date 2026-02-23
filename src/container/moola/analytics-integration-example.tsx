import { FC, Fragment, useState } from 'react';
import { useCollectionTransactions } from '../../hooks/useCollectionTransactions';
import { useTransactionAnalytics, useAnalyticsSummary } from '../../hooks/useAnalyticsData';
import DateRangeFilter from '../../components/common/date-range-filter/DateRangeFilter';
import SpkEcharts from '../../@spk/spk-packages/spk-echart';
import { EChartsOption } from 'echarts';

interface IntegrationExampleProps {}

/**
 * Complete Integration Example
 * This demonstrates how to integrate the advanced analytics components
 * with real transaction data from your backend
 */
const AnalyticsIntegrationExample: FC<IntegrationExampleProps> = () => {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('month');
  const [_startDate, setStartDate] = useState<string>('');
  const [_endDate, setEndDate] = useState<string>('');

  // Fetch real transaction data from your API
  const { data: transactions, loading, error } = useCollectionTransactions({
    status: 'all',
    limit: 1000,
    offset: 0,
  });

  // Transform transaction data into analytics format
  const analyticsData = useTransactionAnalytics(transactions, period === 'week' ? 'week' : 'month');

  // Get summary statistics
  const summary = useAnalyticsSummary(analyticsData);

  // Create chart options with real data
  const createRevenueChart = (): EChartsOption => ({
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      textStyle: { color: '#fff' },
    },
    xAxis: {
      type: 'category',
      data: analyticsData.map(d => d.date),
      axisLine: { lineStyle: { color: '#e0e6ed' } },
      axisLabel: { fontSize: 12, color: '#8c9097' },
    },
    yAxis: {
      type: 'value',
      name: 'Revenue (RWF)',
      axisLine: { lineStyle: { color: '#e0e6ed' } },
      splitLine: { lineStyle: { color: '#f0f0f0' } },
      axisLabel: { fontSize: 12, color: '#8c9097' },
    },
    grid: { left: '3%', right: '4%', bottom: '15%', top: '10%', containLabel: true },
    series: [
      {
        data: analyticsData.map(d => d.revenue),
        type: 'line',
        smooth: true,
        itemStyle: { color: '#3563eb' },
        areaStyle: { color: 'rgba(53, 99, 235, 0.1)' },
      } as any,
    ],
  });

  const createTransactionChart = (): EChartsOption => ({
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      textStyle: { color: '#fff' },
    },
    xAxis: {
      type: 'category',
      data: analyticsData.map(d => d.date),
      axisLine: { lineStyle: { color: '#e0e6ed' } },
      axisLabel: { fontSize: 12, color: '#8c9097' },
    },
    yAxis: {
      type: 'value',
      name: 'Count',
      axisLine: { lineStyle: { color: '#e0e6ed' } },
      splitLine: { lineStyle: { color: '#f0f0f0' } },
      axisLabel: { fontSize: 12, color: '#8c9097' },
    },
    grid: { left: '3%', right: '4%', bottom: '15%', top: '10%', containLabel: true },
    series: [
      {
        data: analyticsData.map(d => d.transactions),
        type: 'bar',
        itemStyle: { color: '#00ba34' },
      },
    ],
  });

  const handleDateChange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
    // Filter transactions based on date range here
    console.log(`Filter transactions from ${start} to ${end}`);
  };

  const handlePeriodChange = (selectedPeriod: string) => {
    setPeriod(selectedPeriod as 'day' | 'week' | 'month');
  };

  return (
    <Fragment>
      {/* Date Range Filter */}
      <DateRangeFilter
        onDateChange={handleDateChange}
        onPeriodChange={handlePeriodChange}
      />

      {/* Loading State */}
      {loading && (
        <div className="box mb-6 border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20">
          <div className="box-body">
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              <i className="ri-loader-4-line animate-spin me-2"></i>
              Loading analytics data...
            </p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="box mb-6 border-red-200 bg-red-50 dark:bg-red-900/20">
          <div className="box-body">
            <p className="text-sm text-red-700 dark:text-red-300">
              <i className="ri-error-warning-line me-2"></i>
              {error}
            </p>
          </div>
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-12 gap-x-6 mb-6">
        <div className="xl:col-span-3 lg:col-span-6 col-span-12">
          <div className="box">
            <div className="box-body">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Total Revenue</p>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {(summary.totalRevenue / 1000000).toFixed(2)}M
                  </h4>
                  <span className="text-xs text-success">
                    <i className="ri-arrow-up-line"></i> Real Data
                  </span>
                </div>
                <div className="text-3xl text-primary opacity-20">
                  <i className="ri-money-dollar-circle-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-3 lg:col-span-6 col-span-12">
          <div className="box">
            <div className="box-body">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Total Transactions</p>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {summary.totalTransactions.toLocaleString()}
                  </h4>
                  <span className="text-xs text-success">
                    <i className="ri-arrow-up-line"></i> Real Data
                  </span>
                </div>
                <div className="text-3xl text-success opacity-20">
                  <i className="ri-exchange-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-3 lg:col-span-6 col-span-12">
          <div className="box">
            <div className="box-body">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Avg Success Rate</p>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {summary.avgSuccessRate.toFixed(2)}%
                  </h4>
                  <span className="text-xs text-success">
                    <i className="ri-arrow-up-line"></i> Real Data
                  </span>
                </div>
                <div className="text-3xl text-warning opacity-20">
                  <i className="ri-checkbox-circle-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-3 lg:col-span-6 col-span-12">
          <div className="box">
            <div className="box-body">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Avg Conversion</p>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {summary.avgConversionRate.toFixed(2)}%
                  </h4>
                  <span className="text-xs text-success">
                    <i className="ri-arrow-up-line"></i> Real Data
                  </span>
                </div>
                <div className="text-3xl text-danger opacity-20">
                  <i className="ri-target-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      {!loading && analyticsData.length > 0 && (
        <div className="grid grid-cols-12 gap-x-6">
          <div className="xl:col-span-6 col-span-12">
            <div className="box">
              <div className="box-header">
                <div className="box-title">Revenue Trend (Real Data)</div>
              </div>
              <div className="box-body">
                <SpkEcharts
                  chartOptions={createRevenueChart()}
                  chartSeries={[]}
                  height={350}
                  mainClass="w-full"
                />
              </div>
            </div>
          </div>

          <div className="xl:col-span-6 col-span-12">
            <div className="box">
              <div className="box-header">
                <div className="box-title">Transaction Count (Real Data)</div>
              </div>
              <div className="box-body">
                <SpkEcharts
                  chartOptions={createTransactionChart()}
                  chartSeries={[]}
                  height={350}
                  mainClass="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Peak/Lowest Day Info */}
      {summary.peakDay && summary.lowestDay && (
        <div className="grid grid-cols-12 gap-x-6 mt-6">
          <div className="lg:col-span-6 col-span-12">
            <div className="box border-green-200 dark:border-green-800">
              <div className="box-body">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <i className="ri-trending-up-line text-success me-2"></i>
                  Peak Day
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {summary.peakDay.date}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Revenue: {(summary.peakDay.revenue / 1000000).toFixed(2)}M RWF
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {summary.peakDay.transactions} transactions
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 col-span-12">
            <div className="box border-red-200 dark:border-red-800">
              <div className="box-body">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <i className="ri-trending-down-line text-danger me-2"></i>
                  Lowest Day
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {summary.lowestDay.date}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Revenue: {(summary.lowestDay.revenue / 1000000).toFixed(2)}M RWF
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {summary.lowestDay.transactions} transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Raw Data Preview (for debugging) */}
      {analyticsData.length > 0 && (
        <div className="box mt-6">
          <div className="box-header border-b">
            <div className="box-title">Data Summary</div>
          </div>
          <div className="box-body">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Total records: <span className="font-bold text-gray-900 dark:text-white">{analyticsData.length}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Date range: <span className="font-bold text-gray-900 dark:text-white">
                {analyticsData[0]?.date} to {analyticsData[analyticsData.length - 1]?.date}
              </span>
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AnalyticsIntegrationExample;
