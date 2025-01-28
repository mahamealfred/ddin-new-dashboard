
import  { FC,Fragment } from 'react'
import { Link } from 'react-router-dom';
import Pageheader from '../../../components/common/page-header/pageheader';
import { Courselist, Coursescategories, Coursestabledata, Earningoptions, Earningseries, Payoptions, Payseries, Studentsdata, TopInstructors } from '../../../components/ui/data/dashboards/coursedata';
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import SpkCoursecards from '../../../@spk/dashboards/spk-coursecards';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import Spktables from '../../../@spk/tables/spk-tables';
import SpkButton from '../../../@spk/uielements/spk-button';

interface CoursesProps {}

const Courses: FC<CoursesProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Courses" activepage="Dashboards" mainpage="Courses" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-12  col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Categories
                                    </div>
                                    <div>
                                        <SpkButton buttontype="button" variant="light" customClass="ti-btn !py-1 !text-[0.75rem] !px-2">View All</SpkButton>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="grid grid-cols-12 xl:gap-y-0 gap-4">
                                        {Coursescategories.map((idx)=>(
                                            <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12" key={Math.random()}>
                                                <div>
                                                    <Link to="#" className={`category-link ${idx.status} text-center`}>
                                                        {idx.svg}
                                                        <p className="text-[0.875rem] mb-1 text-default font-semibold text-defaulttextcolor">{idx.title}</p>
                                                        <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50">{idx.count} Courses</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between flex gap-2">
                                    <div className="box-title">Earnings Report</div>
                                    <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                        <SpkButton buttontype="button"
                                             variant="primary-full" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3 !text-white !rounded-e-none">1M</SpkButton>
                                        <SpkButton buttontype="button"
                                             variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3">6M</SpkButton>
                                        <SpkButton buttontype="button"
                                             variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3">1Y</SpkButton>
                                        <SpkButton buttontype="button"
                                             variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3 !rounded-s-none">All</SpkButton>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div id="courses-earnings">
                                        <ApexchartsComponent chartOptions={Earningoptions} chartSeries={Earningseries} type="bar" height={340} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-5 xl:col-span-5 lg:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <SpkCoursecards Percentagevalue='+2.02%' Value="$98,312" Color='primary' Icon='wallet' Title='YTD Earnings' />
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <SpkCoursecards Percentagevalue='-0.24%' Value="35,393" Color='secondary' Icon='users' Title='Total Students' />
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <SpkCoursecards Percentagevalue='-1.32%' Value="573" Color='warning' Icon='id' Title='Total Instructors' />
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <SpkCoursecards Percentagevalue='+0.89%' Value="2,389" Color='danger' Icon='gift' Title='Total Courses' />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        My Courses
                                    </div>
                                    <div>
                                        <SpkButton buttontype="button" variant="light" customClass="ti-btn !py-1 !text-[0.75rem] !px-2">View All</SpkButton>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="table-responsive">
                                        <Spktables tableClass="table whitespace-nowrap min-w-full"  
                                            header={[{title:'Course Title', headerClassname:'text-start'}, {title:'Status', headerClassname:'text-start'}, 
                                            {title:'Duration', headerClassname:'text-start'}, {title:'Type', headerClassname:'text-start'} ,{title:'Instructor', headerClassname:'text-start'}]}>
                                                {Coursestabledata.map((idx)=>(
                                                    <tr className="border-t border-defaultborder dark:border-defaultborder/10" key={Math.random()}>
                                                        <th scope="row">
                                                            <div className="flex items-center">
                                                                <div className="me-2">
                                                                    <span className="items-center"></span>
                                                                </div>
                                                                <div>
                                                                   {idx.title}
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="flex items-center">
                                                                <div className="progress progress-xs  course-status-progress progress-animate me-2" role="progressbar" aria-valuenow={idx.status} aria-valuemin={0} aria-valuemax={100}>
                                                                    <div className={`progress-bar progress-bar-striped !bg-${idx.color} ${idx.width}`}></div>
                                                                </div>
                                                                <div>{idx.status}%</div>
                                                            </div>
                                                        </td>
                                                        <td> {idx.duration}</td>
                                                        <td><SpkBadge  variant={`outline-${idx.color}`}>{idx.type}</SpkBadge></td>
                                                        <td>
                                                            <div className="flex items-center">
                                                                <div className="me-2">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={idx.src} alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="font-semibold">{idx.instructor}</div>
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
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Top Instructors</div>
                        </div>
                        <div className="box-body">
                            <ul className="list-none courses-instructors mb-0">
                                {TopInstructors.map((idx)=>(
                                    <li key={Math.random()}>
                                        <div className="flex">
                                            <div className="flex flex-grow items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded">
                                                        <img src={idx.avatar} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block font-semibold">{idx.name}</span>
                                                    <span className="text-[#8c9097] dark:text-white/50">{idx.text}</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="block text-primary font-semibold">{idx.balance}</span>
                                                <span className="text-[#8c9097] dark:text-white/50">{idx.domain}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-5 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                New Students
                            </div>
                            <div>
                                <SpkButton buttontype="button" variant="light" customClass="ti-btn !py-1 !text-[0.75rem] !px-2">View All</SpkButton>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <Spktables tableClass="table whitespace-nowrap min-w-full"  headerClass="bg-light"
                                     header={[{title:'Name', headerClassname:'text-start'}, {title:'Courses', headerClassname:'text-start'}, 
                                    {title:'Completed', headerClassname:'text-start'}, {title:'Action', headerClassname:'text-start'} ]}>
                                        {Studentsdata.map((idx)=>(
                                            <tr key={Math.random()} className="border-t border-defaultborder dark:border-defaultborder/10">
                                                <th scope="row">
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="blockfont-semibold">{idx.name}</span>
                                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">{idx.mail}</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>{idx.courses}</td>
                                                <td>{idx.completed}</td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" to="#"
                                                            className="ti-btn  ti-btn-wave !rounded-full !border-info/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                                className="ri-pencil-line"></i></Link>
                                                        <Link aria-label="anchor" to="#"
                                                            className="ti-btn  ti-btn-wave !rounded-full !border-danger/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
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
                <div className="xl:col-span-4 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Payouts
                            </div>
                            <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                <SpkButton buttontype="button"
                                    variant="primary-full" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3 !text-white">1M</SpkButton>
                                <SpkButton buttontype="button"
                                    variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3">6M</SpkButton>
                                <SpkButton buttontype="button"
                                    variant="primary" customClass="ti-btn-group !border-0 !text-xs !py-2 !px-3 !rounded-s-none">1Y</SpkButton>
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="course-payouts">
                                <ApexchartsComponent chartOptions={Payoptions} chartSeries={Payseries} type="line" height={265} />
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
                                Course List
                            </div>
                            <div className="flex items-center flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="py-1"  Toggletext="Sort By"
                                 Linkclass="ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"  IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
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
                                <Spktables tableClass="table whitespace-nowrap table-bordered min-w-full"
                                 header={[{title:'S.No', headerClassname:'text-start'}, {title:'Course', headerClassname:'text-start'}, 
                                    {title:'Category', headerClassname:'text-start'}, {title:'Classes', headerClassname:'text-start'},{title:'Last Updated', headerClassname:'text-start'},
                                    {title:'Instructor', headerClassname:'text-start'}, {title:'Students', headerClassname:'text-start'} ,{title:'Actions', headerClassname:'text-start'} ]}>
                                        {Courselist.map((idx) => (
                                            <tr className="border-t border-defaultborder dark:border-defaultborder/10" key={Math.random()}>
                                                <td>
                                                    {idx.id}
                                                </td>
                                                <td>
                                                    <div className="flex items-center leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-xs ">
                                                                <img src={idx.src} alt="" className="!rounded-md" />
                                                            </span>
                                                        </div>
                                                        <div>{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.category}
                                                </td>
                                                <td>
                                                    {idx.classes}
                                                </td>
                                                <td>
                                                    {idx.last}
                                                </td>
                                                <td>
                                                    {idx.instructor}
                                                </td>
                                                <td>
                                                    {idx.students}
                                                </td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" to="#"
                                                            className="ti-btn  ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                                className="ri-pencil-line"></i></Link>
                                                        <Link aria-label="anchor" to="#"
                                                            className="ti-btn  ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
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
                                <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
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
        </Fragment>
    )
}

export default Courses