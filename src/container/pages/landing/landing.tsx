
import  { FC, Fragment, useEffect } from 'react';
import { connect } from 'react-redux'; 
import store from '../../../redux/store';
import { ThemeChanger } from '../../../redux/action';
import { Link } from 'react-router-dom';
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";
 import desktopdark from "../../../assets/images/brand-logos/desktop-dark.png";
import desktoplogo from "../../../assets/images/brand-logos/ddinlogoT.png";
import desktopwhitelogo from "../../../assets/images/brand-logos/ddinlogoT.png";

// import reactimg from "../../../assets/images/media/landing/web/react.png";
// import tsimg from "../../../assets/images/media/landing/web/TYPESCRIPT.png";
// import yarnimg from "../../../assets/images/media/landing/web/YARN.png";
// import muiimg from "../../../assets/images/media/landing/web/MUI.png";
// import cssimg from "../../../assets/images/media/landing/web/CSS.png";
// import tailimg from "../../../assets/images/media/landing/web/1.png";
// import npm from "../../../assets/images/media/landing/web/6.png";
// import sass from "../../../assets/images/media/landing/web/4.png";
import { Accordiondata, Projectdata, Secondaccordion, Stepsdata } from '../../../components/ui/data/pages/landingdata';
// import SwiperComponent from '../../../@spk/spk-packages/swiper-component';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Spktitlecards from '../../../@spk/uielements/cards/spktitlecards';
// import { Pricingdata } from '../../../components/ui/data/pages/pricingdata';
// import SpkLandingpricingcards from '../../../@spk/spk-pages/pricing/spk-landingpricingcards';
import SpkAccordions from '../../../@spk/advanced-ui/spk-accordions';
import SpkButton from '../../../@spk/uielements/spk-button';

interface LandingProps { }

