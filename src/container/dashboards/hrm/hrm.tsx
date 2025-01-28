import  {FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader';
import { ApplicantsSummary, Billssummary , Catoptions, Catseries, Clients, Joboptions, Jobseries} from '../../../components/ui/data/dashboards/hrmdata';
import { Link } from 'react-router-dom';
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import SpkHrmcards from '../../../@spk/dashboards/spk-hrmcards';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import Spktables from '../../../@spk/tables/spk-tables';
import SpkButton from '../../../@spk/uielements/spk-button';

interface HrmProps {}

const Hrm: FC<HrmProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="HRM" activepage="Dashboards" mainpage="HRM" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-5 xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <SpkHrmcards Color="primary" Customclass='bg-primary !text-white' Titletext='Total Employees'
                                Value="22,124" Increment="+1.03%" Icon="team-line" />
                          
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <SpkHrmcards Color="secondary" Customclass='bg-secondary !text-white' Titletext='Employees In Leave'
                                Value="528" Increment="+0.36%" Icon="user-unfollow-line" />
                          
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <SpkHrmcards Color="warning" Customclass='bg-warning !text-white' Titletext='Total Clients'
                                    Value="8,289" Increment="-1.28%" Icon="service-line" />
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <SpkHrmcards Color="danger" Customclass='bg-danger !text-white' Titletext='New Leads'
                                        Value="1,453" Increment="+4.25%" Icon="contacts-line" />
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">Applicants Summary</div>
                                </div>
                                <div className="box-body">
                                    <div className="sm:grid grid-cols-12 md:gap-y-0 gap-y-3">
                                        {ApplicantsSummary.map((idx)=>(
                                            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12" key={Math.random()}>
                                                <div className="flex items-start">
                                                    <div className="me-3">
                                                        <span className={`avatar avatar-rounded bg-light !text-${idx.iconClass}`}>
                                                            <i className={`ti ti-${idx.icon} text-[1.125rem]`}></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block mb-1 text-[#8c9097] dark:text-white/50">{idx.title}</span>
                                                        <h6 className="font-semibold mb-0 text-[1rem]">{idx.count}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-7 xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between items-center sm:flex block">
                            <div className="box-title sm:mb-0 mb-2">
                                Performance By Category
                            </div>
                            <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                <SpkButton buttontype="button"
                                   variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3">1W</SpkButton>
                                <SpkButton buttontype="button"
                                   variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3">1M</SpkButton>
                                <SpkButton buttontype="button"
                                   variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3">6M</SpkButton>
                                <SpkButton buttontype="button"
                                   variant="primary-full" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3 !rounded-s-none !text-white">1Y</SpkButton>
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="performanceReport">
                                <ApexchartsComponent chartOptions={Catoptions} chartSeries={Catseries} type="bar" height={310} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6 col-span-12">
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Jobs Summary
                            </div>
                        </div>
                        <div className="box-body !p-6">
                            <div id="jobs-summary">
                                <ApexchartsComponent chartOptions={Joboptions} chartSeries={Jobseries} type="donut" height={225} />
                            </div>
                        </div>
                        <div className="box-footer !py-6 !px-4 !mt-2">
                            <div className="grid xxxl:grid-cols-4 grid-cols-4">
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 hrm-jobs-legend published inline-block ms-2">Published
                                        </span>
                                        <div><span className="text-[1rem] font-semibold">1,754</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 hrm-jobs-legend private inline-block ms-2">Private
                                        </span>
                                        <div><span className="text-[1rem] font-semibold">544</span></div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 hrm-jobs-legend closed inline-block ms-2">Closed
                                        </span>
                                        <div><span className="text-[1rem] font-semibold">682</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 hrm-jobs-legend closed inline-block ms-2">On Hold
                                        </span>
                                        <div><span className="text-[1rem] font-semibold">263</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Upcoming Events</div>
                        </div>
                        <div className="box-body">
                            <ul className="list-none timeline-widget mb-0 my-4">
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold text-primary">02</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Mon</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-start justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">You have an announcement - Ipsum Est Diam Eirmod</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">10:00AM
                                                <SpkBadge variant="primary/10" customClass="text-primary ms-2">Announcement</SpkBadge></p>
                                            </div>
                                            <div>
                                            <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="" IconClass="fe fe-more-vertical"
                                                Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50">
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#" >Week</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#" >Month</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#" >Year</Link></li>
                                            </SpkDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold text-primary">15</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Sun</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-start justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">National holiday - Vero Jayanti</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                                <SpkBadge variant="warning/10" customClass="text-warning">Holiday</SpkBadge></p>
                                            </div>
                                            <div>
                                                 <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="" IconClass="fe fe-more-vertical"
                                                        Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50">
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#" >Week</Link></li>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#" >Month</Link></li>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#" >Year</Link></li>
                                                    </SpkDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold text-primary">23</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Mon</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-start justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">John pup birthday - Team Member</p>
                                                <p className="mb-4 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">09:00AM
                                                <SpkBadge variant="success/10" customClass="text-success bg- ms-2">Birthday</SpkBadge></p>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">Amet sed no dolor kasd - Et Dolores Tempor Erat</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">04:00PM
                                                <SpkBadge variant="primary/10" customClass="text-primary ms-2">Announcement</SpkBadge></p>
                                            </div>
                                            <div>
                                                 <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="" IconClass="fe fe-more-vertical"
                                                    Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#" >Week</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#" >Month</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#" >Year</Link></li>
                                                </SpkDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold text-primary">31</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Tue</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-start justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">National Holiday - Dolore Ipsum</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">
                                                <SpkBadge variant="warning/10" customClass="text-warning">Holiday</SpkBadge></p>
                                            </div>
                                            <div>
                                                 <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="" IconClass="fe fe-more-vertical"
                                                    Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#" >Week</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#" >Month</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#" >Year</Link></li>
                                                </SpkDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-5 xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Clients</div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <Spktables tableClass="table whitespace-nowrap min-w-full"  
                                    header={[{title:'Client', headerClassname:'text-start'}, {title:'Mail', headerClassname:'text-start'}, 
                                    {title:'Status', headerClassname:'text-start'},{title:'Action', headerClassname:'text-start'} ]}>
                                        {Clients.map((idx)=>(
                                            <tr className="border-t border-defaultborder dark:border-defaultborder/10" key={Math.random()}>
                                                <th scope="col">
                                                    <div className="flex items-center leading-none client-profile">
                                                        <img src={idx.avatar} alt="" className="avatar avatar-rounded me-4 !mb-0" />
                                                        <div>
                                                            <span className="block font-semibold mb-1">{idx.name}</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] text-start">{idx.role}</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>{idx.email}</td>
                                                <td>
                                                <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext="Active" IconClass="fe fe-more-vertical"
                                                    Linkclass="ti-btn ti-btn-outline-light text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#" >Active</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#" >In Active</Link></li>
                                                </SpkDropdown>
                                                </td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" to="#" 
                                                            className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                                                className="ri-pencil-line"></i></Link>
                                                        <Link aria-label="anchor" to="#" 
                                                            className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                                                className="ri-delete-bin-line"></i></Link>
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
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between flex-wrap">
                            <div className="box-title">
                                Bills Summary
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div className="me-3">
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext="Sort By" IconClass="fe fe-more-vertical"
                                    Linkclass="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                    to="#" >New</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Popular</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Relevant</Link></li>
                                 </SpkDropdown>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <Spktables tableClass="table table-hover whitespace-nowrap table-bordered min-w-full"
                                  header={[{title:'S.No', headerClassname:'text-start'}, {title:'Invoice ID', headerClassname:'text-start'}, 
                                    {title:'Client', headerClassname:'text-start'}, {title:'Due Date', headerClassname:'text-start'},{title:'Status', headerClassname:'text-start'},
                                    {title:'Amount', headerClassname:'text-start'}, {title:'Actions', headerClassname:'text-start'} ]}>
                                        {Billssummary.map((idx) => (
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                                                <td>{idx.id}</td>
                                                <td>{idx.invoiceid}</td>
                                                <td>
                                                    <div className="flex items-center leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block font-semibold mb-1">{idx.name}</span>
                                                            <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">{idx.mail}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.duedate}
                                                </td>
                                                <td>
                                                    <SpkBadge variant={idx.color} customClass={`text-white`}>{idx.status}</SpkBadge>
                                                </td>
                                                <td>
                                                    {idx.amount}
                                                </td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" to="#" 
                                                            className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                                className="ri-pencil-line"></i></Link>
                                                        <Link aria-label="anchor" to="#" 
                                                            className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                                className="ri-delete-bin-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </Spktables>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div className="text-defaulttextcolor/70">
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
            </div>
        </Fragment>
    )
}

export default Hrm