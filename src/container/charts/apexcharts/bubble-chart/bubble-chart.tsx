import  { FC, Fragment } from 'react'
import { B3doptions, B3dseries, Bubbleoptions, Bubbleseries}from "../../../../components/ui/data/charts/apexcharts/bubblechartdata";
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';

interface BubblechartProps {}

const Bubblechart: FC<BubblechartProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Bubble Charts" activepage="Apex Charts" mainpage="Apex Bubble Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Simple Bubble Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bubble-simple">
                            <ApexchartsComponent chartOptions={Bubbleoptions} chartSeries={Bubbleseries} type="bubble" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">3D Bubble Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bubble-3d">
                            <ApexchartsComponent chartOptions={B3doptions} chartSeries={B3dseries} type="bubble" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Bubblechart