import { FC, Fragment, useEffect, useState, useMemo } from 'react';
import Pageheader from '../../../components/common/page-header/pageheader';
import DateRangeFilter from '../../../components/common/date-range-filter/DateRangeFilter';
import SpkChartJs from '../../../@spk/spk-packages/spk-chartjs';
import axios from 'axios';
//import Spktables from '../../../@spk/tables/spk-tables';
//import SpkButton from '../../../@spk/uielements/spk-button';
import { useCollectionTransactions } from '../../../hooks/useCollectionTransactions';
interface SalesProps { }

// Define the structure of transaction data
interface Transaction {
    id: number;
    orderid: string;
    name: string;
    quantity: string;
    price: string;
    status: string;
    date: string;
    color: string;
    bg: string;
    createdAt?: string;
    updatedAt?: string;
    amount?: number;
    provider?: string;
    customerAccountNumber?: string;

}

const Sales: FC<SalesProps> = () => {
    const resolveTransactionDate = (transaction: any): Date => {
        const candidates = [transaction?.createdAt, transaction?.updatedAt, transaction?.date];
        for (const value of candidates) {
            if (!value) continue;
            const parsed = new Date(value);
            if (!Number.isNaN(parsed.getTime())) {
                return parsed;
            }
        }
        return new Date();
    };

    //const [totalTransactions, setTotalTransactions] = useState(0);
    const [balance, setBalance] = useState(() => {
        return Number(localStorage.getItem("balance")) || 0;
    });
    const searchTerm = "";
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [selectedPeriod, setSelectedPeriod] = useState<string>('month');
    // const [completedTransactions, setCompletedTransactions] = useState(0);
    // const [incompleteTransactions, setIncompleteTransactions] = useState(0);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
  
    const [token, setToken] = useState<string | null>(null);
    const [agentIdFilter, setAgentIdFilter] = useState("");
    const statusFilter = "all";

    const {
        data: transactionApiData,
    } = useCollectionTransactions({
        status: statusFilter,
        agentId: agentIdFilter || undefined,
        limit: 300,
        offset: 0,
    });


    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedData = localStorage.getItem("userData");

        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setAgentIdFilter(parsedData?.id ? String(parsedData.id) : "");
        }
        if (storedToken) {
            setToken(JSON.parse(storedToken));
        }
    }, []);


    useEffect(() => {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
        if (!token) return;

        const fetchBalance = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/v1/agency/accounts/main/balance`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (response.data?.success) {
                    const newBalance = Number(
                        response.data?.data?.mainBalance?.availableBalance ??
                        response.data?.data?.mainBalance?.balance ??
                        0
                    );

                    // Only update state if balance has changed
                    if (newBalance !== balance) {
                        setBalance(newBalance);
                        localStorage.setItem("balance", newBalance.toString());
                    }
                } else {
                    console.error("API error:", response.data);
                }
            } catch (error: any) {
                console.error("Error fetching balance:", error.response?.data || error.message);
            }
        };

        // Fetch balance every 10 seconds
        fetchBalance();
        // const interval = setInterval(fetchBalance, 60000);

        // return () => clearInterval(interval); // Cleanup on unmount
    }, [token, balance]); // Rerun effect when token or balance changes





    useEffect(() => {
        const normalizeStatus = (status: string) => String(status || "").toLowerCase();
        const statusType = (status: string) => {
            const normalized = normalizeStatus(status);
            if (normalized.includes("success") || normalized.includes("complete")) return "success";
            if (normalized.includes("pending") || normalized.includes("process")) return "pending";
            if (normalized.includes("fail") || normalized.includes("error") || normalized.includes("reject")) return "failed";
            return "unknown";
        };

        transactionApiData.forEach((transaction: any) => {
            resolveTransactionDate(transaction);
        });

        const formattedData = transactionApiData.map((transaction: any) => {
            const type = statusType(transaction.status);
            const badge = type === "success" ? "success" : type === "pending" ? "warning" : type === "failed" ? "danger" : "secondary";
            const badgeBg = type === "success" ? "success/10" : type === "pending" ? "warning/10" : type === "failed" ? "danger/10" : "secondary/10";

            return {
                id: transaction.id,
                orderid: transaction.referenceId || transaction.operationReferenceId || String(transaction.id),
                name: transaction.customerName || transaction.customerAccountNumber || "N/A",
                quantity: transaction.provider
                    ? `${transaction.provider}${transaction.customerAccountNumber ? ` • ${transaction.customerAccountNumber}` : ""}`
                    : "Money Collection",
                price: `${Number(transaction.amount || 0).toLocaleString()} ${transaction.currencyCode || "RWF"}`,
                status: transaction.status || "UNKNOWN",
                date: resolveTransactionDate(transaction).toLocaleString(),
                color: badge,
                bg: badgeBg,
                createdAt: transaction.createdAt,
                updatedAt: transaction.updatedAt,
                amount: Number(transaction.amount || 0),
                provider: transaction.provider,
                customerAccountNumber: transaction.customerAccountNumber,
            } as Transaction;
        });

        setTransactions(formattedData);
    }, [transactionApiData]);
    const filteredTransactions = useMemo(() => {
        const normalizedSearch = searchTerm.toLowerCase().trim();
        return transactions.filter((transaction) =>
            transaction.name.toLowerCase().includes(normalizedSearch) ||
            transaction.orderid.toLowerCase().includes(normalizedSearch) ||
            transaction.quantity.toLowerCase().includes(normalizedSearch)
        );
    }, [transactions, searchTerm]);

    const transactionsInSelectedRange = useMemo(() => {
        const now = new Date();
        let startDateObj: Date;
        let endDateObj: Date = new Date(now);
        endDateObj.setHours(23, 59, 59, 999);

        if (startDate) {
            startDateObj = new Date(startDate);
            startDateObj.setHours(0, 0, 0, 0);
            if (endDate) {
                endDateObj = new Date(endDate);
                endDateObj.setHours(23, 59, 59, 999);
            }
        } else {
            const days = selectedPeriod === 'today' ? 1 : selectedPeriod === 'week' ? 7 : 30;
            startDateObj = new Date(now);
            startDateObj.setDate(startDateObj.getDate() - days + 1);
            startDateObj.setHours(0, 0, 0, 0);
        }

        return filteredTransactions.filter((transaction: any) => {
            const txDate = resolveTransactionDate(transaction);
            return txDate >= startDateObj && txDate <= endDateObj;
        });
    }, [filteredTransactions, startDate, endDate, selectedPeriod]);

    // Generate corporate dashboard analytics from real transaction data
    const corporateAnalytics = useMemo(() => {
        const dataByDate: { [key: string]: { completed: number; pending: number; failed: number; amount: number } } = {};
        const today = new Date();
        
        // Determine date range
        let startDateObj: Date;
        let endDateObj: Date = today;
        
        if (startDate) {
            // Using custom date range from DateRangeFilter
            startDateObj = new Date(startDate);
            if (endDate) {
                endDateObj = new Date(endDate);
            }
        } else {
            // Using period selection
            const days = selectedPeriod === 'today' ? 1 : selectedPeriod === 'week' ? 7 : 30;
            startDateObj = new Date(today);
            startDateObj.setDate(startDateObj.getDate() - days + 1);
        }
        
        // Initialize all dates in the period
        const currentDate = new Date(startDateObj);
        while (currentDate <= endDateObj) {
            const dateKey = currentDate.toISOString().split('T')[0];
            dataByDate[dateKey] = { completed: 0, pending: 0, failed: 0, amount: 0 };
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        // Normalize status
        const statusType = (status: string) => {
            const normalized = String(status || "").toLowerCase();
            if (normalized.includes("success") || normalized.includes("complete")) return "completed";
            if (normalized.includes("pending") || normalized.includes("process")) return "pending";
            if (normalized.includes("fail") || normalized.includes("error") || normalized.includes("reject")) return "failed";
            return "pending";
        };
        
        // Process real transactions
        transactionsInSelectedRange.forEach((transaction: any) => {
            const txDate = resolveTransactionDate(transaction);
            const dateKey = txDate.toISOString().split('T')[0];
            
            if (dataByDate[dateKey]) {
                const amount = Number(transaction.amount || 0);
                const type = statusType(transaction.status);
                
                if (type === "completed") {
                    dataByDate[dateKey].completed++;
                } else if (type === "pending") {
                    dataByDate[dateKey].pending++;
                } else if (type === "failed") {
                    dataByDate[dateKey].failed++;
                }
                
                dataByDate[dateKey].amount += amount;
            }
        });
        
        // Convert to array and sort by date
        return Object.entries(dataByDate)
            .map(([date, data]) => ({
                date,
                ...data,
            }))
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }, [selectedPeriod, startDate, endDate, transactionsInSelectedRange]);

    // Summary statistics from real data with date filtering
    const analyticsSummary = useMemo(() => {
        const statusType = (status: string) => {
            const normalized = String(status || "").toLowerCase();
            if (normalized.includes("success") || normalized.includes("complete")) return "completed";
            if (normalized.includes("pending") || normalized.includes("process")) return "pending";
            if (normalized.includes("fail") || normalized.includes("error") || normalized.includes("reject")) return "failed";
            return "pending";
        };

        let completedCount = 0;
        let pendingCount = 0;
        let failedCount = 0;
        let totalAmount = 0;

        transactionsInSelectedRange.forEach((transaction: any) => {
            const type = statusType(transaction.status);
            if (type === "completed") completedCount++;
            else if (type === "pending") pendingCount++;
            else if (type === "failed") failedCount++;
            
            totalAmount += Number(transaction.amount || 0);
        });

        const totalTransactions = completedCount + pendingCount + failedCount;
        const successRate = totalTransactions > 0 ? ((completedCount / totalTransactions) * 100).toFixed(2) : '0';

        return {
            totalTransactions,
            completedCount,
            pendingCount,
            failedCount,
            totalAmount,
            successRate: Number(successRate),
        };
    }, [transactionsInSelectedRange]);

    const statusCounts = useMemo(() => {
        let completed = 0;
        let pending = 0;
        let failed = 0;

        transactionsInSelectedRange.forEach((transaction: any) => {
            const normalized = String(transaction.status || "").toLowerCase();
            if (normalized.includes("success") || normalized.includes("complete")) completed++;
            else if (normalized.includes("pending") || normalized.includes("process")) pending++;
            else if (normalized.includes("fail") || normalized.includes("error") || normalized.includes("reject")) failed++;
            else pending++;
        });

        return { completed, pending, failed };
    }, [transactionsInSelectedRange]);

    const dailyVolumeChartData = useMemo(() => {
        const labels = corporateAnalytics.map((item) => {
            const date = new Date(item.date);
            return `${date.getMonth() + 1}/${date.getDate()}`;
        });
        const data = corporateAnalytics.map((item) => item.completed + item.pending + item.failed);

        return {
            labels: labels.length ? labels : ['No Data'],
            datasets: [
                {
                    label: 'Transactions',
                    backgroundColor: 'rgb(132, 90, 223)',
                    borderColor: 'rgb(132, 90, 223)',
                    data: data.length ? data : [0],
                    tension: 0.35,
                },
            ],
        };
    }, [corporateAnalytics]);

    const topServicesByAmountChartData = useMemo(() => {
        const amountByProvider: Record<string, number> = {};

        transactionsInSelectedRange.forEach((transaction: any) => {
            const provider = String(
                transaction.provider ||
                (transaction.quantity ? String(transaction.quantity).split('•')[0].trim() : 'Unknown') ||
                'Unknown'
            ).toUpperCase();
            amountByProvider[provider] = (amountByProvider[provider] || 0) + Number(transaction.amount || 0);
        });

        const top = Object.entries(amountByProvider)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6);

        return {
            labels: top.length ? top.map(([provider]) => provider) : ['No Data'],
            datasets: [
                {
                    label: 'Amount (RWF)',
                    data: top.length ? top.map(([, amount]) => amount) : [0],
                    backgroundColor: [
                        'rgba(132, 90, 223, 0.2)',
                        'rgba(35, 183, 229, 0.2)',
                        'rgba(245, 184, 73, 0.2)',
                        'rgba(73, 182, 245, 0.2)',
                        'rgba(230, 83, 60, 0.2)',
                        'rgba(38, 191, 148, 0.2)',
                    ],
                    borderColor: [
                        'rgb(132, 90, 223)',
                        'rgb(35, 183, 229)',
                        'rgb(245, 184, 73)',
                        'rgb(73, 182, 245)',
                        'rgb(230, 83, 60)',
                        'rgb(38, 191, 148)',
                    ],
                    borderWidth: 1,
                },
            ],
        };
    }, [transactionsInSelectedRange]);

    const statusDistributionPieData = useMemo(() => {
        const values = [statusCounts.completed, statusCounts.pending, statusCounts.failed];
        const hasData = values.some((value) => value > 0);

        return {
            labels: hasData ? ['Completed', 'Pending', 'Failed'] : ['No Data'],
            datasets: [
                {
                    label: 'Transactions',
                    data: hasData ? values : [1],
                    borderColor: 'rgba(142, 156, 173,0.1)',
                    backgroundColor: hasData
                        ? ['rgb(38, 191, 148)', 'rgb(245, 184, 73)', 'rgb(230, 83, 60)']
                        : ['rgb(201, 203, 207)'],
                    hoverOffset: 3,
                },
            ],
        };
    }, [statusCounts]);

    const transactionCountByServiceData = useMemo(() => {
        const countByProvider: Record<string, number> = {};

        transactionsInSelectedRange.forEach((transaction: any) => {
            const provider = String(
                transaction.provider ||
                (transaction.quantity ? String(transaction.quantity).split('•')[0].trim() : 'Unknown') ||
                'Unknown'
            ).toUpperCase();
            countByProvider[provider] = (countByProvider[provider] || 0) + 1;
        });

        const top = Object.entries(countByProvider)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6);

        return {
            labels: top.length ? top.map(([provider]) => provider) : ['No Data'],
            datasets: [
                {
                    label: 'Transaction Count',
                    data: top.length ? top.map(([, count]) => count) : [1],
                    borderColor: 'rgba(142, 156, 173,0.1)',
                    backgroundColor: top.length
                        ? [
                            'rgb(132, 90, 223)',
                            'rgb(35, 183, 229)',
                            'rgb(245, 184, 73)',
                            'rgb(73, 182, 245)',
                            'rgb(230, 83, 60)',
                            'rgb(38, 191, 148)',
                        ]
                        : ['rgb(201, 203, 207)'],
                    hoverOffset: 3,
                },
            ],
        };
    }, [transactionsInSelectedRange]);

    const dynamicLineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true } },
    };

    const dynamicBarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true } },
        scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(142, 156, 173,0.1)' } },
            x: { grid: { color: 'rgba(142, 156, 173,0.1)' } },
        },
    };

    const dynamicPieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true } },
    };

    const dynamicDoughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true } },
    };

    const handleDateChange = (start: string, end: string) => {
        setStartDate(start);
        setEndDate(end);
    };

    const handlePeriodChange = (period: string) => {
        setSelectedPeriod(period);
    };
    return (
        <Fragment>
            <Pageheader currentpage="Transactions" activepage="Dashboards" mainpage="Transactions" />
            
            {/* Date Range Filter */}
            <DateRangeFilter
                onDateChange={handleDateChange}
                onPeriodChange={handlePeriodChange}
            />

            {/* Corporate Analytics Summary Cards */}
            <div className="grid grid-cols-12 gap-x-6 mb-6">
                <div className="xl:col-span-3 lg:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Total Transactions</p>
                                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {analyticsSummary.totalTransactions.toLocaleString()}
                                    </h4>
                                    <p className="text-xs text-success mt-2">
                                        <i className="ri-arrow-up-line"></i> All Periods
                                    </p>
                                </div>
                                <div className="text-3xl text-primary opacity-20">
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
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Completed</p>
                                    <h4 className="text-2xl font-bold text-success">
                                        {analyticsSummary.completedCount.toLocaleString()}
                                    </h4>
                                    <p className="text-xs text-success mt-2">
                                        <i className="ri-check-line"></i> Success: {analyticsSummary.successRate}%
                                    </p>
                                </div>
                                <div className="text-3xl text-success opacity-20">
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
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Pending</p>
                                    <h4 className="text-2xl font-bold text-warning">
                                        {analyticsSummary.pendingCount.toLocaleString()}
                                    </h4>
                                    <p className="text-xs text-warning mt-2">
                                        <i className="ri-time-line"></i> Waiting
                                    </p>
                                </div>
                                <div className="text-3xl text-warning opacity-20">
                                    <i className="ri-timer-line"></i>
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
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Failed</p>
                                    <h4 className="text-2xl font-bold text-danger">
                                        {analyticsSummary.failedCount.toLocaleString()}
                                    </h4>
                                    <p className="text-xs text-danger mt-2">
                                        <i className="ri-close-line"></i> Action Needed
                                    </p>
                                </div>
                                <div className="text-3xl text-danger opacity-20">
                                    <i className="ri-close-circle-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Corporate ChartJs Cards */}
            <div className="grid grid-cols-12 gap-x-6 mb-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Daily Volume of Transactions</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs
                                id="corporate-chartjs-line"
                                type="line"
                                chartOptions={dynamicLineOptions}
                                chartSeries={dailyVolumeChartData}
                                height='250px'
                            />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Top Services by Amount</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs
                                id="corporate-chartjs-bar"
                                type="bar"
                                chartOptions={dynamicBarOptions}
                                chartSeries={topServicesByAmountChartData}
                                height='250px'
                            />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs
                                id="corporate-chartjs-pie"
                                type="pie"
                                chartOptions={dynamicPieOptions}
                                chartSeries={statusDistributionPieData}
                                height='200px'
                            />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Transaction Count by Service</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs
                                id="corporate-chartjs-doughnut"
                                type="doughnut"
                                chartOptions={dynamicDoughnutOptions}
                                chartSeries={transactionCountByServiceData}
                                height='200px'
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 xl:col-span-12 md:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header sm:flex block">
                            <div className="box-title">Task List</div>
                            <div className="tab-menu-heading border-0 p-0 ms-auto sm:mt-0 my-2">
                                <div className="tabs-menu-task me-3">
                                    <nav className="" aria-label="Tabs" role="tablist">
                                        <Link to="#"  className="hs-tab-active:bg-secondary/10 hs-tab-active:text-secondary cursor-pointer text-nowrap text-defaulttextcolor px-4 py-2 flex-grow  text-[0.75rem] font-medium text-center rounded-md hover:text-secondary active" id="active-item" data-hs-tab="#Active" aria-controls="Active">
                                            Active Tasks
                                        </Link>
                                        <Link to="#"  className="hs-tab-active:bg-secondary/10 hs-tab-active:text-secondary cursor-pointer text-nowrap text-defaulttextcolor px-4 py-2 text-[0.75rem] flex-grow font-medium text-center  rounded-md hover:text-secondary " id="Complete-item" data-hs-tab="#Complete" aria-controls="Complete">
                                            Completed Tasks
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                            <div className="sm:mt-0 mt-2">
                                <SpkButton buttontype="button" customClass="btn btn-sm btn-light"><i className="ti ti-plus me-1 font-semibold align-middle inline-block"></i>Add Task</SpkButton>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="tab-content !p-0">
                                <div className="tab-pane show active !p-0 !border-0" id="Active" aria-labelledby="active-item" role="tabpanel">
                                    <div className="table-responsive">
                                        <Spktables tableClass="table whitespace-nowrap table-hover min-w-full" showCheckbox={true}
                                            header={[{title:'Task details', headerClassname:'text-start'}, {title:'Assigned date', headerClassname:'text-start'}, 
                                            {title:'Target', headerClassname:'text-start'},{title:'Assigned to', headerClassname:'text-start'}]}>
                                                {taskList.map((idx)=>(
                                                    <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10" key={Math.random()}>
                                                        <td className="text-center">
                                                            <span>
                                                                <input className="form-check-input" type="checkbox" id="check1" defaultValue="" aria-label="..." defaultChecked={idx.checked} />
                                                            </span>
                                                        </td>
                                                        <td>{idx.description}</td>
                                                        <td className="text-[#8c9097] dark:text-white/50">{idx.time}</td>
                                                        <td><SpkBadge variant={idx.badgeColor} customClass="text-white">{idx.badgeText}</SpkBadge></td>
                                                        <td>
                                                            <div className="avatar-list-stacked !mb-0">
                                                                {idx.avatars.map((avatar, idx) => (
                                                                    <span key={idx}className="avatar avatar-xs !mb-0" >
                                                                        <img src={avatar} alt="img" className="rounded-full"  />
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </Spktables>
                                    </div>
                                </div>
                                <div className="tab-pane !p-0 hidden !border-0" id="Complete" aria-labelledby="complete-item" role="tabpanel">
                                    <div className="table-responsive">
                                        <Spktables tableClass="table whitespace-nowrap table-hover min-w-full" showCheckbox={true}
                                            header={[{title:'Task details', headerClassname:'text-start'}, {title:'Assigned date', headerClassname:'text-start'}, 
                                            {title:'Completed', headerClassname:'text-start'},{title:'Assigned to', headerClassname:'text-start'}]}>
                                                {completedTasks.map((idx)=>(
                                                    <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10" key={Math.random()}>
                                                        <td className="text-center">
                                                            <span>
                                                                <input className="form-check-input" type="checkbox" id="check6" defaultValue="" aria-label="..." />
                                                            </span>
                                                        </td>
                                                        <td>{idx.description}</td>
                                                        <td className="text-[#8c9097] dark:text-white/50">{idx.date}</td>
                                                        <td><SpkBadge variant={idx.badgeColor} customClass="text-white">{idx.badgeText}</SpkBadge></td>
                                                        <td>
                                                            <div className="avatar-list-stacked !mb-0">
                                                                 {idx.avatars.map((avatar, idx) => (
                                                                    <span key={idx} className="avatar avatar-xs !mb-0" >
                                                                        <img src={avatar} alt="img" className="rounded-full"  />
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </Spktables>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div className="dark:text-defaulttextcolor/70">
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="ti-pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="#" >
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link active" to="#" >1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#" >2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link !text-primary" to="#" >
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 xl:col-span-12 md:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Visitors By Countries
                            </div>
                            <SpkDropdown Linktag={true}  Icon={true} IconClass="fe fe-more-vertical text-[0.8rem]" Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" >
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Something else here</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body !p-0">
                            <div className="grid grid-cols-12 gap-x-4">
                                <div className="xxl:col-span-4 xl:col-span-12  col-span-12 sales-visitors-countries">
                                    <div className="mt-2">
                                        <ul className="list-none p-6 my-auto">
                                            {visitorscountries.map((idx)=>(
                                                <li className="mb-4" key={Math.random()}>
                                                    <span className="text-[0.75rem]"><i className={`ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-${idx.iconClass}`}></i>{idx.country}</span><span className="font-semibold ltr:float-right rtl:float-left">{idx.count}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="xxl:col-span-8 xl:col-span-12  col-span-12 text-center">
                                    <div id="visitors-countries">
                                        <WorldMap/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Customers</div>
                            <SpkDropdown Linktag={true}  Icon={true} IconClass="fe fe-more-vertical text-[0.8rem]" Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Something else here</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body !p-0 customers">
                            <ul className="list-group my-1">
                                    {Salesusers.map((idx)=>(
                                        <li className="list-group-item !py-3 !border-0" key={Math.random()}>
                                            <Link to="#" className="!border-0">
                                                <div className="flex items-start">
                                                    <img className="avatar avatar-md me-4 my-auto" src={idx.avatar} alt="Image description" />
                                                    <div className="mt-0">
                                                        <p className="mb-1 font-semibold">{idx.name}</p>
                                                        <p className="mb-0 text-[0.6875rem] text-success">{idx.text}</p>
                                                    </div>
                                                    <span className="ms-auto text-[0.75rem]">
                                                        <span className="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 font-semibold">{idx.balance}</span>
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Billing</div>
                            <div className="tab-menu-heading !border-0 !p-0 ms-auto">
                                <div className="tabs-menu-billing my-1">
                                    <nav className="" aria-label="Tabs" role="tablist">
                                        <Link to="#"  className="hs-tab-active:bg-success/10 hs-tab-active:text-success text-defaulttextcolor py-[0.35rem] px-4 flex-grow  text-[0.75rem] font-medium text-center rounded-md hover:text-success active" id="Invoice-item" data-hs-tab="#Invoice" aria-controls="Invoice">
                                            Invoices
                                        </Link>
                                        <Link to="#"  className="hs-tab-active:bg-success/10 hs-tab-active:text-success text-defaulttextcolor py-[0.35rem] px-4 text-[0.75rem] flex-grow font-medium text-center  rounded-md hover:text-success " id="Revenue-item" data-hs-tab="#Revenue" aria-controls="Revenue">
                                            Revenue
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="tab-content">
                                <div className="tab-pane show active !border-0 !p-0" id="Invoice" aria-labelledby="Invoice-item" role="tabpanel">
                                    <ul className="list-group border-0 py-2 my-2">
                                        {invoices.map((idx)=>(
                                            <li className={`list-group-item items-start !border-0 ${idx.class}`} key={Math.random()}>
                                                <Link to="#" >
                                                    <div className="flex w-full justify-between">
                                                        <div>
                                                            <SpkBadge variant={idx.statusClass} customClass="text-white me-4">{idx.status}</SpkBadge>
                                                        </div>
                                                        <div className="billing-invoice-details">
                                                            <span className="mb-0 font-semibold me-2">Invoice #{idx.id} _ <span className="text-[0.75rem] ">{idx.amount}</span></span>
                                                            <span className="small text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">{idx.date}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="tab-pane hidden !border-0 !p-0" id="Revenue" aria-labelledby="Revenue-item" role="tabpanel">
                                    <ul className="list-group border-0 py-2">
                                        {transactions.map((idx)=>(
                                            <li className="list-group-item items-start !border-0 mb-1" key={Math.random()}>
                                                <Link to="#" >
                                                    <div className="flex w-full justify-between">
                                                        <p className="mb-0 font-semibold">{idx.name}</p>
                                                        <p className={`mb-0 font-semibold text-${idx.amount.includes("+")?"success":"danger"} text-[0.875rem]`}>{idx.amount}</p>
                                                    </div>
                                                    <div className="flex w-full justify-between">
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]"><i className={`ri-arrow-${idx.amount.includes("+")?"up":"down"}-fill align-middle text-${idx.amount.includes("+")?"success":"danger"} me-1`}></i> 
                                                        <span className={`text-${idx.amount.includes("+")?"success":"danger"} me-2`}>{idx.percentage}%</span></span>
                                                        <span className="text-[#8c9097] dark:text-white/50  text-[0.6875rem]">{idx.timeAgo}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Sale Value
                            </div>
                            <SpkDropdown Linktag={true}  Icon={true} IconClass="fe fe-more-vertical text-[0.8rem]" Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" >
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Something else here</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body !p-0 px-1">
                            <div id="sale-value" className="p-5">
                                    <ApexchartsComponent chartOptions={Saleoptions} chartSeries={Saleseries} type="radialBar" height={215} />
                            </div>
                            <div className="grid grid-cols-12 pt-3 ">
                                <div className="xl:col-span-12  col-span-12 border-b dark:border-defaultborder/10 pb-5 text-center flex flex-wrap justify-center"><span className="font-semibold ms-2 text-primary px-4">60% Increase in sale value since last week</span></div>
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-6 border-e dark:border-defaultborder/10 p-4 text-center">
                                    <p className="mb-1">Sale Items</p>
                                    <h5 className="mb-1 font-semibold">567</h5>
                                    <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0">Increased<span className="text-success ms-2"><i className="ri-arrow-up-s-line me-2 font-bold align-middle inline-block"></i>
                                    <SpkBadge variant="" customClass="text-success !text-[0.6875rem]">0.9%</SpkBadge></span></p>
                                </div>
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-6  p-4 text-center">
                                    <p className="mb-1">Sale Revenue</p>
                                    <h5 className="mb-1 font-semibold">$11,197</h5>
                                    <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0">Profit<span className="text-success ms-2"><i className="ri-arrow-down-s-line me-2 font-bold align-middle inline-block"></i>
                                    <SpkBadge variant="success/10" customClass="text-success !text-[0.6875rem]">0.15%</SpkBadge></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Profitable Categories</div>
                            <SpkDropdown Linktag={true}  Icon={true} IconClass="fe fe-more-vertical text-[0.8rem]" Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" >
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Something else here</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body">
                            <ul className="mb-0 !rounded-[0.375rem]">
                                {categories.map((idx)=>(
                                    <li className="list-group-item" key={Math.random()}>
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm bg-light !text-defaulttextcolor font-semibold !mb-0">
                                                   {idx.id}
                                                </span>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="mb-0 font-semibold">{idx.name}</p>
                                            </div>
                                            <div>
                                                <span className="text-success">{idx.amount}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                <li className="list-group-item text-center !py-4">
                                    <SpkButton buttontype="button" Size="lg" variant="primary" customClass="ti-btn !mb-0 !text-[0.75rem] !font-semibold ti-btn-wave">See All Activity</SpkButton>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </Fragment>
    )
}

export default Sales