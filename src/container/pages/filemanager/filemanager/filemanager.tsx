import  { FC, Fragment, useEffect, useState } from 'react'
import {  Filemanagerlist, Folderdata, Myfilesdata, Recentdata } from '../../../../components/ui/data/pages/filemanager/filemanagerdata'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import filemanager2 from "../../../../assets/images/media/file-manager/2.png";
import filemanager1 from "../../../../assets/images/media/file-manager/1.png";
import filemanager3 from "../../../../assets/images/media/file-manager/3.png";
import face1 from "../../../../assets/images/faces/1.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import SpkDropdown from '../../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import Spktables from '../../../../@spk/tables/spk-tables';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface FilemanagerProps {}

const Filemanager: FC<FilemanagerProps> = () =>{

    const [isFoldersOpen, setFoldersOpen] = useState(false);
    const [isDetailsOpen, setDetailsOpen] = useState(false);
 
    const handleResize = () => {
     const windowWidth = window.innerWidth;
     // Handle folders and details visibility
     if (windowWidth <= 575) {
       setFoldersOpen(true);
       setDetailsOpen(false);
     } else if (windowWidth <= 1200) {
       setDetailsOpen(true);
     } else {
       setFoldersOpen(false);
       setDetailsOpen(false);
     }
   };
 
   useEffect(() => {
     window.addEventListener('resize', handleResize);
 
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);
    
    const handleToggleFolders = () => {
      if (window.innerWidth <= 575) {
        setFoldersOpen(true);
        setDetailsOpen(false);
      }
    };
    
    const handleToggleFoldersClose = () => {
      setFoldersOpen(false);
    };
    
    const handleToggleDetails = () => {
      if (window.innerWidth <= 1200) {
        setDetailsOpen(true);
      }
    };
    
    const handleToggleDetailsClose = () => {
      setDetailsOpen(false);
    };

    const FooterContent = (
        <tr className="">
        <td colSpan={5}>
            <nav aria-label="Page navigation" className="flex justify-end">
                <ul className="ti-pagination  mb-0">
                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#">Previous</Link></li>
                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">1</Link></li>
                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">2</Link></li>
                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">Next</Link></li>
                </ul>
            </nav>
        </td>
    </tr>
    );

    return (
        <Fragment>
            <div className="file-manager-container p-2 gap-2 sm:!flex !block text-defaulttextcolor text-defaultsize">

                <div className={`file-manager-navigation ${isFoldersOpen ? 'close' : ''}`}>
                    <div className="flex items-center justify-between w-full p-4 border-b dark:border-defaultborder/10">
                        <div>
                            <h6 className="font-semibold mb-0 text-[1rem] text-defaulttextcolor">File Manager</h6>
                        </div>
                        <SpkDropdown Icon={true} Customclass=" ms-2" Linktag={false}  arialexpand={false}  IconClass="ri-settings-3-line"
                            CustomToggleclass="ti-btn ti-btn-sm ti-btn-primary">
                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Hidden Files</Link></li>
                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Another action</Link></li>
                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Something else here</Link></li>
                        </SpkDropdown>
                    </div>
                    <div className="p-4 border-b dark:border-defaultborder/10">
                        <div className="input-group">
                            <input type="text" className="form-control !bg-light border-0 !rounded-s-sm" placeholder="Search Files" aria-describedby="button-addon2" />
                            <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn !rounded-s-none !mb-0" Id="button-addon2"><i className="ri-search-line text-[#8c9097] dark:text-white/50"></i></SpkButton>
                        </div>
                    </div>
                    <div>
                        <PerfectScrollbar>
                            <ul className="list-none files-main-nav" id="files-main-nav" onClick={handleToggleFolders}>
                                {Filemanagerlist.map((idx)=>(
                                <li className={idx.class} key={Math.random()}>
                                    <a href="#">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <i className={idx.icon}></i>
                                            </div>
                                            <span className="flex-grow whitespace-nowrap">
                                                {idx.text}
                                            </span>
                                            {idx.badge === true? <SpkBadge variant="primary" customClass="text-white">{idx.badgetext}</SpkBadge>:""}
                                        </div>
                                    </a>
                                </li>
                                ))}
                                <li className="mb-8">
                                    <div className="text-[#8c9097] dark:text-white/50 mb-2">
                                        <p className="mb-1"><span className="font-bold text-[.875rem]">69.42GB</span> Used</p>
                                        <p className="text-[.75rem] mb-0">58% Used - 51.04Gb free</p>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar !bg-info w-[58%]" role="progressbar" aria-valuenow={58} aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center justify-center">
                                    <div className="filemanager-upgrade-storage">
                                        <span>
                                            <img src={filemanager2} alt="" />
                                        </span>
                                        <div className="text-defaulttextcolor">
                                            <span className="text-[.9375rem] font-semibold">Want to <span className="font-bold text-success"><u>Buy</u></span> Storage?</span>
                                        </div>
                                        <div className="mt-4 grid">
                                            <SpkButton buttontype="button" variant="primary-gradient" customClass="ti-btn">Upgrade</SpkButton>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </PerfectScrollbar>
                    </div>
                </div>

                <div className={`file-manager-folders ${isFoldersOpen ? 'open' : ''}`}>
                    <div className="flex p-4 flex-wrap gap-2 items-center justify-between border-b dark:border-defaultborder/10">
                        <div>
                            <h6 className="font-semibold mb-0 text-[1rem]">Folders</h6>
                        </div>
                        <div className="flex gap-2">
                            <SpkButton Label="button" onclickfunc={handleToggleFoldersClose} type="button" id="folders-close-btn" customClass="sm:hidden block btn btn-icon btn-sm btn-danger">
                                <i className="ri-close-fill"></i>
                            </SpkButton>
                            <div>
                                <Link to="#" className="hs-dropdown-toggle ti-btn !gap-0 !py-1 !px-2 !text-[0.75rem] !font-medium bg-primary text-white flex items-center justify-center" data-hs-overlay="#todo-compose">
                                    <i className="ri-add-circle-line align-middle !me-1"></i>Create Folder
                                </Link>
                                
                            </div>
                            <div>
                                <Link to="#" className="hs-dropdown-toggle ti-btn !gap-0 !py-1 !px-2 !text-[0.75rem] !font-medium bg-secondary text-white flex items-center justify-center" data-hs-overlay="#todo-compose2">
                                    <i className="ri-add-circle-line align-middle !me-1"></i>Create File
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                    <div className="p-4 file-folders-container  overflow-scroll" id="file-folders-container">
                        <div className="flex mb-4 items-center justify-between">
                            <p className="mb-0 font-semibold text-[.875rem]">My Files</p>
                            <SpkButton buttontype="button" variant="primary" customClass="ti-btn !py-1 !px-2 !text-[0.75rem]">View All</SpkButton>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6 mb-4">
                            {Myfilesdata.map((idx) => (

                                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12" key={Math.random()}>
                                    <div className="box shadow-none !bg-light">
                                        <div className="box-body !p-4">
                                            <Link to="#">
                                                <div className="flex justify-between flex-wrap">
                                                    <div className="file-format-icon">
                                                        {idx.class}
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold mb-1">
                                                            {idx.text1}
                                                        </span>
                                                        <span className="text-[.625rem] block text-[#8c9097] dark:text-white/50 text-end">
                                                            {idx.text2}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex mb-4 items-center justify-between">
                            <p className="mb-0 font-semibold text-[.875rem]">Folders</p>
                            <SpkButton buttontype="button" variant="primary" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium">View All</SpkButton>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6 mb-4">
                            {Folderdata.map((idx) => (
                                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12" key={Math.random()}>
                                    <div className="box border dark:border-defaultborder/10  !shadow-none">
                                        <div className={`box-body ${idx.color1}`}>
                                            <div className="mb-4 folder-svg-container flex flex-wrap justify-between items-start">
                                                <div>
                                                    {idx.class}
                                                </div>
                                                <div>
                                                <SpkDropdown Customclass="ltr:[--placement:left-top] rtl:[--placement:right-top]" Linktag={false}  
                                                  arialexpand={false} Icon={true} IconClass="ri-more-2-fill"
                                                    CustomToggleclass={`ti-btn ti-btn-sm ti-btn-${idx.color2}`} >
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Delete</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Rename</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Hide Folder</Link></li>
                                                </SpkDropdown>
                                                </div>
                                            </div>
                                            <p className="text-[.875rem] font-semibold mb-1 leading-none">
                                                <Link to="#">{idx.text1}</Link>
                                            </p>
                                            <div className="flex items-center justify-between flex-wrap">
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50 text-[.75rem]">
                                                        {idx.text2}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-default font-semibold">
                                                        {idx.text3}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="flex mb-4 items-center justify-between">
                            <p className="mb-0 font-semibold text-[.875rem]">Recents</p>
                            <SpkButton buttontype="button" variant="primary" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary">View All</SpkButton>
                        </div>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="table-responsive border border-bottom-0 dark:border-defaultborder/10">
                                    <Spktables tableClass="table whitespace-nowrap table-hover min-w-full"  
                                    tBodyClass="files-list"  footchildren={FooterContent} 
                                       header={[{title:'File Name', headerClassname:'text-start'}, {title:'Category', headerClassname:'text-start'}, {title:'Size', headerClassname:'text-start'}, 
                                       {title:'Date Modified', headerClassname:'text-start'}, {title:'Action', headerClassname:'text-start'}]}>
                                            {Recentdata.map((idx) => (
                                                <tr className={idx.class} key={Math.random()} onClick={handleToggleDetails}>
                                                    <th scope="row">
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-xs">
                                                                    <img src={filemanager1} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                {idx.text1}
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>{idx.text2}</td>
                                                    <td>{idx.text3}</td>
                                                    <td>{idx.text4}</td>
                                                    <td>
                                                        <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                            <Link aria-label="anchor" to="#"
                                                                className="ti-btn ti-btn-icon ti-btn-wave !rounded-full !border-info/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                                    className="ri-eye-line"></i></Link>
                                                            <Link aria-label="anchor" to="#"
                                                                className="ti-btn ti-btn-icon ti-btn-wave !rounded-full !border-danger/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                                    className="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                    </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`selected-file-details ${isDetailsOpen ? 'open' : ''}`}>
                    <div className="flex p-4 items-center justify-between border-b dark:border-defaultborder/10">
                        <div>
                            <h6 className="font-semibold mb-0 text-[1rem]">File Details</h6>
                        </div>
                        <div className="flex items-center">
                            <SpkDropdown Customclass="me-1" Linktag={false}  
                                arialexpand={false} Icon={true} IconClass="ri-more-2-fill"
                                CustomToggleclass="ti-btn ti-btn-sm ti-btn-primary" >
                                     <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Share</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Copy</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Move</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Delete</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#">Raname</Link></li>
                            </SpkDropdown>
                            <SpkButton onclickfunc={handleToggleDetailsClose} Label="button" buttontype="button" Id="file-close-btn" variant="danger" Size="sm" 
                             customClass="ti-btn ti-btn-icon xl:!hidden block">
                                <i className="ri-close-fill"></i>
                            </SpkButton>
                        </div>
                    </div>
                    <div className="filemanager-file-details overflow-scroll" id="filemanager-file-details">
                        <div className="p-4 text-center border-b border-dashed dark:border-defaultborder/10 ">
                            <div className="file-details mb-4 !inline-flex">
                                <img src={filemanager3} alt="" />
                            </div>
                            <div>
                                <p className="mb-0 font-semibold text-[1rem]">AMB-2012.zip</p>
                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[.625rem]">422KB | 23,Nov 2022</p>
                            </div>
                        </div>
                        <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div>
                                        <span className="font-semibold">File Format : </span><span className="text-[.75rem] text-[#8c9097] dark:text-white/50">zip</span>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <p className="font-semibold mb-0">File Description : </p>
                                        <span className="text-[.75rem] text-[#8c9097] dark:text-white/50">This file contains 3 folder ynex.main &amp; ynex.premium &amp; ynex.featured and 42 images and layout styles are added in this update.</span>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <p className="font-semibold mb-0">File Location : </p>
                                    <span className="text-[.75rem] text-[#8c9097] dark:text-white/50">Device/Storage/Archives/AMB-2012.zip</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                            <p className="mb-1 font-semibold text-[.875rem]">Downloaded from :</p>
                            <Link className="text-primary font-semibold break-words" to="https://themeforest.net/user/spruko/portfolio" target="_blank" >
                                <u>https://themeforest.net/user/spruko/portfolio</u>
                            </Link>
                        </div>
                        <div className="p-4">
                            <p className="mb-2 font-semibold text-[.875rem]">Shared With :</p>
                            <div className="flex items-center p-2 mb-1">
                                <span className="avatar avatar-sm me-2">
                                    <img src={face1} alt="" className="!rounded-md" />
                                </span>
                                <span className="font-semibold flex-grow dark:text-defaulttextcolor/70">Akira Susan</span>
                                <SpkBadge variant="success/10" customClass="text-success font-normal">28,Nov 2022</SpkBadge>
                            </div>
                            <div className="flex items-center p-2 mb-1">
                                <span className="avatar avatar-sm me-2">
                                    <img src={face15} alt="" className="!rounded-md" />
                                </span>
                                <span className="font-semibold flex-grow dark:text-defaulttextcolor/70">Khalid Ahmad</span>
                                <SpkBadge variant="success/10" customClass="text-success font-normal">16,Oct 2022</SpkBadge>
                            </div>
                            <div className="flex items-center p-2 mb-1">
                                <span className="avatar avatar-sm me-2">
                                    <img src={face8} alt="" className="!rounded-md" />
                                </span>
                                <span className="font-semibold flex-grow dark:text-defaulttextcolor/70">Jeremiah Jackson</span>
                                <SpkBadge variant="success/10" customClass="text-success font-normal">05,Dec 2022</SpkBadge>
                            </div>
                            <div className="flex items-center p-2">
                                <span className="avatar avatar-sm me-2">
                                    <img src={face13} alt="" className="!rounded-md" />
                                </span>
                                <span className="font-semibold flex-grow dark:text-defaulttextcolor/70">Brigo Jhonson</span>
                                <SpkBadge variant="success/10" customClass="text-success font-normal">13,Nov 2022</SpkBadge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="todo-compose" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="ti-modal-content w-full">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold" id="mail-ComposeLabel">Create Folder</h6>
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor"  Overlay="#todo-compose">
                                <i className="ri-close-line"></i>
                            </SpkButton>
                        </div>
                        <div className="ti-modal-body px-4">
                            <label htmlFor="create-folder1" className="form-label">Folder Name</label>
                            <input type="text" className="form-control" id="create-folder1" placeholder="Folder Name" />
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton Label="button" buttontype="button" customClass="hs-dropdown-toggle ti-btn  ti-btn-light align-middle" Overlay="#todo-compose">
                                <i className="ri-close-fill"></i>
                            </SpkButton>
                            <SpkButton buttontype="button" variant="success-full" customClass="ti-btn text-white !font-medium">Create</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
            <div id="todo-compose2" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="ti-modal-content w-full">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold">Create File</h6>
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" Overlay="#todo-compose2">
                                <span className="sr-only">Close</span>
                                <i className="ri-close-line"></i>
                            </SpkButton>
                        </div>
                        <div className="ti-modal-body px-4">
                            <label htmlFor="create-folder1" className="form-label">Folder Name</label>
                            <input type="text" className="form-control" placeholder="Folder Name" />
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton Label="button" type="button" customClass="hs-dropdown-toggle ti-btn  ti-btn-light align-middle" Overlay="#todo-compose2">
                                <i className="ri-close-fill"></i>
                            </SpkButton>
                            <SpkButton buttontype="button" variant="success-full" customClass="ti-btn text-white !font-medium">Create</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Filemanager