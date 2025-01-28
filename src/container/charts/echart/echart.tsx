import  { FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader'
import SpkEcharts from '../../../@spk/spk-packages/spk-echart'
import { Backoption, Backseries, Baroption, Barseries, Barwithlabeloption, Barwithlabelseries, Basicoption, Basicseries, Bubbleoption, Bubbleseries, Candleoption, Candleseries, Doughnutoption, Doughnutseries, Funneloption, Funnelseries, Gaugeoption, Gaugeseries, Graphoption, Graphseries, Heatoption, Heatseries, HoriStackoption, HoriStackseries, Horizontaloption, Horizontalseries, Lineoption, Lineseries, Negativeoption, Negativeseries, Pieoption, Pieseries, Radaroption, Radarseries, Scattoption, Scattseries, Smoothoption, Smoothseries, Stackareaoption, Stackareaseries, Stackoption, Stackseries, Stepoption, Stepseries, Styleoption, Styleseries, Treeoption, Treeseries, Waterfallseries, Wateroption } from '../../../components/ui/data/charts/echartdata'

interface EchartProps {}

const Echart: FC<EchartProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Echarts" activepage="Charts" mainpage="Echarts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Line Chart</div>
                        </div>
                        <div className="box-body">
                                <div id="echart-basic-line">
                                    <SpkEcharts chartOptions={Lineoption} chartSeries={Lineseries}  mainClass="echart-charts" />
                                </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Smoothed Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-smoothed-line">
                                 <SpkEcharts chartOptions={Smoothoption} chartSeries={Smoothseries}  mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-basic-area">
                                 <SpkEcharts chartOptions={Basicoption} chartSeries={Basicseries} id="echart-area-line" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-stacked-line">
                                <SpkEcharts chartOptions={Stackoption} chartSeries={Stackseries} id="echart-stacked-line" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-stacked-area">
                                <SpkEcharts chartOptions={Stackareaoption} chartSeries={Stackareaseries} id="echart-stacked-area" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title"> Step Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-stacked-area">
                                <SpkEcharts chartOptions={Stepoption} chartSeries={Stepseries} id="echart-step-line" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-bar-basic">
                                <SpkEcharts chartOptions={Baroption} chartSeries={Barseries} id="echart-bar-basic" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Background Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-bar-background">
                                <SpkEcharts chartOptions={Backoption} chartSeries={Backseries} id="echart-bar-background" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Style For a Single Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-bar-single">
                                <SpkEcharts chartOptions={Styleoption} chartSeries={Styleseries} id="echart-bar-single" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Water Fall Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-waterfall">
                                <SpkEcharts chartOptions={Wateroption} chartSeries={Waterfallseries} id="echart-waterfall" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Negative Values Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-negative-values">
                                <SpkEcharts chartOptions={Negativeoption} chartSeries={Negativeseries} id="echart-negative-values" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Labels Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-negative-values">
                                <SpkEcharts chartOptions={Barwithlabeloption} chartSeries={Barwithlabelseries} id="echart-bar-labels" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Horizontal Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-bar-horizontal">
                                 <SpkEcharts chartOptions={Horizontaloption} chartSeries={Horizontalseries} id="echart-bar-horizontal" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Horizontal Stacked Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-stacked-horizontal">
                                <SpkEcharts chartOptions={HoriStackoption} chartSeries={HoriStackseries} id="echart-stacked-horizontal" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-pie">
                                 <SpkEcharts chartOptions={Pieoption} chartSeries={Pieseries} id="echart-pie" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Doughnut Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-doughnut">
                                 <SpkEcharts chartOptions={Doughnutoption} chartSeries={Doughnutseries} id="echart-doughnut" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-scatter">
                                <SpkEcharts chartOptions={Scattoption} chartSeries={Scattseries} id="echart-scatter" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bubble Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-bubble">
                                 <SpkEcharts chartOptions={Bubbleoption} chartSeries={Bubbleseries} id="echart-bubble" mainClass="echart-charts"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Candlestick Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-candlestick">
                                <SpkEcharts chartOptions={Candleoption} chartSeries={Candleseries} id="echart-candlestick" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Radar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-basic-radar">
                                  <SpkEcharts chartOptions={Radaroption} chartSeries={Radarseries} id="echart-basic-radar" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Heatmap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-heatmap">
                                <SpkEcharts chartOptions={Heatoption} chartSeries={Heatseries} id="echart-heatmap" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
             <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-treemap">
                                <SpkEcharts chartOptions={Treeoption} chartSeries={Treeseries} id="echart-treemap" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Funnel Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-funnel">
                                <SpkEcharts chartOptions={Funneloption} chartSeries={Funnelseries} id="echart-funnel" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Gauge Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-gauge-basic">
                                 <SpkEcharts chartOptions={Gaugeoption} chartSeries={Gaugeseries} id="echart-gauge-basic" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Simple Graph Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-simple-graph">
                                 <SpkEcharts chartOptions={Graphoption} chartSeries={Graphseries} id="echart-simple-graph" mainClass="echart-charts" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Echart