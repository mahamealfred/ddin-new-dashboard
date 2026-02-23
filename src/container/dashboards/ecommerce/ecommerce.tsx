import  {FC, Fragment, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import Pageheader from '../../../components/common/page-header/pageheader';
import ecommerce35 from "../../../assets/images/ecommerce/png/35.png";
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import SpkEcommerceCards from '../../../@spk/dashboards/spk-commercecards';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import Spktables from '../../../@spk/tables/spk-tables';
import SpkButton from '../../../@spk/uielements/spk-button';

interface EcommerceProps { }

interface CollectionTransaction {
    id: number;
    referenceId?: string;
    operationReferenceId?: string | null;
    provider?: string;
    customerAccountNumber?: string;
    customerName?: string;
    currencyCode?: string;
    amount?: string | number;
    status?: string;
    message?: string;
    agentId?: string;
    transactionId?: string | null;
    additionalProperties?: Record<string, any>;
    createdAt?: string;
    updatedAt?: string;
}

interface OverviewRow {
    id: number;
    name: string;
    productid: string;
    price: string;
    status: string;
    color: string;
    sales: string;
    text: string;
}

type PeriodFilter = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';

const Ecommerce: FC<EcommerceProps> = () => {

    const MAX_STATUS_ROWS = 20;
    const OVERVIEW_PAGE_SIZE = 10;

    const [transactions, setTransactions] = useState<CollectionTransaction[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCollection, setSelectedCollection] = useState<OverviewRow | null>(null);
    const [periodFilter, setPeriodFilter] = useState<PeriodFilter>('monthly');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [appliedStartDate, setAppliedStartDate] = useState('');
    const [appliedEndDate, setAppliedEndDate] = useState('');
    const [dateFilterError, setDateFilterError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                setLoading(true);
                setError(null);

                const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';
                const storedToken = localStorage.getItem('token');
                const token = storedToken ? JSON.parse(storedToken) : null;

                const response = await fetch(`${apiBaseUrl}/v1/thirdparty/collection`, {
                    headers: {
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to load collection analytics');
                }

                const data = await response.json();
                setTransactions(data?.data || []);
            } catch (fetchError: any) {
                setError(fetchError?.message || 'Failed to load collection analytics.');
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    const parseAmount = (amount?: string | number) => Number(amount || 0);
    const getStatusCategory = (status?: string, message?: string): 'active' | 'completed' | 'cancelled' => {
        const normalizedStatus = String(status || '').toLowerCase();
        const normalizedMessage = String(message || '').toLowerCase();

        if (
            normalizedStatus.includes('pending') ||
            normalizedStatus.includes('process') ||
            normalizedStatus.includes('initiated') ||
            normalizedStatus.includes('queue') ||
            normalizedMessage.includes('pending') ||
            normalizedMessage.includes('processing')
        ) {
            return 'active';
        }

        if (normalizedStatus.includes('success') || normalizedStatus.includes('complete') || normalizedStatus.includes('delivered')) {
            return 'completed';
        }

        if (normalizedStatus.includes('fail') || normalizedStatus.includes('cancel') || normalizedStatus.includes('reject') || normalizedStatus.includes('error')) {
            return 'cancelled';
        }

        return 'active';
    };
    const isSuccessStatus = (status?: string, message?: string) => getStatusCategory(status, message) === 'completed';

    const getInitial = (value?: string) => {
        const cleaned = value?.trim();
        return cleaned ? cleaned.charAt(0).toUpperCase() : '?';
    };

    const formatTransactionDate = (value?: string) => (value ? new Date(value).toLocaleDateString() : '-');

    const parseInputDate = (value: string, endOfDay = false) => {
        const parts = value.split('-').map(Number);
        if (parts.length !== 3 || parts.some(Number.isNaN)) return null;

        const [year, month, day] = parts;
        const date = new Date(year, month - 1, day);

        if (endOfDay) {
            date.setHours(23, 59, 59, 999);
        } else {
            date.setHours(0, 0, 0, 0);
        }

        return Number.isNaN(date.getTime()) ? null : date;
    };

    const getPeriodRange = (period: PeriodFilter) => {
        const now = new Date();
        const end = new Date(now);
        end.setHours(23, 59, 59, 999);

        const getRollingStart = (daysBack: number) => {
            const date = new Date(now);
            date.setDate(now.getDate() - daysBack);
            date.setHours(0, 0, 0, 0);
            return date;
        };

        if (period === 'daily') {
            return { start: getRollingStart(0), end };
        } else if (period === 'weekly') {
            return { start: getRollingStart(6), end };
        } else if (period === 'monthly') {
            return { start: getRollingStart(29), end };
        } else if (period === 'quarterly') {
            return { start: getRollingStart(89), end };
        } else {
            return { start: getRollingStart(364), end };
        }
    };

    const filteredTransactions = useMemo(() => {
        const hasCustomRange = appliedStartDate && appliedEndDate;
        const customStart = hasCustomRange ? parseInputDate(appliedStartDate) : null;
        const customEnd = hasCustomRange ? parseInputDate(appliedEndDate, true) : null;

        return transactions.filter((transaction) => {
            if (!transaction.createdAt) {
                return false;
            }

            const transactionDate = new Date(transaction.createdAt);
            if (Number.isNaN(transactionDate.getTime())) {
                return false;
            }

            if (hasCustomRange && customStart && customEnd) {
                return transactionDate >= customStart && transactionDate <= customEnd;
            }

            const periodRange = getPeriodRange(periodFilter);
            return transactionDate >= periodRange.start && transactionDate <= periodRange.end;
        });
    }, [transactions, periodFilter, appliedStartDate, appliedEndDate]);

    const analytics = useMemo(() => {
        const totalOrders = filteredTransactions.length;
        const totalSalesValue = filteredTransactions.reduce((sum, transaction) => sum + parseAmount(transaction.amount), 0);
        const failedValue = filteredTransactions
            .filter((transaction) => getStatusCategory(transaction.status, transaction.message) === 'cancelled')
            .reduce((sum, transaction) => sum + parseAmount(transaction.amount), 0);
        const uniqueCustomers = new Set(filteredTransactions.map((transaction) => transaction.customerAccountNumber || transaction.customerName || transaction.id)).size;
        const successfulOrders = filteredTransactions.filter((transaction) => getStatusCategory(transaction.status, transaction.message) === 'completed').length;
        const failedOrders = filteredTransactions.filter((transaction) => getStatusCategory(transaction.status, transaction.message) === 'cancelled').length;
        const pendingOrders = filteredTransactions.filter((transaction) => getStatusCategory(transaction.status, transaction.message) === 'active').length;
        const successRate = totalOrders > 0 ? (successfulOrders / totalOrders) * 100 : 0;

        return {
            totalOrders,
            totalSalesValue,
            failedValue,
            uniqueCustomers,
            successfulOrders,
            failedOrders,
            pendingOrders,
            successRate,
        };
    }, [filteredTransactions]);

    const recentTransactions = useMemo(() => {
        return [...filteredTransactions]
            .sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime())
            .slice(0, 5);
    }, [filteredTransactions]);

    const providerStats = useMemo(() => {
        const grouped = new Map<string, { provider: string; amount: number; count: number }>();

        filteredTransactions.forEach((transaction) => {
            const provider = (transaction.provider || 'Unknown').toUpperCase();
            const current = grouped.get(provider) || { provider, amount: 0, count: 0 };
            current.amount += parseAmount(transaction.amount);
            current.count += 1;
            grouped.set(provider, current);
        });

        return Array.from(grouped.values()).sort((a, b) => b.amount - a.amount).slice(0, 5);
    }, [filteredTransactions]);

    const topCustomers = useMemo(() => {
        const grouped = new Map<string, { name: string; amount: number; count: number; account: string }>();

        filteredTransactions.forEach((transaction) => {
            const key = transaction.customerAccountNumber || transaction.customerName || String(transaction.id);
            const current = grouped.get(key) || {
                name: transaction.customerName || 'Unknown Customer',
                amount: 0,
                count: 0,
                account: transaction.customerAccountNumber || '-',
            };
            current.amount += parseAmount(transaction.amount);
            current.count += 1;
            grouped.set(key, current);
        });

        return Array.from(grouped.values()).sort((a, b) => b.amount - a.amount).slice(0, 5);
    }, [filteredTransactions]);

    const tableRows = useMemo<OverviewRow[]>(() => {
        return filteredTransactions.map((transaction) => {
            const category = getStatusCategory(transaction.status);
            const statusLabel = category === 'completed' ? 'Success' : category === 'cancelled' ? 'Failed' : 'Pending';
            const statusColor = category === 'completed' ? 'success' : category === 'cancelled' ? 'danger' : 'warning';
            return {
                id: transaction.id,
                name: transaction.customerName || 'Unknown Customer',
                productid: transaction.transactionId || transaction.referenceId || String(transaction.id),
                price: `${transaction.currencyCode || 'RWF'} ${parseAmount(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                status: statusLabel,
                color: statusColor,
                sales: transaction.provider?.toUpperCase() || 'N/A',
                text: transaction.message || '-',
            };
        });
    }, [filteredTransactions]);

    const filteredTableRows = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();
        if (!query) return tableRows;

        return tableRows.filter((row) =>
            row.name.toLowerCase().includes(query) ||
            String(row.productid).toLowerCase().includes(query) ||
            row.sales.toLowerCase().includes(query)
        );
    }, [tableRows, searchTerm]);

    const totalPages = Math.max(1, Math.ceil(filteredTableRows.length / OVERVIEW_PAGE_SIZE));

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, periodFilter, appliedStartDate, appliedEndDate]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const paginatedTableRows = useMemo(() => {
        const startIndex = (currentPage - 1) * OVERVIEW_PAGE_SIZE;
        return filteredTableRows.slice(startIndex, startIndex + OVERVIEW_PAGE_SIZE);
    }, [filteredTableRows, currentPage]);

    const visiblePages = useMemo(() => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }

        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, start + 4);
        const adjustedStart = Math.max(1, end - 4);

        return Array.from({ length: end - adjustedStart + 1 }, (_, index) => adjustedStart + index);
    }, [currentPage, totalPages]);

    const orderGroups = useMemo(() => {
        const sortedTransactions = [...filteredTransactions].sort(
            (a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
        );

        return sortedTransactions.reduce(
            (accumulator, transaction) => {
                const category = getStatusCategory(transaction.status, transaction.message);
                accumulator[category].push(transaction);
                return accumulator;
            },
            {
                active: [] as CollectionTransaction[],
                completed: [] as CollectionTransaction[],
                cancelled: [] as CollectionTransaction[],
            }
        );
    }, [filteredTransactions]);

    const statusRows = useMemo(() => {
        return {
            active: orderGroups.active.slice(0, MAX_STATUS_ROWS),
            completed: orderGroups.completed.slice(0, MAX_STATUS_ROWS),
            cancelled: orderGroups.cancelled.slice(0, MAX_STATUS_ROWS),
        };
    }, [orderGroups]);

    const collectionBreakdown = useMemo(() => {
        const successfulTransactions = filteredTransactions.filter((transaction) => getStatusCategory(transaction.status, transaction.message) === 'completed');
        const failedTransactions = filteredTransactions.filter((transaction) => getStatusCategory(transaction.status, transaction.message) === 'cancelled');
        const pendingTransactions = filteredTransactions.filter((transaction) => getStatusCategory(transaction.status, transaction.message) === 'active');

        return {
            successfulAmount: successfulTransactions.reduce((sum, transaction) => sum + parseAmount(transaction.amount), 0),
            failedAmount: failedTransactions.reduce((sum, transaction) => sum + parseAmount(transaction.amount), 0),
            pendingAmount: pendingTransactions.reduce((sum, transaction) => sum + parseAmount(transaction.amount), 0),
        };
    }, [filteredTransactions]);

    const statusChartSeries = useMemo(() => {
        return [
            {
                name: 'Transactions',
                data: [analytics.successfulOrders, analytics.failedOrders, analytics.pendingOrders],
            },
        ];
    }, [analytics]);

    const statusChartOptions = useMemo(() => {
        return {
            chart: {
                type: 'bar' as const,
                toolbar: { show: false },
            },
            xaxis: {
                categories: ['Successful', 'Failed', 'Pending'],
            },
            yaxis: {
                title: { text: 'Transactions' },
            },
            colors: ['rgba(132, 90, 223, 0.3)', 'rgb(132, 90, 223)', 'rgba(132, 90, 223, 0.3)'],
            dataLabels: { enabled: false },
            plotOptions: {
                bar: { borderRadius: 6, columnWidth: '45%', distributed: true },
            },
            legend: { show: false },
        };
    }, []);

    const applyDateRange = () => {
        if (!startDate || !endDate) {
            setDateFilterError('Select both start and end dates.');
            return;
        }

        const parsedStart = parseInputDate(startDate);
        const parsedEnd = parseInputDate(endDate, true);

        if (!parsedStart || !parsedEnd) {
            setDateFilterError('Invalid date selection.');
            return;
        }

        if (parsedStart > parsedEnd) {
            setDateFilterError('Start date cannot be after end date.');
            return;
        }

        setAppliedStartDate(startDate);
        setAppliedEndDate(endDate);
        setDateFilterError(null);
    };

    const clearDateRange = () => {
        setStartDate('');
        setEndDate('');
        setAppliedStartDate('');
        setAppliedEndDate('');
        setDateFilterError(null);
    };

    const myfunction = (idx: string) => {
        setSearchTerm(idx);
    };

    return (
        <Fragment>
            <Pageheader currentpage="Collection Analytics" activepage="Dashboards" mainpage="Collection Analytics" />
            {error && (
                <div className="ti-alert ti-alert-danger mb-4" role="alert">
                    {error}
                </div>
            )}
            {loading && (
                <div className="ti-alert ti-alert-light mb-4" role="status">
                    Loading collection analytics...
                </div>
            )}
            <div className="box mb-4">
                <div className="box-body">
                    <div className="flex flex-wrap items-end gap-3">
                        <div>
                            <label className="block text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-1">Period Filter</label>
                            <select
                                className="ti-form-control"
                                value={periodFilter}
                                onChange={(e) => {
                                    setPeriodFilter(e.target.value as PeriodFilter);
                                    setAppliedStartDate('');
                                    setAppliedEndDate('');
                                    setDateFilterError(null);
                                }}
                            >
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="quarterly">Quarterly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-1">Start Date</label>
                            <input type="date" className="ti-form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-1">End Date</label>
                            <input type="date" className="ti-form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </div>
                        <SpkButton buttontype="button" variant="primary" customClass="ti-btn" onclickfunc={applyDateRange}>Apply Range</SpkButton>
                        <SpkButton buttontype="button" variant="light" customClass="ti-btn" onclickfunc={clearDateRange}>Clear</SpkButton>
                        {dateFilterError && (
                            <div className="w-full text-danger text-[0.75rem]">{dateFilterError}</div>
                        )}
                        <div className="ms-auto text-[0.75rem] text-[#8c9097] dark:text-white/50">
                            {appliedStartDate && appliedEndDate
                                ? `Active range: ${appliedStartDate} to ${appliedEndDate}`
                                : `Active period: ${periodFilter}`}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <SpkEcommerceCards title="Collected Amount" svg={<><svg xmlns="http://www.w3.org/2000/svg" className="svg-white primary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg></>} 
                            ratio={`${analytics.totalSalesValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF`} text={`+${analytics.totalOrders} collections`} color="primary" />
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <SpkEcommerceCards title="Failed Amount" svg={<><svg xmlns="http://www.w3.org/2000/svg" className="svg-white secondary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg></>} 
                            ratio={`${analytics.failedValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF`} text={`+${Math.max(analytics.totalOrders - analytics.successfulOrders, 0)} failed`} color="secondary" />
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <SpkEcommerceCards title="Success Rate" svg={<><svg xmlns="http://www.w3.org/2000/svg" className="svg-white success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></>} 
                            ratio={`${analytics.successRate.toFixed(1)}%`} text={`+${analytics.successfulOrders} successful`} color="success" />
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <SpkEcommerceCards title="Total Collections" svg={<><svg xmlns="http://www.w3.org/2000/svg" className="svg-white warning" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg></>} 
                            ratio={analytics.totalOrders.toLocaleString()} text={`+${analytics.successfulOrders} successful`} color="warning" />
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="ecommerce-sale-image">
                                    <img src={ecommerce35} className="card-img-top" alt="..." />
                                    <div className="card-img-overlay  p-6 text-white">
                                        <p className=" opacity-[0.7] text-[0.75rem]">Collection Operations</p>
                                        <p className="font-semibold mb-6 text-[1rem]">COLLECTION MONITORING</p>
                                        <p className="ecommerce-bankoffer-details mb-4">Track incoming collections, failed attempts, and provider performance from one dashboard view.</p>
                                        <p className="ecommerce-sale-days mb-0">Real-time summary</p>
                                        <p className="ecommerce-sales-calendar text-center mb-0">
                                            <span>15</span>
                                            <span className="block text-[0.9375rem] leading-none font-semibold">Jan</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <Link to="#" className="text-primary text-[0.9375rem] font-semibold">Collection status overview.</Link>
                                    <p className="mb-3">Monitor transaction throughput, top providers, customer activity, and failed collection messages in one place.</p>
                                    <SpkButton buttontype="button" variant="primary-full" customClass="ti-btn ti-btn-wave !py-[0.55rem] !px-[0.95rem] gap-2 rounded-[0.35rem] text-[0.85rem] font-medium !shadow-none me-3">Refresh Data</SpkButton>
                                    <SpkButton buttontype="button" variant="outline-primary" customClass="ti-btn ti-btn-wave !rounded-[0.35rem] !text-[0.85rem] !font-medium !shadow-none">View Logs</SpkButton>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Collections
                                    </div>
                                    <SpkDropdown Linktag={true} Icon={true} arialexpand={false} Customclass="" Toggletext="" IconClass="fe fe-more-vertical text-[0.8rem]"
                                        Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Something else here</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        {recentTransactions.map((transaction, index) => (
                                            <li className={`${index !== recentTransactions.length - 1 ? 'mb-4' : ''}`} key={transaction.id}>
                                                <Link to="#">
                                                    <div className="flex tems-center">
                                                        <div className="leading-none">
                                                            <span className="inline-flex justify-center items-center">
                                                                <span className="w-[2.5rem] h-[2.5rem] leading-[2.5rem] text-[0.8rem] rounded-md bg-primary/10 text-primary inline-flex justify-center items-center">
                                                                    <i className="ri-exchange-dollar-line"></i>
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow ms-2">
                                                            <p className="font-semibold mb-0">#{transaction.transactionId || transaction.referenceId || transaction.id}</p>
                                                            <p className="text-[0.75rem] !text-[#8c9097] dark:text-white/50 mb-0">
                                                                {(transaction.customerName || 'Unknown')} • {(transaction.provider || 'N/A').toUpperCase()} • {transaction.createdAt ? new Date(transaction.createdAt).toLocaleDateString() : '-'}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <span className={`font-semibold ${isSuccessStatus(transaction.status, transaction.message) ? 'text-success' : getStatusCategory(transaction.status, transaction.message) === 'active' ? 'text-warning' : 'text-danger'}`}>
                                                                {parseAmount(transaction.amount).toLocaleString(undefined, { maximumFractionDigits: 2 })} {transaction.currencyCode || 'RWF'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between sm:flex block">
                                    <div className="box-title">
                                        Collection Status
                                    </div>
                                    <div>
                                        <nav className="sm:flex block sm:mt-0 mt-2" aria-label="Tabs" role="tablist">
                                            <SpkButton customClass="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4  text-[0.8rem] font-medium text-center rounded-md hover:text-primary active" Id="active-item" Tab="#taskactive" Controls="taskactive">
                                                Active Collections
                                            </SpkButton>
                                            <SpkButton customClass="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " Id="completed-item" Tab="#completed" Controls="completed">
                                                Successful
                                            </SpkButton>
                                            <SpkButton customClass="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " Id="cancelled-item" Tab="#cancelled" Controls="cancelled">
                                                Failed
                                            </SpkButton>
                                        </nav>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="tab-content">
                                        <div className="tab-pane show active text-[#8c9097] dark:text-white/50 !border-0 !p-0" id="taskactive"
                                            role="tabpanel">
                                            <div className="px-4 py-2 text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                                Showing first {statusRows.active.length} of {orderGroups.active.length} active collections
                                            </div>
                                            <div className="table-responsive overflow-auto">
                                                <Spktables tableClass="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full" tBodyClass='active-tab'>
                                                        {statusRows.active.map((transaction) => (
                                                            <tr key={`${transaction.id}-${transaction.createdAt || ''}`}>
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md avatar-rounded me-2 !mb-0 bg-primary/10 text-primary inline-flex items-center justify-center">
                                                                                {getInitial(transaction.customerName)}
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">{transaction.customerName || 'Unknown Customer'}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Amount</span>
                                                                        <p className="mb-0 font-semibold">
                                                                            {parseAmount(transaction.amount).toLocaleString(undefined, { maximumFractionDigits: 2 })} {transaction.currencyCode || 'RWF'}
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Collection Date</span>
                                                                        <p className="mb-0">{formatTransactionDate(transaction.createdAt)}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md bg-light text-primary inline-flex items-center justify-center">
                                                                        {getInitial(transaction.provider)}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </Spktables>
                                            </div>
                                        </div>
                                        <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden" id="completed" role="tabpanel" aria-labelledby="completed-item">
                                            <div className="px-4 py-2 text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                                Showing first {statusRows.completed.length} of {orderGroups.completed.length} successful collections
                                            </div>
                                            <div className="table-responsive overflow-auto">
                                                <Spktables tableClass="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full" tBodyClass='active-tab'>
                                                        {statusRows.completed.map((transaction) => (
                                                            <tr key={`${transaction.id}-${transaction.createdAt || ''}`}>
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md avatar-rounded me-2 !mb-0 bg-success/10 text-success inline-flex items-center justify-center">
                                                                                {getInitial(transaction.customerName)}
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">{transaction.customerName || 'Unknown Customer'}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Amount</span>
                                                                        <p className="mb-0 fw-semibold">
                                                                            {parseAmount(transaction.amount).toLocaleString(undefined, { maximumFractionDigits: 2 })} {transaction.currencyCode || 'RWF'}
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-success">Collection Date</span>
                                                                        <p className="mb-0">{formatTransactionDate(transaction.updatedAt || transaction.createdAt)}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md bg-light text-success inline-flex items-center justify-center">
                                                                        {getInitial(transaction.provider)}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </Spktables>
                                            </div>
                                        </div>
                                        <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden" id="cancelled" role="tabpanel" aria-labelledby="cancelled-item">
                                            <div className="px-4 py-2 text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                                Showing first {statusRows.cancelled.length} of {orderGroups.cancelled.length} failed collections
                                            </div>
                                            <div className="table-responsive overflow-auto">
                                                <Spktables tableClass="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full" tBodyClass='active-tab'>
                                                        {statusRows.cancelled.map((transaction) => (
                                                            <tr key={`${transaction.id}-${transaction.createdAt || ''}`}>
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md avatar-rounded me-2 !mb-0 bg-danger/10 text-danger inline-flex items-center justify-center">
                                                                                {getInitial(transaction.customerName)}
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">{transaction.customerName || 'Unknown Customer'}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Amount</span>
                                                                        <p className="mb-0 fw-semibold">
                                                                            {parseAmount(transaction.amount).toLocaleString(undefined, { maximumFractionDigits: 2 })} {transaction.currencyCode || 'RWF'}
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-danger">Collection Date</span>
                                                                        <p className="mb-0">{formatTransactionDate(transaction.updatedAt || transaction.createdAt)}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md bg-light text-danger inline-flex items-center justify-center">
                                                                        {getInitial(transaction.provider)}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </Spktables>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">Collection Breakdown</div>
                                    <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext="View All" 
                                        Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50">
                                         <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                             to="#">Today</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">This Week</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Last Week</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <div className="sm:grid sm:grid-cols-12 lg:ps-[3rem] mb-6 pb-6 sm:gap-0 gap-y-3">
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning first-half ms-4">Successful Transactions</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">{analytics.successfulOrders}</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <SpkBadge variant="success/10" customClass="text-success !px-1 !py-2 text-[0.625rem]">{collectionBreakdown.successfulAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF</SpkBadge></span>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning top-gross ms-4">Failed Transactions</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">{analytics.failedOrders}</span>
                                                <span className="text-danger"><i className="fa fa-caret-up mx-1"></i>
                                                    <SpkBadge variant="danger/10" customClass="text-danger !px-1 !py-2 text-[0.625rem]">{collectionBreakdown.failedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF</SpkBadge></span>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning second-half ms-3">Pending Transactions</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">{analytics.pendingOrders}</span>
                                                <span className="text-warning"><i className="fa fa-caret-up mx-1"></i>
                                                    <SpkBadge variant="warning/10" customClass="text-warning !px-1 !py-2 text-[0.625rem]">{collectionBreakdown.pendingAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF</SpkBadge></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="earnings">
                                        <ApexchartsComponent chartOptions={statusChartOptions} chartSeries={statusChartSeries} type="bar" height={200} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-card">
                                <div className="box-header">
                                    <div className="box-title">Provider Performance</div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="table-responsive">
                                        <Spktables tBodyClass='top-selling' tableClass="table whitespace-nowrap min-w-full mb-0"
                                            header={[{title:'Provider', headerClassname:'text-start'}, {title:'Collections', headerClassname:'text-start'},
                                            {title:'Total Amount', headerClassname:'text-start'}, {title:'Status', headerClassname:'text-start'} ]}>
                                                {providerStats.map((provider)=>(
                                                    <tr className="border-y border-inherit border-solid dark:border-defaultborder/10" key={provider.provider}>
                                                        <td className="font-semibold">{provider.provider}</td>
                                                        <td>{provider.count}</td>
                                                        <td>{provider.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF</td>
                                                        <td><SpkBadge variant="success/10" customClass="badge-sm text-success !font-normal">Active</SpkBadge></td>
                                                    </tr>
                                                ))}
                                        </Spktables>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Providers By Collections
                                    </div>
                                    <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="" IconClass="fe fe-more-vertical text-[0.8rem]" 
                                        Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Something else here</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <div className="flex items-center mb-2">
                                        <h4 className="mb-0 leading-none text-[1.5rem] font-medium">{analytics.totalSalesValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF</h4>
                                        <SpkBadge variant="primary/10" customClass="mx-1 text-primary">{providerStats.length}</SpkBadge>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Top providers</span>
                                    </div>
                                    <ul className="mb-0 pt-3 list-none">
                                        {providerStats.map((provider, index) => (
                                            <li className={`${index !== providerStats.length - 1 ? 'mb-4' : ''}`} key={provider.provider}>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center leading-none">
                                                        <span className="avatar avatar-xs me-2 bg-light text-primary inline-flex items-center justify-center rounded-full h-[1.25rem] w-[1.25rem]">
                                                            <i className="ri-global-line"></i>
                                                        </span>
                                                        <span className="top-country-name w-[5.5rem]">{provider.provider}</span>
                                                    </div>
                                                    <div>
                                                        <i className="ti ti-trending-up text-[1rem] text-success"></i>
                                                    </div>
                                                    <div className="text-[0.875rem]">{provider.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Customers
                                    </div>
                                    <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext="View All"
                                        Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Today</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Last Week</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        {topCustomers.map((customer, index)=>(
                                            <li className={`${index !== topCustomers.length - 1 ? 'mb-4' : ''}`} key={`${customer.name}-${customer.account}`}>
                                                <Link to="#">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-start justify-center">
                                                            <span className="avatar avatar-md avatar-rounded !mb-0 me-2 bg-primary/10 text-primary inline-flex items-center justify-center">
                                                                {customer.name.charAt(0).toUpperCase()}
                                                            </span>
                                                            <div>
                                                                <p className="mb-0 font-semibold">{customer.name}</p>
                                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">{customer.account} • {customer.count} transactions<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">{customer.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF</span>
                                                        </div>
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
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Collections Overview
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <input className="ti-form-control form-control-sm min-w-[14rem]" type="text" placeholder="Search customer, reference, provider" onChange={(ele) => { myfunction(ele.target.value); }}
                                        aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass=""   Toggletext="Sort By"
                                    Linkclass="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                    to="#">New</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#">Popular</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#">Relevant</Link></li>
                                </SpkDropdown>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="overflow-x-auto">
                                <Spktables tableClass="table min-w-full whitespace-nowrap table-hover border table-bordered text-[0.8125rem]" tableRowclass="border border-inherit border-solid  dark:border-defaultborder/10" 
                                            header={[{title:'Customer', headerClassname:'!text-start'}, {title:'Reference', headerClassname:'!text-start'}, 
                                                {title:'Amount', headerClassname:'!text-start'}, {title:'Status', headerClassname:'!text-start'},{title:'Provider', headerClassname:'!text-start'},
                                        {title:'Message', headerClassname:'!text-start'}, {title:'Action', headerClassname:'!text-start'} ]}>
                                    {paginatedTableRows.map((idx) => (
                                            <tr className="border-y border-inherit border-solid dark:border-defaultborder/10" key={idx.id}>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2 leading-none">
                                                            <span className="avatar avatar-sm bg-light text-primary inline-flex items-center justify-center">
                                                                <i className="ri-shopping-bag-2-line"></i>
                                                            </span>
                                                        </div>
                                                        <div className="text-sm">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="font-semibold">{idx.productid}</span>
                                                </td>
                                                <td>
                                                    {idx.price}
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.status}</SpkBadge>
                                                </td>
                                                <td>
                                                    <span className="">{idx.sales}</span>
                                                </td>
                                                <td>
                                                    <span className="max-w-[22rem] block truncate" title={idx.text}>{idx.text}</span>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="ti-btn ti-btn-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15"
                                                        onClick={() => setSelectedCollection(idx)}
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </Spktables>
                            </div>
                            {selectedCollection && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-[2px] p-4" onClick={() => setSelectedCollection(null)}>
                                    <div className="w-full max-w-3xl rounded-xl bg-white dark:bg-bodybg shadow-2xl border border-defaultborder/10" onClick={(event) => event.stopPropagation()}>
                                        <div className="flex items-center justify-between border-b border-defaultborder/10 px-5 py-4">
                                            <div>
                                                <h6 className="mb-0 font-semibold">Collection Details</h6>
                                                <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50">Reference #{selectedCollection.productid}</p>
                                            </div>
                                            <button type="button" className="text-[0.75rem] text-primary font-medium" onClick={() => setSelectedCollection(null)}>
                                                Close
                                            </button>
                                        </div>
                                        <div className="p-5">
                                            <div className="grid grid-cols-12 gap-3 text-[0.8125rem]">
                                                <div className="col-span-12 md:col-span-6 rounded-md border border-defaultborder/10 p-3"><span className="text-[#8c9097] dark:text-white/50">Customer</span><p className="mb-0 mt-1 font-semibold text-defaulttextcolor dark:text-white">{selectedCollection.name}</p></div>
                                                <div className="col-span-12 md:col-span-6 rounded-md border border-defaultborder/10 p-3"><span className="text-[#8c9097] dark:text-white/50">Provider</span><p className="mb-0 mt-1 font-semibold text-defaulttextcolor dark:text-white">{selectedCollection.sales}</p></div>
                                                <div className="col-span-12 md:col-span-6 rounded-md border border-defaultborder/10 p-3"><span className="text-[#8c9097] dark:text-white/50">Amount</span><p className="mb-0 mt-1 font-semibold text-defaulttextcolor dark:text-white">{selectedCollection.price}</p></div>
                                                <div className="col-span-12 md:col-span-6 rounded-md border border-defaultborder/10 p-3"><span className="text-[#8c9097] dark:text-white/50">Status</span><p className="mb-0 mt-1 font-semibold text-defaulttextcolor dark:text-white">{selectedCollection.status}</p></div>
                                                <div className="col-span-12 rounded-md border border-defaultborder/10 p-3"><span className="text-[#8c9097] dark:text-white/50">Message</span><p className="mb-0 mt-1 leading-relaxed text-defaulttextcolor dark:text-white">{selectedCollection.text}</p></div>
                                            </div>
                                            <div className="mt-5 flex justify-end">
                                                <button type="button" className="ti-btn bg-primary text-white" onClick={() => setSelectedCollection(null)}>Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div>
                                    Showing {filteredTableRows.length === 0 ? 0 : (currentPage - 1) * OVERVIEW_PAGE_SIZE + 1} to {Math.min(currentPage * OVERVIEW_PAGE_SIZE, filteredTableRows.length)} of {filteredTableRows.length} Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="ti-pagination mb-0">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <button className="page-link" type="button" onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}>
                                                    Prev
                                                </button>
                                            </li>
                                            {visiblePages.map((page) => (
                                                <li className="page-item" key={page}>
                                                    <button className={`page-link ${currentPage === page ? 'active' : ''}`} type="button" onClick={() => setCurrentPage(page)}>
                                                        {page}
                                                    </button>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                <button className="page-link !text-primary" type="button" onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}>
                                                    next
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Ecommerce