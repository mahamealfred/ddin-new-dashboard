import  {FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader'
import { timelines } from '../../../components/ui/data/pages/timelinedata';
import SpkTimeline from '../../../@spk/spk-pages/timeline/spktimeline';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import SpkButton from '../../../@spk/uielements/spk-button';

interface TimelineProps {}

const Timeline: FC<TimelineProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Timeline" activepage="Pages" mainpage="Timeline" />
            
                <div className="container">
                    <ul className="timeline list-none text-[0.813rem] text-defaulttextcolor">
                        {timelines.map((idx)=>(
                            <li key={Math.random()}>
                                <div className="timeline-time text-end">
                                <span className="date">{idx.day}</span>
                                <span className="time inline-block">{idx.time}</span>
                                </div>
                                <div className="timeline-icon">
                                <a aria-label="anchor" href="#"></a>
                                </div>
                                <div className="timeline-body">
                                    <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                        <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                            <img alt="avatar" src={idx.img} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center">
                                                <div className="sm:mt-0 mt-2">
                                                    <p className="mb-0 text-[.875rem] font-semibold">{idx.name}</p>
                                                    <div dangerouslySetInnerHTML={{ __html: idx.description }}></div>
                                                </div>
                                                <div className="ms-auto">
                                                    <SpkBadge customClass="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                         {idx.created_at}
                                                    </SpkBadge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                         ))}
                     </ul>
                     <div className="timeline-loadmore-container text-center">
                        <SpkButton buttontype="button" variant="info" customClass="ti-btn ti-btn-loader">
                            Loading
                            <span className="ti-spinner !h-4 !w-4" role="status"></span>
                        </SpkButton>
                     </div>
                 </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-4">
                        <SpkTimeline title='Basic Timeline'  Date={true}/>
                    </div>
                    <div className="col-span-12 xl:col-span-4">
                        <SpkTimeline Collapsable={true} title='Collapsable Timeline' Date={true} />
                    </div>
                    <div className="col-span-12 xl:col-span-4">
                         <SpkTimeline title='Hoverable Timeline' Date={true} Customhoverclass="relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-6">
                    <SpkTimeline title='Timeline with Time' Time={true} />
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                    <SpkTimeline title='Timeline with Time , Icons and avatars' Date={true} Imgtag={true} Avatar={true} SVG={true} />
                    </div>
                </div>
        </Fragment>
    )
}

export default Timeline