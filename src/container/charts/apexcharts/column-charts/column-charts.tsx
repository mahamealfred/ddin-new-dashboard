import  { FC, Fragment } from 'react'
import {Columnoptions, Columnseries, Labeloptions, Labelsseries, Loadoptions, Loadseries, Makeroptions, Makerseries, Options100, Rangeoptions, Rangeseries, Rotateoptions, Rotateseries, Series100, Stackcolumnoptions, Stackcolumnseries, Valueoptions, Valueseries,} from '../../../../components/ui/data/charts/apexcharts/columnchartsdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';

interface ColumnchartsProps {}

const Columncharts: FC<ColumnchartsProps> = () =>{

    return (
        <Fragment>
            <Pageheader currentpage="Apex Column Charts" activepage="Apex Charts" mainpage="Apex Column Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-basic">
                            <ApexchartsComponent chartOptions={Columnoptions} chartSeries={Columnseries} type="bar" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Datalabels</div>
                        </div>
                        <div className="box-body">
                            <div id="column-datalabels">
                            <ApexchartsComponent chartOptions={Labeloptions} chartSeries={Labelsseries} type="bar" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-stacked">
                            <ApexchartsComponent chartOptions={Stackcolumnoptions} chartSeries={Stackcolumnseries} type="bar" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">100% Stacked Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-stacked-full">
                            <ApexchartsComponent chartOptions={Options100} chartSeries={Series100} type="bar" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Markers</div>
                        </div>
                        <div className="box-body">
                            <div id="column-markers">
                            <ApexchartsComponent chartOptions={Makeroptions} chartSeries={Makerseries} type="bar" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Rotated Labels</div>
                        </div>
                        <div className="box-body">
                            <div id="column-rotated-labels">
                            <ApexchartsComponent chartOptions={Rotateoptions} chartSeries={Rotateseries} type="bar" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Negative Values</div>
                        </div>
                        <div className="box-body">
                            <div id="column-negative">
                            <ApexchartsComponent chartOptions={Valueoptions} chartSeries={Valueseries} type="bar" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Range Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-range">
                            <ApexchartsComponent chartOptions={Rangeoptions} chartSeries={Rangeseries} type="bar" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Distributed Columns Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="columns-distributed">
                            <ApexchartsComponent chartOptions={Loadoptions} chartSeries={Loadseries} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Columncharts