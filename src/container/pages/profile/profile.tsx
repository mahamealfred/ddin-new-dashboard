import  { FC, Fragment } from 'react'
import { Followersdata, Friendsdata, LightboxGallery, Personalinfodata, RecentPostsdata, Skillsdata, Suggestionsdata, activity, postsdata } from '../../../components/ui/data/pages/profiledata'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import face9 from "../../../assets/images/faces/9.jpg";
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
import SpkBadge from '../../../@spk/uielements/spk-badge';
import Spkfriendscard from '../../../@spk/spk-pages/profile/spkfriendscard';
import Spkprofiletimeline from '../../../@spk/spk-pages/profile/spkprofiletimeline';
import SpkButton from '../../../@spk/uielements/spk-button';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Profile" activepage="Pages" mainpage="Profile" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-4 xl:col-span-12 col-span-12">
                    <div className="box overflow-hidden">
                        <div className="box-body !p-0">
                            <div className="sm:flex items-start p-6      main-profile-cover">
                                <div>
                                    <span className="avatar avatar-xxl avatar-rounded online me-4">
                                        <img src={face9} alt="" />
                                    </span>
                                </div>
                                <div className="flex-grow main-profile-info">
                                    <div className="flex items-center !justify-between">
                                        <h6 className="font-semibold mb-1 text-white text-[1rem]">Json Taylor</h6>
                                        <SpkButton buttontype="button" variant="" customClass="ti-btn ti-btn-light !font-medium !gap-0"><i className="ri-add-line me-1 align-middle inline-block"></i>Follow</SpkButton>
                                    </div>
                                    <p className="mb-1 !text-white  opacity-[0.7]">Chief Executive Officer (C.E.O)</p>
                                    <p className="text-[0.75rem] text-white mb-6 opacity-[0.5]">
                                        <span className="me-4 inline-flex"><i className="ri-building-line me-1 align-middle"></i>Georgia</span>
                                        <span className="inline-flex"><i className="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                                    </p>
                                    <div className="flex mb-0">
                                        <div className="me-6">
                                            <p className="font-bold text-[1.25rem] text-white text-shadow mb-0">113</p>
                                            <p className="mb-0 text-[.6875rem] opacity-[0.5] text-white">Projects</p>
                                        </div>
                                        <div className="me-6">
                                            <p className="font-bold text-[1.25rem] text-white text-shadow mb-0">12.2k</p>
                                            <p className="mb-0 text-[.6875rem] opacity-[0.5] text-white">Followers</p>
                                        </div>
                                        <div className="me-6">
                                            <p className="font-bold text-[1.25rem] text-white text-shadow mb-0">128</p>
                                            <p className="mb-0 text-[.6875rem] opacity-[0.5] text-white">Following</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-b border-dashed dark:border-defaultborder/10">
                                <div className="mb-6">
                                    <p className="text-[.9375rem] mb-2 font-semibold">Professional Bio :</p>
                                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 opacity-[0.7] mb-0">
                                        I am <b className="text-defaulttextcolor">Sonya Taylor,</b> here by conclude that,i am the founder and managing director of the prestigeous company name laugh at all and acts as the cheif executieve officer of the company.
                                    </p>
                                </div>
                                <div className="mb-0">
                                    <p className="text-[.9375rem] mb-2 font-semibold">Links :</p>
                                    <div className="mb-0">
                                        <p className="mb-1">
                                            <Link to="https://www.spruko.com/" target="_blank" className="text-primary"><u>https://www.spruko.com/</u></Link>
                                        </p>
                                        <p className="mb-0">
                                            <Link to="https://themeforest.net/user/spruko/portfolio" target="_blank" className="text-primary"><u>https://themeforest.net/user/ spruko/portfolio</u></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-b border-dashed dark:border-defaultborder/10">
                                <p className="text-[.9375rem] mb-2 me-6 font-semibold">Contact Information :</p>
                                <div className="text-[#8c9097] dark:text-white/50">
                                    <p className="mb-2">
                                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-[#8c9097] dark:text-white/50">
                                            <i className="ri-mail-line align-middle text-[.875rem] text-[#8c9097] dark:text-white/50"></i>
                                        </span>
                                        sonyataylor2531@gmail.com
                                    </p>
                                    <p className="mb-2">
                                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-[#8c9097] dark:text-white/50">
                                            <i className="ri-phone-line align-middle text-[.875rem] text-[#8c9097] dark:text-white/50"></i>
                                        </span>
                                        +(555) 555-1234
                                    </p>
                                    <p className="mb-0">
                                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-[#8c9097] dark:text-white/50">
                                            <i className="ri-map-pin-line align-middle text-[.875rem] text-[#8c9097] dark:text-white/50"></i>
                                        </span>
                                        MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 border-b dark:border-defaultborder/10 border-dashed sm:flex items-center">
                                <p className="text-[.9375rem] mb-2 me-6 font-semibold">Social Networks :</p>
                                <div className="btn-list mb-0">
                                    <SpkButton Label="button" buttontype="button" variant="primary" Size="sm" customClass="ti-btn text-primary me-[.375rem] mb-1">
                                        <i className="ri-facebook-line font-semibold"></i>
                                    </SpkButton>
                                    <SpkButton Label="button" buttontype="button" variant="secondary" Size="sm" customClass="ti-btn me-[.375rem] mb-1">
                                        <i className="ri-twitter-x-line font-semibold"></i>
                                    </SpkButton>
                                    <SpkButton Label="button" buttontype="button" variant="warning" Size="sm" customClass="ti-btn me-[.375rem] mb-1">
                                        <i className="ri-instagram-line font-semibold"></i>
                                    </SpkButton>
                                    <SpkButton Label="button" buttontype="button" variant="success" Size="sm" customClass="ti-btn me-[.375rem] mb-1">
                                        <i className="ri-github-line font-semibold"></i>
                                    </SpkButton>
                                    <SpkButton Label="button" buttontype="button" variant="danger" Size="sm" customClass="ti-btn me-[.375rem] mb-1">
                                        <i className="ri-youtube-line font-semibold"></i>
                                    </SpkButton>
                                </div>
                            </div>
                            <div className="p-6 border-b dark:border-defaultborder/10 border-dashed">
                                <p className="text-[.9375rem] mb-2 me-6 font-semibold">Skills :</p>
                                <div>
                                    {Skillsdata.map((idx)=>(

                                    <Link to="#"  key={Math.random()}>
                                        <SpkBadge variant="light" customClass="text-[#8c9097] dark:text-white/50 m-1">{idx.text}</SpkBadge>
                                    </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-[.9375rem] mb-2 me-6 font-semibold">Followers :</p>
                                <ul className="list-group">
                                    {Followersdata.map((idx)=>(

                                    <li className="list-group-item" key={Math.random()}>
                                        <div className="sm:flex items-start">
                                            <span className="avatar avatar-sm">
                                                <img src={idx.src} alt="img" className="rounded-md" />
                                            </span>
                                            <div className="sm:ms-2 ms-0 sm:mt-0 mt-1 font-semibold flex-grow">
                                                <p className="mb-0 leading-none">{idx.name}</p>
                                                <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50 opacity-[0.7]">{idx.mail}</span>
                                            </div>
                                            <SpkButton buttontype="button" variant="" customClass="ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem]">Follow</SpkButton>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-8 xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body !p-0">
                                    <div className="!p-4 border-b dark:border-defaultborder/10 border-dashed md:flex items-center justify-between">
                                        <nav className="-mb-0.5 sm:flex md:space-x-4 rtl:space-x-reverse pb-2" role='tablist'>
                                            <Link className="w-full sm:w-auto flex active hs-tab-active:font-semibold  hs-tab-active:text-white hs-tab-active:bg-primary rounded-md py-2 px-4 text-primary text-sm" to="#"  id="activity-tab" data-hs-tab="#activity-tab-pane" aria-controls="activity-tab-pane">
                                                <i className="ri-gift-line  align-middle inline-block me-1"></i>Activity
                                            </Link>
                                            <Link className="w-full sm:w-auto flex hs-tab-active:font-semibold  hs-tab-active:text-white hs-tab-active:bg-primary rounded-md  py-2 px-4 text-primary text-sm" to="#"  id="posts-tab" data-hs-tab="#posts-tab-pane" aria-controls="posts-tab-pane">
                                                <i className="ri-bill-line me-1 align-middle inline-block"></i>Posts
                                            </Link>
                                            <Link className="w-full sm:w-auto flex hs-tab-active:font-semibold  hs-tab-active:text-white hs-tab-active:bg-primary rounded-md  py-2 px-4 text-primary text-sm" to="#"  id="followers-tab" data-hs-tab="#followers-tab-pane" aria-controls="followers-tab-pane">
                                                <i className="ri-money-dollar-box-line me-1 align-middle inline-block"></i>Friends
                                            </Link>
                                            <Link className="w-full sm:w-auto flex hs-tab-active:font-semibold  hs-tab-active:text-white hs-tab-active:bg-primary rounded-md  py-2 px-4 text-primary text-sm" to="#"  id="gallery-tab" data-hs-tab="#gallery-tab-pane" aria-controls="gallery-tab-pane">
                                                <i className="ri-exchange-box-line me-1 align-middle inline-block"></i>Gallery
                                            </Link>
                                        </nav>
                                        <div>
                                            <p className="font-semibold mb-2">Profile 60% completed - <Link to="#"  className="text-primary text-[0.75rem]">Finish now</Link></p>
                                            <div className="progress progress-xs progress-animate">
                                                <div className="progress-bar bg-primary w-[60%]" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="!p-4">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane show active fade !p-0 !border-0" id="activity-tab-pane"
                                                role="tabpanel" aria-labelledby="activity-tab">
                                                <ul className="list-none profile-timeline">
                                                    {activity.map((idx)=>(
                                                        <li key={Math.random()}>
                                                          <Spkprofiletimeline activity={idx} />  
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="tab-pane fade !p-0 !border-0 hidden !rounded-md" id="posts-tab-pane"
                                                role="tabpanel" aria-labelledby="posts-tab">
                                                <ul className="list-group !rounded-md">
                                                    <li className="list-group-item">
                                                        <div className="sm:flex items-center leading-none">
                                                            <div className="me-4">
                                                                <span className="avatar avatar-md avatar-rounded">
                                                                    <img src={face9} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="flex">
                                                                    <input type="text" className="form-control !rounded-e-none !w-full" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" />
                                                                    <SpkButton Label="button" variant="light" customClass="ti-btn !rounded-none !mb-0" buttontype="button"><i className="bi bi-emoji-smile"></i></SpkButton>
                                                                    <SpkButton Label="button" variant="light" customClass="ti-btn !rounded-none !mb-0" buttontype="button"><i className="bi bi-paperclip"></i></SpkButton>
                                                                    <SpkButton Label="button" variant="light" customClass="ti-btn !rounded-none !mb-0" buttontype="button"><i className="bi bi-camera"></i></SpkButton>
                                                                    <SpkButton customClass="ti-btn bg-primary !mb-0 !rounded-s-none text-white" buttontype="button">Post</SpkButton>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item" id="profile-posts-scroll">
                                                    <PerfectScrollbar>
                                                        <div className="grid grid-cols-12 gap-4">
                                                        {postsdata.map((post) => (
                                                        <div key={post.id} className="xxl:col-span-12 xl:col-span-12 lg:col-span-12 md:col-span-12 col-span-12">
                                                        <div className="rounded border dark:border-defaultborder/10">
                                                            <div className="p-4 flex items-start flex-wrap">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={post.img} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <p className="mb-1 font-semibold leading-none">{post.username == "sonya taylor" ? 'You' : post.username}</p>
                                                                <p className="text-[.6875rem] mb-2 text-[#8c9097] dark:text-white/50">{post.date}</p>
                                                                 <div dangerouslySetInnerHTML={{ __html: post.message }}></div>
                                                                {Array.isArray(post.media) && post.media.length > 0 &&  (
                                                                <p className="mb-4 profile-post-link">
                                                                    {post.media.map((media:any)=>(<a href="#" className="text-[0.75rem] text-primary" key={Math.random()}>
                                                                            <span className="avatar avatar-md me-1" >
                                                                                <img src={media.img} alt="media.name"/>
                                                                            </span>
                                                                        </a>
                                                                    ))}

                                                                </p>
                                                                )}
                                                                <div className="flex items-center justify-between md:mb-0 mb-2">
                                                                <div>
                                                                    <div className="btn-list">
                                                                    <SpkButton buttontype="button" variant="primary" customClass="ti-btn !me-[.375rem] !py-1 !px-2 !text-[0.75rem] !font-medium btn-wave">
                                                                        Comment
                                                                    </SpkButton>
                                                                    <SpkButton Label="button" type="button" variant="success" Size="sm" customClass="ti-btn !me-[.375rem]">
                                                                        <i className="ri-thumb-up-line"></i>
                                                                    </SpkButton>
                                                                    <SpkButton Label="button" type="button" variant="danger" Size="sm" customClass="ti-btn">
                                                                        <i className="ri-share-line"></i>
                                                                    </SpkButton>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                            <div className="flex items-start">
                                                                <div>
                                                                    <SpkBadge variant={`${post.typeBg}/10`} customClass={`me-2 text-${post.typeBg}`}>{post.type}</SpkBadge>
                                                                </div>
                                                                <div>
                                                                <SpkDropdown Icon={true} Linktag={false} arialexpand={false} Customclass="" IconClass="ti ti-dots-vertical" CustomToggleclass="ti-btn ti-btn-sm ti-btn-light">
                                                                    <li>
                                                                    <Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">
                                                                        Delete
                                                                    </Link>
                                                                    </li>
                                                                    <li>
                                                                    <Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">
                                                                        Hide
                                                                    </Link>
                                                                    </li>
                                                                    <li>
                                                                    <Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">
                                                                        Edit
                                                                    </Link>
                                                                    </li>
                                                                </SpkDropdown>
                                                                </div>
                                                            </div>
                                                               {post.avatarList.length ? 
                                                                    <div className="avatar-list-stacked block  mt-4 text-end">
                                                                        {post.avatarList.map((avatar)=>(
                                                                            <span className="avatar avatar-xs avatar-rounded" key={Math.random()}>
                                                                                <img src={avatar.img} alt={avatar.name}/>
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                :""}
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    ))}
                                                        </div>
                                                        </PerfectScrollbar>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="text-center">
                                                            <SpkButton buttontype="button" variant="primary" customClass="ti-btn !font-medium">Show All</SpkButton>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tab-pane fade !p-0 !border-0 hidden" id="followers-tab-pane"
                                                role="tabpanel" aria-labelledby="followers-tab">
                                                <div className="grid grid-cols-12 sm:gap-x-6">
                                                    {Friendsdata.map((idx) =>(
                                                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12" key={Math.random()}>
                                                            <Spkfriendscard card={idx} />
                                                        </div>
                                                    ))}
                                                    <div className="col-span-12">
                                                        <div className="text-center !mt-4">
                                                            <SpkButton buttontype="button" variant="primary" customClass="ti-btn !font-medium btn-wave">Show All</SpkButton>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade !p-0 !border-0 hidden" id="gallery-tab-pane"
                                                role="tabpanel" aria-labelledby="gallery-tab">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                    <LightboxGallery/>
                                                    <div className="col-span-12">
                                                        <div className="text-center mt-6">
                                                            <SpkButton buttontype="button" variant="primary" customClass="ti-btn !font-medium">Show All</SpkButton>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Personal Info
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="list-group">
                                        {Personalinfodata.map((idx)=>(

                                        <li className="list-group-item" key={Math.random()}>
                                            <div className="flex flex-wrap items-center">
                                                <div className="me-2 font-semibold">
                                                    {idx.text1}
                                                </div>
                                                <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">{idx.text2}</span>
                                            </div>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header flex justify-between">
                                    <div className="box-title">
                                        Recent Posts
                                    </div>
                                    <div>
                                        <SpkBadge customClass="bg-primary/10 text-primary">Today</SpkBadge>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="list-group">
                                        {RecentPostsdata.map((idx)=>(

                                        <li className="list-group-item" key={Math.random()}>
                                            <Link to="#" >
                                                <div className="flex flex-wrap items-center">
                                                    <span className="avatar avatar-md me-4 !mb-0">
                                                        <img src={idx.src} className="img-fluid !rounded-md" alt="..." />
                                                    </span>
                                                    <div className="flex-grow">
                                                        <p className="font-semibold mb-0">{idx.animalname}</p>
                                                        <p className="mb-0 text-[0.75rem] profile-recent-posts text-truncate text-[#8c9097] dark:text-white/50">
                                                            {idx.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header flex justify-between">
                                    <div className="box-title">
                                        Suggestions
                                    </div>
                                    <div>
                                        <SpkButton buttontype="button" variant="" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-success">View All</SpkButton>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="list-group">
                                        {Suggestionsdata.map((idx) =>(
                                        <li className="list-group-item" key={Math.random()}>
                                            <div className="flex items-center justify-between">
                                                <div className="font-semibold flex items-center">
                                                    <span className="avatar avatar-xs me-2">
                                                        <img src={idx.src} alt="" />
                                                    </span>{idx.name}
                                                </div>
                                                <div>
                                                    <SpkButton variant="primary" Label="button" buttontype="button" Size="sm" customClass="ti-btn !mb-0">
                                                        <i className="ri-add-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        ))}
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

export default Profile