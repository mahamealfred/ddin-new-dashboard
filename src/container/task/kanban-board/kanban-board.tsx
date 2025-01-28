import { FC, Fragment, useEffect, useRef, useState } from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
//filepond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { Link } from 'react-router-dom';
import Pageheader from '../../../components/common/page-header/pageheader';
import SelectComponent from '../../../@spk/spk-packages/select-component';
import SpkKanbancard from '../../../@spk/task/spk-kanbancard';
import { Kanbandata, kanbandata1, kanbandata2, kanbandata3, kanbandataCompleted } from '../../../components/ui/data/task/kanabandata';
import SimpleBar from 'simplebar-react';
import SpkFlatpickr from '../../../@spk/spk-packages/datepicker-component';
import SpkButton from '../../../@spk/uielements/spk-button';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface KanbanboardProps { }

const Kanbanboard: FC<KanbanboardProps> = () => {


    const leftContainerRef = useRef<HTMLDivElement | null>(null);
    const rightContainerRef = useRef<HTMLDivElement | null>(null);
    const topContainerRef = useRef<HTMLDivElement | null>(null);
    const bottomContainerRef = useRef<HTMLDivElement | null>(null);
    const lastContainerRef = useRef<HTMLDivElement | null>(null);
    const windowElement  : any  = window;
    useEffect(() => {
      if (leftContainerRef.current && rightContainerRef.current) {
        windowElement.dragula([leftContainerRef.current, rightContainerRef.current, topContainerRef.current, bottomContainerRef.current, lastContainerRef.current]);
  
        if(document.querySelector('.firstdrag')?.classList.contains('task-Null'))
        {
            
            document.querySelector('.view-more-button')?.classList.add('d-none'); 
        }
      }
  
      OnDivChange();
    }, []);
  
    const elementsToModify = [
        leftContainerRef,
        rightContainerRef,
        topContainerRef,
        bottomContainerRef,
        lastContainerRef
      ];
  
      const OnDivChange = () => {
        elementsToModify.forEach((elementId) => {
          const element: any = elementId.current;
      
          if (element && element.children) { // Check that element and element.children exist
            if (element.children.length <= 0) {
              element.classList.add('task-Null');
              
              const viewMoreButton = element.parentNode?.parentElement?.parentElement?.querySelector('.view-more-button');
              if (viewMoreButton) {
                viewMoreButton.classList.add('d-none');
              }
            } else {
              element.classList.remove('task-Null');
              
              const viewMoreButton = element.parentNode?.parentElement?.parentElement?.querySelector('.view-more-button');
              if (viewMoreButton) {
                viewMoreButton.classList.remove('d-none');
              }
            }
          }
        });
      };
    const Option1 = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'Type', label: 'Type' },
        { value: 'A - Z', label: 'A - Z' },
    ];
    const Option2 = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' }
    ];
    const Option3 = [
        { value: 'Select Tag', label: 'Select Tag' },
        { value: 'UI/UX', label: 'UI/UX' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Designing', label: 'Designing' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Authentication', label: 'Authentication' },
        { value: 'Product', label: 'Product' },
        { value: 'Development', label: 'Development' }
    ];

    //Specific time range

    // const [startTime, setStartTime] = useState(
    //     setHours(setMinutes(new Date(), 30), 17)
    // );

    //filepond
    const [files, setFiles] = useState<any>([]);
    const [_startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    return (
        <Fragment>
            <Pageheader currentpage="Kanban Board" activepage="Task" mainpage="Kanban Board" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body p-4">
                            <div className="md:flex items-center justify-between flex-wrap gap-4">
                                <div className="grid grid-cols-12 gap-2 md:w-[30%]">
                                    <div className="xl:col-span-5 col-span-12">
                                        <Link to="#" className="hs-dropdown-toggle !py-1 ti-btn bg-primary text-white !font-medium " data-hs-overlay="#add-board"><i className="ri-add-line !text-[1rem]"></i>New Board
                                        </Link>
                                    </div>
                                    <div className="xl:col-span-5 col-span-12">
                                        <SelectComponent option={Option1} mainClass="w-full !rounded-md" />
                                    </div>
                                </div>
                                <div className="avatar-list-stacked my-3 md:my-0">
                                    <span className="avatar avatar-rounded">
                                        <img src={face2} alt="img" />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face8} alt="img" />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face2} alt="img" />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face10} alt="img" />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face4} alt="img" />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face13} alt="img" />
                                    </span>
                                    <Link className="avatar bg-primary avatar-rounded text-white" to="#">
                                        +8
                                    </Link>
                                </div>
                                <div className="flex" role="search">
                                    <input className="form-control w-full !rounded-sm me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <SpkButton variant="light" customClass="ti-btn !mb-0" buttontype="submit">Search</SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ynex-kanban-board text-defaulttextcolor dark:text-defaulttextcolor/70 text-defaultsize">
                <div className="kanban-tasks-type new">
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <span className="block font-semibold text-[.9375rem]">NEW - 04</span>
                            <div>
                                <Link to="#" className="hs-dropdown-toggle  ti-btn !py-1 !px-2 !font-medium !text-[0.75rem] bg-white dark:bg-bodybg text-default border-0" data-hs-overlay="#add-task"><i className="ri-add-line"></i>Add Task
                                </Link>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="kanban-tasks " id="new-tasks">
                            <div ref={leftContainerRef} onMouseEnter={OnDivChange} className='firstdrag'
                                data-view-btn="new-tasks">
                                    {Kanbandata.map((idx) => (
                                        <SpkKanbancard key={Math.random()}  customCardclass="new" card={idx} />
                                    ))}
                            </div>
                    </SimpleBar>
                    <div>
                        <div className="grid mt-4">
                            <SpkButton buttontype="button" variant="primary" customClass="ti-btn view-more-button">View More</SpkButton>
                        </div>
                    </div>
                </div>
                <div className="kanban-tasks-type todo">
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <span className="block font-semibold text-[.9375rem]">TODO - 36</span>
                            <div>
                                <Link to="#" className="hs-dropdown-toggle  ti-btn !py-1 !px-2 !font-medium  !text-[0.75rem] bg-white dark:bg-bodybg text-default border-0" data-hs-overlay="#add-task"><i className="ri-add-line"></i>Add Task
                                </Link>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="kanban-tasks" id="todo-tasks">
                            <div ref={rightContainerRef}  id="todo-tasks-draggable" data-view-btn="todo-tasks">
                                {kanbandata1.map((idx) => (
                                    <SpkKanbancard key={Math.random()} card ={idx} customCardclass="todo" />
                                ))}
                            </div>
                    </SimpleBar>
                    <div className="grid mt-4">
                        <SpkButton buttontype="button" variant="primary" customClass="ti-btn view-more-button">View More</SpkButton>
                    </div>
                </div>
                <div className="kanban-tasks-type in-progress">
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <span className="block font-semibold text-[.9375rem]">ON GOING - 25</span>
                            <div>
                                <Link to="#" className="hs-dropdown-toggle  ti-btn !py-1 !px-2 !font-medium !text-[0.75rem] bg-white dark:bg-bodybg text-default border-0" data-hs-overlay="#add-task"><i className="ri-add-line"></i>Add Task
                                </Link>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="kanban-tasks" id="inprogress-tasks">
                        <div ref={topContainerRef} onMouseEnter={OnDivChange} data-view-btn="inprogress-tasks">
                             {kanbandata2.map((idx) => (
                                <SpkKanbancard key={Math.random()} card ={idx} customCardclass="todo" />
                                ))}
                        </div>
                    </SimpleBar>
                    <div className="grid mt-4">
                        <SpkButton variant="primary" buttontype="button" customClass="ti-btn view-more-button">View More</SpkButton>
                    </div>
                </div>
                <div className="kanban-tasks-type inreview">
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <span className="block font-semibold text-[.9375rem]">IN REVIEW - 02</span>
                            <div>
                                <Link to="#" className="hs-dropdown-toggle  ti-btn !py-1 !px-2 !font-medium !text-[0.75rem] bg-white dark:bg-bodybg text-default border-0" data-hs-overlay="#add-task"><i className="ri-add-line"></i>Add Task
                                </Link>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="kanban-tasks" id="inreview-tasks">
                        <div ref={bottomContainerRef} onMouseEnter={OnDivChange} data-view-btn="inreview-tasks">
                                <SpkKanbancard card={kanbandata3} customCardclass="interview"/>
                        </div>
                    </SimpleBar>
                    <div className="grid mt-4">
                        <SpkButton variant="primary" buttontype="button" customClass="ti-btn view-more-button">View More</SpkButton>
                    </div>
                </div>
                <div className="kanban-tasks-type completed">
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <span className="block font-semibold text-[.9375rem]">COMPLETED - 36</span>
                            <div>
                                <Link to="#" className="hs-dropdown-toggle  ti-btn !py-1 !px-2 !font-medium !text-[0.75rem] bg-white dark:bg-bodybg text-default border-0" data-hs-overlay="#add-task"><i className="ri-add-line"></i>Add Task
                                </Link>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="kanban-tasks" id="completed-tasks">
                        <div  ref={lastContainerRef} onMouseEnter={OnDivChange} 
                        // id="completed-tasks-draggable" 
                        data-view-btn="completed-tasks">
                             {kanbandataCompleted.map((idx) => (
                                <SpkKanbancard key={Math.random()} card ={idx} customCardclass="completed" successtag={true} />
                                ))}
                        </div>
                    </SimpleBar>
                    <div className="grid mt-4">
                        <SpkButton buttontype="button" variant="primary" customClass="ti-btn view-more-button">View More</SpkButton>
                    </div>
                </div>
            </div>
            <div id="add-board" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                    <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] !text-default dark:text-defaulttextcolor/70 font-semibold">Add Board</h6>
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle !text-[1rem] !font-semibold" Overlay="#add-board">
                                <span className="sr-only">Close</span>
                                <i className="ri-close-line"></i>
                            </SpkButton>
                        </div>
                        <div className="ti-modal-body px-6">
                            <div className="grid grid-cols-12 gy-2">
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="task-name" className="form-label">Task Name</label>
                                    <input type="text" className="form-control w-full !rounded-md" id="task-name" placeholder="Task Name" />
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton buttontype="button"
                                customClass="hs-dropdown-toggle ti-btn  ti-btn-light align-middle"
                                Overlay="#add-board">
                                Cancel
                            </SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white !font-medium">Add Task</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
            <div id="add-task" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                    <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold text-default dark:text-defaulttextcolor/70" id="mail-ComposeLabel">Add Task</h6>
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle !text-[1rem] !font-semibold" Overlay="#add-task">
                                <span className="sr-only">Close</span>
                                <i className="ri-close-line"></i>
                            </SpkButton>
                        </div>
                        <div className="ti-modal-body px-4 !overflow-visible">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">Task Name</label>
                                    <input type="text" className="form-control w-full !rounded-md" id="task-name2" placeholder="Task Name" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-id" className="form-label">Task ID</label>
                                    <input type="text" className="form-control w-full !rounded-md" id="task-id" placeholder="Task ID" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="text-area" className="form-label">Task Description</label>
                                    <textarea className="form-control w-full !rounded-md" id="text-area" rows={2} placeholder="Write Description"></textarea>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="text-area" className="form-label">Task Images</label>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Assigned To</label>
                                    <SelectComponent option={Option2} mainClass="" multi={true} />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Target Date</label>
                                    <div className="form-group">
                                        <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-muted !rounded-e-none"> <i className="ri-calendar-line"></i> </div>
                                            <SpkFlatpickr
                                            inputClass="ti-form-input"
                                            placeholder='Choose date and time'
                                            onfunChange={handleDateChange}
                                            dataEnableTime={true}
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Tags</label>
                                    <SelectComponent option={Option3} mainClass="w-full !rounded-md" multi={true} />
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton buttontype="button" variant="light"
                                customClass="hs-dropdown-toggle ti-btn  align-middle"
                                  Overlay="#add-task">
                                Cancel
                            </SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white !font-medium">Create</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Kanbanboard