import { useState, useEffect, useCallback } from 'react';

interface AnalyticsDataPoint {
  date: string;
  revenue: number;
  transactions: number;
  successRate: number;
  avgTransactionValue: number;
  conversionRate: number;
}

interface UseAnalyticsDataProps {
  startDate?: string;
  endDate?: string;
  period?: 'today' | 'week' | 'month' | 'quarter' | 'year' | 'custom';
}

/**
 * Custom hook for fetching analytics data
 * Replace the API endpoint with your actual backend endpoint
 */
export const useAnalyticsData = ({
  startDate,
  endDate,
  period = 'month',
}: UseAnalyticsDataProps) => {
  const [data, setData] = useState<AnalyticsDataPoint[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Calculate default dates if not provided
  const getDateRange = useCallback(() => {
    const today = new Date();
    let start = startDate;
    let end = endDate || formatDate(today);

    if (!start) {
      switch (period) {
        case 'today':
          start = formatDate(today);
          break;
        case 'week':
          const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
          start = formatDate(oneWeekAgo);
          break;
        case 'month':
          const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
          start = formatDate(oneMonthAgo);
          break;
        case 'quarter':
          const threeMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
          start = formatDate(threeMonthsAgo);
          break;
        case 'year':
          const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
          start = formatDate(oneYearAgo);
          break;
        default:
          const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
          start = formatDate(thirtyDaysAgo);
      }
    }

    return { start, end };
  }, [startDate, endDate, period]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const { start, end } = getDateRange();

        // TODO: Replace with your actual API endpoint
        const response = await fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            startDate: start,
            endDate: end,
            period,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch analytics data');
        }

        const analyticsData = await response.json();
        setData(analyticsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        // Return empty array as fallback
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [period, startDate, endDate, getDateRange]);

  return { data, loading, error };
};

/**
 * Hook for transforming transaction data into analytics format
 */
export const useTransactionAnalytics = (transactions: any[], groupBy: 'day' | 'week' | 'month' = 'day') => {
  const aggregateTransactions = useCallback(
    (txns: any[]): AnalyticsDataPoint[] => {
      const groups: { [key: string]: AnalyticsDataPoint } = {};

      txns.forEach((tx) => {
        const date = new Date(tx.createdAt);
        let groupKey = formatDate(date);

        if (groupBy === 'week') {
          const startOfWeek = new Date(date);
          startOfWeek.setDate(date.getDate() - date.getDay());
          groupKey = formatDate(startOfWeek);
        } else if (groupBy === 'month') {
          groupKey = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');
        }

        if (!groups[groupKey]) {
          groups[groupKey] = {
            date: groupKey,
            revenue: 0,
            transactions: 0,
            successRate: 0,
            avgTransactionValue: 0,
            conversionRate: 0,
          };
        }

        const amount = parseFloat(tx.amount || 0);
        groups[groupKey].revenue += amount;
        groups[groupKey].transactions += 1;

        if (tx.status === 'success' || tx.status === 'completed') {
          groups[groupKey].conversionRate += 1;
        }
      });

      // Calculate derived metrics
      return Object.values(groups)
        .map((group) => ({
          ...group,
          successRate:
            group.transactions > 0
              ? (group.conversionRate / group.transactions) * 100
              : 0,
          avgTransactionValue:
            group.transactions > 0
              ? group.revenue / group.transactions
              : 0,
          conversionRate:
            txns.length > 0
              ? (group.conversionRate / txns.length) * 100
              : 0,
        }))
        .sort((a, b) => a.date.localeCompare(b.date));
    },
    [groupBy]
  );

  return aggregateTransactions(transactions);
};

/**
 * Hook for getting analytics summary statistics
 */
export const useAnalyticsSummary = (data: AnalyticsDataPoint[]) => {
  return {
    totalRevenue: data.reduce((sum, d) => sum + d.revenue, 0),
    totalTransactions: data.reduce((sum, d) => sum + d.transactions, 0),
    avgSuccessRate: data.length > 0 ? data.reduce((sum, d) => sum + d.successRate, 0) / data.length : 0,
    avgConversionRate: data.length > 0 ? data.reduce((sum, d) => sum + d.conversionRate, 0) / data.length : 0,
    avgTransactionValue: data.length > 0 ? data.reduce((sum, d) => sum + d.avgTransactionValue, 0) / data.length : 0,
    peakDay: data.length > 0 ? data.reduce((max, d) => (d.revenue > max.revenue ? d : max)) : null,
    lowestDay: data.length > 0 ? data.reduce((min, d) => (d.revenue < min.revenue ? d : min)) : null,
  };
};

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
