
import { FC, Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Coveroptions, Coverseries, Custoptions, Custseries, Dealoptions, Dealseries, Prooptions, Revenueoptions, Revenueseries, Sourceoptions, Targetoptions } from '../../../components/ui/data/dashboards/crmdata';
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import SpkCRMcards from '../../../@spk/dashboards/spk-crmcards';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkButton from '../../../@spk/uielements/spk-button';
import { Overoptions } from '../../../components/ui/data/dashboards/salesdata';
import { startOfWeek } from "date-fns";
import { API as MOMO_API, CORE_API_BASE_URL } from '../../../config/api';
const getMomoToken = () => { try { return JSON.parse(localStorage.getItem('token') || 'null'); } catch { return null; } };

interface MomoCollection {
  id: number;
  referenceId: string;
  operationReferenceId?: string;
  agentId?: number | string;
  provider: string;
  customerAccountNumber: string;
  customerName: string;
  amount: string | number;
  currencyCode?: string;
  status: 'success' | 'pending' | 'failed';
  message?: string;
  transactionId?: string | null;
  createdAt: string;
  updatedAt: string;
}

interface CrmProps { }
interface Transaction {
  id?: number;
  transactionId?: string | number;
  service?: string;
  service_name?: string;
  status?: string;
  amount?: string | number;
  date?: string;
  createdAt?: string;
  agent_name?: string;
}
type PeriodFilter = "daily" | "weekly" | "monthly" | "quarterly" | "yearly";

const PERIOD_OPTIONS: { key: PeriodFilter; label: string }[] = [
  { key: "daily", label: "Daily" },
  { key: "weekly", label: "Weekly" },
  { key: "monthly", label: "Monthly" },
  { key: "quarterly", label: "Quarterly" },
  { key: "yearly", label: "Yearly" },
];

const formatCurrency = (value: number) => `Rwf ${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const formatDateLabel = (date: Date) => date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
const normalizeServiceKey = (service?: string) => String(service || "Unknown")
  .replace(/[_-]+/g, " ")
  .replace(/\s+/g, " ")
  .trim()
  .toLowerCase();
const formatServiceLabel = (service?: string) => {
  const normalized = normalizeServiceKey(service);

  if (!normalized || normalized === "unknown") return "Unknown";

  const acronyms = new Set(["rra", "sms", "mtn", "ddin"]);

  return normalized
    .split(" ")
    .map((part) => acronyms.has(part) ? part.toUpperCase() : `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
};

const parseTransactionAmount = (amount?: string | number) => Number(amount || 0);

const parseTransactionDate = (transaction: Transaction) => {
  const sourceDate = transaction.date || transaction.createdAt;
  const date = sourceDate ? new Date(sourceDate) : new Date();
  return Number.isNaN(date.getTime()) ? new Date() : date;
};

const getPeriodDateRange = (period: PeriodFilter) => {
  const now = new Date();
  const startDate = new Date(now);
  const endDate = new Date(now);

  if (period === "daily") {
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);
  } else if (period === "weekly") {
    const weekStart = startOfWeek(now, { weekStartsOn: 1 });
    startDate.setTime(weekStart.getTime());
    endDate.setTime(weekStart.getTime());
    endDate.setDate(weekStart.getDate() + 6);
    endDate.setHours(23, 59, 59, 999);
  } else if (period === "monthly") {
    startDate.setDate(1);
    startDate.setHours(0, 0, 0, 0);
    endDate.setMonth(now.getMonth() + 1, 0);
    endDate.setHours(23, 59, 59, 999);
  } else if (period === "quarterly") {
    const quarterStartMonth = Math.floor(now.getMonth() / 3) * 3;
    startDate.setMonth(quarterStartMonth, 1);
    startDate.setHours(0, 0, 0, 0);
    endDate.setMonth(quarterStartMonth + 3, 0);
    endDate.setHours(23, 59, 59, 999);
  } else {
    startDate.setMonth(0, 1);
    startDate.setHours(0, 0, 0, 0);
    endDate.setMonth(11, 31);
    endDate.setHours(23, 59, 59, 999);
  }

  return { startDate, endDate };
};

const normalizeStatus = (status?: string) => String(status || "").trim().toLowerCase();
const isCompletedStatus = (status?: string) => {
  const normalized = normalizeStatus(status);
  return normalized.includes("complete") || normalized.includes("success");
};

