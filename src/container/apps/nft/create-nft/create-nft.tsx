import  { FC, Fragment } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import Pageheader from '../../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import face1 from "../../../../assets/images/faces/1.jpg";
import image18 from "../../../../assets/images/nft-images/18.png";
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import SpkNFTAuctionCards from '../../../../@spk/dashboards/spk-nftreusedcards';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface CreatenftProps {}

const Createnft: FC<CreatenftProps> = () => {
    const carddata={
    avatarclass:'avatar-rounded me-2',
    name:"NFTNinja",
    mail:"@nftninja",
    image1:image18,
    image2:face1,
    likes:"0.47k",
    bid:"0.24ETH",
    title:"Digital Dreamscape"
    }

    const Royalitydata = [
        { value: 'Choose Royalities', label: 'Choose Royalities' },
        { value: 'Flat Royalty', label: 'Flat Royalty' },
        { value: 'Graduated Royalty', label: 'Graduated Royalty' },
        { value: 'Tiered Royalty', label: 'Tiered Royalty' },
        { value: 'Time-Limited Royalty', label: 'Time-Limited Royalty' },
        { value: 'Customized Royalty', label: 'Customized Royalty' },
    ];

    return (
        <Fragment>
            <Pageheader currentpage="Create NFT" activepage="NFT" mainpage="Create NFT" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-9 xl:col-span-8 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Create NFT</div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 gap-4 justify-between">
                                <div className="xxl:col-span-4 xl:col-span-12 col-span-12">
                                    <div className="create-nft-item">
                                        <label className="form-label">Upload NFT</label>
                                        <FilePond className="filepond circular-filepond" labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                            stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom'
                                            styleButtonRemoveItemPosition='center bottom' />
                                    </div>
                                </div>
                                <div className="xxl:col-span-8 xl:col-span-12 col-span-12">
                                    <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="input-placeholder" className="form-label">NFT Title</label>
                                            <input type="text" className="form-control" id="input-placeholder" placeholder="eg:Neo-Nebulae" />
                                        </div>
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="nft-description" className="form-label">NFT Description</label>
                                            <textarea className="form-control" id="nft-description" rows={3} placeholder="Enter Description"></textarea>
                                        </div>
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="nft-link" className="form-label">External Link</label>
                                            <input type="text" className="form-control" id="nft-link" placeholder="External Link Here" />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="grid grdi-cols-12  sm:gap-x-4 gap-y-4">
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="nft-creator-name" className="form-label">Creator Name</label>
                                            <input type="text" className="form-control" id="nft-creator-name" placeholder="Enter Name" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="nft-price" className="form-label">NFT Price</label>
                                            <input type="text" className="form-control" id="nft-price" placeholder="Enter Price" />
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <label htmlFor="nft-size" className="form-label">NFT Size</label>
                                            <input type="text" className="form-control" id="nft-size" placeholder="Enter Size" />
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <label className="form-label">Royality</label>
                                            <SelectComponent  option={Royalitydata} placeholder='Choose Royalities'/>
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <label htmlFor="nft-property" className="form-label">Property</label>
                                            <input type="text" className="form-control" id="nft-property" placeholder="Enter Property" />
                                        </div>
                                        <div className="xl:col-span-12 col-span-12">
                                            <label className="form-label block">Method</label>
                                            <div className="btn-group inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="strap-material" id="strap1" defaultChecked />
                                                <label className="!mb-0 ti-btn !block sm:!inline-flex !py-1 !px-2 ti-btn-primary !bg-primary !text-white z-0 !rounded-e-none !border-e-0" htmlFor="strap1"><i className="ti ti-tag me-1 align-middle text-[0.9375rem] inline-block"></i>Fixed Price</label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap2" />
                                                <label className="!mb-0 ti-btn !block sm:!inline-flex !py-1 !px-2 ti-btn-outline-primary text-default !rounded-none !border-e-0 z-0" htmlFor="strap2"><i className="ti ti-users text-[0.9375rem] me-1 align-middle inline-block"></i>Open For Bids</label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap3" />
                                                <label className="!mb-0 ti-btn !block sm:!inline-flex !py-1 !px-2 ti-btn-outline-primary !rounded-s-none text-default z-0" htmlFor="strap3"><i className="ti ti-hourglass-low text-[0.9375rem] me-1 align-middle inline-block"></i>Timed Auction</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer text-end">
                            <Link to="#"  className="ti-btn ti-btn-primary-full btn-wave waves-effect waves-light">Create NFT</Link>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                NFT Preview Here
                            </div>
                        </div>
                        <div className="box-body">
                            <SpkNFTAuctionCards  button={false} customClass="custom-box !mb-0 !shadow-none border dark:border-defaultborder/10" card={carddata}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Createnft