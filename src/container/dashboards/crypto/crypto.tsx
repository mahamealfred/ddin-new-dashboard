import  {FC, Fragment } from 'react';
import { Selectdata2,Recentactivity, Selectdata1, Statoptions, Statseries, Transactionsdata, TopTraderssdata, Currencymarketvalue, BtcCard, ETHcard, Dashcard } from '../../../components/ui/data/dashboards/cryptodata';
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import bitcoinreg from "../../../assets/images/crypto-currencies/regular/Bitcoin.svg";
import media82 from "../../../assets/images/media/media-82.png";
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import SelectComponent from '../../../@spk/spk-packages/select-component';
import SpkCryptocards from '../../../@spk/dashboards/spk-cryptocards';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import Spktables from '../../../@spk/tables/spk-tables';
import SpkButton from '../../../@spk/uielements/spk-button';

interface CryptoProps {}

const Crypto: FC<CryptoProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Crypto" activepage="Dashboards" mainpage="Crypto" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-12 col-span-12">
                            <SpkCryptocards card={BtcCard}  
                            Id="btc-chart"    />
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-12 col-span-12">
                            <SpkCryptocards card={ETHcard}  Id="eth-chart" />
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-12 col-span-12">
                            <SpkCryptocards card={Dashcard} Id="dash-chart"  />
                        </div>
                        <div className="xxl:col-span-8 xl:col-span-7 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between flex-wrap">
                                    <div className="box-title">
                                        Crypto Statistics
                                    </div>
                                    <div className="inline-flex rounded-md shadow-sm" role="group"
                                        aria-label="Basic example">
                                        <SpkButton buttontype="button"
                                           variant="primary-full" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3 text-white">1D</SpkButton>
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
                                <div className="box-body !p-0">
                                    <div className="flex flex-wrap p-4 border-b border-dashed dark:border-defaultborder/10">
                                        <div className="me-3">
                                            <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                <img src={bitcoinreg}
                                                    alt="" />
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap sm:justify-evenly flex-grow">
                                            <div className="sm:m-0 m-2">
                                                <span>Symbol</span>
                                                <p className="font-semibold mb-0">BTC</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Price Benchmark</span>
                                                <p className="font-semibold mb-0">128.00%</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Price (USD)</span>
                                                <p className="text-success font-semibold mb-0">$4,253.49</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Change (24H)</span>
                                                <p className="text-danger font-semibold mb-0">-0.24%</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Market Cap</span>
                                                <p className="font-semibold mb-0">$179.12B</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="crypto" className="p-4">
                                        <ApexchartsComponent chartOptions={Statoptions} chartSeries={Statseries} type="candlestick" height={266} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-5 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">Recent Transactions</div>
                                    <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass=""  IconClass="fe fe-more-vertical !text-[0.8rem]"
                                        Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Another action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Something else here</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        {Transactionsdata.map((idx)=>(
                                            <li className={idx.class} key={Math.random()}>
                                                <Link to="#">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <img src={idx.img} alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                            <div>
                                                                <p className="mb-0 font-semibold">{idx.title}</p>
                                                                <p className={`mb-0 text-[0.6875rem] text-${idx.text.includes("Buy")? "primary":"success"} font-semibold`}>
                                                                    {idx.text}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 font-semibold">
                                                                {idx.value}
                                                            </p>
                                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                               {idx.btcvalue}
                                                            </p>
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
                <div className="xxl:col-span-3 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div>
                                        <div className="mb-1">Wallet Value
                                            <SpkBadge variant="success/10" customClass="text-[0.625rem] text-success p-1 ms-2"><i
                                                className="ri-arrow-up-s-line align-middle me-1"></i>12.2%</SpkBadge></div>
                                        <div className="text-[1.25rem] font-semibold">$132,12933.000</div>
                                        <small className="text-[#8c9097] dark:text-white/50 font-semibold">12 BTC</small>
                                    </div>
                                    <div className="ms-auto">
                                        <span className="avatar avatar-xxl">
                                            <img className="buy-sell-image" src={media82} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="box-body crypto-data">
                                    <nav className="tab-style-1 sm:flex bg-light p-[0.65rem] rounded-sm mb-4" aria-label="Tabs" role="tablist">
                                        <Link to="#" className="hs-tab-active:bg-primary hs-tab-active:text-white text-defaulttextcolor py-[0.35rem] px-4 flex-grow  text-sm font-medium text-center rounded-md hover:text-primary active" id="buy-crypto" data-hs-tab="#buy-crypto2" >
                                            Buy
                                        </Link>
                                        <Link to="#" className="hs-tab-active:bg-primary hs-tab-active:text-white text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="sell-crypto" data-hs-tab="#sell-crypto2" >
                                            Sell
                                        </Link>
                                    </nav>
                                    <div className="tab-content">
                                        <div className="tab-pane !border-0 show active !p-0" id="buy-crypto2" role="tabpanel">
                                            <div className="input-group mb-4 flex !flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md !border-s !border-e-0"
                                                    aria-label="crypto buy select" placeholder="Select Currency" />
                                              <SelectComponent option={Selectdata1} mainClass='!rounded-e-md' defaultvalue={[Selectdata1[0]]} placeholder="BTC" />
                                            </div>
                                            <div className="input-group mb-4 flex !flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md !border-s !border-e-0"
                                                    aria-label="crypto buy select" placeholder="36,335.00" />
                                                 <SelectComponent option={Selectdata2} mainClass='!rounded-e-md' defaultvalue={[Selectdata2[0]]}/>
                                            </div>
                                            <div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Price:</span><span
                                                        className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.875rem] inline-block">6.003435</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">BTC</span></div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Amount:</span><span
                                                        className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.875rem] inline-block ">2,34,4543.00</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">LTC</span></div>
                                                <div className="font-semibold text-[0.875rem] py-3 dark:text-defaulttextcolor/70">Total: <span
                                                    className="text-[0.875rem] inline-block dark:text-defaulttextcolor/70">22.00 BTC</span></div>
                                                <div className="text-[0.75rem] text-success !mb-3">Additional Charges:
                                                    0.32%(0.0001231 BTC)</div>
                                                <label className="font-semibold text-[0.75rem] !mt-2 !mb-2  dark:text-defaulttextcolor/70">SELECT PAYMENT
                                                    METHOD :</label>
                                                    <div className="sm:grid grid-cols-12 sm:gap-2 ">
                                                    <div className="sm:col-span-6 col-span-12 sm:me-2 mb-2 sm:mb-0">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault1" id="flexRadioDefault1"
                                                                    defaultChecked />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault11">
                                                                    Credit / Debit Cards
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6 col-span-12">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault1" id="flexRadioDefault2" />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault12">
                                                                    Paypal
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid  pt-3">
                                                <SpkButton buttontype="button"
                                                    customClass="ti-btn bg-primary text-white ti-btn-wave">BUY</SpkButton>
                                            </div>
                                        </div>
                                        <div className="tab-pane !border-0 !p-0 hidden" id="sell-crypto2" role="tabpanel"
                                            aria-labelledby="sell-crypto">
                                            <div className="input-group mb-4 sm:flex block flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md !border-s !border-e-0"
                                                    aria-label="crypto buy select" placeholder="Select Currency" />
                                               <SelectComponent option={Selectdata1} mainClass='!rounded-e-md' defaultvalue={[Selectdata1[0]]}/>
                                            </div>
                                            <div className="input-group mb-4 sm:flex block flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md !border-s !border-e-0"
                                                    aria-label="crypto buy select" placeholder="36,335.00" />
                                                <SelectComponent option={Selectdata2} mainClass='!rounded-e-md' defaultvalue={[Selectdata2[0]]}/>
                                            </div>
                                            <div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Price:</span><span
                                                        className="text-[#8c9097] ms-2 text-[0.875rem] dark:text-defaulttextcolor/70">6.003435</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">BTC</span></div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Amount:</span><span
                                                        className="text-[#8c9097] ms-2 text-[0.875rem] dark:text-defaulttextcolor/70">2,34,4543.00</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">LTC</span></div>
                                                <div className="font-semibold text-[0.875rem] py-3">Total: <span
                                                    className="text-[0.875rem]">22.00 BTC</span></div>
                                                <div className="text-[0.75rem] text-success !mb-3">Additional Charges:
                                                    0.32%(0.0001231 BTC)</div>
                                                <label className="font-semibold text-[0.75rem] mt-2 mb-2 dark:text-defaulttextcolor/70">SELECT PAYMENT
                                                    METHOD :</label>
                                                <div className="sm:grid grid-cols-12 sm:gap-2 ">
                                                    <div className="sm:col-span-6 col-span-12 sm:me-2 mb-2 sm:mb-0">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="flexRadioDefault11"
                                                                    defaultChecked />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault11">
                                                                    Credit / Debit Cards
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6 col-span-12">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="flexRadioDefault12" />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault12">
                                                                    Paypal
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid  pt-3">
                                                <SpkButton buttontype="button"
                                                    customClass="ti-btn bg-danger text-white ti-btn-wave">SELL</SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-5 col-span-12">
                    <div className="xxl:col-span-5 xl:col-span-5 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Recent Activity
                                </div>
                                <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass=""  IconClass="fe fe-more-vertical text-[0.8rem]"
                                        Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Something else here</Link></li>
                                </SpkDropdown>
                            </div>
                            <div className="box-body  !p-0">
                                <div className="table-responsive">
                                    <Spktables tableClass="table box-table min-w-full table-vcenter whitespace-nowrap mb-0" tBodyClass='active-tab'
                                     header={[{ title: 'Date' , headerClassname:'text-center'}, { title: 'Currency', headerClassname:'text-start ' }, { title: 'From / To' , headerClassname:'text-start '}, 
                                        { title: 'Time & Status' , headerClassname:'text-start '}]}>
                                            {Recentactivity.map((idx) => (
                                                <tr className="border-t border-inherit border-solid  dark:border-defaultborder/10" key={Math.random()}>
                                                    <td>
                                                        <div className="text-center">
                                                            <p className="text-[#8c9097] dark:text-white/50 mb-0 font-semibold">{idx.month}</p>
                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">{idx.day}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center me-2">
                                                            <img src={idx.src1} alt="" className="leading-none avatar avatar-md avatar-rounded me-2 p-2 bg-light !my-auto" />
                                                            <div className="items-center">
                                                                <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Currency</span>
                                                                <p className="mb-0">{idx.text1} - <span
                                                                    className="text-[#8c9097] dark:text-white/50">({idx.text2})</span></p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="items-center text-center">
                                                            <div className="flex items-center font-semibold">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src={idx.src2} alt="" />
                                                                </span>
                                                                <span className="ms-2">{idx.name}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="items-center">
                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-1">{idx.status}</span>
                                                            <p className="mb-0">{idx.time} -
                                                                <span
                                                                    className={`text-[0.6875rem] text-${idx.color} font-semibold`}> {idx.class}</span>
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                    </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header md:justify-between flex-wrap">
                            <div className="box-title">
                                Bitcoin Price Statistics
                            </div>
                            <div className="">
                                <SpkButton buttontype="button" variant="success-full"
                                    customClass="ti-btn ti-btn-wave !py-1 !px-2 !text-[0.75rem]  me-2 !mb-0">Buy
                                    Now</SpkButton>
                                <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass=""  IconClass="fe fe-more-vertical text-[0.8rem]"
                                    Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Something else here</Link></li>
                                </SpkDropdown>
                               
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <ul className="border-0">
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link to="#" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Bitcoin value in USD</p>
                                            <p className="text-dark mb-0 font-normal tx-15">
                                                <span className="numberfont">$29,472.60</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link to="#" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Price Change
                                             <SpkBadge variant="primary/10" customClass="ms-3 text-primary">Increased</SpkBadge>
                                            </p>
                                            <p className="text-success mb-0 font-normal tx-13">
                                                <span className="numberfont">+280.30(0.96%)</span> <i
                                                    className="fa fa-arrow-up"></i> today
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link to="#" className="flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Trade Value</p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">$245,36,465.652</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link to="#" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Market Rank
                                                <SpkBadge variant="secondary/10" customClass="ms-3 text-secondary">3 Years</SpkBadge>
                                            </p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">#1</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link to="#" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">This Week High</p>
                                            <p className="text-success mb-0 tx-15">
                                                <span className="numberfont">$68,990.90</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link to="#" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">This Week Low</p>
                                            <p className="text-danger mb-0 tx-15">
                                                <span className="numberfont">$28,825.76</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link to="#" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Market Dominance</p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">70%</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem]">
                                    <Link to="#" className=" flex-column items-start border-0">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Alltime High</p>
                                            <p className="text-info mb-0 tx-15">
                                                <span className="numberfont">$68,990.90</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Top Traders
                            </div>
                            <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass=""  Toggletext="View All"
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
                            <ul className="list-none my-1">
                                {TopTraderssdata.map((idx)=>(
                                    <li className={idx.liclass} key={Math.random()}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="me-2 leading-none">
                                                    <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                        <img src={idx.img} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="mb-0 font-semibold">{idx.title}</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">{idx.text}</p>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-0 font-semibold text-success">
                                                    {idx.btcvalue} <span className="text-default">{idx.class}</span>
                                                </p>
                                                <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                  {idx.value}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-col-12 col-span-12">
                    <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between flex-wrap">
                                <div className="box-title mb-2 sm:mb-0">
                                    Crypto currencies Market Value
                                </div>
                                <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                    <SpkButton buttontype="button"
                                       variant="primary-full" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3  text-white">1D</SpkButton>
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
                                <div className="table-responsive">
                                    <Spktables tableClass="table table-hover whitespace-nowrap min-w-full table-bordered"
                                        header={[{ title: 'S.No' , headerClassname:'text-center'}, { title: 'Name', headerClassname:'text-start ' }, { title: 'Symbol' , headerClassname:'text-start '}, 
                                        { title: 'Price' , headerClassname:'text-start '}, { title: 'Market Cap' , headerClassname:'text-start '},{ title: 'Price Graph' , headerClassname:'text-start '},
                                        { title: 'Volume' , headerClassname:'text-start '}, { title: 'Price Change' , headerClassname:'text-start '}]}>
                                            {Currencymarketvalue.map((idx)=>(
                                                <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                                                    <td>{idx.id}</td>
                                                    <td>{idx.name}</td>
                                                    <td>
                                                        <div className="leading-none flex items-center">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src={idx.src}
                                                                    alt="" />
                                                            </span> - {idx.symbol}
                                                        </div>
                                                    </td>
                                                    <td>
                                                       {idx.price}
                                                    </td>
                                                    <td>
                                                        {idx.marketcap}
                                                    </td>
                                                    <td>
                                                        <div id={idx.chartid}>
                                                            <ApexchartsComponent chartOptions={idx.pricegraph} chartSeries={[idx.series]} type="line" height={20} width={120} />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {idx.voulme}
                                                    </td>
                                                    <td>
                                                        <span className={`text-${idx.color}`}>{idx.pricechange}<i
                                                            className={`ti ti-arrow-big-${idx.color === 'success'? "up":'down'}-lines ms-1`}></i></span>
                                                    </td>
                                                </tr>
                                            ))}
                                    </Spktables>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center">
                                    <div className="dark:text-defaulttextcolor/70">
                                        Showing 6 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
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
            </div>
        </Fragment>
    )
}

export default Crypto