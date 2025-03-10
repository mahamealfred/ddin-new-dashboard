import   { FC, Fragment, useState } from 'react';
import 
//StickyHeadTable,
 { Basiccolumns, Basicdata,
 //  CustomizedTables,  
   } from '../../../components/ui/data/tables/datatabledata';
import Pageheader from '../../../components/common/page-header/pageheader';
import Spkdatatable from '../../../@spk/spk-packages/spk-data-table';

interface DatatableProps {}

const Datatable: FC<DatatableProps> = () => {

  const [editableData, setEditableData] = useState<any>(Basicdata);

  // Function to reset editable data to the initial state
  const handleResetEditableData = () => {
    setEditableData([...Basicdata]); // Reset data to its initial state
  };

  return (
    <Fragment>
      <Pageheader currentpage="Data Tables" activepage="Tables" mainpage="Data Tables" />
      {/* <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Basic DataTable</h5>
            </div>
            <div className="box-body">
              <div className="overflow-auto table-bordered p-3">
                <div id="basic-table" className="ti-custom-table ti-striped-table ti-custom-table-hover">
                <Spkdatatable COLUMNS={Basiccolumns} DATATABLE={Basicdata} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Completed Tranctions</h5>
            </div>
            <div className="box-body space-y-3">
              <div className="overflow-hidden">
                <div id="reactivity-table" className="ti-custom-table ti-striped-table ti-custom-table-hover">
                <Spkdatatable
                    COLUMNS={Basiccolumns}
                    DATATABLE={editableData}
                    editable={true}         // Enables edit mode
                    resetData={handleResetEditableData} // Passes reset handler
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Sticky header Table</h5>
            </div>
            <div className="box-body space-y-3">
              <div className="overflow-hidden">
                <div id="" className="ti-striped-table ti-custom-table-hover">
                     <StickyHeadTable/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Customization Table</h5>
            </div>
            <div className="box-body space-y-3">
              <div className="overflow-hidden">
                <div id="" className="ti-striped-table ti-custom-table-hover">
                <CustomizedTables/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
    </Fragment>
  )
}

export default Datatable