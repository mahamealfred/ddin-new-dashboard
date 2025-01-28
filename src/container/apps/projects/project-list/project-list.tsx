import  { FC, Fragment } from 'react';
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import face1 from "../../../../assets/images/faces/1.jpg";
import face2 from "../../../../assets/images/faces/2.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import { Projectsdata } from '../../../../components/ui/data/apps/projects/projectslistdata';
import SpkProjectListCard from '../../../../@spk/apps/spk-projectlistcard';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface ProjectlistProps {}

const Projectlist: FC<ProjectlistProps> = () =>{ 

    const Optionsdata = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'A - Z', label: 'A - Z' },
        { value: 'Type', label: 'Type' },
    ];

    return (
        <Fragment>
            <Pageheader currentpage="Project List" activepage="Projects" mainpage="Project List" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body p-4">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="flex flex-wrap gap-1 newproject">
                                    <Link to={`${import.meta.env.BASE_URL}apps/projects/create-project/`} className="ti-btn ti-btn-primary-full me-2 !mb-0"><i className="ri-add-line me-1 font-semibold align-middle"></i>New Project</Link>
                                    <SelectComponent option={Optionsdata} mainClass='!w-auto' placeholder='Sort By'/>
                                </div>
                                <div className="avatar-list-stacked">
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face1} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face2} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face8} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face12} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face10} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face4} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face5} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face13} alt="img" />
                                    </span>
                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" to="#">
                                        +8
                                    </Link>
                                </div>
                                <div className="flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search Project" aria-label="Search" />
                                    <SpkButton variant="light" customClass="ti-btn !mb-0" buttontype="submit">Search</SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                {Projectsdata.map((idx) => (
                <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12" key={Math.random()}>
                   <SpkProjectListCard card={idx} />
                </div>
                ))}
            </div>
            <nav aria-label="Page navigation">
                <ul className="ti-pagination ltr:float-right rtl:float-left mb-4">
                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#" >Previous</Link></li>
                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >1</Link></li>
                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >2</Link></li>
                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >Next</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Projectlist