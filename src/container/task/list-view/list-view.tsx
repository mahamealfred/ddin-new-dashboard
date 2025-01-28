import { FC, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Pageheader from '../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../@spk/spk-packages/apexcharts-component';
import { Transactionoptions, Transactionseries } from '../../../components/ui/data/apps/crypto/transactiondata';
import SelectComponent from '../../../@spk/spk-packages/select-component';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import { Listdata } from '../../../components/ui/data/task/listviewdata';
import Spktables from '../../../@spk/tables/spk-tables';
import SpkFlatpickr from '../../../@spk/spk-packages/datepicker-component';
import SpkButton from '../../../@spk/uielements/spk-button';
import SpkOverlay from '../../../@spk/uielements/spk-overlay';
import CountUp from 'react-countup';


interface ListviewProps { }

const Listview: FC<ListviewProps> = () => {

    const [_startDate, setStartDate] = useState(new Date());
    
    const [_startDate1, setStartDate1] = useState<any>(new Date());
   
    const Selectdata = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' },
    ];
    const Option1 = [
        { value: 'New', label: 'New' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Pending', label: 'Pending' }
    ];
    const Option2 = [
        { value: 'High', label: 'High' },
        { value: 'Low', label: 'Low' },
        { value: 'Medium', label: 'Medium' },
    ];
    return (
        <Fragment>
            <Pageheader currentpage="List View" activepage="Task" mainpage="List View" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Total Tasks
                            </div>
                            <div className="flex">
                                <SpkButton buttontype="button" variant="primary-full" customClass="hs-dropdown-toggle ti-btn !py-1 !px-2 !text-[0.75rem]" Overlay="#create-task">
                                    <i className="ri-add-line font-semibold align-middle"></i> Create Task
                                </SpkButton>
                                <div id="create-task" className="hs-overlay hidden ti-modal">
                                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                                        <div className="ti-modal-content flex-grow">
                                            <div className="ti-modal-header">
                                                <h6 className="modal-title" id="staticBackdropLabel2">Add Task
                                                </h6>
                                                <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn" Overlay="#create-task">
                                                    <span className="sr-only">Close</span>
                                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                                    </svg>
                                                </SpkButton>
                                            </div>
                                            <div className="ti-modal-body">
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="task-name" className="form-label">Task Name</label>
                                                        <input type="text" className="form-control" id="task-name" placeholder="Task Name" />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="task-id" className="form-label">Task ID</label>
                                                        <input type="text" className="form-control" id="task-id" placeholder="Task ID" />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label">Assigned Date</label>
                                                        <div className="form-group">
                                                            <div className="input-group !flex-nowrap">
                                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                                <SpkFlatpickr inputClass="ti-form-input" placeholder="Choose Date" onfunChange={(date:any) => setStartDate(date as Date)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label">Due Date</label>
                                                        <div className="form-group">
                                                            <div className="input-group !flex-nowrap">
                                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                                <SpkFlatpickr inputClass="ti-form-input" placeholder="Choose date"  onfunChange={(date:any) => setStartDate1(date)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label">Status</label>
                                                        <SelectComponent option={Option1} defaultvalue={[Option1[0]]} />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label">Priority</label>
                                                        <SelectComponent option={Option2} defaultvalue={[Option2[0]]} />
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="form-label">Assigned To</label>
                                                        <SelectComponent multi={true} mainClass='!p-0 form-control' option={Selectdata} defaultvalue={[Selectdata[0]]} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ti-modal-footer">
                                                <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-btn ti-btn-light" Overlay="#create-task">
                                                    Cancel
                                                </SpkButton>
                                                <Link className="ti-btn ti-btn-primary-full" to="#">
                                                    Add Task
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <SpkDropdown Icon={true} Customclass="ms-2" Linktag={false} arialexpand={false} IconClass="ti ti-dots-vertical"
                                    CustomToggleclass="ti-btn-secondary ti-btn-sm">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">New Tasks</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Pending Tasks</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Completed Tasks</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Inprogress Tasks</Link></li>
                                </SpkDropdown>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                   <Spktables tableClass='table whitespace-nowrap table-bordered min-w-full' showCheckbox={true} header={[{headerClassname:'text-start', title:'Task'},{headerClassname:'text-start', title:'Task ID'},{headerClassname:'text-start', title:'Assigned Date'},{headerClassname:'text-start', title:'Status'},{headerClassname:'text-start', title:'Due Date'},{headerClassname:'text-start', title:'Priority'},{headerClassname:'text-start', title:'Assigned To'},{headerClassname:'text-start', title:'Action'}]} >
                                        {Listdata.map((task) => (
                                            <tr className="border border-defaultborder task-list" key={task.id}>
                                                <td className="task-checkbox">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        aria-label="..."
                                                        defaultChecked={task.status === 'Completed'}
                                                    />
                                                </td>
                                                <td>
                                                    <span className="font-semibold">{task.name}</span>
                                                </td>
                                                <td>
                                                    <span className="font-semibold">{task.spk}</span>
                                                </td>
                                                <td>{task.startDate}</td>
                                                <td>
                                                    <span className={`font-semibold text-${task.color}`}>
                                                        {task.status}
                                                    </span>
                                                </td>
                                                <td>{task.endDate}</td>
                                                <td>
                                                    <SpkBadge variant={`${task.color1}/10`} customClass={`text-${task.color1}`}>
                                                        {task.priority}
                                                    </SpkBadge>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        {task.assignees}
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkOverlay>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="hs-tooltip-toggle ti-btn me-2">
                                                            <i className="ri-edit-line"></i>
                                                            <span
                                                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm"
                                                                role="tooltip"
                                                            >
                                                                Edit
                                                            </span>
                                                        </SpkButton>
                                                    </SpkOverlay>
                                                    <SpkOverlay>
                                                        <SpkButton variant="danger" Size="sm"
                                                            buttontype="button"
                                                            customClass="hs-tooltip-toggle ti-btn ms-1 task-delete-btn"
                                                        >
                                                            <i className="ri-delete-bin-5-line"></i>
                                                            <span
                                                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm"
                                                                role="tooltip"
                                                            >
                                                                Delete
                                                            </span>
                                                        </SpkButton>
                                                    </SpkOverlay>
                                                </td>
                                            </tr>
                                        ))}
                                   </Spktables>
                            </div>
                        </div>
                        <div className="box-footer">
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination justify-end mb-0">
                                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#">Prev</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-body !p-0">
                            <div className="!p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
                                <div className="svg-icon-background bg-primary/10 me-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="svg-primary"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="!mb-1 !text-[0.75rem] !font-medium">New Tasks
                                        <SpkBadge variant="primary"  customClass="text-white font-semibold ltr:float-right rtl:float-left">
                                            12,345
                                        </SpkBadge>
                                    </h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="text-[1.125rem] font-semibold mb-1">
                                               <CountUp end={43} start={0} duration={4.94}/>
                                                <span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                            <p className="text-muted text-[.6875rem] mb-0 leading-none">
                                                <span className="text-success me-1 font-semibold inline-block">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
                                <div className="svg-icon-background bg-success/10 !fill-success me-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg-success"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="mb-1 !text-[0.75rem] !font-medium">Completed Tasks
                                        <SpkBadge variant="success"  customClass="text-white font-semibold ltr:float-right rtl:float-left">
                                            4,176
                                        </SpkBadge>
                                    </h6>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-1">
                                            <CountUp end={320} start={0} duration={4.94}/>
                                            <span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                        <p className="text-muted text-[.6875rem] mb-0 leading-none">
                                            <span className="text-danger me-1 font-semibold inline-block">
                                                <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
                                <div className="svg-icon-background bg-warning/10 me-4 !fill-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-warning"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="mb-1 !text-[0.75rem] !font-medium">Pending Tasks
                                        <SpkBadge variant="warning"  customClass="text-white font-semibold ltr:float-right rtl:float-left">
                                            7,064
                                        </SpkBadge>
                                    </h6>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-1">
                                            <CountUp end={82} start={0} duration={4.94}/>
                                            <span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                        <p className="text-muted text-[.6875rem] mb-0 leading-none">
                                            <span className="text-success me-1 font-semibold inline-block">
                                                <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
                                <div className="svg-icon-background bg-secondary/10 text-secondary !fill-secondary me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-secondary"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="mb-1 !text-[0.75rem] !font-medium">Inprogress Tasks
                                        <SpkBadge variant="secondary"  customClass="text-white font-semibold ltr:float-right rtl:float-left">
                                            1,105
                                        </SpkBadge>
                                    </h6>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-1">
                                             <CountUp end={33} start={0} duration={4.94}/>
                                            <span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                        <p className="text-muted text-[.6875rem] mb-0 leading-none">
                                            <span className="text-success me-1 font-semibold inline-block">
                                                <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pb-2">
                                <p className="text-[.9375rem] font-semibold">Tasks Statistics <span className="text-muted font-normal">(Last 6 months) :</span></p>
                                <div id="task-list-stats">
                                    <ApexchartsComponent chartOptions={Transactionoptions} chartSeries={Transactionseries} type="bar" width={"100%"} height={210} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Listview