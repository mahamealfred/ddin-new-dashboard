import  { FC, Fragment } from 'react'
import { Rangeareaoptions, Rangeareaseries, Rangeoptions, Rangeseries } from "../../../../components/ui/data/charts/apexcharts/rangechartdata";
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';
interface RangeareachartProps {}

const Rangeareachart: FC<RangeareachartProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Range Area Charts" activepage="Apex Charts" mainpage="Apex Range Area Charts" />
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Basic Range Area Chart
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="rangearea-basic">
                                <ApexchartsComponent chartOptions={Rangeareaoptions} chartSeries={Rangeareaseries} type="rangeArea" height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Combo Range Area Chart
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="rangearea-combo">
                                <ApexchartsComponent chartOptions={Rangeoptions} chartSeries={Rangeseries} type="rangeArea" height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default Rangeareachart