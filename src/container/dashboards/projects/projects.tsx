import  {FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import media86 from "../../../assets/images/media/media-86.svg";
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import {MainTasks, Projectcards, projectsSummary, Projectusers, Projoptions, Projseries, } from '../../../components/ui/data/dashboards/projectsdata';
import SpkProjectcards from '../../../@spk/dashboards/spk-projectcards';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import Spktables from '../../../@spk/tables/spk-tables';
import Spkborderedcards from '../../../@spk/uielements/cards/spkborderedcards';
import SpkButton from '../../../@spk/uielements/spk-button';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Projects" activepage="Dashboards" mainpage="Projects" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-5 col-span-12">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="sm:col-span-6 col-span-12">
                                     <SpkProjectcards BadgeColor="success" Color="primary" Icon="file-check"   Titletext="Completed Projects" Value="109" Percentagevalue="1.5%" />
                                </div>
                                <div className="sm:col-span-6 col-span-12">
                                    <SpkProjectcards BadgeColor="danger" Color="secondary" Icon="briefcase" Titletext="Overdue Projects" Value="18" Percentagevalue="0.23%" />
                                </div>
                                <div className="sm:col-span-6 col-span-12">
                                      <SpkProjectcards BadgeColor="success" Color="success" Icon="album" Titletext="Total Projects" Value="389" Percentagevalue="0.67%" />
                                </div>
                                <div className="sm:col-span-6 col-span-12">
                                    <SpkProjectcards BadgeColor="success" Color="warning" Icon="chart-pie-2" Titletext="Pending Projects" Value="227" Percentagevalue="0.53%" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Project Analysis
                                            </div>
                                            <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext="Sort By" 
                                                Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">Today</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">This Week</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">Last Week</Link></li>
                                            </SpkDropdown>
                                        </div>
                                        <div className="box-body">
                                            <div id="projectAnalysis">
                                                <ApexchartsComponent chartOptions={Projoptions} chartSeries={Projseries} type="line" height={315} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 col-span-12">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Team Members
                                            </div>
                                            <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext="View All" 
                                                Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">Today</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">This Week</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">Last Week</Link></li>
                                            </SpkDropdown>
                                        </div>
                                        <div className="box-body">
                                            <ul className="list-none team-members-card mb-0">
                                                {MainTasks.map((idx)=>(
                                                    <li key={Math.random()}>
                                                        <Link to="#">
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-start">
                                                                    <span className="avatar avatar-sm leading-none">
                                                                        <img src={idx.avatar} alt="" className="rounded-md" />
                                                                    </span>
                                                                    <div className="ms-4 leading-none">
                                                                        <span className="font-semibold">{idx.name}</span>
                                                                        <span className="block text-[0.6875rem] text-[#8c9097] dark:text-white/50 mt-2">{idx.text}</span>
                                                                    </div>
                                                                </div>
                                                                <div id={`user${idx.id}`}>
                                                                    <ApexchartsComponent chartOptions={idx.chart.options} chartSeries={idx.chart.series} type="line" height={20} width={80} />
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
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Main Tasks
                                            </div>
                                            <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext="Today" 
                                                Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">Today</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">This Week</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">Last Week</Link></li>
                                            </SpkDropdown>
                                        </div>
                                        <div className="box-body">
                                            <ul className="list-none projects-maintask-card">
                                                <li>
                                                    <div className="flex items-start">
                                                        <div className="flex items-start flex-grow">
                                                            <span className="me-4">
                                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel1" defaultValue="" aria-label="..." />
                                                            </span>
                                                            <div className="flex-grow">
                                                                <span>
                                                                    Designing a landing page
                                                                </span>
                                                                <span className="block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src={face2} alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src={face8} alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src={face2} alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="primary/10" customClass="text-primary">
                                                                In progress
                                                            </SpkBadge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-start">
                                                        <div className="flex items-start flex-grow">
                                                            <span className="me-4">
                                                                <input className="form-check-input" type="checkbox"  defaultValue="" aria-label="..." defaultChecked />
                                                            </span>
                                                            <div className="flex-grow">
                                                                <span>
                                                                    Testing of new project ui
                                                                </span>
                                                                <span className="block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src={face10} alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src={face15} alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="success/10" customClass="text-success">
                                                                Completed
                                                            </SpkBadge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-start">
                                                        <div className="flex items-start flex-grow">
                                                            <span className="me-4">
                                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel3" defaultValue="" aria-label="..." />
                                                            </span>
                                                            <div className="flex-grow">
                                                                <span>
                                                                    Fixing bugs in registration page
                                                                </span>
                                                                <span className="block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src={face11} alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src={face4} alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src={face8} alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="warning/10" customClass="text-warning">
                                                                pending
                                                            </SpkBadge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-start">
                                                        <div className="flex items-start flex-grow">
                                                            <span className="me-4">
                                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel4" defaultValue="" aria-label="..." defaultChecked />
                                                            </span>
                                                            <div className="flex-grow">
                                                                <span>
                                                                    Designing new dashboard
                                                                </span>
                                                                <span className="block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src={face10} alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src={face11} alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="primary/10" customClass="text-primary">
                                                                In progress
                                                            </SpkBadge>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-3 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Daily Tasks
                                    </div>
                                    <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext=" View All" 
                                        Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Download</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Import</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Export</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none daily-task-card my-2">
                                    {Projectcards.map((idx)=>(
                                        <li key={Math.random()}>
                                        <Spkborderedcards Navigate="#" Title={idx.title} badges={idx.badges} images={idx.images} Class={idx.Class} Customcardclas={idx.cardclass} />
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
                        <div className="xxl:col-span-12 col-span-12">
                            <div className="box shadow-none projects-tracking-card overflow-hidden text-center">
                                <div className="box-body">
                                    <img src={media86} alt="" className="mb-1 inline-flex" />
                                    <div>
                                        <span className="text-[0.9375rem] font-semibold block mt-6 mb-4">Track your work progress here</span>
                                        <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 bg-primary !text-[0.75rem] text-white  ti-btn-wave">Track Here</SpkButton>
                                    </div>
                                    <span className="shape-1 text-primary"><i className="ti ti-circle text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-2 text-secondary"><i className="ti ti-triangle text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-3 text-warning"><i className="ti ti-square text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-4 text-info"><i className="ti ti-square-rotated text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-5 text-success"><i className="ti ti-pentagon text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-6 text-danger"><i className="ti ti-star text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-7 text-pink"><i className="ti ti-hexagon text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-8 text-teal"><i className="ti ti-octagon text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-9 text-primary"><i className="ti ti-circle text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-10 text-secondary"><i className="ti ti-triangle text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-11 text-warning"><i className="ti ti-square text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-12 text-info"><i className="ti ti-square-rotated text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-13 text-success"><i className="ti ti-pentagon text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-14 text-danger"><i className="ti ti-star text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-15 text-pink"><i className="ti ti-hexagon text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-16 text-teal"><i className="ti ti-octagon text-[1.25rem] font-bold"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Transactions
                                    </div>
                                    <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext=" View All" 
                                        Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                             <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Download</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Import</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Export</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none project-transactions-card">
                                        {Projectusers.map((idx)=>(
                                            <li key={Math.random()}>
                                                <div className="flex items-start">
                                                    <div className="me-3">
                                                        <span className={`avatar avatar-rounded font-bold avatar-md !text-${idx.bgColor} bg-${idx.bgColor}/10`}>
                                                            {idx.initials}
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <span className="block font-semibold">{idx.name}</span>
                                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]">{idx.text}</span>
                                                    </div>
                                                    <div>
                                                        <h6 className="font-semibold text-[1rem]">{idx.balance}</h6>
                                                    </div>
                                                </div>
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
                <div className="xxl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Projects Summary
                            </div>
                            <div className="flex flex-wrap">
                                <div className="me-4 my-1">
                                    <input className="ti-form-control form-control-sm !rounded-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="!py-1 !mb-2" Toggletext="Sort By" 
                                    Linkclass="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
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
                                <Spktables tableClass="table table-hover whitespace-nowrap table-bordered min-w-full" 
                                     header={[{title:'S.No', headerClassname:'text-start'}, {title:'Title', headerClassname:'text-start'}, 
                                        {title:'Assigned To', headerClassname:'text-start'},{title:'Tasks', headerClassname:'text-start'},
                                        {title:'Progress', headerClassname:'text-start'} ,{title:'Status', headerClassname:'text-start'}, 
                                        {title:'Due Date', headerClassname:'text-start'}]}>
                                        {projectsSummary.map((idx)=>(
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10" key={Math.random()}>
                                                <th scope="row" className="!text-start">
                                                    {idx.id}
                                                </th>
                                                <td>
                                                   {idx.name}
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                    {idx.assignees.map((avatar, idx) => (
                                                        <span key={idx} className="avatar avatar-xs avatar-rounded" >
                                                            <img src={avatar.img} alt="img" />
                                                        </span>
                                                        ))}
                                                            {idx.extraAssignees > 0 && (
                                                            <Link className="avatar avatar-xs bg-primary avatar-rounded text-white text-[0.65rem] font-normal" to="#">
                                                                +{idx.extraAssignees}
                                                            </Link>
                                                         )}
                                                    </div>
                                                </td>
                                                <td>{idx.task}</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="progress progress-animate progress-xs w-full" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                            <div className={`progress-bar progress-bar-striped progress-bar-animated bg-primary ${idx.progress}`}></div>
                                                        </div>
                                                        <div className="ms-2">{idx.progresstxt}%</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.statusClass}/10`} customClass={`text-${idx.statusClass}`}>{idx.status}</SpkBadge>
                                                </td>
                                                <td>
                                                   {idx.lastUpdated}
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
            </div>
        </Fragment>
    )
}

export default Projects