import  { FC, Fragment } from 'react';
import Showcode from '../../../components/common/showcode/showcode';
import Pageheader from '../../../components/common/page-header/pageheader';
import SpkButton from '../../../@spk/uielements/spk-button';
import { Buttongroupdata, reactgroup1, reactgroup2, reactgroup3, reactgroup4, reactgroup5, reactgroup6, reusegroup1, reusegroup2, reusegroup3, reusegroup4, reusegroup5, reusegroup6 } from '../../../components/prism-code/uielementsprism';


interface ButtongroupProps {}

const Buttongroup: FC<ButtongroupProps> = () => {
    const Buttonsdata=[
        {id:'1', color:'primary'},
        {id:'2', color:'secondary'},
        {id:'3', color:'warning'},
        {id:'4', color:'danger'},
        {id:'5', color:'info'},
        {id:'6', color:'success'}
    ]
    return (
        <Fragment>
            <Pageheader currentpage="Button Group" activepage="Ui Elements" mainpage="Button Group" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Basic Example" reactCode={reactgroup1} reusableCode={reusegroup1}>
                        <div className="inline-flex rounded-md shadow-sm me-5">
                            <SpkButton buttontype="button" customClass="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Year
                            </SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Month
                            </SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Date
                            </SpkButton>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Mixed Style" reactCode={reactgroup2} reusableCode={reusegroup2}>
                        <div className="ti-btn-group !gap-0" role="group" aria-label="Basic mixed styles example">
                            <SpkButton buttontype="button" variant="danger-full" customClass="ti-btn-group py-3 px-4 border border-danger/10">
                                Year
                            </SpkButton>
                            <SpkButton buttontype="button" variant="warning-full" customClass="ti-btn-group py-3 px-4 border border-danger/10">
                                Month
                            </SpkButton>
                            <SpkButton buttontype="button" variant="success-full" customClass="ti-btn-group py-3 px-4 border border-danger/10">
                                Date
                            </SpkButton>
                        </div>
                    </Showcode>

                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Button Group Break" reactCode={reactgroup3} reusableCode={reusegroup3}>
                        <div className="flex flex-col md:inline-flex md:flex-row rounded-sm shadow-sm">
                            <SpkButton buttontype="button" customClass="py-2 px-3 inline-flex justify-center items-center gap-2 -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-sm sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-sm border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Item 1
                            </SpkButton>
                            <SpkButton buttontype="button" customClass="py-2 px-3 inline-flex justify-center items-center gap-2 -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-sm sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-sm border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Item 2
                            </SpkButton>
                            <SpkButton buttontype="button" customClass="py-2 px-3 inline-flex justify-center items-center gap-2 -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-sm sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-sm border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Item 3
                            </SpkButton>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Sizing" reactCode={reactgroup4} reusableCode={reusegroup4} customCardBodyClass="space-y-2">
                                <div className="inline-flex rounded-md shadow-sm me-6">
                                    <SpkButton buttontype="button" customClass="ti-btn-group border py-3 px-4 bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                            Small
                                        </SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn-group border py-3 px-4 bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Small
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn-group border py-3 px-4 bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Small
                                    </SpkButton>
                                </div>

                                <div className="inline-flex rounded-md shadow-sm me-6">
                                    <SpkButton buttontype="button" customClass="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 sm:p-4 p-3">
                                                Default
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 sm:p-4 p-3">
                                        Default
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 sm:p-4 p-3">
                                        Default
                                    </SpkButton>
                                </div>

                                <div className="inline-flex rounded-md shadow-sm">
                                    <SpkButton buttontype="button" customClass="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 p-[1.3125rem]">
                                        Large
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 p-[1.3125rem]">
                                        Large
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 p-[1.3125rem]">
                                        Large
                                    </SpkButton>
                                </div>
                            </Showcode>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Vertical Variation" reactCode={reactgroup5} reusableCode={reusegroup5}>
                                <div className="max-w-xs flex flex-col rounded-sm shadow-sm">
                                    <SpkButton buttontype="button" customClass="focus-visible:outline-none focus:!outline-none py-2 px-3 inline-flex justify-center items-center gap-2 rounded-t-md border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Item 1
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="-mt-px focus-visible:outline-none focus:!outline-none py-2 px-3 inline-flex justify-center items-center gap-2 border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Item 2
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="-mt-px focus-visible:outline-none focus:!outline-none py-2 px-3 inline-flex justify-center items-center gap-2 rounded-b-md border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Item 3
                                    </SpkButton>
                                </div>
                            </Showcode>
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <Showcode title="Basic Button Group" reactCode={reactgroup6} reusableCode={reusegroup6} dataCode={Buttongroupdata}>
                            <div className="inline-flex rounded-md shadow-sm mb-5 me-5">
                                <SpkButton buttontype="button" customClass="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                    Year
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Month
                                </SpkButton>
                                <SpkButton buttontype="button" customClass="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                    Date
                                </SpkButton>
                            </div>
                                {Buttonsdata.map((idx)=>(
                                    <div className="inline-flex rounded-md shadow-sm mb-5 me-5" key={Math.random()}>
                                        <SpkButton buttontype="button" customClass={`ti-btn-group py-3 px-4 border ti-btn-${idx.color}-full border-white/10 dark:border-white/10`}>
                                            Year
                                        </SpkButton>
                                        <SpkButton buttontype="button" customClass={`ti-btn-group py-3 px-4 border ti-btn-${idx.color}-full border-white/10 dark:border-white/10`}>
                                                Month
                                        </SpkButton>
                                        <SpkButton buttontype="button" customClass={`ti-btn-group py-3 px-4 border ti-btn-${idx.color}-full border-white/10 dark:border-white/10`}>
                                            Date
                                        </SpkButton>
                                    </div>
                                ))}
                        </Showcode>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Buttongroup