import  { FC, Fragment } from 'react'
import { Baroptions, Barseries, Cateoptions, Cateseries, Groupoptions, Groupseries, Imageoptions, Imageseries, Makeroptions, Makerseries, Negativeoptions, Negativeseries, Optionsbar100, Patternoptions, Patternseries, Reverseoptions, Reverseseries, Seriesbar100, Stackbaroptions, Stackbarseries} from '../../../../components/ui/data/charts/apexcharts/barchartsdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';

interface BarchartsProps {}

const Barcharts: FC<BarchartsProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Bar Charts" activepage="Apex Charts" mainpage="Apex Bar Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-basic">
                            <ApexchartsComponent chartOptions={Baroptions} chartSeries={Barseries} type="bar" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Grouped Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-group">
                            <ApexchartsComponent chartOptions={Groupoptions} chartSeries={Groupseries} type="bar" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-stacked">
                            <ApexchartsComponent chartOptions={Stackbaroptions} chartSeries={Stackbarseries} type="bar" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">100% Stacked Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-full">
                            <ApexchartsComponent chartOptions={Optionsbar100} chartSeries={Seriesbar100} type="bar" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar Chart With Negative Values</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-negative">
                            <ApexchartsComponent chartOptions={Negativeoptions} chartSeries={Negativeseries} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar Chart With Markers</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-markers">
                            <ApexchartsComponent chartOptions={Makeroptions} chartSeries={Makerseries} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Reversed Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-reversed">
                            <ApexchartsComponent chartOptions={Reverseoptions} chartSeries={Reverseseries} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Categogry DataLabels</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-categories">
                            <ApexchartsComponent chartOptions={Cateoptions} chartSeries={Cateseries} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Patterned Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-pattern">
                            <ApexchartsComponent chartOptions={Patternoptions} chartSeries={Patternseries} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Image Fill</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-image">
                            <ApexchartsComponent chartOptions={Imageoptions} chartSeries={Imageseries} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Barcharts