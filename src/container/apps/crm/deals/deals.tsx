
import  { FC,Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Pageheader from '../../../../components/common/page-header/pageheader';
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import { DealStages, Dealdata, Dealdata1, Dealdata2, Dealdata3, Dealdata4, Dealdata5 } from '../../../../components/ui/data/apps/crm/dealsdata';
import SpkDealsCard from '../../../../@spk/apps/spk-dealscard';
import SpkDeals from '../../../../@spk/apps/spk-deals';
import SpkButton from '../../../../@spk/uielements/spk-button';
import face9 from "../../../../assets/images/faces/9.jpg"
import SpkFlatpickr from '../../../../@spk/spk-packages/datepicker-component';
// import dragula from 'dragula';

interface DealsProps {}

const Deals: FC<DealsProps> = () =>{ 

    const [_ClassName, setClassName] = useState<any>();
    const [_startDate, setStartDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

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


  useEffect(() => {

    let contactItem = document.querySelectorAll(".main-contact-item");
    contactItem.forEach((ele => {
      ele.addEventListener("click", () => {
        setClassName("main-content-body-show");
      });
    }));

  },);

  const firstContainerRef = useRef<HTMLDivElement | null>(null);
  const secondContainerRef = useRef<HTMLDivElement | null>(null);
  const thirdContainerRef = useRef<HTMLDivElement | null>(null);
  const fourthContainerRef = useRef<HTMLDivElement | null>(null);
  const fifthContainerRef = useRef<HTMLDivElement | null>(null);
  const sixthContainerRef = useRef<HTMLDivElement | null>(null);
  const windowElement:any  = window;

  useEffect(() => {
    if (firstContainerRef.current && secondContainerRef.current) {
      windowElement.dragula([firstContainerRef.current, secondContainerRef.current, thirdContainerRef.current, fourthContainerRef.current,fifthContainerRef.current,sixthContainerRef.current]);
    }
  }, []);

    return (
        <Fragment>
            <Pageheader currentpage="Deals" activepage="CRM" mainpage="Deals" />

            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body deals-content">
                            <div className="flex items-center flex-wrap gap-2 justify-between">
                                <div className="flex items-center">
                                    <span className="font-semibold text-[1rem] me-1">Deals</span>
                                    <SpkBadge variant="light" customClass="text-default align-middle">16</SpkBadge>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="#" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#todo-compose"><i className="ri-add-line font-semibold align-middle"></i>New Deal
                                    </Link>
                                    <SpkButton buttontype="button" customClass="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem] btn-wave">Export As CSV</SpkButton>
                                    <SpkDropdown Icon={true} IconPosition="before" Toggletext="Sort By" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block" arialexpand={false}
                                        Linktag={true} Linkclass="ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem] !m-0 btn-wave waves-effect waves-light">
                                        <li><Link className="ti-dropdown-item" to="#">Newest</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Date Added</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">A - Z</Link></li>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                   {DealStages.map((idx) => (
                <div className="xxxl:col-span-2 md:col-span-4 col-span-12" key={Math.random()}>
                    <SpkDeals title={idx.title} color={idx.color} price={idx.amount} leads={idx.leads} customClass={idx.class} />
                </div>
                   ))}
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-2 col-span-12" ref={firstContainerRef} id="leads-discovered">
                    {Dealdata.map((idx) => (
                        <SpkDealsCard key={Math.random()} imgSrc={idx.imgSrc} title={idx.title} price={idx.price} company={idx.company} date={idx.date} />
                    ))}
                </div>
                <div className="xxl:col-span-2 col-span-12" ref={secondContainerRef} id="leads-qualified">
                     {Dealdata1.map((idx) => (
                        <SpkDealsCard key={Math.random()} imgSrc={idx.imgSrc} title={idx.title} price={idx.price} company={idx.company} date={idx.date} />
                    ))}
                </div>
                <div className="xxl:col-span-2 col-span-12" ref={thirdContainerRef} id="contact-initiated">
                {Dealdata2.map((idx) => (
                        <SpkDealsCard key={Math.random()} imgSrc={idx.imgSrc} title={idx.title} price={idx.price} company={idx.company} date={idx.date} />
                    ))}
                </div>
                <div className="xxl:col-span-2 col-span-12" ref={fourthContainerRef} id="needs-identified">
                {Dealdata3.map((idx) => (
                        <SpkDealsCard key={Math.random()} imgSrc={idx.imgSrc} title={idx.title} price={idx.price} company={idx.company} date={idx.date} />
                    ))}
                </div>
                <div className="xxl:col-span-2 col-span-12" ref={fifthContainerRef} id="negotiation">
                {Dealdata4.map((idx) => (
                        <SpkDealsCard key={Math.random()} imgSrc={idx.imgSrc} title={idx.title} price={idx.price} company={idx.company} date={idx.date} />
                    ))}
                </div>
                <div className="xxl:col-span-2 col-span-12" ref={sixthContainerRef} id="deal-finalized">
                {Dealdata5.map((idx) => (
                        <SpkDealsCard key={Math.random()} imgSrc={idx.imgSrc} title={idx.title} price={idx.price} company={idx.company} date={idx.date} />
                    ))}
                </div>
            </div>
            <div id="todo-compose" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                    <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold text-defaulttextcolor" id="mail-ComposeLabel">New Deal</h6>
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" Overlay="#todo-compose">
                                <span className="sr-only">Close</span>
                                <i className="ri-close-line"></i>
                            </SpkButton>
                        </div>
                        <div className="ti-modal-body px-4">
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
                                            <SpkBadge variant="primary" customClass="rounded-full avatar-badge">
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
                                            </SpkBadge>
                                        </span>
                                    </div>

                                </div>

                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="deal-name" className="form-label">Contact Name</label>
                                    <input type="text" className="form-control" id="deal-name" placeholder="Contact Name" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="deal-lead-score" className="form-label">Deal Value</label>
                                    <input type="number" className="form-control" id="deal-lead-score" placeholder="Deal Value" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="company-name" className="form-label">Company Name</label>
                                    <input type="text" className="form-control" id="company-name" placeholder="Company Name" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Last Contacted</label>
                                    <div className="form-group">
                                        <div className="input-group !flex !flex-nowrap">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkFlatpickr inputClass="ti-form-input"
                                        placeholder='Choose date and time'
                                        onfunChange={handleDateChange}
                                        dataEnableTime={true}
                                    />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton buttontype="button" variant="light" customClass="hs-dropdown-toggle ti-btn align-middle" Overlay="#todo-compose">
                                Cancel
                            </SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white !font-medium">Create Deal</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Deals