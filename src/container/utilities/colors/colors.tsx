import  { Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader'
import { Background } from '../../../components/ui/data/utilities/colorsdata'

const Colors = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Colors" activepage="Utilities" mainpage="Colors" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Background Colors
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid md:grid-cols-8 grid-cols-1 sm:grid-cols-4  items-center">
                                {Background.map((idx)=>(
                                <div className="p-4 col-span-1" key={Math.random()}>
                                    <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>bg-{idx.color1}</code></p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Border Colors
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid md:grid-cols-8 grid-cols-1 sm:grid-cols-4  items-center">
                                {Background.map((idx)=>(
                                <div className="p-4 col" key={Math.random()}>
                                    <div className={`m-2 border border-${idx.color} mx-auto color-container`}></div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>border-{idx.color1}</code></p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Background Opacity
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid sm:grid-cols-5 items-center">
                                <div className="p-4 col">
                                    <div className="m-2 bg-success  bg-opacity-100 text-white mx-auto color-container">100%</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>bg-opacity</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 bg-success bg-opacity-75 text-white  mx-auto color-container">75%</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>bg-opacity-75</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 bg-success bg-opacity-50 text-black  mx-auto color-container">50%</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>bg-opacity-50</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 bg-success bg-opacity-25 text-black  mx-auto color-container">25%</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>bg-opacity-25</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 bg-success bg-opacity-10 text-black  mx-auto color-container">10%</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>bg-opacity-10</code></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Text Colors
                            </div>
                        </div>
                        <div className="box-body">
                            <div className=" !flex items-center flex-wrap justify-between">
                                <div className="p-4 col">
                                    <div className="m-2 text-primary font-semibold text-[.875rem] text-center">primary</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-primary</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-secondary font-semibold text-[.875rem] text-center">secondary</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-secondary</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-warning font-semibold text-[.875rem] text-center">warning</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-warning</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-info font-semibold text-[.875rem] text-center">info</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-info</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-success font-semibold text-[.875rem] text-center">success</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-success</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-danger font-semibold text-[.875rem] text-center">danger</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-danger</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-light bg-black text-white font-semibold text-[.875rem] text-center">light</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>.text-light</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-dark font-semibold text-[.875rem] text-center">dark</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-dark</code></p>
                                </div>
                                <div className="p-4 col">
                                    <div className="m-2 text-[#8c9097] dark:text-white/50 font-semibold text-[.875rem] text-center">muted</div>
                                    <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-muted</code></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Text Opacity
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="grid sm:grid-cols-4 items-center">
                                        <div className="p-4 col">
                                            <div className="m-2 text-primary text-opacity-100 font-semibold text-[.875rem] text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>100% opacity</code></p>
                                        </div>
                                        <div className="p-4 col">
                                            <div className="m-2 text-primary text-opacity-75 font-semibold text-[.875rem] text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-opacity-75</code></p>
                                        </div>
                                        <div className="p-4 col">
                                            <div className="m-2 text-primary text-opacity-50 font-semibold text-[.875rem] text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-opacity-50</code></p>
                                        </div>
                                        <div className="p-4 col">
                                            <div className="m-2 text-primary text-opacity-25 font-semibold text-[.875rem] text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 font-semibold text-center"><code className='!text-[0.7rem]'>text-opacity-25</code></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6 className="mb-4">Other Colors:</h6>
            <div className="grid  gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-blue-100 ">blue-100</div>

                            <div className="flex-grow p-4 bg-blue-200 ">blue-200</div>

                            <div className="flex-grow p-4 bg-blue-300 ">blue-300</div>

                            <div className="flex-grow p-4 bg-blue-400 ">blue-400</div>

                            <div className="flex-grow p-4 bg-blue-500">blue-500</div>

                            <div className="flex-grow p-4 bg-blue-600 text-white">blue-600</div>

                            <div className="flex-grow p-4 bg-blue-700 text-white">blue-700</div>

                            <div className="flex-grow p-4 bg-blue-800 text-white">blue-800</div>

                            <div className="flex-grow p-4 bg-blue-900 text-white">blue-900</div>

                            <div className="flex-grow p-4 bg-blue-950 text-white">blue-950</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-indigo-100">indigo-100</div>

                            <div className="flex-grow p-4 bg-indigo-200">indigo-200</div>

                            <div className="flex-grow p-4 bg-indigo-300">indigo-300</div>

                            <div className="flex-grow p-4 bg-indigo-400">indigo-400</div>

                            <div className="flex-grow p-4 bg-indigo-500">indigo-500</div>

                            <div className="flex-grow p-4 bg-indigo-600 text-white">indigo-600</div>

                            <div className="flex-grow p-4 bg-indigo-700 text-white">indigo-700</div>

                            <div className="flex-grow p-4 bg-indigo-800 text-white">indigo-800</div>

                            <div className="flex-grow p-4 bg-indigo-900 text-white">indigo-900</div>

                            <div className="flex-grow p-4 bg-indigo-950 text-white">indigo-950</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-purple-100">purple-100</div>

                            <div className="flex-grow p-4 bg-purple-200">purple-200</div>

                            <div className="flex-grow p-4 bg-purple-300">purple-300</div>

                            <div className="flex-grow p-4 bg-purple-400">purple-400</div>

                            <div className="flex-grow p-4 bg-purple-500">purple-500</div>

                            <div className="flex-grow p-4 bg-purple-600 text-white">purple-600</div>

                            <div className="flex-grow p-4 bg-purple-700 text-white">purple-700</div>

                            <div className="flex-grow p-4 bg-purple-800 text-white">purple-800</div>

                            <div className="flex-grow p-4 bg-purple-900 text-white">purple-900</div>

                            <div className="flex-grow p-4 bg-purple-950 text-white">purple-950</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-pink-100">pink-100</div>

                            <div className="flex-grow p-4 bg-pink-200">pink-200</div>

                            <div className="flex-grow p-4 bg-pink-300">pink-300</div>

                            <div className="flex-grow p-4 bg-pink-400">pink-400</div>

                            <div className="flex-grow p-4 bg-pink-500">pink-500</div>

                            <div className="flex-grow p-4 bg-pink-600 text-white">pink-600</div>

                            <div className="flex-grow p-4 bg-pink-700 text-white">pink-700</div>

                            <div className="flex-grow p-4 bg-pink-800 text-white">pink-800</div>

                            <div className="flex-grow p-4 bg-pink-900 text-white">pink-900</div>

                            <div className="flex-grow p-4 bg-pink-950 text-white">pink-950</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-red-100">red-100</div>

                            <div className="flex-grow p-4 bg-red-200">red-200</div>

                            <div className="flex-grow p-4 bg-red-300">red-300</div>

                            <div className="flex-grow p-4 bg-red-400">red-400</div>

                            <div className="flex-grow p-4 bg-red-500">red-500</div>

                            <div className="flex-grow p-4 bg-red-600 text-white">red-600</div>

                            <div className="flex-grow p-4 bg-red-700 text-white">red-700</div>

                            <div className="flex-grow p-4 bg-red-800 text-white">red-800</div>

                            <div className="flex-grow p-4 bg-red-900 text-white">red-900</div>

                            <div className="flex-grow p-4 bg-red-950 text-white">red-950</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-orange-100">orange-100</div>

                            <div className="flex-grow p-4 bg-orange-200">orange-200</div>

                            <div className="flex-grow p-4 bg-orange-300">orange-300</div>

                            <div className="flex-grow p-4 bg-orange-400">orange-400</div>

                            <div className="flex-grow p-4 bg-orange-500">orange-500</div>

                            <div className="flex-grow p-4 bg-orange-600 text-white">orange-600</div>

                            <div className="flex-grow p-4 bg-orange-700 text-white">orange-700</div>

                            <div className="flex-grow p-4 bg-orange-800 text-white">orange-800</div>

                            <div className="flex-grow p-4 bg-orange-900 text-white">orange-900</div>

                            <div className="flex-grow p-4 bg-orange-950 text-white">orange-950</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-yellow-100">yellow-full</div>

                            <div className="flex-grow p-4 bg-yellow-200">yellow-200</div>

                            <div className="flex-grow p-4 bg-yellow-300">yellow-300</div>

                            <div className="flex-grow p-4 bg-yellow-400">yellow-400</div>

                            <div className="flex-grow p-4 bg-yellow-500">yellow-500</div>

                            <div className="flex-grow p-4 bg-yellow-600 text-white">yellow-600</div>

                            <div className="flex-grow p-4 bg-yellow-700 text-white">yellow-700</div>

                            <div className="flex-grow p-4 bg-yellow-800 text-white">yellow-800</div>

                            <div className="flex-grow p-4 bg-yellow-900 text-white">yellow-900</div>

                            <div className="flex-grow p-4 bg-yellow-950 text-white">yellow-950</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-green-100">green-100</div>

                            <div className="flex-grow p-4 bg-green-200">green-200</div>

                            <div className="flex-grow p-4 bg-green-300">green-300</div>

                            <div className="flex-grow p-4 bg-green-400">green-400</div>

                            <div className="flex-grow p-4 bg-green-500">green-500</div>

                            <div className="flex-grow p-4 bg-green-600 text-white">green-600</div>

                            <div className="flex-grow p-4 bg-green-700 text-white">green-700</div>

                            <div className="flex-grow p-4 bg-green-800 text-white">green-800</div>

                            <div className="flex-grow p-4 bg-green-900 text-white">green-900</div>

                            <div className="flex-grow p-4 bg-green-950 text-white">green-950</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-teal-100">teal-100</div>

                            <div className="flex-grow p-4 bg-teal-200">teal-200</div>

                            <div className="flex-grow p-4 bg-teal-300">teal-300</div>

                            <div className="flex-grow p-4 bg-teal-400">teal-400</div>

                            <div className="flex-grow p-4 bg-teal-500">teal-500</div>

                            <div className="flex-grow p-4 bg-teal-600 text-white">teal-600</div>

                            <div className="flex-grow p-4 bg-teal-700 text-white">teal-700</div>

                            <div className="flex-grow p-4 bg-teal-800 text-white">teal-800</div>

                            <div className="flex-grow p-4 bg-teal-900 text-white">teal-900</div>

                            <div className="flex-grow p-4 bg-teal-950 text-white">teal-950</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-cyan-100">cyan-100</div>

                            <div className="flex-grow p-4 bg-cyan-200">cyan-200</div>

                            <div className="flex-grow p-4 bg-cyan-300">cyan-300</div>

                            <div className="flex-grow p-4 bg-cyan-400">cyan-400</div>

                            <div className="flex-grow p-4 bg-cyan-500">cyan-500</div>

                            <div className="flex-grow p-4 bg-cyan-600 text-white">cyan-600</div>

                            <div className="flex-grow p-4 bg-cyan-700 text-white">cyan-700</div>

                            <div className="flex-grow p-4 bg-cyan-800 text-white">cyan-800</div>

                            <div className="flex-grow p-4 bg-cyan-900 text-white">cyan-900</div>

                            <div className="flex-grow p-4 bg-cyan-950 text-white">cyan-950</div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body xl:flex">
                            <div className="flex-grow p-4 bg-gray-100 dark:text-black">gray-100</div>

                            <div className="flex-grow p-4 bg-gray-200 dark:text-black">gray-200</div>

                            <div className="flex-grow p-4 bg-gray-300 dark:text-black">gray-300</div>

                            <div className="flex-grow p-4 bg-gray-400 dark:text-black">gray-400</div>

                            <div className="flex-grow p-4 bg-gray-500">gray-500</div>

                            <div className="flex-grow p-4 bg-gray-600 text-white">gray-600</div>

                            <div className="flex-grow p-4 bg-gray-700 text-white">gray-700</div>

                            <div className="flex-grow p-4 bg-gray-800 text-white">gray-800</div>

                            <div className="flex-grow p-4 bg-gray-900 text-white">gray-900</div>

                            <div className="flex-grow p-4 bg-gray-900 text-white">gray</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Colors