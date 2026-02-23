# Advanced Analytics Implementation Guide

## 📊 What's New

Your dashboard now has a complete advanced analytics system with:

✅ **Date Range Filtering** - Select specific time periods for analysis  
✅ **Interactive eCharts** - Beautiful, responsive charts for data visualization  
✅ **Real-time Analytics** - 4 key metrics and detailed performance charts  
✅ **Integration Ready** - Easy hooks to connect your actual transaction data  
✅ **Multiple Report Types** - Revenue, transactions, success rates, conversions  

---

## 📁 Files Created

### Components
```
src/components/common/
├── date-range-filter/
│   └── DateRangeFilter.tsx          # Date range selection component
└── advanced-analytics/
    └── AdvancedAnalytics.tsx         # Main analytics dashboard component
```

### Hooks
```
src/hooks/
└── useAnalyticsData.ts              # Reusable analytics data hooks
```

### Pages/Examples
```
src/container/moola/
├── advanced-reports.tsx              # Dedicated advanced reports page
└── analytics-integration-example.tsx # Complete integration example with real data
```

### Documentation
```
ADVANCED_ANALYTICS_README.md          # Comprehensive feature guide
INTEGRATION_GUIDE.md                  # This file
```

---

## 🚀 Quick Start

### Option 1: Use the Existing Integration (Easy)

The advanced analytics have already been added to your analytics dashboard:

```
src/container/dashboards/analytics/analytics.tsx
```

**The new sections appear at the bottom with:**
- Date range filter
- 4 key metric cards
- 4 interactive eCharts visualizations

### Option 2: Display Advanced Reports Page (Medium)

Create a route to the dedicated advanced reports page:

```tsx
import AdvancedReportPage from '@/container/moola/advanced-reports';

// In your router:
{
  path: '/dashboard/advanced-reports',
  element: <AdvancedReportPage />
}
```

### Option 3: Full Integration with Real Data (Advanced)

Use the real data integration example:

```tsx
import AnalyticsIntegrationExample from '@/container/moola/analytics-integration-example';

// This automatically:
// ✓ Fetches real transaction data
// ✓ Transforms it to analytics format
// ✓ Displays with filters and charts
```

---

## 💡 How to Use Each Component

### 1️⃣ DateRangeFilter Component

```tsx
import DateRangeFilter from '@/components/common/date-range-filter/DateRangeFilter';

function MyComponent() {
  return (
    <DateRangeFilter
      onDateChange={(start, end) => {
        console.log(`Date range: ${start} to ${end}`);
        // Fetch data for this date range
      }}
      onPeriodChange={(period) => {
        console.log(`Period changed to: ${period}`);
        // Handle period: 'today' | 'week' | 'month' | 'quarter' | 'year' | 'custom'
      }}
    />
  );
}
```

**Available Periods:**
- `today` - Current day only
- `week` - Last 7 days
- `month` - Last 30 days
- `quarter` - Last 3 months
- `year` - Last 12 months
- `custom` - User-selected date range

---

### 2️⃣ AdvancedAnalytics Component

```tsx
import AdvancedAnalytics from '@/components/common/advanced-analytics/AdvancedAnalytics';

function MyDashboard() {
  return (
    <AdvancedAnalytics 
      title="My Custom Title"
      showDateRange={true}
    />
  );
}
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Advanced Analytics" | Section title |
| `showDateRange` | boolean | true | Show date filter controls |

**What's Included:**
- Date range filter (if `showDateRange={true}`)
- 4 metric cards: Revenue, Transactions, Success Rate, Conversion Rate
- 4 eCharts visualizations:
  1. Revenue Trend (line chart)
  2. Transactions & Success Rate (bar + line)
  3. Performance Metrics (dual-axis area chart)
  4. Transaction Distribution (pie chart)

---

### 3️⃣ Analytics Data Hooks

#### `useAnalyticsData` - Fetch from API

```tsx
import { useAnalyticsData } from '@/hooks/useAnalyticsData';

