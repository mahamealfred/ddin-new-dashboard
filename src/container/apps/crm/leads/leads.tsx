import  { FC, Fragment, useState } from 'react';
import {  Data, Data1, Data2, Laedsdata } from '../../../../components/ui/data/apps/crm/leadsdata';
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import Spktables from '../../../../@spk/tables/spk-tables';
import SpkButton from '../../../../@spk/uielements/spk-button';
import face9 from "../../../../assets/images/faces/9.jpg"

interface LeadsProps {}

const Leads: FC<LeadsProps> = () => {

    const [images, setImages] = useState<any>([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileChange = (e:any) => {
        const file = e.target.files[0];
        if (file) {
            const reader:any = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    //Delete function
    const [manageCompanydata, setManageCompanydata] = useState([...Laedsdata]);
    const handleDelete = (idToRemove: string) => {
        const updatedInvoiceData = manageCompanydata.filter((item) => item.id !== idToRemove);
        setManageCompanydata(updatedInvoiceData);
    };

    return (
        <Fragment>
            <Pageheader currentpage="Leads" activepage="CRM" mainpage="Leads" />

            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header flex items-center justify-between flex-wrap gap-4">
                            <div className="box-title">
                                Leads<SpkBadge variant="light" customClass="text-default rounded-full ms-1 text-[0.75rem] align-middle">30</SpkBadge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#todo-compose"><i className="ri-add-line font-semibold align-middle"></i>Create Lead
                                </Link>
                                <SpkButton buttontype="button" variant="success" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !m-0">Export As CSV</SpkButton>
                                <SpkDropdown Icon={true} IconPosition="before" Toggletext="Sort By" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block" arialexpand={false}
                                    Linktag={true} Linkclass="ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem] !m-0 btn-wave waves-effect waves-light">
                                    <li><Link className="ti-dropdown-item" to="#">Newest</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Date Added</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">A - Z</Link></li>
                                </SpkDropdown>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive xxl:overflow-auto">
                                    <Spktables tableClass='table whitespace-nowrap min-w-full' showCheckbox={true} header={[{headerClassname:"text-start", title:'Contact Name'},{headerClassname:"text-start", title:'Email'},{headerClassname:"text-start", title:'Phone'},{headerClassname:"text-start", title:'Lead Status'},{headerClassname:"text-start", title:'Company'},{headerClassname:"text-start", title:'Lead Source'},{headerClassname:"text-start", title:'Tags '},{headerClassname:"text-start", title:'Actions'}]} >
                                        {manageCompanydata.map((idx) => (
                                            <tr className="border border-defaultborder crm-contact min-w-full" key={Math.random()}>
                                                <td>
                                                    <input className="form-check-input" type="checkbox" defaultValue="" aria-label="..." />
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <div className="leading-none">
                                                            <span className="avatar avatar-rounded avatar-sm">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block font-semibold">{idx.name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="block mb-1"><i className="ri-mail-line me-2 align-middle text-[.875rem] text-[#8c9097] dark:text-white/50 inline-flex"></i>{idx.mail}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="block"><i className="ri-phone-line me-2 align-middle text-[.875rem] text-[#8c9097] dark:text-white/50 inline-flex"></i>{idx.cell}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="light" customClass="text-default">{idx.badge}</SpkBadge>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <div className="leading-none">
                                                            <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>{idx.text1}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.text2}
                                                </td>
                                                <td>
                                                    <div className="flex items-center flex-wrap gap-1">
                                                        <SpkBadge variant={idx.color1}>{idx.text3}</SpkBadge>
                                                        <SpkBadge variant={idx.color2}>{idx.text4}</SpkBadge>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Link aria-label="anchor" to="#" className="ti-btn ti-btn-sm ti-btn-warning me-2"><i className="ri-eye-line"></i></Link>
                                                        <SpkButton Label="button" buttontype="button" variant="info" Size="sm" customClass="ti-btn me-2"><i className="ri-pencil-line"></i></SpkButton>
                                                        <SpkButton Label="button" buttontype="button" variant="danger" Size="sm" customClass="ti-btn contact-delete" onclickfunc={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></SpkButton>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </Spktables>
                            </div>
                        </div>
                        <div className="box-footer !border-t">
                            <div className="flex items-center">
                                <div>
                                    Showing 10 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="ti-pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="#">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link active" to="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link text-primary" to="#">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="todo-compose" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                    <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold text-defaulttextcolor" id="mail-ComposeLabel">Create Lead</h6>
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" Overlay="#todo-compose">
                                <span className="sr-only">Close</span>
                                <i className="ri-close-line"></i>
                            </SpkButton>
                        </div>
                        <div className="ti-modal-body px-4">
                            <div className="modal-body px-4">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="mb-0 text-center">
                                            <span className="avatar avatar-xxl avatar-rounded">
                                                <img
                                                    src={selectedImage || face9}
                                                    alt=""
                                                    id="profile-img"
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                                <SpkBadge variant="primary" customClass="rounded-pill avatar-badge">
                                                    <label htmlFor="profile-change" className="cursor-pointer">
                                                        <input
                                                            type="file"
                                                            name="photo"
                                                            className="absolute w-full h-full opacity-0"
                                                            id="profile-change"
                                                            onChange={(e:any) => {
                                                                handleFileChange(e);
                                                                setImages([...images, e.target.files[0]]);
                                                            }}
                                                        />
                                                        <i className="fe fe-camera text-[.625rem] !text-white"></i>
                                                    </label>
                                                </SpkBadge>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="contact-name" className="form-label">Contact Name</label>
                                        <input type="text" className="form-control" id="contact-name" placeholder="Contact Name" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="contact-mail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="contact-mail" placeholder="Enter Email" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="contact-phone" className="form-label">Phone No</label>
                                        <input type="number" className="form-control" id="contact-phone" placeholder="Enter Phone Number" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="company-name" className="form-label">Company Name</label>
                                        <input type="text" className="form-control" id="company-name" placeholder="Company Name" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Lead Status</label>
                                        <SelectComponent option={Data2} mainClass="basic-multi-select" placeholder='Select Status'/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Lead Source</label>
                                        <SelectComponent option={Data1} mainClass="basic-multi-select" defaultvalue={[Data1[0]]}/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Tags</label>
                                        <SelectComponent option={Data} mainClass="basic-multi-select" placeholder='Select Tag'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton buttontype="button" variant="light" customClass="hs-dropdown-toggle ti-btn align-middle" Overlay="#todo-compose"> Cancel </SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white !font-medium">Create Contact</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Leads