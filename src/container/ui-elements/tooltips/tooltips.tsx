import  { FC,Fragment } from 'react'
import {  reacttooltip6, reusetooltip6, reacttooltip5, reusetooltip5, reacttooltip4, reusetooltip4, reacttooltip3, reusetooltip3, tooltipdata2, reacttooltip2, reusetooltip2, reacttooltip1, reusetooltip1 } from '../../../components/prism-code/utilities-prism'
import { colortooltip } from '../../../components/ui/data/ui-elements/tooltipdata'
import Pageheader from '../../../components/common/page-header/pageheader'
import Showcode from '../../../components/common/showcode/showcode'
import { Link } from 'react-router-dom'
import face12 from "../../../assets/images/faces/12.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import SpkOverlay from '../../../@spk/uielements/spk-overlay'
import SpkButton from '../../../@spk/uielements/spk-button'
interface TooltipsProps {}

const Tooltips: FC<TooltipsProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Tooltips" activepage="Ui Elements" mainpage="Tooltips" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Tooltip Directions" reactCode={reacttooltip1} reusableCode={reusetooltip1}>
                        <div className="ti-btn-list">
                             <SpkOverlay customClass="">
                                <SpkButton buttontype="button" customClass="ti-btn hs-tooltip-toggle me-1" variant="primary-full">
                                        Tooltip on top <span className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                            Tooltip on top
                                        </span>
                                </SpkButton>
                            </SpkOverlay>
                            <SpkOverlay customClass="[--placement:right]">
                                <SpkButton buttontype="button" customClass="ti-btn hs-tooltip-toggle me-1" variant="primary-full">
                                    Tooltip on right <span className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                        Tooltip on right
                                        </span>
                                </SpkButton>
                            </SpkOverlay>
                            <SpkOverlay customClass="[--placement:bottom]">
                                <SpkButton buttontype="button" customClass="ti-btn hs-tooltip-toggle me-1" variant="primary-full">
                                    Tooltip on bottom <span className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                        Tooltip on bottom
                                        </span>
                                </SpkButton>
                            </SpkOverlay>
                                <SpkOverlay customClass="[--placement:left]">
                                <SpkButton buttontype="button" customClass="ti-btn hs-tooltip-toggle me-1" variant="primary-full">
                                    Tooltip on left <span className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                        Tooltip on left
                                        </span>
                                </SpkButton>
                            </SpkOverlay>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Colored Tooltips" reactCode={reacttooltip2} dataCode={tooltipdata2} reusableCode={reusetooltip2}>
                        <div className="ti-btn-list">
                            {colortooltip.map((idx) => (
                                 <SpkOverlay key={Math.random()} customClass={idx.class}>
                                    <SpkButton buttontype="button" customClass="ti-btn hs-tooltip-toggle me-1" variant={idx.color}>
                                        {idx.text} 
                                        <span className={`hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-${idx.class1}  !text-xs !font-medium !text-${idx.class2} shadow-sm dark:bg-slate-700`} role="tooltip">
                                            {idx.text}
                                        </span>
                                    </SpkButton>
                                </SpkOverlay>
                            ))}
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Tooltips on Links" reactCode={reacttooltip3} reusableCode={reusetooltip3}>
                        <SpkOverlay  customClass="[--placement:top]">
                                <p className="text-muted mb-0">
                                    Hover on the link to view the <Link aria-label="anchor" to="#"

                                        title="Link Tooltip"></Link>
                                    <span className="hs-tooltip-toggle !text-primary">
                                        Tooltip
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-1 !bg-primary !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Link Tooltip
                                        </span>
                                    </span>
                                </p>
                            </SpkOverlay>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="With an Svg's" reactCode={reacttooltip4}  reusableCode={reusetooltip4} customCardBodyClass="flex">
                        <SpkOverlay  customClass="[--placement:top]">
                            <SpkButton buttontype="button" customClass="hs-tooltip-toggle me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                                </svg>
                                <span className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Home
                                </span>
                            </SpkButton>
                        </SpkOverlay>
                        <SpkOverlay  customClass="[--placement:top]">
                            <SpkButton buttontype="button" customClass="hs-tooltip-toggle me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path   d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                                </svg>
                                <span className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-secondary !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Message
                                </span>
                            </SpkButton>
                        </SpkOverlay>
                        <SpkOverlay  customClass="[--placement:top]">
                            <SpkButton buttontype="button" customClass="hs-tooltip-toggle me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-warning" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                    <g>
                                        <rect fill="none" height="24" width="24" />
                                    </g>
                                    <g>
                                    <path d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z" />
                                    </g>
                                </svg>
                                <span
                                    className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-warning !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                    role="tooltip">
                                    Add User
                                </span>
                            </SpkButton>
                        </SpkOverlay>
                        <SpkOverlay  customClass="[--placement:top]">
                            <SpkButton buttontype="button" customClass="hs-tooltip-toggle me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-info" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path   d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" />
                                </svg>
                                <span className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-info !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Send File
                                </span>
                            </SpkButton>
                        </SpkOverlay>
                        <SpkOverlay  customClass="[--placement:top]">
                            <SpkButton buttontype="button" customClass="hs-tooltip-toggle me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-success" height="24px"  viewBox="0 0 24 24" width="24px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                </svg>
                                <span className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-success !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Action
                                </span>
                            </SpkButton>
                        </SpkOverlay>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Disabled Elements" reactCode={reacttooltip5} reusableCode={reusetooltip5}>
                      <SpkOverlay  customClass="">
                            <SpkButton buttontype="button" customClass="hs-tooltip-toggle ti-btn opacity-[0.6]" variant="primary-full">
                                Disabled button
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Disabled Tooltip
                                </span>
                            </SpkButton>
                        </SpkOverlay>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Tooltip For Images" reactCode={reacttooltip6} reusableCode={reusetooltip6}>
                            <SpkOverlay  customClass="">
                                <SpkButton buttontype="button" customClass="hs-tooltip-toggle avatar avatar-md me-2 online avatar-rounded">
                                    <img src={face12} alt="img" />
                                </SpkButton>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content !py-1 !px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Alex Carey
                                </span>
                            </SpkOverlay>
                            <SpkOverlay  customClass="">
                                <SpkButton buttontype="button" customClass="hs-tooltip-toggle avatar avatar-lg me-2 online avatar-rounded">
                                    <img src={face3} alt="img" />
                                </SpkButton>
                                <span className="hs-tooltip-content  ti-main-tooltip-content !py-1 !px-1 !bg-primary !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                    Marina Kai
                                </span>
                            </SpkOverlay>
                            <SpkOverlay  customClass="">
                                <SpkButton buttontype="button" customClass="hs-tooltip-toggle avatar avatar-xl me-2 offline avatar-rounded">
                                    <img src={face15} alt="img" />
                                </SpkButton>
                                <span className="hs-tooltip-content  ti-main-tooltip-content !py-1 !px-1 !bg-primary !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                    Marina Kai
                                </span>
                            </SpkOverlay>
                    </Showcode>
                </div>
            </div>
        </Fragment>
    )
}

export default Tooltips