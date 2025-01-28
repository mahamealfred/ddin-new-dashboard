import  { FC, Fragment } from 'react'
import  {Dateoptions, Dateseries, Scatter1options, Scatter1series, Scatteroptions, Scatterseries} from '../../../../components/ui/data/charts/apexcharts/scatterchartdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';
interface ScatterchartProps {}

const Scatterchart: FC<ScatterchartProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Scatter Charts" activepage="Apex Charts" mainpage="Apex Scatter Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="scatter-basic">
                            <ApexchartsComponent chartOptions={Scatteroptions} chartSeries={Scatterseries} type="scatter" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Datetime Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="scatter-datetime">
                            <ApexchartsComponent chartOptions={Dateoptions} chartSeries={Dateseries} type="scatter" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Image Fill Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="scatter-image">
                            <ApexchartsComponent chartOptions={Scatter1options} chartSeries={Scatter1series} type="scatter" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Scatterchart