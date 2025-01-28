import  { FC, Fragment, useState } from 'react';
import Pageheader from '../../../../components/common/page-header/pageheader';
import { jobpost1 , jobpost10, jobpost11, jobpost2, jobpost3, jobpost4, jobpost5, jobpost6, jobpost7, jobpost8, jobpost9} from '../../../../components/ui/data/apps/jobs/jobpostdata';
import { Link } from 'react-router-dom';
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import SpkFlatpickr from '../../../../@spk/spk-packages/datepicker-component';

interface JobpostProps {}

const Jobpost: FC<JobpostProps> = () => {
    const [_startDate, setStartDate] = useState(new Date());

    //Datepicker function
    const handleDateChange = (date:any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    return (
        <Fragment>
            <Pageheader currentpage="Job Post" activepage="Jobs" mainpage="Job Post" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-9 xl:col-span-8 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Post New Job
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 sm:gap-6 mb-4">
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="job-title" className="form-label">Job Title</label>
                                    <input type="text" className="form-control" id="job-title" placeholder="Job Title" defaultValue="Web Developer" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Job Category</label>
                                    <SelectComponent option={jobpost1}  defaultvalue={[jobpost1[0]]}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Working Experience</label>
                                    <SelectComponent option={jobpost2}  defaultvalue={[jobpost2[0]]}/>
                                    
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Job Type</label>
                                    <SelectComponent option={jobpost2}  defaultvalue={[jobpost2[0]]}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label  className="form-label">Priority</label>
                                    <SelectComponent option={jobpost3}  defaultvalue={[jobpost3[0]]}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Vacancies</label>
                                    <SelectComponent option={jobpost4}  defaultvalue={[jobpost4[0]]}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label  className="form-label">Salary</label>
                                    <SelectComponent option={jobpost5}  defaultvalue={[jobpost5[0]]}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Skills :</label>
                                    <SelectComponent multi option={jobpost6}  defaultvalue={[jobpost6[0], jobpost6[1], jobpost6[2]]}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Job Deadline</label>
                                    <SpkFlatpickr inputClass="ti-form-input" onfunChange={handleDateChange} placeholder="Job Deadline" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Gender Requirement</label>
                                    <SelectComponent option={jobpost7}  defaultvalue={[jobpost7[0]]}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Languages :</label>
                                    <SelectComponent option={jobpost8}  defaultvalue={[jobpost8[0], jobpost8[3]]} multi={true}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Qualification :</label>
                                    <SelectComponent option={jobpost9}  defaultvalue={[jobpost9[0], jobpost9[2],jobpost9[3]]} multi={true}/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="bio" className="form-label">Job Description :</label>
                                    <textarea className="form-control" id="job-description" rows={4} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!" />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer text-end">
                            <Link to="#" className="ti-btn ti-btn-primary-full btn-wave waves-effect waves-light">
                                <i className="bi bi-plus-circle"></i> Post Job
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Assign To Employer</div>
                        </div>
                        <div className="box-body">
                            <div className="xl:col-span-12 col-span-12">
                                <label className="form-label">Employer Name</label>
                                <SelectComponent option={jobpost10}  defaultvalue={[jobpost10[0]]}/>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Company Details</div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="Company Name" className="form-label">Company Name</label>
                                    <input type="text" className="form-control" placeholder="Company Name" defaultValue="Obligation Pvt.Ltd" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="Company Website" className="form-label">Company Website</label>
                                    <input type="text" className="form-control" placeholder="Company Website" defaultValue="http//www.obligationpvtltd.com" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label  className="form-label">Country</label>
                                    <SelectComponent option={jobpost11}  defaultvalue={[jobpost11[0]]}/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="Company Address" className="form-label">Address</label>
                                    <input type="text" className="form-control" placeholder="Company Address" defaultValue="USA" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Jobpost