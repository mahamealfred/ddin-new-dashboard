
import  {FC, Fragment } from 'react'
import * as Widgetsdata from "../../components/ui/data/widgets/widgetsdata";
import Pageheader from '../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import { WorldMap } from '../../components/ui/data/widgets/widgetsdata';
import face1 from "../../assets/images/faces/1.jpg";
import face2 from "../../assets/images/faces/2.jpg";
import face4 from "../../assets/images/faces/4.jpg";
import face6 from "../../assets/images/faces/6.jpg";
import face12 from "../../assets/images/faces/12.jpg";
import face10 from "../../assets/images/faces/10.jpg";
import face11 from "../../assets/images/faces/11.jpg";
import face9 from "../../assets/images/faces/9.jpg";
import face8 from "../../assets/images/faces/8.jpg";
import face20 from "../../assets/images/faces/20.jpg";
import face15 from "../../assets/images/faces/15.jpg";
import face5 from "../../assets/images/faces/5.jpg";
import face16 from "../../assets/images/faces/16.jpg";
import face13 from "../../assets/images/faces/13.jpg";
import ApexchartsComponent from '../../@spk/spk-packages/apexcharts-component';
import SpkTrendingstockcards from '../../@spk/dashboards/spk-trendingstockcards';
import Spkcryptowidgetcards from '../../@spk/widgets/spkcryptowidgetcards';
import Spkwidgettradingcards from '../../@spk/widgets/spkwidgettradingcards';
import Spkwidgetrecrutiers from '../../@spk/widgets/spkwidgetrecrutiers';
import Spkwidgetmembership from '../../@spk/widgets/spkwidgetmembership';
import Spkwidgetprogresscards from '../../@spk/widgets/spkwidgetprogresscards';
import Spkwidgetrevenuecards from '../../@spk/widgets/spkwidgetrevenuecards';
import SpkDropdown from '../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../@spk/uielements/spk-badge';
import Spktables from '../../@spk/tables/spk-tables';
import SpkButton from '../../@spk/uielements/spk-button';


interface WidgetsProps {}

