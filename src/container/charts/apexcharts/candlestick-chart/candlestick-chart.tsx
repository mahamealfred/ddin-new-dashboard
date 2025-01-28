
import  { FC, Fragment } from 'react'
import  { Axisoptions, Axisseries, Candleoptions, Candleseries, Candlesoptions, Candlesseries, Linecoptions, Linecseries, optionsBar, seriesBar }  from '../../../../components/ui/data/charts/apexcharts/candlestickdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';

interface CandlestickchartProps {}

const Candlestickchart: FC<CandlestickchartProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex CandleStick Charts" activepage="Apec Charts" mainpage="Apex CandleStick Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Candlestick Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="candlestick-basic">
                            <ApexchartsComponent chartOptions={Candleoptions} chartSeries={Candleseries} type="candlestick" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Candlestick Synced With Brush Chart</div>
                        </div>
                        <div className="box-body">
                        <div id="chart-candlestick">
                    <ApexchartsComponent chartOptions={Candlesoptions} chartSeries={Candlesseries} type="candlestick" height={215} />
                </div>
                <div id="chart-bar">
                    <ApexchartsComponent chartOptions={optionsBar} chartSeries={seriesBar} type="bar" height={120} />
                </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Candlestick With Cateory X-axis</div>
                        </div>
                        <div className="box-body">
                            <div id="candlestick-categoryx">
                            <ApexchartsComponent chartOptions={Axisoptions} chartSeries={Axisseries} type="candlestick" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Candlestick With Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="candlestick-line">
                            <ApexchartsComponent chartOptions={Linecoptions} chartSeries={Linecseries} type="candlestick" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Candlestickchart