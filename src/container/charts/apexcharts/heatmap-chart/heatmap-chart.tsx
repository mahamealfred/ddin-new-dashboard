import  { FC, Fragment } from 'react'
import {Heatmapoptions, Heatmapseries, Heatoptions, Heatseries, Rangeheatoptions, Rangeheatseries, Withoutoptions, Withoutseries } from '../../../../components/ui/data/charts/apexcharts/heatmapadata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';


interface HeatmapchartProps {}

const Heatmapchart: FC<HeatmapchartProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Heatmap Charts" activepage="Apex Charts" mainpage="Apex Heatmap Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Heatmap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="heatmap-basic">
                            <ApexchartsComponent chartOptions={Heatoptions} chartSeries={Heatseries} type="heatmap" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multi Series Heatmap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="heatmap-multiseries">
                            <ApexchartsComponent chartOptions={Heatmapoptions} chartSeries={Heatmapseries} type="heatmap" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Color Range Heatmap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="heatmap-colorrange">
                            <ApexchartsComponent chartOptions={Rangeheatoptions} chartSeries={Rangeheatseries} type="heatmap" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Heatmap Range Without Shades</div>
                        </div>
                        <div className="box-body">
                            <div id="heatmap-range">
                            <ApexchartsComponent chartOptions={Withoutoptions} chartSeries={Withoutseries} type="heatmap" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Heatmapchart