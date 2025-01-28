
import  { FC, Fragment } from 'react'
import Pageheader from '../../../../components/common/page-header/pageheader'
import { Link } from 'react-router-dom'
import { Nftcard, Tab2data, tab3data, Tabpane1data } from '../../../../components/ui/data/apps/nft/marcketplacedata'
import SpkNFTAuctionCards from '../../../../@spk/dashboards/spk-nftreusedcards';
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface MarketplaceProps {}

const Marketplace: FC<MarketplaceProps> = () => {

    return (
        <Fragment>
            <Pageheader currentpage="Market Place" activepage="NFT" mainpage="Market Place" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <nav className="flex flex-wrap gap-x-2" aria-label="Tabs" role="tablist">
                                    <Link to="#" className="hs-tab-active:bg-primary/10 hs-tab-active:text-primary  py-[0.4rem] px-2  text-sm font-medium text-center rounded-sm hover:text-primary active" id="nft-all-item" data-hs-tab="#nft-all" aria-controls="nft-all">
                                        All
                                    </Link>
                                    <Link to="#" className="hs-tab-active:bg-primary/10 hs-tab-active:text-primary  py-[0.4rem] px-2 text-sm font-medium text-center  rounded-sm hover:text-primary " id="nft-art-item" data-hs-tab="#nft-art" aria-controls="nft-art">
                                        Art
                                    </Link>
                                    <Link to="#" className="hs-tab-active:bg-primary/10 hs-tab-active:text-primary  py-[0.4rem] px-2 text-sm font-medium text-center  rounded-sm hover:text-primary " id="nft-gaming-item" data-hs-tab="#nft-gaming" aria-controls="nft-gaming">
                                        Gaming
                                    </Link>
                                    <Link to="#" className="hs-tab-active:bg-primary/10 hs-tab-active:text-primary  py-[0.4rem] px-2 text-sm font-medium text-center  rounded-sm hover:text-primary " id="nft-domain-item" data-hs-tab="#nft-domain" aria-controls="nft-domain">
                                        Domain
                                    </Link>
                                    <Link to="#" className="hs-tab-active:bg-primary/10 hs-tab-active:text-primary  py-[0.4rem] px-2 text-sm font-medium text-center  rounded-sm hover:text-primary " id="nft-music-item" data-hs-tab="#nft-music" aria-controls="nft-music">
                                        Music
                                    </Link>
                                    <Link to="#" className="hs-tab-active:bg-primary/10 hs-tab-active:text-primary  py-[0.4rem] px-2 text-sm font-medium text-center  rounded-sm hover:text-primary " id="nft-reaestate-item" data-hs-tab="#nft-realestate" aria-controls="nft-realetste">
                                        Real Estate
                                    </Link>
                                    <Link to="#" className="hs-tab-active:bg-primary/10 hs-tab-active:text-primary  py-[0.4rem] px-2 text-sm font-medium text-center  rounded-sm hover:text-primary " id="nft-sports-item" data-hs-tab="#nft-sports" aria-controls="nft-sports">
                                        Sports
                                    </Link>
                                    <Link to="#" className="hs-tab-active:bg-primary/10 hs-tab-active:text-primary  py-[0.4rem] px-2 text-sm font-medium text-center  rounded-sm hover:text-primary " id="nft-fashion-item" data-hs-tab="#nft-fashion" aria-controls="nft-fashion">
                                        Fashion
                                    </Link>
                                    <Link to="#" className="hs-tab-active:bg-primary/10 hs-tab-active:text-primary  py-[0.4rem] px-2 text-sm font-medium text-center  rounded-sm hover:text-primary " id="nft-avatars-item" data-hs-tab="#nft-avatars" aria-controls="nft-avatars">
                                        Avatars
                                    </Link>
                                    <Link to="#" className="hs-tab-active:bg-primary/10 hs-tab-active:text-primary  py-[0.4rem] px-2 text-sm font-medium text-center  rounded-sm hover:text-primary " id="nft-memes-item" data-hs-tab="#nft-memes" aria-controls="nft-memes">
                                        Memes
                                    </Link>
                                </nav>
                                <div className="btn-list">
                                    <SpkButton buttontype="button" Label="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-secondary-full btn-wave me-2">Filters</SpkButton>
                                    <SpkDropdown Icon={true} Linktag={true} IconPosition="before" Toggletext="Sort By"  color="light" arialexpand={false} 
                                        Linkclass="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-primary-full" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
                                            <li><Link className="ti-dropdown-item" to="#" >Today</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#" >This Week</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#" >Last Week</Link></li>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="tab-content">
                        <div className="tab-pane show active !p-0   !border-0" id="nft-all" aria-controls="nft-all-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-x-6">
                                {Tabpane1data.map((idx) => (
                                    <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12" key={Math.random()}>
                                        <SpkNFTAuctionCards customClass="custom-box" card={idx}  />
                                    </div>
                                ))}
                            </div>
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination  mb-4 justify-end">
                                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="tab-pane !p-0 hidden !border-0" id="nft-art" aria-controls="nft-art-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-6">
                                {Tab2data.map((idx)=>(
                                    <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12" key={Math.random()}>
                                        <SpkNFTAuctionCards customClass="custom-box" card={idx} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane !p-0 hidden !border-0" id="nft-gaming" aria-controls="nft-gaming-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                                    <SpkNFTAuctionCards customClass="custom-box" card={Nftcard} />
                                </div>
                                <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                                    <SpkNFTAuctionCards customClass="custom-box" card={tab3data}/>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane !p-0 hidden !border-0" id="nft-domain" aria-controls="nft-domain-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                                    <SpkNFTAuctionCards card={Nftcard} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane !p-0 hidden !border-0" id="nft-music" aria-controls="nft-music-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                                     <SpkNFTAuctionCards card={Nftcard} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane !p-0 hidden !border-0" id="nft-realestate" aria-controls="nft-realestate-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                                    <SpkNFTAuctionCards card={Nftcard} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane !p-0 hidden !border-0" id="nft-sports" aria-controls="nft-sports-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                                    <SpkNFTAuctionCards card={Nftcard} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane !p-0 hidden !border-0" id="nft-fashion" aria-controls="nft-fashion-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                                    <SpkNFTAuctionCards card={Nftcard} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane !p-0 hidden !border-0" id="nft-avatars" aria-controls="nft-avatars-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                                    <SpkNFTAuctionCards card={Nftcard} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane !p-0 hidden !border-0" id="nft-memes" aria-controls="nft-memes-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                                    <SpkNFTAuctionCards card={Nftcard} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Marketplace