const Widgets: FC<WidgetsProps> = () => {

    return (
        <Fragment>
            <Pageheader currentpage="Widgets" activepage="Widgets" mainpage="Widgets" />
            <div className="grid grid-cols-12 gap-6">
                    {Widgetsdata.widgetcardadata.map((idx)=>(
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12" key={Math.random()}>
                            <Spkcryptowidgetcards card={idx} />
                        </div>
                    ))}
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-12 col-span-12">
                    <div className="">
                        <div className="xl:col-span-12 col-span-12">
                            <Spkwidgettradingcards Value='9,231' Titletext='Total Candidates' Percentagevalue='0.5%' Color='primary' Icon="people-fill"  />
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <Spkwidgettradingcards Value='3,571' Titletext='Total Subscriptions' Percentagevalue='0.42%' Color='secondary' Icon="person-lines-fill"  />
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <Spkwidgettradingcards Value='1,986' Titletext='Page Views' Percentagevalue='5.1%' Color='success' Icon="eye-fill"  />
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <Spkwidgettradingcards Value='773' Titletext='New Registrations' Percentagevalue='3.5%' Color='info' Icon="file-earmark-text-fill"  />
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-5 xl:col-span-8 lg:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-6 col-span-12">
                            <Spkwidgetrecrutiers Title="Total Recruiters"  Icon="person-square text-white" Avatarclass="!bg-info text-[1.125rem]" CustomClass=""  Titleclass="text-[#8c9097] dark:text-white/50" />
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <Spkwidgetrecrutiers Title="Premium Recruiters" Icon="person-square" Avatarclass="bg-secondary shadow-sm text-[1.125rem] text-white" CustomClass="box-bg-primary" Titleclass="opacity-[0.7] !text-white" />
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box custom-box overflow-hidden">
                                <div className="box-body !p-0">
                                    <div className="p-4">
                                        <div className="flex items-center mb-2">
                                            <span className="avatar avatar-md !rounded-full bg-secondary me-2">
                                                <i className="bi bi-receipt text-[1rem] text-white"></i>
                                            </span>
                                            <p className="mb-0 flex-grow text-[#8c9097] dark:text-white/50">Total Revenue</p>
                                        </div>
                                        <span className="text-[1.25rem] font-semibold">$12,897</span>
                                        <span className="text-[0.75rem] text-success ms-1"><i className="ti ti-trending-up me-1 inline-block"></i>3.5%</span>
                                    </div>
                                    <div id="totalRevenue">
                                        <ApexchartsComponent chartOptions={Widgetsdata.Roptions} chartSeries={Widgetsdata.Rseries} type="area" height={180} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex items-center mb-4">
                                        <span className="avatar avatar-md !rounded-full bg-success me-2">
                                            <i className="bi bi-people text-[1rem] text-white"></i>
                                        </span>
                                        <p className="mb-0 flex-grow text-[#8c9097] dark:text-white/50">Active Members</p>
                                    </div>
                                    <span className="text-[1.25rem] font-semibold">$12,897</span>
                                    <span className="text-[0.75rem] text-success ms-1"><i className="ti ti-trending-up me-1 inline-block"></i>3.5%</span>
                                    <div className="font-normal flex items-center mb-2 mt-3">
                                        <p className="mb-0 flex-grow">Active Candidates</p>
                                        <span>3,274</span>
                                    </div>
                                    <div className="progress progress-xs mb-4">
                                        <div className="progress-bar !bg-success w-1/4" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                    <div className="font-normal flex items-center mb-2">
                                        <p className="mb-0 flex-grow">Active Recruiters</p>
                                        <span>8,726</span>
                                    </div>
                                    <div className="progress progress-xs mb-2">
                                        <div className="progress-bar !bg-success w-3/4" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className="box-footer text-center">
                                    <div className="grid">
                                        <Link to="#" className="text-primary">View Details <i className="ti ti-external-link"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-7 lg:col-span-7 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex items-center mb-4">
                                        <div className="flex-grow flex items-center">
                                            <div className="me-2">
                                                <span className="avatar rounded-[0.375rem] !bg-primary !text-white text-[1.25rem]"><i className="bi bi-people"></i></span>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="mb-0 ">Premium Recruiters</p>
                                                <span className="text-success text-[0.75rem]">7 New</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to="#" className="ti-btn ti-btn-icon ti-btn-primary !rounded-full btn-wave mb-0" aria-label="View All"><i className="bi bi-chevron-right rtl:rotate-180"></i></Link>
                                        </div>
                                    </div>
                                    <p className="mb-3 text-[1.25rem] font-semibold">386</p>
                                    <p className="mb-2 text-[#8c9097] dark:text-white/50 font-normal">Recents</p>
                                    <div className="flex items-center justify-between">
                                        <div className="avatar-list-stacked">
                                            <Link to="#" className="avatar avatar-sm rounded-circle overflow-hidden" aria-label="Mis x matched"><img src={face2} alt="img" className="w-full" /></Link>
                                            <Link to="#" className="avatar avatar-sm rounded-circle overflow-hidden" aria-label="Barbel Bob"><img src={face12} alt="img" className="w-full" /></Link>
                                            <Link to="#" className="avatar avatar-sm rounded-circle overflow-hidden" aria-label="Phan Rel"><img src={face20} alt="img" className="w-full" /></Link>
                                            <Link to="#" className="avatar avatar-sm rounded-circle overflow-hidden bg-primary text-white" >+4</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <Spkwidgetmembership Title='Active Members' Icon='people-fill' Value='1,773' Color='info'  />
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <Spkwidgetmembership Title='Registrations' Icon='file-earmark-text' Value='116' Color='success'  />
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 xl:col-span-5 lg:col-span-5 col-span-12">
                    <div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box box-bg-primary">
                                <div className="box-header !bg-white/20 !border-b-0 justify-between">
                                    <div className="box-title !text-white before:hidden">
                                        Premium Recruiters
                                    </div>
                                    <div>
                                        <SpkButton Label="button" buttontype="button" Size="sm" customClass="ti-btn !bg-primary !mb-0 rtl:rotate-180"><i className="ti ti-chevron-right"></i></SpkButton>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="flex flex-wrap items-start">
                                        <div className="flex-grow overflow-hidden">
                                            <p className="mb-2 leading-none text-[1.25rem] font-semibold !text-white">9,231</p>
                                            <p className="mb-0 text-[0.75rem] text-white opacity-[0.7]">
                                                <span className="!text-white inline-flex"><i className="bi bi-caret-up-fill !text-white"></i> 2.3%</span>
                                                <span className="opacity-[0.7] ms-1 !text-white">From Last Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-sm bg-success !rounded-full"><i className="bi bi-people-fill text-white"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            {Widgetsdata.Widgetcarddata.map((element)=>(
                                <div className="xl:col-span-12 col-span-12"  key={element.id}>
                                    <SpkTrendingstockcards stockItem={element}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                {Widgetsdata.Progresscarddata.map((idx)=>(
                <div className="xxl:col-span-3 sm:col-span-6 col-span-12" key={Math.random()}>
                    <Spkwidgetprogresscards  card={idx}   />
                </div>
                ))}
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body !p-0">
                            <div className="grid grid-cols-12 gap-x-6">
                                {Widgetsdata.Businessdata.map((idx)=>(
                                <div className={`xl:col-span-3 col-span-12 ${idx.class}`} key={Math.random()}>
                                    <div className="flex flex-wrap items-start p-6">
                                        <div className="me-4 leading-none">
                                            <span className={`avatar avatar-md !rounded-full !bg-${idx.color} shadow-sm`}>
                                                <i className={`ti ti-${idx.icon} text-[1.125rem] text-white`}></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h5 className="font-semibold ">{idx.value}</h5>
                                            <p className="text-[#8c9097] dark:text-white/50 mb-0 text-[0.75rem]">{idx.text}</p>
                                        </div>
                                        <div>
                                            <SpkBadge variant={`${idx.percentage.includes("1.14%")? "danger": "success"}/10`} customClass={`text-${idx.percentage.includes("1.14%")? "danger": "success"}`}><i className={`ri-arrow-${idx.percentage.includes("1.14%")? "down": "up"}-s-line align-middle me-1 inline-block`}></i>{idx.percentage}</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box custom-box box-bg-primary text-white">
                        <div className="box-body !p-0">
                            <div className="flex items-start p-6 flex-wrap">
                                <div className="me-4 leading-none">
                                    <span className="avatar avatar-md !rounded-full bg-white dark:bg-bodybg !text-primary shadow-sm">
                                        <i className="ti ti-coin text-[1.125rem]"></i>
                                    </span>
                                </div>
                                <div className="flex-grow">
                                    <h5 className="font-semibold mb-1 !text-white">$21,520</h5>
                                    <p className="opacity-[0.7] mb-0 text-[0.75rem] !text-white">Expenses</p>
                                </div>
                                <div>
                                    <SpkBadge variant="success" customClass="text-white"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>14.69%</SpkBadge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-2 col-span-12">
                    <Spkwidgetrevenuecards Color="primary" Icon='briefcase-2-line' Title='Total Sales' Value='15,800' Percentage='+25.8%'  />
                </div>
                <div className="xl:col-span-2 col-span-12">
                     <Spkwidgetrevenuecards Color="secondary" Icon='bill-line' Title='Total Tax' Value='$12,650' Percentage='+12.2%'  />
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <Spkwidgetrevenuecards Color="success" Icon='wallet-2-line' Title='Total Income' Value='$14,800' Percentage='+7.45%'  />
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <Spkwidgetrevenuecards Color="info" Icon='line-chart-line' Title='Total Expenses' Value='$7,566' Percentage='-3.21%'  />
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <Spkwidgetrevenuecards Color="warning" Icon='money-dollar-box-line' Title='Sales Profit' Value='$7,474' Percentage='+36.03%'  />
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <Spkwidgetrevenuecards Color="danger" Icon='profile-line' Title='Opex Ratio' Value='32%' Percentage='+0.89%'  />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 md:col-span-6  col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Upcoming Events
                            </div>
                            <div>
                                <SpkButton buttontype="button" variant="primary" customClass="ti-btn !py-1 !px-2 !text-[0.75rem]">View All</SpkButton>
                            </div>
                        </div>
                        <div className="box-body">
                            <nav className="flex flex-wrap xxxl:flex-nowrap justify-start sm:justify-between" aria-label="Tabs" role="tablist">
                                <SpkButton buttontype="button" customClass="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white active"
                                   Id="mon" Tab="#mon-1" Controls="mon-1">
                                    <span className="block mb-1">09</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Mon</span>
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" 
                                   iI="tue" Tab="#tue-1" Controls="tue-1">
                                    <span className="block mb-1">10</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Tue</span>
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white"
                                    Id="wed" Tab="#wed-1" Controls="wed-1">
                                    <span className="block mb-1">11</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Wed</span>
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white"
                                    Id="thu" Tab="#thu-1" Controls="thu-1">
                                    <span className="block mb-1">12</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Thu</span>
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" 
                                   iI="fri" Tab="#fri-1" Controls="fri-1">
                                    <span className="block mb-1">13</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Fri</span>
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white"
                                    Id="sat" Tab="#sat-1" Controls="sat-1">
                                    <span className="block mb-1">14</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Sat</span>
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white"
                                    Id="sun" Tab="#sun-1" Controls="sun-1">
                                    <span className="block mb-1">15</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Sun</span>
                                </SpkButton>
                            </nav>
                            <div className="tab-content pt-4 my-4">
                                <div id="mon-1" role="tabpanel" aria-labelledby="mon-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block "></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="tue-1" className="hidden" role="tabpanel" aria-labelledby="tue-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="wed-1" className="hidden" role="tabpanel" aria-labelledby="wed-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="thu-1" className="hidden" role="tabpanel" aria-labelledby="thu-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="fri-1" className="hidden" role="tabpanel" aria-labelledby="fri-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="sat-1" className="hidden" role="tabpanel" aria-labelledby="sat-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="sun-1" className="hidden" role="tabpanel" aria-labelledby="sun-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4  md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Timeline
                            </div>
                            <div>
                                <SpkButton buttontype="button" variant="primary" customClass="ti-btn !py-1 !px-2 !text-[0.75rem]">View All</SpkButton>
                            </div>
                        </div>
                        <div className="box-body">
                            <ul className="list-unstyled timeline-widget mb-0 my-3">
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold">02</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Mon</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                            <div>
                                                <p className="mb-1  timeline-widget-content text-wrap">You have an announcement - Ipsum Est Diam Eirmod</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">10:00AM<SpkBadge variant="primary/10" customClass="text-primary ms-2">Announcement</SpkBadge></p>
                                            </div>
                                            <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="py-1"  Toggletext=""
                                                Linkclass="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"  IconClass="fe fe-more-vertical">
                                                    <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                            </SpkDropdown>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold">15</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Sun</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">National holiday - Vero Jayanti</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50"><SpkBadge variant="warning/10" customClass="text-warning">Holiday</SpkBadge></p>
                                            </div>
                                            <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="py-1"  Toggletext=""
                                                Linkclass="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"  IconClass="fe fe-more-vertical">
                                                    <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                            </SpkDropdown>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold">23</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Mon</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">John pup birthday - Team Member</p>
                                                <p className="mb-4 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">09:00AM<SpkBadge variant="success/10" customClass="text-success ms-2">Birthday</SpkBadge></p>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">Amet sed no dolor kasd - Et Dolores Tempor Erat</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">04:00PM<SpkBadge variant="primary/10" customClass="text-primary ms-2">Announcement</SpkBadge></p>
                                            </div>
                                              <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="py-1"  Toggletext=""
                                                    Linkclass="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"  IconClass="fe fe-more-vertical">
                                                        <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                                        <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                                        <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                                </SpkDropdown>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold">31</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Tue</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">National Holiday - Dolore Ipsum</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50"><SpkBadge variant="warning/10" customClass="text-warning">Holiday</SpkBadge></p>
                                            </div>
                                              <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="py-1"  Toggletext=""
                                                Linkclass="p-2 text-[1rem] text-[#8c9097] dark:text-white/50"  IconClass="fe fe-more-vertical">
                                                    <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                            </SpkDropdown>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Traffic Sources
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <Spktables  tableClass="table table-bordered table-hover whitespace-nowrap min-w-full"
                                header={[{title:'Browser', headerClassname:'text-start'}, {title:'Sessions', headerClassname:'text-start'}, 
                                 {title:'Views', headerClassname:'text-start'}, {title:'Traffic', headerClassname:'text-start'}]}>
                                     {Widgetsdata.Trafficdata.map((idx)=>(
                                        <tr className="border border-defaultborder" key={Math.random()}>
                                            <td>
                                                <div className="flex items-center">
                                                    <span className="avatar !rounded-full avatar-sm p-2 bg-primary me-2">
                                                        <i className={`ri-${idx.icon} text-[1.125rem] text-white`}></i>
                                                    </span>
                                                    <div className="font-semibold">{idx.title}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle text-[1.125rem]"></i>{idx.session}</span>
                                            </td>
                                            <td>
                                                <span>{idx.views}</span>
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
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Users By Country
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex flex-wrap justify-between mb-[3rem]">
                                <div className="me-[3rem] flex items-center">
                                    <div className="me-2">
                                        <span className="avatar !rounded-full bg-primary/10 !text-primary"><i className="ri-user-3-line text-[1rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[1.125rem] mb-0 text-primary font-semibold">25,350</p>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">This month</span>
                                    </div>
                                </div>
                                <div className="me-4 flex items-center">
                                    <div className="me-2">
                                        <span className="avatar !rounded-full bg-light !text-defaulttextcolor"><i className="ri-user-3-line text-[1rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[1.125rem] mb-0 font-semibold">19,200</p>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">Last month</span>
                                    </div>
                                </div>
                                <div className="me-4 flex items-center">
                                    <div className="me-2">
                                        <span className="avatar !rounded-full bg-success/10 !text-success"><i className="ri-user-3-line text-[1rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[1.125rem] mb-0 text-success font-semibold">1,24,890</p>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">This Year</span>
                                    </div>
                                </div>
                                <div className="me-4 flex items-center">
                                    <div className="me-2">
                                        <span className="avatar !rounded-full bg-secondary/10 !text-secondary"><i className="ri-user-3-line text-[1rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[1.125rem] mb-0 text-secondary font-semibold">97,799</p>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">Last Year</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 sm:gap-6">
                                <div className="xl:col-span-5 col-span-12">
                                    <div className="h-full my-auto">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-primary text-[0.5rem] me-1 align-middle inline-block"></i>Brazil</div>
                                                    <div>1,290</div>
                                                    <div className="text-success"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>2.90%</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-secondary text-[0.5rem] me-1 align-middle inline-block"></i>Greenland</div>
                                                    <div>2,596</div>
                                                    <div className="text-danger"><i className="ri-arrow-down-s-line align-middle me-1 inline-block"></i>1.1%</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-success text-[0.5rem] me-1 align-middle inline-block"></i>Russia</div>
                                                    <div>3,710</div>
                                                    <div className="text-success"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>0.8%</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-warning text-[0.5rem] me-1 align-middle inline-block"></i>Palestine</div>
                                                    <div>1,116</div>
                                                    <div className="text-danger"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>10.06%</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-danger text-[0.5rem] me-1 align-middle inline-block"></i>Canada</div>
                                                    <div>12,150</div>
                                                    <div className="text-success"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>9.05%</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="xl:col-span-7 col-span-12">
                                    <div id="users-map">
                                        <WorldMap/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Recent Tasks
                            </div>
                            <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="py-1"  Toggletext="View All"
                                Linkclass="p-2 text-[0.75rem] text-[#8c9097] dark:text-white/50"  IconClass="ri-arrow-down-s-line align-middle ms-1">
                                    <li><Link className="ti-dropdown-item" to="#">Download</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Import</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Export</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <Spktables tableClass="table whitespace-nowrap table-bordered min-w-full" 
                                 header={[{ title: 'S.No' , headerClassname:'text-start'}, { title: 'Title', headerClassname:'text-start' },
                                     { title: 'Assigned To' , headerClassname:'text-start'}, 
                                    { title: 'Progress' , headerClassname:'text-start'}, { title: 'Status', headerClassname:'text-start' }, { title: 'Due Date', headerClassname:'text-start' }]}>
                                        <tr className="border border-defaultborder">
                                            <td>01</td>
                                            <td>Server Side Validation</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face10} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary !rounded-full text-white" to="#">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-3/5" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="primary/10" customClass="text-primary">In Progress</SpkBadge>
                                            </td>
                                            <td>
                                                17-04-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>02</td>
                                            <td>Multipurpose Dashboard Template</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face6} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-0" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="warning/10" customClass="text-warning">Pending</SpkBadge>
                                            </td>
                                            <td>
                                                14-05-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>03</td>
                                            <td>Documentation Project</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face4} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face15} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face11} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary !rounded-full text-white" to="#">
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-full" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="success/10" customClass="text-success">Completed</SpkBadge>
                                            </td>
                                            <td>
                                                20-04-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>04</td>
                                            <td>HR Management Template Design</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face5} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face13} alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-1/2" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="primary/10" customClass="text-primary">In Progress</SpkBadge>
                                            </td>
                                            <td>
                                                29-05-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>05</td>
                                            <td>Developing Backend</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face1} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face9} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary !rounded-full text-white" to="#">
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-1/2" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="primary/10" customClass="text-primary">In Progress</SpkBadge>
                                            </td>
                                            <td>
                                                25-05-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>06</td>
                                            <td>	Design New Dashboard Template</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face4} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src={face16} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary !rounded-full text-white" to="#">
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-full" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="success/10" customClass="text-success">Completed</SpkBadge>
                                            </td>
                                            <td>
                                                04-05-2023
                                            </td>
                                        </tr>
                                </Spktables>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Recent Applicants</div>
                        </div>
                        <div className="box-body">
                            <div id="views">
                                <ApexchartsComponent chartOptions={Widgetsdata.Aoptions} chartSeries={Widgetsdata.Aseries} type="line" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Sessions By Device</div>
                        </div>
                        <div className="box-body">
                            <div id="sessionsByDevice">
                                <ApexchartsComponent chartOptions={Widgetsdata.Deoptions} chartSeries={Widgetsdata.Deseries} type="bubble" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Target Report</div>
                            <SpkDropdown Customclass="ms-auto"  Linktag={true}  arialexpand={false}  Toggletext="Details"
                                Linkclass="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-primary dropdown-toggle">
                                    <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body pb-4">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ltr:float-right rtl:float-left text-primary" fill="currentColor" width="36px" height="36px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" /></svg>
                                <p className="text-primary font-500 mb-2">Revenue by week</p>
                                <h4 className="mb-2 font-semibold">$54,125.03</h4>
                                <span className="text-danger me-1 text-[.875rem]"> - 1.3%<i className="ri-arrow-down-s-fill align-middle ms-1"></i>  </span>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">33% of target reached</span>
                            </div>
                            <div id="report">
                            <ApexchartsComponent chartOptions={Widgetsdata.Reoptions} chartSeries={Widgetsdata.Reseries} type="bar" height={235} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Widgets