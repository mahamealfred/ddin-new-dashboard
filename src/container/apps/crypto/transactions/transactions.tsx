import  { FC, Fragment, useState } from 'react';
import { Tabledata,  Transactionoptions, Transactionseries } from '../../../../components/ui/data/apps/crypto/transactiondata'
import CountUp from "react-countup";
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';
import Spktables from '../../../../@spk/tables/spk-tables';
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import SpkButton from '../../../../@spk/uielements/spk-button';
import SpkOverlay from '../../../../@spk/uielements/spk-overlay';

interface TransactionsProps {}

const Transactions: FC<TransactionsProps> = () => {

    const [allData, setAllData] = useState(Tabledata);
    const [originalData, setOriginalData] = useState(Tabledata); // Store original data

    function handleRemove(id: number) {
        const newList = allData.filter((item) => item.id !== id);
        setAllData(newList);
        setOriginalData(originalData.filter((item) => item.id !== id)); // Update original data
    }

    const allElement2:any = [];
    const myfunction = (InputData: string) => {
        const filteredData = originalData.slice(); // Make a copy of original data
        for (const element of filteredData) {
            if (element.name[0] === " ") {
                element.name = element.name.trim();
            }
            if (element.name.toLowerCase().includes(InputData.toLowerCase())) {
                if (element.name.toLowerCase().startsWith(InputData.toLowerCase())) {
                    allElement2.push(element);
                }
            }
        }
        setAllData(allElement2);
        if (InputData.trim() === "") {
            setAllData(originalData); // Revert to original data if search input is empty
        }
    };
    return (
        <Fragment>
            <Pageheader currentpage="Transactions" activepage="Crypto" mainpage="Transactions" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Transaction History
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" onChange={(ele) => { myfunction(ele.target.value); }} />
                                </div>
                                <SpkDropdown Arrowicon={true} Toggletext="Sort By" Customclass="" arialexpand={false} CustomToggleclass="ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem] waves-effect waves-light" >
                                        <li><Link className="ti-dropdown-item" to="#">New</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">This Week</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">This Month</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">This Year</Link></li>
                                </SpkDropdown>
                                <div>
                                    <SpkButton variant="secondary-full" buttontype="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] btn-wave">View All</SpkButton>
                                </div>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                    <Spktables tableClass='table whitespace-nowrap min-w-full table-bordered' header={[{headerClassname:"", title:''},{headerClassname:"text-start", title:'Sender'},{headerClassname:"text-start", title:'Transaction Hash'},{headerClassname:"text-start", title:'Coin'},{headerClassname:"text-start", title:'Date'},{headerClassname:"text-start", title:'Amount'},{headerClassname:"text-start", title:'Receiver'},{headerClassname:"text-start", title:'Status'},{headerClassname:"text-start", title:'Actions'}]} >
                                        {allData.map((idx) => (
                                            <tr className="border border-defaultborder transaction" key={Math.random()}>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className={`ti ti-arrow-narrow-${idx.class} text-${idx.color1} font-semibold text-[1rem]`}></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={idx.src1} alt="" />
                                                        </span>
                                                        <div className="font-semibold">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#{idx.cell}</span>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={idx.src2} alt="" />
                                                        </span>
                                                        <div className="font-semibold">{idx.coin}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>{idx.date}</span>
                                                </td>
                                                <td>
                                                    <span className={`text-${idx.color1}`}>{idx.amount}</span>
                                                </td>
                                                <td>
                                                    <span>{idx.text1}</span>
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.color2}/10`} customClass={`text-${idx.color2}`}>{idx.text2}</SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkOverlay customClass="">
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="hs-tooltip-toggle me-2 ti-btn">
                                                            <span><i className="ri-download-2-line"></i></span>
                                                            <span
                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                role="tooltip">
                                                                Download
                                                            </span>
                                                        </SpkButton>
                                                    </SpkOverlay>
                                                    <SpkOverlay customClass="">
                                                        <SpkButton buttontype="button" variant="danger" Size="sm" customClass="ti-btn hs-tooltip-toggle transaction-delete-btn">
                                                            <span onClick={() => handleRemove(idx.id)}><i className="ri-delete-bin-5-line"></i></span>
                                                            <span
                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                role="tooltip">
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
                                <ul className="ti-pagination sm:ltr:float-right sm:rtl:float-left justify-center mb-4">
                                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem] active" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                        <div className="box custom-box">
                            <div className="box-body !p-0">
                                <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start flex-wrap gap-2">
                                    <div className="svg-icon-background bg-primary/10 fill-primary me-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="svg-primary"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" /></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h6 className="mb-2 !text-[0.75rem] !font-medium">New Transactions
                                            <SpkBadge variant="primary" customClass=" text-white font-semibold ltr:float-right rtl:float-left">
                                                12,345
                                            </SpkBadge>
                                        </h6>
                                        <div className="pb-0 mt-0">
                                            <div>
                                                <h4 className="text-[1.125rem] font-semibold mb-2"><span className="count-up" data-count="42"> <CountUp
                                                    end={43}
                                                    start={0}
                                                    duration={4.94}
                                                /></span><span className="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                                <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                                    <span className="text-success me-1 font-semibold inline-flex">
                                                        <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                    </span>
                                                    <span>this month</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10 border-dashed flex items-start flex-wrap gap-2">
                                    <div className="svg-icon-background bg-success/10 fill-success me-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg-success"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" /></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h6 className="mb-2 !text-[0.75rem] !font-medium">Completed Transactions
                                            <SpkBadge variant="success" customClass=" text-white font-semibold ltr:float-right rtl:float-left">
                                                4,176
                                            </SpkBadge>
                                        </h6>
                                        <div>
                                            <h4 className="text-[1.125rem] font-semibold mb-2"><span className="count-up" data-count="319"> <CountUp
                                                end={320}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                            <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                                <span className="text-danger me-1 font-semibold inline-flex">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start p-4 border-b dark:border-defaultborder/10 border-dashed flex-wrap gap-2">
                                    <div className="svg-icon-background bg-warning/10 !fill-warning me-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-warning"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h6 className="mb-2 !text-[0.75rem] !font-medium">Pending Transactions
                                            <SpkBadge variant="warning" customClass="text-white font-semibold ltr:float-right rtl:float-left">
                                                7,064
                                            </SpkBadge>
                                        </h6>
                                        <div>
                                            <h4 className="text-[1.125rem] font-semibold mb-2"><span className="count-up" data-count="81"> <CountUp
                                                end={81}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                            <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                                <span className="text-success me-1 font-semibold inline-flex">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start p-4 border-b dark:border-defaultborder/10 border-dashed flex-wrap gap-2">
                                    <div className="svg-icon-background bg-secondary/10 fill-secondary me-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-secondary"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h6 className="mb-2 !text-[0.75rem] !font-medium">Inprogress Transactions
                                            <SpkBadge variant="secondary" customClass="text-white font-semibold ltr:float-right rtl:float-left">
                                                1,105
                                            </SpkBadge>
                                        </h6>
                                        <div>
                                            <h4 className="text-[1.125rem] font-semibold mb-2"><span className="count-up" data-count="32"> <CountUp
                                                end={33}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                            <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                                <span className="text-success me-1 font-semibFold inline-flex">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pb-2">
                                    <p className="text-[.9375rem] font-semibold">Transactions Statistics <span className="text-[#8c9097] dark:text-white/50 font-normal">(Last 6 months) :</span></p>
                                    <div id="transactions">
                                     <ApexchartsComponent chartOptions={Transactionoptions} chartSeries={Transactionseries} type="bar" height={210} />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Transactions