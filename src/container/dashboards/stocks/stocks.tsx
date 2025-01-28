import  {FC, Fragment } from 'react'
import {Amountoptions, Amountseries, Capoptions, Capseries, Investoptions, Investseries, marketdata, Marketmoversdata, Portoptions, Portseries, Rateoptions, Rateseries, Stateoptions, Stateseries, Stocksdata, Transactiondata} from "../../../components/ui/data/dashboards/stocksdata";
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import SpkTrendingstockcards from '../../../@spk/dashboards/spk-trendingstockcards';
import SpkStockscards from '../../../@spk/dashboards/spk-stockcards';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import Spktables from '../../../@spk/tables/spk-tables';
import SpkButton from '../../../@spk/uielements/spk-button';

interface StocksProps {}

const Stocks: FC<StocksProps> = () => {
    // const singleStockItem = {
    //     title: "Sample Stock",
    //     ratio: "12%",
    //     text: "Positive Growth",
    //     increment: "+5%",
    //     icon: "ti-icon-sample",
    //     customClass: "custom-card-class",
    //     customBodyClass: "custom-body-class",
    //     avatarclass: "custom-avatar-class",
    //   };
    return (
        <Fragment>
            <Pageheader currentpage="Stocks" activepage="Dashboards" mainpage="Stocks" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12  col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="md:flex block flex-wrap items-center justify-between">
                                <div className="flex-grow">
                                    <nav className="nav nav-pills nav-style-3 flex md:mb-0 mb-4" aria-label="Tabs" role="tablist">
                                        <Link to="#" className="nav-link text-defaulttextcolor !py-[0.35rem] !px-4 text-sm !font-medium text-center rounded-md hover:text-primary active" id="portfolio-item" data-hs-tab="#Stocksportfolio" aria-controls="Stocksportfolio">
                                            Portfolio
                                        </Link>
                                        <Link to="#" className="nav-link text-defaulttextcolor !py-[0.35rem] !px-4 text-sm !font-medium text-center rounded-md hover:text-primary" id="market-item" data-hs-tab="#Stocksmarket" aria-controls="Stocksmarket">
                                            Market
                                        </Link>
                                    </nav>
                                </div>
                                <div className="flex flex-wrap items-center md:mt-0 justify-evenly gap-6">
                                    <div className="md:text-end">
                                        <span className="block font-semibold">Total Value</span>
                                        <span className="!text-primary">$8.89k</span>
                                    </div>
                                    <div className="md:text-end">
                                        <span className="block font-semibold">Market Value</span>
                                        <span className="!text-warning">$15.9k</span>
                                    </div>
                                    <div className="md:text-end">
                                        <span className="block font-semibold">Yield</span>
                                        <span className="!text-danger">3.4%</span>
                                    </div>
                                    <div className="md:text-end">
                                        <span className="block font-semibold">Dividend</span>
                                        <span className="!text-info">$1.3k</span>
                                    </div>
                                    <div className="md:text-end">
                                        <span className="block font-semibold">Gain</span>
                                        <span className="!text-success">$116</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="tab-content">
                        <div className="tab-pane show active !p-0 !border-0" id="Stocksportfolio" aria-labelledby="portfolio-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-3 sm:col-span-6 col-span-12">
                                    <SpkStockscards Id="total-invested" options={Amountoptions} series={Amountseries} title='Total amount Invested' Icon="wallet" Value='$23,8998.99' Color='primary' />
                                </div>
                                <div className="xl:col-span-3 sm:col-span-6 col-span-12">
                                    <SpkStockscards Id="total-investments" options={Investoptions} series={Investseries} title='No Of Investments' Icon="arrow-big-up-line"  Value='116' Color='secondary' />
                                </div>
                                <div className="xl:col-span-3 sm:col-span-6 col-span-12">
                                    <SpkStockscards Id="portfolio-value" options={Portoptions} series={Portseries} title='Portfolio Value'  Icon="wallet" Value='$12,920.20' Color='warning' />
                                </div>
                                <div className="xl:col-span-3 sm:col-span-6 col-span-12">
                                    <SpkStockscards Id="returns-rate" options={Rateoptions} series={Rateseries} title='Returns Rate' Icon="wallet"  Value='+12.08%' Color='success' />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-8 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title mb-2 sm:mb-0">
                                                Total Investments
                                            </div>
                                            <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                                <SpkButton buttontype="button"
                                                    variant="primary-full" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3  !text-white">1D</SpkButton>
                                                <SpkButton buttontype="button"
                                                    variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3">1W</SpkButton>
                                                <SpkButton buttontype="button"
                                                    variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3">1M</SpkButton>
                                                <SpkButton buttontype="button"
                                                    variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3">3M</SpkButton>
                                                <SpkButton buttontype="button"
                                                    variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3">6M</SpkButton>
                                                <SpkButton buttontype="button"
                                                    variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3 !rounded-s-none">1Y</SpkButton>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                                <div className="flex flex-wrap flex-grow gap-3 sm:ms-[3rem] ms-0">
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50 mb-1">Invested Value</span>
                                                        <span className="block font-semibold">$1,290.94<span className="text-success ms-1 text-[0.75rem]"><i className="ti ti-chevron-up"></i>1.22%</span></span>
                                                    </div>
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50 mb-1">Total Returns</span>
                                                        <span className="block font-semibold">$25,458.20<span className="text-success ms-1 text-[0.75rem]"><i className="ti ti-chevron-up"></i>10.14%</span></span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-3 text-end">
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50 mb-1">Today Change</span>
                                                        <span className="block font-semibold">$112.09</span>
                                                    </div>
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50 mb-1">Change In %</span>
                                                        <span className="block font-semibold">+0.01%<span className="text-success ms-1 text-[0.75rem]"><i className="ti ti-chevron-up"></i>0.21%</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="totalInvestmentsStats">
                                                <ApexchartsComponent chartOptions={Stateoptions} chartSeries={Stateseries} type="area" height={320} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                My Stocks
                                            </div>
                                            <div className="flex items-center flex-wrap gap-2">
                                                <input className="ti-form-control form-control-sm" type="text" placeholder="Search Any Stock" aria-label=".form-control-sm example" />
                                                <SpkDropdown Customclass="!py-0 !mt-0 !mb-0" Linktag={false} Toggletext="Sort By" arialexpand={false} Arrowicon={true}
                                                    CustomToggleclass="ti-btn ti-btn-primary !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium !mb-0" >
                                                          <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem]  !text-[0.8125rem] !font-medium block"
                                                            to="#">New</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Popular</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Relevant</Link></li>
                                                </SpkDropdown>
                                            </div>
                                        </div>
                                        <div className="box-body !p-0">
                                            <ul className="list-none my-stocks-ul mb-0">
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-github text-black dark:text-white text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">GTHB (Gituhb, Demo Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">16 Shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $12,390.02
                                                            </span>
                                                            <span className="block text-success"><i className="ti ti-arrow-narrow-up"></i>0.14%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star-fill text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="ri-twitter-x-line text-info text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">TTR (Twiter.com, Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">289 Shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $15,526.01
                                                            </span>
                                                            <span className="block text-success"><i className="ti ti-arrow-narrow-up"></i>2.14%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-bootstrap-fill text-primary text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">BS (Boostrap, Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">325 shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $30,500.15
                                                            </span>
                                                            <span className="block text-danger"><i className="ti ti-arrow-narrow-down"></i>2.73%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star-fill text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-windows text-success text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">MS (Micorsoft, Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">1,523 shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $1,80,520.02
                                                            </span>
                                                            <span className="block text-success"><i className="ti ti-arrow-narrow-up"></i>8.63%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-apple text-warning text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">AAPL (Appil, Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">30 shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $21,093.20
                                                            </span>
                                                            <span className="block text-danger"><i className="ti ti-arrow-narrow-down"></i>4.10%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star-fill text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-currency-bitcoin text-danger text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">Bitcoin (Bioset Coin, Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">118 shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $14,245.23
                                                            </span>
                                                            <span className="block text-success"><i className="ti ti-arrow-narrow-up"></i>0.79%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star-fill text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-12 col-span-12">
                                    <h6 className="font-semibold dark:text-defaulttextcolor/70 mb-4 text-[1rem]">
                                        Trending Stocks :
                                    </h6>
                                    <div className="grid grid-cols-12 gap-x-6">
                                        {Stocksdata.map((element)=>(
                                            <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={element.id}>
                                                <SpkTrendingstockcards stockItem={element} customBodyClass="!p-0"  customClass="p-4 border dark:border-defaultborder/10 bg-white rounded"
                                                 avatarclass="avatar-rounded bg-light p-2 !mb-0" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-5 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Transaction History
                                            </div>
                                            
                                            <SpkDropdown Customclass="!py-0 !mt-0 !mb-0" Linktag={true} Toggletext="All" arialexpand={false} Arrowicon={true}
                                                    Linkclass="ti-btn ti-btn-primary !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium" >
                                                       <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">Buy</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">Sell</Link></li>
                                            </SpkDropdown>
                                        </div>
                                        <div className="box-body">
                                            <div className="table-responsive">
                                                <Spktables tableClass="table whitespace-nowrap table-bordered border-primary/10 min-w-full" 
                                                   header={[{title:'Symbol', headerClassname:'text-start'}, {title:'Date', headerClassname:'text-start'}, 
                                                    {title:'Type', headerClassname:'text-start'}, {title:'Amount', headerClassname:'text-start'},{title:'Shares', headerClassname:'text-start'} ]}>
                                                        {Transactiondata.map((idx)=>(
                                                            <tr className="border border-inherit border-solid dark:border-defaultborder/10" key={Math.random()}>
                                                                <th scope="row" className="text-start">
                                                                    EPA:{idx.symbol}
                                                                </th>
                                                                <td>
                                                                    {idx.date}
                                                                </td>
                                                                <td>
                                                                    <SpkBadge variant={idx.color} customClass="text-white">{idx.type}</SpkBadge>
                                                                </td>
                                                                <td>
                                                                    <span className={`text-${idx.amount.includes('+')?'success':'danger' }`}>{idx.amount}</span>
                                                                </td>
                                                                <td>
                                                                    <span className={`text-${idx.shares.includes('+')?'success':'danger' }`}>{idx.shares}</span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </Spktables>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-7 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Market Movers
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <div className="me-2">
                                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Any Stock" aria-label=".form-control-sm example" />
                                                </div>
                                            <SpkDropdown Customclass="" Linktag={true} Toggletext="Sort By" arialexpand={false} Arrowicon={true}
                                                    Linkclass="ti-btn ti-btn-primary !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium" >
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
                                            <div className="table-responsive">
                                                <Spktables tableClass="table whitespace-nowrap table-bordered border-primary/10 min-w-full"
                                                     header={[{title:'Symbol', headerClassname:'text-start'}, {title:'Name', headerClassname:'text-start'}, 
                                                    {title:'Price', headerClassname:'text-start'}, {title:'1D Change', headerClassname:'text-start'},
                                                    {title:'1D Return %', headerClassname:'text-start'}, {title:'Volume', headerClassname:'text-start'} ]}>
                                                        {Marketmoversdata.map((idx)=>(
                                                            <tr className="border border-inherit border-solid dark:border-defaultborder/10" key={Math.random()}>
                                                                <th scope="row" className="text-start">
                                                                    {idx.symbol}
                                                                </th>
                                                                <td>
                                                                    {idx.name}<span className="font-normal text-primary text-[.625rem] ms-1">{idx.nametext}</span>
                                                                </td>
                                                                <td>
                                                                    <span>{idx.price}</span>
                                                                </td>
                                                                <td>
                                                                    <span className={`text-${idx.color}`}>{idx.change}<i className={`ti ti-arrow-${idx.color === "success"? "bear-right":"narrow-down" } `}></i></span>
                                                                </td>
                                                                <td>
                                                                    <span className={`text-${idx.color}`}>{idx.return}</span>
                                                                </td>
                                                                <td>
                                                                    {idx.volume}
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
                        <div className="tab-pane hidden !p-0 !border-0" id="Stocksmarket" aria-labelledby="market-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-x-6">
                                {marketdata.map((idx)=>(
                                    <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}>
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className={`avatar bg-${idx.iconColor}/10 !text-${idx.iconColor}`}>
                                                                <i className={`ti ti-trending-${idx.icon} text-[1.125rem]`}></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block font-semibold">{idx.name}</span>
                                                            <span className="block">{idx.money}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger text-[0.75rem]">
                                                        <span className="block">{idx.percentage}</span>
                                                        <span className="block">{idx.count}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Market Cap
                                            </div>
                                            <div>
                                                <input className="ti-form-control form-control-sm" type="text" placeholder="Search Any Stock Here" aria-label=".form-control-sm example" />
                                            </div>
                                        </div>
                                        <div className="box-body !p-0">
                                            <div className="grid grid-cols-12 gap-x-6">
                                                <div className="xl:col-span-7 col-span-12 border-e dark:border-defaultborder/10">
                                                    <div className="p-4">
                                                        <div className="flex flex-wrap items-center justify-between">
                                                            <div className="flex flex-grow gap-3 ms-[3rem]">
                                                                <div>
                                                                    <h5 className="font-semibold text-primary text-[1.25rem] mb-1">$12,390.02<span className="text-[0.75rem] ms-1 text-danger">0.14%<i className="ti ti-trending-down ms-1"></i></span></h5>
                                                                    <span className="block text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]"><span className="text-danger me-1">-89.75</span>. Today</span>
                                                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Jun 17, 2023  11:25 AM  UTC +5:30</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex text-end">
                                                                <div>
                                                                    <h6 className="font-semibold text-[1rem] mb-2">GITUHB</h6>
                                                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] mb-1">GTHB  INDEXNSE</span>
                                                                    <span className="block"><Link to="#" className="text-primary font-semibold">+ Compare</Link></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="stocks-marketcap">
                                                            <ApexchartsComponent chartOptions={Capoptions} chartSeries={Capseries} type="candlestick" height={350} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="xl:col-span-5 col-span-12">
                                                    <div className="p-4 xl:!ps-0 overflow-x-auto">
                                                        <div className="table-responsive mb-[3rem]">
                                                            <Spktables tableClass="table whitespace-nowrap table-borderless !text-[#8c9097] dark:text-white/50 min-w-full table-sm">
                                                                    <tr className="text-start">
                                                                        <th scope="row">Open</th>
                                                                        <td>125.80</td>
                                                                        <td>Volume</td>
                                                                        <td>1,253.20</td>
                                                                    </tr>
                                                                    <tr className="text-start">
                                                                        <th scope="row">High</th>
                                                                        <td>352.15</td>
                                                                        <td>Avg. Volume</td>
                                                                        <td>1.05M</td>
                                                                    </tr>
                                                                    <tr className="text-start">
                                                                        <th scope="row">Low</th>
                                                                        <td>120.13</td>
                                                                        <td>52 Week High</td>
                                                                        <td>2569.25</td>
                                                                    </tr>
                                                                    <tr className="text-start">
                                                                        <th scope="row">Dividend Yield</th>
                                                                        <td>3.5%</td>
                                                                        <td>52 Week Low</td>
                                                                        <td>1586.20</td>
                                                                    </tr>
                                                                    <tr className="text-start">
                                                                        <th scope="row">P/E Ratio</th>
                                                                        <td>25%</td>
                                                                        <td>Market Cap</td>
                                                                        <td>2.15Cr</td>
                                                                    </tr>
                                                            </Spktables>
                                                        </div>
                                                        <div>
                                                            <h6 className="font-semibold mb-2 text-[1rem]">
                                                                Market Depth:
                                                            </h6>
                                                            <div className="grid grid-cols-12 gap-x-6">
                                                                <div className="xl:col-span-6  col-span-12">
                                                                    <div className="table-responsive">
                                                                        <Spktables tableClass="table whitespace-nowrap table-sm text-center table-borderless text-[#8c9097] dark:text-white/70 min-w-full"
                                                                             header={[{title:'Qty', headerClassname:'text-start'}, {title:'Orders', headerClassname:'text-start'}, 
                                                                            {title:'Bid', headerClassname:'text-start'} ]}tableRowclass="!text-defaulttextcolor" headerClass="text-default" >
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-success">20</span>
                                                                                    </th>
                                                                                    <td>2</td>
                                                                                    <td>$12,908</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-success">12</span>
                                                                                    </th>
                                                                                    <td>1</td>
                                                                                    <td>$20,632</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-success">36</span>
                                                                                    </th>
                                                                                    <td>1</td>
                                                                                    <td>$19,102</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-success">10</span>
                                                                                    </th>
                                                                                    <td>3</td>
                                                                                    <td>$16,650</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-success">15</span>
                                                                                    </th>
                                                                                    <td>2</td>
                                                                                    <td>$18,850</td>
                                                                                </tr>
                                                                        </Spktables>
                                                                    </div>
                                                                </div>
                                                                <div className="xl:col-span-6  col-span-12">
                                                                    <div className="table-responsive mb-3">
                                                                        <Spktables tableClass="table whitespace-nowrap table-sm text-center table-borderless !text-[#8c9097] dark:text-white/50 min-w-full"
                                                                           header={[{title:'Qty', headerClassname:'text-start'}, {title:'Orders', headerClassname:'text-start'}, 
                                                                            {title:'Bid', headerClassname:'text-start'} ]} tableRowclass="!text-defaulttextcolor" headerClass="text-default">
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-danger">20</span>
                                                                                    </th>
                                                                                    <td>2</td>
                                                                                    <td>$12,908</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-danger">12</span>
                                                                                    </th>
                                                                                    <td>1</td>
                                                                                    <td>$20,632</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-danger">36</span>
                                                                                    </th>
                                                                                    <td>1</td>
                                                                                    <td>$19,102</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-danger">10</span>
                                                                                    </th>
                                                                                    <td>3</td>
                                                                                    <td>$16,650</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-danger">15</span>
                                                                                    </th>
                                                                                    <td>2</td>
                                                                                    <td>$18,850</td>
                                                                                </tr>
                                                                        </Spktables>
                                                                    </div>
                                                                    <div className="flex gap-3">
                                                                        <SpkButton buttontype="button" Size="sm" customClass="flex-grow ti-btn bg-primary text-white">Buy</SpkButton>
                                                                        <SpkButton buttontype="button" Size="sm" customClass="flex-grow ti-btn bg-secondary text-white me-3">Sell</SpkButton>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Stocks