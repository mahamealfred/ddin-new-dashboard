import  { FC, useState } from 'react';
import { Backgroundcards, Bordercarddata, Cardgroupdata, Gridcards } from '../../../components/ui/data/ui-elements/cardsdata'
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import media22 from "../../../assets/images/media/media-22.jpg";
import media23 from "../../../assets/images/media/media-23.jpg";
import media24 from "../../../assets/images/media/media-24.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import media29 from "../../../assets/images/media/media-29.jpg";
import media28 from "../../../assets/images/media/media-28.jpg";
import media30 from "../../../assets/images/media/media-30.jpg";
import media31 from "../../../assets/images/media/media-31.jpg";
import media32 from "../../../assets/images/media/media-32.jpg";
import media33 from "../../../assets/images/media/media-33.jpg";
import media35 from "../../../assets/images/media/media-35.jpg";
import media36 from "../../../assets/images/media/media-36.jpg";
import media34 from "../../../assets/images/media/media-34.jpg";
import media37 from "../../../assets/images/media/media-37.jpg";
import media38 from "../../../assets/images/media/media-38.jpg";
import media39 from "../../../assets/images/media/media-39.jpg";
import media4 from "../../../assets/images/media/media-4.jpg";
import media9 from "../../../assets/images/media/media-9.jpg";
import media15 from "../../../assets/images/media/media-15.jpg";
import media47 from "../../../assets/images/media/media-47.jpg";
import media25 from "../../../assets/images/media/media-25.jpg";
import media26 from "../../../assets/images/media/media-26.jpg";
import media27 from "../../../assets/images/media/media-27.jpg";
import Spkalignmentcards from '../../../@spk/uielements/cards/spkalignmentcards';
import Spkbgcards from '../../../@spk/uielements/cards/spkbgcards';
import Spkborderedcards from '../../../@spk/uielements/cards/spkborderedcards';
import SpkCollapsecard from '../../../@spk/uielements/cards/spkcollapsecard';
import SpkCustomcard from '../../../@spk/uielements/cards/spkcustomcard';
import SpkCustomfootercard from '../../../@spk/uielements/cards/spkcustomfootercard';
import SpkDropdowncard from '../../../@spk/uielements/cards/spkdropdowncard';
import Spkgridcards from '../../../@spk/uielements/cards/spkgridcards';
import Spkgridmarkupcard from '../../../@spk/uielements/cards/spkgridmarkupcard';
import Spkhorizontalcards from '../../../@spk/uielements/cards/spkhorizontalcards';
import Spkimagecapcards from '../../../@spk/uielements/cards/spkimagecapcards';
import Spkimageoverlaycard from '../../../@spk/uielements/cards/spkimageoverlaycard';
import SpkListgroupcards from '../../../@spk/uielements/cards/spklistgroupcards';
import Spknavigationcards from '../../../@spk/uielements/cards/spknavigationcards';
import SpkProfilecard from '../../../@spk/uielements/cards/spkprofilecard';
import SpkQuotecards from '../../../@spk/uielements/cards/spkquotecards';
import Spkratingcard from '../../../@spk/uielements/cards/spkratingcard';
import SpkSocialiconcard from '../../../@spk/uielements/cards/spksocialiconcard';
import Spktitlecards from '../../../@spk/uielements/cards/spktitlecards';
import Spkutilitiescards from '../../../@spk/uielements/cards/spkutilitiescards';
import SpkClosebuttoncard from '../../../@spk/uielements/cards/spkclosebuttoncard';

interface CardsProps {}

