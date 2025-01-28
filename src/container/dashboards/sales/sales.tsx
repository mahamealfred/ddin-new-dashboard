import  { FC,Fragment} from 'react';
import { categories, completedTasks, invoices, Overoptions, Overseries, Recenttransactiondata, Saleoptions, Saleseries, Salesusers, taskList, transactions, Trendingorders, visitorscountries, WorldMap } from '../../../components/ui/data/dashboards/salesdata'
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import Spksalescards from '../../../@spk/dashboards/spk-salescards';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import Spktables from '../../../@spk/tables/spk-tables';
import SpkButton from '../../../@spk/uielements/spk-button';

interface SalesProps {}

const Sales: FC<SalesProps> = () => {

    return (
        <Fragment>
            <Pageheader currentpage="Sales" activepage="Dashboards" mainpage="Sales" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                    <Spksalescards Color="success" Value="153" Percentagevalue="42%" Titletext="Sales Statistics" SvgIcon={<svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" opacity=".3" /><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg>}  />
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                    <Spksalescards Color="danger" Value="$4,32,474" Percentagevalue="12%" Titletext="Total Revenue" SvgIcon={<svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M12,6c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7S15.87,6,12,6z M13,14h-2V8h2V14z" opacity=".3" /><rect height="2" width="6" x="9" y="1" /><path d="M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M12,20c-3.87,0-7-3.13-7-7s3.13-7,7-7s7,3.13,7,7S15.87,20,12,20z" /><rect height="6" width="2" x="11" y="8" /></g></g></svg>}  />
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                    <Spksalescards Color="success" Value="27,146" Percentagevalue="27%" Titletext="Page Views" SvgIcon={<svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z" opacity=".3" /><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" /></svg>}  />
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6  col-span-12">
                    <Spksalescards Color="success" Value="$563" Percentagevalue="32.5%" Titletext="Profit By Sale" SvgIcon={<svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z" opacity=".3" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" /></svg>}  />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-3 xl:col-span-12  col-span-12">
                    <div className="box recent-transactions-card overflow-hidden">
                        <div className="box-header justify-between">
                            <div className="box-title">Recent Transactions</div>
                            <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="" IconClass="fe fe-more-vertical text-[0.8rem]" 
                                    Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                       to="#" >Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Something else here</Link></li>
                             </SpkDropdown>
                        </div>
                        <div className="card-body !p-0">
                            <div className="list-group">
                                {Recenttransactiondata.map((idx)=>(
                                    <Link to="#"  className="!border-0" key={Math.random()}>
                                        <div className="list-group-item !border-0">
                                            <div className="flex items-start">
                                                <span className={`tansaction-icon ${idx.bgColor}`}>
                                                   {idx.svgIcon}
                                                </span>
                                                <div className="w-full">
                                                    <div className="flex items-start justify-between">
                                                        <div className="mt-0">
                                                            <p className="mb-0 font-semibold"><span className="me-3">{idx.name}</span></p>
                                                            <span className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50">{idx.text}</span>
                                                        </div>
                                                        <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center"></div>
                                                        <span className="ms-auto">
                                                            <span className={`text-end text-${idx.color} block`}>
                                                                {idx.price}
                                                            </span>
                                                            <span className="text-end text-[#8c9097] dark:text-white/50 block text-[0.75rem]">{idx.date}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 sm:col-span-12 md:col-span-6 xxl:col-span-6 xl:col-span-8  col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Sales Overview
                            </div>
                            <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="" IconClass="fe fe-more-vertical text-[0.8rem]" 
                                    Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Something else here</Link></li>
                             </SpkDropdown>
                        </div>
                        <div className="box-body">
                            <div id="salesOverview">
                                <ApexchartsComponent chartOptions={Overoptions} chartSeries={Overseries} type="bar" height={325} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="lg:col-span-6 sm:col-span-12 md:col-span-6 xxl:col-span-3 xl:col-span-4 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Activities</div>
                            <SpkDropdown Linktag={true} Toggletext="View All" Arrowicon={true} Linkclass="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50" >
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Today</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >This Week</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Last Week</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body mt-0 latest-timeline" id="latest-timeline">
                            <ul className="timeline-main mb-0 list-unstyled">
                                <li>
                                    <div className="featured_icon1 featured-danger"></div>
                                </li>
                                <li className="mt-0 activity">
                                    <Link to="#"  className="text-[0.75rem]">
                                        <p className="mb-0"><span className="font-semibold">#Anita</span> <span className="ms-2 text-[0.75rem]">Lorem ipsum dolor, sit amet consectetur adipisicing  .</span></p>
                                    </Link>
                                    <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">12 mins ago.</small>
                                </li>
                                <li>
                                    <div className="featured_icon1 featured-success"> </div>
                                </li>
                                <li className="mt-0 activity">
                                    <Link to="#"  className="text-[0.75rem]">
                                        <p className="mb-0"><span className="me-2 text-[0.75rem]">New Product reveived.</span><span className="font-semibold">#FX-321</span> </p>
                                    </Link>
                                    <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">28 mins ago.</small>
                                </li>
                                <li>
                                    <div className="featured_icon1 featured-danger"></div>
                                </li>
                                <li className="mt-0 activity">
                                    <div className="text-[0.75rem]">
                                        <p className="mb-0">
                                            <span className="font-semibold text-primary">#Zlatan</span>
                                            <span className="mx-2 text-[0.75rem]">shared a page
                                            </span>
                                            <span>
                                                <Link to="https://themeforest.net/user/spruko/portfolio" target="_blank" className="text-success underline text-[0.6875rem]"> https://themeforest.net/user/spruko/ portfolio</Link>
                                            </span>
                                        </p>
                                    </div>
                                    <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">37 mins ago.</small>
                                </li>
                                <li>
                                    <div className="featured_icon1 featured-success"></div>
                                </li>
                                <li className="mt-0 activity">
                                    <div className="text-[0.75rem]">
                                        <p className="mb-0"><span className="font-semibold text-primary">#Hussain</span> <span className="ms-2 text-[0.75rem]">shared a file. </span></p>
                                        <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">1 day ago.</small>
                                        <p className="p-1 border border-dotted dark:border-defaultborder/10 wp-50 br-5 mb-0">
                                            <Link to="#" >
                                                <SpkBadge variant="success" customClass="text-white me-2">PPT</SpkBadge> <span className="text-[0.6875rem]">Project_discussion</span>
                                            </Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="featured_icon1 featured-danger"></div>
                                </li>
                                <li className="mt-0 activity">
                                    <Link to="#"  className="text-[0.75rem]">
                                        <p className="mb-0">
                                            <span className="font-semibold !inline-flex">#Emiley</span>
                                            <span className="ms-2 text-[0.75rem]">Lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor...</span>
                                            <span className="font-semibold ms-2">More</span>
                                        </p>
                                    </Link>
                                    <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">14 Mar 2022.</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 xl:col-span-12 md:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header sm:flex block">
                            <div className="box-title">Task List</div>
                            <div className="tab-menu-heading border-0 p-0 ms-auto sm:mt-0 my-2">
                                <div className="tabs-menu-task me-3">
                                    <nav className="" aria-label="Tabs" role="tablist">
                                        <Link to="#"  className="hs-tab-active:bg-secondary/10 hs-tab-active:text-secondary cursor-pointer text-nowrap text-defaulttextcolor px-4 py-2 flex-grow  text-[0.75rem] font-medium text-center rounded-md hover:text-secondary active" id="active-item" data-hs-tab="#Active" aria-controls="Active">
                                            Active Tasks
                                        </Link>
                                        <Link to="#"  className="hs-tab-active:bg-secondary/10 hs-tab-active:text-secondary cursor-pointer text-nowrap text-defaulttextcolor px-4 py-2 text-[0.75rem] flex-grow font-medium text-center  rounded-md hover:text-secondary " id="Complete-item" data-hs-tab="#Complete" aria-controls="Complete">
                                            Completed Tasks
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                            <div className="sm:mt-0 mt-2">
                                <SpkButton buttontype="button" customClass="btn btn-sm btn-light"><i className="ti ti-plus me-1 font-semibold align-middle inline-block"></i>Add Task</SpkButton>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="tab-content !p-0">
                                <div className="tab-pane show active !p-0 !border-0" id="Active" aria-labelledby="active-item" role="tabpanel">
                                    <div className="table-responsive">
                                        <Spktables tableClass="table whitespace-nowrap table-hover min-w-full" showCheckbox={true}
                                            header={[{title:'Task details', headerClassname:'text-start'}, {title:'Assigned date', headerClassname:'text-start'}, 
                                            {title:'Target', headerClassname:'text-start'},{title:'Assigned to', headerClassname:'text-start'}]}>
                                                {taskList.map((idx)=>(
                                                    <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10" key={Math.random()}>
                                                        <td className="text-center">
                                                            <span>
                                                                <input className="form-check-input" type="checkbox" id="check1" defaultValue="" aria-label="..." defaultChecked={idx.checked} />
                                                            </span>
                                                        </td>
                                                        <td>{idx.description}</td>
                                                        <td className="text-[#8c9097] dark:text-white/50">{idx.time}</td>
                                                        <td><SpkBadge variant={idx.badgeColor} customClass="text-white">{idx.badgeText}</SpkBadge></td>
                                                        <td>
                                                            <div className="avatar-list-stacked !mb-0">
                                                                {idx.avatars.map((avatar, idx) => (
                                                                    <span key={idx}className="avatar avatar-xs !mb-0" >
                                                                        <img src={avatar} alt="img" className="rounded-full"  />
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </Spktables>
                                    </div>
                                </div>
                                <div className="tab-pane !p-0 hidden !border-0" id="Complete" aria-labelledby="complete-item" role="tabpanel">
                                    <div className="table-responsive">
                                        <Spktables tableClass="table whitespace-nowrap table-hover min-w-full" showCheckbox={true}
                                            header={[{title:'Task details', headerClassname:'text-start'}, {title:'Assigned date', headerClassname:'text-start'}, 
                                            {title:'Completed', headerClassname:'text-start'},{title:'Assigned to', headerClassname:'text-start'}]}>
                                                {completedTasks.map((idx)=>(
                                                    <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10" key={Math.random()}>
                                                        <td className="text-center">
                                                            <span>
                                                                <input className="form-check-input" type="checkbox" id="check6" defaultValue="" aria-label="..." />
                                                            </span>
                                                        </td>
                                                        <td>{idx.description}</td>
                                                        <td className="text-[#8c9097] dark:text-white/50">{idx.date}</td>
                                                        <td><SpkBadge variant={idx.badgeColor} customClass="text-white">{idx.badgeText}</SpkBadge></td>
                                                        <td>
                                                            <div className="avatar-list-stacked !mb-0">
                                                                 {idx.avatars.map((avatar, idx) => (
                                                                    <span key={idx} className="avatar avatar-xs !mb-0" >
                                                                        <img src={avatar} alt="img" className="rounded-full"  />
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </Spktables>
                                    </div>
                                </div>
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
                <div className="xxl:col-span-6 xl:col-span-12 md:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Visitors By Countries
                            </div>
                            <SpkDropdown Linktag={true}  Icon={true} IconClass="fe fe-more-vertical text-[0.8rem]" Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" >
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Something else here</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body !p-0">
                            <div className="grid grid-cols-12 gap-x-4">
                                <div className="xxl:col-span-4 xl:col-span-12  col-span-12 sales-visitors-countries">
                                    <div className="mt-2">
                                        <ul className="list-none p-6 my-auto">
                                            {visitorscountries.map((idx)=>(
                                                <li className="mb-4" key={Math.random()}>
                                                    <span className="text-[0.75rem]"><i className={`ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-${idx.iconClass}`}></i>{idx.country}</span><span className="font-semibold ltr:float-right rtl:float-left">{idx.count}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="xxl:col-span-8 xl:col-span-12  col-span-12 text-center">
                                    <div id="visitors-countries">
                                        <WorldMap/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Customers</div>
                            <SpkDropdown Linktag={true}  Icon={true} IconClass="fe fe-more-vertical text-[0.8rem]" Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Something else here</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body !p-0 customers">
                            <ul className="list-group my-1">
                                    {Salesusers.map((idx)=>(
                                        <li className="list-group-item !py-3 !border-0" key={Math.random()}>
                                            <Link to="#" className="!border-0">
                                                <div className="flex items-start">
                                                    <img className="avatar avatar-md me-4 my-auto" src={idx.avatar} alt="Image description" />
                                                    <div className="mt-0">
                                                        <p className="mb-1 font-semibold">{idx.name}</p>
                                                        <p className="mb-0 text-[0.6875rem] text-success">{idx.text}</p>
                                                    </div>
                                                    <span className="ms-auto text-[0.75rem]">
                                                        <span className="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 font-semibold">{idx.balance}</span>
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Billing</div>
                            <div className="tab-menu-heading !border-0 !p-0 ms-auto">
                                <div className="tabs-menu-billing my-1">
                                    <nav className="" aria-label="Tabs" role="tablist">
                                        <Link to="#"  className="hs-tab-active:bg-success/10 hs-tab-active:text-success text-defaulttextcolor py-[0.35rem] px-4 flex-grow  text-[0.75rem] font-medium text-center rounded-md hover:text-success active" id="Invoice-item" data-hs-tab="#Invoice" aria-controls="Invoice">
                                            Invoices
                                        </Link>
                                        <Link to="#"  className="hs-tab-active:bg-success/10 hs-tab-active:text-success text-defaulttextcolor py-[0.35rem] px-4 text-[0.75rem] flex-grow font-medium text-center  rounded-md hover:text-success " id="Revenue-item" data-hs-tab="#Revenue" aria-controls="Revenue">
                                            Revenue
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="tab-content">
                                <div className="tab-pane show active !border-0 !p-0" id="Invoice" aria-labelledby="Invoice-item" role="tabpanel">
                                    <ul className="list-group border-0 py-2 my-2">
                                        {invoices.map((idx)=>(
                                            <li className={`list-group-item items-start !border-0 ${idx.class}`} key={Math.random()}>
                                                <Link to="#" >
                                                    <div className="flex w-full justify-between">
                                                        <div>
                                                            <SpkBadge variant={idx.statusClass} customClass="text-white me-4">{idx.status}</SpkBadge>
                                                        </div>
                                                        <div className="billing-invoice-details">
                                                            <span className="mb-0 font-semibold me-2">Invoice #{idx.id} _ <span className="text-[0.75rem] ">{idx.amount}</span></span>
                                                            <span className="small text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">{idx.date}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="tab-pane hidden !border-0 !p-0" id="Revenue" aria-labelledby="Revenue-item" role="tabpanel">
                                    <ul className="list-group border-0 py-2">
                                        {transactions.map((idx)=>(
                                            <li className="list-group-item items-start !border-0 mb-1" key={Math.random()}>
                                                <Link to="#" >
                                                    <div className="flex w-full justify-between">
                                                        <p className="mb-0 font-semibold">{idx.name}</p>
                                                        <p className={`mb-0 font-semibold text-${idx.amount.includes("+")?"success":"danger"} text-[0.875rem]`}>{idx.amount}</p>
                                                    </div>
                                                    <div className="flex w-full justify-between">
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]"><i className={`ri-arrow-${idx.amount.includes("+")?"up":"down"}-fill align-middle text-${idx.amount.includes("+")?"success":"danger"} me-1`}></i> 
                                                        <span className={`text-${idx.amount.includes("+")?"success":"danger"} me-2`}>{idx.percentage}%</span></span>
                                                        <span className="text-[#8c9097] dark:text-white/50  text-[0.6875rem]">{idx.timeAgo}</span>
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
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Sale Value
                            </div>
                            <SpkDropdown Linktag={true}  Icon={true} IconClass="fe fe-more-vertical text-[0.8rem]" Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" >
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Something else here</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body !p-0 px-1">
                            <div id="sale-value" className="p-5">
                                    <ApexchartsComponent chartOptions={Saleoptions} chartSeries={Saleseries} type="radialBar" height={215} />
                            </div>
                            <div className="grid grid-cols-12 pt-3 ">
                                <div className="xl:col-span-12  col-span-12 border-b dark:border-defaultborder/10 pb-5 text-center flex flex-wrap justify-center"><span className="font-semibold ms-2 text-primary px-4">60% Increase in sale value since last week</span></div>
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-6 border-e dark:border-defaultborder/10 p-4 text-center">
                                    <p className="mb-1">Sale Items</p>
                                    <h5 className="mb-1 font-semibold">567</h5>
                                    <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0">Increased<span className="text-success ms-2"><i className="ri-arrow-up-s-line me-2 font-bold align-middle inline-block"></i>
                                    <SpkBadge variant="" customClass="text-success !text-[0.6875rem]">0.9%</SpkBadge></span></p>
                                </div>
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-6  p-4 text-center">
                                    <p className="mb-1">Sale Revenue</p>
                                    <h5 className="mb-1 font-semibold">$11,197</h5>
                                    <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0">Profit<span className="text-success ms-2"><i className="ri-arrow-down-s-line me-2 font-bold align-middle inline-block"></i>
                                    <SpkBadge variant="success/10" customClass="text-success !text-[0.6875rem]">0.15%</SpkBadge></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Profitable Categories</div>
                            <SpkDropdown Linktag={true}  Icon={true} IconClass="fe fe-more-vertical text-[0.8rem]" Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" >
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#" >Something else here</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="box-body">
                            <ul className="mb-0 !rounded-[0.375rem]">
                                {categories.map((idx)=>(
                                    <li className="list-group-item" key={Math.random()}>
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm bg-light !text-defaulttextcolor font-semibold !mb-0">
                                                   {idx.id}
                                                </span>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="mb-0 font-semibold">{idx.name}</p>
                                            </div>
                                            <div>
                                                <span className="text-success">{idx.amount}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                <li className="list-group-item text-center !py-4">
                                    <SpkButton buttontype="button" Size="lg" variant="primary" customClass="ti-btn !mb-0 !text-[0.75rem] !font-semibold ti-btn-wave">See All Activity</SpkButton>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Orders
                            </div>
                            <div className="flex flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Linktag={true} Arrowicon={true} Toggletext="Sort By" Customclass="!py-1" Linkclass="ti-btn ti-btn-primary !py-1 !bg-primary !text-white !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
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
                                <Spktables tableClass="table whitespace-nowrap table-bordered min-w-full" showCheckbox={true}
                                header={[{title:'Order Id', headerClassname:'text-start'}, {title:'Customer', headerClassname:'text-start'}, 
                                    {title:'Quantity', headerClassname:'text-start'}, {title:'Price', headerClassname:'text-start'},{title:'Status', headerClassname:'text-start'},
                                    {title:'Ordered Date', headerClassname:'text-start'}, {title:'Action', headerClassname:'text-start'} ]}>
                                        {Trendingorders.map((idx) => (
                                            <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10" key={Math.random()}>
                                                <td>
                                                    <span>
                                                        <input className="form-check-input" type="checkbox" id="order_2" defaultValue="" aria-label="..." />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success font-semibold">{idx.orderid}</span>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="text-sm">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.quantity}
                                                </td>
                                                <td>
                                                    <span className="font-semibold text-sm">{idx.price}</span>
                                                </td>
                                                <td>
                                                    <SpkBadge variant={idx.bg} customClass={`text-${idx.color}`}>{idx.status}</SpkBadge>
                                                </td>
                                                <td>
                                                    <span className="text-muted">{idx.date}</span>
                                                </td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" to="#" 
                                                            className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                                                className="ri-download-2-line"></i></Link>
                                                        <Link aria-label="anchor" to="#" 
                                                            className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                                                className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </Spktables>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div>
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

export default Sales