import  { FC, Fragment } from 'react'
import { Basicpoptions, Basicpseries, Multipoptions, Multipseries, Angleoptions, Angleseries, Circleoptions, Circleseries, Gaugeoptions, Gaugeseries, Imageoptions, Imageseries, Semioptions, Semiseries }from '../../../../components/ui/data/charts/apexcharts/radialchartdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';

interface RadialbarchartProps {}

const Radialbarchart: FC<RadialbarchartProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex radialbar Charts" activepage="Apex Charts" mainpage="Apex radialbar Charts" />
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Basic Pie Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="radialbar-basic">
                                <ApexchartsComponent chartOptions={Basicpoptions} chartSeries={Basicpseries} type="radialBar" height={290} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Multiple Radialbar Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="radialbar-multiple">
                                <ApexchartsComponent chartOptions={Multipoptions} chartSeries={Multipseries} type="radialBar" height={290} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Circle Chart - Custom Angle</div>
                            </div>
                            <div className="box-body">
                                <div id="circle-custom">
                                <ApexchartsComponent chartOptions={Angleoptions} chartSeries={Angleseries} type="radialBar" height={290} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Gradient Circle Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="gradient-circle">
                                <ApexchartsComponent chartOptions={Circleoptions} chartSeries={Circleseries} type="radialBar" height={290} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Stroked Circular Gauge</div>
                            </div>
                            <div className="box-body">
                                <div id="circular-stroked">
                                <ApexchartsComponent chartOptions={Gaugeoptions} chartSeries={Gaugeseries} type="radialBar" height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Circle Chart With Image</div>
                            </div>
                            <div className="box-body">
                                <div id="circle-image">
                                <ApexchartsComponent chartOptions={Imageoptions} chartSeries={Imageseries} type="radialBar" height={310} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Semi Circular Gauge</div>
                            </div>
                            <div className="box-body">
                                <div id="circular-semi">
                                <ApexchartsComponent chartOptions={Semioptions} chartSeries={Semiseries} type="radialBar" height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default Radialbarchart