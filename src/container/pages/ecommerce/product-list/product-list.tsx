import  {FC, Fragment, useState } from 'react'
import { Productlistdata } from '../../../../components/ui/data/pages/ecommerces/productlistdata';
import { Link } from 'react-router-dom';
import Pageheader from '../../../../components/common/page-header/pageheader';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import Spktables from '../../../../@spk/tables/spk-tables';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface ProductlistProps {}
const Productlist: FC<ProductlistProps>  = () => {

    const [ListData, setListData] = useState([...Productlistdata
    ]);
    const handleDelete = (idToRemove: number) => {
        const updatedListData = ListData.filter((item) => item.id !== idToRemove);
        setListData(updatedListData);
    };

    const [selectAllChecked, setSelectAllChecked] = useState(false);

    // Create a state variable to track selected items
    const [selectedItems, setSelectedItems] = useState<any>([]);

    // Function to handle the "Select All" checkbox click event
    const handleSelectAllClick = () => {
        setSelectAllChecked(!selectAllChecked);

        // Update the state of individual checkboxes in the tbody
        if (selectAllChecked) {
            setSelectedItems([]);
        } else {
            const allIds = ListData.map((item) => item.id);
            setSelectedItems(allIds);
        }
    };

    // Function to handle individual checkbox clicks
    const handleCheckboxClick = (id: number) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item: number) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }

        // Check if all individual checkboxes are selected and update the "Select All" checkbox accordingly
        const allSelected = selectedItems.length === ListData.length;
        setSelectAllChecked(allSelected);
    };

    return (
        <Fragment>
            <Pageheader currentpage="Products List" activepage="Ecommerce" mainpage="Products List" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Products List
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive mb-4">
                                <Spktables tableClass="table whitespace-nowrap table-bordered min-w-full" showCheckbox={true} checkboxclass="check-all"
                                   onChange={handleSelectAllClick} checked={selectAllChecked} header={[{ title: 'Product', headerClassname:'!text-start' }, { title: 'Category', headerClassname:'text-start' },
                                     { title: 'Price', headerClassname:'text-start' }, { title: 'Stock', headerClassname:'text-start' },  { title: 'Gender', headerClassname:'text-start' }, { title: 'Seller', headerClassname:'text-start' }, { title: 'Published', headerClassname:'text-start' },{ title: 'Action', headerClassname:'text-start' }]}>
                                        {ListData.map((idx) => (
                                            <tr className="product-list" key={Math.random()}>
                                                <td className="product-checkbox"><input className="form-check-input" type="checkbox" id={idx.id.toString()}
                                                    defaultValue=""
                                                    aria-label="..."
                                                    onChange={() => handleCheckboxClick(idx.id)}
                                                    checked={selectedItems.includes(idx.id)} /></td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="font-semibold">
                                                            {idx.product}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkBadge variant="light" customClass="text-default">{idx.category}</SpkBadge>
                                                </td>
                                                <td>{idx.price}</td>
                                                <td>{idx.stock}</td>
                                                <td>{idx.gender}</td>
                                                <td>{idx.seller}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/ecommerce/edit-products/`}
                                                            className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                                className="ri-pencil-line"></i></Link>
                                                        <Link aria-label="anchor" to="#" onClick={() => handleDelete(idx.id)}
                                                            className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                                className="ri-delete-bin-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </Spktables>
                            </div>
                            <div className="sm:flex items-center justify-between flex-wrap">
                                <nav aria-label="Page navigation" className="">
                                    <ul className="ti-pagination mb-0 flex flex-row rounded-sm text-[1rem] !ps-0">
                                        <li className="page-item disabled">
                                            <Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">
                                                Previous
                                            </Link>
                                        </li>
                                        <li className="page-item active"><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">2</Link></li>
                                        <li className="page-item sm:block hidden "><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link !text-primary !py-[0.375rem] !px-[0.75rem]" to="#">
                                                next
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <SpkButton variant="" buttontype="button" customClass="ti-btn bg-danger text-white !font-medium m-1" >Delete All</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Productlist