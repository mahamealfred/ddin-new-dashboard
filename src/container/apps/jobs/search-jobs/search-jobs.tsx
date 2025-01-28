import  { FC, Fragment } from 'react'
import { connect } from 'react-redux'
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import LabeledTwoThumbs1, { SearchJobs } from '../../../../components/ui/data/apps/jobs/searchjobsdata';
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import SpkSearchjobs from '../../../../@spk/apps/spk-searchjobs';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface SearchjobsProps {}

const Searchjobs: FC<SearchjobsProps> = ({ local_varaiable }:any) => {
    return (
        <Fragment>
            <Pageheader currentpage="Search Jobs" activepage="Jobs" mainpage="Search Jobs" />
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box custom-box">
                            <div className="box-body p-3">
                                <div className="grid grid-cols-12 items-center">
                                    <div className="lg:col-span-8 col-span-12">
                                        <div className="flex">
                                            <h5 className="font-semibold mb-0"><span className="font-normal">Showing</span> 3456 Jobs</h5>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-4 col-span-12 text-end">
                                        <SpkDropdown Icon={true} IconPosition="before" Toggletext="Sort By" Customclass="btn-group" CustomToggleclass="border dark:border-defaultborder/10 dropdown-toggle" 
                                         color="light" arialexpand={false}  IconClass="ri-arrow-down-s-line align-middle inline-block" Custommenuclass="!text-end">
                                                <li><Link className="ti-dropdown-item !text-start" to="#">Featured</Link></li>
                                                <li><Link className="ti-dropdown-item !text-start" to="#">Newest</Link></li>
                                                <li><Link className="ti-dropdown-item !text-start" to="#">Most Relevant</Link></li>
                                                <li><Link className="ti-dropdown-item !text-start" to="#">Best Rated</Link></li>
                                        </SpkDropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xxl:col-span-3 lg:col-span-5 col-span-12">
                        <div className="box custom-box products-navigation-box">
                            <div className="box-body !p-0">
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Categories</h6>
                                    <div className="px-2 py-4 pb-0">
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-1">
                                                R &amp; D
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">2,712</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-2" />
                                            <label className="form-check-label" htmlFor="c-2">
                                                Accounting
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">536</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-3">
                                                Business Process
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">18,289</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-4">
                                                Consulting
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">3,453</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-5" />
                                            <label className="form-check-label" htmlFor="c-5">
                                                Administrative Support
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">7,165</SpkBadge>
                                        </div>
                                        <div id="hs-show-hide-categeories-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-hide-categeories">
                                            <div className="form-check !mb-2">
                                                <input className="form-check-input me-2" type="checkbox" defaultValue="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Human Resources
                                                </label>
                                                <SpkBadge variant="light" customClass="text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</SpkBadge>
                                            </div>
                                            <div className="form-check !mb-2">
                                                <input className="form-check-input me-2" type="checkbox" defaultValue="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Marketing
                                                </label>
                                                <SpkBadge variant="light" customClass="text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</SpkBadge>
                                            </div>
                                        </div>
                                        <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                            to="#"  id="hs-show-hide-categeories"
                                            data-hs-collapse="#hs-show-hide-categeories-heading">
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
                                    <h6 className="font-semibold mb-0">Job Type</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-1">
                                                Full Time
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">512</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-2">
                                                Part Time
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">2,186</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-3">
                                                Internship
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">734</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-4" />
                                            <label className="form-check-label" htmlFor="j-4">
                                                Freelancer
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">16</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-5" />
                                            <label className="form-check-label" htmlFor="j-5">
                                                Remote Job
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">1,432</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-5">Salary Range</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                                        <div className="flex mt-4">
                                            <div className="font-semibold h6 mb-0">$<span id="lower-value">8000.00</span></div>
                                            &nbsp; -- &nbsp;
                                            <div className="font-semibold h6 mb-0">$<span id="upper-value">40000.00</span></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Qualification</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-1" />
                                            <label className="form-check-label" htmlFor="q-1">
                                                All Education Levels
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">16,563</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="q-2">
                                                10th Pass and Above
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">15,234</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-3" />
                                            <label className="form-check-label" htmlFor="q-3">
                                                12th Pass and Above
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">6,278</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="q-4">
                                                Diploma and Graduate
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">4,531</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-5" />
                                            <label className="form-check-label" htmlFor="q-5">
                                                Post Graduate
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">2,405</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Experience</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-1">
                                                Fresher
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">23,156</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-2" />
                                            <label className="form-check-label" htmlFor="e-2">
                                                Less than 1 year
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">15,632</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-3">
                                                Less than 2 year
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">15,032</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-4">
                                                More than 3 years
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">7,154</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h6 className="font-semibold mb-0">Skills</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-1">
                                                HTML5
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">23,156</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-2">
                                                Javascript
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">15,632</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-3" />
                                            <label className="form-check-label" htmlFor="s-3">
                                                PHP
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">15,032</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-4">
                                                CSS3
                                            </label>
                                            <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">7,154</SpkBadge>
                                        </div>
                                        <div id="hs-show-hide-skills-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            >
                                            <div className="form-check !mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="s-5" />
                                                <label className="form-check-label" htmlFor="s-5">
                                                    Tailwind
                                                </label>
                                                <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">5,946</SpkBadge>
                                            </div>
                                            <div className="form-check !mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="s-6" />
                                                <label className="form-check-label" htmlFor="s-6">
                                                    Angular
                                                </label>
                                                <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">3,267</SpkBadge>
                                            </div>
                                            <div className="form-check !mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="s-7" />
                                                <label className="form-check-label" htmlFor="s-7">
                                                    React
                                                </label>
                                                <SpkBadge variant="light" customClass="!text-defaulttextcolor font-500 ltr:float-right rtl:float-left">578</SpkBadge>
                                            </div>
                                        </div>
                                        <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                            to="#"  id="hs-show-hide-skills"
                                            data-hs-collapse="#hs-show-hide-skills-heading">
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
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="">
                                    <h5 className="font-semibold mb-4">Get Latest Job Alerts</h5>
                                    <p className="mb-4">Latest jobs updates on the go to recieved direct to your email. Stay updated with your latest new jobs.</p>
                                    <div className="input-group mb-4">
                                        <input type="text" className="form-control !border-s" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                        <SpkButton variant="primary-full" customClass="ti-btn !mb-0" buttontype="button" Id="blog-subscribe">Subscribe</SpkButton>
                                    </div>
                                    <label className="form-check-label">
                                        By Subscribing you accept <Link to="#"  className="text-success"><u className='ms-1'> privacy policy </u></Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-9 lg:col-span-7 col-span-12">
                         {SearchJobs.map((idx) => (
                            <SpkSearchjobs key={Math.random()} card={idx} logo={true} 
                            cardClass='featured-jobs' apply="Apply Now" />
                         ))}
                        <nav aria-label="Page navigation">
                            <ul className="ti-pagination ltr:float-right rtl:float-left mb-4">
                                <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#" >Previous</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >1</Link></li>
                                <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" to="#" >2</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >3</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >Next</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(Searchjobs);