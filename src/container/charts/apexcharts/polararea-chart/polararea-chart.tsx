import  { FC, Fragment } from 'react'
import { Chromeoptions, Chromeseries, Polaroptions, Polarseries } from '../../../../components/ui/data/charts/apexcharts/polarareachartdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';

interface PolarareachartProps {}

const Polarareachart: FC<PolarareachartProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Polar Area Charts" activepage="Apex Charts" mainpage="Apex Polar Area Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Polar Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="polararea-basic">
                            <ApexchartsComponent chartOptions={Polaroptions} chartSeries={Polarseries} type="polarArea" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Polar Area Monochrome Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="polararea-monochrome">
                            <ApexchartsComponent chartOptions={Chromeoptions} chartSeries={Chromeseries} type="polarArea" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Polarareachart