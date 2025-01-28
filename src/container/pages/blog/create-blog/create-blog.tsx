import  { FC, Fragment, useState } from 'react';
import { Recentblogdata, option, option1, option2 } from '../../../../components/ui/data/pages/blogs/createblogdata'
import { FilePond } from 'react-filepond';
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import SunEditorComponent from '../../../../@spk/spk-packages/editor-component';
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import SpkButton from '../../../../@spk/uielements/spk-button';
import SpkFlatpickr from '../../../../@spk/spk-packages/datepicker-component';

interface CreateblogProps {}

const Createblog: FC<CreateblogProps> = () => {

    //Filepond 
    const [files, setFiles] = useState<any>([]);
    const [_startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [startDate1, setStartDate1] = useState(new Date());
    const handleDateChange1 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate1(date);
        }
    };
    return (
        <Fragment>
            <Pageheader currentpage="Create Blog" activepage="Blog" mainpage="Create Blog" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">New Blog</div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Blog Title</label>
                                    <input type="text" className="form-control block w-full text-[0.875rem] !rounded-md" id="blog-title" placeholder="Blog Title" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label  className="form-label">Blog Category</label>
                                    <SelectComponent option={option2} mainClass='block w-full text-[0.875rem] !rounded-md' placeholder='Select Category' defaultvalue={[option2[4]]}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label  className="form-label">Blog Author</label>
                                    <input type="text" className="form-control block w-full text-[0.875rem] !rounded-md" id="blog-author" placeholder="Enter Name" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control block w-full text-[0.875rem] !rounded-md" id="blog-author-email" placeholder="Enter Email" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Publish Date</label>
                                    <SpkFlatpickr placeholder='Choose date'  options={{ dateFormat: "Y-m-d",}}
                                        onfunChange={handleDateChange} inputClass='ti-form-input' />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Publish Time</label>
                                    <SpkFlatpickr inputClass=" form-control ti-form-input focus:z-10" value={startDate1} onfunChange={handleDateChange1} options={{ enableTime: 'true', noCalendar: 'true', dateFormat: 'H:i' }} />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Published Status</label>
                                    <SelectComponent option={option1} mainClass='block w-full text-[0.875rem] !rounded-md' placeholder='Select Category'/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Blog Tags</label>
                                    <SelectComponent multi option={option} mainClass='block w-full text-[0.875rem] !rounded-md' placeholder='Select Category' defaultvalue={[option[0],option[1]]}/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Blog Content</label>
                                    <div id="blog-content">
                                         <SunEditorComponent height={'200px'} />
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 blog-images-container">
                                    <label className="form-label">Blog Images</label>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files"
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Blog Type</label>
                                    <div className="flex items-center">
                                        <div className="form-check !ps-0 me-4">
                                            <input className="form-check-input" type="radio" name="blog-type" id="blog-free1" defaultChecked />
                                            <label className="form-check-label">
                                                Free
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="blog-type" id="blog-paid1" />
                                            <label className="form-check-label">
                                                Paid
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="text-end">
                                <SpkButton buttontype="button" variant="light" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium me-2">Save As Draft</SpkButton>
                                <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem] !font-medium">Post Blog</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Recent Blogs
                            </div>
                        </div>
                        <div className="box-body">
                            <ul className="list-group">
                                {Recentblogdata.map((idx) => (
                                    <li className="list-group-item" key={Math.random()}>
                                        <div className="flex gap-2 flex-wrap items-center">
                                            <span className="avatar avatar-xl me-1">
                                                <img src={idx.src} className="img-fluid !rounded-md" alt="..." />
                                            </span>
                                            <div className="flex-grow">
                                                <Link to="#"  className="text-[0.875rem] font-semibold mb-0">{idx.title}</Link>
                                                <p className="mb-1 popular-blog-content text-truncate">
                                                    {idx.text}
                                                </p>
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">{idx.time}</span>
                                            </div>
                                            <div>
                                                <SpkButton Label="button" buttontype="button" variant="light" Size="sm" customClass="ti-btn rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                <li className="list-group-item text-center">
                                    <SpkButton buttontype="button" variant="primary" customClass="ti-btn !font-medium">Load more</SpkButton>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Createblog