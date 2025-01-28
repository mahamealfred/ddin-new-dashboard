import  { FC, Fragment } from 'react'
import { Annotationoptions, Annotationseries, Brushoptions, Brushseries, Dashedoptions, Dashedseries, Gradientoptions, Gradientseries, Labeloptions, Labelseries, Lineoptions, Linerealoptions, Linerealseries, Lineseries, Nulloptions, Nullseries, Stepoptions, Stepseries, Syncingoptions, Syncingseries, Zoomoptions, Zoomseries, optionsArea, optionsLine, optionsLine2, seriesArea, seriesLine, seriesLine2 }   from '../../../../components/ui/data/charts/apexcharts/linechartsdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';

interface LinechartsProps {}

const Linecharts: FC<LinechartsProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Line Charts" activepage="Apex Charts" mainpage="Apex Line Charts" />
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Basic Line Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="line-chart">
                                    <ApexchartsComponent chartOptions={Lineoptions} chartSeries={Lineseries} type='line' height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Line Chart With Data Labels</div>
                            </div>
                            <div className="box-body">
                                <div id="line-chart-datalabels">
                                    <ApexchartsComponent chartOptions={Labeloptions} chartSeries={Labelseries} type='line' height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Zoomable Time Series</div>
                            </div>
                            <div className="box-body">
                                <div id="zoom-chart">
                                    <ApexchartsComponent chartOptions={Zoomoptions} chartSeries={Zoomseries} type='area' height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Line With Annotations</div>
                            </div>
                            <div className="box-body">
                                <div id="annotation-chart">
                                    <ApexchartsComponent chartOptions={Annotationoptions} chartSeries={Annotationseries} type="area" height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Brush Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="brush-chart1">
                                    <ApexchartsComponent chartOptions={Brushoptions} chartSeries={Brushseries} type="line" height={230} />
                                </div>
                                <div id="brush-chart">
                                    <ApexchartsComponent chartOptions={optionsLine} chartSeries={seriesLine} type="area" height={130} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">StepLine Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="stepline-chart">
                                    <ApexchartsComponent chartOptions={Stepoptions} chartSeries={Stepseries} type="line" height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Gradient Line Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="gradient-chart">
                                    <ApexchartsComponent chartOptions={Gradientoptions} chartSeries={Gradientseries} type="line" height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Missing/Null Values Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="null-chart">
                                    <ApexchartsComponent chartOptions={Nulloptions} chartSeries={Nullseries} type="line" height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Real Time Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="dashed-chart">
                                    <ApexchartsComponent chartOptions={Linerealoptions} chartSeries={Linerealseries} type="line" height={400} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Dashed Line Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="dashed-chart">
                                    <ApexchartsComponent chartOptions={Dashedoptions} chartSeries={Dashedseries} type="line" height={400} />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">Syncing Charts</div>
                            </div>
                            <div className="box-body">
                                <div id="chart-line">
                                    <ApexchartsComponent chartOptions={Syncingoptions} chartSeries={Syncingseries} type="line" height={160} />
                                </div>
                                <div id="chart-line2">
                                    <ApexchartsComponent chartOptions={optionsLine2} chartSeries={seriesLine2} type="line" height={160} />
                                </div>
                                <div id="chart-area">
                                    <ApexchartsComponent chartOptions={optionsArea} chartSeries={seriesArea} type="area" height={160} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default Linecharts