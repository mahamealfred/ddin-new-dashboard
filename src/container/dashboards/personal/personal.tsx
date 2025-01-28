import  { FC,Fragment } from 'react'
import { Discover, FavouriteContacts, goals, Sleepoptions,Sleepseries, Wateroptions, Waterseries} from '../../../components/ui/data/dashboards/personaldata';
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import face9 from "../../../assets/images/faces/9.jpg";
import face1 from "../../../assets/images/faces/1.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import SpkButton from '../../../@spk/uielements/spk-button';

interface PersonalProps {}

const Personal: FC<PersonalProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Personal" activepage="Dashboards" mainpage="Personal" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-7 col-span-12">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                    <div className="box overflow-hidden">
                                        <div className="box-body !p-0">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between">
                                                    <div className="mb-4">
                                                        <span className="block font-semibold text-[0.9375rem]">Water Tracking</span>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] block">87 Points</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar bg-primary text-white">
                                                            <i className="bi bi-droplet text-[1.125rem]"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="text-[1.5rem] font-semibold">8.1</span>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] ms-1 inline-flex">Lt</span>
                                                    </p>
                                                    <span className="text-[#8c9097] dark:text-white/50">0.9 Lt more to reach goal</span>
                                                </div>
                                            </div>
                                            <div id="waterTrack">
                                                 <ApexchartsComponent chartOptions={Wateroptions} chartSeries={Waterseries} type="area" height={115} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                    <div className="box overflow-hidden">
                                        <div className="box-body !p-0">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between">
                                                    <div className="mb-4">
                                                        <span className="block font-semibold text-[0.9375rem]">Sleep Tracking</span>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] block">54 Points</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar bg-success text-white">
                                                            <i className="bi bi-alarm text-[1.125rem]"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="text-[1.5rem] font-semibold">5.2</span>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] ms-1 inline-flex">Hrs</span>
                                                    </p>
                                                    <span className="text-[#8c9097] dark:text-white/50">2.8 Hrs more to reach goal</span>
                                                </div>
                                            </div>
                                            <div id="sleepTrack">
                                                <ApexchartsComponent chartOptions={Sleepoptions} chartSeries={Sleepseries} type="area" height={115} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-5 col-span-12">
                            <div className="box">
                                <div className="box-body !p-0">
                                    <div className="flex flex-wrap items-center border-b border-dashed dark:border-defaultborder/10">
                                        <div className="px-6 py-4 flex-grow border-e border-dashed dark:border-defaultborder/10">
                                            <div className="flex items-center justify-between">
                                                <p className="mb-0 flex-grow text-[0.875rem] font-semibold">Instagram</p>
                                                <div className="ms-0">
                                                    <span className="avatar bg-light !text-danger"><i className="bi bi-instagram text-[1rem]"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 text-[1.5rem] font-semibold">121K</p>
                                            <div className="flex-between">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]  inline-block">6 min ago</span>
                                                <span className="text-danger"><i className="bi bi-arrow-down-right me-1 text-[0.625rem] ms-1"></i>1.5%</span>
                                            </div>
                                        </div>
                                        <div className="px-6 py-4 flex-grow border-b-0 border-dashed dark:border-defaultborder/10">
                                            <div className="flex items-center justify-between">
                                                <p className="mb-0 flex-grow text-[0.875rem] font-semibold">Facebook</p>
                                                <div className="ms-2">
                                                    <span className="avatar bg-light !text-warning"><i className="bi bi-facebook text-[1rem]"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 text-[1.5rem] font-semibold">2.1K</p>
                                            <div className="flex-between">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]  inline-block">1 hr ago</span>
                                                <span className="text-warning"><i className="bi bi-arrow-down-right me-1 text-[0.625rem] ms-1"></i>1.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center">
                                        <div className="px-6 py-4 flex-grow border-e border-dashed dark:border-defaultborder/10">
                                            <div className="flex items-center justify-between">
                                                <p className="mb-0 flex-grow text-[0.875rem] font-semibold">Youtube</p>
                                                <div className="ms-1">
                                                    <span className="avatar bg-light !text-info"><i className="bi bi-youtube text-[1rem]"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 text-[1.5rem] font-semibold">1.1M</p>
                                            <div className="flex-between">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]  inline-block">1 day ago</span>
                                                <span className="text-info"><i className="bi bi-arrow-up-right me-1 text-[0.625rem] ms-1"></i>1.9%</span>
                                            </div>
                                        </div>
                                        <div className="px-6 py-4 flex-grow border-dashed dark:border-defaultborder/10">
                                            <div className="flex items-center justify-between">
                                                <p className="mb-0 flex-grow text-[0.875rem] font-semibold">Twitter</p>
                                                <div className="ms-2">
                                                    <span className="avatar bg-light !text-purplemain"><i className="ri-twitter-x-line text-[1rem]"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 text-[1.5rem] font-semibold">2.1K</p>
                                            <div className="flex-between">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] inline-block">1 week ago</span>
                                                <span className="text-purplemain"><i className="bi bi-arrow-up-right me-1 text-[0.625rem] ms-1 "></i>1.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex justify-between mb-6">
                                                <div className="me-1">
                                                    <h6 className="!text-[0.9375rem] font-medium mb-1">Primary Account</h6>
                                                    <Link to="#" className="text-[0.75rem] text-primary opacity-[8]">Change<i className="bi bi-box-arrow-up-right text-[0.6875rem] ms-1"></i></Link>
                                                </div>
                                                <div className="min-w-fit">
                                                    <div className="avatar bg-primary/10 !text-primary">
                                                        <i className="ri-paypal-fill text-[1.125rem]"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-[1.5rem] font-semibold mb-4">$1,29,389.00</p>
                                            <p className="mb-1 text-[0.875rem]">Sarah Jahn SP</p>
                                            <div className="flex justify-between text-[#8c9097] dark:text-white/50">
                                                <span>XXXX XXXX XXXX 1116</span>
                                                <span>12/24</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">Quick Transfer</div>
                                            <Link to="#" className="text-primary">View History<i className="bi bi-box-arrow-up-right text-[0.6875rem] ms-2"></i></Link>
                                        </div>
                                        <div className="box-body">
                                            <div className="avatar-list-stacked mb-6">
                                                <span className="avatar avatar-rounded">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face8} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face10} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face4} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face13} alt="img" />
                                                </span>
                                                <Link aria-label="anchor" className="avatar bg-light !text-defaulttextcolor avatar-rounded" to="#">
                                                    <i className="ri-arrow-right-s-line text-[1.125rem]"></i>
                                                </Link>
                                            </div>
                                            <div className="mt-2">
                                                <div className="mt-2">
                                                    <label className="text-[#8c9097] dark:text-white/50 mb-1">Send / Receive</label>
                                                    <div className="input-group inline-flex">
                                                        <span className="input-group-text  !border-e-0 ">Send To</span>
                                                        <input type="text" defaultValue="11167731611" aria-label="First name" className="form-control !border-x-0 border-defaultborder dark:bg-bodybg dark:border-defaultborder/10" />
                                                        <SpkButton variant="light" customClass="ti-btn !mb-0" buttontype="button">Check</SpkButton>
                                                    </div>
                                                    <label className="text-success text-[0.75rem]">Say Hii</label>
                                                </div>
                                                <div className="input-group mt-4 !flex-nowrap">
                                                    <span className="input-group-text !border-e-0">Amount</span>
                                                    <input type="text" defaultValue="2000" aria-label="First name" className="ti-form-control flex-auto w-full block" />
                                                </div>
                                            </div>
                                            <div className="flex gap-4 mt-6">
                                                <SpkButton buttontype="button" Label="button" variant="primary" customClass="ti-btn ti-btn-icon"><i className="bi bi-arrow-down-up"></i></SpkButton>
                                                <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white flex-grow">Proceed To Pay</SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-8 col-span-12">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-header">
                                            <div className="box-title">
                                                Discover
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="grid grid-cols-12 md:gap-y-0 gap-y-4">
                                                {Discover.map((idx)=>(
                                                    <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-4 text-center" key={Math.random()}>
                                                        <Link aria-label="anchor" to="#" className={`ti-btn ti-btn-${idx.buttonClass} !border-0 !px-6 !py-4 leading-none rounded`}>
                                                            <i className={`bi bi-${idx.iconClass} text-[1.375rem]`}></i>
                                                        </Link>
                                                        <Link to="#" className="block pt-2 text-[#8c9097] dark:text-white/50 font-semibold">{idx.label}</Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Upcoming Events
                                            </div>
                                            <SpkButton buttontype="button" variant="light" customClass="ti-btn !py-1 !px-2 !text-[0.75rem]">View All</SpkButton>
                                        </div>
                                        <div className="box-body">
                                            <ul className="list-none mb-0 personal-upcoming-events">
                                                <li>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-calendar2-heart text-[1rem] text-primary"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span>Meeting with <span className="text-primary font-semibold">Umar Xai</span></span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">2 Hours</span>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="primary/10" customClass="text-primary whitespace-nowrap">11-06-2023</SpkBadge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded">
                                                                <img src={face2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span><span className="text-primary font-semibold">Shin Map</span> Birthday Party</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">5 Hours</span>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="success/10" customClass="text-success whitespace-nowrap">15-06-2023</SpkBadge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-compass text-[1rem] text-pinkmain"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span>Holiday Trip To Italy</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">1 Week</span>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="danger/10" customClass="text-danger whitespace-nowrap">20-06-2023</SpkBadge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-balloon-heart text-[1rem] text-success"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span>Wedding Anniversary</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">1 Day</span>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="secondary/10" customClass="text-secondary whitespace-nowrap">24-07-2023</SpkBadge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded">
                                                                <img src={face7} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span>Meeting with <span className="text-primary font-semibold">Irav Ert</span></span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">45 Minutes</span>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="warning/10" customClass="text-warning whitespace-nowrap">15-06-2023</SpkBadge>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Recent Messages
                                            </div>
                                            <SpkButton buttontype="button" variant="light" customClass="ti-btn !py-1 !px-2 !text-[0.75rem]">View All</SpkButton>
                                        </div>
                                        <div className="box-body">
                                            <div className="avatar-list-stacked mb-6">
                                                <span className="avatar avatar-rounded">
                                                    <img src={face1} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face9} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face3} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face11} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face6} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face14} alt="img" />
                                                </span>
                                                <Link aria-label="anchor" className="avatar bg-light !text-defaulttextcolor avatar-rounded" to="#">
                                                    <i className="ri-arrow-right-s-line text-[1.125rem]"></i>
                                                </Link>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="font-semibold">Messages</div>
                                                <div><i className="ri-check-double-line me-1 align-middle text-[#8c9097] dark:text-white/50 inline-flex"></i>Mark as read</div>
                                            </div>
                                            <div className="mt-6">
                                                <ul className="list-none mb-0 personal-messages-list">
                                                    <li>
                                                        <div className="flex flex-wrap items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded">
                                                                    <img src={face12} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <span className="font-semibold block">Elin Misk</span>
                                                                <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 block message">Hello there! How are you doing? Call me when...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">2 min</span>
                                                                <SpkBadge variant="primary" customClass="!rounded-full text-white">2</SpkBadge>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="flex flex-wrap items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded">
                                                                    <img src={face2} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <span className="font-semibold block">Shakira Shen</span>
                                                                <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 block message">I would like to discuss about that assets...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">9:43Pm</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="flex flex-wrap items-center">
                                                            <div className="me-2">
                                                                <span className="avatar bg-primary/10 !text-primary avatar-rounded">
                                                                    <i className="ri-user-line text-[1.125rem]"></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <span className="font-semibold block">Sebastian</span>
                                                                <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 block message">Shall we go to the cafe at downtown...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Yesterday</span>
                                                                <SpkBadge variant="primary" customClass="!rounded-full text-white">2</SpkBadge>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <span className="block text-[0.9375rem] font-semibold">My Profile</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">67% Completed - <Link to="#" className="text-center text-primary">Click Here<i className="bi bi-box-arrow-up-right text-[0.625rem] ms-2 align-middle"></i></Link></span>
                                        </div>
                                        <div>
                                        <SpkDropdown Customclass="" Linktag={true} Toggletext="" arialexpand={false} Icon={true} IconClass="fe fe-more-vertical text-[0.8rem]"
                                                Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" >
                                               <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                    to="#">Week</Link></li>
                                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                    to="#">Month</Link></li>
                                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                    to="#">Year</Link></li>
                                        </SpkDropdown>
                                        </div>
                                    </div>
                                    <div className="text-center mb-4">
                                        <div className="mb-4">
                                            <span className="avatar avatar-xxl avatar-rounded circle-progress p-1">
                                                <img src={face9} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold !mb-0 text-[1.25rem]">Json Taylor</h5>
                                            <p className="text-[.8125rem] text-[#8c9097] dark:text-white/50">jsontaylor345@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className=" text-center">
                                        <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="ti-btn ti-btn-primary !me-[0.65rem] !font-medium !py-1 !px-2 !text-[0.75rem]">
                                            Edit Profile
                                        </Link>
                                        <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem]">
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-12 xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">My Goals</div>
                                    <SpkButton buttontype="button" variant="light" customClass="ti-btn !py-1 !px-2 !text-[0.75rem]">View All</SpkButton>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none personal-goals-list mb-0">
                                        {goals.map((idx)=>(                                        
                                            <li key={Math.random()}>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className={`avatar avatar-rounded bg-${idx.iconBgClass}/10 !text-${idx.iconBgClass}`}>
                                                            <i className={`bi bi-${idx.iconClass} text-[1.125rem]`}></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="block font-semibold">{idx.title}</span>
                                                            <span className={`block text-${idx.iconBgClass}`}>{idx.progresstxt}%</span>
                                                        </div>
                                                        <div className="progress progress-animate progress-xs" role="progressbar" aria-valuenow={idx.progresstxt} aria-valuemin={0} aria-valuemax={100}>
                                                            <div className={`progress-bar progress-bar-striped !bg-${idx.iconBgClass} ${idx.progress}`}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-12 xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Favourite Contacts
                                    </div>
                                    <SpkButton buttontype="button" variant="light" customClass="ti-btn !py-1 !px-2 !text-[0.75rem]">View All</SpkButton>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none personal-favourite-contacts mb-0">
                                        {FavouriteContacts.map((idx)=>(
                                            <li key={Math.random()}>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar">
                                                            <img src={idx.avatar} alt="" className="rounded-md" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <span className="font-semibold block mb-1">{idx.name}</span>
                                                        <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">{idx.text}</span>
                                                    </div>
                                                    <div>
                                                        <Link aria-label="anchor" to="#" className="text-danger me-3"><i className="bi bi-heart-fill"></i></Link>
                                                        <SpkDropdown Customclass="" Linktag={true} Toggletext="" arialexpand={false} Icon={true} IconClass="bi bi-three-dots text-[0.8rem]"
                                                            Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-[#8c9097] dark:text-white/50 !text-[0.8rem] !py-1 !px-2  !font-medium" >
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#">Action</Link></li>
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#">Another Action</Link></li>
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#">Something Else Here</Link></li>
                                                        </SpkDropdown>
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
        </Fragment>
    )
}

export default Personal