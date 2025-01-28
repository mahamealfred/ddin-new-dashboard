import  {FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader'
import { Link } from 'react-router-dom'
import { Pricingdata, Simplepricingdata } from '../../../components/ui/data/pages/pricingdata'
import SpkPricingcards from '../../../@spk/spk-pages/pricing/spk-pricingcards'
import SpkLandingpricingcards from '../../../@spk/spk-pages/pricing/spk-landingpricingcards'
import SpkBadge from '../../../@spk/uielements/spk-badge'
import SpkButton from '../../../@spk/uielements/spk-button'


 interface PricingProps {}

const Pricing: FC<PricingProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Pricing" activepage="Pages" mainpage="Pricing" />
            <div className="grid grid-cols-12 gap-x-6 mb-[3rem]">
                <div className="xl:col-span-12 col-span-12">
                    <h5 className="font-semibold text-center text-[1.25rem] !text-defaulttextcolor"> Simple Pricing For Everyone </h5>
                    <p className="text-[#8c9097] dark:text-white/50 mb-4 text-center">Choose plan that suits best for your business needs, Our plans scales with you based on your needs</p>
                    <div className="flex justify-center !mb-6">
                        <nav className="bg-primary/10 p-4 rounded-md mb-4" aria-label="Tabs" role="tablist">
                            <Link to="#" className="hs-tab-active:bg-primary hs-tab-active:text-white cursor-pointer text-primary py-2 px-4  text-sm font-medium text-center rounded-sm hover:text-primary active" id="pricing-item" data-hs-tab="#pricing-monthly1-pane" aria-controls="pricing-monthly1-pane">
                                Monthly
                            </Link>
                            <Link to="#" className="hs-tab-active:bg-primary hs-tab-active:text-white cursor-pointer text-primary py-2 px-4 text-sm font-medium text-center  rounded-sm hover:text-primary " id="pricing-yearly1-item" data-hs-tab="#pricing-yearly1-pane" aria-controls="pricing-yearly1-pane">
                                Yearly
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="tab-content" id="myTabContent1">
                        <div className="tab-pane show active !p-0 !border-0" id="pricing-monthly1-pane" role="tabpanel" tabIndex={0}>
                            <div className="grid grid-cols-12 gap-6">
                                    {Simplepricingdata.map((idx)=>(
                                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}> 
                                                <SpkPricingcards customCardClass={`overflow-hidden ${idx.bodyClass}`} cardBodyClass='!p-0' cardHeadColor={idx.color} planType='monthly'
                                                 card={idx} />
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="tab-pane !p-0 !border-0 hidden" id="pricing-yearly1-pane" role="tabpanel">
                            <div className="grid grid-cols-12 gap-6">
                                    {Simplepricingdata.map((idx)=>(
                                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}> 
                                                <SpkPricingcards customCardClass={`overflow-hidden ${idx.bodyClass}`} cardBodyClass='!p-0' cardHeadColor={idx.color} 
                                                card={idx} planType="yearly" />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 justify-center mb-[3rem]">
                <div className="xxl:col-span-2 col-span-12"></div>
                <div className="xxl:col-span-8 xl:col-span-12 col-span-12">
                    <div className="container">
                        <div className="flex justify-center !mx-auto">
                            <div className="">
                                <h5 className="font-semibold text-center text-[1.25rem] !text-defaulttextcolor"> Simple Pricing For Everyone </h5>
                                <p className="text-[#8c9097] dark:text-white/50 mb-4 text-center">Choose plan that suits best for your business needs, Our plans scales with you based on your needs</p>
                            </div>
                        </div>
                        <div className="flex justify-center mb-4">
                            <nav className="bg-primary/10 p-4 rounded-md mb-4" aria-label="Tabs" role="tablist">
                                <Link to="#" className="hs-tab-active:bg-primary hs-tab-active:text-white cursor-pointer text-primary py-2 px-4  text-sm font-medium text-center rounded-sm hover:text-primary active" id="pricing-item1" data-hs-tab="#pricing-monthly-pane" aria-controls="pricing-monthly-pane">
                                    Monthly
                                </Link>
                                <Link to="#" className="hs-tab-active:bg-primary hs-tab-active:text-white cursor-pointer text-primary py-2 px-4 text-sm font-medium text-center  rounded-sm hover:text-primary " id="pricing-yearly1-item1" data-hs-tab="#pricing-yearly-pane" aria-controls="pricing-yearly-pane">
                                    Yearly
                                </Link>
                            </nav>
                        </div>
                        <div className="box overflow-hidden">
                            <div className="box-body !p-0">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane show active !p-0 border-b-0 dark:border-defaultborder/10" id="pricing-monthly-pane" role="tabpanel" >
                                        <div className="grid grid-cols-12">
                                                {Pricingdata.map((idx)=>(
                                                    <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 md:border-e md:border-b-0 border-b border-dashed dark:border-defaultborder/10 pe-0" key={Math.random()} > 
                                                            <SpkLandingpricingcards card={idx} planType="monthly" showBadgeClass={true} />
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="tab-pane !p-0 border-b-0 dark:border-defaultborder/10 hidden" id="pricing-yearly-pane" role="tabpanel" >
                                        <div className="grid grid-cols-12">
                                            {Pricingdata.map((idx)=>(
                                                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 md:border-e md:border-b-0 border-b border-dashed dark:border-defaultborder/10 pe-0" key={Math.random()} >
                                                            <SpkLandingpricingcards card={idx} planType="yearly" showBadgeClass={true}  />
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 col-span-12"></div>
            </div>
            <div className="grid grid-cols-12 justify-center">
                <div className="xxl:col-span-2 col-span-12"></div>
                <div className="xxl:col-span-8 col-span-12">
                    <div className="container-lg">
                        <div className="flex justify-center">
                            <div className="">
                                <h5 className="font-semibold text-center text-[1.25rem] text-defaulttextcolor"> Pricing Plans </h5>
                                <p className="text-[#8c9097] dark:text-white/50 text-center mb-6 text-[0.813rem]">Select best plans that fits your needs for your business growth,plans are flexible with the enterprise.Familiarize with the payment plans below</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered dark:border-defaultborder/10 whitespace-nowrap min-w-full">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-start">
                                                    <span className="text-[.9375rem] font-semibold">Chek Our Plans</span>
                                                </th>
                                                <th scope="col" className="pricing-basic text-start">
                                                    <span className="text-[.9375rem] font-semibold">Basic</span>
                                                </th>
                                                <th scope="col" className="pricing-pro text-start">
                                                    <span className="text-[.9375rem] font-semibold">Pro</span>
                                                </th>
                                                <th scope="col" className="pricing-premium text-start">
                                                    <span className="text-[.9375rem] font-semibold">Premium</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-center bg-light border border-defaultborder dark:border-defaultborder/10">
                                                <td colSpan={4}>
                                                    <span className="text-[.875rem] font-semibold">Main Features</span>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <td></td>
                                                <td>
                                                    <span>
                                                        24/7 support <SpkBadge variant="primary" customClass="text-white ms-2">1
                                                            Year</SpkBadge>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        24/7 support <SpkBadge variant="primary" customClass="text-white ms-2">5
                                                            Year</SpkBadge>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        24/7 support <SpkBadge variant="primary" customClass="text-white ms-2">Life
                                                            Long</SpkBadge>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <td></td>
                                                <td>
                                                    <span>
                                                        Storage Capacity <SpkBadge variant="success" customClass="text-white ms-2">1
                                                            TB</SpkBadge>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        Storage Capacity <SpkBadge variant="success" customClass="text-white ms-2">5
                                                            TB</SpkBadge>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        Storage Capacity <SpkBadge variant="success" customClass="text-white ms-2">10
                                                            TB</SpkBadge>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr className="text-center bg-light dark:border-defaultborder/10">
                                                <td colSpan={4}>
                                                    <span className="text-[.875rem] font-semibold">Complete Features</span>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <td>
                                                    <span className="font-bold text-[.875rem]">
                                                        Domains
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="font-semibold">2 Free</span> Domain names
                                                </td>
                                                <td>
                                                    <span className="font-semibold">5 Free</span> Domain names
                                                </td>
                                                <td>
                                                    <span className="font-semibold">10 Free</span> Domain names
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <td>
                                                    <span className="font-bold text-[.875rem]">
                                                        Money Back Guarentee
                                                    </span>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="success/10" customClass="text-success !p-1 leading-none !rounded-full">
                                                        <i className="ri-check-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="success/10"  customClass="text-success !p-1 leading-none !rounded-full">
                                                        <i className="ri-check-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="success/10"  customClass="text-success !p-1 leading-none !rounded-full">
                                                        <i className="ri-check-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <td>
                                                    <span className="font-bold text-[.875rem]">
                                                        App Integrations
                                                    </span>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="danger/10" customClass="text-danger !p-1 leading-none !rounded-full">
                                                        <i className="ri-close-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="success/10" customClass="text-success !p-1 leading-none !rounded-full">
                                                        <i className="ri-check-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="success/10" customClass="text-success !p-1 leading-none !rounded-full">
                                                        <i className="ri-check-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <td>
                                                    <span className="font-bold text-[.875rem]">
                                                        Future Updates
                                                    </span>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="danger/10" customClass="text-danger !p-1 leading-none !rounded-full">
                                                        <i className="ri-close-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="success/10" customClass="text-success !p-1 leading-none !rounded-full">
                                                        <i className="ri-check-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="success/10" customClass="text-success !p-1 leading-none !rounded-full">
                                                        <i className="ri-check-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <td>
                                                    <span className="font-bold text-[.875rem]">
                                                        Team Management
                                                    </span>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="danger/10" customClass="text-danger !p-1 leading-none !rounded-full">
                                                        <i className="ri-close-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="success/10" customClass="text-success !p-1 leading-none !rounded-full">
                                                        <i className="ri-check-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="success/10" customClass="text-success !p-1 leading-none !rounded-full">
                                                        <i className="ri-check-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <td>
                                                    <span className="font-bold text-[.875rem]">
                                                        Customer Support
                                                    </span>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="danger/10" customClass="text-danger !p-1 leading-none !rounded-full">
                                                        <i className="ri-close-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="danger/10" customClass="text-danger !p-1 leading-none !rounded-full">
                                                        <i className="ri-close-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="success/10" customClass="text-success !p-1 leading-none !rounded-full">
                                                        <i className="ri-check-line align-middle font-semibold"></i>
                                                    </SpkBadge>
                                                </td>
                                            </tr>
                                            <tr className="text-center bg-light dark:border-defaultborder/10">
                                                <td colSpan={4}>
                                                    <span className="text-[.875rem] font-semibold">Pricing</span>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <th scope="row">
                                                    <span className="font-bold text-[.875rem] text-start">Net Price</span>
                                                </th>
                                                <td>
                                                    <span className="text-[1.125rem] font-semibold text-dark">$99</span>
                                                </td>
                                                <td>
                                                    <span className="text-[1.125rem] font-semibold text-dark">$299</span>
                                                </td>
                                                <td>
                                                    <span className="text-[1.125rem] font-semibold text-dark">$499</span>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <th scope="row">
                                                    <span className="font-bold text-[.875rem] text-start">Annual
                                                        Subscription</span>
                                                </th>
                                                <td>
                                                    <span className="text-[1.125rem] font-semibold text-dark">$1,199</span>
                                                </td>
                                                <td>
                                                    <span className="text-[1.125rem] font-semibold text-dark">$3,499</span>
                                                </td>
                                                <td>
                                                    <span className="text-[1.125rem] font-semibold text-dark">$5,499</span>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <th scope="row">
                                                    <span className="font-bold text-[.875rem] text-start">Activation
                                                        Charges</span>
                                                </th>
                                                <td>
                                                    <span className="font-semibold">0% + $99</span>
                                                </td>
                                                <td>
                                                    <span className="font-semibold">5% + $149</span>
                                                </td>
                                                <td>
                                                    <span className="font-semibold">10% + $259</span>
                                                </td>
                                            </tr>
                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                <td className="border-b-0"></td>
                                                <td className="border-b-0">
                                                    <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white">Choose
                                                        Plan</SpkButton>
                                                </td>
                                                <td className="border-b-0">
                                                    <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white">Choose
                                                        Plan</SpkButton>
                                                </td>
                                                <td className="border-b-0">
                                                    <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white">Choose
                                                        Plan</SpkButton>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 col-span-12"></div>
            </div>
        </Fragment>
    )
}

export default Pricing