import  { FC,Fragment } from 'react';
import { Columns, Data, Data1, Data2, Data3 } from '../../../components/ui/data/tables/gridjsdata';
import "gridjs/dist/theme/mermaid.css"; // (Grid css)
import Pageheader from '../../../components/common/page-header/pageheader';
import SpkGridjstables from '../../../@spk/tables/spk-gridjstable';

interface GridjstableProps {}

const Gridjstable: FC<GridjstableProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Grid JS" activepage="Tables" mainpage="Grid JS" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Table
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-example1" className='table-responsive'>
                                     <SpkGridjstables Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Table With Pagination
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-pagination" className='table-responsive'>
                                <SpkGridjstables Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Table With Search
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-search" className='table-responsive'>
                            <SpkGridjstables Search={true} Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Table Sorting
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-sorting" className='table-responsive'>
                            <SpkGridjstables Sort={true} Search={true} Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Table Loading
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-loading" className='table-responsive'>
                                 <SpkGridjstables Sort={true} Search={true} Data={Data1} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} 
                                //  loading={true}
                                  />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Wide Table
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-wide" className='table-responsive'>
                            <SpkGridjstables reSizable={true}
                            //  wide={true}
                              Sort={true} Search={true} Data={Data2} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Fixed Header
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-header-fixed" className='table-responsive'>
                                <div className='table-responsive'>
                                           <SpkGridjstables fixedHeader={true} Height="350px" Sort={true} Search={true} Data={Data3} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 11 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Hidden Columns
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-hidden-column" className='table-responsive'>
                            <SpkGridjstables Sort={true} Search={true} Data={Data} Columns={Columns} Pagination={{ limit: 5 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Gridjstable