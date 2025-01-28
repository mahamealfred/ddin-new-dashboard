import  { FC } from 'react';
import { badgedata2, badgedata3, badgedata4, badgedata5, badgedata7, reactbadges1, reactbadges10, reactbadges11, reactbadges12, reactbadges13, reactbadges14, reactbadges15, reactbadges16, reactbadges17, reactbadges18, reactbadges19, reactbadges2, reactbadges3, reactbadges4, reactbadges5, reactbadges6, reactbadges7, reactbadges8, reactbadges9, reusebadges1, reusebadges12, reusebadges14, reusebadges15, reusebadges16, reusebadges17, reusebadges18, reusebadges19, reusebadges2, reusebadges3, reusebadges4, reusebadges5, reusebadges6, reusebadges7, reusebadges8, reusebadges9, } from '../../../components/prism-code/uielementsprism'
import { badges, gradientbadge, lightbadges, outlinebadges } from '../../../components/ui/data/ui-elements/badgesdata'
import Pageheader from '../../../components/common/page-header/pageheader'
import Showcode from '../../../components/common/showcode/showcode'
import face2 from "../../../assets/images/faces/2.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import SpkBadge from '../../../@spk/uielements/spk-badge';
import SpkButton from '../../../@spk/uielements/spk-button';

interface BadgeProps {}

