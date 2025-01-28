import  { FC, Fragment } from 'react'
import Pageheader from '../../../../components/common/page-header/pageheader'
import { Link } from 'react-router-dom'
import { Liveauctiondata, Liveauctiondata1  } from '../../../../components/ui/data/apps/nft/liveacuationdata'

import image34 from "../../../../assets/images/nft-images/34.png";
import image31 from "../../../../assets/images/nft-images/31.png";
import image25 from "../../../../assets/images/nft-images/25.png";
import image21 from "../../../../assets/images/nft-images/21.png";
import image26 from "../../../../assets/images/nft-images/26.png";
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkLiveacuationCard from '../../../../@spk/apps/spk-liveacuationcard';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface LiveauctionProps {}

const Liveauction: FC<LiveauctionProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Live Auction" activepage="NFT" mainpage="Live Auction" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 col-span-12">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                        <div className="nft-tag nft-tag-primary active">
                            <Link aria-label="anchor" to="#"  className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-world text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">All</span>
                        </div>
                        <div className="nft-tag nft-tag-secondary">
                            <Link aria-label="anchor" to="#"  className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-flame text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">New Trends</span>
                        </div>
                        <div className="nft-tag nft-tag-info">
                            <Link aria-label="anchor" to="#"  className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-palette text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">Art Work</span>
                        </div>
                        <div className="nft-tag nft-tag-success">
                            <Link aria-label="anchor" to="#"  className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-device-gamepad-2 text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">Games</span>
                        </div>
                        <div className="nft-tag nft-tag-danger">
                            <Link aria-label="anchor" to="#"  className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-tie text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">Fashion</span>
                        </div>
                        <div className="nft-tag nft-tag-warning">
                            <Link aria-label="anchor" to="#"  className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-music text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">Music</span>
                        </div>
                        <div className="nft-tag nft-tag-dark">
                            <Link aria-label="anchor" to="#"  className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-gift text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">Others</span>
                        </div>
                    </div>
                    <h6 className="font-semibold !text-defaulttextcolor">Live Auction:</h6>
                    <div className="grid grid-cols-12 gap-x-6">
                        {Liveauctiondata.map((idx) => (
                            <div className="xxxl:col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12" key={Math.random()}>
                                <SpkLiveacuationCard card={idx} bidImgSrc={image34} timeLeft={'04 Days 03 : 44 : 04'} />
                            </div>
                        ))}
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="ti-pagination justify-end mb-4">
                            <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#" >Previous</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >1</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >2</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >3</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >Next</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="xxl:col-span-3 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Featured Creators
                                    </div>
                                    <div>
                                        <SpkButton buttontype="button" variant="primary" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] btn-wave">View All</SpkButton>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <ul className="list-group list-group-flush">
                                        {Liveauctiondata1.map((idx) => (
                                            <li className={`list-group-item ${idx.class}`} key={Math.random()}>
                                                <div className="flex items-center justify-between flex-wrap gap-2">
                                                    <div className="flex items-center">
                                                        <div className="leading-none">
                                                            <span className="avatar avatar-md avatar-rounded me-2">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="items-center">
                                                            <p className="mb-0 font-semibold">{idx.text1}<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                            <span className="text-[.75rem] text-[#8c9097] dark:text-white/50">{idx.text2}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="block font-semibold text-success">{idx.text3}</span>
                                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]">{idx.text4}'s</span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Activity
                                    </div>
                                    <SpkDropdown Icon={true} Linktag={true} IconPosition="before" Toggletext="Today" 
                                        color="light" arialexpand={false} Linkclass="p-2 text-[.75rem] text-[#8c9097] dark:text-white/50" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
                                            <li><Link className="ti-dropdown-item" to="#" >Today</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#" >This Week</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#" >Last Week</Link></li>
                                    </SpkDropdown>
                                </div>
                                <div className="box-body !p-0">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item !border-t-0 !border-e-0 !border-s-0">
                                            <div className="flex gap-4 items-center flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-xl">
                                                        <img src={image31} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><Link to="#"  className="font-semibold">DreamSpace</Link><span className="text-[.75rem] text-[#8c9097] dark:text-white/50 ms-2">24 mins ago</span></div>
                                                    <div className="text-[.8125rem]">Purchsed from you by <Link className="underline" to="#" >Mitchell</Link> for <span className="text-success font-semibold text-[.75rem]">0.57ETH</span>.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item !border-e-0 !border-s-0">
                                            <div className="flex gap-4 items-center flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-xl">
                                                        <img src={image25} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="font-semibold">DreamSpace</span><span className="text-[.75rem] text-[#8c9097] dark:text-white/50 ms-2">16 mins ago</span></div>
                                                    <div className="text-[.8125rem]">You started following mark zensberg.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item !border-e-0 !border-s-0">
                                            <div className="flex gap-4 items-center">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-xl">
                                                        <img src={image21} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="font-semibold">Neo Nebulae</span><span className="text-[.75rem] text-[#8c9097] dark:text-white/50 ms-2">5 mins ago</span></div>
                                                    <div className="text-[.8125rem]">You showed interest in purchasing <Link to="#"  className="text-[.75rem] text-warning font-semibold">NeoNebulae</Link>.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item !border-b-0 !border-e-0 !border-s-0">
                                            <div className="flex gap-4 items-center ">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-xl">
                                                        <img src={image26} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="font-semibold">Neo Nebulae</span><span className="text-[.75rem] text-[#8c9097] dark:text-white/50 ms-2">16 mins ago</span></div>
                                                    <div className="text-[.8125rem]">Purchased from <Link to="#"  className="underline">Cyber Canvas</Link> for <span className="font-semibold text-[.75rem] text-pinkmain">1.345ETH</span>.</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Liveauction