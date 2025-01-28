
import  { FC, Fragment } from 'react'
import  {Advanceoptions, Advanceseries, Coloroptions, Colorseries, MultiToptions, MultiTseries, Tgroupoptions, Tgroupseries, Timeoptions, Timeseries} from '../../../../components/ui/data/charts/apexcharts/timelinechartsdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';

interface TimelinechartProps {}

const Timelinechart: FC<TimelinechartProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Timeline Charts" activepage="Apex Charts" mainpage="Apex Timeline Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic TImeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-basic">
                            <ApexchartsComponent chartOptions={Timeoptions} chartSeries={Timeseries} type="rangeBar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multiple Colored TImeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-colors">
                            <ApexchartsComponent chartOptions={Coloroptions} chartSeries={Colorseries} type="rangeBar" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multi Series Timeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-multi">
                            <ApexchartsComponent chartOptions={MultiToptions} chartSeries={MultiTseries} type="rangeBar" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Advanced Timeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-advanced">
                            <ApexchartsComponent chartOptions={Advanceoptions} chartSeries={Advanceseries} type="rangeBar" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Timeline-Grouped Rows</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-grouped">
                            <ApexchartsComponent chartOptions={Tgroupoptions} chartSeries={Tgroupseries} type="rangeBar" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Timelinechart