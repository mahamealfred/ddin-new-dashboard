import  { FC, Fragment, } from 'react';
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import { SearchCompanies } from '../../../../components/ui/data/apps/jobs/searchcompanydata';
import SpkSearchcompany from '../../../../@spk/apps/spk-searchcompany';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface SearchcompanyProps {}

const Searchcompany: FC<SearchcompanyProps> = () => {
    const Data = [
        { value: 'All Categories', label: 'All Categories' },
        { value: 'Software Developer', label: 'Software Developer' },
        { value: 'Web Developer', label: 'Web Developer' },
        { value: 'Software Architect', label: 'Software Architect' },
        { value: 'IT Hardware', label: 'IT Hardware' },
        { value: 'Network Engineer', label: 'Network Engineer' },
        { value: 'React Developer', label: 'React Developer' },
    ];
    return (
        <Fragment>
            <Pageheader currentpage="Search Company" activepage="Jobs" mainpage="Search Company" />
            <div className="container">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 lg:col-span-5 col-span-12">
                        <div className="box custom-box products-navigation-box">
                            <div className="box-body !p-0">
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Industry Type</h6>
                                    <div className="px-0 py-4 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="c-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-1">
                                                R &amp; D
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-defaulttextcolor  ltr:float-right rtl:float-left">2,712</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="c-2" />
                                            <label className="form-check-label" htmlFor="c-2">
                                                Accounting
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-defaulttextcolor  ltr:float-right rtl:float-left">536</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="c-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-3">
                                                Business Process
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-defaulttextcolor  ltr:float-right rtl:float-left">18,289</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="c-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-4">
                                                Consulting
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-defaulttextcolor  ltr:float-right rtl:float-left">3,453</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="c-5" />
                                            <label className="form-check-label" htmlFor="c-5">
                                                Administrative Support
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</SpkBadge>
                                        </div>
                                        <div id="hs-show-hide-industry-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                          >
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="c-8" />
                                                <label className="form-check-label" htmlFor="c-5">
                                                    Human Resources
                                                </label>
                                                <SpkBadge  variant="light" customClass="text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="c-9" />
                                                <label className="form-check-label" htmlFor="c-5">
                                                    Marketing
                                                </label>
                                                <SpkBadge  variant="light" customClass="text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</SpkBadge>
                                            </div>
                                        </div>
                                        <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                            to="#" id="hs-show-hide-industry"
                                            data-hs-collapse="#hs-show-hide-industry-heading">
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
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Location</h6>
                                    <div className="px-0 py-4 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="available-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="available-1">
                                                Hyderabad
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">512</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="available-2" />
                                            <label className="form-check-label" htmlFor="available-2">
                                                Banglore
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">2,186</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="available-3" />
                                            <label className="form-check-label" htmlFor="available-3">
                                                Chennai
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">734</SpkBadge>
                                        </div>
                                        <div id="hs-show-hide-location-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-hide-location">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Pune
                                                </label>
                                                <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">5,964</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    USA
                                                </label>
                                                <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">2,123</SpkBadge>
                                            </div>
                                        </div>
                                        <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                            to="#" id="hs-show-hide-location"
                                            data-hs-collapse="#hs-show-hide-location-heading">
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
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Company Size</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="bond-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="bond-1">
                                                0-50
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">145</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="bond-2" />
                                            <label className="form-check-label" htmlFor="bond-2">
                                                50 - 100
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">432</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="bond-3" />
                                            <label className="form-check-label" htmlFor="bond-3">
                                                100 - 150
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">123</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Recruiter Type</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="Recruiter-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="Recruiter-1">
                                                Direct Company
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">13</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="Recruiter-2" />
                                            <label className="form-check-label" htmlFor="Recruiter-2">
                                                Agency
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">67</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Job Vacancies</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="vacancies-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="vacancies-1">
                                                0 -10
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">13</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="vacancies-2" />
                                            <label className="form-check-label" htmlFor="vacancies-2">
                                                10 - 20
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">67</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="vacancies-3" />
                                            <label className="form-check-label" htmlFor="vacancies-3">
                                                20 +above
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">67</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Type of Employement</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="j-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-1">
                                                Full Time
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">512</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="j-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-2">
                                                Part Time
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">2,186</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="j-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-3">
                                                Internship
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">734</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="j-4" />
                                            <label className="form-check-label" htmlFor="j-4">
                                                Freelancer
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">16</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" defaultValue="" id="j-5" />
                                            <label className="form-check-label" htmlFor="j-5">
                                                Remote Job
                                            </label>
                                            <SpkBadge  variant="light" customClass="text-default  ltr:float-right rtl:float-left">1,432</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-9 lg:col-span-7 col-span-12">
                        <div className="grid grid-cols-12 align-center mb-4">
                            <div className="lg:col-span-12 col-span-12">
                                <div className="inline-flex !w-full companies-search-input">
                                    <input type="text" className="form-control !rounded-e-none !border-e-0" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                        <SelectComponent option={Data} mainClass="!rounded-none !w-full choices" defaultvalue={[Data[0]]}/>
                                    <input type="text" className="form-control !rounded-none" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                    <SpkButton variant="primary-full" Label="button" buttontype="button" customClass="ti-btn !mb-0 !rounded-s-none"><i className="ri-search-line"></i></SpkButton>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="flex items-center flex-wrap gap-2">
                                    <h5 className="font-semibold mb-0 flex-grow">1287 <span className="font-normal text-[1.125rem]">Companies match for your search</span> </h5>
                                    <SpkDropdown Icon={true} IconPosition="before" Toggletext="Sort By" Customclass="btn-group" CustomToggleclass="border dark:!border-defaultborder/10 dropdown-toggle dark:hover:!bg-light" color="outline-light" arialexpand={false}
                                         IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
                                            <li><Link className="ti-dropdown-item" to="#">Premium</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Newest</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Most Relevant</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Fresher</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Experienced</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Bond Agreement</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Flexible Shift</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Day Shift</Link></li>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </div>
                      {SearchCompanies.map((idx) => (
                        <SpkSearchcompany key={Math.random()} tooltip={'Add to Wishlist'} sharetooltip={'Share this Company'} card={idx} Shareicon={idx.Shareicon} />
                      ))}
                        <nav aria-label="Page navigation">
                            <ul className="ti-pagination ltr:float-right rtl:float-left  mb-4">
                                <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#">Previous</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">3</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">Next</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Searchcompany