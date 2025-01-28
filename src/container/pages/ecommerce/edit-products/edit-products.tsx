import  { FC, Fragment, useState } from 'react';
import  { AvailabilityData, BrandData, CategoryData, ColorsData, GenderData, ProductsData, PublishedData, SizeData } from '../../../../components/ui/data/pages/ecommerces/editproductsdata'
import { FilePond } from 'react-filepond';
import Pageheader from '../../../../components/common/page-header/pageheader';
import SunEditorComponent from '../../../../@spk/spk-packages/editor-component';
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import SpkButton from '../../../../@spk/uielements/spk-button';
import SpkFlatpickr from '../../../../@spk/spk-packages/datepicker-component';

interface EditproductsProps {}

const Editproducts: FC<EditproductsProps> = () =>{

const [files, setFiles] = useState<any>([]);
const [files1, setFiles1] = useState<any>([]);
const [startDate, setStartDate] = useState(new Date()); //React date picker
const handleDateChange = (date: Date | null) => {
    // Ensure date is defined before setting it
    if (date) {
        setStartDate(date);
    }
};

 const defaultContent = `
    .Care Instructions: Machine Wash <br/>
    .Neckline: The pullover is framed with a Crew Neck <br/>
    .Fit Type: Regular Fit <br/>
    .Long Sleeves: The pullover is designed with Long Sleeves. <br/>
    .Soft Hand feel: The fabric is extremely soft and comfortable, keeping you at ease for hours. <br/>
    .Solid: The pullover is available in a solid pattern.<br/>
`;
    return (
        <Fragment>
            <Pageheader currentpage="Edit Products" activepage="Ecommerce" mainpage="Edit Products" />
            <div className="grid grid-cols-12">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body add-products !p-0">
                            <div className="p-6">
                                <div className="grid grid-cols-12 gap-y-4 md:gap-[3rem]">
                                    <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-12 col-span-12">
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-12 col-span-12">
                                                <label htmlFor="product-name-add" className="form-label">Product Name</label>
                                                <input type="text" className="form-control" id="product-name-add" placeholder="Name" defaultValue="Light Blue Sweat Shirt" />
                                                <label htmlFor="product-name-add" className="form-label mt-1 text-[0.75rem] opacity-[0.5] text-muted mb-0">*Product Name should not exceed 30 characters</label>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Category</label>
                                                <SelectComponent option={CategoryData} mainClass='w-full !rounded-md' searchable={true} defaultvalue={[CategoryData[5]]}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Gender</label>
                                                <SelectComponent option={GenderData} mainClass='w-full !rounded-md' placeholder='Select' searchable={true} defaultvalue={[GenderData[1]]}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Size</label>
                                                <SelectComponent option={SizeData} mainClass='w-full !rounded-md' placeholder='Select' searchable={true} defaultvalue={[SizeData[3]]}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Brand</label>
                                                <SelectComponent option={BrandData} mainClass='w-full !rounded-md' placeholder='Select' searchable={true} defaultvalue={[BrandData[5]]}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12 color-selection">
                                                <label className="form-label">Colors</label>
                                                <SelectComponent multi option={ColorsData} mainClass='w-full !rounded-md' placeholder='Select' searchable={true} defaultvalue={[ColorsData[0]]}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label htmlFor="product-cost-add" className="form-label">Enter Cost</label>
                                                <input type="text" className="form-control" id="product-cost-add" placeholder="Cost" defaultValue="$1299.99" />
                                                <label htmlFor="product-cost-add" className="form-label mt-1 text-[0.75rem] opacity-[0.5] text-muted mb-0">*Mention final price of the product</label>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12">
                                                <label htmlFor="product-description-add" className="form-label">Product Description</label>
                                                <textarea
                                                    className="form-control"
                                                    id="product-description-add"
                                                    rows={2}
                                                    defaultValue="Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours"
                                                />
                                                <label className="form-label mt-1 text-[0.75rem] opacity-[0.5] text-muted mb-0">*Description should not exceed 500 letters</label>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12">
                                                <label className="form-label">Product Features</label>
                                                <div id="product-features">
                                                     <SunEditorComponent height={'200px'} defaulContent={defaultContent} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-12 col-span-12">
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-4 col-span-12">
                                                <label htmlFor="product-actual-price" className="form-label">Actual Price</label>
                                                <input type="text" className="form-control" id="product-actual-price" placeholder="Actual Price" defaultValue="$1,499.90" />
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <label htmlFor="product-dealer-price" className="form-label">Dealer Price</label>
                                                <input type="text" className="form-control" id="product-dealer-price" placeholder="Dealer Price" defaultValue="$1,299.99" />
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <label htmlFor="product-discount" className="form-label">Discount</label>
                                                <input type="text" className="form-control" id="product-discount" placeholder="Discount in %" defaultValue="0.75%" />
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label htmlFor="product-type" className="form-label">Product Type</label>
                                                <input type="text" className="form-control" id="product-type" placeholder="Type" defaultValue="Watch" />
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label htmlFor="product-weight" className="form-label">Item Weight</label>
                                                <input type="text" className="form-control" id="product-weight" placeholder="Weight in gms" defaultValue="180gms" />
                                            </div>
                                            <div className="xl:col-span-12 col-span-12 product-documents-container">
                                                <p className="font-semibold mb-2 text-[.875rem]">Product Images :</p>
                                                <FilePond className="multiple-filepond"
                                                    files={files}
                                                    onupdatefiles={setFiles}
                                                    allowMultiple={true}
                                                    maxFiles={6}
                                                    server="/api"
                                                    name="files"
                                                    labelIdle='Drag & Drop your file here or click '
                                                />
                                            </div>
                                            <label className="xl:col-span-12 col-span-12 form-label opacity-[0.5] mt-3">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. </label>
                                            <div className="xl:col-span-12 col-span-12 product-documents-container">
                                                <p className="font-semibold mb-2 text-[.875rem]">Warrenty Documents :</p>
                                                <FilePond className="multiple-filepond"
                                                    files={files1}
                                                    onupdatefiles={setFiles1}
                                                    allowMultiple={true}
                                                    maxFiles={6}
                                                    server="/api"
                                                    name="files" /* sets the file input name, it's filepond by default */
                                                    labelIdle='Drag & Drop your file here or click '
                                                />
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Publish Date</label>
                                                <SpkFlatpickr placeholder="Choose date" inputClass="ti-form-input" value={startDate}  onfunChange={handleDateChange} options={  {disableMobile: "true", dateFormat: "Y-m-d"}} />
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Publish Time</label>
                                                <SpkFlatpickr inputClass=" form-control ti-form-input focus:z-10" value={startDate} onfunChange={handleDateChange} options={{ enableTime: 'true', noCalendar: 'true', dateFormat: 'H:i' }} />
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Published Status</label>
                                                <SelectComponent option={PublishedData} placeholder='Select' searchable={true} defaultvalue={[PublishedData[2]]}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Product Tags</label>
                                                <SelectComponent multi option={ProductsData} placeholder='Select' searchable={true} defaultvalue={[ProductsData[3], ProductsData[0]]}/>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12">
                                                <label className="form-label">Availability</label>
                                                <SelectComponent option={AvailabilityData} placeholder='Select' searchable={true}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-t border-dashed dark:border-defaultborder/10 sm:flex justify-end">
                                <SpkButton buttontype="button" variant="primary" customClass="ti-btn m-1">Add Product<i className="bi bi-plus-lg ms-2"></i></SpkButton>
                                <SpkButton buttontype="button" variant="success" customClass="ti-btn m-1">Save Product<i className="bi bi-download ms-2"></i></SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Editproducts