import { Addproduct, Addproduct1, Addproduct2, Addproduct3, Addproduct4, Addproduct5, Addproduct6, Addproduct7} from '../../../../components/ui/data/pages/ecommerce/addproductsdata';
import  { FC, Fragment, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import Pageheader from '../../../../components/common/page-header/pageheader';
import SunEditorComponent from '../../../../@spk/spk-packages/editor-component';
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import SpkButton from '../../../../@spk/uielements/spk-button';
import SpkFlatpickr from '../../../../@spk/spk-packages/datepicker-component';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface AddproductsProps {}

const Addproducts: FC<AddproductsProps> = () => {

    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);

    const [_startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        if (date) {
            setStartDate(date);
        }
    };

    const [_startDate1, setStartDate1] = useState(new Date());
    const handleDateChange1 = (date: Date | null) => {
        if (date) {
            setStartDate1(date);
        }
    };

    return (
        <Fragment>
            <Pageheader currentpage="Add Products" activepage="Ecommerce" mainpage="Add Products" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12  col-span-12">
                    <div className="box">
                        <div className="box-body add-products !p-0">
                            <div className="p-6">
                                <div className="grid grid-cols-12 md:gap-x-[3rem] gap-0">
                                    <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-12 col-span-12">
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-12 col-span-12">
                                                <label htmlFor="product-name-add" className="form-label">Product Name</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="product-name-add" placeholder="Name" />
                                                <label htmlFor="product-name-add" className="form-label mt-1 text-[0.75rem] opacity-[0.5] !text-[#8c9097] dark:text-white/50 !mb-0">*Product Name should not exceed 30 characters</label>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Category</label>
                                                <SelectComponent option={Addproduct} mainClass='w-full !rounded-md' placeholder='Category' searchable={true}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Gender</label>
                                                <SelectComponent option={Addproduct1} mainClass='w-full !rounded-md' placeholder='Category' searchable={true}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Size</label>
                                                <SelectComponent option={Addproduct2} mainClass='w-full !rounded-md' placeholder='Category' searchable={true}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label  className="form-label">Brand</label>
                                                <SelectComponent option={Addproduct3} mainClass='w-full !rounded-md' placeholder='Select' searchable={true}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12 color-selection">
                                                <label className="form-label">Colors</label>
                                                <SelectComponent option={Addproduct4} mainClass='w-full !rounded-md' placeholder='Select' searchable={true}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label htmlFor="product-cost-add" className="form-label">Enter Cost</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="product-cost-add" placeholder="Cost" />
                                                <label htmlFor="product-cost-add" className="form-label mt-1 text-[0.75rem] opacity-[0.5] !text-[#8c9097] dark:text-white/50 mb-0">*Mention final price of the product</label>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12">
                                                <label htmlFor="product-description-add" className="form-label">Product Description</label>
                                                <textarea className="form-control w-full !rounded-md" id="product-description-add" rows={2}></textarea>
                                                <label htmlFor="product-description-add" className="form-label mt-1 text-[0.75rem] opacity-[0.5] !text-[#8c9097] dark:text-white/50 mb-0">*Description should not exceed 500 letters</label>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12 mb-4">
                                                <label className="form-label">Product Features</label>
                                                <div id="product-features">
                                                        <SunEditorComponent height={'200px'}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-12 col-span-12">
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-4 col-span-12">
                                                <label htmlFor="product-actual-price" className="form-label">Actual Price</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="product-actual-price" placeholder="Actual Price" />
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <label htmlFor="product-dealer-price" className="form-label">Dealer Price</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="product-dealer-price" placeholder="Dealer Price" />
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <label htmlFor="product-discount" className="form-label">Discount</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="product-discount" placeholder="Discount in %" />
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label htmlFor="product-type" className="form-label">Product Type</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="product-type" placeholder="Type" />
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label htmlFor="product-discount" className="form-label">Item Weight</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="product-discount1" placeholder="Weight in gms" />
                                            </div>
                                            <div className="xl:col-span-12 col-span-12 product-documents-container">
                                                <p className="font-semibold mb-2 text-[0.875rem]">Product Images :</p>
                                                <FilePond className="basic-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
                                                    server="/api" allowReorder={true} files={files} onupdatefiles={setFiles} allowMultiple={false} allowImagePreview={true} maxFiles={10} name="filepond"
                                                    labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
                                            </div>
                                            <label className="form-label opacity-[0.5] mt-4 xl:col-span-12 col-span-12">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. </label>
                                            <div className="xl:col-span-12 col-span-12 product-documents-container">
                                                <p className="font-semibold mb-2 text-[0.875rem]">Warrenty Documents :</p>
                                                <FilePond className="product-documents w-full"
                                                    files={files1}
                                                    onupdatefiles={setFiles1}
                                                    allowMultiple={true}
                                                    // maxFiles={6}
                                                    server="/api"
                                                    name="files" /* sets the file input name, it's filepond by default */
                                                    labelIdle='Drag & Drop your file here or click '
                                                />
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Publish Date</label>
                                                <SpkFlatpickr inputClass="ti-form-input" placeholder="Choose Date" options={{dateFormat: "Y-m-d", enableTime: false,}}  onfunChange={handleDateChange} />
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Publish Time</label>
                                                <SpkFlatpickr inputClass="ti-form-input" options={{enableTime: true, noCalendar: true,dateFormat: "H:i",}} placeholder="Choose time" onfunChange={handleDateChange1} />
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Published Status</label>
                                                <SelectComponent option={Addproduct5} mainClass='w-full !rounded-md' placeholder='Select' searchable={true}/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label className="form-label">Product Tags</label>
                                                <SelectComponent option={Addproduct6} mainClass='w-full !rounded-md' placeholder='Select' multi={true} searchable={true} defaultvalue={[Addproduct6[0], Addproduct6[3]]}/>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12">
                                                <label className="form-label">Availability</label>
                                                <SelectComponent option={Addproduct7} mainClass='w-full !rounded-md' placeholder='Select' searchable={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-4 border-t border-dashed dark:border-defaultborder/10 sm:flex justify-end">
                                <SpkButton buttontype="button" variant="primary" customClass="ti-btn !font-medium m-1">Add Product<i className="bi bi-plus-lg ms-2"></i></SpkButton>
                                <SpkButton buttontype="button" variant="success" customClass="ti-btn !font-medium m-1">Save Product<i className="bi bi-download ms-2"></i></SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Addproducts