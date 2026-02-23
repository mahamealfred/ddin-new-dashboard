import  {FC, Fragment, useEffect, useMemo, useState } from 'react'
import { Earoptions, Earseries } from '../../../components/ui/data/dashboards/ecommercedata';
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

const Ecommerce: FC<EcommerceProps> = () => {

    const [transactions, setTransactions] = useState<CollectionTransaction[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

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
    const isSuccessStatus = (status?: string) => String(status || '').toLowerCase().includes('success');
    const getStatusCategory = (status?: string): 'active' | 'completed' | 'cancelled' => {
        const normalizedStatus = String(status || '').toLowerCase();

        if (normalizedStatus.includes('success') || normalizedStatus.includes('complete') || normalizedStatus.includes('delivered')) {
            return 'completed';
        }

        if (normalizedStatus.includes('fail') || normalizedStatus.includes('cancel') || normalizedStatus.includes('reject') || normalizedStatus.includes('error')) {
            return 'cancelled';
        }

        return 'active';
    };

    const getInitial = (value?: string) => {
        const cleaned = value?.trim();
        return cleaned ? cleaned.charAt(0).toUpperCase() : '?';
    };

    const formatTransactionDate = (value?: string) => (value ? new Date(value).toLocaleDateString() : '-');

    const analytics = useMemo(() => {
        const totalOrders = transactions.length;
        const totalSalesValue = transactions.reduce((sum, transaction) => sum + parseAmount(transaction.amount), 0);
        const failedValue = transactions
            .filter((transaction) => !isSuccessStatus(transaction.status))
            .reduce((sum, transaction) => sum + parseAmount(transaction.amount), 0);
        const uniqueCustomers = new Set(transactions.map((transaction) => transaction.customerAccountNumber || transaction.customerName || transaction.id)).size;
        const successfulOrders = transactions.filter((transaction) => isSuccessStatus(transaction.status)).length;

        return {
            totalOrders,
            totalSalesValue,
            failedValue,
            uniqueCustomers,
            successfulOrders,
        };
    }, [transactions]);

    const recentTransactions = useMemo(() => {
        return [...transactions]
            .sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime())
            .slice(0, 5);
    }, [transactions]);

    const providerStats = useMemo(() => {
        const grouped = new Map<string, { provider: string; amount: number; count: number }>();

        transactions.forEach((transaction) => {
            const provider = (transaction.provider || 'Unknown').toUpperCase();
            const current = grouped.get(provider) || { provider, amount: 0, count: 0 };
            current.amount += parseAmount(transaction.amount);
            current.count += 1;
            grouped.set(provider, current);
        });

        return Array.from(grouped.values()).sort((a, b) => b.amount - a.amount).slice(0, 5);
    }, [transactions]);

    const topCustomers = useMemo(() => {
        const grouped = new Map<string, { name: string; amount: number; count: number; account: string }>();

        transactions.forEach((transaction) => {
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
    }, [transactions]);

    const tableRows = useMemo<OverviewRow[]>(() => {
        return transactions.map((transaction) => {
            const success = isSuccessStatus(transaction.status);
            return {
                id: transaction.id,
                name: transaction.customerName || 'Unknown Customer',
                productid: transaction.transactionId || transaction.referenceId || String(transaction.id),
                price: `${transaction.currencyCode || 'RWF'} ${parseAmount(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                status: success ? 'Success' : 'Failed',
                color: success ? 'success' : 'danger',
                sales: transaction.provider?.toUpperCase() || 'N/A',
                text: transaction.message || '-',
            };
        });
    }, [transactions]);

    const filteredTableRows = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();
        if (!query) return tableRows;

        return tableRows.filter((row) =>
            row.name.toLowerCase().includes(query) ||
            String(row.productid).toLowerCase().includes(query) ||
            row.sales.toLowerCase().includes(query)
        );
    }, [tableRows, searchTerm]);

    const orderGroups = useMemo(() => {
        const sortedTransactions = [...transactions].sort(
            (a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
        );

        return sortedTransactions.reduce(
            (accumulator, transaction) => {
                const category = getStatusCategory(transaction.status);
                accumulator[category].push(transaction);
                return accumulator;
            },
            {
                active: [] as CollectionTransaction[],
                completed: [] as CollectionTransaction[],
                cancelled: [] as CollectionTransaction[],
            }
        );
    }, [transactions]);

    const collectionBreakdown = useMemo(() => {
        const firstHalf = transactions
            .filter((transaction) => {
                const date = transaction.createdAt ? new Date(transaction.createdAt) : null;
                return date ? date.getDate() <= 15 : false;
            })
            .reduce((sum, transaction) => sum + parseAmount(transaction.amount), 0);

        const secondHalf = transactions
            .filter((transaction) => {
                const date = transaction.createdAt ? new Date(transaction.createdAt) : null;
                return date ? date.getDate() > 15 : false;
            })
            .reduce((sum, transaction) => sum + parseAmount(transaction.amount), 0);

        const topProvider = providerStats[0]?.provider || 'N/A';
        const topProviderAmount = providerStats[0]?.amount || 0;

        return {
            firstHalf,
            secondHalf,
            topProvider,
            topProviderAmount,
        };
    }, [transactions, providerStats]);

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
                            <SpkEcommerceCards title="Unique Customers" svg={<><svg xmlns="http://www.w3.org/2000/svg" className="svg-white success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></>} 
                            ratio={analytics.uniqueCustomers.toLocaleString()} text={`+${analytics.uniqueCustomers} customers`} color="success" />
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
                                                            <span className={`font-semibold ${isSuccessStatus(transaction.status) ? 'text-success' : 'text-danger'}`}>
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
                                                Active Orders
                                            </SpkButton>
                                            <SpkButton customClass="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " Id="completed-item" Tab="#completed" Controls="completed">
                                                Completed
                                            </SpkButton>
                                            <SpkButton customClass="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " Id="cancelled-item" Tab="#cancelled" Controls="cancelled">
                                                Cancelled
                                            </SpkButton>
                                        </nav>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="tab-content">
                                        <div className="tab-pane show active text-[#8c9097] dark:text-white/50 !border-0 !p-0" id="taskactive"
                                            role="tabpanel">
                                            <div className="table-responsive overflow-auto">
                                                <Spktables tableClass="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full" tBodyClass='active-tab'>
                                                        {orderGroups.active.map((transaction) => (
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
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 font-semibold">
                                                                            {parseAmount(transaction.amount).toLocaleString(undefined, { maximumFractionDigits: 2 })} {transaction.currencyCode || 'RWF'}
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
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
                                            <div className="table-responsive overflow-auto">
                                                <Spktables tableClass="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full" tBodyClass='active-tab'>
                                                        {orderGroups.completed.map((transaction) => (
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
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">
                                                                            {parseAmount(transaction.amount).toLocaleString(undefined, { maximumFractionDigits: 2 })} {transaction.currencyCode || 'RWF'}
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-success">Delivered On</span>
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
                                            <div className="table-responsive overflow-auto">
                                                <Spktables tableClass="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full" tBodyClass='active-tab'>
                                                        {orderGroups.cancelled.map((transaction) => (
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
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">
                                                                            {parseAmount(transaction.amount).toLocaleString(undefined, { maximumFractionDigits: 2 })} {transaction.currencyCode || 'RWF'}
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-danger">Cancelled Date</span>
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
                                            <div className="mb-1 earning first-half ms-4">Day 1-15</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">{collectionBreakdown.firstHalf.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <SpkBadge variant="success/10" customClass="text-success !px-1 !py-2 text-[0.625rem]">{orderGroups.completed.length} completed</SpkBadge></span>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning top-gross ms-4">Top Provider</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">{collectionBreakdown.topProviderAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <SpkBadge variant="success/10" customClass="text-success !px-1 !py-2 text-[0.625rem]">{collectionBreakdown.topProvider}</SpkBadge></span>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning second-half ms-3">Day 16-31</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">{collectionBreakdown.secondHalf.toLocaleString(undefined, { maximumFractionDigits: 2 })} RWF</span>
                                                <span className="text-danger"><i className="fa fa-caret-up mx-1"></i>
                                                    <SpkBadge variant="danger/10" customClass="text-danger !px-1 !py-2 text-[0.625rem]">{orderGroups.cancelled.length} failed</SpkBadge></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="earnings">
                                        <ApexchartsComponent chartOptions={Earoptions} chartSeries={Earseries} type="bar" height={200} />
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
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" onChange={(ele) => { myfunction(ele.target.value); }}
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
                                <Spktables tableClass="table min-w-full whitespace-nowrap table-hover border table-bordered" tableRowclass="border border-inherit border-solid  dark:border-defaultborder/10" 
                                            header={[{title:'Customer', headerClassname:'!text-start'}, {title:'Reference', headerClassname:'!text-start'}, 
                                                {title:'Amount', headerClassname:'!text-start'}, {title:'Status', headerClassname:'!text-start'},{title:'Provider', headerClassname:'!text-start'},
                                                {title:'Message', headerClassname:'!text-start'} ]}>
                                        {filteredTableRows.map((idx) => (
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
                                                    <span className="">{idx.text}</span>
                                                </td>
                                            </tr>
                                        ))}
                                </Spktables>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div>
                                    Showing {filteredTableRows.length} Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
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
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Ecommerce