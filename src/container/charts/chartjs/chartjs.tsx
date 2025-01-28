import  { FC, Fragment } from 'react';
import * as chartjsdata from "../../../components/ui/data/charts/chartjsdata";
import Pageheader from '../../../components/common/page-header/pageheader';
import SpkChartJs from '../../../@spk/spk-packages/spk-chartjs';

interface ChartjsProps {}

const Chartjs: FC<ChartjsProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Chartjs" activepage="Charts" mainpage="Chartjs" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Line Chart</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-charts" type="line" chartOptions={chartjsdata.Option1} chartSeries={chartjsdata.Data1} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Bar Chart</div>
                        </div>
                        <div className="box-body">
                             <SpkChartJs id="chartjs-charts" type="bar" chartOptions={chartjsdata.Option2} chartSeries={chartjsdata.Data2} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Pie Chart</div>
                        </div>
                        <div className="box-body">
                             <SpkChartJs id="chartjs-charts" type="pie" chartOptions={chartjsdata.Option3} chartSeries={chartjsdata.Data3} height='200px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Doughnut Chart</div>
                        </div>
                        <div className="box-body">
                             <SpkChartJs id="chartjs-charts" type="doughnut" chartOptions={chartjsdata.Option4} chartSeries={chartjsdata.Data4} height='200px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Mixed Chart</div>
                        </div>
                        <div className="box-body">
                             <SpkChartJs id="chartjs-charts" type="scatter" chartOptions={chartjsdata.Option5} chartSeries={chartjsdata.Data5} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Polar Chart</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-charts" type="polarArea" chartOptions={chartjsdata.Option6} chartSeries={chartjsdata.Data6} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Radial Chart</div>
                        </div>
                        <div className="box-body">
                                 <SpkChartJs id="chartjs-charts" type="radar" chartOptions={chartjsdata.Option7} chartSeries={chartjsdata.Data7} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Scatter Chart</div>
                        </div>
                        <div className="box-body">
                                <SpkChartJs id="chartjs-charts" type="scatter" chartOptions={chartjsdata.Option8} chartSeries={chartjsdata.Data8} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Bubble Chart</div>
                        </div>
                        <div className="box-body">
                             <SpkChartJs id="chartjs-charts" type="bubble" chartOptions={chartjsdata.Option9} chartSeries={chartjsdata.Data9} height='250px' />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Chartjs