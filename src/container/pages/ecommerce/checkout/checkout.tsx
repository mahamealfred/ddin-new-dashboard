import  { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Basicwizard } from '../../../../components/ui/data/pages/ecommerce/checkoutdata';
import ecommereceimg1 from "../../../../assets/images/ecommerce/png/1.png";
import ecommereceimg7 from "../../../../assets/images/ecommerce/png/7.png";
import SpkBadge from '../../../../@spk/uielements/spk-badge';

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = () => {

    return (
        <Fragment>
            <Pageheader currentpage="Checkout" activepage="Ecommerce" mainpage="Checkout" />
            <div className="container">
                <div className="grid grid-cols-12 sm:gap-x-6">
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box overflow-hidden">
                            <div className='box-body !p-0  product-checkout'>
                                <Basicwizard />
                            </div>
                        </div>
                    </div>

                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Order Summary
                                     <SpkBadge variant="primary/10" customClass="text-primary !border-b-0 !rounded-full ms-2">02</SpkBadge></div>
                            </div>
                            <div className="box-body !p-0">
                                <ul className="list-group mb-0 !border-0 !rounded-0">
                                    <li className="list-group-item !border-t-0 !border-s-0 !border-e-0">
                                        <div className="flex items-center flex-wrap">
                                            <div className="me-2">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src={ecommereceimg1} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="mb-0 font-semibold">Blue sweatshirt</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Quantity : 2 
                                                 <SpkBadge variant="success/10" customClass="text-success ms-4">30% Off</SpkBadge></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link aria-label="anchor" to="#" >
                                                        <i className="ri-close-line text-[1rem] text-[#8c9097] dark:text-white/50"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 text-[0.875rem] font-semibold">$189<span className="ms-1 text-[#8c9097] dark:text-white/50 text-[0.6875rem]  inline-block"><s>$329</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item  !border-s-0 !border-e-0 dark:border-defaultborder/10 border-start-0 border-end-0">
                                        <div className="flex items-center flex-wrap">
                                            <div className="me-2">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src={ecommereceimg7} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="mb-0 font-semibold">Denim Jacket</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Quantity : 1  
                                                <SpkBadge variant="success/10" customClass="text-success ms-4">10% Off</SpkBadge></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link aria-label="anchor" to="#" >
                                                        <i className="ri-close-line text-[1rem] text-[#8c9097] dark:text-white/50"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 text-[0.875rem] font-semibold">$129<span className="ms-1 text-[#8c9097] dark:text-white/50 text-[0.6875rem]  inline-block"><s>$139</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                                    <div className="flex items-center justify-between flex-wrap">
                                        <div className="text-[0.75rem] font-semibold bg-primary/10 text-primary p-1 rounded-full">SPRUKO25</div>
                                        <div className="text-success">COUPON APPLIED</div>
                                    </div>
                                </div>
                                <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Sub Total</div>
                                        <div className="font-semibold text-[0.875rem]">$318</div>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Discount</div>
                                        <div className="font-semibold text-[0.875rem] text-success">10% - $31.8</div>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Delivery Charges</div>
                                        <div className="font-semibold text-[0.875rem] text-danger">- $29</div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Service Tax (18%)</div>
                                        <div className="font-semibold text-[0.875rem]">- $45.29</div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[0.9375rem]">Total :</div>
                                        <div className="font-semibold text-[1rem] text-dark"> $1,387</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Checkout