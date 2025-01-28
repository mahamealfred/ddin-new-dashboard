import  { FC,Fragment } from 'react'
import  { Ampoptions, Ampseries, Areaoptions, Areaseries, Mixedoptions, Mixedseries, Multioptions, Multiseries } from '../../../../components/ui/data/charts/apexcharts/mixedchartsdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';
interface MixedchartsProps {}

const Mixedcharts: FC<MixedchartsProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Mixed Charts" activepage="Apex Charts" mainpage="Apex Mixed Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line &amp; Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-linecolumn">
                            <ApexchartsComponent chartOptions={Mixedoptions} chartSeries={Mixedseries} type="line" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multiple Y-Axis Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-multiple-y">
                            <ApexchartsComponent chartOptions={Multioptions} chartSeries={Multiseries} type="line" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line &amp; Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-linearea">
                            <ApexchartsComponent chartOptions={Areaoptions} chartSeries={Areaseries} type="line" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line,Column &amp; Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-all">
                            <ApexchartsComponent chartOptions={Ampoptions} chartSeries={Ampseries} type="line" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Mixedcharts