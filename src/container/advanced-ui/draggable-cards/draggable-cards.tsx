import  {FC, Fragment,  useEffect,  useRef, useState } from 'react';
import Pageheader from '../../../components/common/page-header/pageheader';
import media35 from "../../../assets/images/media/media-35.jpg";
import media36 from "../../../assets/images/media/media-36.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import SpkQuotecards from '../../../@spk/uielements/cards/spkquotecards';
import Spktitlecards from '../../../@spk/uielements/cards/spktitlecards';
import Spkimageoverlaycard from '../../../@spk/uielements/cards/spkimageoverlaycard';
import SpkCollapsecard from '../../../@spk/uielements/cards/spkcollapsecard';
import Spkbgcards from '../../../@spk/uielements/cards/spkbgcards';
import SpkClosebuttoncard from '../../../@spk/uielements/cards/spkclosebuttoncard';
interface DraggablecardsProps {}

const Draggablecards: FC<DraggablecardsProps> = () =>{

    // const [isFullscreen, setIsFullscreen] = useState(false);

    // useEffect(() => {
    //     const handleBodyClick = () => {
    //         if (isFullscreen) {
    //             setIsFullscreen(false);
    //         }
    //     };

    //     document.querySelector("body")?.addEventListener("click", handleBodyClick);

    //     return () => {
    //         document.querySelector("body")?.removeEventListener("click", handleBodyClick);
    //     };
    // }, [isFullscreen]);

    // const handleFullscreenClick = () => {
    //     document.querySelector(".box-data")?.classList.toggle("box-fullscreen")
    // }

    const [isFullscreen, setIsFullscreen] = useState(false);


    const handleFullscreenClick = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        setIsFullscreen(!isFullscreen);
    };
    // const handleBoxClick = (e: { stopPropagation: () => void; }) => {
    //     e.stopPropagation();
    // };
    const leftContainerRef = useRef<HTMLDivElement | null>(null);
    const rightContainerRef = useRef<HTMLDivElement | null>(null);
    const windowElement  : any  = window;
  
    useEffect(() => {
      if (leftContainerRef.current && rightContainerRef.current) {
        windowElement.dragula([leftContainerRef.current, rightContainerRef.current]);
      }
    }, []);



    return (
        <Fragment>
            <Pageheader currentpage="Draggable Cards" activepage=" Advanced Ui" mainpage="Draggable Cards" />

            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12" id="draggable-left" ref={leftContainerRef} >
                    <SpkQuotecards Navigate="#!" Title="-Helen Keller" Text="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.."
						Footertext="Someone famous as" Customclass="custom-box box-bg-primary" CustomBodyclass="deals-content" Headingclass="text-white" Footerclass="mt-4 text-[.875rem] text-white opacity-[0.7]" />
                    <Spktitlecards AnchortagNavigate="#!" Navigate="#!" ButtonTag={true} Cardfooter={true} Cardheader={true} Title="Box With Fullscreen Button" Customclass={`${isFullscreen ? 'box-fullscreen' : ''}` } 
                            Icontag={true} Linktag={true} Icon="ri-fullscreen-line" LinkClass="terms-fullscreen"
                        CustomHeaderclass="justify-content-between" OnclickFunc={handleFullscreenClick}>
                       <h6 className="card-text font-semibold">FullScreen Card</h6>
                            <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injected
                                humour, or randomised words</p>
                    </Spktitlecards>
                    <Spkimageoverlaycard CustomClass="custom-box overlay-box text-white" Title="Image Overlays Are Awesome!" Imgsrc={media35} CardHeader={true} Overlayclass='top-auto'
						CardFooter={false} Customimgclass="box-img" Custombodyclass="!text-white" CustomTitleclass="!text-white">
						 <div className="box-text mb-2 !text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even.</div>
                         <div className="box-text ">Last updated 3 mins ago</div>
					</Spkimageoverlaycard>
                    <Spktitlecards AnchortagNavigate="#!" Navigate="#!" Customclass="custom-box" Anchortagbefore={true} CustomBodyclass='deals-content'  >
                                <div className="flex items-center">
                                <div className="me-4">
                                    <span className="avatar avatar-md">
                                        <img src={face15} alt="img" />
                                    </span>
                                </div>
                                <div>
                                    <p className="box-text mb-0 text-[.875rem] font-semibold">Atharva Simon.</p>
                                    <div className="box-title !text-[#8c9097] dark:text-white/50 !text-[0.75rem] !font-normal mb-0">Correspondent Professor</div>
                                </div>
                            </div>
					</Spktitlecards>
                    <Spktitlecards AnchortagNavigate="#!" Navigate="#!" Customclass="custom-box border border-info" Anchortagbefore={true}  >
                        <div className="flex items-center">
                                <div className="me-3">
                                    <span className="avatar avatar-xl">
                                        <img src={face8} alt="img" />
                                    </span>
                                </div>
                                <div>
                                    <p className="box-text text-info mb-1 text-[.875rem] font-semibold">Alicia Keys.</p>
                                    <div className="box-title !text-[0.75rem] mb-1 !font-normal">Department Of Commerce</div>
                                    <div className="box-title !text-[#8c9097] dark:text-white/50 !text-[.6875rem] !font-normal mb-0">24 Years, Female</div>
                                </div>
                            </div>
					</Spktitlecards>
                </div>
                <div className="xl:col-span-6 col-span-12" id="draggable-right" ref={rightContainerRef}>
                    <Spkimageoverlaycard CustomClass="custom-box overlay-box" CardHeader={false} Imgsrc={media36} Overlayclass="!top-auto inset-x-0 bottom-0"
                            CardFooter={true} Footertext="Last updated 3 mins ago" Customimgclass="card-img" Custombodyclass="deals-content text-white" Customfooterclass="!text-white" >
                            <div className="box-text !text-white">
                                    Image Overlays Are Awesome!
                            </div>
                            <div className="box-text mb-2 !text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even.</div>
					</Spkimageoverlaycard>
                    <Spkbgcards Navigate="#!" color="success" Imgsrc={face5} Title="Samantha sid" Imgclass="!rounded-full" Value="In leave for 1 month" Textclass="white" Class="white" Customclass='custom-box' />
                    <SpkCollapsecard footertext='Read More' Timeout="100" Title='Card With Collapse Button' Custombodyclass="deals-content">
                        <h6 className="card-text font-semibold">Collapsible Card</h6>
                        <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some form, by injected
                            humour, or randomised words</p>
                    </SpkCollapsecard>
                    <SpkClosebuttoncard Footertext="Read More" Title="Card With Close Button">
                            <h6 className="card-text font-semibold">Closed Card</h6>
                            <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injected
                                humour, or randomised words</p>
                    </SpkClosebuttoncard>
                </div>
            </div>


        </Fragment>
    )
}

export default Draggablecards;