import  { FC, Fragment } from 'react'
import  { Areagithuboptions, Areagithubseries, Areaoptions, Areaseries, Areatimeoptions, Areatimeseries, Basicoptions, Basicseries, Dateoptions, Dateseries, Negativeoptions, Negativeseries, optionsYears, seriesYears, Spilineoptions, Spilineseries, Stackedoptions, Stackedseries }from '../../../../components/ui/data/charts/apexcharts/areachartdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';
 import face1 from "../../../../assets/images/faces/1.jpg"
interface AreachartsProps {}

const Areacharts: FC<AreachartsProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Area Charts" activepage="Apex Charts" mainpage="Apex Area Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="area-basic">
                                <ApexchartsComponent chartOptions={Basicoptions} chartSeries={Basicseries} type='area' width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Spline Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="area-spline">
                                <ApexchartsComponent chartOptions={Spilineoptions} chartSeries={Spilineseries} type='area' width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Area Chart With Negative Values</div>
                        </div>
                        <div className="box-body">
                            <div id="area-negative">
                                <ApexchartsComponent chartOptions={Negativeoptions} chartSeries={Negativeseries} type='area'  width={"100%"} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Selection-Github Style Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="chart-months">
                                <ApexchartsComponent chartOptions={Areagithuboptions} chartSeries={Areagithubseries} type='area'  width={"100%"} height={130}/>
                            </div>
                            <div className="github-style flex items-center"> 
                                <div className="me-2"> 
                                    <img className="userimg rounded" src={face1} data-hoverbox-user-id="634573" alt="" width="38" height="38"/>
                                 </div>
                                <div className="userdetails lh-1"> 
                                    <a className="username fw-semibold text-sm">coder</a> 
                                    <span className="cmeta block mt-1"> 
                                        <span className="commits">95</span> commits </span>
                                </div> 
                          </div>
                            <div id="chart-years">
                                    <ApexchartsComponent chartOptions={optionsYears} chartSeries={seriesYears} type="area" width={"100%"} height={140} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="area-stacked">
                                <ApexchartsComponent chartOptions={Stackedoptions} chartSeries={Stackedseries} type='area'  width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="area-stacked">
                                <ApexchartsComponent chartOptions={Areatimeoptions} chartSeries={Areatimeseries} type='area'  width={"100%"} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Area Chart With Null Values</div>
                        </div>
                        <div className="box-body">
                            <div id="area-irregular">
                                <ApexchartsComponent chartOptions={Areaoptions} chartSeries={Areaseries} type='area'  width={"100%"} height={350} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Area Chart-Datetime X-Axis Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="area-null">
                                <ApexchartsComponent chartOptions={Dateoptions} chartSeries={Dateseries} type='area'  width={"100%"} height={320} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Areacharts;