const Cards: FC<CardsProps> = () =>{ 

    const [isFullscreen, setIsFullscreen] = useState(false);


    const handleFullscreenClick = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        setIsFullscreen(!isFullscreen);
    };

    

    return (
        <>
            <Pageheader currentpage="Cards" activepage="Ui Elements" mainpage="Cards" />
            <div className="grid grid-cols-12 md:gap-x-6">
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Spktitlecards AnchortagNavigate="#" Navigate="#" Imagetag={true} Cardfooter={true} Imgsrc={media22} Footertext="Last updated 3 mins ago"
                        Customclass="">
                            <h6 className="box-title font-semibold !text-[1rem]">Card title</h6>
                            <p className="card-text text-[#8c9097] dark:text-white/50 mb-4">when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially
                                unchanged.</p>
                            <Link to="#" className="ti-btn ti-btn-primary-full">Read More</Link>
                    </Spktitlecards>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Spktitlecards AnchortagNavigate="#!" Navigate="#!" Cardheader={true} Cardfooter={false} Title="Featured" Customclass="custom-card">
                             <h6 className="box-title font-semibold">Special title treatment</h6>
                            <p className="card-text mb-4">Richard McClintock, a Latin professor at Hampden-Sydney
                                College in Virginia, looked up one of the more obscure Latin words, consectetur,
                                from a Lorem Ipsum passage</p>
                            <Link to="#" className="ti-btn ti-btn-primary-full">Read More</Link>
                    </Spktitlecards>
                     <SpkCustomfootercard Navigate="#" Title="Card title" Subtitle="Card subtitle" Text="There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration many variations of passages of Lorem Ipsum
                            available there are so many ways to solve but the majority have suffered."
                        Linktext1="Buy Now" Linktext2="Review" />
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Spkgridcards Navigate="#!" Imgsrc={media23} Text="Some quick example text to build on the card title and up the bulk of the card's content." />
                    <h6 className="mb-4 !text-[1rem] font-medium">Only Card Body:</h6>
                    <div className="box">
                        <div className="box-body">
                            <div className="card-text">
                                <p className="mb-0">It is a long established fact that a reader will be distracted by
                                    the readable content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <SpkCustomcard Navigate="#!" Imgsrc={media24} Title="Card title" Text="Some quick example text to build on the card title and
                        make up the bulk of the card's content." Linktext1="Card link" Linktext2="Another link" />
                </div>
            </div>
            <div className="grid grid-cols-12 md:gap-6">
                <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <h6 className="!text-[1rem] !font-medium mb-4">Quote:</h6>
                        <div className="xl:col-span-12 col-span-12">
                          <SpkQuotecards Navigate="#!" Title="Source Title" Text="The greatest glory in living lies not in never falling, but in rising every time we fall."
                                Footertext="Someone famous in" Customclass="" />
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <h6 className="mb-4 !text-[1rem] !font-medium">List Group:</h6>
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                                    <SpkListgroupcards>
                                            <li className="list-group-item">An item</li>
                                            <li className="list-group-item">A second item</li>
                                            <li className="list-group-item">A third item</li>
                                            <li className="list-group-item">A fourth item</li>
                                    </SpkListgroupcards>
                                </div>
                                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                                    <SpkListgroupcards CardHeader={true} Headertext='Featured'>
                                            <li className="list-group-item !border-0">An item</li>
                                            <li className="list-group-item !border-s-0 !border-e-0">A second item</li>
                                            <li className="list-group-item !border-s-0 !border-e-0 !border-b-0">A third item</li>
                                    </SpkListgroupcards>
                                </div>
                                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                                    <SpkListgroupcards Listvariant="flush" CardFooter={true} Headertext="Featured" Footertext="Card footer" Customfooterclass="border-top-0">
                                            <li className="list-group-item !border-0">An item</li>
                                            <li className="list-group-item !border-s-0 !border-e-0">A second item</li>
                                            <li className="list-group-item !border-s-0 !border-e-0 !border-b-0">A third item</li>
                                    </SpkListgroupcards>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-12 col-span-12">
                    <h6 className="mb-4 !text-[1rem] !font-medium">Using Grid Markups:</h6>
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-4 col-span-12">
                            <Spkgridmarkupcard Navigate="#!" Customimgclass="card-img mb-4 !rounded-md" Imgsrc={media25} Text="With supporting text below as a natural
                              lead-in to additional content." Customtextclass="mb-4" Linktag={true} Buttontext="Purchase" Button={true} Color="primary-full" Title="Product A" />
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <Spkgridmarkupcard Navigate="#!" Customimgclass="card-img mb-4 !rounded-md" Imgsrc={media26} Text="With supporting text below as a natural
                             lead-in to additional content." Customtextclass="mb-4" Linktag={true} Buttontext="Purchase" Button={true} Color="secondary-full" Title="Product B" />
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <Spkgridmarkupcard Navigate="#!" Customimgclass="card-img mb-4 !rounded-md" Imgsrc={media27} Text="With supporting text below as a natural
                             lead-in to additional content." Customtextclass="mb-4" Linktag={true} Buttontext="Purchase" Button={true} Color="light" Title="Product-C" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 xl:gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <h6 className="mb-4 !text-[1rem] !font-medium">Text Alignment:</h6>
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-4 col-span-12">
                               <Spkalignmentcards Navigate="#" Imagesrc={face15} Customtitleclass="!font-medium" Title="Where it come from" Text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature."
                                Buttontext="Go somewhere" />
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                              <Spkalignmentcards Navigate="#" Imagesrc={face3} Title="Why do we use it?" Customtitleclass="!font-semibold" Text="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
                                Buttontext="Go somewhere" Customclass="text-center" />
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <Spkalignmentcards Navigate="#" Imagesrc={face11} Customtitleclass="!font-semibold" Title="What is special?" Text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                Buttontext="Go somewhere" Customclass="text-end " />
                           
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <h4 className="mb-4 !text-[1rem] !font-medium">Mixins utilities:</h4>
                    <Spktitlecards AnchortagNavigate="#!" Navigate="#!" Customclass="border border-success mb-4" Customfooterclass="!py-1 !px-2 bg/10 border-t border-success" Cardfooter={true} 
                         Cardheader={true} Title="Header"  CustomBodyclass="text-success" CustomHeaderclass="!py-1 !px-2 bg/10 border-b !text-start !border-success" Footertext="Footer" >
                            <p className="box-title !font-semibold !text-success">Looking For Success?</p>
                            <p className="card-text">If you are going to use a passage of Lorem Ipsum, you need
                                to be sure there isn't anything embarrassing hidden in the middle of text.
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                chunks as necessary.</p>
                    </Spktitlecards>
                </div>
            </div>
            <h6 className="mb-4 !text-[1rem] !font-medium">Card Header &amp; Footer:</h6>
            <div className="grid grid-cols-12 md:gap-x-6">
                <div className="xl:col-span-3 col-span-12">
                    <SpkDropdowncard Navigate="#!" Imgsrc={face11} Title="Adam Smith" Gender="28 Years, Male" Date="28,Nov 2022" Role="Assistant Professor"
                        Text="If you are going to use, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators." />
                </div>
                <div className="xl:col-span-3 col-span-12">
                     <Spkratingcard Timevalue="1 year ago" Text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                        Name="Corey Anderson" Imgsrc={face12} Title="Very Great!" />
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <SpkSocialiconcard Name="Iliana Lilly" Role="Web Developer" Imgsrc={face5} />
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Spktitlecards AnchortagNavigate="#!" Navigate="#!" Cardfooter={true} Cardheader={false} Customclass="border border-primary" Footertext=" Lorem Ipsum is therefore always free from repetition, injected humour.">
                    <svg className="w-[60px] h-[60px] my-4" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path fill="#C6CDD1"
                                    d="M19 21H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z" />
                                <path fill="#C6CDD1" d="M11 1H3a2 2 0 0 0-2 2v8h10V1z" />
                                <path fill="#A1ABB2" d="M21 11V3a2 2 0 0 0-2-2h-8v10h10z" />
                                <path fill="#878A8F" d="M1 11v8a2 2 0 0 0 2 2h8V11H1z" />
                                <path fill="#797D82" d="M11 11v10h8a2 2 0 0 0 2-2v-8H11z" />
                                <path fill="#FFF" d="M14 6h5v1h-5z" />
                                <path
                                    d="M19 20.75H3a2 2 0 0 1-2-2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-.25a2 2 0 0 1-2 2z"
                                    opacity=".1" />
                                <circle cx="16" cy="16" r="7" fill="#136ad0" />
                                <path
                                    d="M16 22.75c-3.08 0-5.704-1.97-6.696-4.713C10.18 20.907 12.85 23 16 23s5.82-2.094 6.696-4.963C21.704 20.781 19.08 22.75 16 22.75z"
                                    opacity=".1" />
                                <path fill="#FFF"
                                    d="M16 9.25c3.08 0 5.704 1.97 6.696 4.713C21.82 11.093 19.15 9 16 9s-5.82 2.094-6.696 4.963C10.296 11.219 12.92 9.25 16 9.25z"
                                    opacity=".2" />
                                <path fill="#FFF" d="M4 6h5v1H4z" />
                                <path fill="#FFF"
                                    d="M6 4h1v5H6zM13 14h6v1h-6zM13 17h6v1h-6zM4.379 15.086l.707-.707 3.535 3.535-.707.707z" />
                                <path fill="#FFF" d="m4.379 17.914 3.535-3.535.707.707-3.535 3.535z" />
                                <path fill="#FFF"
                                    d="M19 1H3a2 2 0 0 0-2 2v.25a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2V3a2 2 0 0 0-2-2z"
                                    opacity=".2" />
                                <linearGradient id="a" x1="14.367" x2="19.862" y1="14.367" y2="19.862"
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#3E2723" stopOpacity=".2" />
                                    <stop offset="1" stopColor="#3E2723" stopOpacity=".02" />
                                </linearGradient>
                                <path fill="url(#a)"
                                    d="M19 14v1h-6l2 2h4v1h-6l4.766 4.766a7.014 7.014 0 0 0 5-5L19 14z" />
                                <linearGradient id="b" x1="-.448" x2="23.366" y1="5.662" y2="16.766"
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#FFF" stopOpacity=".2" />
                                    <stop offset="1" stopColor="#FFF" stopOpacity="0" />
                                </linearGradient>
                                <path fill="url(#b)"
                                    d="M21 11.11V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.11A6.974 6.974 0 0 0 16 23c3.86 0 7-3.14 7-7a6.974 6.974 0 0 0-2-4.89z" />
                            </svg>
                            <p className="mb-0 mt-8 text-[1.25rem] font-semibold leading-none">
                                Calculations
                            </p>
                    </Spktitlecards>
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <Spkgridmarkupcard Navigate="#!" Customimgclass="card-img mb-4 !rounded-md" Imgsrc={media4} Customtitleclass="mb-4" Text="With supporting text below as a natural lead-in."
                        Badge={true} Badgetext="New" Badgeclass='bg-primary text-white ltr:float-right rtl:float-left text-[.625rem]' Title="Mountains" />
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <Spkgridmarkupcard Navigate="#!" Customimgclass="card-img mb-4 !rounded-md" Imgsrc={media9} Customtitleclass="mb-4" Text="With supporting text below as a natural"
                        Badge={true} Badgetext="Hot" Badgeclass="bg-secondary text-white ltr:float-right rtl:float-left text-[.625rem]" Title="Hills" />
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <Spkgridmarkupcard Navigate="#!" Customimgclass="card-img mb-4 !rounded-md" Imgsrc={media15} Customtitleclass="mb-4" Text="With supporting text below as a natural"
                        Badge={true} Badgetext="Offer" Badgeclass="bg-light text-dark ltr:float-right rtl:float-left text-[.625rem]" Title="Nature" />
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Spktitlecards AnchortagNavigate="#!" Navigate="#!" Cardfooter={true} Footertext="11.32pm" Cardheader={true} Title="Featured" 
                     Customclass="text-center" Customfooterclass="!text-[#8c9097] dark:text-white/50" CustomHeaderclass="!mb-0">
                            <h6 className="box-title font-semibold !mb-2">Breaking News !</h6>
                            <p className="card-text mb-4">With supporting text below as a natural lead-in to
                                additional content.</p>
                            <Link to="#" className="ti-btn ti-btn-primary-full mt-2 me-2">Read More</Link>
                            <Link to="#" className="ti-btn ti-btn-outline-secondary mt-2">Close</Link>
                    </Spktitlecards>
                </div>
                <div className="xl:col-span-3 col-span-12">
                <SpkProfilecard Imgsrc={face12} Posts="25" Followers="1253" Following="367" Name="Angelina Caprio" Role="Angular Developer" 
                   Personalinformation="Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions " />
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <SpkCollapsecard footertext='Read More' Timeout="100" Title='Card With Collapse Button'>
                        <h6 className="card-text font-semibold">Collapsible Card</h6>
                        <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some form, by injected
                            humour, or randomised words</p>
                    </SpkCollapsecard>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <SpkClosebuttoncard Footertext="Read More" Title="Card With Close Button">
                            <h6 className="card-text font-semibold">Closed Card</h6>
                            <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injected
                                humour, or randomised words</p>
                    </SpkClosebuttoncard>
                </div>
                <div className="xl:col-span-4 col-span-12">
                        <Spktitlecards AnchortagNavigate="#!" Navigate="#!" ButtonTag={true} Cardfooter={true} Cardheader={true} Title="Card With Fullscreen Button" Customclass={`${isFullscreen ? 'box-fullscreen' : ''}` }
                                Icontag={true} Linktag={true} Icon="ri-fullscreen-line" LinkClass="terms-fullscreen"
                            CustomHeaderclass="justify-content-between" OnclickFunc={handleFullscreenClick}>
                        <h6 className="card-text font-semibold">FullScreen Card</h6>
                                <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some form, by injected
                                    humour, or randomised words</p>
                        </Spktitlecards>
                </div>
            </div>
            <div className="grid grid-cols-12 md:gap-x-6">
                <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                    <h6 className="mb-4 !text-[1rem] !font-medium">Using Utilities:</h6>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="xl:col-span-6 col-span-12">
                            <Spkutilitiescards  Navigate="#!" Customcardclass="!w-[75%]" Text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum omnis excepturi consequatur molestiae" Title="Using Width 75%" />
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <Spkutilitiescards Navigate="#!" Customcardclass="!w-[50%]" Text="Lorem ipsum dolor sit amet consectetur adipisicing elit." Title="Using Width 50%" />
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                    <h6 className="mb-4 !text-[1rem] !font-medium">Navigation:</h6>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="xl:col-span-6 col-span-12">
                            <Spknavigationcards Navigate="#"  Navigationclass="tabs" Customheaderclass=" p-4 pt-3 ps-2" />
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <Spknavigationcards Navigate="#" Navigationclass="pills" />
                        </div>
                    </div>
                </div>
            </div>
            <h6 className="mb-4 !text-[1rem] !font-medium">Image Caps:</h6>
            <div className="grid grid-cols-12 md:gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <Spkimagecapcards Imgsrc={media29} Imgposition="before" Customimgclass="card-img-top">
                            <h6 className="box-title font-semibold !text-[1rem]">Image caps are widely used in Blog's</h6>
                            <p className="card-text mb-4 text-[#8c9097] dark:text-white/50">But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain was born and I will give you a
                                complete account of the system, and expound the actual teachings.</p>
                            <p className="card-text mb-0"><small>Last updated 3 mins
                                ago</small></p>
                    </Spkimagecapcards>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Spkimagecapcards Imgsrc={media28} Customimgclass="!rounded-b-md" Imgposition="after" >
                         <h6 className="box-title font-semibold !text-[1rem]">Image caps are widely used in Blog's</h6>
                        <p className="card-text mb-4 text-[#8c9097] dark:text-white/50">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.</p>
                        <p className="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                    </Spkimagecapcards>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Spkimagecapcards Imgsrc={media30} Imgafterfooter={false} Imgposition="after" Customimgclass="card-img rounded-0" CardFooter={true} Cardheader={true} Title="Image caps are widely used in Blog's"
                            Footertext="Last updated 3 mins ago">
                         <h6 className="box-title font-semibold mb-1 !text-[1rem]">Image caps are widely used in
                                Blog's</h6>
                            <p className="card-text mb-1 text-[#8c9097] dark:text-white/50">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</p>
                    </Spkimagecapcards>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Spkimagecapcards Imgsrc={media31} Imgposition="after" Customimgclass="card-img-top" CardFooter={true} Cardheader={true} Title="Image caps are widely used in Blog's"
                            Footertext="Last updated 3 mins ago">
                        <p className="card-text mb-1 text-[#8c9097] dark:text-white/50">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</p>
                    </Spkimagecapcards>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Spkimagecapcards Imgsrc={media32} Imgposition="before" Customimgclass="card-img-top" CardFooter={true} Cardheader={true} Title="Image caps are widely used in Blog's"
                            Footertext="Last updated 3 mins ago" Customfooterclass='card-text mb-0' >
                        <p className="card-text mb-1 text-[#8c9097] dark:text-white/50">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</p>
                    </Spkimagecapcards>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Spkimagecapcards Imgsrc={media33} Imgafterfooter={true} Customimgclass="card-img-bottom" CardFooter={true} Cardheader={true}
                            Title="Image caps are widely used in Blog's" Footertext="Last updated 3 mins ago" Customfooterclass='card-text mb-0'>
                         <p className="card-text mb-1 text-[#8c9097] dark:text-white/50">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</p>
                    </Spkimagecapcards>
                </div>
            </div>
            <h6 className="mb-4 !text-[1rem] !font-medium">Image Overlays:</h6>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <Spkimageoverlaycard CustomClass="overlay-card" Title="Image Overlays Are Awesome!" Imgsrc={media35} CardHeader={true}
                        CardFooter={false} Customimgclass="card-img" Custombodyclass="overflow-y-scroll text-white" CustomTitleclass="!text-white">
                        <div className="card-text mb-2 !text-white">There are many variations of passages of
                            Lorem Ipsum available, but the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't look even.</div>
                        <div className="card-text !text-white">Last updated 3 mins ago</div>
                    </Spkimageoverlaycard>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Spkimageoverlaycard CustomClass="overlay-card" CardHeader={false} Imgsrc={media36} Overlayclass="over-content-bottom"
                            CardFooter={true} Footertext="Last updated 3 mins ago" Customimgclass="card-img" Custombodyclass="m:!p-4 !p-2 text-white" Customfooterclass="!text-white !border-t !border-defaultborder/10" >
                                 <div className="card-text text-white">
                                    Image Overlays Are Awesome!
                                </div>
                                <div className="card-text overflow-y-scroll mb-2 !text-white">There are many variations of passages of
                                    Lorem Ipsum available, but the majority have suffered alteration in some form,
                                    by injected humour, or randomised words which don't look even.</div>
                                <div className="card-text !text-white">Last updated 3 mins ago</div>
                    </Spkimageoverlaycard>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Spkimageoverlaycard CustomClass="overlay-card" Title="Image Overlays Are Awesome!" Imgsrc={media34} CardHeader={true} Overlayclass='flex flex-column p-0'
                        CardFooter={true} Footertext="Last updated 3 mins ago" Customimgclass="card-img" Custombodyclass="overflow-y-scroll text-white" CustomTitleclass=" !text-white"
                          Customfooterclass="!text-white !border-t border-defaultborder">
                            <div className="card-text !text-white">There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don't look even.</div>
                    </Spkimageoverlaycard>
                </div>
            </div>
            <h6 className="mb-4 !text-[1rem] !font-medium">Horizontal Cards:</h6>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <Spkhorizontalcards Navigate="#!" Imgposition="before" CardHeader={true} CardFooter={true} Imagesrc={media37} Imgclass="img-fluid rounded-s-md h-full w-full" Footertext="Last updated 3 mins ago" Title="Horizontal Cards" >
                        <h6 className="box-title fw-medium">Horizontal cards are awesome!</h6>
                        <p className="card-text">This is a wider card with supporting text below as a natural .</p>
                    </Spkhorizontalcards>
                </div>
                <div className="xl:col-span-4 col-span-12">
                <Spkhorizontalcards Navigate="#!" Imgposition="after" CardHeader={true} CardFooter={false} Imagesrc={media38} Imgclass="img-fluid !rounded-e-md h-full w-full"
                        Title="Horizontal Cards" >
                        <h6 className="box-title fw-medium">Horizontal cards are awesome!</h6>
                        <p className="card-text mb-3">This is a wider card with suppo    rting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </Spkhorizontalcards>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Spkhorizontalcards Navigate="#!" Imgposition="after" CardHeader={false} CardFooter={true} Imagesrc={media39} Imgclass="img-fluid !rounded-e-md h-full w-full"
                            Footertext="Last updated 3 mins ago">
                        <h6 className="box-title fw-medium mb-2">Horizontal Cards</h6>
                        <div className="mb-4">Horizontal cards are awesome!</div>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </Spkhorizontalcards>
                </div>
            </div>
            <h6 className="mb-4 !text-[1rem] !font-medium">Background Colored Cards:</h6>
            <div className="grid grid-cols-12 gap-x-6">
                {Backgroundcards.map((idx) => (
                    <div className="xl:col-span-3 col-span-12" key={Math.random()}>
                        <Spkbgcards  Navigate='#' color={idx.color} Textclass={idx.class} Class={idx.class} Imgsrc={idx.src}  Value={idx.text2} Title={idx.text1} />
                    </div>
                ))}
            </div>
            <h6 className="mb-4 !text-[1rem] !font-medium">Colored Border Cards:</h6>
            <div className="grid grid-cols-12 gap-x-6">
                    {Bordercarddata.map((idx)=>(
                        <div className="xl:col-span-3 col-span-12" key={Math.random()}>
                            <Spkborderedcards Navigate="#" Title={idx.title} badges={idx.badges} images={idx.images} Class={idx.Class}
                             Customcardclas={idx.cardclass} />
                        </div>
                    ))}
            </div>
            <h6 className="mb-4 !text-[1rem] !font-medium">Cards With Link:</h6>
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
                    <Spkgridcards Navigate="#!" Imgsrc={media23} Customheadingclass="mb-0" Linktag={true} Ptag={false} Title="Forests are Awesome." />
                </div>
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                            <SpkQuotecards Navigate="#!" Customclass="!bg-primary" Text="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.."
                                Footertext="Someone famous as" Title="-Helen Keller" Footerclass=" text-[.875rem] text-white opacity-[0.7]" Headingclass="text-[1rem] text-white font-medium" />
                        </div>
                        <div className="xxl:col-span-5 xl:col-span-12 col-span-12">
                            <Spktitlecards AnchortagNavigate="#!" Navigate="#!" Customclass="" Anchortagbefore={true}  >
                                    <div className="flex align-center">
                                        <div className="me-4">
                                            <span className="avatar avatar-md">
                                                <img src={face15} alt="img" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="card-text mb-0 text-[.875rem] font-semibold">Atharva Simon.
                                            </p>
                                            <div className="box-title !text-[#8c9097] dark:text-white/50 !text-[.75rem] mb-0">Correspondent
                                                Professor</div>
                                        </div>
                                    </div>  
                            </Spktitlecards>
                            <Spktitlecards AnchortagNavigate="#!" Navigate="#!" Customclass="border border-info" Anchortagbefore={true}  >
                                <div className="flex align-center">
                                        <div className="me-3">
                                            <span className="avatar avatar-xl">
                                                <img src={face8} alt="img" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="card-text text-info mb-1 text-[.875rem] font-semibold">Alicia
                                                Keys.</p>
                                            <div className=" text-[.75rem] mb-1">Department Of Commerce</div>
                                            <div className=" text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0">24 Years, Female</div>
                                        </div>
                                    </div>
                            </Spktitlecards>
                        </div>
                        <div className="xxl:col-span-7 xl:col-span-12 col-span-12">
                            <Spkhorizontalcards Navigate="#!" Imgposition="after" Linktag={true} CardHeader={false} CardFooter={true} 
                                 Imagesrc={media39} Imgclass="img-fluid !rounded-e-md h-full"
                                Footertext="Last updated 3 mins ago">
                                        <h6 className="box-title mb-2 font-semibold !text-[1rem]">Fox is Beautiful ?
                                            </h6>
                                            <p className="card-text mb-0">This is a wild animal with supporting tactics
                                                and are very efficient at kill,they are very Dangerous.</p>
                                            <p className="mb-0 card-text">
                                                Fox lives mainly in forests and are well known for their hunting
                                                skills.
                                            </p>
                            </Spkhorizontalcards>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <Spkgridcards Navigate="#" Linktag={true} Imgsrc={media47} Title="Most tropical areas are suitable" Text="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." />
                </div>
            </div>
            <h6 className="mb-4 !text-[1rem] !font-medium">Grid Cards:</h6>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {Gridcards.map((idx) => (   
                    <div className="col" key={Math.random()}>
                        <Spkgridcards Navigate="#" Ptag={true} Text="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                             Imgsrc={idx.src}  Title={idx.text1} />
                    </div>
                ))}
            </div>

                <div className="grid grid-cols-12 gap-x-6 mb-4 gap-y-3">
                    <div className="xl:col-span-6 lg:col-span-12 col-span-12">
                        <h6 className="mb-4 !text-[1rem] !font-medium">Card Group:</h6>
                        <div className="grid border rounded-md shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x dark:border-white/10 dark:divide-white/10">
                           {Cardgroupdata.map((idx)=>(
                            <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-bodybg" key={Math.random()}>
                                <img className="w-full h-auto sm:rounded-se-none"
                                    src={idx.src} alt="Image Description"/>
                                <div className="p-4 flex-1 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                        Card title
                                    </h3>
                                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                                        {idx.text}
                                    </p>
                                </div>
                                <div className="p-4 border-t sm:px-5 dark:border-white/10">
                                    <p className="text-xs text-gray-500 dark:text-gray-500">
                                        Last updated 5 mins ago
                                    </p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="xl:col-span-3 lg:col-span-6 col-span-12">
                        <h6 className="mb-4 !text-[1rem] !font-medium">Image scaling animation on hover:</h6>
                        <Link className="flex flex-col group bg-white border shadow-sm rounded-md overflow-hidden hover:shadow-lg transition dark:bg-bodybg dark:border-white/10"
                            to="#">
                            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-md overflow-hidden">
                                <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-md"
                                    src={media30} alt="Image Description"/>
                            </div>
                            <div className="box-body">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                    Card title
                                </h3>
                                <p className="mt-1 text-gray-500 dark:text-gray-400">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="xl:col-span-3 lg:col-span-6 col-span-12">
                        <h6 className="mb-4 !text-[1rem] !font-medium">Transition on hover:</h6>
                        <Link className="flex flex-col bg-white border shadow-sm rounded-md hover:shadow-lg transition dark:bg-bodybg dark:border-white/10"
                            to="#">
                            <img className="w-full h-auto rounded-t-md" src={media30}
                                alt="Image Description"/>
                            <div className="box-body">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                    Card title
                                </h3>
                                <p className="mt-1 text-gray-500 dark:text-gray-400">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6 mb-4 gap-y-3">
                    <div className="xl:col-span-4 col-span-12">
                        <h6 className="mb-4 !text-[1rem] !font-medium">Top bordered card:</h6>
                        <div
                            className="flex flex-col bg-white border border-t-4 border-primary/60 shadow-sm rounded-xl dark:bg-bodybg dark:border-white/10 dark:border-t-primary/60 dark:shadow-slate-700/[.7]">
                            <div className="box-body">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                    Card title
                                </h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    With supporting text below as a natural lead-in to additional content.
                                </p>
                                <Link className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-primary hover:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    to="#">
                                    Card link
                                    <svg className="flex-shrink-0 size-4 rtl:origin-center" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <h6 className="mb-4 !text-[1rem] !font-medium">Card with alert:</h6>
                        <div
                            className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-bodybg dark:border-white/10 dark:shadow-slate-700/[.7]">
                            <div className="border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:border-white/10">
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                                    Featured
                                </p>
                            </div>
                            <div
                                className="bg-bodybg border border-defaultborder text-sm  p-4 dark:bg-bodybg dark:border-white/10 dark:text-white">
                                <span className="font-bold">Attention needed!</span> This is an alert box.
                            </div>
                            <div className="box-body">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                    Card title
                                </h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    With supporting text below as a natural lead-in to additional content.
                                </p>
                                <Link className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    to="#">
                                    Card link
                                    <svg className="flex-shrink-0 size-4 rtl:origin-center rotate-180" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <h6 className="mb-4 !text-[1rem] !font-medium">Card with Empty state:</h6>
                        <div
                            className="min-h-60 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-bodybg dark:border-white/10 ">
                            <div className="flex flex-auto flex-col justify-center items-center box-body">
                                <svg className="size-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" x2="2" y1="12" y2="12" />
                                    <path
                                        d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                                    <line x1="6" x2="6.01" y1="16" y2="16" />
                                    <line x1="10" x2="10.01" y1="16" y2="16" />
                                </svg>
                                <p className="mt-5 text-sm text-gray-800 dark:text-gray-300">
                                    No data to show
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Cards