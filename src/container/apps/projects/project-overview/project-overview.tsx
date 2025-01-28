import { FC, Fragment } from 'react'
import Pageheader from '../../../../components/common/page-header/pageheader'
import { Link } from 'react-router-dom'
import face2 from "../../../../assets/images/faces/2.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import filemanager1 from "../../../../assets/images/media/file-manager/1.png";
import filemanager3 from "../../../../assets/images/media/file-manager/3.png";
import SpkBadge from '../../../../@spk/uielements/spk-badge';
interface ProjectoverviewProps {}
import SpkTasktimeline from '../../../../@spk/task/spk-tasktimeline';
import { Activitiesdata, Projectoverviewdata } from '../../../../components/ui/data/task/taskdetailsdata';
import Spktables from '../../../../@spk/tables/spk-tables';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface ProjectoverviewProps { }

const Projectoverview: FC<ProjectoverviewProps> = () => {

    interface File {
        id: string;
        name: string;
        size: string;
        imageSrc: string;
    }

    const Files: File[] = [
        { id: '1', name: 'Full Project', size: '0.45MB', imageSrc: filemanager1 },
        { id: '2', name: 'assets.zip', size: '0.99MB', imageSrc: filemanager3 },
        { id: '3', name: 'image-1.png', size: '245KB', imageSrc: filemanager1 },
        { id: '4', name: 'doc.zip', size: '2MB', imageSrc: filemanager3 },
        { id: '5', name: 'landing.zip', size: '3.46MB', imageSrc: filemanager3 },
    ];


    return (
        <Fragment>
            <Pageheader currentpage="Project Overview" activepage="Projects" mainpage="Project Overview" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between flex">
                            <div className="box-title">
                                Project Details
                            </div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}apps/projects/create-project/`} className="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-secondary-full btn-wave"><i className="ri-add-line align-middle me-1 font-semibold"></i>Create Project</Link>
                            </div>
                        </div>
                        <div className="box-body">
                            <h5 className="font-semibold mb-4 task-title">
                                Ynex new angular project.
                            </h5>
                            <div className="text-[.9375rem] font-semibold mb-2">Project Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 task-description">The current website design needs a refresh to improve user experience and enhance visual appeal. The goal is to create a modern and responsive design that aligns with the latest web design trends. The updated design should ensure seamless navigation, easy readability, and a cohesive visual identity.</p>
                            <div className="text-[.9375rem] font-semibold mb-2">Key tasks :</div>
                            <div className="mb-3">
                                <ul className="task-details-key-tasks ps-[2rem] mb-0">
                                    <li>Conducting a comprehensive analysis of the existing website design.</li>
                                    <li>Collaborating with the UI/UX team to develop wireframes and mockups.</li>
                                    <li>Iteratively refining the design based on feedback.</li>
                                    <li>Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
                                    <li>Testing the website across different devices and browsers.</li>
                                    <li>Conducting a final review to ensure all design elements are consistent and visually appealing.</li>
                                </ul>
                            </div>
                            <div className="text-[.9375rem] font-semibold mb-2">Skills :</div>
                            <div>
                                <SpkBadge variant="light" customClass="me-2 text-default">UI/Ux</SpkBadge>
                                <SpkBadge variant="light" customClass="me-2 text-default">JavaScript</SpkBadge>
                                <SpkBadge variant="light" customClass="me-2 text-default">Responsive Design</SpkBadge>
                                <SpkBadge variant="light" customClass="me-2 text-default">Web Accessibility</SpkBadge>
                                <SpkBadge variant="light" customClass="me-2 text-default">Front-End Build Tools</SpkBadge>
                                <SpkBadge variant="light" customClass="me-2 text-default">RESTful APIs</SpkBadge>
                                <SpkBadge variant="light" customClass="me-2 text-default">Performance Testing</SpkBadge>
                                <SpkBadge variant="light" customClass="me-2 text-default">Angular</SpkBadge>
                                <SpkBadge variant="light" customClass="text-default">Vue.js</SpkBadge>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Project Manager</span>
                                    <div className="flex items-center">
                                        <div className="me-2 leading-none">
                                            <span className="avatar avatar-xs !rounded-full">
                                                <img src={face13} alt="" />
                                            </span>
                                        </div>
                                        <span className="block text-[.875rem] font-semibold">S.K.Jacob</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Start Date</span>
                                    <span className="block text-[.875rem] font-semibold">22,June 2023</span>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">End Date</span>
                                    <span className="block text-[.875rem] font-semibold">10,July 2023</span>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Assigned To</span>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm !rounded-full">
                                            <img src={face2} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm !rounded-full">
                                            <img src={face8} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm !rounded-full">
                                            <img src={face5} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm !rounded-full">
                                            <img src={face10} alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Status</span>
                                    <span className="block"><SpkBadge variant="light" customClass="bg-primary/10 text-primary">In Progress</SpkBadge></span>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Priority</span>
                                    <span className="block text-[.875rem] font-semibold"><SpkBadge variant="light" customClass="bg-success/10 text-success">Low</SpkBadge></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Project Discussions</div>
                        </div>
                        <div className="box-body">
                            <ul className="list-unstyled profile-timeline">
                                <SpkTasktimeline activities={Activitiesdata} />
                            </ul>
                        </div>
                        <div className="box-footer">
                            <div className="list-group-item">
                                <div className="sm:flex items-center leading-none">
                                    <div className="me-4">
                                        <span className="avatar avatar-md ">
                                            <img src={face9} alt="" className="!rounded-full" />
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="inline-flex !w-full">
                                            <input type="text" className="form-control !w-full !rounded-e-none" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                            <SpkButton Label="button" buttontype="button" variant="light" customClass="!hidden sm:!flex ti-btn !rounded-none !mb-0"><i className="bi bi-emoji-smile"></i></SpkButton>
                                            <SpkButton Label="button" buttontype="button" variant="light" customClass="!hidden sm:!flex ti-btn !rounded-none !mb-0"><i className="bi bi-paperclip"></i></SpkButton>
                                            <SpkButton Label="button" buttontype="button" variant="light" customClass="!hidden sm:!flex ti-btn !rounded-none !mb-0"><i className="bi bi-camera"></i></SpkButton>
                                            <SpkButton  customClass="ti-btn bg-primary text-white !mb-0 !rounded-s-none" buttontype="button">Post</SpkButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Project Team
                            </div>
                            <div>
                                <SpkButton buttontype="button" variant="light"  customClass="ti-btn !py-1 !px-2 !text-[0.75rem]"><i className="ri-add-line align-middle me-1 font-semibold"></i>Add Member</SpkButton>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <Spktables tableClass="table whitespace-nowrap min-w-full"
                                header={[{title:'Name', headerClassname:'text-start'}, {title:'Designation', headerClassname:'text-start'}, 
                                    {title:'Actions', headerClassname:'text-start'} ]}>
                                        {Projectoverviewdata.map((idx)=>(
                                            <tr className="border border-defaultborder" key={Math.random()}>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2 leading-none">
                                                            <span className={`avatar avatar-sm ${idx.avatarclass}`}>
                                                                <img src={idx.src} alt="" className={idx.imgclass} />
                                                            </span>
                                                        </div>
                                                        <div className="font-semibold">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="light" customClass={`bg-${idx.color}/10 text-${idx.color}`}>{idx.role}</SpkBadge>
                                                </td>
                                                <td>
                                                    <div className="inline-flex">
                                                        <SpkButton Label="button" buttontype="button" variant="info" Size="sm" customClass="ti-btn  me-[0.375rem]"><i className="ri-edit-line"></i></SpkButton>
                                                        <SpkButton Label="button" buttontype="button" variant="danger" Size="sm" customClass="ti-btn"><i className="ri-delete-bin-line"></i></SpkButton>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </Spktables>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">Project Goals</div>
                            <div className="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-light btn-wave"><i className="ri-add-line align-middle me-1 font-semibold"></i>Add Goal</div>
                        </div>
                        <div className="box-body">
                            <ul className="list-group ">
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked1" defaultChecked /></div>
                                        <div className="font-semibold">Increase Efficiency</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked2" /></div>
                                        <div className="font-semibold">Enhance Customer Satisfaction</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked3" /></div>
                                        <div className="font-semibold">Expand Market Reach</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked4" /></div>
                                        <div className="font-semibold">Improve Profitability</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked5" defaultChecked /></div>
                                        <div className="font-semibold">Enhance Product/Service Quality</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked6" defaultChecked /></div>
                                        <div className="font-semibold">Develop Innovative Solutions</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked7" defaultChecked /></div>
                                        <div className="font-semibold">Increase Employee Engagement</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="successChecked8" /></div>
                                        <div className="font-semibold">Enhance Brand Reputation</div>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-4 text-center">
                                <SpkButton buttontype="button" variant="success-full" customClass="ti-btn btn-wave">View All</SpkButton>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box overflow-hidden">
                        <div className="box-header">
                            <div className="box-title">
                                Project Documents
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
                                                <SpkButton  Label="button"  buttontype="button" variant="info" Size="sm"  customClass="ti-btn me-[0.375rem]">
                                                    <i className="ri-edit-line"></i>
                                                </SpkButton>
                                                <SpkButton Label="button" buttontype="button" variant="danger" Size="sm" customClass="ti-btn">
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

export default Projectoverview