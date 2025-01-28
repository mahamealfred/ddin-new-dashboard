import  { FC, Fragment } from 'react'
import Pageheader from '../../../../components/common/page-header/pageheader';
import ApexchartsComponent from '../../../../@spk/spk-packages/apexcharts-component';
import { Dimensionaloptions, Dimensionalseries, Distributeoptions, Distributeseries, Treecoloroptions, Treecolorseries, Treeoptions, Treeseries } from '../../../../components/ui/data/charts/apexcharts/treemapdata';
interface TreemapchartProps {}

const Treemapchart: FC<TreemapchartProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Apex Treemap Charts" activepage="Apex Charts" mainpage="Apex Treemap Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-basic">
                                <ApexchartsComponent chartOptions={Treeoptions} chartSeries={Treeseries} type="treemap" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multi Dimensional Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-multi">
                                <ApexchartsComponent chartOptions={Dimensionaloptions} chartSeries={Dimensionalseries} type="treemap" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Distributed Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-distributed">
                                 <ApexchartsComponent chartOptions={Distributeoptions} chartSeries={Distributeseries} type="treemap" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Treemap with color ranges</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-colorranges">
                                 <ApexchartsComponent chartOptions={Treecoloroptions} chartSeries={Treecolorseries} type="treemap" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Treemapchart