import  { Fragment, useState } from 'react'
import { Itemsdata1 } from '../../../../components/ui/data/pages/ecommerces/ecommercedata';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { AddToCart, ProductReduxData } from '../../../../redux/action';
import { Link } from 'react-router-dom';
import Pageheader from '../../../../components/common/page-header/pageheader';
import Spkwishlistcard from '../../../../@spk/spk-pages/ecommerce/spkwishlistcard';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import SpkButton from '../../../../@spk/uielements/spk-button';

const Wishlist = () => {
    function Confirmalert(id:string) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Remove'
        }).then((result) => {
          if (result.isConfirmed) {
            handleRemove(id);
          }
        });
      }

     
      const [allData, setAllData] = useState(Itemsdata1);
      const [originalData, setOriginalData] = useState(Itemsdata1); // Store original data
  
      function handleRemove(id: string) {
          const newList = allData.filter((item: any) => item.id !== id);
          setAllData(newList);
          setOriginalData(originalData.filter((item: any) => item.id !== id)); // Update original data'
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success'
          });
      }
  
      const allElement2: any = [];
      const myfunction = (InputData: string) => {
          const filteredData = originalData.slice(); // Make a copy of original data
          for (const element of filteredData) {
              if (element.title[0] === " ") {
                  element.title = element.title.trim();
              }
              if (element.title.toLowerCase().includes(InputData.toLowerCase())) {
                  if (element.title.toLowerCase().startsWith(InputData.toLowerCase())) {
                      allElement2.push(element);
                  }
              }
          }
          setAllData(allElement2);
          if (InputData.trim() === "") {
              setAllData(originalData); // Revert to original data if search input is empty
          }
      };
    return (
        <Fragment>
            <Pageheader currentpage="Wishlist" activepage="Ecommerce" mainpage="Wishlist" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body sm:flex items-center justify-between">
                            <div className="text-[.9375rem] mb-0">Total 
                                <SpkBadge variant="success" customClass="text-white mx-1">12</SpkBadge> products are wishlisted</div>
                            <div className="flex mt-2 sm:mt-0" role="search">
                                <input className="form-control form-control-sm me-2 !rounded-sm" type="search" placeholder="Search" aria-label="Search" onChange={(ele) => { myfunction(ele.target.value); }} />
                                <SpkButton variant="light" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium" type="submit">Search</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
                {allData ? allData.map((idx) => (
                    <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}>
                        <Spkwishlistcard card={idx} Removefunc={() => Confirmalert(idx.id)} />
                    </div>
                )) : ""}
            </div>

            <nav aria-label="Page navigation" className="">
                <ul className="ti-pagination flex ltr:float-right rtl:float-left mb-4 rounded-sm text-[1rem]">
                    <li className="page-item disabled">
                        <Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">
                            Previous
                        </Link>
                    </li>
                    <li className="page-item"><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">1</Link></li>
                    <li className="page-item "><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">2</Link></li>
                    <li className="page-item "><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">3</Link></li>
                    <li className="page-item">
                        <Link className="page-link !text-primary !py-[0.375rem] !px-[0.75rem]" to="#">
                            next
                        </Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

const mapStateToProps = (state:any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart, ProductReduxData })(Wishlist);