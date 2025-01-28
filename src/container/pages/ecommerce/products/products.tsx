import  { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Itemsdata1 } from '../../../../components/ui/data/pages/ecommerces/ecommercedata';
import { AddToCart } from '../../../../redux/action';
import { Link } from 'react-router-dom';
import Pageheader from '../../../../components/common/page-header/pageheader';
import togglelogo from "../../../../assets/images/brand-logos/toggle-dark.png";
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkProductscard from '../../../../@spk/spk-pages/ecommerce/spkproductscard';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import SpkButton from '../../../../@spk/uielements/spk-button';

const Products = ({ local_varaiable }:any) => {

    const [allData, setAllData] = useState(Itemsdata1);
    const userdata:any = [];

    const myfunction = (idx: string) => {
        let Data;
        for (Data of local_varaiable.ecommercedata) {
            if (Data.title[0] == " ") {
                Data.title = Data.title.trim();
            }
            if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setAllData(userdata);
    };

    return (
        <Fragment>
            <Pageheader currentpage="Products" activepage="Ecommerce" mainpage="Products" />
            <div className="mb-6">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body !p-0">
                                <nav className="w-full mx-auto px-4 xxl:flex sm:items-center xxl:justify-between navbar navbar-expand-xxl bg-white dark:bg-bodybg !py-2" aria-label="Global">
                                    <div className="flex items-center justify-between">
                                        <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`} className="header-logo me-6">
                                            <img src={togglelogo}alt="logo" className="dark:hidden block" />
                                            <img src={togglelogo}alt="logo" className="hidden dark:block" />
                                        </Link>
                                        <div className="xxl:hidden">
                                            <SpkButton buttontype="button"
                                                customClass="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-offset-white/10"
                                                Collapse="#navbar-collapse-with-animation"
                                                Controls="navbar-collapse-with-animation" Label="Toggle navigation">
                                                <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd"
                                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </SpkButton>
                                        </div>
                                    </div>
                                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow xxl:block">
                                        <div className="xxl:flex flex-wrap gap-x-5 gap-y-2 mt-5 sm:mt-0">
                                            <ul className="navbar-nav me-auto lg:mb-0 xxl:items-center xxl:flex flex-grow mt-2 xxl:mt-0 items-center flex-wrap">
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 active hover:!text-primary" aria-current="page"
                                                        to="#">Men</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary" to="#">Women</Link>
                                                </li>
                                                <SpkDropdown Customclass="nav-item mb-2 xxl:mb-0" Linktag={true}  arialexpand={false} buttonid="navbarDropdown" Menulabel="navbarDropdown"
                                                    Linkclass="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 dropdown-toggle" Toggletext="Kids" Arrowicon={true}>
                                                       <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Action</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Another action</Link>
                                                        </li>
                                                        <li>
                                                            <hr className="dropdown-divider" />
                                                        </li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Something else
                                                            here</Link></li>
                                                </SpkDropdown>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link to="#" className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary">Today Deals</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link to="#" className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary">Electronics</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link to="#" className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary">Home &amp; Kitchen</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link to="#" className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary">Fashion</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link to="#" className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary"><i
                                                        className="ri-customer-service-line me-2 align-middle inline-block"></i>Customer
                                                        Service</Link>
                                                </li>
                                                <li className="nav-item xxl:mb-0 mb-2 xxl:ms-0 !ms-4">
                                                    <SpkDropdown  Customclass="btn-group xxl:flex block" Linktag={false}  arialexpand={false}
                                                        CustomToggleclass="ti-btn  !text-[0.75rem] ti-btn-primary !m-0" Toggletext="SortBy" Arrowicon={true}>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#">Featured</Link></li>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#">Price: High to Low</Link></li>
                                                            <li><Link className="ti-dropdown-item active !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#">Price: Low to High</Link></li>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#">Newest</Link></li>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                to="#">Ratings</Link></li>
                                                    </SpkDropdown>
                                                </li>
                                                <li className="nav-item xxl:mb-0 mb-2 xxl:ms-4 !ms-4">
                                                    <div className="inline-flex">
                                                        <SpkButton buttontype="button"
                                                            customClass="ti-btn !py-[0.45rem] !px-3 bg-primary text-white !rounded-e-none !mb-0">IV</SpkButton>
                                                        <SpkButton buttontype="button"
                                                            customClass="ti-btn !py-[0.45rem] !px-3 bg-primary text-white !rounded-none !mb-0">III</SpkButton>
                                                        <SpkButton buttontype="button"
                                                            customClass="ti-btn !py-[0.45rem] !px-3 bg-primary text-white !rounded-s-none !mb-0">II</SpkButton>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="sm:flex" role="search">
                                                <input className="form-control !w-auto !rounded-sm me-2" type="search" onChange={(ele) => { myfunction(ele.target.value); }}
                                                    placeholder="Search" aria-label="Search" />
                                                <SpkButton customClass="ti-btn !font-medium mt-2 sm:mt-0" variant="light"
                                                    buttontype="submit">Search</SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-4 lg:col-span-4 md:col-span-12 col-span-12">
                        <div className="box products-navigation-card">
                            <div className="box-body !p-0">
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">CATEGORIES</p>
                                    <div className="px-2 py-4 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue=""
                                                id="electronics" />
                                            <label className="form-check-label" htmlFor="electronics">
                                                Electronics
                                            </label>
                                            <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">2,712</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue=""
                                                id="Accesories" />
                                            <label className="form-check-label" htmlFor="Accesories">
                                                Accesories
                                            </label>
                                            <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">536</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="clothing"
                                                defaultChecked />
                                            <label className="form-check-label" htmlFor="clothing">
                                                Clothing
                                            </label>
                                            <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">18,289</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="fashion" />
                                            <label className="form-check-label" htmlFor="fashion">
                                                Fashion
                                            </label>
                                            <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3,453</SpkBadge>
                                        </div>
                                        <div id="hs-show-hide-categories-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-hide-categories">
                                            <div className="form-check mt-1 mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue=""
                                                    id="furniture" />
                                                <label className="form-check-label" htmlFor="furniture">
                                                    Furniture
                                                </label>
                                                <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">7,165</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue=""
                                                    id="footwear" />
                                                <label className="form-check-label" htmlFor="footwear">
                                                    Footwear
                                                </label>
                                                <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5,964</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue=""
                                                    id="mobiles" />
                                                <label className="form-check-label" htmlFor="mobiles">
                                                    Mobiles
                                                </label>
                                                <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">2,123</SpkBadge>
                                            </div>
                                        </div>
                                        <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                            to="#" id="hs-show-hide-categories"
                                            data-hs-collapse="#hs-show-hide-categories-heading">
                                            <span className="hs-collapse-open:hidden">MORE</span>
                                            <span className="hs-collapse-open:block hidden">MORE</span>
                                            <svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16"
                                                height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b dark:border-defaultborder/10">
                                <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">BRANDS</p>
                                <div className="px-2 py-4 pb-0">
                                    <div className="form-check mb-2 ">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="Jimmy-Lolfiger"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="Jimmy-Lolfiger">
                                            Jimmy Lolfiger
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">512</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="dapzem1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="dapzem1">
                                            Dapzem &amp; Co
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">2,186</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="denim-winjo1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="denim-winjo1">
                                            Denim Winjo
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">734</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue=""
                                            id="Louie-Phillippe" />
                                        <label className="form-check-label" htmlFor="Louie-Phillippe">
                                            Louie Phillippe
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">16</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue=""
                                            id="garage-clothing" />
                                        <label className="form-check-label" htmlFor="garage-clothing">
                                            Garage &amp;Co
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">1,432</SpkBadge>
                                    </div>
                                    <div id="hs-show-hide-brands-heading"
                                        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-show-hide-brands">
                                        <div className="form-check mt-1 mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="blueberry"
                                                defaultChecked />
                                            <label className="form-check-label" htmlFor="blueberry">
                                                Blueberry &amp;Co
                                            </label>
                                            <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">257</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue=""
                                                id="aus-polo-assn" defaultChecked />
                                            <label className="form-check-label" htmlFor="aus-polo-assn">
                                                Aus Polo Assn
                                            </label>
                                            <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">1,845</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="denim-corp"
                                                defaultChecked />
                                            <label className="form-check-label" htmlFor="denim-corp">
                                                Denim Corp
                                            </label>
                                            <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5,893</SpkBadge>
                                        </div>
                                    </div>
                                    <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                        to="#" id="hs-show-hide-brands"
                                        data-hs-collapse="#hs-show-hide-brands-heading">
                                        <span className="hs-collapse-open:hidden">MORE</span>
                                        <span className="hs-collapse-open:block hidden">MORE</span>
                                        <svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4 border-b dark:border-defaultborder/10">
                                <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">PRICE</p>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="low" />
                                        <label className="form-check-label" htmlFor="low">
                                            $0 - $599
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">22,873</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="low1" defaultChecked />
                                        <label className="form-check-label" htmlFor="low1">
                                            $599 - $1299
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">11,345</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="medium" />
                                        <label className="form-check-label" htmlFor="medium">
                                            $1,299 - $2,199
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">6,987</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="high" />
                                        <label className="form-check-label" htmlFor="high">
                                            $2,199 - $3,499
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5,236</SpkBadge>
                                    </div>
                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="high1" />
                                        <label className="form-check-label" htmlFor="high1">
                                            $3,499 &amp;Above
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3,735</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b dark:border-defaultborder/10">
                                <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">DISCOUNT</p>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue=""
                                            id="Jimmy-Lolfiger1" />
                                        <label className="form-check-label" htmlFor="Jimmy-Lolfiger1">
                                            0% - 20%
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">16,563</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="dapzem2" />
                                        <label className="form-check-label" htmlFor="dapzem2">
                                            20% - 40%
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">15,234</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="denim-winjo" />
                                        <label className="form-check-label" htmlFor="denim-winjo">
                                            40% - 60%
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">6,278</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue=""
                                            id="Louie-Phillippe1" defaultChecked />
                                        <label className="form-check-label" htmlFor="Louie-Phillippe1">
                                            60% - 80%
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">4,531</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue=""
                                            id="garage-clothing1" />
                                        <label className="form-check-label" htmlFor="garage-clothing1">
                                            80% - 90%
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">2,405</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">SIZES</p>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="extra-small" />
                                        <label className="form-check-label" htmlFor="extra-small">
                                            Extra Small (XS)
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">23,156</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="small" />
                                        <label className="form-check-label" htmlFor="small">
                                            Small (SM)
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">15,632</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="medium1" />
                                        <label className="form-check-label" htmlFor="medium1">
                                            Medium (MD)
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">15,032</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="large" defaultChecked />
                                        <label className="form-check-label" htmlFor="large">
                                            Large (L)
                                        </label>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">7,154</SpkBadge>
                                    </div>
                                    <div id="hs-show-hide-sizes-heading"
                                        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-show-hide-sizes">
                                        <div className="form-check mt-1 mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue=""
                                                id="extra-large" />
                                            <label className="form-check-label" htmlFor="extra-large">
                                                Extra Large (XL)
                                            </label>
                                            <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5,946</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue=""
                                                id="double-extralarge" />
                                            <label className="form-check-label" htmlFor="double-extralarge">
                                                XXL
                                            </label>
                                            <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3,267</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue=""
                                                id="triple-extralarge" />
                                            <label className="form-check-label" htmlFor="triple-extralarge">
                                                XXL
                                            </label>
                                            <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">578</SpkBadge>
                                        </div>
                                    </div>
                                    <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                        to="#" id="hs-show-hide-sizes"
                                        data-hs-collapse="#hs-show-hide-sizes-heading">
                                        <span className="hs-collapse-open:hidden">MORE</span>
                                        <span className="hs-collapse-open:block hidden">MORE</span>
                                        <svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-9 xl:col-span-8 lg:col-span-8 md:col-span-12 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            {allData.map((idx) => (
                                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}>
                                    <SpkProductscard card={idx} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ul className="ti-pagination !px-3 !py-[0.375rem] !text-[1rem] !mb-4 flex justify-end">
                <li className="page-item disabled">
                    <Link className="page-link !px-3 !py-[0.375rem]" to="#">Previous</Link>
                </li>
                <li className="page-item"><Link className="page-link !px-3 !py-[0.375rem]" to="#">1</Link></li>
                <li className="page-item"><Link className="page-link !px-3 !py-[0.375rem]" to="#">2</Link></li>
                <li className="page-item"><Link className="page-link !px-3 !py-[0.375rem]" to="#">3</Link></li>
                <li className="page-item">
                    <Link className="page-link !px-3 !py-[0.375rem]" to="#">Next</Link>
                </li>
            </ul>
        </Fragment>
    )
}

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart })(Products);