const Crm: FC<CrmProps> = () => {

  const [name, setName] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [apiMainBalance, setApiMainBalance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<PeriodFilter>("daily");
  const [customStartDateInput, setCustomStartDateInput] = useState("");
  const [customEndDateInput, setCustomEndDateInput] = useState("");
  const [customDateRange, setCustomDateRange] = useState<{ startDate: Date; endDate: Date; label: string } | null>(null);
  const [dateFilterError, setDateFilterError] = useState<string | null>(null);

  // ── MoMo Collections state ──────────────────────────────────────────────────
  const [momoCollections, setMomoCollections] = useState<MomoCollection[]>([]);
  const [momoLoading, setMomoLoading] = useState(true);
  const [momoError, setMomoError] = useState<string | null>(null);
  const momoFetchRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {

    const storedData = localStorage.getItem("userData");

    if (storedData) {

      setName(JSON.parse(storedData).name)
    }

  }, []);


  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          `${CORE_API_BASE_URL}/api/v1/transactions/logs-transactions`
        );
        const data = await response.json();

        if (data.responseCode === 200) {
          const allTransactions = (data?.data || []) as Transaction[];
          setTransactions(allTransactions);
        } else {
          setError("Failed to load transactions.");
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setError("Error fetching transactions. Please try again.");
      }
    };


    fetchTransactions();

    // Optionally set an interval to refresh data every 1 minute
    const interval = setInterval(fetchTransactions, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchMainBalance = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        const storedData = localStorage.getItem("userData");

        if (!storedToken || !storedData) {
          return;
        }

        const token = JSON.parse(storedToken);
        const accountId = JSON.parse(storedData)?.accountId;

        if (!accountId) {
          return;
        }

        const response = await fetch(`${CORE_API_BASE_URL}/api/v1/accounts/balance/account?accountId=${accountId}`, {
          method: "GET",
          headers: {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (data?.responseCode === 200) {
          const amount = Number(
            data?.data?.availableBalance ??
            data?.data?.mainBalance?.availableBalance ??
            data?.data?.mainBalance?.balance ??
            0
          );
          setApiMainBalance(amount);
        }
      } catch (balanceError) {
        console.error("Error fetching main balance:", balanceError);
      }
    };

    fetchMainBalance();
    const interval = setInterval(fetchMainBalance, 60000);
    return () => clearInterval(interval);
  }, []);

  // ── Fetch MoMo collections from newMomo-collection-service ────────────────
  useEffect(() => {
    const fetchMomo = async () => {
      try {
        const token = getMomoToken();
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Bearer ${token}`;
        const res = await fetch(`${MOMO_API()}/v1/momo/collection?limit=1000`, { headers });
        const json = await res.json();
        if (json.success) {
          setMomoCollections((json.data || []) as MomoCollection[]);
          setMomoError(null);
        } else {
          setMomoError('Failed to load MoMo collections.');
        }
      } catch {
        setMomoError('Could not reach MoMo collection service.');
      } finally {
        setMomoLoading(false);
      }
    };
    fetchMomo();
    momoFetchRef.current = setInterval(fetchMomo, 60_000);
    return () => { if (momoFetchRef.current) clearInterval(momoFetchRef.current); };
  }, []);

  const periodLabel = PERIOD_OPTIONS.find((option) => option.key === filter)?.label || "Daily";
  const activeRange = useMemo(
    () => customDateRange || getPeriodDateRange(filter),
    [customDateRange, filter]
  );
  const activeFilterLabel = customDateRange ? customDateRange.label : periodLabel;
  const periodRangeLabel = useMemo(() => {
    const { startDate, endDate } = activeRange;
    return `${formatDateLabel(startDate)} - ${formatDateLabel(endDate)}`;
  }, [activeRange]);

  const periodTransactions = useMemo(() => {
    const { startDate, endDate } = activeRange;
    return transactions.filter((transaction) => {
      const transactionDate = parseTransactionDate(transaction);
      return transactionDate >= startDate && transactionDate <= endDate;
    });
  }, [transactions, activeRange]);

  const completedTransactions = useMemo(
    () => periodTransactions.filter((transaction) => isCompletedStatus(transaction.status)),
    [periodTransactions]
  );

  const incompleteTransactions = useMemo(
    () => periodTransactions.filter((transaction) => !isCompletedStatus(transaction.status)),
    [periodTransactions]
  );

  const recentTransactions = useMemo(() => {
    return [...periodTransactions]
      .sort((a, b) => parseTransactionDate(b).getTime() - parseTransactionDate(a).getTime())
      .slice(0, 5)
      .map((item) => ({
        id: item.transactionId || item.id,
        amount: parseTransactionAmount(item.amount),
        status: item.status || "Unknown",
        service: item.service_name || item.service || "Unknown",
        date: parseTransactionDate(item).toLocaleDateString(),
      }));
  }, [periodTransactions]);

  const serviceStats = useMemo(() => {
    const grouped: Record<string, { service: string; completed: number; incomplete: number }> = {};

    periodTransactions.forEach((transaction) => {
      const rawService = transaction.service_name || transaction.service || "Unknown";
      const serviceKey = normalizeServiceKey(rawService);

      if (!grouped[serviceKey]) {
        grouped[serviceKey] = {
          service: formatServiceLabel(rawService),
          completed: 0,
          incomplete: 0,
        };
      }

      if (isCompletedStatus(transaction.status)) {
        grouped[serviceKey].completed += 1;
      } else {
        grouped[serviceKey].incomplete += 1;
      }
    });

    return Object.values(grouped)
      .map((item) => ({
        ...item,
        total: item.completed + item.incomplete,
      }))
      .sort((a, b) => b.total - a.total || b.completed - a.completed);
  }, [periodTransactions]);

  const totalTransactions = periodTransactions.length;
  const completedCount = completedTransactions.length;
  const incompleteCount = incompleteTransactions.length;
  const totalCompleted = serviceStats.reduce((acc, item) => acc + item.completed, 0);
  const totalIncomplete = serviceStats.reduce((acc, item) => acc + item.incomplete, 0);
  const totalTransactionss = totalCompleted + totalIncomplete;
  const topServiceName = serviceStats.length > 0 ? serviceStats[0].service : "N/A";

  const calculateCompletionPercentage = () => {
    if (periodTransactions.length === 0) return "0.00";
    return ((completedTransactions.length / periodTransactions.length) * 100).toFixed(2);
  };

  const sourceseries = [completedCount, incompleteCount];

  const topAgents = useMemo(() => {
    const agentMap: Record<string, { count: number; agent: Transaction }> = {};

    completedTransactions.forEach((transaction) => {
      const agentKey = transaction.agent_name || "Unknown Agent";

      if (!agentMap[agentKey]) {
        agentMap[agentKey] = { count: 0, agent: transaction };
      }

      agentMap[agentKey].count += 1;
    });

    return Object.values(agentMap)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }, [completedTransactions]);

  const mainBalance = useMemo(() => {
    return formatCurrency(apiMainBalance ?? 0);
  }, [apiMainBalance]);

  // ── MoMo analytics (filtered by active period) ─────────────────────────────
  const filteredMomo = useMemo(() => {
    const { startDate, endDate } = activeRange;
    return momoCollections.filter(c => {
      const d = new Date(c.createdAt);
      return d >= startDate && d <= endDate;
    });
  }, [momoCollections, activeRange]);

  const momoSuccess = useMemo(() => filteredMomo.filter(c => c.status === 'success'), [filteredMomo]);
  const momoPending = useMemo(() => filteredMomo.filter(c => c.status === 'pending'), [filteredMomo]);
  const momoFailed  = useMemo(() => filteredMomo.filter(c => c.status === 'failed'),  [filteredMomo]);

  const momoTotalVolume = useMemo(
    () => momoSuccess.reduce((s, c) => s + Number(c.amount || 0), 0),
    [momoSuccess]
  );
  const momoSuccessRate = filteredMomo.length > 0
    ? ((momoSuccess.length / filteredMomo.length) * 100).toFixed(1)
    : '0.0';

  const momoAvgAmount = momoSuccess.length > 0
    ? momoTotalVolume / momoSuccess.length
    : 0;

  const momoByProvider = useMemo(() => {
    const map: Record<string, { count: number; volume: number; success: number; failed: number }> = {};
    filteredMomo.forEach(c => {
      const p = c.provider || 'Unknown';
      if (!map[p]) map[p] = { count: 0, volume: 0, success: 0, failed: 0 };
      map[p].count++;
      if (c.status === 'success') { map[p].success++; map[p].volume += Number(c.amount || 0); }
      if (c.status === 'failed') map[p].failed++;
    });
    return Object.entries(map).map(([provider, v]) => ({ provider, ...v })).sort((a, b) => b.count - a.count);
  }, [filteredMomo]);

  const momoTopAgents = useMemo(() => {
    const map: Record<string, { count: number; volume: number; agentId: string }> = {};
    momoSuccess.forEach(c => {
      const k = String(c.agentId || 'Unknown');
      if (!map[k]) map[k] = { count: 0, volume: 0, agentId: k };
      map[k].count++;
      map[k].volume += Number(c.amount || 0);
    });
    return Object.values(map).sort((a, b) => b.volume - a.volume).slice(0, 10);
  }, [momoSuccess]);

  const recentMomo = useMemo(() =>
    [...filteredMomo]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 8),
    [filteredMomo]
  );

  // Trend data — days in active range
  const momoTrend = useMemo(() => {
    const { startDate, endDate } = activeRange;
    const dayMs = 24 * 60 * 60 * 1000;
    const days = Math.max(Math.floor((endDate.getTime() - startDate.getTime()) / dayMs) + 1, 1);
    const limit = Math.min(days, 30);
    const labels: string[] = [];
    const success: number[] = [];
    const pending: number[] = [];
    const failed: number[] = [];
    for (let i = 0; i < limit; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      labels.push(d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }));
      success.push(0); pending.push(0); failed.push(0);
    }
    filteredMomo.forEach(c => {
      const d = new Date(c.createdAt);
      const normD = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      const normS = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()).getTime();
      const idx = Math.floor((normD - normS) / dayMs);
      if (idx >= 0 && idx < limit) {
        if (c.status === 'success') success[idx]++;
        else if (c.status === 'pending') pending[idx]++;
        else failed[idx]++;
      }
    });
    return { labels, success, pending, failed };
  }, [filteredMomo, activeRange]);

  const momoTrendOptions = useMemo(() => ({
    chart: { type: 'area', height: 280, toolbar: { show: false }, events: { mounted: (c: any) => c.windowResizeHandler() } },
    colors: ['#10b981', '#f59e0b', '#ef4444'],
    fill: { type: 'gradient', gradient: { opacityFrom: 0.35, opacityTo: 0.05 } },
    stroke: { curve: 'smooth', width: 2 },
    dataLabels: { enabled: false },
    grid: { borderColor: '#f1f1f1', strokeDashArray: 3 },
    xaxis: { categories: momoTrend.labels, labels: { rotate: -30, style: { fontSize: '11px' } }, axisTicks: { show: false } },
    yaxis: { min: 0, labels: { formatter: (v: number) => v.toFixed(0) } },
    legend: { position: 'top' as const, horizontalAlign: 'left' as const },
    tooltip: { shared: true, intersect: false },
  }), [momoTrend.labels]);

  const momoTrendSeries = useMemo(() => [
    { name: 'Success', data: momoTrend.success },
    { name: 'Pending', data: momoTrend.pending },
    { name: 'Failed',  data: momoTrend.failed },
  ], [momoTrend]);

  const momoStatusDonutOptions = useMemo(() => ({
    labels: ['Success', 'Pending', 'Failed'],
    chart: { type: 'donut', height: 220, events: { mounted: (c: any) => c.windowResizeHandler() } },
    colors: ['#10b981', '#f59e0b', '#ef4444'],
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { width: 0 },
    plotOptions: { pie: { expandOnClick: false, donut: { size: '78%', labels: { show: false } } } },
  }), []);

  const momoStatusDonutSeries = useMemo(
    () => [momoSuccess.length, momoPending.length, momoFailed.length],
    [momoSuccess.length, momoPending.length, momoFailed.length]
  );

  const transactionMadeSeries = useMemo(
    () => [
      { name: "Completed", data: [completedCount] },
      { name: "Incomplete", data: [incompleteCount] },
    ],
    [completedCount, incompleteCount]
  );

  const { categories: overviewCategories, series: chartData } = useMemo(() => {
    const now = new Date();
    const isCustomFilter = Boolean(customDateRange);
    const { startDate, endDate } = activeRange;
    let categories: string[] = [];

    if (isCustomFilter) {
      const dayMs = 24 * 60 * 60 * 1000;
      const days = Math.floor((endDate.getTime() - startDate.getTime()) / dayMs) + 1;
      categories = Array.from({ length: Math.max(days, 1) }, (_, dayIndex) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + dayIndex);
        return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
      });
    } else if (filter === "daily") {
      categories = Array.from({ length: 24 }, (_, hour) => `${String(hour).padStart(2, "0")}:00`);
    } else if (filter === "weekly") {
      categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    } else if (filter === "monthly") {
      const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      categories = Array.from({ length: daysInMonth }, (_, dayIndex) => `${dayIndex + 1}`);
    } else if (filter === "quarterly") {
      const quarterStartMonth = Math.floor(now.getMonth() / 3) * 3;
      categories = Array.from({ length: 3 }, (_, monthOffset) =>
        new Date(now.getFullYear(), quarterStartMonth + monthOffset, 1).toLocaleString("default", { month: "short" })
      );
    } else {
      categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    }

    const total = Array(categories.length).fill(0);
    const completed = Array(categories.length).fill(0);
    const incomplete = Array(categories.length).fill(0);

    periodTransactions.forEach((transaction) => {
      const date = parseTransactionDate(transaction);
      let index = -1;

      if (isCustomFilter) {
        const dayMs = 24 * 60 * 60 * 1000;
        const normalizedTxDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
        const normalizedStart = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()).getTime();
        index = Math.floor((normalizedTxDate - normalizedStart) / dayMs);
      } else if (filter === "daily") {
        index = date.getHours();
      } else if (filter === "weekly") {
        const day = date.getDay();
        index = day === 0 ? 6 : day - 1;
      } else if (filter === "monthly") {
        index = date.getDate() - 1;
      } else if (filter === "quarterly") {
        const quarterStartMonth = Math.floor(now.getMonth() / 3) * 3;
        index = date.getMonth() - quarterStartMonth;
      } else {
        index = date.getMonth();
      }

      if (index >= 0 && index < categories.length) {
        total[index] += 1;
        if (isCompletedStatus(transaction.status)) {
          completed[index] += 1;
        } else {
          incomplete[index] += 1;
        }
      }
    });

    return {
      categories,
      series: [
        { name: "Total Transactions", data: total },
        { name: "Completed Transactions", data: completed },
        { name: "Incomplete Transactions", data: incomplete },
      ],
    };
  }, [periodTransactions, filter, customDateRange, activeRange]);

  const overviewOptions = useMemo(() => {
    return {
      ...Overoptions,
      xaxis: {
        ...Overoptions.xaxis,
        categories: overviewCategories,
      },
    };
  }, [overviewCategories]);

  const exportFilteredTransactions = () => {
    const rows = [
      ["Transaction ID", "Date", "Service", "Status", "Amount", "Agent"],
      ...periodTransactions.map((transaction) => [
        String(transaction.transactionId || transaction.id || "-"),
        parseTransactionDate(transaction).toISOString(),
        transaction.service_name || transaction.service || "Unknown",
        transaction.status || "Unknown",
        String(parseTransactionAmount(transaction.amount)),
        transaction.agent_name || "Unknown Agent",
      ]),
    ];

    const csv = rows
      .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `transactions-${filter}-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const renderPeriodDropdownItems = () => (
    PERIOD_OPTIONS.map((option) => (
      <li key={option.key}>
        <Link
          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
          to="#"
          onClick={(event) => {
            event.preventDefault();
            setFilter(option.key);
            setCustomDateRange(null);
            setDateFilterError(null);
          }}
        >
          {option.label}
        </Link>
      </li>
    ))
  );

  const applySpecificDateFilter = () => {
    if (!customStartDateInput || !customEndDateInput) {
      setDateFilterError("Select both start and end dates.");
      return;
    }

    const startDate = new Date(`${customStartDateInput}T00:00:00`);
    const endDate = new Date(`${customEndDateInput}T23:59:59`);

    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      setDateFilterError("Invalid date selection.");
      return;
    }

    if (startDate > endDate) {
      setDateFilterError("Start date cannot be after end date.");
      return;
    }

    setCustomDateRange({ startDate, endDate, label: "Specific Date" });
    setDateFilterError(null);
  };

  const applyQuickDateRangePreset = (preset: "today" | "last7" | "last30") => {
    const now = new Date();
    const endDate = new Date(now);
    endDate.setHours(23, 59, 59, 999);

    const startDate = new Date(now);
    let label = "Specific Date";

    if (preset === "today") {
      startDate.setHours(0, 0, 0, 0);
      label = "Today";
    } else if (preset === "last7") {
      startDate.setDate(now.getDate() - 6);
      startDate.setHours(0, 0, 0, 0);
      label = "Last 7 Days";
    } else {
      startDate.setDate(now.getDate() - 29);
      startDate.setHours(0, 0, 0, 0);
      label = "Last 30 Days";
    }

    setCustomDateRange({ startDate, endDate, label });
    setCustomStartDateInput(startDate.toISOString().split("T")[0]);
    setCustomEndDateInput(endDate.toISOString().split("T")[0]);
    setDateFilterError(null);
  };

  const clearSpecificDateFilter = () => {
    setCustomDateRange(null);
    setCustomStartDateInput("");
    setCustomEndDateInput("");
    setDateFilterError(null);
  };


  return (
    <Fragment>
      <div className="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
        <div>
          <p className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0">Welcome back, {name} !</p>
          <p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem]">Track your Transactions activity here.</p>
          <p className="font-medium text-[0.75rem] text-primary mt-1">Selected Range ({activeFilterLabel}): {periodRangeLabel}</p>
        </div>
        <div className="btn-list md:mt-0 mt-2">
          <SpkDropdown
            Linktag={false}
            Toggletext={`${periodLabel}`}
            IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block"
            Customclass="ti-btn bg-primary text-white btn-wave !font-medium !me-[0.45rem] !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] shadow-none"
          >
            {renderPeriodDropdownItems()}
          </SpkDropdown>
          <SpkButton buttontype="button" variant="outline-secondary"
            customClass="ti-btn btn-wave !font-medium  !me-[0.45rem]  !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] shadow-none"
            onclickfunc={exportFilteredTransactions}>
            <i className="ri-upload-cloud-line  inline-block"></i>Export
          </SpkButton>
        </div>
      </div>
      <div className="flex flex-wrap items-end gap-2 mb-4">
        <div className="flex items-center gap-2 mb-1 w-full">
          <SpkButton
            buttontype="button"
            variant="light"
            customClass="ti-btn ti-btn-light !py-[0.35rem] !px-[0.6rem]"
            onclickfunc={() => applyQuickDateRangePreset("today")}
          >
            Today
          </SpkButton>
          <SpkButton
            buttontype="button"
            variant="light"
            customClass="ti-btn ti-btn-light !py-[0.35rem] !px-[0.6rem]"
            onclickfunc={() => applyQuickDateRangePreset("last7")}
          >
            Last 7 Days
          </SpkButton>
          <SpkButton
            buttontype="button"
            variant="light"
            customClass="ti-btn ti-btn-light !py-[0.35rem] !px-[0.6rem]"
            onclickfunc={() => applyQuickDateRangePreset("last30")}
          >
            Last 30 Days
          </SpkButton>
        </div>
        <div>
          <label className="block text-[0.75rem] text-[#8c9097] mb-1">Start Date</label>
          <input
            type="date"
            value={customStartDateInput}
            onChange={(event) => setCustomStartDateInput(event.target.value)}
            className="form-control"
          />
        </div>
        <div>
          <label className="block text-[0.75rem] text-[#8c9097] mb-1">End Date</label>
          <input
            type="date"
            value={customEndDateInput}
            onChange={(event) => setCustomEndDateInput(event.target.value)}
            className="form-control"
          />
        </div>
        <SpkButton
          buttontype="button"
          customClass="ti-btn ti-btn-primary-full"
          onclickfunc={applySpecificDateFilter}
        >
          Apply Date Range
        </SpkButton>
        {customDateRange && (
          <SpkButton
            buttontype="button"
            variant="light"
            customClass="ti-btn ti-btn-light"
            onclickfunc={clearSpecificDateFilter}
          >
            Clear
          </SpkButton>
        )}
      </div>
      {dateFilterError && (
        <div className="ti-alert ti-alert-warning mb-4" role="alert">
          {dateFilterError}
        </div>
      )}
      {error && (
        <div className="ti-alert ti-alert-danger mb-4" role="alert">
          {error}
        </div>
      )}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xxl:col-span-9 xl:col-span-12  col-span-12">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-4 xl:col-span-4  col-span-12">
              <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                <div className="box crm-highlight-card">
                  <div className="box-body">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-[1.125rem] text-white mb-2">Your target is</div>
                        <span className="block text-[0.75rem] text-white"><span className="opacity-[0.7] text-nowrap me-1 rtl:ms-1">You have
                          completed</span>
                          <span className="font-semibold text-warning">{calculateCompletionPercentage()}%</span> <span className="opacity-[0.7]">of the given
                            target, you can also check your status</span>.</span>
                        {/* <span className="block font-semibold mt-[0.125rem]"><Link className="text-white text-[0.813rem]"
                          to="#"><u>Click
                            here</u></Link></span> */}
                      </div>
                      <div>
                        <div id="crm-main">
                          <ApexchartsComponent chartOptions={Targetoptions} chartSeries={[`${calculateCompletionPercentage()}`]} type="radialBar" width={100} height={127} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                <div className="box">
                  <div className="box-header flex justify-between">
                    <div className="box-title">Recent Transactions</div>
                    <SpkDropdown
                      Icon={true}
                      Linktag={true}
                      arialexpand={false}
                      IconClass="fe fe-more-vertical text-[0.8rem]"
                      Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                    >
                      {renderPeriodDropdownItems()}
                    </SpkDropdown>
                  </div>
                  <div className="box-body">
                    <ul className="list-none crm-top-deals mb-0">
                      {recentTransactions.map((transaction: any) => (
                        <li key={transaction.id} className="transaction-item">
                          <div className="flex items-start flex-wrap">
                            <div className="me-2">
                              <span className="inline-flex items-center justify-center bg-gray-200 p-2 rounded-full">
                                {transaction.avatar ? (
                                  <img
                                    src={transaction.avatar}
                                    alt="Avatar"
                                    className="w-[1.75rem] h-[1.75rem] rounded-full"
                                  />
                                ) : (
                                  "💰"
                                )}
                              </span>
                            </div>
                            <div className="flex-grow">
                              <p className="font-semibold mb-[1.4px] text-[0.813rem]">
                                # {transaction.id} - {transaction.date}
                              </p>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                {transaction.service} - {transaction.status}
                              </p>
                            </div>
                            <div className="font-semibold text-[0.9375rem]">
                              {formatCurrency(transaction?.amount || 0)}

                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                <div className="box">
                  <div className="box-header justify-between">
                    <div className="box-title">Transaction Made</div>
                    <SpkDropdown Icon={true} Linktag={true} arialexpand={false} IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block"
                      Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50" Toggletext={periodLabel}>
                      {renderPeriodDropdownItems()}
                    </SpkDropdown>
                  </div>
                  <div className="box-body !py-0 !ps-0">
                    <div id="crm-profits-earned">
                      <ApexchartsComponent chartOptions={Prooptions} chartSeries={transactionMadeSeries} type="bar" height={180} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-8 xl:col-span-8 col-span-12">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                  <SpkCRMcards
                    color="primary"
                    title={"Total Transaction"}
                    ratio={totalTransactions.toLocaleString()}
                    icon="wave-square"
                    text="+40%"
                    chartid="crm-total-customers"
                    chart={<ApexchartsComponent chartOptions={Custoptions} chartSeries={Custseries} type="line" height={40} width={100} />}
                  />
                </div>
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                  <SpkCRMcards
                    color="secondary"
                    title="Completed"
                    ratio={completedTransactions.length.toLocaleString()}
                    icon="wave-square"
                    text="+25%"
                    chartid="crm-total-revenue"
                    chart={<ApexchartsComponent chartOptions={Revenueoptions} chartSeries={Revenueseries} type="line" height={40} width={100} />}
                  />
                </div>
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                  <SpkCRMcards
                    color="warning"
                    title="Incomplete"
                    ratio={incompleteTransactions.length.toLocaleString()}
                    icon="wave-square"
                    text="-12%"
                    chartid="crm-conversion-ratio"
                    chart={<ApexchartsComponent chartOptions={Coveroptions} chartSeries={Coverseries} type="line" height={40} width={100} />}
                  />
                </div>
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                  <SpkCRMcards
                    color="success"
                    title="Main Balance"
                    ratio={mainBalance}
                    icon="wallet"
                    text="+19%"
                    chartid="crm-total-deals"
                    chart={<ApexchartsComponent chartOptions={Dealoptions} chartSeries={Dealseries} type="line" height={40} width={100} />}
                  />
                </div>

                <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                  <div className="box">
                    <div className="box-header !gap-0 !m-0 justify-between">
                      <div className="box-title">Transactions Overview</div>
                      <SpkDropdown
                        Icon={true}
                        Linktag={true}
                        arialexpand={false}
                        Customclass=""
                        IconClass="fe fe-more-vertical text-[0.8rem]"
                        Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                      >
                        {renderPeriodDropdownItems()}
                      </SpkDropdown>
                    </div>
                    <div className="box-body">
                      <div id="salesOverview">
                        <ApexchartsComponent
                          chartOptions={overviewOptions}
                          chartSeries={chartData}
                          type="bar"
                          height={325}
                        />

                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
      <div className="box">
        <div className="box-header !gap-0 !m-0 justify-between">
          <div className="box-title">Revenue Analytics</div>
          <SpkDropdown
            Icon={true}
            Linktag={true}
            arialexpand={false}
            IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block"
            Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
            Toggletext="View All"
          >
            <li>
              <Link className="ti-dropdown-item" to="#" onClick={() => setFilter("daily")}>
                Daily
              </Link>
            </li>
            <li>
              <Link className="ti-dropdown-item" to="#" onClick={() => setFilter("weekly")}>
                Weekly
              </Link>
            </li>
            <li>
              <Link className="ti-dropdown-item" to="#" onClick={() => setFilter("monthly")}>
                Monthly
              </Link>
            </li>
          </SpkDropdown>
        </div>
        <div className="box-body !py-5">
          <div id="crm-revenue-analytics">
            <ApexchartsComponent chartOptions={Anaoptions} chartSeries={Anaseries} type="line" height={350} />
          </div>
        </div>
      </div>
    </div> */}
              </div>
            </div>
            <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
              <div className="box custom-card">
                <div className="box-header justify-between">
                  <div className="box-title">Deals Status</div>
                  <SpkDropdown Icon={true} Linktag={true} arialexpand={false} IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block" Toggletext={periodLabel}
                    Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50">
                    {renderPeriodDropdownItems()}
                  </SpkDropdown>
                </div>
                <div className="box-body">
                  {/* Total Count of Completed and Incomplete Transactions */}
                  <div className="flex items-center mb-[0.8rem]">
                    <h4 className="font-bold mb-0 text-[1.5rem]">{totalTransactionss}</h4>
                    <div className="ms-2">
                      <span className="py-[0.18rem] px-[0.45rem] rounded-sm text-success !font-medium !text-[0.75em] bg-success/10">
                        1.02<i className="ri-arrow-up-s-fill align-middle ms-1"></i>
                      </span>
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.813rem] ms-1">compared to last period</span>
                    </div>
                  </div>

                  {/* Bar Chart with Completed and Incomplete Transactions */}
                  <div className="flex w-full h-[0.3125rem] mb-6 rounded-full overflow-hidden">
                    {serviceStats.map((service) => (
                      <div
                        key={service.service}
                        className={`flex flex-col justify-center rounded-e-[0.625rem] ${service.incomplete > 0 ? "bg-warning" : "bg-success"}`}
                        style={{ width: `${totalTransactions > 0 ? (service.total / totalTransactions) * 100 : 0}%` }}>
                      </div>
                    ))}
                  </div>

                  {/* List of Completed and Incomplete Transactions */}
                  <ul className="list-none mb-0 pt-2 crm-deals-status">
                    {serviceStats.map((service) => (
                      <li key={service.service} className={service.incomplete > 0 ? "error" : "success"}>
                        <div className="flex items-center text-[0.813rem] justify-between">
                          <div>{service.service}</div>
                          <div className="text-[0.75rem]">
                            <span className="text-success">{service.completed} Completed transactions</span>
                            {service.incomplete > 0 && (
                              <span className="text-red-500 ms-2">{service.incomplete} Incomplete transactions</span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="box-body">
                  <div className="overflow-x-auto">
                    <Spktables tableClass="table min-w-full whitespace-nowrap table-hover border table-bordered" showCheckbox={true} Customcheckclass="!ps-4 !pe-5"
                      header={[{ title: 'Sales Rep', headerClassname: '!text-start !text-[0.85rem] min-w-[200px]' }, { title: 'Category', headerClassname: 'text-start !text-[0.85rem]' }, { title: 'Mail', headerClassname: 'text-start !text-[0.85rem]' },
                      { title: 'Location', headerClassname: 'text-start !text-[0.85rem]' }, { title: 'Date', headerClassname: 'text-start !text-[0.85rem]' }, { title: 'Action', headerClassname: 'text-start !text-[0.85rem]' }]}>
                      {Dealsstatistics.map((idx) => (
                        <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                          <th scope="row" className="!ps-4 !pe-5"><input className="form-check-input" type="checkbox" defaultChecked={idx.checked === 'defaultChecked'}
                            defaultValue="" aria-label="..." /></th>
                          <td>
                            <div className="flex items-center font-semibold">
                              <span className="!me-2 inline-flex justify-center items-center">
                                <img src={idx.src} alt="img"
                                  className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                              </span>{idx.name}
                            </div>
                          </td>
                          <td>{idx.role}</td>
                          <td>{idx.mail}</td>
                          <td>
                            <span
                              className={`inline-flex text-${idx.color} !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-${idx.color}/10`}>{idx.location}</span>
                          </td>
                          <td>{idx.date}</td>
                          <td>
                            <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                              <Link aria-label="anchor" to="#"
                                className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                  className="ri-download-2-line"></i></Link>
                              <Link aria-label="anchor" to="#"
                                className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                  className="ri-edit-line"></i></Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </Spktables>
                  </div>
                </div> */}
                {/* <div className="box-footer">
                  <div className="sm:flex items-center">
                    <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                      Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                    </div>
                    <div className="ms-auto">
                      <nav aria-label="Page navigation" className="pagination-style-4">
                        <ul className="ti-pagination mb-0">
                          <li className="page-item disabled">
                            <Link className="page-link" to="#">
                              Prev
                            </Link>
                          </li>
                          <li className="page-item"><Link className="page-link active" to="#">1</Link></li>
                          <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                          <li className="page-item">
                            <Link className="page-link !text-primary" to="#">
                              next
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
              <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">Transactions Breakdown</div>
                  <SpkDropdown
                    Icon={true}
                    Linktag={true}
                    arialexpand={false}
                    IconClass="fe fe-more-vertical text-[0.8rem]"
                    Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] ! !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                  >
                    {renderPeriodDropdownItems()}
                  </SpkDropdown>
                </div>
                <div className="box-body overflow-hidden">
                  <div className="leads-source-chart flex items-center justify-center">
                    <ApexchartsComponent chartOptions={Sourceoptions} chartSeries={sourceseries} type="donut" height={250} />
                    <div className="lead-source-value">
                      <span className="block text-[0.875rem] ">Total</span>
                      <span className="block text-[1.5625rem] font-bold">{totalTransactions.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-t border-dashed dark:border-defaultborder/10">
                  <div className="col !p-0">
                    <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend inline-block">Complete</span>
                      <div>
                        <span className="text-[1rem] font-semibold">{completedCount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col !p-0">
                    <div className="p-[0.95rem] text-center">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend inline-block">Incomplete</span>
                      <div>
                        <span className="text-[1rem] font-semibold">{incompleteCount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-12 xl:col-span-6 col-span-12">
              <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">Service Status</div>
                  <SpkDropdown Icon={true} Linktag={true} arialexpand={false} IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block" Toggletext={periodLabel}
                    Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50">
                    {renderPeriodDropdownItems()}
                  </SpkDropdown>
                </div>
                <div className="box-body">
                  {/* Total Count of Completed and Incomplete Transactions */}
                  <div className="flex items-center mb-[0.8rem]">
                    <h4 className="font-bold mb-0 text-[1.5rem]">{totalTransactionss}</h4>
                    <div className="ms-2">
                      <span className="py-[0.18rem] px-[0.45rem] rounded-sm text-success !font-medium !text-[0.75em] bg-success/10">
                        1.02<i className="ri-arrow-up-s-fill align-middle ms-1"></i>
                      </span>
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.813rem] ms-1">Top Service: {topServiceName}</span>
                    </div>
                  </div>

                  {/* Bar Chart with Completed and Incomplete Transactions */}
                  <div className="flex w-full h-[0.3125rem] mb-6 rounded-full overflow-hidden">
                    {serviceStats.map((service) => {
                      const totalCount = service.total;
                      return (
                        <div key={service.service} className="flex flex-col justify-center rounded-e-[0.625rem]"
                          style={{ width: `${totalTransactions > 0 ? (totalCount / totalTransactions) * 100 : 0}%`, backgroundColor: service.incomplete > 0 ? "#f59e0b" : "green" }}>
                        </div>
                      );
                    })}
                  </div>

                  {/* List of Completed and Incomplete Transactions Sorted by Most Completed */}
                  <ul className="list-none mb-0 pt-2 crm-deals-status">
                    {serviceStats.map((service) => {
                      return (
                        <li key={service.service} className={service.incomplete > 0 ? "error" : "success"}>
                          <div className="flex items-center text-[0.813rem] justify-between">
                            <div>{service.service}</div>
                            <div>
                              {service.completed > 0 && (
                                <span className="text-success">{service.completed} Completed</span>
                              )}
                              {service.incomplete > 0 && (
                                <span className="text-red-500 ms-2">{service.incomplete} Incomplete</span>
                              )}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="xxl:col-span-12 xl:col-span-6  col-span-12">
              <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">
                   Top 10 Agent
                  </div>
                  <SpkDropdown Icon={true} Linktag={true} arialexpand={false} Customclass="py-1" Toggletext={periodLabel}
                    Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
                    {renderPeriodDropdownItems()}
                  </SpkDropdown>
                </div>
                <div className="box-body">
                  <div>
                  <ul className="list-none mb-0 crm-recent-activity">
  {topAgents.map((agent:any, index) => (
    <li key={index} className="crm-recent-activity-content text-defaultsize">
      <div className="flex items-start">
        <div className="me-4">
          <span className="w-[1.25rem] h-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-primary bg-primary/10 rounded-full">
            <i className="bi bi-circle-fill text-[0.5rem]"></i>
          </span>
        </div>
        <div className="crm-timeline-content">
          <span className="font-semibold block">{agent.agent.agent_name || "Unknown Agent"}</span>
          <span className="text-success font-semibold text-[0.75rem]">Transactions</span>
          {/* <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">{agent.status}</span> */}
        </div>
        <div className="flex-grow text-end">
          <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">{agent.count}</span>
        </div>
      </div>
    </li>
  ))}
</ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ═══════════════════════════════════════════════════════════════════
          MoMo Collections Analytics
          Data source: newMomo-collection-service via /v1/momo/collection
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="mt-8">
        {/* Section header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-700 rounded-2xl p-5 mb-6 shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <i className="bx bx-mobile-alt text-white text-xl" />
              </div>
              <div>
                <h2 className="text-white font-bold text-[1.1rem] mb-0">MoMo Collections Analytics</h2>
                <p className="text-white/70 text-[0.78rem] mb-0">
                  {activeFilterLabel} · {periodRangeLabel}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {momoLoading && (
                <span className="inline-flex items-center gap-1.5 text-white/80 text-xs">
                  <svg className="animate-spin w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Loading…
                </span>
              )}
              <Link to={`${import.meta.env.BASE_URL}moola/new-momo/transactions`}
                className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                <i className="bx bx-list-ul" /> View All
              </Link>
              <Link to={`${import.meta.env.BASE_URL}moola/new-momo/collect`}
                className="inline-flex items-center gap-1.5 bg-white text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-white/90 transition-colors">
                <i className="bx bx-plus" /> New Collection
              </Link>
            </div>
          </div>
        </div>

        {momoError && (
          <div className="ti-alert ti-alert-danger mb-4 flex items-center gap-2">
            <i className="bx bx-error-circle text-lg" />
            {momoError}
          </div>
        )}

        {/* ── KPI Cards ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
          {[
            {
              label: 'Total Volume',
              value: `${(momoTotalVolume / 1000).toFixed(1)}K`,
              sub: 'RWF collected',
              icon: 'bx bx-money',
              color: 'from-violet-500 to-indigo-600',
              textColor: 'text-violet-600',
              bgColor: 'bg-violet-50 dark:bg-violet-900/20',
            },
            {
              label: 'Collections',
              value: filteredMomo.length.toLocaleString(),
              sub: 'total initiated',
              icon: 'bx bx-transfer',
              color: 'from-blue-500 to-cyan-500',
              textColor: 'text-blue-600',
              bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            },
            {
              label: 'Success Rate',
              value: `${momoSuccessRate}%`,
              sub: `${momoSuccess.length} successful`,
              icon: 'bx bx-check-shield',
              color: 'from-emerald-400 to-green-600',
              textColor: 'text-emerald-600',
              bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
            },
            {
              label: 'Pending',
              value: momoPending.length.toLocaleString(),
              sub: 'awaiting response',
              icon: 'bx bx-time',
              color: 'from-amber-400 to-orange-500',
              textColor: 'text-amber-600',
              bgColor: 'bg-amber-50 dark:bg-amber-900/20',
            },
            {
              label: 'Failed',
              value: momoFailed.length.toLocaleString(),
              sub: 'not completed',
              icon: 'bx bx-x-circle',
              color: 'from-red-400 to-rose-600',
              textColor: 'text-red-600',
              bgColor: 'bg-red-50 dark:bg-red-900/20',
            },
            {
              label: 'Avg Amount',
              value: momoAvgAmount >= 1000
                ? `${(momoAvgAmount / 1000).toFixed(1)}K`
                : momoAvgAmount.toFixed(0),
              sub: 'RWF per success',
              icon: 'bx bx-bar-chart-alt-2',
              color: 'from-pink-400 to-fuchsia-600',
              textColor: 'text-pink-600',
              bgColor: 'bg-pink-50 dark:bg-pink-900/20',
            },
          ].map((card) => (
            <div key={card.label} className="box !mb-0">
              <div className="box-body !p-4">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3`}>
                  <i className={`${card.icon} text-white text-lg`} />
                </div>
                <div className="text-[1.4rem] font-bold text-defaulttextcolor dark:text-defaulttextcolor/70 leading-tight">
                  {momoLoading ? (
                    <span className="block w-16 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
                  ) : card.value}
                </div>
                <div className="text-[0.7rem] font-semibold text-[#8c9097] dark:text-white/50 mt-0.5">{card.label}</div>
                <div className="text-[0.65rem] text-[#8c9097] dark:text-white/40">{card.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Trend + Status donut ───────────────────────────────────────────── */}
        <div className="grid grid-cols-12 gap-x-6 mb-6">
          <div className="xxl:col-span-8 xl:col-span-8 col-span-12">
            <div className="box !mb-0 h-full">
              <div className="box-header justify-between">
                <div className="box-title">Collection Trend</div>
                <span className="text-[0.72rem] text-[#8c9097] dark:text-white/50">{activeFilterLabel}</span>
              </div>
              <div className="box-body !pt-0">
                {momoLoading ? (
                  <div className="h-[280px] flex items-center justify-center">
                    <svg className="animate-spin w-8 h-8 text-violet-500" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                  </div>
                ) : filteredMomo.length === 0 ? (
                  <div className="h-[280px] flex flex-col items-center justify-center text-[#8c9097] dark:text-white/50">
                    <i className="bx bx-bar-chart-alt text-4xl mb-2" />
                    <p className="text-sm">No collections in this period</p>
                  </div>
                ) : (
                  <ApexchartsComponent chartOptions={momoTrendOptions} chartSeries={momoTrendSeries} type="area" height={280} />
                )}
              </div>
            </div>
          </div>

          <div className="xxl:col-span-4 xl:col-span-4 col-span-12">
            <div className="box !mb-0 h-full">
              <div className="box-header">
                <div className="box-title">Status Distribution</div>
              </div>
              <div className="box-body">
                <div className="leads-source-chart flex items-center justify-center relative">
                  {filteredMomo.length === 0 ? (
                    <div className="h-[220px] flex items-center justify-center text-[#8c9097] dark:text-white/50 text-sm">No data</div>
                  ) : (
                    <ApexchartsComponent chartOptions={momoStatusDonutOptions} chartSeries={momoStatusDonutSeries} type="donut" height={220} />
                  )}
                  <div className="lead-source-value absolute">
                    <span className="block text-[0.75rem] text-center">Total</span>
                    <span className="block text-[1.3rem] font-bold text-center">{filteredMomo.length}</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 border-t border-dashed dark:border-defaultborder/10 mt-2">
                  {[
                    { label: 'Success', count: momoSuccess.length, color: 'text-emerald-500', dot: 'bg-emerald-500' },
                    { label: 'Pending', count: momoPending.length, color: 'text-amber-500', dot: 'bg-amber-500' },
                    { label: 'Failed',  count: momoFailed.length,  color: 'text-red-500',   dot: 'bg-red-500'   },
                  ].map(s => (
                    <div key={s.label} className="text-center p-3 border-e border-dashed dark:border-defaultborder/10 last:border-e-0">
                      <span className={`inline-block w-2 h-2 rounded-full ${s.dot} mb-1`} />
                      <div className="text-[0.9rem] font-bold">{s.count}</div>
                      <div className={`text-[0.65rem] font-semibold ${s.color}`}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Provider breakdown + Top agents ───────────────────────────────── */}
        <div className="grid grid-cols-12 gap-x-6 mb-6">
          <div className="xxl:col-span-5 xl:col-span-5 col-span-12">
            <div className="box !mb-0 h-full">
              <div className="box-header">
                <div className="box-title">Provider Breakdown</div>
              </div>
              <div className="box-body">
                {momoByProvider.length === 0 ? (
                  <div className="flex items-center justify-center h-32 text-[#8c9097] dark:text-white/50 text-sm">No data</div>
                ) : (
                  <div className="space-y-4">
                    {momoByProvider.map((p, i) => {
                      const pct = filteredMomo.length > 0 ? (p.count / filteredMomo.length) * 100 : 0;
                      const colors = ['bg-violet-500', 'bg-cyan-500', 'bg-amber-500', 'bg-rose-500'];
                      const color = colors[i % colors.length];
                      return (
                        <div key={p.provider}>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
                              <span className="text-[0.8rem] font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">{p.provider}</span>
                            </div>
                            <div className="flex items-center gap-3 text-[0.75rem] text-[#8c9097] dark:text-white/50">
                              <span className="text-emerald-600 font-semibold">{p.success} ✓</span>
                              <span className="text-red-500">{p.failed} ✗</span>
                              <span className="font-bold text-defaulttextcolor dark:text-defaulttextcolor/70">{p.count} total</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div className={`h-2 rounded-full ${color} transition-all duration-500`} style={{ width: `${pct}%` }} />
                          </div>
                          <div className="flex justify-between mt-0.5 text-[0.65rem] text-[#8c9097] dark:text-white/40">
                            <span>{pct.toFixed(1)}% of collections</span>
                            <span>{(p.volume / 1000).toFixed(1)}K RWF</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="xxl:col-span-7 xl:col-span-7 col-span-12">
            <div className="box !mb-0 h-full">
              <div className="box-header justify-between">
                <div className="box-title">Top Agents by MoMo Volume</div>
                <span className="text-[0.72rem] text-[#8c9097] dark:text-white/50">{activeFilterLabel}</span>
              </div>
              <div className="box-body !p-0">
                {momoTopAgents.length === 0 ? (
                  <div className="flex items-center justify-center h-32 text-[#8c9097] dark:text-white/50 text-sm">No successful collections yet</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="table min-w-full text-[0.8rem]">
                      <thead>
                        <tr className="border-b dark:border-defaultborder/10">
                          <th className="!text-start !font-semibold !py-2.5 !px-4 text-[#8c9097]">#</th>
                          <th className="!text-start !font-semibold !py-2.5 !px-4 text-[#8c9097]">Agent ID</th>
                          <th className="!text-end !font-semibold !py-2.5 !px-4 text-[#8c9097]">Collections</th>
                          <th className="!text-end !font-semibold !py-2.5 !px-4 text-[#8c9097]">Volume (RWF)</th>
                          <th className="!text-end !font-semibold !py-2.5 !px-4 text-[#8c9097]">Share</th>
                        </tr>
                      </thead>
                      <tbody>
                        {momoTopAgents.map((a, i) => {
                          const share = momoTotalVolume > 0 ? (a.volume / momoTotalVolume) * 100 : 0;
                          return (
                            <tr key={a.agentId} className="border-b dark:border-defaultborder/10 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                              <td className="!py-2 !px-4 font-semibold text-[#8c9097]">{i + 1}</td>
                              <td className="!py-2 !px-4">
                                <div className="flex items-center gap-2">
                                  <span className="w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center text-[0.7rem] font-bold flex-shrink-0">
                                    {String(a.agentId).charAt(0).toUpperCase()}
                                  </span>
                                  <span className="font-medium text-defaulttextcolor dark:text-defaulttextcolor/70">Agent {a.agentId}</span>
                                </div>
                              </td>
                              <td className="!py-2 !px-4 text-end font-semibold">{a.count}</td>
                              <td className="!py-2 !px-4 text-end font-bold text-violet-600 dark:text-violet-400">
                                {(a.volume / 1000).toFixed(1)}K
                              </td>
                              <td className="!py-2 !px-4 text-end">
                                <div className="flex items-center justify-end gap-2">
                                  <div className="w-16 bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                    <div className="h-1.5 bg-violet-500 rounded-full" style={{ width: `${share}%` }} />
                                  </div>
                                  <span className="text-[0.7rem] text-[#8c9097] w-9 text-right">{share.toFixed(1)}%</span>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Recent MoMo Collections table ─────────────────────────────────── */}
        <div className="box">
          <div className="box-header justify-between">
            <div className="box-title">Recent MoMo Collections</div>
            <Link to={`${import.meta.env.BASE_URL}moola/new-momo/transactions`}
              className="text-[0.78rem] text-primary hover:underline font-medium">
              View all →
            </Link>
          </div>
          <div className="box-body !p-0">
            <div className="overflow-x-auto">
              <table className="table min-w-full whitespace-nowrap text-[0.8rem]">
                <thead>
                  <tr className="border-b dark:border-defaultborder/10">
                    {['Reference', 'Customer', 'Phone', 'Provider', 'Amount (RWF)', 'Status', 'Date'].map(h => (
                      <th key={h} className="!text-start !font-semibold !py-2.5 !px-4 text-[#8c9097]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {momoLoading ? (
                    Array.from({ length: 4 }).map((_, i) => (
                      <tr key={i} className="border-b dark:border-defaultborder/10">
                        {Array.from({ length: 7 }).map((__, j) => (
                          <td key={j} className="!py-3 !px-4">
                            <span className="block h-3.5 bg-gray-200 dark:bg-gray-700 animate-pulse rounded w-full" />
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : recentMomo.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="!py-8 !px-4 text-center text-[#8c9097] dark:text-white/50">
                        No collections found in this period
                      </td>
                    </tr>
                  ) : recentMomo.map(c => {
                    const statusConfig = {
                      success: { label: 'Success', cls: 'text-emerald-700 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400' },
                      pending: { label: 'Pending', cls: 'text-amber-700 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400' },
                      failed:  { label: 'Failed',  cls: 'text-red-700 bg-red-100 dark:bg-red-900/30 dark:text-red-400' },
                    }[c.status] || { label: c.status, cls: 'text-gray-600 bg-gray-100' };
                    return (
                      <tr key={c.id} className="border-b dark:border-defaultborder/10 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <td className="!py-2.5 !px-4">
                          <span className="font-mono text-[0.72rem] text-[#8c9097] bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                            {c.referenceId.slice(0, 12)}…
                          </span>
                        </td>
                        <td className="!py-2.5 !px-4 font-medium text-defaulttextcolor dark:text-defaulttextcolor/70">{c.customerName}</td>
                        <td className="!py-2.5 !px-4 text-[#8c9097]">{c.customerAccountNumber}</td>
                        <td className="!py-2.5 !px-4">
                          <span className="inline-flex items-center gap-1 text-[0.72rem] font-bold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400">
                            {c.provider}
                          </span>
                        </td>
                        <td className="!py-2.5 !px-4 font-bold text-defaulttextcolor dark:text-defaulttextcolor/70">
                          {Number(c.amount).toLocaleString()}
                        </td>
                        <td className="!py-2.5 !px-4">
                          <span className={`inline-flex items-center gap-1 text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full ${statusConfig.cls}`}>
                            {statusConfig.label}
                          </span>
                        </td>
                        <td className="!py-2.5 !px-4 text-[#8c9097]">
                          {new Date(c.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {recentMomo.length > 0 && (
            <div className="box-footer">
              <div className="flex items-center justify-between text-[0.78rem] text-[#8c9097] dark:text-white/50">
                <span>Showing {recentMomo.length} of {filteredMomo.length} collections for {activeFilterLabel}</span>
                <Link to={`${import.meta.env.BASE_URL}moola/new-momo/transactions`} className="text-primary hover:underline font-medium">
                  View all collections →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}
export default Crm;