
import { FC, Fragment, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import { Coveroptions, Coverseries, Custoptions, Custseries, Dealoptions, Dealseries, Prooptions, Revenueoptions, Revenueseries, Sourceoptions, Targetoptions } from '../../../components/ui/data/dashboards/crmdata';
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import SpkCRMcards from '../../../@spk/dashboards/spk-crmcards';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkButton from '../../../@spk/uielements/spk-button';
import { Overoptions } from '../../../components/ui/data/dashboards/salesdata';
import { startOfWeek } from "date-fns";
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
          "https://app.ddin.rw/api/v1/transactions/logs-transactions"
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

        const response = await fetch(`https://app.ddin.rw/api/v1/accounts/balance/account?accountId=${accountId}`, {
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
    </Fragment>
  )
}
export default Crm;