# Advanced Analytics & Date Range Filtering

## Overview
I've added a comprehensive advanced analytics section to your dashboard with powerful features for data analysis and reporting.

## Features

### 1. **Date Range Filter Component** 
Located at: `src/components/common/date-range-filter/DateRangeFilter.tsx`

**Features:**
- Quick period selection buttons (Today, This Week, This Month, Q3, This Year)
- Custom date range picker with "From" and "To" dates
- Applied date range display
- Real-time date change callbacks

**Usage:**
```tsx
import DateRangeFilter from '@/components/common/date-range-filter/DateRangeFilter';

<DateRangeFilter
  onDateChange={(start, end) => console.log(start, end)}
  onPeriodChange={(period) => console.log(period)}
/>
```

### 2. **Advanced Analytics Component**
Located at: `src/components/common/advanced-analytics/AdvancedAnalytics.tsx`

**Features:**
- **Key Metrics Cards**: Display 4 important KPIs:
  - Total Revenue
  - Total Transactions
  - Success Rate
  - Conversion Rate

- **eCharts Visualizations** (4 interactive charts):
  1. **Revenue Trend Chart** - Line chart showing revenue progression over time
  2. **Transactions & Success Rate Chart** - Combination bar and line chart
  3. **Performance Metrics** - Shows average transaction value and conversion rate
  4. **Transaction Distribution** - Pie chart showing transaction status breakdown

- **Integrated Date Range Filter** - Select custom periods to filter all analytics

**Usage:**
```tsx
import AdvancedAnalytics from '@/components/common/advanced-analytics/AdvancedAnalytics';

<AdvancedAnalytics 
  title="Your Custom Title" 
  showDateRange={true}
/>
```

## Integration with Your Dashboard

The Advanced Analytics component has been integrated into your existing analytics dashboard at:
`src/container/dashboards/analytics/analytics.tsx`

It appears as a new section at the bottom of your analytics page with a separate border for clear separation.

## Customization

### Data Source
Currently, the component uses mock data. To connect real data:

1. **In AdvancedAnalytics.tsx**, update the `generateMockData()` function with real API calls:

```tsx
const analyticsData = useMemo(() => {
  // Replace with your API call
  return fetchAnalyticsData(startDate, endDate);
}, [startDate, endDate]);
```

2. **Using with useCollectionTransactions hook**:
```tsx
const { data } = useCollectionTransactions({ status: "all", limit: 100 });
// Transform data for analytics
```

### Styling
- Uses Tailwind CSS classes already in your project
- Dark mode compatible
- Responsive design (mobile, tablet, desktop)
- Primary color: `#3563eb` (changeable in chart options)

### Chart Customization
Each chart has customizable `EChartsOption` configuration:

```tsx
const revenueChartOptions: EChartsOption = {
  // Modify colors
  itemStyle: { color: '#your-color' },
  // Adjust grid/sizing
  grid: { left: '3%', right: '4%', ... }
  // etc.
}
```

## Available Period Options

When user selects a period, the following are available:
- **Today** - Current day only
- **This Week** - Last 7 days
- **This Month** - Last 30 days
- **Q3** - Last 3 months
- **This Year** - Last 12 months
- **Custom** - User-selected date range

## Example: Connecting to Real Data

Replace mock data with your transaction data:

```tsx
const analyticsData = useMemo(() => {
  if (!data.length) return generateMockData(30);
  
  // Transform your transaction data
  return data.map(transaction => ({
    date: new Date(transaction.createdAt).toISOString().split('T')[0],
    revenue: transaction.amount,
    transactions: 1,
    // Add other fields...
  }));
}, [data, selectedPeriod]);
```

## Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Dependencies
- React 18+
- echarts
- echarts-for-react
- TailwindCSS
- Remix Icons (ri-*)

## Next Steps

1. **Connect to Real Data**: Update the mock data generation with actual API calls
2. **Customize Colors**: Adjust chart colors to match your brand
3. **Add More Metrics**: Extend the component with additional KPIs
4. **Export Functionality**: Add CSV/PDF export for analytics reports
5. **Alerts**: Set up threshold-based alerts for KPI changes

