import  { FC,Fragment } from 'react'
import {   Dropdowndat6, reactdropdown1, reactdropdown10, reactdropdown11, reactdropdown12, reactdropdown13, reactdropdown14, reactdropdown15, reactdropdown16, reactdropdown17, reactdropdown18, reactdropdown19, reactdropdown2, reactdropdown20, reactdropdown21, reactdropdown22, reactdropdown3, reactdropdown4, reactdropdown5, reactdropdown6, reactdropdown7, reactdropdown8, reactdropdown9, reusedropdown1, reusedropdown10, reusedropdown11, reusedropdown12, reusedropdown13, reusedropdown14, reusedropdown15, reusedropdown16, reusedropdown17, reusedropdown18, reusedropdown2, reusedropdown3, reusedropdown4, reusedropdown5, reusedropdown6, reusedropdown7, reusedropdown8, reusedropdown9  } from '../../../components/prism-code/utilities-prism'
import { SingleButtons } from '../../../components/ui/data/ui-elements/dropdownsdata'
import Pageheader from '../../../components/common/page-header/pageheader'
import Showcode from '../../../components/common/showcode/showcode'
import { Link } from 'react-router-dom'
import SpkDropdown from '../../../@spk/uielements/spk-dropdown'
import SpkButton from '../../../@spk/uielements/spk-button'


interface DropdownsProps {}

