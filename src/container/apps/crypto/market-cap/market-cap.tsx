import { FC, Fragment } from 'react'
import {Cryptocurrencies, CurrenctTable } from "../../../../components/ui/data/apps/crypto/marcketcapdata";
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import bitcoin from "../../../../assets/images/crypto-currencies/regular/Bitcoin.svg";
import litecoin from "../../../../assets/images/crypto-currencies/regular/Litecoin.svg";
import ethereum from "../../../../assets/images/crypto-currencies/regular/Ethereum.svg";
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkCryptocards from '../../../../@spk/dashboards/spk-cryptocards';
import Spktables from '../../../../@spk/tables/spk-tables';
import SpkButton from '../../../../@spk/uielements/spk-button';
interface MarketcapProps { }

const Marketcap: FC<MarketcapProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Marketcap" activepage="Crypto" mainpage="Marketcap" />
            <div className="grid grid-cols-12 gap-x-6">
                {Cryptocurrencies.map((idx) => (
                    <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-12 col-span-12" key={Math.random()}>
                        <SpkCryptocards card={idx} Id="btc-chart"  footerVisible={true}  />
                    </div>
                ))}

                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-12 col-span-12">
                    <div className="box custom-box overflow-hidden">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                My Top Currencies
                            </div>
                            <div>
                                <SpkButton buttontype="button" variant="info" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] btn-wave">View All</SpkButton>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <ul className="list-group list-group-flush">
                                <li className="!py-1 !px-[1.25rem] border-b border-defaultborder dark:border-defaultborder/10">
                                    <div className="sm:flex items-center justify-between">
                                        <div className="flex items-center gap-2 me-1">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src={bitcoin} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-semibold">Bitcoin</span>
                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">$29,948.80</span>
                                            </div>
                                        </div>
                                        <div className='me-1'>
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Max Limit</span>
                                            <span className="font-semibold block">50 BTC</span>
                                        </div>
                                        <div className='me-1'>
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">My Volume</span>
                                            <span className="font-semibold block">31.2450 BTC</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 px-[1.25rem] border-b border-defaultborder dark:border-defaultborder/10">
                                    <div className="sm:flex items-center justify-between">
                                        <div className="flex items-center gap-2 me-1">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src={litecoin} alt="" />
                                                </span>
                                            </div>
                                            <div className='me-1'>
                                                <span className="block font-semibold">Litecon</span>
                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">$92.98</span>
                                            </div>
                                        </div>
                                        <div className='me-1'>
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Max Limit</span>
                                            <span className="font-semibold block">200 LTC</span>
                                        </div>
                                        <div className="">
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">My Volume</span>
                                            <span className="font-semibold block">38.0023 LTC</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 px-[1.25rem]">
                                    <div className="sm:flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className='me-1'>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src={ethereum} alt="" />
                                                </span>
                                            </div>
                                            <div className='me-1'>
                                                <span className="block font-semibold">Etherium</span>
                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">$1,895.96</span>
                                            </div>
                                        </div>
                                        <div className='me-1'>
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Max Limit</span>
                                            <span className="font-semibold block">100 ETH</span>
                                        </div>
                                        <div>
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">My Volume</span>
                                            <span className="font-semibold block">69.2412 BTC</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Crypto MarketCap
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Icon={true} IconPosition="before" Toggletext="Sort By" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block" arialexpand={false}
                                    Linktag={true} Linkclass="ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]">
                                    <li><Link className="ti-dropdown-item" to="#" >Market Cap</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#" >Price</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#" >Trading Volume</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#" >Price Change (24h)</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#" >Rank</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#" >A - Z</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#" >All-Time High (ATH)</Link></li>
                                </SpkDropdown>
                                <div>
                                    <SpkButton buttontype="button" variant="secondary-full" customClass="ti-btn !py-1 !px-2 !text-[0.75rem]">View All</SpkButton>
                                </div>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <Spktables tableClass="table whitespace-nowrap min-w-full"
                                 header={[{ title: '' }, { title: '#' , headerClassname:'font-semibold text-start'}, { title: 'Crypto Name' , headerClassname:'text-start'}, 
                                    { title: 'MarketCap', headerClassname:'text-start' },{ title: "Price (USD)" , headerClassname:'text-start'},  { title: '1h Change', headerClassname:'text-start' }, 
                                    { title: '24h Change', headerClassname:'text-start' }, { title: 'Volume (24h)', headerClassname:'text-start' },{ title: 'Circulating Supply', headerClassname:'text-start' },{ title: 'last 1Week' , headerClassname:'text-start'},   { title: 'Trade' , headerClassname:'text-start'}]}>
                                    {CurrenctTable.map((crypto) => (
                                        <tr className="border border-defaultborder" key={crypto.rank}>
                                            <td className="text-center">
                                            <Link aria-label="anchor" to="#">
                                                <i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i>
                                            </Link>
                                            </td>
                                            <td>{crypto.rank}</td>
                                            <td>
                                            <div className="flex items-center gap-2">
                                                <div className="leading-none">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={crypto.imageUrl} alt={crypto.name} />
                                                </span>
                                                </div>
                                                <div className="font-semibold">
                                                <Link to="#">{crypto.name}</Link>
                                                </div>
                                            </div>
                                            </td>
                                            <td>
                                            <span className="font-semibold">{crypto.marketCap}</span>
                                            </td>
                                            <td>
                                            <span className="font-semibold">
                                                <Link to="#">{crypto.price}</Link>
                                            </span>
                                            </td>
                                            <td>
                                            <span className={`text-${crypto.color} font-semibold`}>
                                                <i className={`ti ti-arrow-narrow-${crypto.icon} text-[.9375rem] font-semibold`}></i>{crypto.dayChange}</span>
                                            </td>
                                            <td>
                                            <span className={`text-${crypto.color1} font-semibold`}>
                                                <i className={`ti ti-arrow-narrow-${crypto.icon1} text-[.9375rem] font-semibold`}></i>{crypto.weekChange}</span>
                                            </td>
                                            <td>
                                            <Link to="#">
                                                <span className="block font-semibold">{crypto.volume}</span>
                                            </Link>
                                            </td>
                                            <td>
                                            <Link to="#">
                                                <span className="font-semibold block mb-2">{crypto.supply}</span>
                                            {crypto.supplyProgress}
                                            </Link>
                                            </td>
                                            <td>
                                            <div>
                                                <ApexchartsComponent chartOptions={crypto.chartOptions} chartSeries={crypto.chartSeries} type="line" height={35} width={120} />
                                            </div>
                                            </td>
                                            <td>
                                            <SpkButton buttontype="button" customClass="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                            </div>
                        </div>
                        <div className="box-footer !border-t-0">
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination  mb-0 justify-end">
                                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#" >Previous</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >1</Link></li>
                                    <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" to="#" >2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Marketcap