const Landing: FC<LandingProps> = ({ ThemeChanger }: any) => {

    function toggleNavigation() {
        if (window.innerWidth <= 992) {
            const theme = store.getState();
            ThemeChanger({ ...theme, "dataToggled": "open", "dataNavLayout": "horizontal" });
            
        }
    }
    useEffect(() => {
   
        const theme = store.getState();
        ThemeChanger({
          
          ...theme,
          "dataNavStyle": "menu-click",
          "dataNavLayout": "horizontal",
        //   "class": "h-full",
          "dataVerticalStyle": "",
          "body":"landing-body"
          
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
    // 
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
    

	useEffect(() => {
		const rootDiv = document.getElementById("root");
		if (rootDiv) {
		}
		return () => {
			if (rootDiv) {

				rootDiv.className = ""; // Remove the className when component unmounts
			}
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

    
	const handleClick = (e:any) => {
		e.preventDefault();
		const target = e.currentTarget.getAttribute("href");
		const location = document.getElementById(target.substring(1))?.offsetTop;
		if (location !== undefined) {
			window.scrollTo({
				left: 0,
				top: location - 64,
				behavior: "smooth",
			});
		}
	};
    

	useEffect(() => {
		const pageLinks = document.querySelectorAll(".side-menu__item");
		pageLinks.forEach((elem) => {
			elem.addEventListener("click", handleClick);
		});
    
		return () => {
			// Clean up event listeners when the component unmounts
			pageLinks.forEach((elem) => {
				elem.removeEventListener("click", handleClick);
			});
            console.log("clicck")
		};
	}, []);

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

    // const breakpoint = {
    //     // when window width is >= 320px
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 20,
    //     },
    //     // when window width is >= 480px
    //     480: {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     // when window width is >= 780px
    //     780: {
    //         slidesPerView: 3,
    //         spaceBetween: 40,
    //     },
    //     // when window width is >= 990px
    //     990: {
    //         slidesPerView: 3,
    //         spaceBetween: 40,
    //     },
    //     // for full-screen mode
    //     1920: {
    //         slidesPerView: 3,
    //         spaceBetween: 40,
    //     },
    // };

    function menuClose() {
        const theme = store.getState();
		if (window.innerWidth <= 992) {
			ThemeChanger({ ...theme, dataToggled: "close" });
		}
		const overlayElement = document.querySelector("#responsive-overlay") as HTMLElement | null;
		if (overlayElement) {
			overlayElement.classList.remove("active");
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
                <div id="responsive-overlay" onClick={() => menuClose()}></div>
                <aside className="app-sidebar sticky !topacity-0 " id="sidebar">
                    <div className="container-xl xl:!p-0">
                        <div className="main-sidebar mx-0">
                            <nav className="main-menu-container nav nav-pills flex-column sub-open">
                                <div className="landing-logo-container my-auto hidden lg:block">
                                    <div className="responsive-logo">
                                        <Link className="responsive-logo-light" to={`${import.meta.env.BASE_URL}`} aria-label="Brand">
                                        <img src={desktoplogo} alt="logo" className="mx-auto w-[65px] h-auto" />
                                        </Link>
                                        <Link className="responsive-logo-dark" to={`${import.meta.env.BASE_URL}`} aria-label="Brand">
                                        <img src={desktopwhitelogo} alt="logo" className="mx-auto w-[65px] h-auto" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="slide-left hidden" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg></div>
                                <ul className="main-menu">
                                <li className="slide">
                                        <a className="side-menu__item" href="#home">
                                            <span className="side-menu__label">Home</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="#jobs" className="side-menu__item">
                                            <span className="side-menu__label">About Us</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="#candidate" className="side-menu__item">
                                            <span className="side-menu__label">Services</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="#blogs" className="side-menu__item">
                                            <span className="side-menu__label">Blogs</span>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="#contact" className="side-menu__item">
                                            <span className="side-menu__label">Contact Us</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="slide-right hidden" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                             
                                <div className="lg:flex hidden">
                                    <div className="btn-list lg:flex hidden lg:mt-2 xl:mt-0 mt-0">
                                        <Link to={`${import.meta.env.BASE_URL}firebase/login/`} className="ti-btn bg-primary text-white font-![500] me-[0.365rem] whitespace-nowrap">
                                            Sign In
                                        </Link>
                                        <Link to={`${import.meta.env.BASE_URL}firebase/signup`} className="ti-btn  bg-secondary text-white !font-medium me-[0.365rem] whitespace-nowrap">
                                            Sign Up
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
                    
                    {/* </div>
                <div className="main-content !p-0 landing-main dark:text-defaulttextcolor/70"
                 onClick={(e) => handleClick(e)}
                 > */}
                    <div className="landing-banner !h-auto" id="home">
                    <section className="section !pb-0 text-[0.813rem]">
    <div className="container main-banner-container">
        <div className="grid grid-cols-12 justify-center text-center">
            <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 col-span-12"></div>
            <div className="xxl:col-span-8 xl:col-span-8 lg:col-span-8 col-span-12">
                <div className="">
                    <h5 className="landing-banner-heading mb-3 !text-[2.4rem]">
                        <span className="text-secondary font-bold">Empowering Businesses</span> with Digital Solutions
                    </h5>
                    <p className="text-[1.125rem] mb-[3rem] opacity-[0.8] font-normal text-white">
                        Unlock seamless operations and enhanced efficiency with DDIN Group Ltd’s cutting-edge digital services.
                    </p>
                    <div className="mb-4 custom-form-group">
                        <input type="text" className="form-control !py-4 !px-6 w-full !rounded-md form-control-lg shadow-sm" placeholder="Search for services, solutions, or support..." aria-label="Search Input" />
                        <div className="custom-form-btn">
                            <Link aria-label="anchor" to="#" className="gps-location"><i className="ti ti-current-location"></i></Link>
                            <SpkButton customClass="ti-btn bg-primary text-white !font-medium !border dark:border-defaultborder/10-0" buttontype="button">
                                <i className="bi bi-search me-2"></i> Explore
                            </SpkButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 col-span-12"></div>
        </div>
    </div>
</section>

                    </div>
                {/* <div className="landing-banner" id="home">
                    <section className="section">
                        <div className="container main-banner-container">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-6 col-span-12">
                                    <div className="xl:py-[3rem]">
                                        <div className="mb-4">
                                            <h5 className="font-semibold text-white opacity-[0.9] text-[1.25rem]">Welcome to DDIN Group Ltd</h5>
                                        </div>
                                        <p className="landing-banner-heading mb-4 opacity-[0.9]">Building a smarter future with digital innovation.<span className="text-secondary"></span></p>
                                        <div className="text-[1rem] mb-[3rem] text-white opacity-[0.9]">Providing seamless and efficient digital solutions to empower businesses and individuals through our corporate PWA.</div>
                                        <Link to='/' className="m-1 ti-btn ti-btn-primary-full">
                                            Explore Services
                                            <i className="ri-eye-line ms-2 align-middle"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="xxl:col-span-5 xl:col-span-5 lg:col-span-6 col-span-12">
                                    <div className="text-end landing-main-image landing-heading-img flex justify-end w-full">
                                        <img src={desktopwhitelogo} alt="DDIN Group Ltd" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div> */}
                <section className="section !bg-[#f9fafb] dark:!bg-black/10 section-bg text-defaulttextcolor dark:text-defaulttextcolor/70" id="statistics">
    <div className="container text-center relative">
        <p className="text-[0.75rem] font-semibold text-success mb-1">
            <span className="landing-section-heading">WHY CHOOSE DDIN GROUP LTD?</span>
        </p>
        <h3 className="font-semibold mb-2 text-defaulttextcolor dark:text-defaulttextcolor/70">
            Empowering Businesses with Innovation & Technology
        </h3>
        <div className="xl:col-span-7 col-span-12">
            <p className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] mb-12 font-normal">
                DDIN Group Ltd delivers top-tier digital solutions, enabling seamless transactions, optimized workflows, and business growth through cutting-edge technology.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Projectdata.map((item) => (
                <div className="col-span-1 mb-4" key={item.id}>
                    <div className="p-4 text-center !rounded-sm bg-white dark:bg-bodybg border dark:border-defaultborder/10">
                        <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                            <i className={item.icon}></i>
                        </span>
                        <h3 className="font-semibold mb-0 text-dark">{item.value}</h3>
                        <p className="mb-1 text-[0.875rem] opacity-[0.7] text-[#8c9097] dark:text-white/50">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

                <section className="section text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]" id="about">
    <div className="container text-center">
        <p className="text-[0.75rem] font-semibold text-success mb-1"><span className="landing-section-heading">INNOVATIVE FINANCIAL SOLUTIONS</span></p>
        <h3 className="font-semibold mb-2 dark:text-defaulttextcolor dark:text-defaulttextcolor/70">Empowering Businesses with Seamless Payment and Loan Services</h3>
        <div className="grid grid-cols-12 justify-center max-w-xl mx-auto">
            <div className="col-span-12">
                <p className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] mb-4 font-normal">DDIN Group Ltd offers secure and efficient financial solutions, including seamless payment processing and easy access to business loans.</p>
            </div>
        </div>
        <div className="grid grid-cols-8 justify-center align-center">
            <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 col-span-12 customize-image text-center">
                <div className="lg:text-start !flex items-center lg:justify-start justify-center">
                    <img src={desktopwhitelogo} alt="Financial Solutions" className="img-fluid" />
                </div>
            </div>
            <div className="xxl:col-span-5 xl:col-span-5 lg:col-span-5 col-span-12 pt-5 pb-0 lg:px-2 !text-start px-12 my-auto">
                <h5 className="lg:text-start font-semibold mb-0 text-[1.25rem]">Streamline Payments and Access Business Loans</h5>
                <p className="text-[#8c9097] dark:text-white/50 mb-4">Our platform provides businesses with an integrated payment system and simplified access to financing options.</p>
                <ul className="">
                    <li className="mb-4">
                        <div className="flex">
                            <span>
                                <i className="bx bxs-badge-check !text-primary text-[1.125rem]"></i>
                            </span>
                            <div className="ms-2">
                                <h6 className="font-semibold mb-0 text-[1rem]">Fast and Secure Payment Processing</h6>
                                <p className="text-[#8c9097] dark:text-white/50">Enable quick and secure transactions to enhance business efficiency.</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-4">
                        <div className="flex">
                            <span>
                                <i className="bx bxs-badge-check !text-primary text-[1.125rem]"></i>
                            </span>
                            <div className="ms-2">
                                <h6 className="font-semibold mb-0 text-[1rem]">Easy Loan Application and Approval</h6>
                                <p className="text-[#8c9097] dark:text-white/50">Access business loans with a simple application process and quick approval.</p>
                            </div>
                        </div>
                    </li>
                    <li className="">
                        <div className="flex">
                            <span>
                                <i className="bx bxs-badge-check !text-primary text-[1.125rem]"></i>
                            </span>
                            <div className="ms-2">
                                <h6 className="font-semibold mb-0 text-[1rem]">Automated Financial Management Tools</h6>
                                <p className="text-[#8c9097] dark:text-white/50">Optimize cash flow and financial planning with advanced automation features.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section className="section bg-[#f9fafb] section-bg text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]" id="our-mission">
    <div className="container text-center">
        <p className="text-[0.75rem] font-semibold text-success mb-1"><span className="landing-section-heading">OUR MISSION</span></p>
        <h3 className="font-semibold mb-2">Empowering Businesses with Seamless Financial Solutions</h3>
        <div>
            <div className="xl:col-span-7">
                <p className="text-[#8c9097] dark:text-white/50 text-sm mb-12 font-normal">Our mission is to provide businesses with reliable payment processing and loan services, ensuring financial growth and stability.</p>
            </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
            {Stepsdata.map((idx)=>(
            <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12" key={Math.random()}>
                <Spktitlecards Customclass='text-start landing-missions'>
                    <div className="items-start">
                        <div className="mb-2">
                            <span className="avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                                <i className={idx.icon}></i>
                            </span>
                        </div>
                        <div>
                            <h6 className="font-semibold mb-1 text-[1rem]">
                                {idx.title}
                            </h6>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">We enable businesses to accept payments, manage transactions, and access financial resources effortlessly.</p>
                        </div>
                    </div>
                </Spktitlecards>
            </div>
            ))}
        </div>
    </div>
</section>

<section className="section landing-Features text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]" id="features">
    <div className="container text-center">
        <p className="text-[0.75rem] font-semibold text-success mb-1">
            <span className="landing-section-heading">OUR SOLUTIONS</span>
        </p>
        <h3 className="font-semibold mb-2 !text-white">
            Empowering Businesses with Secure & Seamless Transactions
        </h3>
        <div>
            <div className="xl:col-span-7 col-span-12">
                <p className="text-white opacity-[0.8] text-[0.9375rem] mb-4 font-normal">
                    DDIN Group Ltd offers innovative financial solutions, from secure payment processing to customized loan services, designed to drive business growth and streamline corporate transactions.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-start">
            <div className="p-4 text-center bg-white dark:bg-bodybg border dark:border-defaultborder/10 !rounded-sm">
                <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                    <i className="bx bx-credit-card-front"></i>
                </span>
                <h5 className="font-semibold text-dark mb-1">Secure Payment Processing</h5>
                <p className="text-[#8c9097] dark:text-white/50 text-[0.875rem]">
                    Fast, secure, and seamless transactions for businesses and individuals.
                </p>
            </div>

            <div className="p-4 text-center bg-white dark:bg-bodybg border dark:border-defaultborder/10 !rounded-sm">
                <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                    <i className="bx bx-wallet"></i>
                </span>
                <h5 className="font-semibold text-dark mb-1">Corporate Wallets</h5>
                <p className="text-[#8c9097] dark:text-white/50 text-[0.875rem]">
                    Manage business transactions effortlessly with our corporate wallet solutions.
                </p>
            </div>

            <div className="p-4 text-center bg-white dark:bg-bodybg border dark:border-defaultborder/10 !rounded-sm">
                <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                    <i className="bx bx-bar-chart-alt-2"></i>
                </span>
                <h5 className="font-semibold text-dark mb-1">Automated Financial Reports</h5>
                <p className="text-[#8c9097] dark:text-white/50 text-[0.875rem]">
                    Generate real-time financial reports to track transactions and revenue.
                </p>
            </div>

            <div className="p-4 text-center bg-white dark:bg-bodybg border dark:border-defaultborder/10 !rounded-sm">
                <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                    <i className="bx bx-money"></i>
                </span>
                <h5 className="font-semibold text-dark mb-1">Instant Loan Approvals</h5>
                <p className="text-[#8c9097] dark:text-white/50 text-[0.875rem]">
                    Get quick access to business loans with minimal processing time.
                </p>
            </div>

            <div className="p-4 text-center bg-white dark:bg-bodybg border dark:border-defaultborder/10 !rounded-sm">
                <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                    <i className="bx bx-globe"></i>
                </span>
                <h5 className="font-semibold text-dark mb-1">Cross-Border Payments</h5>
                <p className="text-[#8c9097] dark:text-white/50 text-[0.875rem]">
                    Effortless international transactions for global business expansion.
                </p>
            </div>
        </div>
    </div>
</section>

                    {/* <section className="section  bg-[#f9fafb] section-bg text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]" id="team">
                        <div className="container text-center">
                            <p className="text-[0.75rem] font-semibold text-success mb-1"><span className="landing-section-heading">OUR TEAM</span></p>
                            <h3 className="font-semibold mb-2">Great things in business are done by a team.</h3>
                            <div>
                                <div className="xl:col-span-7 col-span-12">
                                    <p className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] mb-12 font-normal">Our team consists of highly qulified employees that works hard to raise company standards.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-6">
                                    {Teamcardsdata.map((idx)=>(
                                <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}>
                                        <Spktitlecards Customclass=" text-center team-card" >
                                                <span className="avatar avatar-xxl avatar-rounded !mb-4 team-avatar">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                                <p className="font-semibold text-[1.0625rem] mb-0 text-default">{idx.name}</p>
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.875rem] !text-primary font-semibold">{idx.role}</span>
                                                <p className="text-[#8c9097] dark:text-white/50 mt-2 text-[0.8125rem] mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                <div className="mt-2">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/profile/`}className="ti-btn ti-btn-light !font-medium" target="_blank">View profile</Link>
                                                </div>
                                        </Spktitlecards>
                                </div>
                                 ))}
                            </div>
                            <div className="mt-[3rem]">
                                <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white">View All</SpkButton>
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="section text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem] " id="pricing">
                        <div className="container text-center">
                            <p className="text-[0.75rem] font-semibold text-success mb-1"><span className="landing-section-heading">PRICING</span></p>
                            <h3 className="font-semibold mb-2">ynex comes with most affordable pricing range.</h3>
                            <div className="grid grid-cols-12 justify-center">
                                <div className="col-span-12">
                                    <p className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] mb-12 font-normal">Our plans are most affordable and are mainly placed by focussing every category in the sector even basic plan helps better.</p>
                                </div>
                            </div>
                            <div className="flex justify-center mb-6">
                                <nav className="bg-primary/10 p-4 rounded-md" aria-label="Tabs" role='tablist'>
                                    <Link to="#"  className="hs-tab-active:bg-primary hs-tab-active:text-white text-primary py-2 px-4  text-sm font-medium text-center rounded-sm hover:text-primary active" id="pm-item" data-hs-tab="#pricing-monthly-pane" aria-controls="pricing-monthly-pane">
                                        Monthly
                                    </Link>
                                    <Link to="#"  className="hs-tab-active:bg-primary hs-tab-active:text-white text-primary py-2 px-4 text-sm font-medium text-center  rounded-sm hover:text-primary " id="py-item" data-hs-tab="#pricing-yearly-pane" aria-controls="pricing-yearly-pane">
                                        Yearly
                                    </Link>
                                </nav>
                            </div>
                            <div className="box overflow-hidden shadow-none justify-center">
                                <div className="box-body !p-0">
                                    <div className="tab-content dark:!border-defaultborder/10" id="myTabContent">
                                        <div className="tab-pane show active !p-0 dark:!border-defaultborder/10" id="pricing-monthly-pane" aria-labelledby="pm-item"
                                            role="tabpanel">
                                            <div className="grid grid-cols-12 justify-center">
                                                {Pricingdata.map((idx)=>(
                                                    <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 md:border-e md:border-b-0 border-b border-dashed dark:border-defaultborder/10 pe-0" key={Math.random()}>
                                                            <SpkLandingpricingcards card={idx} planType="monthly" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="tab-pane !p-0 border dark:border-defaultborder/10 hidden" id="pricing-yearly-pane" aria-labelledby="py-item"
                                            role="tabpanel">
                                            <div className="grid grid-cols-12">
                                                 {Pricingdata.map((idx)=>(
                                                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 md:border-e md:border-b-0 border-b border-dashed dark:border-defaultborder/10 pe-0" key={Math.random()}>
                                                            <SpkLandingpricingcards card={idx} planType="yearly" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="section bg-[#f9fafb] section-bg text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]" id="faq">
                        <div className="container text-center">
                            <p className="text-[0.75rem] font-semibold text-success mb-1"><span className="landing-section-heading">F.A.Q</span></p>
                            <h3 className="font-semibold mb-2">Frequently asked questions ?</h3>
                            <div className="grid grid-cols-12 justify-center">
                                <div className="col-span-12">
                                    <p className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] mb-12 font-normal">Here are some frequently asked questions about our corporate services, including airtime top-up, bulk SMS, RRA payments, and electricity services.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-6 text-start">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="xl:col-span-6 col-span-12">
                                            <div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate" id="accordionFAQ1">
                                                <SpkAccordions items={Accordiondata} SvgIcon={true} Titletext='before' Toggleclass='hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80' />
                                            </div>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate" id="accordionFAQ2">
                                                 <SpkAccordions items={Secondaccordion} SvgIcon={true} Titletext='before' Toggleclass='hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]" id="contact">
                        <div className="container text-center">
                            <p className="text-[0.75rem] font-semibold text-success mb-1"><span className="landing-section-heading">CONTACT US</span></p>
                            <h3 className="font-semibold mb-2">Need Assistance? We're Here to Help!</h3>
                            <div className="grid grid-cols-12 justify-center">
                                <div className="col-span-12">
                                    <p className="text-[#8c9097] dark:text-white/50 text-[0.9375rem] mb-12 font-normal">Reach out to us for any queries related to our corporate services, including airtime recharge, bulk SMS, RRA payments, or electricity bill payments.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-6 text-start">
                                <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-spam-12 col-span-12">
                                    <div className="box border dark:border-defaultborder/10 shadow-none">
                                        <div className="box-body !p-0">
                                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26508.863152251895!2d30.067488999999996!3d-1.9440727999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19db59e8f1a5bff5%3A0x7bdacaf54c5f9f9f!2sNorresken%20House%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1700000000000!5m2!1sen!2srw" height="365" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                                    <div className="box  overflow-hidden !bg-[#f9fafb] dark:!bg-bodybg border dark:border-defaultborder/10 shadow-none">
                                        <div className="box-body">
                                            <div className="grid grid-cols-12 gap-4 mt-2 px-4">
                                                <div className="xl:col-span-6 col-span-12">
                                                    <div className="grid grid-cols-12 gap-4">
                                                        <div className="xl:col-span-12 col-span-12">
                                                            <label htmlFor="contact-address-name" className="form-label ">Full Name :</label>
                                                            <input type="text" className="form-control w-full !rounded-md" id="contact-address-name" placeholder="Enter Name" />
                                                        </div>
                                                        <div className="xl:col-span-12 col-span-12">
                                                            <label htmlFor="contact-address-phone" className="form-label ">Phone No :</label>
                                                            <input type="text" className="form-control w-full !rounded-md" id="contact-address-phone" placeholder="Enter Phone No" />
                                                        </div>
                                                        <div className="xl:col-span-12 col-span-12">
                                                            <label htmlFor="contact-address-address" className="form-label ">Address :</label>
                                                            <textarea className="form-control w-full !rounded-md" id="contact-address-address" rows={1}></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label htmlFor="contact-address-message" className="form-label ">Message :</label>
                                                    <textarea className="form-control w-full !rounded-md" id="contact-address-message" rows={8}></textarea>
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <div className="flex  mt-6 ">
                                                        <div className="">
                                                            <div className="btn-list">
                                                                <SpkButton Label="button" buttontype="button" variant="primary" customClass="ti-btn ti-btn-icon me-[0.375rem]">
                                                                    <i className="ri-facebook-line font-bold"></i>
                                                                </SpkButton>
                                                                <SpkButton Label="button" buttontype="button" variant="primary" customClass="ti-btn ti-btn-icon me-[0.375rem]">
                                                                    <i className="ri-twitter-x-line font-bold"></i>
                                                                </SpkButton>
                                                                <SpkButton Label="button" buttontype="button" variant="primary" customClass="ti-btn ti-btn-icon">
                                                                    <i className="ri-instagram-line font-bold"></i>
                                                                </SpkButton>
                                                            </div>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <SpkButton buttontype="button" customClass="ti-btn bg-primary  text-white !font-medium">Send Message</SpkButton>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section landing-footer text-white text-[0.813rem] opacity-[0.87]">
    <div className="container">
        <div className="grid grid-cols-12 gap-6">
            <div className="xl:col-span-4 col-span-12">
                <div className="px-6">
                    <p className="font-semibold mb-4">
                        <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                            <img src={desktopdark} alt="DDIN Logo" />
                        </Link>
                    </p>
                    <p className="mb-2 opacity-[0.6] font-normal">
                        DDIN Group Ltd is a leading payment solutions provider based in Kigali, Rwanda. We specialize in secure and efficient financial transactions for businesses and individuals.
                    </p>
                    <p className="mb-0 opacity-[0.6] font-normal">Providing seamless payment experiences with cutting-edge technology.</p>
                </div>
            </div>
            <div className="xl:col-span-2 col-span-12">
                <div className="px-6">
                    <h6 className="font-semibold text-[1rem] mb-4">PAGES</h6>
                    <ul className="list-unstyled opacity-[0.6] font-normal landing-footer-list">
                        <li><Link to="#" className="text-white">Home</Link></li>
                        <li><Link to="#" className="text-white">Services</Link></li>
                        {/* <li><Link to="#" className="text-white">About Us</Link></li>
                        <li><Link to="#" className="text-white">Contact</Link></li> */}
                        {/* <li><Link to="#" className="text-white">Careers</Link></li>
                        <li><Link to="#" className="text-white">Blog</Link></li> */}
                    </ul>
                </div>
            </div>
            <div className="xl:col-span-2 col-span-12">
                <div className="px-6">
                    <h6 className="font-semibold text-[1rem] mb-2">INFO</h6>
                    <ul className="list-unstyled opacity-[0.6] font-normal landing-footer-list">
                        {/* <li><Link to="#" className="text-white">Our Team</Link></li> */}
                        <li><Link to="#" className="text-white">Contact Us</Link></li>
                        <li><Link to="#" className="text-white">Privacy Policy</Link></li>
                        <li><Link to="#" className="text-white">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
                <div className="px-6">
                    <h6 className="font-semibold text-[1rem] mb-2">CONTACT</h6>
                    <ul className="list-unstyled font-normal landing-footer-list">
                        <li>
                            <Link to="#" className="text-white opacity-[0.6]">
                                <i className="ri-home-4-line me-1 align-middle"></i> Norresken House, Kigali, Rwanda
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-white opacity-[0.6]">
                                <i className="ri-mail-line me-1 align-middle"></i> info@ddin.rw
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-white opacity-[0.6]">
                                <i className="ri-phone-line me-1 align-middle"></i> +250 783 038 641
                            </Link>
                        </li>
                        <li className="mt-4 !mb-0">
                            <p className="mb-2 font-semibold opacity-[0.8] text-[1rem]">FOLLOW US ON :</p>
                            <div className="mb-0">
                                <div className="btn-list">
                                    <SpkButton Label="button" buttontype="button" variant="" customClass="ti-btn ti-btn-sm !mb-0 ti-btn-primary me-[0.365rem]">
                                        <i className="ri-facebook-line font-bold"></i>
                                    </SpkButton>
                                    <SpkButton Label="button" buttontype="button" variant="" customClass="ti-btn ti-btn-sm !mb-0 ti-btn-secondary me-[0.365rem]">
                                        <i className="ri-twitter-x-line font-bold"></i>
                                    </SpkButton>
                                    <SpkButton Label="button" buttontype="button" variant="" customClass="ti-btn ti-btn-sm !mb-0 ti-btn-warning me-[0.365rem]">
                                        <i className="ri-instagram-line font-bold"></i>
                                    </SpkButton>
                                    <SpkButton Label="button" buttontype="button" variant="" customClass="ti-btn ti-btn-sm !mb-0 ti-btn-success me-[0.365rem]">
                                        <i className="ri-github-line font-bold"></i>
                                    </SpkButton>
                                    <SpkButton Label="button" buttontype="button" variant="" customClass="ti-btn ti-btn-sm !mb-0 ti-btn-danger">
                                        <i className="ri-youtube-line font-bold"></i>
                                    </SpkButton>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="text-center landing-main-footer py-4 opacity-[0.87]">
    <span className="text-[#8c9097] dark:text-white/50 text-[0.9375rem]"> 
        Copyright © 2025 <span id="year"></span> 
        <Link to="https://ddin.rw/" className="!text-primary font-semibold"><u>DDIN Group Ltd</u></Link>. 
        Designed with <span className="fa fa-heart text-danger"></span> by 
        <Link to="#" className="!text-primary font-semibold"><u> DDIN Team</u></Link>. 
        All rights reserved.
    </span>
</div>

                </div>
        </Fragment>
    )
}


const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landing);
