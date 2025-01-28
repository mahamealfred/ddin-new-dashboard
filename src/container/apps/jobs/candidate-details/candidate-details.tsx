import  { FC, Fragment } from 'react'

// import required modules
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import logo1 from "../../../../assets/images/company-logos/1.png";
import logo2 from "../../../../assets/images/company-logos/2.png";
import logo3 from "../../../../assets/images/company-logos/3.png";
import logo6 from "../../../../assets/images/company-logos/6.png";
import logo4 from "../../../../assets/images/company-logos/4.png";
import logo5 from "../../../../assets/images/company-logos/5.png";
import face1 from "../../../../assets/images/faces/1.jpg";
import SwiperComponent from '../../../../@spk/spk-packages/swiper-component';
import { CandidateSwiper, Personaldata } from '../../../../components/ui/data/apps/jobs/candidatedetailsdata';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import Spktables from '../../../../@spk/tables/spk-tables';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface CandidatedetailsProps {}

const Candidatedetails: FC<CandidatedetailsProps> = () =>{ 
    return (
        <Fragment>
            <Pageheader currentpage="Candidate Details" activepage="Jobs" mainpage="Candidate Details" />
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="sm:flex items-center sm:flex-wrap justify-between gap-2">
                                    <div className="md:flex">
                                        <span className="avatar avatar-xxl !rounded-full">
                                            <img src={face1} className="!rounded-full img-fluid" alt="" />
                                        </span>
                                        <div className="sm:ms-4">
                                            <h4 className="font-bold mb-0 sm:flex items-center"><Link to="#" > Brenda Simpson <i className="bi bi-check-circle-fill text-success text-[1rem]" title="Verified candidate"></i></Link></h4>
                                            <Link to="#"  className="font-semibold"><i className="bi bi-briefcase me-1"></i> Software Developer</Link>
                                            <div className="flex items-center text-[.6875rem] text-[#8c9097] dark:text-white/50">
                                                <p className="text-[.6875rem] mb-0">Ratings : </p>
                                                <div className="min-w-fit sm:ms-2">
                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <Link to="#"  className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                    <span>(142)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                            <div className="sm:flex text-[.875rem] mt-4">
                                                <div>
                                                    <p className="mb-1"><i className="bi bi-geo-alt me-2"></i>Banglore, Karnataka</p>
                                                    <p><i className="bi bi-briefcase me-2"></i>1 Year Experience</p>
                                                </div>
                                                <div className="sm:ms-4">
                                                    <p className="mb-1"><i className="bi bi-coin me-2"></i>Package (Yearly) :
                                                        <span className="font-semibold" title="Current Salary">$10,000</span>-
                                                        <span className="font-semibold" title="Expected Salary">$20,000</span>
                                                    </p>
                                                    <p><i className="bi bi-mortarboard me-2"></i>Graduate</p>
                                                </div>
                                            </div>
                                            <div className="popular-tags">
                                                <SpkBadge variant="info/10" customClass=" me-2 !rounded-full  text-info mb-2"><i className="bi bi-moon-stars me-1"></i>Full Time</SpkBadge>
                                                <SpkBadge variant="danger/10" customClass="!rounded-full text-danger mb-2"><i className="bi bi-clock me-1"></i> Immediate Joinee</SpkBadge>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-list flex">
                                        <Link to="#"  className="ti-btn  ti-btn-primary-full dark:border-defaulttextcolor/10 me-2 whitespace-nowrap"><i className="bi bi-download me-1"></i> Download CV</Link>
                                        <Link aria-label="anchor" to="#"  className="ti-btn ti-btn-icon ti-btn-primary me-2">
                                            <i className="ri-heart-line text-[.8125rem] align-middle"></i>
                                        </Link>
                                        <Link aria-label="anchor" to="#"  className="ti-btn ti-btn-icon ti-btn-primary">
                                            <i className="ri-share-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-8 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    <h5 className="mb-0 font-semibold text-[1.375rem]">
                                        Candidate Profile Information
                                    </h5>
                                </div>
                            </div>
                            <div className="box-body !p-0 candidate-edu-timeline">
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2 mb-4"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-briefcase text-[.8125rem] text-white"></i></span> Career Objective :</h5>
                                    <div className="ms-6 ps-4">
                                        <p className="opacity-[0.9] mb-4">Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                        <p className="mb-0 opacity-[0.9]">Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</p>
                                    </div>
                                </div>
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-mortarboard text-[.8125rem] text-white"></i></span> Education :</h5>
                                    <div className="ms-6 ps-4">
                                        <p className="font-semibold text-[.875rem] mb-0">Bachelors of science in computer science</p>
                                        <div className="sm:flex gap-2">
                                            <p className="mb-0">Dwayne University</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[0.75rem]"></i> Nellore</p>
                                        </div>
                                        <p className="mb-4"> (2019 Mar - 2022 Apr)</p>
                                        <p className="font-semibold text-[.875rem] mb-0">Intermediate (MPC)</p>
                                        <div className="sm:flex gap-2">
                                            <p className="mb-0">Sprect College</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[0.75rem]"></i> Warangal</p>
                                        </div>
                                        <p className="mb-0"> (2017 Mar - 2019 Apr)</p>
                                    </div>
                                </div>
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-award text-[.8125rem] text-white"></i></span> Certifications :</h5>
                                    <div className="ms-6 ps-4">
                                        <p className="font-semibold text-[.875rem] mb-0">Web Development (3 Months)</p>
                                        <p className="mb-4">EMC Solutions Pvt Ltd</p>
                                        <p className="font-semibold text-[.875rem] mb-0">Python Development (6 Months)</p>
                                        <p className="mb-0">Dabre Services Pvt Ltd</p>
                                    </div>
                                </div>
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-journal-medical text-[.8125rem] text-white"></i></span> Publications :</h5>
                                    <div className="ms-4">
                                        <ol className="list-group border-0 list-disc ps-[2rem]">
                                            <li className="border-0 py-1"><span className="font-semibold">“One of a Kind Design,”</span> Web Design Book, Poulin Publishing, 2018</li>
                                            <li className="border-0 py-1"><span className="font-semibold">“Website Design in 2019,”</span> A List Apart, June 2019</li>
                                            <li className="border-0 py-1"><span className="font-semibold">“Usable Information Architecture,”</span> SitePoint, Feb 2019</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-activity text-[.8125rem] text-white"></i></span> Activities and Interests :</h5>
                                    <div className="ms-4">
                                        <ol className="list-group border-0 list-disc ps-[2rem]">
                                            <li className="border-0 py-1">Community Involvement</li>
                                            <li className="border-0 py-1">Yoga</li>
                                            <li className="border-0 py-1">Travel</li>
                                            <li className="border-0 py-1">Art</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-link-45deg text-[.8125rem] text-white"></i></span> References :</h5>
                                    <div className="ms-6 ps-4">
                                        <p className="mb-4"><span className="font-semibold ">Name : </span> Nicole Chiu</p>
                                        <p className="mb-4"><span className="font-semibold ">Designation : </span> Software Developer</p>
                                        <p className="mb-4"><span className="font-semibold ">Company Name : </span> Spotech Technical Solutions</p>
                                        <p className="mb-4"><span className="font-semibold ">Mobile : </span> +91 7865443679</p>
                                        <p className="mb-4"><span className="font-semibold ">Email : </span> nchiu@email.com</p>
                                        <p className="mb-0"><span className="font-semibold">Location : </span> Hyderabad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    <h5 className="mb-0 font-semibold">Experience Overview</h5>
                                </div>
                            </div>
                            <div className="box-body !p-0 candidate-edu-timeline">
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2 mb-4"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-briefcase text-[.8125rem] text-white"></i></span> Experience :</h5>
                                    <div className="ms-6 ps-4">
                                        <p className="font-semibold text-[.875rem] mb-0">Full Stack Developer (2019 Mar - 2022 Apr)</p>
                                        <div className="sm:flex gap-2">
                                            <p className="mb-4">Spotech Technical Solutions</p>
                                            <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Kondapur, Hyderabad</p>
                                        </div>
                                        <p className="font-semibold mb-2">Responsibilities :</p>
                                        <ol className="list-group border-0 list-disc ps-[2rem]">
                                            <li className="border-0 py-1">Design thoughtful, beautiful, and useful software user interfaces and experiences in a team environment..</li>
                                            <li className="border-0 py-1">Create user-centered designs by considering market analysis, customer feedback, and usability findings.</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2 mb-4"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-people text-[.8125rem] text-white"></i></span> Volunteer Experience:</h5>
                                    <div className="ms-6 sm:ps-4">
                                        <p className="font-semibold text-[.875rem] mb-0">Volunteer in the Student Organization</p>
                                        <p className="mb-2 text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[0.75rem]"></i> Warangal, 2015</p>
                                        <ol className="list-group border-0 list-disc ps-[2rem]">
                                            <li className="border-0 py-1">In charge of Organizing activities for approximately 100+ internation schools in 2015</li>
                                            <li className="border-0 py-1">In charge of Organizing activities for approximately 100+ internation schools in 2015</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box border dark:border-defaultborder/10 !bg-primary/10 text-primary shadow-none">
                            <div className="box-body">
                                <div className="sm:grid grid-cols-12 items-center">
                                    <div className="lg:col-span-6 col-span-6">
                                        <h5 className="font-semibold mb-0">🖐 Was this profile fit for someone?</h5>
                                    </div>
                                    <div className="lg:col-span-6 col-span-6 text-end">
                                        <Link to="#"  className="ti-btn ti-btn-success-full dark:border-defaultborder/10 ti-btn-lg">
                                            <i className="ri-share-line me-2"></i>Share Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-0 !text-defaulttextcolor">Related Profiles</h4>
                            <p className="!text-defaultsize !text-defaulttextcolor mb-6">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <SwiperComponent slides={CandidateSwiper} spaceBetween={30} centeredSlides={true} navigation={true} className="mySwiper" autoplay={true}/>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Skills
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="popular-tags">
                                    <SpkBadge variant="light" customClass="me-1 !rounded-full !text-defaulttextcolor">HTML</SpkBadge>
                                    <SpkBadge variant="light" customClass="me-1 !rounded-full !text-defaulttextcolor">CSS</SpkBadge>
                                    <SpkBadge variant="light" customClass="me-1 !rounded-full !text-defaulttextcolor">Javascript</SpkBadge>
                                    <SpkBadge variant="light" customClass="me-1 !rounded-full !text-defaulttextcolor">Angular</SpkBadge>
                                    <SpkBadge variant="light" customClass="!rounded-full !text-defaulttextcolor">React</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box overflow-hidden">
                            <div className="box-header">
                                <div className="box-title">
                                    Tools Used
                                </div>
                            </div>
                            <div className="box-body">
                                <span className="avatar me-2 !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src={logo1} alt="logo" />
                                </span>
                                <span className="avatar me-2 !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src={logo2} alt="logo" />
                                </span>
                                <span className="avatar me-2 !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src={logo3} alt="logo" />
                                </span>
                                <span className="avatar me-2 !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src={logo4} alt="logo" />
                                </span>
                                <span className="avatar me-2 !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src={logo5} alt="logo" />
                                </span>
                                <span className="avatar !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src={logo6} alt="logo" />
                                </span>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Languages
                                </div>
                            </div>
                            <div className="box-body">
                                <p className="mb-4"><span className="font-semibold">English : </span>Fluent</p>
                                <p className="mb-4"><span className="font-semibold">Hindi : </span>Intermediate</p>
                                <p className="mb-0"><span className="font-semibold">Telugu : </span>Expert</p>
                            </div>
                        </div>
                        <div className="box custom-box overflow-hidden">
                            <div className="box-header">
                                <div className="box-title">
                                    Personal Information
                                </div>
                            </div>
                            <div className="box-body !p-2">
                                <Spktables tableClass="table table-borderless min-w-full">
                                        {Personaldata.map((idx)=>(
                                        <tr key={Math.random()}>
                                            <td className="">
                                                <span className="font-semibold">{idx.heading}</span>
                                            </td>
                                            <td> {idx.text}</td>
                                        </tr>
                                        ))}
                                </Spktables>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center">
                                    <p className="text-[.9375rem] mb-0 me-4 font-semibold">Social :</p>
                                    <div className="btn-list mb-0 flex gap-1 flex-wrap">
                                        <SpkButton buttontype="button" Label="button" variant="primary" Size="sm" customClass="ti-btn ti-btn-icon me-[0.375rem] xl:mb-0">
                                            <i className="ri-facebook-line"></i>
                                        </SpkButton>
                                        <SpkButton buttontype="button" Label="button" variant="secondary" Size="sm" customClass="ti-btn ti-btn-icon me-[0.375rem] xl:mb-0">
                                            <i className="ri-twitter-x-line"></i>
                                        </SpkButton>
                                        <SpkButton buttontype="button" Label="button" variant="warning" Size="sm" customClass="ti-btn ti-btn-icon me-[0.375rem] xl:mb-0">
                                            <i className="ri-instagram-line"></i>
                                        </SpkButton>
                                        <SpkButton buttontype="button" Label="button" variant="success" Size="sm" customClass="ti-btn ti-btn-icon me-[0.375rem] xl:mb-0">
                                            <i className="ri-github-line"></i>
                                        </SpkButton>
                                        <SpkButton buttontype="button" Label="button" variant="danger" Size="sm" customClass="ti-btn ti-btn-icon xl:mb-0">
                                            <i className="ri-youtube-line"></i>
                                        </SpkButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="">
                                    <h5 className="font-semibold mb-4">Get Latest Alerts</h5>
                                    <p>Latest candidate updates on the go to recieved direct to your email. Stay updated with your latest new candidates list.</p>
                                    <div className="input-group mb-4">
                                        <input type="text" className="form-control !border-s" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                        <SpkButton variant="primary-full" customClass="ti-btn !mb-0" buttontype="button" Id="blog-subscribe">Subscribe</SpkButton>
                                    </div>
                                    <label className="form-check-label">
                                        By Subscribing you accept to <Link to="#"  className="text-success ms-1"><u>privacy policy</u></Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Candidatedetails