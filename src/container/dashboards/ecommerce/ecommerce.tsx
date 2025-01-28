import  {FC, Fragment, useState } from 'react'
import { Recentorders, Countries,  ProductsOverview,  Earoptions, Earseries, activeOrders, completed, cancelled, topSelling, usersdata,} from '../../../components/ui/data/dashboards/ecommercedata';
import { Link } from 'react-router-dom';
import Pageheader from '../../../components/common/page-header/pageheader';
import ecommerce35 from "../../../assets/images/ecommerce/png/35.png";
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import SpkEcommerceCards from '../../../@spk/dashboards/spk-commercecards';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import Spktables from '../../../@spk/tables/spk-tables';
import SpkButton from '../../../@spk/uielements/spk-button';

interface EcommerceProps { }

const Ecommerce: FC<EcommerceProps> = () => {

    // for User search function
    const [Data, setData] = useState(ProductsOverview);

    const userdata:any = [];

    const myfunction = (idx: string) => {
        let Data;
        for (Data of ProductsOverview) {
            if (Data.name[0] == " ") {
                Data.name = Data.name.trim();
            }
            if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setData(userdata);
    };

    return (
        <Fragment>
            <Pageheader currentpage="Ecommerce" activepage="Dashboards" mainpage="Ecommerce" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <SpkEcommerceCards title="Total Sales" svg={<><svg xmlns="http://www.w3.org/2000/svg" className="svg-white primary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg></>} 
                            ratio="14,732" text="+4.2%" color="primary" />
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <SpkEcommerceCards title="Total Expenses" svg={<><svg xmlns="http://www.w3.org/2000/svg" className="svg-white secondary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg></>} 
                            ratio="$28,346.00" text="+12.0%" color="secondary" />
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <SpkEcommerceCards title="Total Visitors" svg={<><svg xmlns="http://www.w3.org/2000/svg" className="svg-white success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></>} 
                            ratio="1,29,368" text="-7.6%" color="success" />
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <SpkEcommerceCards title="Total Orders" svg={<><svg xmlns="http://www.w3.org/2000/svg" className="svg-white warning" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg></>} 
                            ratio="35,367" text="+2.5%" color="warning" />
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="ecommerce-sale-image">
                                    <img src={ecommerce35} className="card-img-top" alt="..." />
                                    <div className="card-img-overlay  p-6 text-white">
                                        <p className=" opacity-[0.7] text-[0.75rem]">Spruko Official.Inc</p>
                                        <p className="font-semibold mb-6 text-[1rem]">BIG SAVING DAYS</p>
                                        <p className="ecommerce-bankoffer-details mb-4">Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above <Link to="#" className="underline text-white">T&amp;C</Link></p>
                                        <p className="ecommerce-sale-days mb-0">15, Jan 2022 - 19, Jan 2022</p>
                                        <p className="ecommerce-sales-calendar text-center mb-0">
                                            <span>15</span>
                                            <span className="block text-[0.9375rem] leading-none font-semibold">Jan</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <Link to="#" className="text-primary text-[0.9375rem] font-semibold">Biggest sale is back.</Link>
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum accusamus eum dolorum sapiente. Saepe</p>
                                    <SpkButton buttontype="button" variant="primary-full" customClass="ti-btn ti-btn-wave !py-[0.55rem] !px-[0.95rem] gap-2 rounded-[0.35rem] text-[0.85rem] font-medium !shadow-none me-3">Notify Me</SpkButton>
                                    <SpkButton buttontype="button" variant="outline-primary" customClass="ti-btn ti-btn-wave !rounded-[0.35rem] !text-[0.85rem] !font-medium !shadow-none">Offers</SpkButton>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Orders
                                    </div>
                                    <SpkDropdown Linktag={true} Icon={true} arialexpand={false} Customclass="" Toggletext="" IconClass="fe fe-more-vertical text-[0.8rem]"
                                        Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Something else here</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        {Recentorders.map((idx) => (
                                            <li className={idx.class} key={Math.random()}>
                                                <Link to="#">
                                                    <div className="flex tems-center">
                                                        <div className="leading-none">
                                                            <span className="inline-flex justify-center items-center">
                                                                <img src={idx.src} alt="" className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow ms-2">
                                                            <p className="font-semibold mb-0">{idx.product}</p>
                                                            <p className="text-[0.75rem] !text-[#8c9097] dark:text-white/50 mb-0">{idx.text}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-success font-semibold">${idx.price}</span>
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
                                <div className="box-header justify-between sm:flex block">
                                    <div className="box-title">
                                        Orders
                                    </div>
                                    <div>
                                        <nav className="sm:flex block sm:mt-0 mt-2" aria-label="Tabs" role="tablist">
                                            <SpkButton customClass="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4  text-[0.8rem] font-medium text-center rounded-md hover:text-primary active" Id="active-item" Tab="#taskactive" Controls="taskactive">
                                                Active Orders
                                            </SpkButton>
                                            <SpkButton customClass="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " Id="completed-item" Tab="#completed" Controls="completed">
                                                Completed
                                            </SpkButton>
                                            <SpkButton customClass="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " Id="cancelled-item" Tab="#cancelled" Controls="cancelled">
                                                Cancelled
                                            </SpkButton>
                                        </nav>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="tab-content">
                                        <div className="tab-pane show active text-[#8c9097] dark:text-white/50 !border-0 !p-0" id="taskactive"
                                            role="tabpanel">
                                            <div className="table-responsive overflow-auto">
                                                <Spktables tableClass="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full" tBodyClass='active-tab'>
                                                        {activeOrders.map((idx)=>(
                                                            <tr key={Math.random()} className={idx.rowclass}>
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className={`avatar avatar-md ${idx.activeclass} avatar-rounded me-2 !mb-0`}>
                                                                                <img src={idx.customerImage} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">{idx.customerName}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 font-semibold">{idx.price}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                        <p className="mb-0">{idx.deliveryDate}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={idx.productImage} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </Spktables>
                                            </div>
                                        </div>
                                        <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden" id="completed" role="tabpanel" aria-labelledby="completed-item">
                                            <div className="table-responsive overflow-auto">
                                                <Spktables tableClass="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full" tBodyClass='active-tab'>
                                                        {completed.map((idx)=>(
                                                            <tr key={Math.random()} className={idx.rowclass}>
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className={`avatar avatar-md ${idx.activeclass} avatar-rounded me-2 !mb-0`}>
                                                                                <img src={idx.customerImage} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">{idx.customerName}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">{idx.price}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-success">Delivered On</span>
                                                                        <p className="mb-0">{idx.deliveryDate}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={idx.productImage} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </Spktables>
                                            </div>
                                        </div>
                                        <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden" id="cancelled" role="tabpanel" aria-labelledby="cancelled-item">
                                            <div className="table-responsive overflow-auto">
                                                <Spktables tableClass="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full" tBodyClass='active-tab'>
                                                        {cancelled.map((idx)=>(
                                                            <tr key={Math.random()} className={idx.rowclass}>
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className={`avatar avatar-md ${idx.activeclass} avatar-rounded me-2 !mb-0`}>
                                                                                <img src={idx.customerImage} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">{idx.customerName}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">{idx.price}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">{idx.cancelledDate}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={idx.productImage} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </Link>
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
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">Earnings</div>
                                    <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext="View All" 
                                        Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50">
                                         <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                             to="#">Today</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">This Week</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            to="#">Last Week</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <div className="sm:grid sm:grid-cols-12 lg:ps-[3rem] mb-6 pb-6 sm:gap-0 gap-y-3">
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning first-half ms-4">First Half</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">$51.94k</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <SpkBadge variant="success/10" customClass="text-success !px-1 !py-2 text-[0.625rem]">+0.9%</SpkBadge></span>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning top-gross ms-4">Top Gross</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">$18.32k</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <SpkBadge variant="success/10" customClass="text-success !px-1 !py-2 text-[0.625rem]">+0.39%</SpkBadge></span>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning second-half ms-3">Second Half</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">$38k</span>
                                                <span className="text-danger"><i className="fa fa-caret-up mx-1"></i>
                                                    <SpkBadge variant="danger/10" customClass="text-danger !px-1 !py-2 text-[0.625rem]">-0.15%</SpkBadge></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="earnings">
                                        <ApexchartsComponent chartOptions={Earoptions} chartSeries={Earseries} type="bar" height={200} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-card">
                                <div className="box-header">
                                    <div className="box-title">Top Selling Products</div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="table-responsive">
                                        <Spktables tBodyClass='top-selling' tableClass="table whitespace-nowrap min-w-full mb-0"
                                            header={[{title:'S.no', headerClassname:'text-start'}, {title:'Product Name', headerClassname:'text-start'}, 
                                            {title:'Category', headerClassname:'text-start'},{title:'Stock', headerClassname:'text-start'},
                                            {title:'Total Sales', headerClassname:'text-start'} ]}>
                                                {topSelling.map((idx)=>(
                                                    <tr className="border-y border-inherit border-solid dark:border-defaultborder/10" key={Math.random()}>
                                                        <td className="text-center leading-none">
                                                            <span className="avatar avatar-md !rounded-full">
                                                                <img src={idx.image} className="p-2 !rounded-full bg-light" alt="" />
                                                            </span>
                                                        </td>
                                                        <td>{idx.name}</td>
                                                        <td>{idx.category}</td>
                                                        <td><SpkBadge variant={`${idx.color}/10`} customClass={`badge-sm text-${idx.color} !font-normal`}>{idx.stockStatus}</SpkBadge></td>
                                                        <td>
                                                            <span className="font-semibold">{idx.quantity}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </Spktables>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Countries By Sales
                                    </div>
                                    <SpkDropdown Icon={true} Linktag={true}  arialexpand={false} Customclass="" IconClass="fe fe-more-vertical text-[0.8rem]" 
                                        Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Something else here</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <div className="flex items-center mb-2">
                                        <h4 className="mb-0 leading-none text-[1.5rem] font-medium">38,256</h4>
                                        <SpkBadge variant="primary/10" customClass="mx-1 text-primary">12.24%</SpkBadge>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Since last week</span>
                                    </div>
                                    <ul className="mb-0 pt-3 list-none">
                                        {Countries.map((idx) => (
                                            <li className={idx.class2} key={Math.random()}>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center leading-none">
                                                        <span className="avatar avatar-xs me-2">
                                                            <img src={idx.src} alt="" className="rounded-full h-[1.25rem] w-[1.25rem]" />
                                                        </span>
                                                        <span className="top-country-name w-[4.5rem]">{idx.text}</span>
                                                    </div>
                                                    <div>
                                                        <i className={`ti ti-trending-${idx.class1} text-[1rem] text-${idx.color}`}></i>
                                                    </div>
                                                    <div className="text-[0.875rem]">{idx.price}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Customers
                                    </div>
                                    <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass="" Toggletext="View All"
                                        Linkclass="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Today</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                to="#">Last Week</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        {usersdata.map((idx)=>(
                                            <li className={idx.class} key={Math.random()}>
                                                <Link to="#">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-start justify-center">
                                                            <img src={idx.avatar} alt="" className="avatar avatar-md avatar-rounded !mb-0 me-2" />
                                                            <div>
                                                                <p className="mb-0 font-semibold">{idx.name}</p>
                                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">{idx.text}<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">{idx.balance}</span>
                                                        </div>
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
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Products Overview
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" onChange={(ele) => { myfunction(ele.target.value); }}
                                        aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Arrowicon={true} Linktag={true}  arialexpand={false} Customclass=""   Toggletext="Sort By"
                                    Linkclass="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
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
                            <div className="overflow-x-auto">
                                <Spktables tableClass="table min-w-full whitespace-nowrap table-hover border table-bordered" tableRowclass="border border-inherit border-solid  dark:border-defaultborder/10" 
                                 header={[{title:'Name', headerClassname:'!text-start'}, {title:'Product Id', headerClassname:'!text-start'}, 
                                    {title:'Price', headerClassname:'!text-start'}, {title:'Status', headerClassname:'!text-start'},{title:'Sales', headerClassname:'!text-start'},
                                    {title:'Revenue', headerClassname:'!text-start'} ]}>
                                        {Data.map((idx) => (
                                            <tr className="border-y border-inherit border-solid dark:border-defaultborder/10" key={Math.random()}>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2 leading-none">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="text-sm">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="font-semibold">{idx.productid}</span>
                                                </td>
                                                <td>
                                                    {idx.price}
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.status}</SpkBadge>
                                                </td>
                                                <td>
                                                    <span className="">{idx.sales}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.text}</span>
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

export default Ecommerce