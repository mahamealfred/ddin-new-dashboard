import  { Fragment } from 'react'
import Pageheader from '../../../../components/common/page-header/pageheader'
import { Link } from 'react-router-dom'
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import { orderedProducts } from '../../../../components/ui/data/pages/ecommerces/productlistdata';
import SpkoOrderscard from '../../../../@spk/spk-pages/ecommerce/spkorderscard';
import SpkButton from '../../../../@spk/uielements/spk-button';

const Orders = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Orders" activepage="Ecommerce" mainpage="Orders" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body flex items-center flex-wrap">
                            <div className="flex-grow">
                                <span className="mb-0 text-[0.875rem] text-[#8c9097] dark:text-white/50">Total number of orders placed upto now : <span className="font-semibold text-success">28</span></span>
                            </div>
                            <SpkDropdown  Customclass=" ms-2" Linktag={true}  arialexpand={false} Toggletext="Sort By"  IconClass="ti ti-dots-vertical"
                                Linkclass="ti-btn ti-btn-light sm:!m-0 !mb-3 !gap-0 !font-medium dark:text-defaulttextcolor/70" Arrowicon={true}>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#">Date</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#">Price</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        to="#">Category</Link></li>
                            </SpkDropdown>
                            <div className="flex items-center ms-2" role="search">
                                <input className="form-control !rounded-sm me-2 dark:text-defaulttextcolor/70" type="search" placeholder="Search" aria-label="Search" />
                                <SpkButton variant="light" customClass="ti-btn dark:text-defaulttextcolor/70 !mb-0" buttontype="submit">Search</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
                    {orderedProducts.map((idx)=>(
                        <div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}>
                               <SpkoOrderscard card={idx} />
                        </div>
                    ))}
            </div>
            <ul className="ti-pagination !px-3 !py-[0.375rem] !text-[1rem] !mb-4 flex justify-end"> 
                <li className="page-item disabled">
                <Link to="#" className="page-link !px-3 !py-[0.375rem]">Previous</Link>
                </li> 
                <li className="page-item">
                <Link className="page-link !px-3 !py-[0.375rem]" to="#">1</Link>
                </li> 
                <li className="page-item">
                <Link className="page-link !px-3 !py-[0.375rem]" to="#">2</Link>
                </li> 
                <li className="page-item">
                <Link className="page-link !px-3 !py-[0.375rem]" to="#">3</Link>
                </li> 
                <li className="page-item"> 
                    <Link className="page-link !px-3 !py-[0.375rem]" to="#">Next</Link>
                </li> 
             </ul>
        </Fragment>
    )
}

export default Orders