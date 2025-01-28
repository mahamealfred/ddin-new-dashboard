
import  { FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import { Visitorsbychannel ,Bounceoptions, Bounceseries, Clickoptions, Clickseries, Deviceoptions, Deviceseries, Impressoptions, Impressseries, Newoptions, Newseries, Rateoptions, Rateseries, Reportoptions, Reportseries, Totaloptions, Totalseries, Visitorsbycountries, } from '../../../components/ui/data/dashboards/analyticsdata';
import media84 from "../../../assets/images/media/media-84.png";
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import Spktables from '../../../@spk/tables/spk-tables';
import { Trafficdata } from '../../../components/ui/data/widgets/widgetsdata';
import SpkButton from '../../../@spk/uielements/spk-button';
interface AnalyticsProps {}

const Analytics: FC<AnalyticsProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Analytics" activepage="Dashboards" mainpage="Analytics" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-7 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex flex-wrap items-center justify-between">
                                        <div>
                                            <h6 className="font-semibold mb-3 text-[1rem]">Total Users</h6>
                                            <span className="text-[1.5625rem] font-semibold">9,789</span>
                                            <span className="block text-success text-[0.75rem]">+0.892 <i className="ti ti-trending-up ms-1"></i></span>
                                        </div>
                                        <div id="analytics-users">
                                            <ApexchartsComponent chartOptions={Totaloptions} chartSeries={Totalseries} type="line" height={40} width={120} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h6 className="font-semibold mb-3 text-[1rem]">Live Visitors</h6>
                                            <span className="text-[1.5625rem] font-semibold">12,240</span>
                                            <span className="block text-danger text-[0.75rem]">-0.59<i className="ti ti-trending-down ms-1 inline-flex"></i></span>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md bg-secondary text-white">
                                                <i className="ri-user-3-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-body mb-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h6 className="font-semibold text-primary mb-4 text-[1rem]">Bounce Rate</h6>
                                            <span className="text-[1.5625rem] flex items-center">77.3% <span className=" text-[0.75rem] text-warning opacity-[0.7] ms-2">+0.59<i className="ti ti-arrow-big-up-line ms-1 inline-flex"></i></span></span>
                                        </div>
                                    </div>
                                </div>
                                <div id="analytics-bouncerate" className="mt-1 w-full">
                                    <ApexchartsComponent chartOptions={Bounceoptions} chartSeries={Bounceseries} type="line" height={45} />
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Audience Report
                                    </div>
                                    <div>
                                        <SpkButton butttontype="button" variant="primary" customClass="ti-btn ti-btn-wave !font-medium"><i className="ri-share-forward-line me-1 align-middle inline-block"></i>Export</SpkButton>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div id="audienceReport">
                                        <ApexchartsComponent chartOptions={Reportoptions} chartSeries={Reportseries} type="line" height={257} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Countries Sessions vs Bounce Rate
                                    </div>
                                    <SpkDropdown Icon={true} Linktag={true} IconPosition="before"  arialexpand={false} Toggletext="View All"
                                        Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Today</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">This Week</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Last Week</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <div id="country-sessions">
                                        <ApexchartsComponent chartOptions={Rateoptions} chartSeries={Rateseries} type="line" height={330} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Traffic Sources
                                    </div>
                                    <SpkDropdown Icon={true} Linktag={true} IconPosition="before"  arialexpand={false} Toggletext="View All"
                                        Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Today</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">This Week</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Last Week</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="table-responsive">
                                        <Spktables tableClass="table table-hover whitespace-nowrap min-w-full"
                                             header={[{title:'Browser', headerClassname:'text-start'}, {title:'Sessions', headerClassname:'text-start'}, 
                                             {title:'Traffic', headerClassname:'text-start'}]}>
                                                {Trafficdata.map((idx)=>(
                                                    <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10" key={Math.random()}>
                                                        <td>
                                                            <div className="flex items-center">
                                                                <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                                    <i className={`ri-${idx.icon} text-[1.125rem] text-${idx.color}`}></i>
                                                                </span>
                                                                <div className="font-semibold">{idx.title}</div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span><i className={`ri-arrow-${idx.arrowicon}-s-fill me-1 text-${idx.arrowicon === 'up' ? "success":"danger"} align-middle text-[1.125rem]`}></i>{idx.session}</span>
                                                        </td>
                                                        <td>
                                                            <div className="progress progress-xs">
                                                                <div className={`progress-bar bg-primary ${idx.width}`} role="progressbar" aria-valuenow={idx.value} aria-valuemin={0} aria-valuemax={100}>
                                                                </div>
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
                </div>
                <div className="xl:col-span-5 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-5 cxl:ol-span-12 col-span-12">
                            <div className="box custom-card upgrade-card text-white">
                                <div className="box-body text-white">
                                    <span className="avatar avatar-xxl !border-0">
                                        <img src={media84} alt="" />
                                    </span>
                                    <div className="upgrade-card-content">
                                        <span className="opacity-[0.7] font-normal mb-1 !text-white">Plan is expiring !</span>
                                        <span className="text-[0.9375rem] font-semibold block mb-[3rem] upgrade-text !text-white">Upgrade to premium</span>
                                        <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 bg-light text-defaulttextcolor !text-[0.75rem] font-medium ti-btn-wave">Upgrade Now</SpkButton>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-body !p-1">
                                    <div className="flex items-center flex-wrap">
                                        <div id="analytics-followers">
                                            <ApexchartsComponent chartOptions={Impressoptions} chartSeries={Impressseries} type="radialBar" width={100} height={120} />
                                        </div>
                                        <div className="ms-1">
                                            <p className="mb-1 text-[#8c9097] dark:text-white/50">Impressions</p>
                                            <h5 className="font-semibold mb-0 text-[1.25rem]">9,903</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-body !p-1">
                                    <div className="flex items-center flex-wrap">
                                        <div id="analytics-views">
                                            <ApexchartsComponent chartOptions={Clickoptions} chartSeries={Clickseries} type="radialBar" width={100} height={120} />
                                        </div>
                                        <div className="ms-1">
                                            <p className="mb-1 text-[#8c9097] dark:text-white/50">Clicks</p>
                                            <h5 className="font-semibold mb-0 text-[1.25rem]">16,789</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-7 xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Sessions By Device
                                    </div>
                                    <div>
                                        <SpkButton buttontype="button" variant="primary" customClass="ti-btn 1 !text-[0.85rem] !m-0 !font-medium">View All</SpkButton>
                                    </div>
                                </div>
                                <div className="box-body !my-2 !py-6 !px-2">
                                    <div id="sessions">
                                        <ApexchartsComponent chartOptions={Deviceoptions} chartSeries={Deviceseries} type="donut" height={240} />
                                    </div>
                                </div>
                                <div className="box-footer !p-0">
                                    <div className="grid grid-cols-12 justify-center">
                                        <div className="col-span-3 pe-0 text-center">
                                            <div className="sm:p-4  p-2 ">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Mobile</span>
                                                <span className="block text-[1rem] font-semibold">68.3%</span>
                                            </div>
                                        </div>
                                        <div className="col-span-3 px-0 text-center">
                                            <div className="sm:p-4 p-2">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Tablet</span>
                                                <span className="block text-[1rem] font-semibold">17.68%</span>
                                            </div>
                                        </div>
                                        <div className="col-span-3 px-0 text-center">
                                            <div className="sm:p-4 p-2 ">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Desktop</span>
                                                <span className="block text-[1rem] font-semibold">10.5%</span>
                                            </div>
                                        </div>
                                        <div className="col-span-3 px-0 text-center">
                                            <div className="sm:p-4 p-2">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Others</span>
                                                <span className="block text-[1rem] font-semibold">5.16%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">Sessions Duration By New Users</div>
                                    <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Toggletext="View All"
                                        Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Today</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">This Week</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Last Week</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <div id="session-users">
                                         <ApexchartsComponent chartOptions={Newoptions} chartSeries={Newseries} type="line" height={415} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Visitors By Channel Report
                            </div>
                            <div className="flex flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Icon={true} Linktag={true}  arialexpand={false}  Toggletext="Sort By" Customclass="my-1"
                                    Linkclass="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
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
                                <Spktables  tableClass="table table-hover whitespace-nowrap table-bordered min-w-full"
                                    header={[{title:'S.No', headerClassname:'text-start'}, {title:'Channel', headerClassname:'text-start'}, {title:'Sessions', headerClassname:'text-start'}, 
                                    {title:'Bounce Rate', headerClassname:'text-start'}, {title:'Avg Session Duration', headerClassname:'text-start'}, 
                                    {title:'Goal Completed', headerClassname:'text-start'}, {title:'Pages Per Session', headerClassname:'text-start'}]} >
                                        {Visitorsbychannel.map((idx) => (
                                            <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10" key={Math.random()}>
                                                <th scope="row" className="!text-start">
                                                    {idx.id}
                                                </th>
                                                <td>
                                                    <div className="flex items-center">
                                                        <span className={`avatar avatar-sm !mb-0 bg-${idx.color}/10 avatar-rounded`}>
                                                            <i className={`ri-${idx.icon} text-[0.9375rem] font-semibiold text-${idx.color}`}></i>
                                                        </span>
                                                        <span className="ms-2">
                                                            {idx.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>{idx.session}</td>
                                                <td>{idx.rate}</td>
                                                <td>
                                                    {idx.avg}
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.goal}</SpkBadge>
                                                </td>
                                                <td>
                                                    {idx.pages}
                                                </td>
                                            </tr>
                                        ))}
                                </Spktables>
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
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Visitors By Countries
                            </div>
                            <SpkDropdown Icon={true} Linktag={true}  arialexpand={false}  Toggletext="View All" Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50" 
                              IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#">Today</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#">This Week</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#">Last Week</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body">
                            <ul className="list-none mb-0 analytics-visitors-countries min-w-full">
                            {Visitorsbycountries.map((idx) => (
                                <li key={Math.random()}>
                                    <div className="flex items-center">
                                        <div className="leading-none">
                                            <span className="avatar avatar-sm !mb-0 text-default">
                                                <img src={idx.src} alt="" className="!rounded-full h-[1.75rem] w-[1.75rem]" />
                                            </span>
                                        </div>
                                        <div className="ms-4 flex-grow leading-none">
                                            <span className="text-[0.75rem]">{idx.city}</span>
                                        </div>
                                        <div>
                                            <SpkBadge variant="light" customClass="text-default font-semibold mt-2">{idx.badge}</SpkBadge>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Analytics