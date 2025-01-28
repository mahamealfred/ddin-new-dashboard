import  { FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader'
import { Link } from 'react-router-dom'
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import SpkBadge from '../../../@spk/uielements/spk-badge';
import SpkButton from '../../../@spk/uielements/spk-button';

interface NotificationsProps {}

const Notifications: FC<NotificationsProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Notifications" activepage="Pages" mainpage="Notifications" />
            <div className="container">
                <div className="grid grid-cols-12 gap-6 !mx-auto">
                    <div className="xxl:col-span-2 col-span-12"></div>
                    <div className="xxl:col-span-8 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                        <ul className="list-none mb-0 notification-container">
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link to="#">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="leading-top">
                                                    <span className="avatar avatar-md online me-4 avatar-rounded">
                                                        <img alt="avatar" src={face4} />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Emperio</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Project assigned by the manager all
                                                            <SpkBadge variant="primary/10" customClass="text-primary font-semibold mx-1">files</SpkBadge>and
                                                            <SpkBadge variant="primary/10" customClass="text-primary font-semibold mx-1">folders</SpkBadge>were included</p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">12 mins ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <SpkBadge variant="light" customClass="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                24,Oct 2022
                                                            </SpkBadge>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link to="#">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md offline me-4 avatar-rounded">
                                                        <img alt="avatar" src={face15} />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Dwayne Bero</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Admin and other team accepted your work request</p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">17 mins ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <SpkBadge variant="light" customClass="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                30,Sep 2022
                                                            </SpkBadge>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link to="#">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md offline me-4 avatar-rounded">
                                                        <img alt="avatar" src={face11} />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Alister Chuk</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Temporary data will be 
                                                            <SpkBadge variant="danger/10" customClass="text-danger font-semibold mx-1">deleted</SpkBadge> once dedicated time complated</p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">4 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <SpkBadge variant="light" customClass="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                11,Sep 2021
                                                            </SpkBadge>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link to="#">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md online me-4 avatar-rounded">
                                                        <img alt="avatar" src={face5} />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Melissa Blue</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Approved date for sanction of loan is verified <i className="ri-checkbox-circle-line text-success ms-1 text-[1rem] align-middle"></i></p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">5 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <SpkBadge variant="light" customClass="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                18,Sep 2021
                                                            </SpkBadge>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link to="#">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="avatar avatar-md bg-primary online me-4 avatar-rounded !text-white">
                                                    ZS
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Zack Slayer</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Social network accounts are at risk check your
                                                             <SpkBadge variant="success/10" customClass="text-success font-semibold mx-1">login</SpkBadge> details</p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">9 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <SpkBadge variant="light" customClass="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                15,Sep 2021
                                                            </SpkBadge>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link to="#">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="avatar avatar-md online me-4 avatar-rounded">
                                                    <img alt="avatar" src={face2} />
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Monika Karen</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Changed the password of gmail 4 hrs ago.
                                                             <SpkBadge variant="secondary"  customClass="text-white ms-1">Update</SpkBadge></p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">12 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <SpkBadge variant="light" customClass="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                12,Sep 2021
                                                            </SpkBadge>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="!text-center mb-4">
                            <SpkButton buttontype="button" variant="info" customClass="ti-btn ti-btn-loader">Loading
                                <span className="ti-spinner !h-4 !w-4" role="status"></span>
                            </SpkButton>
                        </div>
                    </div>
                    <div className="xxl:col-span-2 col-span-12"></div>
                </div>

            </div>
        </Fragment>
    )
}

export default Notifications