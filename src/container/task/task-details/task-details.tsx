import  { FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader'
import { Link } from 'react-router-dom'
import face2 from "../../../assets/images/faces/2.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import SpkBadge from '../../../@spk/uielements/spk-badge';
import SpkTasktimeline from '../../../@spk/task/spk-tasktimeline';
import { Activitiesdata, Files } from '../../../components/ui/data/task/taskdetailsdata';
import Spktables from '../../../@spk/tables/spk-tables';
import SpkButton from '../../../@spk/uielements/spk-button';


interface TaskdetailsProps {}

const Taskdetails: FC<TaskdetailsProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Task Details" activepage="Task" mainpage="Task Details" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-9 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Task Summary</div>
                            <div className="btn-list">
                                <SpkButton Label="button" buttontype="button" customClass="ti-btn bg-success !py-1 !px-2 !font-medium text-white !text-[0.75rem] me-0"><i className="ri-edit-line me-1 align-middle"></i>Edit Task</SpkButton>
                            </div>
                        </div>
                        <div className="box-body">
                            <h5 className="font-semibold mb-4 task-title text-[1.25rem]">
                                Update ynex new project design.
                            </h5>
                            <div className="text-[.9375rem] font-semibold mb-2">Task Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 task-description">The current website design needs a refresh to improve user experience and enhance visual appeal. The goal is to create a modern and responsive design that aligns with the latest web design trends. The updated design should ensure seamless navigation, easy readability, and a cohesive visual identity.</p>
                            <div className="text-[.9375rem] font-semibold mb-2">Key tasks :</div>
                            <div>
                                <ul className="task-details-key-tasks mb-0 !ps-8">
                                    <li>Conducting a comprehensive analysis of the existing website design.</li>
                                    <li>Collaborating with the UI/UX team to develop wireframes and mockups.</li>
                                    <li>Iteratively refining the design based on feedback.</li>
                                    <li>Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
                                    <li>Testing the website across different devices and browsers.</li>
                                    <li>Conducting a final review to ensure all design elements are consistent and visually appealing.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Assigned By</span>
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar avatar-xs avatar-rounded">
                                                <img src={face15} alt="" />
                                            </span>
                                        </div>
                                        <span className="block text-[.875rem] dark:text-defaulttextcolor/70 font-semibold">H.J.Taylor</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Assigned Date</span>
                                    <span className="block text-[.875rem] font-semibold dark:text-defaulttextcolor/70">24,June 2023</span>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Due Date</span>
                                    <span className="block text-[.875rem] font-semibold dark:text-defaulttextcolor/70">05,July 2023</span>
                                </div>
                                <div className="task-details-progress">
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1">Progress</span>
                                    <div className="flex items-center flex-wrap">
                                        <div className="progress progress-xs progress-animate flex-grow me-2" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar bg-primary w-[70%]"></div>
                                        </div>
                                        <div className="text-[#8c9097] dark:text-white/50 text-[.6875rem]">70%</div>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Efforts</span>
                                    <span className="block text-[.875rem]  dark:text-defaulttextcolor/70 font-semibold">45H : 35M : 45S</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Task Discussions</div>
                        </div>
                        <div className="box-body text-defaulttextcolor text-defaultsize">
                            <ul className="list-none profile-timeline">
                                     <SpkTasktimeline activities={Activitiesdata} />
                            </ul>
                        </div>
                        <div className="box-footer">
                            <div className=" !p-0 !border-0">
                                <div className="sm:flex items-center leading-none ">
                                    <div className="me-4">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <img src={face9} alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-grow me-2">
                                        <div className="inline-flex !w-full">
                                            <input type="text" className="form-control w-full !rounded-e-none" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                            <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn !rounded-none !mb-0"><i className="bi bi-emoji-smile"></i></SpkButton>
                                            <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn !rounded-none !mb-0"><i className="bi bi-paperclip"></i></SpkButton>
                                            <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn !rounded-none !mb-0"><i className="bi bi-camera"></i></SpkButton>
                                            <SpkButton customClass="ti-btn bg-primary text-white !rounded-s-none !mb-0" buttontype="button">Post</SpkButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Additional Details
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <Spktables tableClass="table whitespace-nowrap min-w-full">
                                        <tr className="border-b border-defaultborder">
                                            <td><span className="font-semibold">Task ID :</span></td>
                                            <td>SPK - 123</td>
                                        </tr>
                                        <tr className="border-b border-defaultborder">
                                            <td><span className="font-semibold">Task Tags :</span></td>
                                            <td>
                                                <SpkBadge variant="primary/10" customClass="me-2 text-primary">UI/Ux</SpkBadge>
                                                <SpkBadge variant="primary/10" customClass="me-2 text-primary">Designing</SpkBadge>
                                                <SpkBadge variant="primary/10" customClass="text-primary">Development</SpkBadge>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-defaultborder">
                                            <td><span className="font-semibold">Project Name :</span></td>
                                            <td>
                                                Ynex admin &amp; dashboard template
                                            </td>
                                        </tr>
                                        <tr className="border-b border-defaultborder">
                                            <td><span className="font-semibold">Project Status :</span></td>
                                            <td>
                                                <span className="font-semibold text-secondary">Inprogress</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-defaultborder">
                                            <td><span className="font-semibold">Project Priority :</span></td>
                                            <td>
                                                <SpkBadge variant="danger/10" customClass="text-danger">High</SpkBadge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="font-semibold">Assigned To :</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face10} alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                </Spktables>
                            </div>
                        </div>
                    </div>
                    <div className="box overflow-hidden">
                        <div className="box-header justify-between">
                            <div className="box-title">Sub Tasks</div>
                            <div>
                                <SpkButton buttontype="button" variant="secondary" customClass="ti-btn !py-1 !px-2 !font-medium !text-[0.75rem]"><i className="ri-add-line  align-middle"></i>Sub Task</SpkButton>
                            </div>
                        </div>
                        <div className="box-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success " type="checkbox" defaultValue="" id="successChecked1" defaultChecked /></div>
                                        <div className="font-semibold">Conduct Website Design Analysis</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked2" /></div>
                                        <div className="font-semibold">Collaborate with UI/UX Team</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked3" /></div>
                                        <div className="font-semibold">Refine Design Iteratively</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked4" /></div>
                                        <div className="font-semibold">Implement Design Changes</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked5" defaultChecked /></div>
                                        <div className="font-semibold">Test Responsive and Cross-Browser Compatibility</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked6" defaultChecked /></div>
                                        <div className="font-semibold">Review and Polish Design Elements</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked7" defaultChecked /></div>
                                        <div className="font-semibold">Incorporate Branding Elements</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked8" /></div>
                                        <div className="font-semibold">Documentation and Handover</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="box overflow-hidden">
                        <div className="box-header !border-b-0">
                            <div className="box-title">
                                Attachments
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <ul className="list-group list-group-flush">
                                {Files.map((file) => (
                                    <li key={file.id} className="list-group-item">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <span className="avatar !rounded-full p-1 bg-light">
                                                    <img src={file.imageSrc} alt={file.name} />
                                                </span>
                                            </div>
                                            <div className="flex-grow">
                                                <Link to="#">
                                                    <span className="block font-semibold">{file.name}</span>
                                                </Link>
                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">
                                                    {file.size}
                                                </span>
                                            </div>
                                            <div className="inline-flex">
                                                <SpkButton variant="info" Size="sm"
                                                    Label="button"
                                                    buttontype="button"
                                                    customClass="ti-btn me-[0.375rem]"
                                                >
                                                    <i className="ri-edit-line"></i>
                                                </SpkButton>
                                                <SpkButton  Size="sm" variant="danger"
                                                    Label="button"
                                                    buttontype="button"
                                                    customClass="ti-btn"
                                                >
                                                    <i className="ri-delete-bin-line"></i>
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Taskdetails