function MyComponent() {
  const { data, loading, error } = useAnalyticsData({
    startDate: '2025-01-01',
    endDate: '2025-02-10',
    period: 'month' // Used if startDate/endDate not provided
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Use data here
  return <div>{data.length} data points loaded</div>;
}
```

---

#### `useTransactionAnalytics` - Transform Transaction Data

```tsx
import { useTransactionAnalytics, useAnalyticsSummary } from '@/hooks/useAnalyticsData';
import { useCollectionTransactions } from '@/hooks/useCollectionTransactions';

function MyComponent() {
  const { data: transactions } = useCollectionTransactions({ 
    status: 'all', 
    limit: 1000 
  });

  // Transform raw transactions to analytics data
  const analyticsData = useTransactionAnalytics(transactions, 'month');
  
  // Get summary statistics
  const summary = useAnalyticsSummary(analyticsData);

  return (
    <div>
      <h3>Total Revenue: {summary.totalRevenue}</h3>
      <h3>Peak Day: {summary.peakDay?.date}</h3>
      <h3>Lowest Day: {summary.lowestDay?.date}</h3>
    </div>
  );
}
```

---

## 🔌 Connecting Your Own Data

### Step 1: Update the API Endpoint

In `src/hooks/useAnalyticsData.ts`, update the fetch URL:

```tsx
// Before
const response = await fetch('/api/analytics', {

// After (your actual API endpoint)
const response = await fetch('https://your-api.com/v1/analytics', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
```

### Step 2: Format Your API Response

Your backend should return data in this format:

```json
[
  {
    "date": "2025-02-01",
    "revenue": 50000,
    "transactions": 150,
    "successRate": 95.5,
    "avgTransactionValue": 333.33,
    "conversionRate": 8.5
  },
  {
    "date": "2025-02-02",
    "revenue": 45000,
    "transactions": 140,
    "successRate": 92.1,
    "avgTransactionValue": 321.43,
    "conversionRate": 7.9
  }
]
```

### Step 3: Use the Integration Example

```tsx
import AnalyticsIntegrationExample from '@/container/moola/analytics-integration-example';

// This automatically handles:
// ✓ Fetching your data
// ✓ Transforming it
// ✓ Displaying it with filters
// ✓ Showing charts
```

---

## 📊 Chart Details

### 1. Revenue Trend Chart
- **Type:** Line chart with area fill
- **Data:** Daily revenue amounts
- **Color:** Primary blue (#3563eb)
- **Use Case:** Track revenue over time

### 2. Transactions & Success Rate
- **Type:** Mixed bar and line chart
- **Data:** Transaction count (bars) + Success rate % (line)
- **Colors:** Blue (transactions) + Green (success)
- **Use Case:** Correlate volume with quality

### 3. Performance Metrics
- **Type:** Dual-axis area chart
- **Data:** Average transaction value + Conversion rate
- **Colors:** Orange (value) + Purple (conversion)
- **Use Case:** Performance analysis

### 4. Transaction Distribution
- **Type:** Pie chart
- **Data:** Successful, Pending, Failed, Disputed transactions
- **Use Case:** Status breakdown overview

---

## 🎨 Customization

### Change Chart Colors

In `AdvancedAnalytics.tsx`, update the color values:

```tsx
// Find this section and modify colors
itemStyle: { color: '#3563eb' }, // Change to your color
areaStyle: { color: 'rgba(53, 99, 235, 0.1)' }, // Adjust transparency
```

### Modify Chart Height

```tsx
<SpkEcharts
  chartOptions={revenueChartOptions}
  height={350}  // Change this value (in pixels)
/>
```

### Add Different Metrics

Extend the `AnalyticsData` interface:

```tsx
interface AnalyticsData {
  date: string;
  revenue: number;
  transactions: number;
  successRate: number;
  avgTransactionValue: number;
  conversionRate: number;
  // Add new fields:
  chargeback_rate?: number;
  refund_rate?: number;
}
```

---

## 🐛 Troubleshooting

### Charts Not Showing
- **Check:** eCharts is installed: `npm install echarts echarts-for-react`
- **Check:** Data array is not empty
- **Check:** Chart height and width are set properly

### Date Filter Not Working
- **Check:** `onDateChange` callback is properly connected
- **Check:** Backend API accepts date parameters

### Loading Spinner Never Ends
- **Check:** API endpoint is correct
- **Check:** API is returning proper JSON
- **Check:** Network tab for actual API errors

---

## 📈 Best Practices

1. **Cache API Responses** - Don't fetch every render:
   ```tsx
   const { data } = useAnalyticsData({...}); // Automatically handles caching
   ```

2. **Format Large Numbers** - Use number formatting:
   ```tsx
   (revenue / 1000000).toFixed(2) + 'M'
   ```

3. **Handle No Data** - Show helpful message:
   ```tsx
   {analyticsData.length === 0 && <p>No data for this period</p>}
   ```

4. **Responsive Design** - Already included, but test on mobile

5. **Dark Mode** - Already supported with Tailwind dark: classes

---

## 🔄 Integration Checklist

- [ ] Import `AdvancedAnalytics` or `DateRangeFilter` component
- [ ] Set up API endpoint for analytics data
- [ ] Format response data to match `AnalyticsData` interface
- [ ] Test with sample data
- [ ] Customize colors to match brand
- [ ] Connect to real transaction data
- [ ] Test on mobile devices
- [ ] Set up date range filters
- [ ] Add to main menu/navigation

---

## 📝 Example Routes

Add these to your router to access all features:

```tsx
import Analytics from '@/container/dashboards/analytics/analytics';
import AdvancedReportPage from '@/container/moola/advanced-reports';
import AnalyticsIntegrationExample from '@/container/moola/analytics-integration-example';

const routes = [
  {
    path: '/dashboard/analytics',
    element: <Analytics /> // Already includes advanced analytics
  },
  {
    path: '/dashboard/reports/advanced',
    element: <AdvancedReportPage />
  },
  {
    path: '/dashboard/reports/integration-example',
    element: <AnalyticsIntegrationExample />
  }
];
```

---

## 🎯 Next Steps

1. **Test with Sample Data** - Run the integration example with mock data
2. **Connect Real API** - Update `useAnalyticsData` hook with your endpoint
3. **Customize Visuals** - Adjust colors, fonts, and layouts
4. **Add Real-time Updates** - Consider using WebSockets for live data
5. **Export Functionality** - Add CSV/PDF export buttons
6. **Notifications** - Alert users of significant metric changes
7. **Scheduled Reports** - Email automated reports

---

## 📚 Resources

- [eCharts Documentation](https://echarts.apache.org/)
- [React Hooks Best Practices](https://react.dev/reference/react/hooks)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript React Guide](https://www.typescriptlang.org/docs/handbook/react.html)

---

## 💬 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the component source code
3. Check browser console for errors
4. Verify API responses in network tab

---

**Happy Analyzing! 📊**
