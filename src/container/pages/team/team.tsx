import  { FC, Fragment } from 'react';
import { Reactdata, Selectdata1, Teamuidata, Testingdata, Uidata } from '../../../components/ui/data/pages/teamdata'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import SelectComponent from '../../../@spk/spk-packages/select-component';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkTeamcards from '../../../@spk/spk-pages/spk-teamcards';
import SpkButton from '../../../@spk/uielements/spk-button';

interface TeamProps {}

const Team: FC<TeamProps> = () =>{ 



    return (
        <Fragment>
            <Pageheader currentpage="Team" activepage="Pages" mainpage="Team" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="team-members" id="team-members">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-body">
                                        <div className="team-header">
                                            <div className="flex flex-wrap items-center justify-between">
                                                <div className="h5 font-semibold mb-0">Team Ui</div>
                                                <div className="flex items-center">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control w-full !bg-light dark:!bg-light border-0 !rounded-s-md" placeholder="Search Person Name" aria-describedby="search-team-member" />
                                                        <SpkButton variant="light" customClass="ti-btn !mb-0" buttontype="button" Label="button" Id="search-team-member"><i className="ri-search-line text-[#8c9097] dark:text-white/50"></i></SpkButton>
                                                    </div>
                                                    <SpkDropdown Icon={true} Customclass="ms-2"  Linktag={false}  arialexpand={false}  IconClass="ti ti-dots-vertical"
                                                        CustomToggleclass="ti-btn-icon ti-btn-light !py-3">
                                                         <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Delete Team</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Edit</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Add Member</Link></li>
                                                    </SpkDropdown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {Teamuidata.map((idx) => (
                                <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}>
                                    <SpkTeamcards card={idx} />
                                </div>
                            ))}
                        </div>
                        <nav aria-label="Page navigation">
                            <ul className="ti-pagination  mb-4 justify-end">
                                <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#">Previous</Link></li>
                                <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">3</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">Next</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="team-groups">
                        <div className="box">
                            <div className="box-header  !justify-between">
                                <h6 className="font-semibold mb-0">All Teams</h6>
                                <div>
                                    <SpkButton buttontype="button" variant="primary" customClass="hs-dropdown-toggle ti-btn !text-[0.75rem] !py-1 !px-2" Overlay="#hs-vertically-centered-modal1">
                                        Create Team<i className="ri-add-line ms-1 align-middle"></i>
                                    </SpkButton>
                                    <div id="hs-vertically-centered-modal1" className="hs-overlay hidden ti-modal">
                                        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                                            <div className="ti-modal-content w-full">
                                                <div className="ti-modal-header">
                                                    <h6 className="modal-title" id="staticBackdropLabel2">Create Team
                                                    </h6>
                                                    <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn" Overlay="#hs-vertically-centered-modal1">
                                                        <span className="sr-only">Close</span>
                                                        <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                                        </svg>
                                                    </SpkButton>
                                                </div>
                                                <div className="ti-modal-body px-4">
                                                    <div className="gridgrid-cols-12 gap-4">
                                                        <div className="xl:col-span-12 col-span-12">
                                                            <label htmlFor="team-name" className="form-label">Team Name</label>
                                                            <input type="text" className="form-control" id="team-name" placeholder="Enter Name" />
                                                        </div>
                                                        <div className="xl:col-span-12 col-span-12 mt-2">
                                                            <label className="form-label">Maximum Team Limit</label>
                                                            <SelectComponent option={Selectdata1} mainClass="basic-multi-select" defaultvalue={[Selectdata1[0]]}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ti-modal-footer">
                                                    <SpkButton buttontype="button" variant="light" customClass="hs-dropdown-toggle ti-btn" Overlay="#hs-vertically-centered-modal1">
                                                        Cancel
                                                    </SpkButton>
                                                    <Link className="ti-btn ti-btn-primary-full" to="#">
                                                        create
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body !p-0">
                                <PerfectScrollbar>
                                    <div className="teams-nav" id="teams-nav">
                                        <ul className="list-none mb-0 mt-2">
                                            <li className="!pb-0">
                                                <div className="flex justify-between items-center">
                                                    <div className="text-[.625rem] font-semibold mb-2 text-[#8c9097] dark:text-white/50">TEAM UI</div>
                                                    <SpkButton buttontype="button" Label="button" variant="success" Size="sm" customClass="hs-dropdown-toggle ti-btn" Overlay="#create-teamui-mem">
                                                        <i className="ri-add-line"></i>
                                                    </SpkButton>
                                                    <div id="hs-vertically-centered-modal" className="hs-overlay hidden ti-modal">
                                                        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                                                            <div className="ti-modal-content w-full">
                                                                <div className="ti-modal-header">
                                                                    <h6 className="modal-title">Add Member</h6>
                                                                    <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn" Overlay="#create-teamui-mem">
                                                                        <span className="sr-only">Close</span> <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"></path> </svg> 
                                                                    </SpkButton> </div>
                                                                <div className="ti-modal-body px-4">
                                                                    <div className="grid grid-cols-12">
                                                                        <div className="col-span-12">
                                                                            <label htmlFor="team-name3" className="form-label">Name</label>
                                                                            <input type="text" className="form-control" id="team-name3" placeholder="Enter Name" /> </div> </div> </div>
                                                                <div className="ti-modal-footer">
                                                                    <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-btn ti-btn-light" Overlay="#create-teamui-mem"> Cancel </SpkButton>
                                                                    <a className="ti-btn ti-btn-primary-full" href="#"> Add </a>
                                                                </div> </div></div>
                                                    </div>
                                                </div>
                                            </li>
                                            {Uidata.map((idx)=>(                                            
                                                <li>
                                                <Link to="#" key={Math.random()}>
                                                    <div className="flex items-center">
                                                        <div className="me-2 flex items-center">
                                                            <span className={`avatar avatar-sm avatar-rounded ${idx.active}`}>
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span>{idx.name}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                                                              {idx.time}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            ))}
                                            <li className="pb-0">
                                                <div className="flex justify-between items-center">
                                                    <div className="text-[.625rem] font-semibold mb-2 text-[#8c9097] dark:text-white/50">TEAM REACT</div>
                                                    <SpkButton buttontype="button" Label="button" variant="success" Size="sm" customClass="ti-btn" Overlay="#create-teamreact-mem">
                                                        <i className="ri-add-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </li>
                                            {Reactdata.map((idx)=>(
                                                <li key={Math.random()}>
                                                    <Link to="#">
                                                        <div className="flex items-center">
                                                            <div className="me-2 flex items-center">
                                                                <span className={`avatar avatar-sm avatar-rounded ${idx.active}`}>
                                                                    <img src={idx.src} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <span>{idx.name}</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-[.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                                                                {idx.time}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li className="pb-0">
                                                <div className="flex justify-between items-center">
                                                    <div className="text-[.625rem] font-semibold mb-2 text-[#8c9097] dark:text-white/50">TEAM TESTING</div>
                                                    <SpkButton buttontype="button" Label="button" variant="success" Size="sm" customClass="ti-btn" Overlay="#create-teamtesting-mem">
                                                        <i className="ri-add-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </li>
                                            {Testingdata.map((idx)=>(
                                                <li key={Math.random()}>
                                                    <Link to="#">
                                                        <div className="flex items-center">
                                                            <div className="me-2 flex items-center">
                                                                <span className={`avatar avatar-sm avatar-rounded ${idx.active}`}>
                                                                    <img src={idx.src} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <span>{idx.name}</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-[.625rem] font-semibold text-[#8c9097] dark:text-white/50">
                                                                {idx.time}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="create-teamui-mem" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="ti-modal-content w-full">
                        <div className="ti-modal-header">
                            <h6 className="modal-title">Add Member</h6>
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn" Overlay="#create-teamui-mem">
                                <span className="sr-only">Close</span>
                                <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                </svg>
                            </SpkButton>
                        </div>
                        <div className="ti-modal-body px-4">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <label htmlFor="team-name3" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="team-name3" placeholder="Enter Name" />
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton buttontype="button" variant="light" customClass="hs-dropdown-toggle ti-btn" Overlay="#create-teamui-mem">
                                Cancel
                            </SpkButton>
                            <a className="ti-btn ti-btn-primary-full" href="#">
                                Add
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="create-teamreact-mem" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="ti-modal-content w-full">
                        <div className="ti-modal-header">
                            <h6 className="modal-title">Add Member</h6>
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn" Overlay="#create-teamreact-mem">
                                <span className="sr-only">Close</span>
                                <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                </svg>
                            </SpkButton>
                        </div>
                        <div className="ti-modal-body px-4">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <label htmlFor="team-name3" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="team-name5" placeholder="Enter Name" />
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton buttontype="button" variant="light" customClass="hs-dropdown-toggle ti-btn " Overlay="#create-teamreact-mem">
                                Cancel
                            </SpkButton>
                            <a className="ti-btn ti-btn-primary-full" href="#">
                                Add
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="create-teamtesting-mem" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="ti-modal-content w-full">
                        <div className="ti-modal-header">
                            <h6 className="modal-title">Add Member</h6>
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn" Overlay="#create-teamtesting-mem">
                                <span className="sr-only">Close</span>
                                <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                </svg>
                            </SpkButton>
                        </div>
                        <div className="ti-modal-body px-4">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <label htmlFor="team-name3" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="team-name4" placeholder="Enter Name" />
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton buttontype="button" variant="light" customClass="hs-dropdown-toggle ti-btn" Overlay="#create-teamtesting-mem">
                                Cancel
                            </SpkButton>
                            <a className="ti-btn ti-btn-primary-full" href="#">
                                Add
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team