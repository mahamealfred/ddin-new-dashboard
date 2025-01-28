import  {FC, Fragment } from 'react';
import {border1, border2, border3, border4, border5, border6, border7, border8} from '../../../components/prism-code/utilities-prism';
import Pageheader from '../../../components/common/page-header/pageheader';
import Showcode from '../../../components/common/showcode/showcode';
import media58 from "../../../assets/images/media/media-58.jpg";
interface BordersProps {}

const Borders: FC<BordersProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Borders" activepage="Utilities" mainpage="Borders" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Borders" reactCode={border1}>
                            <span className="border dark:border-defaultborder/10 border-container"></span>
                            <span className="border-t dark:border-defaultborder/10 border-container"></span>
                            <span className="border-e dark:border-defaultborder/10 border-container"></span>
                            <span className="border-b dark:border-defaultborder/10 border-container"></span>
                            <span className="border-s dark:border-defaultborder/10 border-container"></span>
                        </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Remove Borders" reactCode={border2}>
                            <span className="border-0 border-container"></span>
                            <span className="border dark:border-defaultborder/10 border-t-0 border-container"></span>
                            <span className="border dark:border-defaultborder/10 border-e-0 border-container"></span>
                            <span className="border dark:border-defaultborder/10 border-b-0 border-container"></span>
                            <span className="border dark:border-defaultborder/10 border-s-0 border-container"></span>
                        </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-5 col-span-12">
                    <Showcode title="Border Widths" reactCode={border3}>
                            <span className="border-1 dark:border-defaultborder/10 border-container"></span>
                            <span className="border-container dark:border-defaultborder/10 border-2"></span>
                            <span className="border-container dark:border-defaultborder/10 border-4"></span>
                            <span className="border-container dark:border-defaultborder/10 border-8"></span>
                        </Showcode>
                </div>
                <div className="xl:col-span-7 col-span-12">
                    <Showcode title="Border Colors" reactCode={border4}>
                            <span className="border border-container !border-primary"></span>
                            <span className="border border-container !border-secondary"></span>
                            <span className="border border-container !border-success"></span>
                            <span className="border border-container !border-danger"></span>
                            <span className="border border-container !border-warning"></span>
                            <span className="border border-container !border-info"></span>
                            <span className="border border-container !border-light"></span>
                            <span className="border border-container !border-black"></span>
                            <span className="border border-container !border-white"></span>
                        </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Border Color Styling" reactCode={border5}>
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email
                                    address</label>
                                <input type="email" className="form-control w-full !rounded-md !border-success"
                                    id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="h4 pb-4 mb-4 text-danger border-b !border-danger">
                                Below Shows Danger Border
                            </div>
                            <div
                                className="p-4 bg-info/10 border !border-info  !border-s-0 rounded-e-md mb-1">
                                Customizing borders with background colors
                            </div>
                        </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Border With Opacity" reactCode={border6}>
                            <div className="border border-success  p-2 mb-2">This is default success border</div>
                            <div className="border border-success/75  p-2 mb-2">This is 75%
                                opacity
                                success border
                            </div>
                            <div className="border border-success/50  p-2 mb-2">This is 50%
                                opacity
                                success border
                            </div>
                            <div className="border border-success/25  p-2 mb-2 ">This is 25%
                                opacity
                                success border
                            </div>
                            <div className="border border-success/10 p-2">This is 10% opacity
                                success
                                border
                            </div>
                        </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Border Radius" customCardBodyClass="!flex flex-wrap gap-2" reactCode={border7}>
                            <img src={media58} className="bd-placeholder-img rounded-md" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-t-md" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-e-md" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-b-md" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-s-md" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-full" alt="..." />
                            <img src={media58} className="bd-placeholder-img  rounded-full" alt="..." />
                        </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Sizes" customCardBodyClass="!flex flex-wrap gap-2" reactCode={border8}>
                            <img src={media58} className="bd-placeholder-img rounded-none" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-sm" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-md" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-lg" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-xl" alt="..." />
                        </Showcode>
                </div>
            </div>
        </Fragment>
    )
}

export default Borders