import  { FC, Fragment, useState, useMemo } from 'react';
import { Tabledata,  Transactionoptions, Transactionseries } from '../../../../components/ui/data/apps/crypto/transactiondata'
import CountUp from "react-countup";
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';
import Spktables from '../../../../@spk/tables/spk-tables';
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import SpkButton from '../../../../@spk/uielements/spk-button';
import SpkOverlay from '../../../../@spk/uielements/spk-overlay';
import DateRangeFilter from '../../../../components/common/date-range-filter/DateRangeFilter';
import SpkEcharts from '../../../../@spk/spk-packages/spk-echart';
import { EChartsOption } from 'echarts';

interface TransactionsProps {}

const Transactions: FC<TransactionsProps> = () => {

    const [allData, setAllData] = useState(Tabledata);
    const [originalData, setOriginalData] = useState(Tabledata); // Store original data
    const [startDate, setStartDate] = useState<string>('');
    const [, setEndDate] = useState<string>('');
    const [selectedPeriod, setSelectedPeriod] = useState<string>('month');

    function handleRemove(id: number) {
        const newList = allData.filter((item) => item.id !== id);
        setAllData(newList);
        setOriginalData(originalData.filter((item) => item.id !== id)); // Update original data
    }

    const allElement2:any = [];
    const myfunction = (InputData: string) => {
        const filteredData = originalData.slice(); // Make a copy of original data
        for (const element of filteredData) {
            if (element.name[0] === " ") {
                element.name = element.name.trim();
            }
            if (element.name.toLowerCase().includes(InputData.toLowerCase())) {
                if (element.name.toLowerCase().startsWith(InputData.toLowerCase())) {
                    allElement2.push(element);
                }
            }
        }
        setAllData(allElement2);
        if (InputData.trim() === "") {
            setAllData(originalData); // Revert to original data if search input is empty
        }
    };

    // Generate transaction analytics
    const transactionAnalytics = useMemo(() => {
        const days = selectedPeriod === 'today' ? 1 : selectedPeriod === 'week' ? 7 : 30;
        const data = [];
        const today = new Date();
        
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            
            data.push({
                date: date.toISOString().split('T')[0],
                completed: Math.floor(Math.random() * 50) + 10,
                pending: Math.floor(Math.random() * 20) + 5,
                failed: Math.floor(Math.random() * 15) + 2,
                amount: Math.floor(Math.random() * 100000) + 20000,
            });
        }
        
        return data;
    }, [selectedPeriod]);

    // Calculate summary
    const summary = useMemo(() => ({
        totalTransactions: transactionAnalytics.reduce((sum, d) => sum + d.completed + d.pending + d.failed, 0),
        completedCount: transactionAnalytics.reduce((sum, d) => sum + d.completed, 0),
        pendingCount: transactionAnalytics.reduce((sum, d) => sum + d.pending, 0),
        failedCount: transactionAnalytics.reduce((sum, d) => sum + d.failed, 0),
        totalAmount: transactionAnalytics.reduce((sum, d) => sum + d.amount, 0),
        successRate: ((transactionAnalytics.reduce((sum, d) => sum + d.completed, 0) / transactionAnalytics.reduce((sum, d) => sum + d.completed + d.pending + d.failed, 0)) * 100).toFixed(2),
    }), [transactionAnalytics]);

    // Chart: Transaction Status Overview
    const statusChartOptions: EChartsOption = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: { color: '#fff' },
        },
        xAxis: {
            type: 'category',
            data: transactionAnalytics.map(d => d.date),
            axisLine: { lineStyle: { color: '#e0e6ed' } },
            axisLabel: { fontSize: 11, color: '#8c9097' },
        },
        yAxis: {
            type: 'value',
            name: 'Transactions',
            axisLine: { lineStyle: { color: '#e0e6ed' } },
            splitLine: { lineStyle: { color: '#f0f0f0' } },
            axisLabel: { fontSize: 11, color: '#8c9097' },
        },
        grid: { left: '3%', right: '4%', bottom: '12%', top: '10%', containLabel: true },
        series: [
            {
                name: 'Completed',
                data: transactionAnalytics.map(d => d.completed),
                type: 'bar',
                itemStyle: { color: '#00ba34' },
                stack: 'transactions',
            },
            {
                name: 'Pending',
                data: transactionAnalytics.map(d => d.pending),
                type: 'bar',
                itemStyle: { color: '#ffc233' },
                stack: 'transactions',
            },
            {
                name: 'Failed',
                data: transactionAnalytics.map(d => d.failed),
                type: 'bar',
                itemStyle: { color: '#dc3545' },
                stack: 'transactions',
            },
        ],
        legend: {
            data: ['Completed', 'Pending', 'Failed'],
            bottom: 0,
            textStyle: { color: '#8c9097' },
        },
    };

    // Chart: Transaction Amount Trend
    const amountChartOptions: EChartsOption = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: { color: '#fff' },
        },
        xAxis: {
            type: 'category',
            data: transactionAnalytics.map(d => d.date),
            axisLine: { lineStyle: { color: '#e0e6ed' } },
            axisLabel: { fontSize: 11, color: '#8c9097' },
        },
        yAxis: {
            type: 'value',
            name: 'Amount (RWF)',
            axisLine: { lineStyle: { color: '#e0e6ed' } },
            splitLine: { lineStyle: { color: '#f0f0f0' } },
            axisLabel: { fontSize: 11, color: '#8c9097' },
        },
        grid: { left: '3%', right: '4%', bottom: '12%', top: '10%', containLabel: true },
        series: [
            {
                data: transactionAnalytics.map(d => d.amount),
                type: 'line',
                smooth: true,
                lineStyle: { width: 2, color: '#3563eb' },
                itemStyle: { color: '#3563eb' },
                areaStyle: { color: 'rgba(53, 99, 235, 0.1)' },
            },
        ],
    };

    // Chart: Success Rate Pie
    const successRateData = [
        { value: summary.completedCount, name: 'Completed' },
        { value: summary.pendingCount, name: 'Pending' },
        { value: summary.failedCount, name: 'Failed' },
    ];

    const successRateChartOptions: EChartsOption = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
                data: successRateData,
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
            },
        ],
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
            <Pageheader currentpage="Transactions" activepage="Crypto" mainpage="Transactions" />
            
            {/* Date Range Filter */}
            <DateRangeFilter
                onDateChange={handleDateChange}
                onPeriodChange={handlePeriodChange}
            />

            {/* Transaction Analytics Summary Cards */}
            <div className="grid grid-cols-12 gap-x-6 mb-6">
                <div className="xl:col-span-3 lg:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Total Transactions</p>
                                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {summary.totalTransactions.toLocaleString()}
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
                                        {summary.completedCount.toLocaleString()}
                                    </h4>
                                    <p className="text-xs text-success mt-2">
                                        <i className="ri-check-line"></i> Success Rate: {summary.successRate}%
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
                                        {summary.pendingCount.toLocaleString()}
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
                                        {summary.failedCount.toLocaleString()}
                                    </h4>
                                    <p className="text-xs text-danger mt-2">
                                        <i className="ri-close-line"></i> Requires Action
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

            {/* Advanced Analytics Charts */}
            <div className="grid grid-cols-12 gap-x-6 mb-6">
                <div className="xl:col-span-8 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Transaction Status Overview</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Period: {startDate || 'Last 30 days'}</div>
                        </div>
                        <div className="box-body">
                            <SpkEcharts
                                chartOptions={statusChartOptions}
                                chartSeries={[]}
                                height={300}
                                mainClass="w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Status Distribution</div>
                        </div>
                        <div className="box-body">
                            <SpkEcharts
                                chartOptions={successRateChartOptions}
                                chartSeries={[]}
                                height={300}
                                mainClass="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction Amount Trend */}
            <div className="grid grid-cols-12 gap-x-6 mb-6">
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Transaction Amount Trend</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Period: {startDate || 'Last 30 days'}</div>
                        </div>
                        <div className="box-body">
                            <SpkEcharts
                                chartOptions={amountChartOptions}
                                chartSeries={[]}
                                height={300}
                                mainClass="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Original Transaction Table and Sidebar */}
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Transaction History
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" onChange={(ele) => { myfunction(ele.target.value); }} />
                                </div>
                                <SpkDropdown Arrowicon={true} Toggletext="Sort By" Customclass="" arialexpand={false} CustomToggleclass="ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem] waves-effect waves-light" >
                                        <li><Link className="ti-dropdown-item" to="#">New</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">This Week</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">This Month</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">This Year</Link></li>
                                </SpkDropdown>
                                <div>
                                    <SpkButton variant="secondary-full" buttontype="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] btn-wave">View All</SpkButton>
                                </div>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                    <Spktables tableClass='table whitespace-nowrap min-w-full table-bordered' header={[{headerClassname:"", title:''},{headerClassname:"text-start", title:'Sender'},{headerClassname:"text-start", title:'Transaction Hash'},{headerClassname:"text-start", title:'Coin'},{headerClassname:"text-start", title:'Date'},{headerClassname:"text-start", title:'Amount'},{headerClassname:"text-start", title:'Receiver'},{headerClassname:"text-start", title:'Status'},{headerClassname:"text-start", title:'Actions'}]} >
                                        {allData.map((idx) => (
                                            <tr className="border border-defaultborder transaction" key={Math.random()}>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className={`ti ti-arrow-narrow-${idx.class} text-${idx.color1} font-semibold text-[1rem]`}></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={idx.src1} alt="" />
                                                        </span>
                                                        <div className="font-semibold">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#{idx.cell}</span>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={idx.src2} alt="" />
                                                        </span>
                                                        <div className="font-semibold">{idx.coin}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>{idx.date}</span>
                                                </td>
                                                <td>
                                                    <span className={`text-${idx.color1}`}>{idx.amount}</span>
                                                </td>
                                                <td>
                                                    <span>{idx.text1}</span>
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.color2}/10`} customClass={`text-${idx.color2}`}>{idx.text2}</SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkOverlay customClass="">
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="hs-tooltip-toggle me-2 ti-btn">
                                                            <span><i className="ri-download-2-line"></i></span>
                                                            <span
                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                role="tooltip">
                                                                Download
                                                            </span>
                                                        </SpkButton>
                                                    </SpkOverlay>
                                                    <SpkOverlay customClass="">
                                                        <SpkButton buttontype="button" variant="danger" Size="sm" customClass="ti-btn hs-tooltip-toggle transaction-delete-btn">
                                                            <span onClick={() => handleRemove(idx.id)}><i className="ri-delete-bin-5-line"></i></span>
                                                            <span
                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                role="tooltip">
                                                                Delete
                                                            </span>
                                                        </SpkButton>
                                                    </SpkOverlay>
                                                </td>
                                            </tr>
                                        ))}
                                        </Spktables>
                            </div>
                        </div>
                        <div className="box-footer">
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination sm:ltr:float-right sm:rtl:float-left justify-center mb-4">
                                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem] active" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                        <div className="box custom-box">
                            <div className="box-body !p-0">
                                <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start flex-wrap gap-2">
                                    <div className="svg-icon-background bg-primary/10 fill-primary me-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="svg-primary"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" /></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h6 className="mb-2 !text-[0.75rem] !font-medium">New Transactions
                                            <SpkBadge variant="primary" customClass=" text-white font-semibold ltr:float-right rtl:float-left">
                                                12,345
                                            </SpkBadge>
                                        </h6>
                                        <div className="pb-0 mt-0">
                                            <div>
                                                <h4 className="text-[1.125rem] font-semibold mb-2"><span className="count-up" data-count="42"> <CountUp
                                                    end={43}
                                                    start={0}
                                                    duration={4.94}
                                                /></span><span className="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                                <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                                    <span className="text-success me-1 font-semibold inline-flex">
                                                        <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                    </span>
                                                    <span>this month</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10 border-dashed flex items-start flex-wrap gap-2">
                                    <div className="svg-icon-background bg-success/10 fill-success me-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg-success"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" /></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h6 className="mb-2 !text-[0.75rem] !font-medium">Completed Transactions
                                            <SpkBadge variant="success" customClass=" text-white font-semibold ltr:float-right rtl:float-left">
                                                4,176
                                            </SpkBadge>
                                        </h6>
                                        <div>
                                            <h4 className="text-[1.125rem] font-semibold mb-2"><span className="count-up" data-count="319"> <CountUp
                                                end={320}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                            <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                                <span className="text-danger me-1 font-semibold inline-flex">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start p-4 border-b dark:border-defaultborder/10 border-dashed flex-wrap gap-2">
                                    <div className="svg-icon-background bg-warning/10 !fill-warning me-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-warning"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h6 className="mb-2 !text-[0.75rem] !font-medium">Pending Transactions
                                            <SpkBadge variant="warning" customClass="text-white font-semibold ltr:float-right rtl:float-left">
                                                7,064
                                            </SpkBadge>
                                        </h6>
                                        <div>
                                            <h4 className="text-[1.125rem] font-semibold mb-2"><span className="count-up" data-count="81"> <CountUp
                                                end={81}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                            <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                                <span className="text-success me-1 font-semibold inline-flex">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start p-4 border-b dark:border-defaultborder/10 border-dashed flex-wrap gap-2">
                                    <div className="svg-icon-background bg-secondary/10 fill-secondary me-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-secondary"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h6 className="mb-2 !text-[0.75rem] !font-medium">Inprogress Transactions
                                            <SpkBadge variant="secondary" customClass="text-white font-semibold ltr:float-right rtl:float-left">
                                                1,105
                                            </SpkBadge>
                                        </h6>
                                        <div>
                                            <h4 className="text-[1.125rem] font-semibold mb-2"><span className="count-up" data-count="32"> <CountUp
                                                end={33}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                            <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                                <span className="text-success me-1 font-semibFold inline-flex">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pb-2">
                                    <p className="text-[.9375rem] font-semibold">Transactions Statistics <span className="text-[#8c9097] dark:text-white/50 font-normal">(Last 6 months) :</span></p>
                                    <div id="transactions">
                                     <ApexchartsComponent chartOptions={Transactionoptions} chartSeries={Transactionseries} type="bar" height={210} />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Transactions