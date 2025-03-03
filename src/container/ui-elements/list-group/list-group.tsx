import  {FC, Fragment } from 'react';
import { list1, list10, list12, list13, list14, list15, list2, list3, list4, list5, list6, list7, list8, list9, list11 ,listdata1, listdata2, listdata3, listdata5, listdata7, listdata8, listdata9} from '../../../components/prism-code/uielementsprism'
import { ActiveButtons, BasicButtons, ContextualButtons, ContextualButtons1, DisableItems, LinksButtons, Solidcolors } from '../../../components/ui/data/ui-elements/listgroupdata'
import Pageheader from '../../../components/common/page-header/pageheader';
import Showcode from '../../../components/common/showcode/showcode';
import { Link } from 'react-router-dom';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import SpkButton from '../../../@spk/uielements/spk-button';

interface ListgroupProps {}

const Listgroup: FC<ListgroupProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="List Group" activepage="Ui Elements" mainpage="List Group" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Basic List" reactCode={list1}  dataCode={listdata1}>
                        <ul className="ti-list-group">
                            {BasicButtons.map((idx) => (
                                <li className="ti-list-group-item" key={Math.random()}>
                                    <div className="flex items-center">
                                        <span className="avatar avatar-sm">
                                            <img src={idx.src} alt="img" className="!rounded-md" />
                                        </span>
                                        <div className="ms-2 font-semibold">
                                            {idx.text}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Active Items" reactCode={list2}  dataCode={listdata2}>
                        <ul className="ti-list-group">
                            {ActiveButtons.map((idx) => (
                                <li className={`ti-list-group-item ${idx.class1}`} aria-current="true" key={Math.random()}>
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-[.9375rem]">
                                                <i className={`bi bi-${idx.class}`}></i>
                                            </span>
                                        </div>
                                        <div className="ms-2">
                                            {idx.text}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Disabled Items" reactCode={list3} dataCode={listdata3}>
                        <ul className="ti-list-group">
                            {DisableItems.map((idx) => (
                                <li className={`ti-list-group-item ${idx.text}`} aria-disabled="true" key={Math.random()}>{idx.class}
                                </li>
                            ))}
                        </ul>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Flush" reactCode={list4} reusableCode={list4}>
                        <ul className="ti-list-group ti-list-group-flush">
                            <li className="ti-list-group-item !border-t-0 !border-l-0 !border-r-0 font-semibold"><i className="bi bi-envelope align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Asish Trivedhi<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+1023-84534)</span></li>
                            <li className="ti-list-group-item !border-l-0 !border-r-0  font-semibold"><i className="bi bi-tiktok align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Alezander Russo<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+7546-12342)</span></li>
                            <li className="ti-list-group-item !border-l-0 !border-r-0  font-semibold"><i className="bi bi-whatsapp align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Karem Smith<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+9944-56632)</span></li>
                            <li className="ti-list-group-item !border-l-0 !border-r-0  font-semibold"><i className="bi bi-facebook align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Melissa Brien<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+1023-34323)</span></li>
                            <li className="ti-list-group-item !border-l-0 !border-r-0 !border-b-0  font-semibold"><i className="bi bi-instagram align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Kamala Harris<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+91-63421)</span></li>
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Links" reactCode={list5} dataCode={listdata5}>
                        <div className="ti-list-group">
                            <ul className="list-none">
                                {LinksButtons.map((idx) => (
                                    <li className={`ti-list-group-item ti-list-group-item-action ${idx.class1} ${idx.color1}`} key={Math.random()}>
                                        <Link to="#"
                                            aria-current="true">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className={`avatar avatar-xs bg-${idx.class} !text-${idx.color} avatar-rounded`}>
                                                        {idx.text1}
                                                    </span>
                                                </div>
                                                <div className="ms-2">{idx.text}</div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Buttons" reactCode={list6}>
                        <div className="ti-list-group flex flex-col">
                            <SpkButton buttontype="button" customClass="ti-list-group-item text-start ti-list-group-item-action active" aria-current="true">Simply dummy text of the printing<SpkBadge variant="primary" customClass="ltr:float-right rtl:float-left text-white">243</SpkBadge></SpkButton>
                            <SpkButton buttontype="button" customClass="ti-list-group-item text-start ti-list-group-item-action">There are many variations of passages<SpkBadge variant="secondary/10" customClass="ltr:float-right rtl:float-left text-secondary">35</SpkBadge></SpkButton>
                            <SpkButton buttontype="button" customClass="ti-list-group-item text-start ti-list-group-item-action">All the Lorem Ipsum generators<SpkBadge variant="info/10" customClass="ltr:float-right rtl:float-left text-info">132</SpkBadge></SpkButton>
                            <SpkButton buttontype="button" customClass="ti-list-group-item text-start ti-list-group-item-action">All the Lorem Ipsum generators<SpkBadge  variant="success/10" customClass="ltr:float-right rtl:float-left  text-success">2525</SpkBadge></SpkButton>
                            <SpkButton buttontype="button" customClass="ti-list-group-item text-start ti-list-group-item-action" disabled>A disabled item meant to be disabled<SpkBadge variant="danger/10" customClass="ltr:float-right rtl:float-left text-danger">21</SpkBadge></SpkButton>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Contextual Classes" reactCode={list7} dataCode={listdata7}>
                        <ul className="ti-list-group">
                            {ContextualButtons.map((idx) => (
                                <li className={`ti-list-group-item ${idx.class}`} key={Math.random()}>{idx.text}</li>
                            ))}
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Contextual classes With Hover Styles" reactCode={list8} dataCode={listdata8}>
                        <div className="ti-list-group flex flex-col">
                            {ContextualButtons1.map((idx) => (
                                <Link to="#" className={`w-full ti-list-group-item ${idx.class}`} key={Math.random()}>{idx.text}</Link>
                            ))}
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Solid Colored Lists" reactCode={list9} dataCode={listdata9}>
                        <ul className="ti-list-group ">
                            {Solidcolors.map((idx) => (
                                <li className={`ti-list-group-item ${idx.class}`} key={Math.random()}>{idx.text}</li>

                            ))}
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Custom Content" reactCode={list10}>
                        <div className="ti-list-group">
                            <ul className="list-none">
                                <li className="ti-list-group-item ti-list-group-item-action active">
                                    <Link to="#"
                                        aria-current="true">
                                        <div className="sm:flex w-full justify-between">
                                            <h6 className="mb-1 font-semibold">Web page editors now use Lorem Ipsum?</h6>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                        <small>24,Nov 2022.</small>
                                    </Link>
                                </li>
                                <li className="ti-list-group-item ti-list-group-item-action ">
                                    <Link to="#">
                                        <div className="flex w-full justify-between">
                                            <h6 className="mb-1 font-semibold">Richard McClintock, a Latin professor?</h6>
                                            <small className="text-[#8c9097] dark:text-white/50">4 hrs ago</small>
                                        </div>
                                        <p className="mb-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                        <small className="text-[#8c9097] dark:text-white/50">30,Nov 2022.</small>
                                    </Link>
                                </li>
                                <li className="ti-list-group-item ti-list-group-item-action ">
                                    <Link to="#">
                                        <div className="sm:flex w-full justify-between">
                                            <h6 className="mb-1 font-semibold">It uses a dictionary of over 200 Latin words?</h6>
                                            <small className="text-[#8c9097] dark:text-white/50">15 hrs ago</small>
                                        </div>
                                        <p className="mb-1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <small className="text-[#8c9097] dark:text-white/50">4,Nov 2022.</small>
                                    </Link>
                                </li>
                                <li className="ti-list-group-item ti-list-group-item-action ">
                                    <Link to="#">
                                        <div className="sm:flex w-full justify-between">
                                            <h6 className="mb-1 font-semibold">The standard Lorem Ipsum used since the 1500s?</h6>
                                            <small className="text-[#8c9097] dark:text-white/50">45 mins ago</small>
                                        </div>
                                        <p className="mb-1">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                        <small className="text-[#8c9097] dark:text-white/50">28,Oct 2022.</small>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Sub Headings" reactCode={list11} customCardClass="text-defaulttextcolor text-defaultsize">
                        <ol className="ti-list-group !list-decimal">
                            <li className="ti-list-group-item flex justify-between items-start">
                                <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
                                    <div className="font-semibold text-[.875rem] !text-defaulttextcolor">What Happened?</div>
                                    Many experts have recently suggested may exist.
                                </div>
                            </li>
                            <li className="ti-list-group-item flex justify-between items-start">
                                <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
                                    <div className="font-semibold text-[.875rem] !text-defaulttextcolor">It Was Amazing!</div>
                                    His idea involved taking red.
                                </div>
                            </li>
                            <li className="ti-list-group-item flex justify-between items-start">
                                <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
                                    <div className="font-semibold text-[.875rem] !text-defaulttextcolor">News Is A Great Weapon.</div>
                                    News can influence in many ways.
                                </div>
                            </li>
                            <li className="ti-list-group-item flex justify-between items-start">
                                <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
                                    <div className="font-semibold text-[.875rem] !text-defaulttextcolor">majority have suffered.</div>
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                </div>
                            </li>
                        </ol>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Numbered Lists" reactCode={list12}>
                        <ol className="ti-list-group ti-list-group-numbered">
                            <li className="ti-list-group-item">Simply dummy text of the printing.</li>
                            <li className="ti-list-group-item">There are many variations of passages.</li>
                            <li className="ti-list-group-item">All the Lorem Ipsum generators.</li>
                            <li className="ti-list-group-item">Written in 45 BC. This book is a treatise on the theory.</li>
                            <li className="ti-list-group-item">Randomised words which don't look.</li>
                            <li className="ti-list-group-item">Always free from repetition, injected humour.</li>
                        </ol>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="List With Checkboxes" reactCode={list13}>
                        <ul className="ti-list-group">
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2 font-semibold" type="checkbox" defaultValue=""
                                    aria-label="..." defaultChecked />
                                Accurate information at any given point.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2 font-semibold" type="checkbox" defaultValue=""
                                    aria-label="..." />
                                Hearing the information and responding.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2 font-semibold" type="checkbox" defaultValue=""
                                    aria-label="..." defaultChecked />
                                Setting up and customizing your own sales.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2 font-semibold" type="checkbox" defaultValue=""
                                    aria-label="..." defaultChecked />
                                New Admin Launched.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2 font-semibold" type="checkbox" defaultValue=""
                                    aria-label="..." />
                                To maximize profits and improve productivity.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2 font-semibold" type="checkbox" defaultValue=""
                                    aria-label="..." />
                                To have a complete 360° overview of sales information, having.
                            </li>
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="List With Radios" reactCode={list14}>
                        <ul className="ti-list-group list-none">
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2" type="radio" defaultValue=""
                                    name="list-radio" defaultChecked />
                                Accurate information at any given point.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2" type="radio" defaultValue=""
                                    name="list-radio" defaultChecked />
                                Hearing the information and responding.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2" type="radio" defaultValue=""
                                    name="list-radio" defaultChecked />
                                Setting up and customizing your own sales.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2" type="radio" defaultValue=""
                                    name="list-radio" />
                                New Admin Launched.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2" type="radio" defaultValue=""
                                    name="list-radio" />
                                To maximize profits and improve productivity.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-2" type="radio" defaultValue=""
                                    name="list-radio" />
                                To have a complete 360° overview of sales information, having.
                            </li>
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="List With Badges" reactCode={list15}>
                        <ul className="ti-list-group">
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Groceries 
                                <SpkBadge variant="primary" customClass="text-white">Available</SpkBadge>
                            </li>
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Furniture
                                <SpkBadge variant="secondary" customClass="text-white">Buy</SpkBadge>
                            </li>
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Beauty
                                <SpkBadge variant="danger" customClass="!rounded-full text-white">32</SpkBadge>
                            </li>
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Books
                                <SpkBadge variant="light" customClass="text-default">New</SpkBadge>
                            </li>
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Toys
                                <SpkBadge variant="info-gradient" customClass="">Hot</SpkBadge>
                            </li>
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Mobiles
                                <SpkBadge variant="warning" customClass="text-white">Sold Out</SpkBadge>
                            </li>
                        </ul>
                    </Showcode>
                </div>
            </div>
        </Fragment>
    )
}

export default Listgroup