const Badge: FC<BadgeProps> = () => {
    // const data = 'flex flex-wrap gap-2'
    return (
        <>
            <Pageheader currentpage="Badge" activepage="Ui Elements" mainpage="Badge" />
            
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Badges" reactCode={reactbadges1} reusableCode={reusebadges1} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                <SpkBadge variant="primary text-white" customClass="me-2">Primary</SpkBadge>
                                <SpkBadge variant="secondary text-white" customClass="me-2">Secondary</SpkBadge>
                                <SpkBadge variant="success text-white" customClass="me-2">Success</SpkBadge>
                                <SpkBadge variant="danger text-white" customClass="me-2">Danger</SpkBadge>
                                <SpkBadge variant="warning text-white" customClass="me-2">Warning</SpkBadge>
                                <SpkBadge variant="info text-white" customClass="me-2">Info</SpkBadge>
                                <SpkBadge variant="light text-dark" customClass="me-2">Light</SpkBadge>
                                <SpkBadge variant="black text-white" customClass="me-2">Dark</SpkBadge>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Pill badges" reactCode={reactbadges2} reusableCode={reusebadges2} dataCode={badgedata2} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                            {badges.map((idx) => (
                                <SpkBadge key={Math.random()} customClass="!rounded-full me-2" variant={idx.color}>{idx.class}</SpkBadge>
                            ))}
                        </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Light Badges" reactCode={reactbadges3}  reusableCode={reusebadges3} dataCode={badgedata3}  customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                {lightbadges.map((idx) => (
                                     <SpkBadge key={Math.random()} customClass="me-2" variant={idx.color}>{idx.class}</SpkBadge>
                                ))}
                           </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Light Pill Badges" reactCode={reactbadges4} reusableCode={reusebadges4} dataCode={badgedata4} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                {lightbadges.map((idx) => (
                                    <SpkBadge key={Math.random()} customClass="me-2 !rounded-full" variant={idx.color}>{idx.class}</SpkBadge>
                                ))}
                            </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Gradient Badges" reactCode={reactbadges5}  reusableCode={reusebadges5} dataCode={badgedata5} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                {gradientbadge.map((idx) => (
                                    <SpkBadge key={Math.random()} customClass="me-2" variant={`${idx.color}-gradient`}>{idx.class}</SpkBadge>
                                ))}
                            </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title=" Gradient Pill Badges" reactCode={reactbadges6} reusableCode={reusebadges6} dataCode={badgedata5} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                {gradientbadge.map((idx) => (
                                    <SpkBadge key={Math.random()} customClass="me-2 rounded-full" variant={`${idx.color}-gradient`}>{idx.class}</SpkBadge>
                                ))}
                           </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Outline Badges" reactCode={reactbadges7} reusableCode={reusebadges7} dataCode={badgedata7} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                {outlinebadges.map((idx) => (
                                    <SpkBadge key={Math.random()} customClass="me-2  mb-2 sm:mb-0 " variant={`outline-${idx.color}`}>{idx.class}</SpkBadge>
                                ))}
                            </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Outline Pill Badges" reactCode={reactbadges8}  reusableCode={reusebadges8} dataCode={badgedata7} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                {outlinebadges.map((idx) => (
                                    <SpkBadge key={Math.random()} customClass=" me-2  mb-2 sm:mb-0 !rounded-full" variant={`outline-${idx.color}`}>{idx.class}</SpkBadge>
                                ))}
                            </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Max width Badges" reactCode={reactbadges9}  reusableCode={reusebadges9} customCardBodyClass="flex flex-wrap gap-2">
                                <span
                                    className="max-w-40 truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-lg text-xs font-medium bg-primary/10 text-primary/80 me-2">This
                                    content is a little bit longer.</span>
                                <span
                                    className="max-w-40 truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-lg text-xs font-medium bg-secondary/10 text-secondary/80 me-2">This
                                    content is a little bit longer.</span>
                                <span
                                    className="max-w-40 truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-lg text-xs font-medium bg-success/10 text-success/80 me-2">This
                                    content is a little bit longer.</span>
                                <span
                                    className="max-w-40 truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-lg text-xs font-medium bg-danger/10 text-danger/80 me-2">This
                                    content is a little bit longer.</span>
                            </Showcode>
                     </div>
                    <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Badges with indicators" reactCode={reactbadges10}  customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                            <span
                                className="inline-flex items-center gap-x-1.5 py-1.5 px-3  mb-2 sm:mb-0  rounded-full text-xs font-medium bg-primary/10 text-primary me-2">
                                <span className="size-1.5 inline-block rounded-full bg-primary/80"></span>
                                Badge
                            </span>
                            <span
                                className="inline-flex items-center gap-x-1.5 py-1.5 px-3  mb-2 sm:mb-0  rounded-full text-xs font-medium bg-secondary/10 text-secondary me-2">
                                <span className="size-1.5 inline-block rounded-full bg-secondary/80"></span>
                                Badge
                            </span>
                            <span
                                className="inline-flex items-center gap-x-1.5 py-1.5 px-3  mb-2 sm:mb-0  rounded-full text-xs font-medium bg-warning/10 text-warning me-2">
                                <span className="size-1.5 inline-block rounded-full bg-warning/80"></span>
                                Badge
                            </span>
                            <span
                                className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-success/10 text-success me-2">
                                <span className="size-1.5 inline-block rounded-full bg-success/80"></span>
                                Badge
                            </span>
                            <span
                                className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-info/10 text-info me-2">
                                <span className="size-1.5 inline-block rounded-full bg-info/80"></span>
                                Badge
                            </span>
                            <span
                                className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-danger/10 text-danger me-2">
                                <span className="size-1.5 inline-block rounded-full bg-danger/80"></span>
                                Badge
                            </span>
                        </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Badges with icons" reactCode={reactbadges11} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                <span
                                    className="py-1 px-2 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 font-medium bg-primary/10 text-primary/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path
                                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                    Connected
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 font-medium bg-secondary/10 text-secondary/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path
                                            d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                        <path d="M12 9v4" />
                                        <path d="M12 17h.01" />
                                    </svg>
                                    Attention
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs  mb-2 sm:mb-0 font-medium bg-warning/10 text-warning/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" x2="12" y1="2" y2="6" />
                                        <line x1="12" x2="12" y1="18" y2="22" />
                                        <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
                                        <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
                                        <line x1="2" x2="6" y1="12" y2="12" />
                                        <line x1="18" x2="22" y1="12" y2="12" />
                                        <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
                                        <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
                                    </svg>
                                    Loading
                                </span>

                                <span
                                    className="py-1 px-2 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 bg-info/10 text-info/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                                        <line x1="12" x2="12" y1="2" y2="12" />
                                    </svg>
                                    Disabled
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 font-medium bg-success/10 text-success/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                        <polyline points="16 7 22 7 22 13" />
                                    </svg>
                                    14.5%
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 font-medium bg-danger/10 text-danger/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                                        <polyline points="16 17 22 17 22 11" />
                                    </svg>
                                    2%
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs mb-2 sm:mb-0 bg-primary/10 text-primary/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                        <polyline points="16 7 22 7 22 13" />
                                    </svg>
                                    37.3%
                                </span>

                                <span
                                    className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-secondary/10 text-secondary/80 rounded-full me-2">
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                                        <polyline points="16 17 22 17 22 11" />
                                    </svg>
                                    56%
                                </span>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Badges with remove button" reactCode={reactbadges12} reusableCode={reusebadges12} customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 mb-2 sm:mb-0 rounded-full text-xs font-medium bg-primary/10 text-primary/80 me-2">
                                    Badge
                                    <SpkButton buttontype="button" customClass="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-primary/20 focus:outline-none focus:bg-primary/20 focus:text-primary/50 dark:hover:bg-primary/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </SpkButton>
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-secondary/10 text-secondary/80 me-2">
                                    Badge
                                    <SpkButton buttontype="button" customClass="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-secondary/20 focus:outline-none focus:bg-secondary/20 focus:text-secondary/50 dark:hover:bg-secondary/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </SpkButton>
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-success/10 text-success/80 me-2">
                                    Badge
                                    <SpkButton buttontype="button" customClass="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-success/20 focus:outline-none focus:bg-success/20 focus:text-success/50 dark:hover:bg-success/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </SpkButton>
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-warning/10 text-warning/80 me-2">
                                    Badge
                                    <SpkButton buttontype="button" customClass="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-warning/20 focus:outline-none focus:bg-warning/20 focus:text-warning/50 dark:hover:bg-warning/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </SpkButton>
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 mb-2 sm:mb-0  rounded-full text-xs font-medium bg-info/10 text-info/80 me-2">
                                    Badge
                                    <SpkButton buttontype="button" customClass="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-info/20 focus:outline-none focus:bg-info/20 focus:text-info/50 dark:hover:bg-info/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </SpkButton>
                                </span>
                                <span
                                    className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2  rounded-full text-xs font-medium bg-danger/10 text-danger/80 me-2">
                                    Badge
                                    <SpkButton buttontype="button" customClass="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-danger/20 focus:outline-none focus:bg-danger/20 focus:text-danger/50 dark:hover:bg-danger/90">
                                        <span className="sr-only">Remove badge</span>
                                        <i className="ti ti-x size-3"></i>
                                    </SpkButton>
                                </span>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <Showcode title="Badges with avatars" reactCode={reactbadges13}  customCardBodyClass="flex flex-wrap gap-2 space-y-2">
                                <div
                                    className="inline-flex flex-nowrap items-center border  mb-2 sm:mb-0  border-defaultborder rounded-full p-1.5 pe-3 dark:border-white/10 me-2">
                                    <img className="me-1.5 mb-0 inline-block avatar avatar-xs avatar-rounded"
                                        src={face10} alt="Image Description"/>
                                    <div
                                        className="whitespace-nowrap text-sm font-medium text-defaulttextcolor dark:text-white">
                                        Christina
                                    </div>
                                </div>
                                <div
                                    className="inline-flex flex-nowrap items-center border mb-2 sm:mb-0  border-defaultborder rounded-full p-1.5 dark:border-white/10 me-2">
                                    <img className="me-1.5 mb-0 inline-block avatar avatar-xs avatar-rounded"
                                        src={face11} alt="Image Description"/>
                                    <div
                                        className="whitespace-nowrap text-sm font-medium text-defaulttextcolor dark:text-white">
                                        Mark
                                    </div>
                                </div>
                                <div
                                    className="inline-flex flex-nowrap items-center border mb-2 sm:mb-0  border-defaultborder rounded-full p-1.5 dark:border-white/10 me-2">
                                    <img className="me-1.5 mb-0 inline-block avatar avatar-xs avatar-rounded"
                                        src={face12} alt="Image Description"/>
                                    <div
                                        className="whitespace-nowrap text-sm font-medium text-defaulttextcolor dark:text-white">
                                        Bhamako
                                    </div>
                                </div>
                                <div
                                    className="inline-flex flex-nowrap items-center border mb-2 sm:mb-0  border-defaultborder rounded-full p-1.5 dark:border-white/10 me-2">
                                    <img className="me-1.5 mb-0 inline-block avatar avatar-xs avatar-rounded"
                                        src={face13} alt="Image Description"/>
                                    <div
                                        className="whitespace-nowrap text-sm font-medium text-defaulttextcolor dark:text-white">
                                        Wicky cross
                                    </div>
                                </div>
                                <div
                                    className="inline-flex flex-nowrap items-center border border-defaultborder rounded-full p-1.5 dark:border-white/10 me-2">
                                    <img className="me-1.5 mb-0 inline-block avatar avatar-xs avatar-rounded"
                                        src={face14} alt="Image Description"/>
                                    <div
                                        className="whitespace-nowrap text-sm font-medium text-defaulttextcolor dark:text-white">
                                        Brodus
                                    </div>
                                </div>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <Showcode title=" Badges with animation ping" reactCode={reactbadges14} reusableCode={reusebadges14} customCardBodyClass="!flex flex-wrap gap-2">
                                <SpkButton buttontype="button" customClass="m-1 ms-0 relative flex justify-center items-center size-[35px] text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-light dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m5 11 4-7" />
                                            <path d="m19 11-4-7" />
                                            <path d="M2 11h20" />
                                            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                                            <path d="m9 11 1 9" />
                                            <path d="M4.5 15.5h15" />
                                            <path d="m15 11-1 9" />
                                        </svg>
                                        <span className="flex absolute top-0 end-0 size-3 -mt-1.5 -me-1.5">
                                            <span
                                                className="animate-ping absolute inline-flex size-full rounded-full bg-danger/40 opacity-75 dark:bg-danger/60"></span>
                                            <span className="relative inline-flex rounded-full size-3 bg-danger/50"></span>
                                        </span>
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="m-1 ms-0 relative py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-light dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    Notification
                                    <span className="flex absolute top-0 end-0 -mt-2 -me-2">
                                        <span
                                            className="animate-ping absolute inline-flex size-full rounded-full bg-danger/40 opacity-75"></span>
                                        <span
                                            className="relative inline-flex text-xs bg-danger/50 text-white rounded-full py-0.5 px-1.5">
                                            9+
                                        </span>
                                    </span>
                                </SpkButton>
                        </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Buttons With Badges" reactCode={reactbadges15} reusableCode={reusebadges15} customCardBodyClass="flex flex-wrap gap-2">
                                    <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white my-1 me-2">
                                     Notifications <SpkBadge customClass="ms-2" variant="secondary">4</SpkBadge>
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn bg-secondary text-white my-1 me-2">
                                        Notifications <SpkBadge customClass="ms-2" variant="primary">7</SpkBadge>
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn bg-success text-white my-1 me-2">
                                        Notifications <SpkBadge customClass="ms-2" variant="danger">12</SpkBadge>
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn bg-info text-white my-1 me-2">
                                        Notifications <SpkBadge customClass="ms-2" variant="warning">32</SpkBadge>
                                    </SpkButton>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Outline Button Badges" reactCode={reactbadges16} reusableCode={reusebadges16} customCardBodyClass="flex flex-wrap gap-2">
                                <SpkButton buttontype="button" customClass="ti-btn my-1 me-2" variant="outline-primary">
                                    Notifications <SpkBadge customClass="ms-2 text-white" variant="primary">4</SpkBadge>
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="ti-btn my-1 me-2" variant="outline-secondary">
                                    Notifications <SpkBadge customClass="ms-2 text-white" variant="secondary">7</SpkBadge>
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="ti-btn my-1 me-2" variant="outline-success">
                                    Notifications <SpkBadge customClass="ms-2 text-white" variant="success">12</SpkBadge>
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="ti-btn my-1 me-2" variant="outline-info">
                                    Notifications <SpkBadge customClass="ms-2 text-white" variant="info">32</SpkBadge>
                                </SpkButton>
                            </Showcode>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Headings" reactCode={reactbadges17} reusableCode={reusebadges17} customCardBodyClass="">
                                <h1 className="text-[2.5rem]">Example heading <SpkBadge customClass="text-white" variant="primary">New</SpkBadge></h1>
                                <h2 className="text-[2rem]">Example heading <SpkBadge customClass="text-white" variant="primary">New</SpkBadge></h2>
                                <h3 className="text-[1.75rem]">Example heading <SpkBadge customClass="text-white" variant="primary">New</SpkBadge></h3>
                                <h4 className="text-[1.5rem]">Example heading <SpkBadge customClass="text-white" variant="primary">New</SpkBadge></h4>
                                <h5 className="text-[1.25rem]">Example heading <SpkBadge customClass="text-white" variant="primary">New</SpkBadge></h5>
                                <h6 className="text-[1rem]">Example heading <SpkBadge customClass="text-white" variant="primary">New</SpkBadge></h6>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="xl:col-span-12 col-span-12">
                                    <Showcode title="Positioned Badges" reactCode={reactbadges18}  reusableCode={reusebadges18} customCardBodyClass="!flex items-center flex-wrap gap-5">
                                        <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white relative" variant="">
                                            Inbox
                                            <span className="absolute -top-2 start-[60%] translate-middle  badge !rounded-full bg-danger">
                                                99+ <span className="hidden">unread messages</span>
                                            </span> 
                                        </SpkButton>
                                        <SpkButton buttontype="button" customClass="ti-btn bg-secondary text-white relative" variant="">
                                            Profile
                                            <span
                                                className="absolute -top-2 start-[80%] translate-middle p-2 bg-success border border-light !rounded-full">
                                                <span className="hidden">New alerts</span>
                                            </span>
                                        </SpkButton>
                                        <span className="avatar relative">
                                            <img src={face2} alt="img" className="!rounded-md" />
                                            <span
                                                className="absolute -top-2 start-[80%] translate-middle p-1 bg-success border border-light !rounded-full">
                                                <span className="hidden">New alerts</span>
                                            </span>
                                        </span>
                                        <span className="avatar avatar-rounded relative">
                                            <img src={face15} alt="img" />
                                            <span
                                                className="absolute -top-2 start-[80%] translate-middle p-1 bg-success border border-light !rounded-full">
                                                <span className="hidden">New alerts</span>
                                            </span>
                                        </span>
                                        <span className="avatar avatar-rounded relative">
                                            <img src={face10} alt="img" />
                                            <span
                                                className="absolute -top-2 start-[60%] translate-middle badge bg-secondary !rounded-full shadow-lg text-white">1000+
                                                <span className="hidden">New alerts</span>
                                            </span>
                                        </span>
                                    </Showcode>
                                    <Showcode title="Positioned Badges" reactCode={reactbadges19} reusableCode={reusebadges19} customCardBodyClass="">
                                        <div className="flex items-center gap-5 flex-wrap">
                                            <div>
                                                <SpkBadge customClass="!font-semibold !text-[.9375rem] inline-flex items-center" variant="outline-secondary">
                                                    <i className="ti ti-flame me-1"></i>Hot
                                                </SpkBadge>
                                            </div>
                                            <div>
                                                <span className="relative">
                                                    <svg className="fill-textmuted dark:fill-textmuted/50 w-8 h-8 text-[2rem]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
                                                    <SpkBadge customClass="!rounded-full text-white absolute -end-2 top-0" variant="success">14</SpkBadge>
                                                </span>
                                            </div>
                                            <div>
                                                <SpkBadge customClass="border dark:border-light text-defaulttextcolor font-semibold font-[.7rem]" variant="light"><i className="fe fe-eye me-2 inline-block"></i>13.2k</SpkBadge>
                                            </div>
                                            <div>
                                                <span className="text-badge relative">
                                                    <span className="text text-lg">Inbox</span>
                                                    <SpkBadge customClass="!rounded-full text-white" variant="success">32</SpkBadge>
                                                </span>
                                            </div>
                                        </div>
                                    </Showcode>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Badge