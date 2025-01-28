import  { FC, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LabeledTwoThumbs1, { Candidates } from '../../../../components/ui/data/apps/jobs/searchcandidatedata';
import Pageheader from '../../../../components/common/page-header/pageheader';
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import SpkCandidate from '../../../../@spk/apps/spk-candidatecard';
import SpkButton from '../../../../@spk/uielements/spk-button';
interface SearchcandidateProps {}

const Searchcandidate: FC<SearchcandidateProps> = ({ local_varaiable }:any) => {

    const Data = [
        { value: 'All Categories', label: 'All Categories' },
        { value: 'Software Developer', label: 'Software Developer' },
        { value: 'Web Developer', label: 'Web Developer' },
        { value: 'Software Architect', label: 'Software Architect' },
        { value: 'IT Hardware', label: 'IT Hardware' },
        { value: 'Network Engineer', label: 'Network Engineer' },
        { value: 'React Developer', label: 'React Developer' },
    ];
    const Data2 = [
        { value: 'Fresher', label: 'Fresher' },
        { value: '1 Year Exp', label: '1 Year Exp' },
        { value: '2 Year Exp', label: '2 Year Exp' },
        { value: '3 Year Exp', label: '3 Year Exp' },
        { value: '4 Year Exp', label: '4 Year Exp' },
        { value: '5+ Year Exp', label: '5+ Year Exp' },
    ];

    return (
        <Fragment>
            <Pageheader currentpage="Search Candidate" activepage="Jobs" mainpage="Search Candidate" />
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="xxl:col-span-3 xl:col-span-4 col-span-12">
                        <div className="box custom-box products-navigation-box">
                            <div className="box-body !p-0">
                                <div className="!p-6 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Categories</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-1">
                                                R &amp; D
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">2,712</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-2" />
                                            <label className="form-check-label" htmlFor="c-2">
                                                Accounting
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">536</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-3">
                                                Business Process
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">18,289</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-4">
                                                Consulting
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">3,453</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-5" />
                                            <label className="form-check-label" htmlFor="c-5">
                                                Administrative Support
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">7,165</SpkBadge>
                                        </div>
                                        <div id="hs-show-hide-categeories-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                          >
                                            <div className="form-check !mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Human Resources
                                                </label>
                                                <SpkBadge variant="light" customClass="me-1 text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</SpkBadge>
                                            </div>
                                            <div className="form-check !mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Marketing
                                                </label>
                                                <SpkBadge variant="light" customClass="me-1 text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</SpkBadge>
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
                                    <h6 className="font-semibold mb-0">Availability</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="available-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="available-1">
                                                Immediate
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">512</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="available-2" />
                                            <label className="form-check-label" htmlFor="available-2">
                                                30 Days
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">2,186</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="available-3" />
                                            <label className="form-check-label" htmlFor="available-3">
                                                3 Months
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">734</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Bond Agreement</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="bond-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="bond-1">
                                                1 Year
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">512</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="bond-2" />
                                            <label className="form-check-label" htmlFor="bond-2">
                                                2 Years
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">512</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="bond-3" />
                                            <label className="form-check-label" htmlFor="bond-3">
                                                3 Years
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">512</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Languages</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="languages-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="languages-1">
                                                English
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">13</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="languages-2" />
                                            <label className="form-check-label" htmlFor="languages-2">
                                                Hindi
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">67</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="languages-3" />
                                            <label className="form-check-label" htmlFor="languages-3">
                                                Telugu
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">58</SpkBadge>
                                        </div>
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
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">512</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-2">
                                                Part Time
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">2,186</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-3">
                                                Internship
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">734</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-4" />
                                            <label className="form-check-label" htmlFor="j-4">
                                                Freelancer
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">16</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-5" />
                                            <label className="form-check-label" htmlFor="j-5">
                                                Remote Job
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">1,432</SpkBadge>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-5">Salary Range</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                                        <div className="flex mt-4">
                                            <div className="font-semibold h6 mb-0">$<span id="lower-value">8000.00</span></div> &nbsp; -- &nbsp; <div className="font-semibold h6 mb-0">$<span id="upper-value">40000.00</span></div> </div>
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
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">16,563</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="q-2">
                                                10th Pass and Above
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">15,234</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-3" />
                                            <label className="form-check-label" htmlFor="q-3">
                                                12th Pass and Above
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">6,278</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="q-4">
                                                Diploma and Graduate
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">4,531</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-5" />
                                            <label className="form-check-label" htmlFor="q-5">
                                                Post Graduate
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">2,405</SpkBadge>
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
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">23,156</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-2" />
                                            <label className="form-check-label" htmlFor="e-2">
                                                Less than 1 year
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">15,632</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-3">
                                                Less than 2 year
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">15,032</SpkBadge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-4">
                                                More than 3 years
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">7,154</SpkBadge>
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
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">23,156</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-2">
                                                Javascript
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">15,632</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-3" />
                                            <label className="form-check-label" htmlFor="s-3">
                                                PHP
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">15,032</SpkBadge>
                                        </div>
                                        <div className="form-check !mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-4">
                                                CSS3
                                            </label>
                                            <SpkBadge variant="light" customClass="me-1 text-default font-500 ltr:float-right rtl:float-left">7,154</SpkBadge>
                                        </div>
                                        <div id="hs-show-hide-skills-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-skills-categeories">
                                            <div className="form-check !mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="s-5" />
                                                <label className="form-check-label" htmlFor="s-5">
                                                    Tailwind
                                                </label>
                                                <SpkBadge variant="light" customClass="me-1 !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">5,946</SpkBadge>
                                            </div>
                                            <div className="form-check !mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="s-6" />
                                                <label className="form-check-label" htmlFor="s-6">
                                                    Angular
                                                </label>
                                                <SpkBadge variant="light" customClass="me-1 !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">3,267</SpkBadge>
                                            </div>
                                            <div className="form-check !mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="s-7" />
                                                <label className="form-check-label" htmlFor="s-7">
                                                    React
                                                </label>
                                                <SpkBadge variant="light" customClass="me-1 !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">578</SpkBadge>
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
                    </div>
                    <div className="xxl:col-span-9 xl:col-span-8 col-span-12">
                        <div className="grid grid-cols-12 gap-6 items-center mb-6">
                            <div className="lg:col-span-12 col-span-12">
                                <div className="inline-flex !w-full companies-search-input">
                                    <input type="text" className="form-control !rounded-e-none border-e-0" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                    <SelectComponent option={Data} mainClass="w-full !rounded-none form-control !p-0" defaultvalue={[Data[0]]} searchable={true}/>
                                    <input type="text" className="form-control !rounded-none border-x-0" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                    <SelectComponent option={Data2} mainClass="w-full !rounded-none form-control !p-0" defaultvalue={[Data2[0]]} searchable={true}/>
                                    <SpkButton buttontype="button" Label="button" variant="primary-full" customClass="ti-btn !mb-0 !rounded-s-none"><i className="ri-search-line"></i></SpkButton>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="sm:flex items-center">
                                    <h5 className="font-semibold mb-0 flex-grow">1287 <span className="font-normal text-[1.125rem]">Candidates match your job search</span> </h5>
                                    <SpkDropdown Icon={true} IconPosition="before" Toggletext="Sort By" Customclass="btn-group" CustomToggleclass="border" color="light" arialexpand={false}
                                         IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
                                        <li><Link className="ti-dropdown-item" to="#" >Premium</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#" >Newest</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#" >Most Relevant</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#" >Fresher</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#" >Experienced</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#" >Bond Agreement</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#" >Flexible Shift</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#" >Day Shift</Link></li>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </div>
                           {Candidates.map((idx) => (
                            <SpkCandidate showPackageAndLanguages={true} key={Math.random()} card={idx} tooltip={'Download Resume'} tooltipwishlist={'Wishlist'} profiletooltip={'View Profile'} />
                           ))}
                        <ul className="ti-pagination mb-4 justify-end">
                            <li className="page-item disabled">
                                <Link className="page-link px-3 py-[0.375rem]" to="#" >
                                    Prev
                                </Link>
                            </li>
                            <li className="page-item active"><Link className="page-link px-3 py-[0.375rem]" to="#" >1</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >2</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >3</Link></li>
                            <li className="page-item">
                                <Link className="page-link px-3 py-[0.375rem] text-primary" to="#" >
                                    next
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(Searchcandidate);