import { FC, useState, useMemo, Fragment } from 'react';
import SpkEcharts from '../../../@spk/spk-packages/spk-echart';
import DateRangeFilter from '../date-range-filter/DateRangeFilter';
import { EChartsOption } from 'echarts';

interface CollectionTransaction {
  id: number;
  referenceId?: string;
  operationReferenceId?: string;
  provider?: string;
  customerAccountNumber?: string;
  customerName?: string;
  currencyCode?: string;
  amount?: string | number;
  status?: string;
  message?: string;
  agentId?: string;
  transactionId?: string;
  additionalProperties?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}

interface AnalyticsData {
  date: string;
  revenue: number;
  transactions: number;
  successRate: number;
  avgTransactionValue: number;
  conversionRate: number;
}

interface AdvancedAnalyticsProps {
  title?: string;
  showDateRange?: boolean;
  transactions?: CollectionTransaction[];
}

const AdvancedAnalytics: FC<AdvancedAnalyticsProps> = ({ 
  title = "Advanced Analytics", 
  showDateRange = true,
  transactions = []
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('month');

  // Process real transaction data
  const processTransactionData = (transactions: CollectionTransaction[], days: number): AnalyticsData[] => {
    const today = new Date();
    const dataMap = new Map<string, {
      revenue: number;
      count: number;
      success: number;
    }>();

    // Initialize empty days
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      dataMap.set(dateStr, { revenue: 0, count: 0, success: 0 });
    }

    // Aggregate transaction data by date
    transactions.forEach(tx => {
      if (!tx.createdAt) return;
      
      const txDate = new Date(tx.createdAt).toISOString().split('T')[0];
      const amount = Number(tx.amount || 0);
      
      if (dataMap.has(txDate)) {
        const dayData = dataMap.get(txDate)!;
        dayData.revenue += amount;
        dayData.count += 1;
        if (tx.status === 'SUCCESS') {
          dayData.success += 1;
        }
      }
    });

    // Convert to array format
    const result: AnalyticsData[] = [];
    dataMap.forEach((value, date) => {
      const successRate = value.count > 0 ? (value.success / value.count) * 100 : 0;
      const avgTransactionValue = value.count > 0 ? value.revenue / value.count : 0;
      
      result.push({
        date,
        revenue: value.revenue,
        transactions: value.count,
        successRate,
        avgTransactionValue,
        conversionRate: successRate * 0.85 // Conversion rate approximation
      });
    });

    return result.sort((a, b) => a.date.localeCompare(b.date));
  };

  const analyticsData = useMemo(() => {
    const days = selectedPeriod === 'today' ? 1 : selectedPeriod === 'week' ? 7 : 30;
    return processTransactionData(transactions, days);
  }, [selectedPeriod, transactions]);

  // Format dates for display
  const formatDateLabel = (dateStr: string): string => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Revenue Trend Chart
  const revenueChartOptions: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: '#333',
      textStyle: { color: '#fff' },
    },
    xAxis: {
      type: 'category',
      data: analyticsData.map(d => formatDateLabel(d.date)),
      axisLine: { lineStyle: { color: '#e0e6ed' } },
      axisLabel: { fontSize: 11, color: '#8c9097', rotate: 45 },
    },
    yAxis: {
      type: 'value',
      name: 'Amount (RWF)',
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
  };

  // Transactions vs Success Rate Chart
  const transactionsChartOptions: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: '#333',
      textStyle: { color: '#fff' },
    },
    xAxis: {
      type: 'category',
      data: analyticsData.map(d => formatDateLabel(d.date)),
      axisLine: { lineStyle: { color: '#e0e6ed' } },
      axisLabel: { fontSize: 11, color: '#8c9097', rotate: 45 },
    },
    yAxis: [
      {
        type: 'value',
        name: 'Transactions',
        axisLine: { lineStyle: { color: '#3563eb' } },
        axisLabel: { color: '#8c9097', fontSize: 12 },
        splitLine: { lineStyle: { color: '#f0f0f0' } },
      },
      {
        type: 'value',
        name: 'Success Rate (%)',
        axisLine: { lineStyle: { color: '#00ba34' } },
        axisLabel: { color: '#8c9097', fontSize: 12 },
        splitLine: { show: false },
      },
    ],
    grid: { left: '3%', right: '4%', bottom: '15%', top: '10%', containLabel: true },
    series: [
      {
        name: 'Transactions',
        data: analyticsData.map(d => d.transactions),
        type: 'bar',
        yAxisIndex: 0,
        itemStyle: { color: '#3563eb' },
      },
      {
        name: 'Success Rate',
        data: analyticsData.map(d => d.successRate),
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        itemStyle: { color: '#00ba34' },
        areaStyle: { color: 'rgba(0, 186, 52, 0.1)' },
      },
    ],
    legend: {
      data: ['Transactions', 'Success Rate'],
      bottom: 0,
      textStyle: { color: '#8c9097' },
    },
  };

  // Average Transaction Value & Conversion Rate
  const performanceChartOptions: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: '#333',
      textStyle: { color: '#fff' },
    },
    xAxis: {
      type: 'category',
      data: analyticsData.map(d => formatDateLabel(d.date)),
      axisLine: { lineStyle: { color: '#e0e6ed' } },
      axisLabel: { fontSize: 11, color: '#8c9097', rotate: 45 },
    },
    yAxis: [
      {
        type: 'value',
        name: 'Avg Transaction (RWF)',
        axisLine: { lineStyle: { color: '#f4811f' } },
        axisLabel: { color: '#8c9097', fontSize: 12 },
        splitLine: { lineStyle: { color: '#f0f0f0' } },
      },
      {
        type: 'value',
        name: 'Conversion Rate (%)',
        axisLine: { lineStyle: { color: '#9f00ff' } },
        axisLabel: { color: '#8c9097', fontSize: 12 },
        splitLine: { show: false },
      },
    ],
    grid: { left: '3%', right: '4%', bottom: '15%', top: '10%', containLabel: true },
    series: [
      {
        name: 'Avg Transaction Value',
        data: analyticsData.map(d => d.avgTransactionValue),
        type: 'line',
        smooth: true,
        yAxisIndex: 0,
        itemStyle: { color: '#f4811f' },
        areaStyle: { color: 'rgba(244, 129, 31, 0.1)' },
      },
      {
        name: 'Conversion Rate',
        data: analyticsData.map(d => d.conversionRate),
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        itemStyle: { color: '#9f00ff' },
        areaStyle: { color: 'rgba(159, 0, 255, 0.1)' },
      },
    ],
    legend: {
      data: ['Avg Transaction Value', 'Conversion Rate'],
      bottom: 0,
      textStyle: { color: '#8c9097' },
    },
  };

  // Distribution Chart (Pie) - Based on real transaction status
  const statusCounts = useMemo(() => {
    const counts = {
      SUCCESS: 0,
      PENDING: 0,
      FAILED: 0,
      DISPUTED: 0
    };

    transactions.forEach(tx => {
      const status = tx.status?.toUpperCase();
      if (status === 'SUCCESS') counts.SUCCESS++;
      else if (status === 'PENDING') counts.PENDING++;
      else if (status === 'FAILED') counts.FAILED++;
      else counts.DISPUTED++;
    });

    return counts;
  }, [transactions]);

  const distributionData = [
    { value: statusCounts.SUCCESS, name: 'Successful Trans.' },
    { value: statusCounts.PENDING, name: 'Pending Trans.' },
    { value: statusCounts.FAILED, name: 'Failed Trans.' },
    { value: statusCounts.DISPUTED, name: 'Disputed Trans.' },
  ].filter(item => item.value > 0);

  const distributionChartOptions: EChartsOption = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: '#333',
      textStyle: { color: '#fff' },
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: { color: '#8c9097' },
    },
    series: [
      {
        name: 'Transaction Status',
        type: 'pie',
        radius: '70%',
        data: distributionData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2,
        },
        color: ['#00ba34', '#f4811f', '#f93939', '#9f00ff'],
      },
    ],
  };

  // Key Metrics
  const totalRevenue = analyticsData.reduce((sum, d) => sum + d.revenue, 0);
  const totalTransactions = analyticsData.reduce((sum, d) => sum + d.transactions, 0);
  const avgSuccessRate = analyticsData.length > 0 ? (analyticsData.reduce((sum, d) => sum + d.successRate, 0) / analyticsData.length).toFixed(2) : '0';
  const avgConversionRate = analyticsData.length > 0 ? (analyticsData.reduce((sum, d) => sum + d.conversionRate, 0) / analyticsData.length).toFixed(2) : '0';

  const handleDateChange = (_start: string, _end: string) => {
    // Date change handled by period selector
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <Fragment>
      {showDateRange && (
        <DateRangeFilter
          onDateChange={handleDateChange}
          onPeriodChange={(period) => handlePeriodChange(period)}
        />
      )}

      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 mb-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                <i className="ri-bar-chart-line me-2"></i>
                {title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {selectedPeriod === 'today' ? 'Today' : selectedPeriod === 'week' ? 'Last 7 Days' : 'Last 30 Days'}
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="xl:col-span-3 lg:col-span-6 col-span-12">
          <div className="box">
            <div className="box-body">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Total Revenue</p>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {(totalRevenue / 1000000).toFixed(2)}M
                  </h4>
                  <p className="text-xs text-success mt-2">
                    <i className="ri-arrow-up-line"></i> +12.5%
                  </p>
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
                    {totalTransactions.toLocaleString()}
                  </h4>
                  <p className="text-xs text-success mt-2">
                    <i className="ri-arrow-up-line"></i> +8.3%
                  </p>
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
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Success Rate</p>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {avgSuccessRate}%
                  </h4>
                  <p className="text-xs text-success mt-2">
                    <i className="ri-arrow-up-line"></i> +3.2%
                  </p>
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
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Conversion Rate</p>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {avgConversionRate}%
                  </h4>
                  <p className="text-xs text-danger mt-2">
                    <i className="ri-arrow-down-line"></i> -1.5%
                  </p>
                </div>
                <div className="text-3xl text-danger opacity-20">
                  <i className="ri-target-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Trend Chart */}
        <div className="xl:col-span-8 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Transaction Amount Trend</div>
            </div>
            <div className="box-body">
              <SpkEcharts
                chartOptions={revenueChartOptions}
                chartSeries={[]}
                height={350}
                mainClass="w-full"
              />
            </div>
          </div>
        </div>

        {/* Transaction Distribution */}
        <div className="xl:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Status Distribution</div>
            </div>
            <div className="box-body">
              <SpkEcharts
                chartOptions={distributionChartOptions}
                chartSeries={[]}
                height={350}
                mainClass="w-full"
              />
            </div>
          </div>
        </div>

        {/* Transactions & Success Rate */}
        <div className="xl:col-span-6 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Transactions & Success Rate</div>
            </div>
            <div className="box-body">
              <SpkEcharts
                chartOptions={transactionsChartOptions}
                chartSeries={[]}
                height={350}
                mainClass="w-full"
              />
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="xl:col-span-6 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Performance Metrics</div>
            </div>
            <div className="box-body">
              <SpkEcharts
                chartOptions={performanceChartOptions}
                chartSeries={[]}
                height={350}
                mainClass="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdvancedAnalytics;
