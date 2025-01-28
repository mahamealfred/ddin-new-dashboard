import  { FC, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../../../redux/store';
import { ThemeChanger } from '../../../redux/action';
import { Link } from 'react-router-dom';
import jobslanding8 from "../../../assets/images/media/jobs-landing/8.png";
import jobslanding7 from "../../../assets/images/media/jobs-landing/7.png";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.png";
import desktopwhitelogo from "../../../assets/images/brand-logos/desktop-white.png";
import SwiperComponent from '../../../@spk/spk-packages/swiper-component';
import { Accountdata, categorydata, Jobdata, Jobsdata, Questionsdata, slide, Updatedblog } from '../../../components/ui/data/pages/landingdata';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Spktitlecards from '../../../@spk/uielements/cards/spktitlecards';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import SpkJobdetailsCard from '../../../@spk/apps/spk-jobdetailscard';
import SpkButton from '../../../@spk/uielements/spk-button';

interface JobslandingProps {}

const Jobslanding: FC<JobslandingProps> = ({ThemeChanger}:any) => {

    useEffect(() => {
   
        const theme = store.getState();
        ThemeChanger({
          
          ...theme,
          "dataNavStyle": "menu-click",
          "dataNavLayout": "horizontal",
        //   "class": "h-full",
          "dataVerticalStyle": "",
          "body":"landing-body jobs-landing"
        });
        
        return () => {
          ThemeChanger({
            ...theme,
            "dataNavStyle": "",
            "dataVerticalStyle": "",
            "dataNavLayout": `${localStorage.ynexlayout == "horizontal" ? "horizontal" : "vertical"}`,
            "body":""
          });
        };
      }, []);

    useEffect(() => {
        const landingpages = () => {
            if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
                let Scolls = document?.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.add("sticky-pin");
                });
            } else {
                let Scolls = document?.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.remove("sticky-pin");
                });
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", landingpages);
        }
    });

    //
    //// Template Highlights collapse
    const onScroll = () => {
        const sections = document.querySelectorAll(".side-menu__item");
        const scrollPos =
            window.scrollY ||
            document.documentElement.scrollTop ||
            (document.querySelector("body")?.scrollTop || 0);

        sections.forEach((elem) => {
            const value = elem.getAttribute("href") ?? "";
            const fragmentIndex = value.indexOf("#");
            const fragment = fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : "";

            if (fragment) {
                const refElement = document.getElementById(fragment);

                if (refElement) {
                    const scrollTopMinus = scrollPos + 73;
                    if (
                        refElement.offsetTop <= scrollTopMinus &&
                        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
                    ) {
                        elem.classList.add("active");
                    } else {
                        elem.classList.remove("active");
                    }
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 992) {
                const theme = store.getState();
                ThemeChanger({ ...theme, "dataToggled": "close", "dataNavLayout": "horizontal" });
            } else {
                const theme = store.getState();
                ThemeChanger({ ...theme, "dataToggled": "open", "dataNavLayout": "horizontal" });
            }
        }

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);
        // handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    function toggleNavigation() {
        if (window.innerWidth <= 992) {
            const theme = store.getState();
            ThemeChanger({ ...theme, "dataToggled": "open", "dataNavLayout": "horizontal" });
        }
    }
    function menuClose() {
        const theme = store.getState();
        if (window.innerWidth <= 992) {
          ThemeChanger({ ...theme, dataToggled: 'close' });
        }
        const overlayElement = document.querySelector("#responsive-overlay");
        if (overlayElement) {
          overlayElement.classList.remove("active");
        }
      }


//Swiper-Data
const breakpoint = {
    640: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    }
}
    return (
        <Fragment>
            <HelmetProvider>
                    <Helmet>
                        <body className="landing-body jobs-landing"></body>
                    </Helmet>
            </HelmetProvider>
                <header className="app-header">

                    <div className="main-header-container container-fluid">

                        <div className="header-content-left">

                            <div className="header-element">
                                <div className="horizontal-logo">
                                    <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`} className="header-logo">
                                        <img src={togglelogo} alt="logo" className="toggle-logo" />
                                        <img src={toggledark} alt="logo" className="toggle-dark" /> </Link>
                                </div> </div>

                            <div className="header-element">
                                <Link aria-label="anchor" to="#" className="sidemenu-toggle header-link">
                                    <span className="open-toggle" onClick={() => toggleNavigation()}> <i className="ri-menu-3-line text-xl"></i> </span>
                                </Link>
                            </div>
                        </div>
                        <div className="header-content-right">
                            <div className="header-element !items-center">
                                <div className="lg:hidden block">
                                    <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/signup-basic/`} className="ti-btn ti-btn-primary me-2 !mb-0"> Sign Up </Link>
                                    <Link aria-label="anchor" to="#" className="ti-btn p-2 px-3 ti-btn-success !mb-0" data-hs-overlay="#hs-overlay-switcher"><i className="ri-settings-3-line animate-spin-slow"></i></Link>
                                </div>
                            </div>  </div>
                    </div>
                </header>
                <div id="responsive-overlay" onClick={() => menuClose()} ></div>
                <aside className="app-sidebar sticky !topacity-0" id="sidebar">
                    <div className="container-xl xl:!p-0">
                        <div className="main-sidebar mx-0">
                            <nav className="main-menu-container nav nav-pills sub-open">
                                <div className="landing-logo-container my-auto hidden lg:block">
                                    <div className="responsive-logo">
                                        <Link className="responsive-logo-light" to={`${import.meta.env.BASE_URL}dashboards/crm/`} aria-label="Brand"><img
                                            src={desktoplogo} alt="logo" className="mx-auto hidden h-8 leading-8" /></Link>
                                        <Link className="responsive-logo-dark" to={`${import.meta.env.BASE_URL}dashboards/crm/`} aria-label="Brand"><img
                                            src={desktopwhitelogo} alt="logo" className="mx-auto h-8 leading-8" /></Link>
                                    </div>
                                </div>
                                <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg></div>
                                <ul className="main-menu">
                                    <li className="slide">
                                        <a className="side-menu__item" href="#home">
                                            <span className="side-menu__label">Home</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="#jobs" className="side-menu__item">
                                            <span className="side-menu__label">Jobs</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="#candidate" className="side-menu__item">
                                            <span className="side-menu__label">Candidates</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="#blogs" className="side-menu__item">
                                            <span className="side-menu__label">Blogs</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="#employers" className="side-menu__item">
                                            <span className="side-menu__label">For Employers</span>
                                        </a>
                                    </li>

                                </ul>
                                <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                                <div className="lg:flex hidden">
                                    <div className="btn-list lg:flex hidden lg:mt-2 xl:mt-0 mt-0">
                                        <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/signup-basic/`} className="ti-btn bg-primary text-white font-![500] me-[0.365rem] whitespace-nowrap">
                                            Sign Up
                                        </Link>
                                        <Link to={`${import.meta.env.BASE_URL}apps/jobs/job-post/`} className="ti-btn  bg-secondary text-white !font-medium me-[0.365rem] whitespace-nowrap">
                                            Job Post
                                        </Link>
                                        <Link aria-label="anchor" to="#" className="ti-btn m-0 p-2 px-3 ti-btn-light"
                                            data-hs-overlay="#hs-overlay-switcher"><i className="ri-settings-2-line animate-spin-slow"></i></Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </aside>
                <div className="main-content !p-0 landing-main dark:text-defaulttextcolor/70" >
                    <div className="landing-banner !h-auto" id="home">
                        <section className="section !pb-0 text-[0.813rem]">
                            <div className="container main-banner-container">
                                <div className="grid grid-cols-12 justify-center text-center">
                                    <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 col-span-12"></div>
                                    <div className="xxl:col-span-8 xl:col-span-8 lg:col-span-8 col-span-12">
                                        <div className="">
                                            <h5 className="landing-banner-heading mb-3 !text-[2.4rem]"><span className="text-secondary font-bold">6000+ </span>Jobs, Find your dream job</h5>
                                            <p className="text-[1.125rem] mb-[3rem] opacity-[0.8] font-normal text-white">Register &amp; get free access to latest openings worldwide. Create &amp; submit your resume with few easy steps.</p>
                                            <div className="mb-4 custom-form-group ">
                                                <input type="text" className="form-control !py-4 !px-6 w-full  !rounded-md form-control-lg shadow-sm" placeholder="Job title, Keywords or Company.."
                                                    aria-label="Recipient's username" />
                                                <div className="custom-form-btn">
                                                    <Link aria-label="anchor" to="#" className="gps-location"><i className="ti ti-current-location"></i></Link>
                                                    <SpkButton customClass="ti-btn bg-primary text-white   !font-medium !border dark:border-defaultborder/10-0" buttontype="button"><i className="bi bi-search me-2"></i> Search</SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 col-span-12"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="section section-bg dark:!bg-black/10 text-defaulttextcolor" id="jobs">
                        <div className="container">
                            <div className="flex items-center justify-between flex-wrap gap-4 mb-[3rem]">
                                <div>
                                    <p className="text-[0.75rem] font-semibold mb-1">Find jobs</p>
                                    <h3 className="font-semibold mb-0 dark:text-defaulttextcolor/70">Browse Jobs by Top Categories</h3>
                                    <span className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] font-normal block">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                                </div>
                                <div>
                                    <Link to="#" className="ti-btn bg-primary text-white !font-medium">
                                        View All Categories <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-x-6">
                                {categorydata.map((idx)=>(
                                    <div className="lg:col-span-4 md:col-span-6 col-span-12" key={Math.random()}>
                                        <div className="box border dark:border-defaultborder/10">
                                            <div className="grid grid-cols-12 g-0">
                                                <div className="md:col-span-3 col-span-4">
                                                    <img src={idx.src} className="img-fluid rounded-start h-full browse-jobs-image !rounded-s-md" alt="..." />
                                                </div>
                                                <div className="md:col-span-9 col-span-8 my-auto">
                                                    <div className="box-body">
                                                        <h5 className="box-title font-semibold !text-[1.25rem]">{idx.title}</h5>
                                                        <p className="mb-4"><span className="text-default font-semibold ">{idx.text}</span> available</p>
                                                        <Link className="text-primary font-semibold" to="#">Explore Jobs<i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="section bg-light text-defaulttextcolor text-defaultsize" id="steps">
                        <div className="container text-center">
                            <div className=" justify-center text-center mb-12">
                                <div className="xl:col-span-6 col-span-12">
                                    <p className="text-[0.75rem] font-semibold mb-1"><span className="landing-section-heading">Steps</span></p>
                                    <h3 className="font-semibold mb-2">How it works ?</h3>
                                    <span className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] font-normal block">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-6 text-start">
                                {Accountdata.map((idx)=>(
                                    <div className="col-span-12 md:col-span-4" key={Math.random()}>
                                        <Spktitlecards Customclass="border dark:border-defaultborder/10" CustomBodyclass="rounded">
                                            <div className="mb-4 ms-1">
                                                    <div className="icon-style">
                                                        <span className="avatar avatar-lg avatar-rounded bg-primary svg-white">
                                                            <i className={`ti ti-${idx.icon} text-white`}></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <h5 className="font-semibold text-[1.25rem]">
                                                   {idx.title}
                                                </h5>
                                                <p className="opacity-[0.8] mb-4">
                                                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea.
                                                </p>
                                                <Link className="mx-1 text-primary font-semibold" to="#">{idx.text}<i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i></Link>
                                        </Spktitlecards>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="section bg-banner-2 text-white !py-0">
                        <div className="container">
                            <div className="grid grid-cols-12 gap-6 items-center justify-center">
                                <div className="md:col-span-5 xl:col-span-4 col-span-12 text-center mt-6 lg:block hidden">
                                    <img src={jobslanding8} width="350" alt="" />
                                </div>
                                <div className="md:col-span-7 xl:col-span-8 col-span-12">
                                    <div className="my-6">
                                        <h2 className="font-semibold mb-4 text-[2rem]">Are You Looking For A Job? Just <Link to="#" className="text-white text-decoration-line"> <u>drop</u> </Link> resume..</h2>
                                        <p className="mb-6 text-[0.9375rem] opacity-[0.8] font-normal">Est amet sit vero sanctus labore no sed nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.. </p>
                                        <Link to="#" className="ti-btn ti-btn-light ti-btn-lg dark:border-defaultborder/10 !font-medium"><i className="ti ti-upload"></i> Upload Your Resume</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section text-defaulttextcolor text-defaultsize" id="features">
                        <div className="container">
                            <div className=" justify-center text-center mb-[3rem]">
                                <div className="xl:col-span-6 col-span-12">
                                    <p className="text-[0.75rem] font-semibold mb-1"><span className="landing-section-heading">Find jobs</span></p>
                                    <h3 className="font-semibold mb-2 dark:text-defaulttextcolor/70">Featured Jobs</h3>
                                    <span className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] font-normal block">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-x-6 mb-4">
                                {Jobdata.map((idx)=>(
                                    <div className="lg:col-span-6 col-span-12" key={Math.random()}>
                                        <SpkJobdetailsCard cardClass="featured-jobs" wishlist={"Add to Whislist"} jobs={"Featured Jobs"}
                                         card={idx} badge={"Hyderabad"} graduateBadge={"Graduate"}  Landingbadges={true}  openingBadge="13 Openings" ShiftBadge=" flexible-shift"
                                         yearsBadge={"Min - 2Years"} Price={"$25,000 - $35,000"} apply={"Apply Now"} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <Link to="#" className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">
                                    View All Jobs <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section className="section bg-primary">
                        <div className="container">
                            <div className="grid grid-cols-12 justify-center text-center mb-[3rem] text-white">
                                <div className="xl:col-span-3 col-span-12"></div>
                                <div className="xl:col-span-6 col-span-12">
                                    <h3 className="font-semibold mb-2 dark:text-defaulttextcolor/70">Which Type Of Job You Want ?</h3>
                                    <span className="text-[0.9375rem] font-normal block opacity-[0.8]">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                                </div>
                                <div className="xl:col-span-3 col-span-12"></div>
                            </div>
                            <div className="grid grid-cols-12 gap-6">
                                {Jobsdata.map((idx)=>(
                                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12" key={Math.random()}>
                                        <Spktitlecards Customclass='feature-style'>
                                                <Link aria-label="anchor" to="#" className="stretched-link"></Link>
                                                <div className="feature-style-icon bg-primary/10">
                                                    {idx.svg}
                                                </div>
                                                <h5 className=" font-semibold text-default text-[1.25rem]">{idx.title}</h5>
                                                <p className="text-[#8c9097] dark:text-white/50 mb-4">120 Jobs Available</p>
                                                <Link className="text-primary font-semibold" to="#">Explore Jobs<i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i></Link>
                                        </Spktitlecards>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="section bg-banner-1 bg-light !py-0 text-defaulttextcolor text-defaultsize" id="candidate">
                        <div className="container">
                            <div className="grid grid-cols-12 items-center justify-center">
                                <div className="lg:col-span-4 col-span-12 lg:block hidden text-center mt-6">
                                    <img src={jobslanding7} width="260" alt="" />
                                </div>
                                <div className="md:col-span-8 col-span-12 my-6">
                                    <h2 className="font-semibold mb-4 text-[2rem] dark:text-defaulttextcolor/70">Are You Looking For A best Candidate? <br /> Just <Link to="#" className="text-primary text-decoration-line"> <u>Publish</u> </Link> your job here..</h2>
                                    <span className="mb-6 text-[0.9375rem] font-normal text-[#8c9097] dark:text-white/50 block">Est amet sit vero sanctus labore no sed nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.. </span>
                                    <Link to="#" className="ti-btn bg-primary text-white dark:border-defaultborder/10 !font-medium ti-btn-lg"><i className="ti ti-upload"></i> Publish new job</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section text-defaulttextcolor text-defaultsize" id="blogs">
                        <div className="container">
                            <div className=" mb-[3rem] justify-center text-center">
                                <p className="text-[0.75rem] font-semibold mb-1"><span className="landing-section-heading">Our Blog</span> </p>
                                <h3 className="font-semibold mb-2 text-[1.75rem] dark:text-defaulttextcolor/70">Latest News Updates &amp; Blogs</h3>
                                <div className="xl:col-span-9 col-span-12">
                                    <span className="block font-normal text-[0.9375rem] text-[#8c9097] dark:text-white/50">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {Updatedblog.map((idx)=>(
                                <div className="md:col-span-1 col-span-12" key={Math.random()}>
                                    <Spktitlecards Imagetag={true} Imgsrc={idx.src}>
                                            <SpkBadge variant={idx.color} customClass={`text-white blog-badge`}>{idx.text}</SpkBadge>
                                            <h5 className="font-semibold mb-1 text-[1.25rem]">{idx.title}</h5>
                                            <p className="card-text mb-4">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                            <Link className="text-primary font-semibold" to="#">Read this post<i className="ri-arrow-right-s-line align-middle rtl:rotate-180"></i></Link>
                                    </Spktitlecards>
                                </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="section bg-banner text-defaulttextcolor text-defaultsize" id="employers">
                        <div className="container">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="lg:col-span-9 col-span-12">
                                    <h2 className="font-semibold text-[2rem]">Let Employers easy to find you !</h2>
                                    <span className="block font-normal text-[0.9375rem] opacity-[0.8]">Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</span>
                                </div>
                                <div className="lg:col-span-3 col-span-12 text-end my-auto">
                                    <Link to="#" className="ti-btn ti-btn-lg ti-btn-danger-full ti-btn-wave">Upload Your Resume</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section bg-light text-defaultsize text-defaulttextcolor">
                        <div className="container text-center">
                            <div className=" gap-6 mb-[3rem] justify-center text-center">
                                <p className="text-[0.75rem] font-semibold mb-1"><span className="landing-section-heading">FAQ'S</span> </p>
                                <h3 className="font-semibold mb-2">Frequently Asked Questions?</h3>
                                <div className="xl:col-span-9 col-span-12">
                                    <span className="block font-normal text-[0.9375rem] text-[#8c9097] dark:text-white/50">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-x-6 justify-center">
                                {Questionsdata.map((idx)=>(
                                    <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12" key={Math.random()}>
                                        <div className="box text-start featured-card-4">
                                            <Link aria-label="anchor" to="#" className="open-link"></Link>
                                            <div className="box-body p-4">
                                                <div className="flex items-center">
                                                    <div className="me-2 p-2 !bg-primary/10 !rounded-full dark:border-defaultborder/10 !border dark:border-defaultborder/10-primary/10">
                                                        <span className="avatar avatar-rounded bg-primary !mb-0">
                                                            {idx.svg}
                                                        </span>
                                                    </div>
                                                    <h6 className="font-semibold mb-0 text-[1rem]">
                                                        {idx.text}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="section landing-testimonials text-defaulttextcolor text-defaultsize">
                        <div className="container text-center">
                            <div className=" mb-[3rem] justify-center text-center">
                                <p className="text-[0.75rem] font-semibold mb-1"><span className="landing-section-heading">TESTIMONIALS</span> </p>
                                <h3 className="font-semibold mb-2">We never failed to reach expectations</h3>
                                <div className="xl:col-span-9 col-span-12">
                                    <span className="block font-normal text-[0.9375rem] text-[#8c9097] dark:text-white/50">Some of the reviews our clients gave which brings motivation to work for future projects.</span>
                                </div>
                            </div>
                            <SwiperComponent slides={slide} autoplay={true} pagination ={true} centeredSlides={false} loop spaceBetween={30} slidesPerView={1} 
                             breakpoint={breakpoint}/>
                        </div>
                    </section>
                    <section className="section bg-banner" id="career-advice">
                        <div className="grid grid-cols-12 justify-center !px-4">
                            <div className="lg:col-span-3 col-span-12"></div>
                            <div className="lg:col-span-6 col-span-12 text-center">
                                <div className="mb-6">
                                    <h3 className="font-semibold mb-2">&#128512; Your dream job is waiting for you !</h3>
                                </div>
                                <span className="text-[0.9375rem] font-normal opacity-[0.8] block mb-6">Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</span>
                                <Link to="#" className="ti-btn ti-btn-lg ti-btn-light me-2 dark:border-defaultborder/10 !font-medium"><i className="bi bi-search me-1"></i> Search Jobs</Link>
                                <Link to="#" className="ti-btn ti-btn-lg  ti-btn-danger-full text-white  !font-medium"><i className="bi bi-send me-1"></i> Apply Job Now</Link>
                            </div>
                            <div className="lg:col-span-3 col-span-12"></div>
                        </div>
                    </section>
                    <div className="landing-main-footer py-4 opacity-[0.87]">
                        <div className="container">
                            <div className="flex flex-wrap gap-2 items-center justify-between">
                                <div>
                                    <span className="text-white opacity-[0.7] text-[0.875rem]"> © Copyright 2024 <span id="year"></span> <Link
                                        to="https://spruko.com/" className="text-primary text-[0.9375rem] font-semibold">Ynex</Link>.
                                    </span>
                                </div>
                                <div>
                                    <ul className="list-none font-normal landing-footer-list mb-0 flex gap-2 flex-wrap">
                                        <li className="!mb-0 px-3">
                                            <Link to="#" className="text-white opacity-[0.8]">Terms Of Service</Link>
                                        </li>
                                        <li className="!mb-0 px-3">
                                            <Link to="#" className="text-white opacity-[0.8]">Privacy Policy</Link>
                                        </li>
                                        <li className="!mb-0 px-3">
                                            <Link to="#" className="text-white opacity-[0.8]">Legal</Link>
                                        </li>
                                        <li className="!mb-0 px-3">
                                            <Link to="#" className="text-white opacity-[0.8]">Contact</Link>
                                        </li>
                                        <li className="!mb-0 px-3">
                                            <Link to="#" className="text-white opacity-[0.8]">Report Abuse</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </Fragment>
    )
}


const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Jobslanding);