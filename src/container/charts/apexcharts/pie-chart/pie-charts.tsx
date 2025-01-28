import  { FC, Fragment, useState } from 'react'
import  {Filledoptions, Filledseries, Gradientoptions, Gradientseries, Monooptions, Monoseries, Patternoptions, Patternseries, Pieoptions, Pieseries, Simpleoptions, Simpleseries, Updateoptions, Updateseries}from '../../../../components/ui/data/charts/apexcharts/piechartdata'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface PiechartProps {}

const Piechart: FC<PiechartProps> = () =>{
    
    const [state, setState]= useState<any>({ series: [44, 55, 13, 33] })

    const appendData = () => {
        const arr = state.series.slice();
        arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

        setState({
            series: arr,
        });
    }

    const removeData = () => {
        if (state.series.length === 1) return;

        const arr = state.series.slice();
        arr.pop();

        setState({
            series: arr,
        });
    }

    const randomize = () => {
        setState({
            series: state.series.map(function () {
                return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            }),
        });
    }

    const reset = ()=>  {
        setState({
            series: [44, 55, 13, 33],
        });
    }
    return (
        <Fragment>
            <Pageheader currentpage="Apex Pie Charts" activepage="Apex Charts" mainpage="Apex Pie Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="pie-basic">
                            <ApexchartsComponent chartOptions={Pieoptions} chartSeries={Pieseries} type="pie" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Simple Donut Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-simple">
                            <ApexchartsComponent chartOptions={Simpleoptions} chartSeries={Simpleseries} type="donut" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Updating Donut Chart</div>
                        </div>
                        <div className="box-body">
                    <ApexchartsComponent chartOptions={Updateoptions} chartSeries={Updateseries} type="donut" height={280} />
                    <div className="text-center mt-4">
                    <SpkButton variant="primary" customClass="ti-btn m-1"
                        onclickfunc={appendData}
                    >
                        + ADD
                    </SpkButton>
                    &nbsp;
                    <SpkButton variant="primary" customClass="ti-btn m-1"
                        onclickfunc={removeData}
                    >
                        - REMOVE
                    </SpkButton>
                    &nbsp;
                    <SpkButton variant="primary" customClass="ti-btn m-1"
                        onclickfunc={randomize}
                    >
                        RANDOMIZE
                    </SpkButton>
                    &nbsp;
                    <SpkButton variant="primary" customClass="ti-btn m-1"
                        onclickfunc={reset}
                    >
                        RESET
                    </SpkButton>
                </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Monochrome Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="pie-monochrome">
                            <ApexchartsComponent chartOptions={Monooptions} chartSeries={Monoseries} type="pie" height={280} width={240} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Gradient Donut Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-gradient">
                            <ApexchartsComponent chartOptions={Gradientoptions} chartSeries={Gradientseries} type="donut" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Donut Chart With Patterns</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-pattern">
                            <ApexchartsComponent chartOptions={Patternoptions} chartSeries={Patternseries} type="donut" height={250} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Image Filled Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="pie-image">
                            <ApexchartsComponent chartOptions={Filledoptions} chartSeries={Filledseries} type="pie" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Piechart