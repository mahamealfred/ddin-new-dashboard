import  { FC, Fragment, useState } from 'react';
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import media66 from "../../../assets/images/media/media-66.png";
import SelectComponent from '../../../@spk/spk-packages/select-component';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkTodolist from '../../../@spk/spk-pages/spk-todolist';
import { Todolistdata } from '../../../components/ui/data/pages/todolistdata';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import SpkButton from '../../../@spk/uielements/spk-button';
import SpkFlatpickr from '../../../@spk/spk-packages/datepicker-component';

interface TodolistProps {}

const Todolist: FC<TodolistProps> = () => {

    const [_startDate, setStartDate] = useState(new Date());
    
    const [_startDate1, setStartDate1] = useState<any>(new Date()); 

    const Option1 = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' },
    ];
    // const [selected1, setSelected1] = useState([]);
    const Option2 = [
        { value: 'Select', label: 'Select' },
        { value: 'Critical', label: 'Critical' },
        { value: 'High', label: 'High' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Low', label: 'Low' }
    ];

    //
    const Pendingcards = [Todolistdata[0], Todolistdata[2]];
    //
    const Inprogresscards = [Todolistdata[1], Todolistdata[3], Todolistdata[8]];

    const Completedcards = [Todolistdata[4], Todolistdata[7], Todolistdata[6], Todolistdata[5]];
    return (
        <Fragment>
            <Pageheader currentpage="To do List" activepage="Pages" mainpage="Todo List" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-body !p-0">
                            <div className="p-4 grid border-b border-dashed dark:border-defaultborder/10">
                                <Link to="#" className="hs-dropdown-toggle py-2  px-3 ti-btn bg-primary text-white !font-medium w-full !mb-0" data-hs-overlay="#todo-compose"><i className="ri-add-circle-line !text-[1rem]"></i>Create New Task
                                </Link>
                                <div id="todo-compose" className="hs-overlay hidden ti-modal">
                                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                                        <div className="ti-modal-content">
                                            <div className="ti-modal-header">
                                                <h6 className="modal-title text-[1rem] font-semibold" id="mail-ComposeLabel">Create Task</h6>
                                                <SpkButton buttontype="button" customClass="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" Overlay="#todo-compose">
                                                    <span className="sr-only">Close</span>
                                                    <i className="ri-close-line"></i>
                                                </SpkButton>
                                            </div>
                                            <div className="ti-modal-body !overflow-visible px-4">
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label htmlFor="task-name" className="ti-form-label">Task Name</label>
                                                        <input type="text" className="form-control w-full" id="task-name" placeholder="Task Name" />
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="ti-form-label">Assigned To</label>
                                                        <SelectComponent option={Option1} mainClass="!p-0 ti-form-select !rounded-s-none" multi={true} defaultvalue={[Option1[0]]}/>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="ti-form-label">Assigned Date</label>
                                                        <div className="inline-flex w-full">
                                                            <div className="input-group-text text-[#8c9097] dark:text-white/50 !rounded-e-none border border-defaultborder"> <i className="ri-calendar-line"></i> </div>
                                                            <SpkFlatpickr inputClass="ti-form-input !rounded-s-none" placeholder="Choose Date" onfunChange={(date:any) => setStartDate(date as Date)} />
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="ti-form-label">Target Date</label>
                                                        <div className="inline-flex w-full">
                                                            <div className="input-group-text text-[#8c9097] dark:text-white/50 !rounded-e-none border border-defaultborder"> <i className="ri-calendar-line"></i> </div>
                                                            <SpkFlatpickr inputClass="ti-form-input !rounded-s-none" placeholder="Choose date"  onfunChange={(date:any) => setStartDate1(date)} />
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="ti-form-label">Priority</label>
                                                        <SelectComponent option={Option2} mainClass="!p-0 ti-form-select !rounded-s-none" searchable={true} multi={true} defaultvalue={[Option2[0]]}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ti-modal-footer">
                                                <SpkButton buttontype="button" variant="light"
                                                    customClass="hs-dropdown-toggle ti-btn align-middle"
                                                    Overlay="#todo-compose">
                                                    Cancel
                                                </SpkButton>
                                                <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white !font-medium">Create</SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                                <div className="input-group">
                                    <input type="text" className="form-control w-full !rounded-md !bg-light border-0 !rounded-e-none" placeholder="Search Task Here" aria-describedby="button-addon2" />
                                    <SpkButton buttontype="button" Label="button" customClass="ti-btn ti-btn-light !rounded-s-none !mb-0" Id="button-addon2"><i className="ri-search-line text-[#8c9097] dark:text-white/50"></i></SpkButton>
                                </div>
                            </div>
                            <div className="p-4 task-navigation border-b border-dashed dark:border-defaultborder/10">
                                <ul className="list-none task-main-nav mb-0">
                                    <li className="!px-0 !pt-0">
                                        <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50 opacity-[0.7] font-semibold">TASKS</span>
                                    </li>
                                    <li className="active">
                                        <Link to="#">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-task-line align-middle text-[.875rem]"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    All Tasks
                                                </span>
                                                <SpkBadge variant="success/10" customClass="text-success rounded-full">167</SpkBadge>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-star-line align-middle text-[.875rem]"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Starred
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-delete-bin-5-line align-middle text-[.875rem]"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Trash
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="!px-0 !pt-2">
                                        <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50 op-7 font-semibold">CATEGORIES</span>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-price-tag-line align-middle text-[.875rem] font-semibold text-primary"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Personal
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-price-tag-line align-middle text-[.875rem] font-semibold text-secondary"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Work
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-price-tag-line align-middle text-[.875rem] font-semibold text-warning"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Health &amp; Fitness
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-price-tag-line align-middle text-[.875rem] font-semibold text-success"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Daily Goals
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-price-tag-line align-middle text-[.875rem] font-semibold text-danger"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Financial Management
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4 !flex items-center justify-center">
                                <img src={media66} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-9 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body !p-0">
                                    <div className="md:flex px-4 py-6 items-center justify-between">
                                        <div>
                                            <h6 className="font-semibold mb-0 text-[1rem]">Tasks</h6>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <nav className="-mb-0.5 sm:flex sm:space-x-6 rtl:space-x-reverse flex-wrap" role='tablist'>
                                                <Link className="w-full flex sm:w-auto active hs-tab-active:font-semibold  hs-tab-active:text-primary hs-tab-active:bg-primary/10 rounded-md py-2 px-3 text-sm" to="#" id="alltasks-item" data-hs-tab="#all-tasks" aria-controls="all-tasks">
                                                    All Tasks
                                                </Link>
                                                <Link className="w-full flex sm:w-auto hs-tab-active:font-semibold  hs-tab-active:text-primary hs-tab-active:bg-primary/10 rounded-md  py-2 px-3  text-sm" to="#" id="pending-item" data-hs-tab="#pending" aria-controls="pending">
                                                    Pending
                                                </Link>
                                                <Link className="w-full flex sm:w-auto hs-tab-active:font-semibold  hs-tab-active:text-primary hs-tab-active:bg-primary/10 rounded-md  py-2 px-3  text-sm" to="#" id="in-progress-item" data-hs-tab="#in-progress" aria-controls="in-progress">
                                                    In Progress
                                                </Link>
                                                <Link className="w-full flex sm:w-auto hs-tab-active:font-semibold  hs-tab-active:text-primary hs-tab-active:bg-primary/10 rounded-md  py-2 px-3 text-sm" to="#" id="completed-item" data-hs-tab="#completed" aria-controls="completed">
                                                    Completed
                                                </Link>
                                            </nav>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                        <SpkDropdown Icon={true} Customclass=""  Linktag={false}  arialexpand={false}  IconClass="ti ti-dots-vertical"
                                            CustomToggleclass="ti-btn-sm ti-btn-light !mb-0">
                                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Select All</Link></li>
                                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Share All</Link></li>
                                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Delete All</Link></li>
                                        </SpkDropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="tab-content task-tabs-container">
                                <div className="tab-pane show active !p-0" id="all-tasks" aria-labelledby="alltasks-item"
                                    role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6" id="tasks-container">
                                        {Todolistdata.map((task, index) => (
                                            <div className="xl:col-span-4 col-span-12 task-card" key={Math.random()}>
                                                <SpkTodolist  key={index} {...task} Customcardclass="task-pending-card" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane !p-0 hidden" id="pending" aria-labelledby="pending-item"
                                    role="tabpanel">
                                    <div className="grid grid-cols-12 gap-6">
                                        {Pendingcards.map((task, index) => (
                                            <div className="xl:col-span-4 col-span-12" key={Math.random()}>
                                                <SpkTodolist key={index} {...task} Customcardclass="task-pending-card" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane !p-0 hidden" id="in-progress"
                                    role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        {Inprogresscards.map((task, index)=>(
                                            <div className="xl:col-span-4 col-span-12" key={Math.random()}>
                                                <SpkTodolist key={index} {...task} Customcardclass="task-inprogress-card" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane !p-0 hidden" id="completed" aria-labelledby="completed-item"
                                    role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        {Completedcards.map((task, index)=>(
                                            <div className="xl:col-span-4 col-span-12" key={Math.random()}>
                                                <SpkTodolist key={index} {...task} Customcardclass="task-completed-card" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="ti-pagination ltr:float-right rtl:float-left mb-4">
                            <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#">Previous</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">Next</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default Todolist