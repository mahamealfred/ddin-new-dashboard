import  { FC, Fragment } from 'react'
import { Boxoptions, Boxplotoptions, Boxplotseries, Boxseries, Scatteroptions, Scatterseries } from '../../../../components/ui/data/charts/apexcharts/boxplotdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';

interface BoxplotchartProps {}

const Boxplotchart: FC<BoxplotchartProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Boxplot Charts" activepage="Apex Charts" mainpage="Apex Boxplot Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Boxplot Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="boxplot-basic">
                            <ApexchartsComponent chartOptions={Boxoptions} chartSeries={Boxseries} type="boxPlot" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Boxplot With Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="boxplot-scatter">
                            <ApexchartsComponent chartOptions={Scatteroptions} chartSeries={Scatterseries} type="boxPlot" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Horizontal Boxplot Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="boxplot-horizontal">
                            <ApexchartsComponent chartOptions={Boxplotoptions} chartSeries={Boxplotseries} type="boxPlot" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Boxplotchart