
import  {FC, Fragment} from 'react';
// import required modules

import Pageheader from '../../../components/common/page-header/pageheader';
import SwiperComponent from '../../../@spk/spk-packages/swiper-component';
import { Basicdata, CubeSwiper, CustomPagination, Dynamicpagination, Keyboardcontrol, Mousewheel, Navigationdata, OverflowSwiper, Paginationdata, Paginationfraction, PaginationProgress, ScrollbarSwiper, VerticalSwiper } from '../../../components/ui/data/advancedui/swiperjsdata';

interface SwiperjsProps {}

const Swiperjs: FC<SwiperjsProps> = () => {

    return (
        <Fragment>
            <Pageheader currentpage="Swiper" activepage=" Advanced Ui" mainpage="Swiper" />

            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Swiper
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="swiper swiper-basic">
                                <SwiperComponent slides={Basicdata} autoplay={true} loop={true} spaceBetween={30} slidesPerView={1} centeredSlides={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Swiper With Navigation
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="swiper swiper-navigation">
                                <SwiperComponent slides={Navigationdata} spaceBetween={30} centeredSlides={true} navigation={true} className="mySwiper" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Swiper with Pagination
                            </div>
                        </div>
                        <div className="box-body">
                            <SwiperComponent slides={Paginationdata} spaceBetween={30} centeredSlides={true} autoplay={true} pagination={true} className="mySwiper" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Dynamic Pagination
                            </div>
                        </div>
                        <div className="box-body">
                            <SwiperComponent slides={Dynamicpagination} autoplay={true} pagination={true} className="mySwiper" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Pagination With Progress
                            </div>
                        </div>
                        <div className="box-body">
                            <SwiperComponent slides={PaginationProgress} pagination={{ type: 'progressbar', }} autoplay={true} navigation={true} className="mySwiper" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Pagination Fraction
                            </div>
                        </div>
                        <div className="box-body">
                            <SwiperComponent slides={Paginationfraction} pagination={{ type: 'fraction', }} navigation={true} autoplay={true}
                                className="mySwiper swiper pagination-fraction " />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Custom Pagination
                            </div>
                        </div>
                        <div className="box-body">
                            <SwiperComponent slides={CustomPagination} pagination={true}
                                autoplay={true} className="mySwiper swiper custom-pagination" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Scrollbar Swiper
                            </div>
                        </div>
                        <div className="box-body">
                            <SwiperComponent slides={ScrollbarSwiper} scrollbar={true} autoplay={true} className="mySwiper swiper scrollbar-swiper" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Vertical Swiper
                            </div>
                        </div>
                        <div className="box-body">
                            <SwiperComponent slides={VerticalSwiper} direction={'vertical'} pagination={true} autoplay={true} className="swiper mySwiper5 swiper-vertical !h-[352px]" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Mouse Wheel Control
                            </div>
                        </div>
                        <div className="box-body">
                            <SwiperComponent slides={Mousewheel} direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={true} autoplay={true}
                                className="mySwiper swiper vertical vertical-mouse-control !h-[352px]" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Keyboard Control
                            </div>
                        </div>
                        <div className="box-body">
                            <SwiperComponent slides={Keyboardcontrol} slidesPerView={1} spaceBetween={30} keyboard={{ enabled: true, }} pagination={true} autoplay={true}
                                navigation={true} className="mySwiper" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Effect Cube
                            </div>
                        </div>
                        <div className="box-body">
                                <SwiperComponent slides={CubeSwiper} effect={'cube'} slidesPerView={1} grabCursor={true} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94, }} autoplay={true}
                                    pagination={true} className="mySwiper swiper swiper-effect-cube !w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Effect Coverflow
                            </div>
                        </div>
                        <div className="box-body">
                            <SwiperComponent slides={OverflowSwiper} effect={'coverflow'}
                                grabCursor={true}
                                slidesPerView={4}
                                loop={true}
                                autoplay={true}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={true}
                                className="mySwiper swiper swiper-overflow" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Swiperjs