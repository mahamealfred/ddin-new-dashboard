import  { FC, Fragment, useState } from 'react';
import { Europemap,   USState, USState1,  WorldMap} from '../../../components/ui/data/maps/vectordata';
import Pageheader from '../../../components/common/page-header/pageheader';

interface VectormapsProps {}

const Vectormaps: FC<VectormapsProps> = () => {

  const [_content, setContent] = useState("");

  return(   
  <Fragment>
      <>
            <Pageheader currentpage="Vector Maps" activepage="Maps" mainpage="Vector Maps" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Vector Map</div>
                        </div>
                        <div className="box-body">
                            <div id="vector-map"> 
                            <WorldMap setTooltipContent={setContent} />
                                </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Graticule Map</div>
                        </div>
                        <div className="box-body">
                            <div id="marker-map"> 
                            <USState1/>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Annotation Map</div>
                        </div>
                        <div className="box-body">
                            <div id="marker-image-map"> 
                            <Europemap/>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">USA Map</div>
                        </div>
                        <div className="box-body">
                            <div id="lines-map">
                                 <USState/>
                                 </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  </Fragment>
);}


export default Vectormaps;