const Dropdowns: FC<DropdownsProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Dropdowns" activepage="Ui Elements" mainpage="Dropdowns" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Dropdowns" reactCode={reactdropdown1} reusableCode={reusedropdown1}>
                        <div className="ti-btn-list flex align-center flex-wrap">
                                <SpkDropdown Dropdownoptions Icon={true} Toggletext="Dropdown button" arialexpand={false} Menulabel="dropdownMenuButton1" iconPosition="after" color="primary-full" Customclass="me-2" buttonid="dropdownMenuButton1" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block" CustomToggleclass="!py-2">
                                    <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                </SpkDropdown>
                                <SpkDropdown Icon={true} Toggletext="Dropdown link" iconPosition="after" Menulabel="dropdownMenuLink" arialexpand={false} color="secondary-full" CustomToggleclass="!py-2" buttonid="dropdownMenuLink" IconClass="ri-arrow-down-s-line align-middle ms-1 inline-block">
                                    <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Another  action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                </SpkDropdown>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Single Button Dropdowns" reactCode={reactdropdown2} reusableCode={reusedropdown2} dataCode={Dropdowndat6}>
                        <div className="ti-btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="ti-btn-group" key={Math.random()}>
                                    <SpkDropdown Arrowicon={true} Toggletext="Action" Customclass="[--placement:bottom-left] rtl:[--placement:bottom-right]" Menulabel="dropdownMenuButton2" arialexpand={false} 
                                          CustomToggleclass={`ti-btn ti-btn-${idx.class}-full ti-dropdown-toggle`} buttonid="dropdownMenuButton2">
                                        <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                    </SpkDropdown>
                                </div>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Rounded Dropdown Buttons" reactCode={reactdropdown3} reusableCode={reusedropdown3} dataCode={Dropdowndat6}>
                        <div className="ti-btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="ti-btn-group" key={Math.random()}>
                                    <SpkDropdown Arrowicon={true} Toggletext="Action" Customclass="[--placement:bottom-left] rtl:[--placement:bottom-right]" Menulabel="dropdownMenuButton3" arialexpand={false} 
                                          CustomToggleclass={`ti-btn ti-btn-${idx.class}-full ti-dropdown-toggle !rounded-full`} buttonid="dropdownMenuButton3">
                                            <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                    </SpkDropdown>
                                </div>
                            ))}
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Outline Button Dropdowns" reactCode={reactdropdown4} reusableCode={reusedropdown4} dataCode={Dropdowndat6}>
                        <div className="ti-btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="ti-btn-group" key={Math.random()}>
                                    <SpkDropdown Arrowicon={true} Toggletext="Action" Customclass="[--placement:bottom-left] rtl:[--placement:bottom-right]" Menulabel="dropdownMenuButton4" arialexpand={false} 
                                          CustomToggleclass={`ti-btn ti-btn-outline-${idx.class} ti-dropdown-toggle `} buttonid="dropdownMenuButton4">
                                            <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                    </SpkDropdown>
                                </div>
                            ))}
                        </div>
                    </Showcode>

                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Outline Button Dropdowns" reactCode={reactdropdown5} reusableCode={reusedropdown5} dataCode={Dropdowndat6}>
                        <div className="ti-btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="ti-btn-group" key={Math.random()}>
                                    <SpkDropdown Arrowicon={true} Toggletext="Action" Customclass="[--placement:bottom-left] rtl:[--placement:bottom-right]" Menulabel="dropdownMenuButton5" arialexpand={false} 
                                          CustomToggleclass={`ti-btn ti-btn-outline-${idx.class} ti-dropdown-toggle !rounded-full`} buttonid="dropdownMenuButton5">
                                            <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                    </SpkDropdown>
                                </div>
                            ))}
                        </div>
                    </Showcode>

                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Spilt Dropdowns" reactCode={reactdropdown6} reusableCode={reusedropdown6} dataCode={Dropdowndat6}>

                        <div className="ti-btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="ti-btn-group !gap-0 !m-0" key={Math.random()}>
                                     <SpkButton 
                                            customClass={`ti-btn ti-btn-${idx.class}-full !rounded-tr-none !rounded-br-none rtl:!rounded-tl-none rtl:!rounded-bl-none  rtl:!rounded-tr-sm rtl:!rounded-br-sm  -me-[4px] !pt-[4.45px]`}
                                            buttontype="button" Id="dropdownMenuButton26"
                                            Expand="false">
                                            Action
                                        </SpkButton>
                                      <SpkDropdown Arrowicon={true} Toggletext="" Customclass="[--placement:bottom-left] rtl:[--placement:bottom-right]" Menulabel="dropdownMenuButton26" arialexpand={false} 
                                            CustomToggleclass={`ti-btn ti-btn-${idx.class}-full opacity-[0.85] !rounded-tl-none !rounded-bl-none rtl:!rounded-tr-none rtl:!rounded-br-none  rtl:!rounded-tl-sm rtl:!rounded-bl-sm -ms-[4px] !pt-[4.45px] pb-[0.4rem]`} buttonid="dropdownMenuButton26">
                                                <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                                <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                                <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                     </SpkDropdown>  
                                </div>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Dropdown Sizing" reactCode={reactdropdown7} reusableCode={reusedropdown7}>
                        <SpkDropdown Arrowicon={true} Customclass="ti-btn-group my-1 me-2" Toggletext="Large button"   arialexpand={false}
                                CustomToggleclass="ti-btn-primary-full ti-btn-lg ti-dropdown-toggle">
                                <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="ti-dropdown-item" to="#">Separated link</Link></li>
                        </SpkDropdown>
                        <div className="ti-btn-group my-1 me-2">
                            <div className="hs-dropdown ti-dropdown">
                                <SpkButton
                                    customClass="ti-btn-lg !py-[0.75rem] !px-[1rem] ti-dropdown-toggle ti-btn-light !rounded-tr-none !rounded-br-none rtl:!rounded-tl-none rtl:!rounded-bl-none  rtl:!rounded-tr-sm rtl:!rounded-br-sm  -me-[4px]"
                                    buttontypetype="button" Id="dropdownMenuButton32"
                                    aria-expanded="false">
                                    Large split button
                                </SpkButton>
                                  <SpkDropdown Arrowicon={true} Customclass="[--placement:bottom-left]"  buttonid="hs-split-dropdown"   arialexpand={false}
                                        CustomToggleclass="ti-btn-lg !m-0 !py-[0.75rem] !px-[1rem] ti-btn-light hover:!bg-light !rounded-tl-none !rounded-bl-none rtl:!rounded-tr-none rtl:!rounded-br-none  rtl:!rounded-tl-sm rtl:!rounded-bl-sm ti-dropdown-toggle -ms-[4px]" 
                                            Menulabel="dropdownMenuButton32">
                                        <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                </SpkDropdown>
                            </div>
                          
                        </div>
                        <div className="ti-btn-group my-1 me-2">
                            <SpkDropdown Arrowicon={true} Toggletext="Small button" Customclass="ti-btn-group my-1 me-2"  buttonid="hs-split-dropdown"   arialexpand={false}
                                    CustomToggleclass="ti-btn ti-btn-primary-full !py-1 !px-4 !text-[0.75rem] ti-dropdown-toggle" 
                                        Menulabel="hs-split-dropdown">
                                    <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="ti-dropdown-item" to="#">Separated link</Link></li>
                            </SpkDropdown>
                        </div>
                        <div className="ti-btn-group my-1 me-2">
                            <div className="hs-dropdown ti-dropdown">
                                <SpkButton
                                    customClass="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-light !rounded-tr-none !rounded-br-none rtl:!rounded-tl-none rtl:!rounded-bl-none  rtl:!rounded-tr-sm rtl:!rounded-br-sm  -me-[4px]"
                                    buttontype="button" id="dropdownMenuButton33"
                                    aria-expanded="false">
                                    Small split button
                                </SpkButton>
                                    <SpkDropdown Arrowicon={true} Toggletext="" Customclass="[--placement:bottom-left]"  buttonid="hs-split-dropdown"   arialexpand={false}
                                            CustomToggleclass="ti-btn !py-1 !px-2 hover:!bg-light  ti-btn-light opacity-[0.85] !rounded-tl-none !rounded-bl-none rtl:!rounded-tr-none rtl:!rounded-br-none  rtl:!rounded-tl-sm rtl:!rounded-bl-sm ti-dropdown-toggle -ms-[4px]  pb-[0.4rem]" 
                                             Menulabel="hs-split-dropdown">
                                        <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                    </SpkDropdown>
                            </div>
                            
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropup" reactCode={reactdropdown8} reusableCode={reusedropdown8}>
                        <SpkDropdown Svg={true} Toggletext="Dropup" Customclass="[--placement:top-left] rtl:[--placement:bottom-right] m-1" SvgClass="hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white" Strokewidth="2" SvgStroke="currentColor"
                                Svgicon="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" width="16" height="16" Svvgviewbox="0 0 16 16" buttonid="hs-split-dropright"   arialexpand={false}
                            CustomToggleclass="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2" Custommenuclass="transition-none" Menulabel="hs-split-dropright">
                            <Link className="ti-dropdown-item" to="#">Action</Link>
                            <Link className="ti-dropdown-item" to="#">Another action</Link>
                            <Link className="ti-dropdown-item" to="#">Something else here</Link>
                        </SpkDropdown>
                        <div className="ti-dropdown m-1">
                            <SpkButton buttonid="button" customClass="relative ti-dropdown-toggle  ti-btn ti-btn-secondary-full !py-1 !rounded-e-none !me-0">
                                Split dropup
                            </SpkButton>
                            <SpkDropdown Svg={true} Customclass="[--placement:top-left]" SvgClass="w-auto h-2.5 ti-dropdown-caret !text-white" Strokewidth="2" SvgStroke="currentColor"
                                    Svgicon="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" width="16" height="16" Svvgviewbox="0 0 16 16" buttonid="hs-split-dropright"   arialexpand={false}
                                    CustomToggleclass="hs-dropdown-toggle relative ti-btn ti-btn-secondary-full !opacity-[0.85]  !rounded-s-none ti-dropdown-toggle" Custommenuclass="transition-none" Menulabel="hs-split-dropright">
                                    <Link className="ti-dropdown-item" to="#">Action</Link>
                                    <Link className="ti-dropdown-item" to="#">Another action</Link>
                                    <Link className="ti-dropdown-item" to="#">Something else here</Link>
                            </SpkDropdown>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropup Right" reactCode={reactdropdown9} reusableCode={reusedropdown9}>
                        <SpkDropdown Svg={true} Toggletext="Dropright" Customclass="[--placement:left-top]" SvgClass="w-auto h-2.5 ti-dropdown-caret !text-white" Strokewidth="2" SvgStroke="currentColor"
                                    Svgicon="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" width="16" height="16" Svvgviewbox="0 0 16 16" buttonid="hs-split-dropright"   arialexpand={false}
                                    CustomToggleclass="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2" Custommenuclass="transition-none" Menulabel="hs-split-dropright">
                                <Link className="ti-dropdown-item" to="#">
                                    Action
                                </Link>
                                <Link className="ti-dropdown-item" to="#">
                                    Another action
                                </Link>
                                <Link className="ti-dropdown-item" to="#">
                                    Something else here
                                </Link>
                                <Link to="#" aria-label="anchor">
                                    <hr className="dropdown-divider" />
                                </Link>
                                <Link className="ti-dropdown-item" to="#">
                                    Separated link
                                </Link>
                        </SpkDropdown>
                        <div className="hs-dropdown ti-dropdown [--placement:right-top] m-1">
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle relative ti-btn ti-btn-secondary-full  !py-2 !rounded-e-none ti-dropdown-toggle !me-0">
                                Split dropright
                            </SpkButton>
                            <SpkDropdown Svg={true} Customclass=" [--placement:left-top]" SvgClass="w-auto h-2.5 ti-dropdown-caret !text-white" Strokewidth="2" SvgStroke="currentColor"
                                    Svgicon="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" width="16" height="16" Svvgviewbox="0 0 16 16" buttonid="hs-split-dropright"   arialexpand={false}
                                    CustomToggleclass="hs-dropdown-toggle relative  ti-dropdown-toggle !opacity-[0.85] rounded-none  ti-btn ti-btn-secondary-full !rounded-s-none" Custommenuclass="transition-none" Menulabel="hs-split-dropright">
                                    <Link className="ti-dropdown-item" to="#">Action</Link>
                                    <Link className="ti-dropdown-item" to="#">Another action</Link>
                                    <Link className="ti-dropdown-item" to="#"> Something else here</Link>
                                    <Link to="#" aria-label="anchor"><hr className="dropdown-divider" /></Link>
                                    <Link className="ti-dropdown-item" to="#">  Separated link</Link>
                            </SpkDropdown>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropup Left" reactCode={reactdropdown10} reusableCode={reusedropdown10}>
                        <SpkDropdown Svg={true} Svgaftertext="Dropleft" Customclass="[--placement:left-top] m-1" SvgClass="w-auto h-2.5 ti-dropdown-caret !text-white" Strokewidth="2" SvgStroke="currentColor"
                                Svgicon="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14" width="16" height="16" Svvgviewbox="0 0 16 16" buttonid="hs-dropright3"   arialexpand={false}
                                CustomToggleclass="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2" Custommenuclass="transition-none" Menulabel="hs-dropright3">
                                <Link className="ti-dropdown-item" to="#">Action</Link>
                                <Link className="ti-dropdown-item" to="#">Another action</Link>
                                <Link className="ti-dropdown-item" to="#"> Something else here</Link>
                                <Link to="#" aria-label="anchor"><hr className="dropdown-divider" /></Link>
                                <Link className="ti-dropdown-item" to="#">  Separated link</Link>
                        </SpkDropdown>
                        <div className="hs-dropdown ti-dropdown [--placement:left-top] m-1">
                            <SpkDropdown Svg={true} Customclass=" [--placement:left-top]" SvgClass="w-auto h-2.5 ti-dropdown-caret !text-white" Strokewidth="2" SvgStroke="currentColor"
                                    Svgicon="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14" width="16" height="16" Svvgviewbox="0 0 16 16" buttonid="hs-split-dropright1"   arialexpand={false}
                                    CustomToggleclass="hs-dropdown-toggle relative  ti-dropdown-toggle !opacity-[0.85] rounded-none  ti-btn ti-btn-secondary-full !rounded-e-none" Custommenuclass="transition-none" Menulabel="hs-split-dropright1">
                                    <Link className="ti-dropdown-item" to="#">Action</Link>
                                    <Link className="ti-dropdown-item" to="#">Another action</Link>
                                    <Link className="ti-dropdown-item" to="#"> Something else here</Link>
                                    <Link to="#" aria-label="anchor"><hr className="dropdown-divider" /></Link>
                                    <Link className="ti-dropdown-item" to="#">  Separated link</Link>
                            </SpkDropdown>
                            <SpkButton buttontype="button"
                                customClass="hs-dropdown-toggle relative ti-btn ti-btn-secondary-full  !py-2 !rounded-s-none ti-dropdown-toggle !me-0">
                                Split dropleft
                            </SpkButton>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Active" reactCode={reactdropdown11} reusableCode={reusedropdown11}>
                        <SpkDropdown Arrowicon={true} Toggletext="Dropstart"  arialexpand={false} 
                                CustomToggleclass="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2" >
                                <li><Link className="ti-dropdown-item" to="#">Regular link</Link></li>
                                <li><Link className="ti-dropdown-item active" to="#" aria-current="true">Active link</Link></li>
                                <li><Link className="ti-dropdown-item" to="#">Another link</Link></li>
                        </SpkDropdown>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Disabled" reactCode={reactdropdown12} reusableCode={reusedropdown12}>
                        <SpkDropdown Arrowicon={true} Toggletext="Dropstart" Customclass="[--placement:bottom-left] rtl:[--placement:bottom-right]"   arialexpand={false} 
                            CustomToggleclass="ti-btn-primary-full ti-dropdown-toggle !py-2" >
                                <li><Link className="ti-dropdown-item" to="#">Regular link</Link></li>
                                <li><Link className="ti-dropdown-item disabled" to="#" aria-current="true">Active link</Link></li>
                                <li><Link className="ti-dropdown-item" to="#">Another link</Link></li>
                         </SpkDropdown>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Auto Close Behaviour" reactCode={reactdropdown13} reusableCode={reusedropdown13}>
                        <div className="ti-btn-list">
                            <div className="ti-btn-group">
                            <SpkDropdown Arrowicon={true} Toggletext="Default dropdown" Customclass="hs-dropdown ti-dropdown"   arialexpand={false} 
                                    CustomToggleclass="ti-btn-primary-full ti-dropdown-toggle" buttonid="defaultDropdown" Menulabel="defaultDropdown" >
                                      <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                      <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                      <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                            </SpkDropdown>
                            </div>
                            <div className="ti-btn-group">
                            <SpkDropdown Arrowicon={true} Toggletext="Clickable outside"  arialexpand={false} 
                                    CustomToggleclass="ti-btn-secondary-full ti-dropdown-toggle" buttonid="dropdownMenuClickableOutside" Menulabel="dropdownMenuClickableOutside" >
                                      <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                      <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                      <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                            </SpkDropdown>
                            </div>
                            <div className="ti-btn-group">
                            <SpkDropdown Arrowicon={true} Toggletext="Clickable inside"  arialexpand={false} 
                                    CustomToggleclass="ti-btn-info-full ti-dropdown-toggle" buttonid="dropdownMenuClickableInside" Menulabel="dropdownMenuClickableInside" >
                                     <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                     <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                     <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                            </SpkDropdown>
                            </div>
                            <div className="ti-btn-group">
                            <SpkDropdown Arrowicon={true} Toggletext="Manual close" Customclass=""   arialexpand={false}  buttonid="dropdownMenuClickable" Menulabel="dropdownMenuClickable"
                                    CustomToggleclass="ti-btn ti-btn-warning-full ti-dropdown-toggle" >
                                    <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Menu item</Link> </li>
                            </SpkDropdown>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropdowns With Forms" reactCode={reactdropdown14} reusableCode={reusedropdown14}>
                        <SpkDropdown Arrowicon={true} Toggletext="Dropdown" Customclass="[--auto-close:inside]"   arialexpand={false}  buttonid="hs-dropdown-auto-close-inside" Menulabel="hs-dropdown-auto-close-inside"
                        CustomToggleclass="ti-btn ti-btn-secondary-full ti-dropdown-toggle !py-2" >
                                    <form className="!px-6 !py-4">
                                    <div className="mb-4">
                                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
                                            address</label>
                                        <input type="email" className="form-control w-full !rounded-md"
                                            id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleDropdownFormPassword1"
                                            className="form-label">Password</label>
                                        <input type="password" className="form-control w-full !rounded-md"
                                            id="exampleDropdownFormPassword1" placeholder="Password" />
                                    </div>
                                    <div className="mb-4">
                                        <div className="form-check !ps-0">
                                            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                            <label className="ps-2 form-check-label" htmlFor="dropdownCheck">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <SpkButton buttontype="submit" variant="primary-full" customClass="ti-btn">Sign in</SpkButton>
                                </form>
                                <div className="dropdown-divider"></div>
                                <Link className="ti-dropdown-item" to="#">New around here? Sign
                                    up</Link>
                                <Link className="ti-dropdown-item" to="#">Forgot password?</Link>
                        </SpkDropdown>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <Showcode title="Alignment Options" reactCode={reactdropdown15} reusableCode={reusedropdown15}>
                        <div className="ti-btn-list">
                            <div className='ti-btn-group' >
                            <SpkDropdown Arrowicon={true} Toggletext="Dropdown" Customclass="[--placement:bottom-left] rtl:[--placement:bottom-right]"   arialexpand={false} 
                              buttonid="dropdownMenuButton" Menulabel="dropdownMenuButton" CustomToggleclass="ti-btn ti-btn-primary-full ti-dropdown-toggle mb-0 !py-2" >
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                            </SpkDropdown>
                            </div>
                            <div className='ti-btn-group' >
                            <SpkDropdown Arrowicon={true} Toggletext="Right-aligned menu" Customclass=""   arialexpand={false} 
                               CustomToggleclass="ti-btn-secondary-full ti-dropdown-toggle mb-0 !py-2" Custommenuclass="ti-dropdown-menu-end">
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                            </SpkDropdown>
                            </div>
                            <div className='ti-btn-group'>
                            <SpkDropdown Arrowicon={true} Toggletext=" Left-aligned, right-aligned lg" Customclass=""   arialexpand={false}  buttonid="hs-dropdown-left-but-right-on-lg"
                               CustomToggleclass="ti-btn-info-full ti-dropdown-toggle mb-0 !py-2" Custommenuclass="ti-dropdown-menu-end" Menulabel="hs-dropdown-left-but-right-on-lg">
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                            </SpkDropdown>
                            </div>
                            <div className='ti-btn-group' >
                            <SpkDropdown Arrowicon={true} Toggletext="Right-aligned, left-aligned lg" Customclass=""   arialexpand={false}  buttonid="-dropdown-right-but-left-on-lg"
                               CustomToggleclass="ti-btn ti-btn-warning-full ti-dropdown-toggle mb-0 !py-2" Custommenuclass=" ti-dropdown-menu-end lg:ti-dropdown-menu-start" Menulabel="-dropdown-right-but-left-on-lg">
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                            </SpkDropdown>
                            </div>
                            <div className='ti-btn-group' >
                            <SpkDropdown Svgaftertext="Dropstart" Svg={true} Customclass="--placement:left-top] m-1" SvgClass="w-auto h-2.5 ti-dropdown-caret !text-white" Strokewidth="2" SvgStroke="currentColor"
                                    Svgicon="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14" width="16" height="16" Svvgviewbox="0 0 16 16" buttonid="hs-dropright"   arialexpand={false}
                                    CustomToggleclass="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-success-full !py-2" Custommenuclass="transition-none" Menulabel="hs-dropright">
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                            </SpkDropdown>
                            </div>
                            <div className='ti-btn-group' >
                            <SpkDropdown Toggletext="Dropend" Svg={true} Customclass="[--placement:right-top] m-1 rtl:[--placement:bottom-right]" SvgClass="w-auto h-2.5 ti-dropdown-caret !text-white" Strokewidth="2" SvgStroke="currentColor"
                                    Svgicon="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" width="16" height="16" Svvgviewbox="0 0 16 16" buttonid="hs-dropright"   arialexpand={false}
                                    CustomToggleclass="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2" Custommenuclass="mt-0 transition-none" Menulabel="hs-dropright">
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                            </SpkDropdown>
                            </div>
                            <div className='ti-btn-group' >
                                <SpkDropdown Toggletext="Dropup" Svg={true} Customclass="[--placement:top-left] m-1" SvgClass=" hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white" Strokewidth="2" SvgStroke="currentColor"
                                    Svgicon="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" width="16" height="16" Svvgviewbox="0 0 16 16" buttonid="hs-dropup1"   arialexpand={false}
                                        CustomToggleclass="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-success-full !py-2" Custommenuclass="mt-0 transition-none" Menulabel="hs-dropup1">
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Menu item</Link></li>
                                </SpkDropdown>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dark Dropdowns" reactCode={reactdropdown16} reusableCode={reusedropdown16} >
                            <SpkDropdown Arrowicon={true} Toggletext="Dropdown button" Customclass=""   arialexpand={false}  buttonid="hs-dropdown-left-but-right-on-lg"
                                 CustomToggleclass="ti-btn ti-btn-dark ti-dropdown-toggle !py-2 dark:hover:!bg-white  dark:hover:!text-black" Custommenuclass="!bg-black">
                                <li><Link className="ti-dropdown-item !text-white dark:!text-defaulttextcolor" to="#">Action</Link></li>
                                <li><Link className="ti-dropdown-item !text-white dark:!text-defaulttextcolor" to="#">Another action</Link></li>
                                <li><Link className="ti-dropdown-item !text-white dark:!text-defaulttextcolor" to="#">Something else here</Link></li>
                            </SpkDropdown>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Custom Dropdown Menus's" reactCode={reactdropdown17} reusableCode={reusedropdown17}>
                        <div className="ti-btn-list flex flex-wrap gap-x-2">
                         <SpkDropdown Arrowicon={true} Toggletext="Primary" Customclass=""   arialexpand={false} Custommenuclass="!bg-primary"
                               CustomToggleclass="ti-btn-primary-full ti-dropdown-toggle !py-2" >
                                          <li><Link className="ti-dropdown-item !text-white" to="#">Action</Link></li>
                                          <li><Link className="ti-dropdown-item !text-white" to="#">Another action</Link></li>
                                          <li><Link className="ti-dropdown-item !text-white" to="#">Something else here</Link></li>
                            </SpkDropdown>
                            <SpkDropdown Arrowicon={true} Toggletext="secondary" Customclass=""   arialexpand={false} Custommenuclass="!bg-secondary block"
                               CustomToggleclass="ti-btn-secondary-full ti-dropdown-toggle !py-2" >
                                    <li><Link className="ti-dropdown-item !text-white" to="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item !text-white" to="#!">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !text-white" to="#!">Something else here</Link></li>
                            </SpkDropdown>
                            <SpkDropdown Arrowicon={true} Toggletext="warning" Customclass=""   arialexpand={false} Custommenuclass="dropmenu-item-warning"
                               CustomToggleclass="ti-btn-warning-full ti-dropdown-toggle !py-2" >
                                    <li><Link to="#" className="ti-dropdown-item active">Active</Link></li>
                                    <li><Link to="#" className="ti-dropdown-item">Action</Link></li>
                                    <li><Link to="#" className="ti-dropdown-item">Another  action</Link></li>
                                    <li><Link to="#" className="ti-dropdown-item">Something else here</Link></li>
                            </SpkDropdown> 
                            <SpkDropdown Arrowicon={true} Toggletext="info" Customclass=""   arialexpand={false} Custommenuclass="dropmenu-item-info block"
                               CustomToggleclass="ti-btn-info-full ti-dropdown-toggle !py-2" >
                                    <li><Link className="ti-dropdown-item active" to="#">Active</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                            </SpkDropdown>
                            <SpkDropdown Arrowicon={true} Toggletext="Success" Customclass=""  arialexpand={false} Custommenuclass="dropmenu-light-success block"
                               CustomToggleclass="ti-btn-success ti-dropdown-toggle !py-2" >
                                    <li><Link className="ti-dropdown-item" to="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#!">Another   action</Link></li>
                                    <li><Link className="ti-dropdown-item active" to="#!">Active</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#!">Something else here</Link></li>
                            </SpkDropdown>
                            <SpkDropdown Arrowicon={true} Toggletext="Danger" Customclass=""   arialexpand={false} Custommenuclass="dropmenu-light-danger block"
                               CustomToggleclass="ti-btn-danger ti-dropdown-toggle !py-2" >
                                    <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item active" to="#">Active</Link></li>
                                    <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                            </SpkDropdown>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Ghost Button Dropdowns" reactCode={reactdropdown18} reusableCode={reusedropdown18}>
                        <div className="ti-btn-list flex flex-wrap gap-x-2">
                            <SpkDropdown Arrowicon={true} Toggletext="Primary" Customclass=""   arialexpand={false} 
                                CustomToggleclass="ti-btn-ghost-primary ti-dropdown-toggle !py-2 !shadow-none">
                                         <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Another  action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                         <li><hr className="dropdown-divider" /></li>
                                         <li><Link className="ti-dropdown-item" to="#">Separated link</Link></li>
                            </SpkDropdown>
                            <SpkDropdown Arrowicon={true} Toggletext="Secondary" Customclass=""   arialexpand={false} 
                               CustomToggleclass="ti-btn-ghost-secondary ti-dropdown-toggle !py-2 !shadow-none">
                                         <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Another  action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                         <li><hr className="dropdown-divider" /></li>
                                         <li><Link className="ti-dropdown-item" to="#">Separated link</Link></li>
                            </SpkDropdown>
                            <SpkDropdown Arrowicon={true} Toggletext="Success" Customclass=""   arialexpand={false} 
                               CustomToggleclass="ti-btn-ghost-success ti-dropdown-toggle !py-2 !shadow-none">
                                         <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Another  action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                         <li><hr className="dropdown-divider" /></li>
                                         <li><Link className="ti-dropdown-item" to="#">Separated link</Link></li>
                            </SpkDropdown>
                            <SpkDropdown Arrowicon={true} Toggletext="Info" Customclass=""   arialexpand={false} 
                               CustomToggleclass="ti-btn-ghost-info ti-dropdown-toggle !py-2 !shadow-none">
                                         <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Another  action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                         <li><hr className="dropdown-divider" /></li>
                                         <li><Link className="ti-dropdown-item" to="#">Separated link</Link></li>
                            </SpkDropdown>
                            <SpkDropdown Arrowicon={true} Toggletext="Warning" Customclass=""   arialexpand={false} 
                               CustomToggleclass="ti-btn-ghost-warning ti-dropdown-toggle !py-2 !shadow-none">
                                         <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Another  action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                         <li><hr className="dropdown-divider" /></li>
                                         <li><Link className="ti-dropdown-item" to="#">Separated link</Link></li>
                            </SpkDropdown>
                            <SpkDropdown Arrowicon={true} Toggletext="Danger" Customclass=""   arialexpand={false}
                               CustomToggleclass="ti-btn ti-btn-ghost-danger ti-dropdown-toggle !py-2 !shadow-none" >
                                         <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Another  action</Link></li>
                                         <li><Link className="ti-dropdown-item" to="#">Something else here</Link></li>
                                         <li><hr className="dropdown-divider" /></li>
                                         <li><Link className="ti-dropdown-item" to="#">Separated link</Link></li>
                            </SpkDropdown>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Non-Interactive Dropdown Items" reactCode={reactdropdown19}>
                        <p className=" mb-3">Use <code>.ti-dropdown-item-text.</code> to create non-interactive
                            dropdown items.</p>
                        <div className="bd-example">
                            <ul className="dropdown-menu border dark:border-defaultborder/10 shadow-sm">
                                <li><span className="!py-2 !px-4 !text-[0.875rem]">Dropdown item text</span>
                                </li>
                                <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                <li><Link className="ti-dropdown-item" to="#">Another action</Link>
                                </li>
                                <li><Link className="ti-dropdown-item" to="#">Something else
                                    here</Link>
                                </li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropdown Headers" reactCode={reactdropdown20}>
                        <p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of
                            actions in any dropdown menu.</p>
                        <div className="bd-example">
                            <ul className="dropdown-menu border dark:border-defaultborder/10 shadow-sm">
                                <li>
                                    <h6 className="dropdown-header">Dropdown header</h6>
                                </li>
                                <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                <li><Link className="ti-dropdown-item" to="#">Another action</Link>
                                </li>
                                <li><Link className="ti-dropdown-item" to="#">Something else
                                    here</Link></li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropdown Dividers" reactCode={reactdropdown21}>
                        <div className="bd-example">
                            <ul className="dropdown-menu border dark:border-defaultborder/10 shadow-sm">
                                <li><Link className="dropdown-header" to="#">Heading</Link></li>
                                <li><Link className="ti-dropdown-item" to="#">Action</Link></li>
                                <li><Link className="ti-dropdown-item" to="#">Another action</Link>
                                </li>
                                <li><Link className="ti-dropdown-item" to="#">Something else
                                    here</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="ti-dropdown-item" to="#">Separated link</Link>
                                </li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropdown Menu Text" reactCode={reactdropdown22}>
                        <div className="bd-example">
                            <div className="dropdown-menu border dark:border-defaultborder/10 shadow-sm p-6 text-[#8c9097] dark:text-white/50 text-[0.875rem] max-w-[200px]">
                                <p>
                                    Some example text that's free-flowing within the dropdown menu.
                                </p>
                                <p className="mb-0">
                                    And this is more example text.
                                </p>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
        </Fragment>
    )
}

export default Dropdowns