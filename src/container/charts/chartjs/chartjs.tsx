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
                            <div className="box-title">Daily Volume of Transactions</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-line" type="line" chartOptions={chartjsdata.Option1} chartSeries={chartjsdata.Data1} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Top Services by Amount</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-bar" type="bar" chartOptions={chartjsdata.Option2} chartSeries={chartjsdata.Data2} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-pie" type="pie" chartOptions={chartjsdata.Option3} chartSeries={chartjsdata.Data3} height='200px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Transaction Count by Service</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-doughnut" type="doughnut" chartOptions={chartjsdata.Option4} chartSeries={chartjsdata.Data4} height='200px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Outliers in Transactions</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-scatter1" type="scatter" chartOptions={chartjsdata.Option5} chartSeries={chartjsdata.Data5} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Performance of Services</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-polar" type="polarArea" chartOptions={chartjsdata.Option6} chartSeries={chartjsdata.Data6} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Radar Chart</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-radar" type="radar" chartOptions={chartjsdata.Option7} chartSeries={chartjsdata.Data7} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Daily Fluctuation Pattern</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-scatter2" type="scatter" chartOptions={chartjsdata.Option8} chartSeries={chartjsdata.Data8} height='250px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Bubble Chart</div>
                        </div>
                        <div className="box-body">
                            <SpkChartJs id="chartjs-bubble" type="bubble" chartOptions={chartjsdata.Option9} chartSeries={chartjsdata.Data9} height='250px' />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Chartjs;
