
import  { FC,Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader'
import Showcode from '../../../components/common/showcode/showcode'
import { object1, object10, object11, object12, object13, object14, object15, object2, object3, object4, object5, object6, object7, object8, object9 } from '../../../components/prism-code/utilities-prism'
import media28 from "../../../assets/images/media/media-28.jpg";
import  video1 from "../../../assets/video/1.mp4"
interface ObjectfitProps {}

const Objectfit: FC<ObjectfitProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Object Fit" activepage="Ui Elements" mainpage="Object Fit" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Object Fit Contain" reactCode={object1} customCardBodyClass="object-fit-container">
                            <img src={media28}
                                className="object-contain border dark:border-defaultborder/10 !rounded-md"
                                alt="..." />
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                        <Showcode title="Object Fit Cover" reactCode={object2} customCardBodyClass="object-fit-container">
                            <img src={media28}
                                className="object-cover border dark:border-defaultborder/10 !rounded-md"
                                alt="..." />
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                        <Showcode title="Object Fit Fill" reactCode={object3} customCardBodyClass="object-fit-container">
                            <img src={media28}
                                className="object-fill border dark:border-defaultborder/10 !rounded-md"
                                alt="..." />
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                        <Showcode title="Object Fit Scale Down" reactCode={object4} customCardBodyClass="object-fit-container">
                            <img src={media28}
                                className="object-scale-down border dark:border-defaultborder/10 !rounded-md"
                                alt="..." />
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <Showcode title="Object Fit None" reactCode={object5} customCardBodyClass="object-fit-container">
                            <img src={media28}
                                className="object-none border dark:border-defaultborder/10 !rounded-md"
                                alt="..." />
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <Showcode title="Object Fit Contain (SM -responsive)" reactCode={object6} customCardBodyClass="object-fit-container">
                            <img src={media28}
                                className="sm:object-contain border dark:border-defaultborder/10 !rounded-md"
                                alt="..." />
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <Showcode title="Object Fit Contain (MD -responsive)" reactCode={object7} customCardBodyClass="object-fit-container">
                            <img src={media28}
                                className="md:object-contain border dark:border-defaultborder/10 !rounded-md"
                                alt="..." />
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <Showcode title="Object Fit Contain (LG -responsive)" reactCode={object8} customCardBodyClass="object-fit-container">
                            <img src={media28}
                                className="lg:object-contain border dark:border-defaultborder/10 !rounded-md"
                                alt="..." />
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <Showcode title="Object Fit Contain (XL -responsive)" reactCode={object9} customCardBodyClass="object-fit-container">
                            <img src={media28}
                                className="xl:object-contain border dark:border-defaultborder/10 !rounded-md"
                                alt="..." />
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <Showcode title="Object Fit Contain (XXL -responsive)" reactCode={object10} customCardBodyClass="object-fit-container">
                            <img src={media28}
                                className="xxl:object-contain border dark:border-defaultborder/10 !rounded-md"
                                alt="..." />
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Object Fit Contain Video" customCardBodyClass="object-fit-container" reactCode={object11}>
                            <video src={video1}
                                className="object-contain !rounded-md border dark:border-defaultborder/10"
                                autoPlay loop muted></video>
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <Showcode title="Object Fit Cover Video" customCardBodyClass="object-fit-container" reactCode={object12}>
                            <video src={video1}
                                className="object-cover !rounded-md border dark:border-defaultborder/10"
                                autoPlay loop muted></video>
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <Showcode title="Object Fit Fill Video" customCardBodyClass="object-fit-container" reactCode={object13}>
                            <video src={video1}
                                className="object-fill !rounded-md border dark:border-defaultborder/10"
                                autoPlay loop muted></video>
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <Showcode title="Object Fit Scale Video" customCardBodyClass="object-fit-container" reactCode={object14}>
                            <video src={video1}
                                className="object-scale-down !rounded-md border dark:border-defaultborder/10"
                                autoPlay loop muted></video>
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <Showcode title="Object Fit None Video" customCardBodyClass="object-fit-container" reactCode={object15}>
                            <video src={video1}
                                className="object-none !rounded-md border dark:border-defaultborder/10"
                                autoPlay loop muted></video>
                        </Showcode>
                </div>
            </div>
        </Fragment>
    )
}

export default Objectfit