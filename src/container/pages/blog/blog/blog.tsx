import  { FC, Fragment } from 'react';
import { blog, blog1, Blogslide, Populartopics, Populartopics1 } from '../../../../components/ui/data/pages/blogs/blogdata';
import { Link } from 'react-router-dom';
import SwiperComponent from '../../../../@spk/spk-packages/swiper-component';
import { RecentPostsdata } from '../../../../components/ui/data/pages/profiledata';
import SpkBlogimgcards from '../../../../@spk/spk-pages/spkblogimgcards';
import SpkBadge from '../../../../@spk/uielements/spk-badge';
import SpkButton from '../../../../@spk/uielements/spk-button';

interface BlogProps { }

const Blog: FC<BlogProps> = () => {
    return (
        <Fragment>
            <div className="container my-[3rem] ">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-body !p-0">
                                <SwiperComponent slides={Blogslide} centeredSlides={true} spaceBetween={30} autoplay={true} effect='fade' className='mySwiper'/>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            {blog.map((idx)=>(
                                <div className="xxl:col-s   pan-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12" key={Math.random()}>
                                    <SpkBlogimgcards Navigate={`${import.meta.env.BASE_URL}pages/blog/blog-details/`} card={idx} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <div className="flex justify-between items-center mb-3">
                            <h5 className="mb-0 font-semibold text-[1.25rem] text-defaulttextcolor">Popular Topics</h5>
                            <p className="mb-0 font-semibold">
                                <Link to="#" className="text-primary"><u>View All</u></Link>
                            </p>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            {Populartopics.map((idx) => (
                                <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-4 col-span-6" key={Math.random()}>
                                    <Link to="#">
                                        <div className="box !bg-black/20 overlay-card text-white">
                                            <img src={idx.src} className="card-img" alt="..." />
                                            <div className="card-img-overlay flex flex-column p-0 over-content-bottom">
                                                <div className="box-footer border-t-0">
                                                    <h6 className="font-semibold mb-0 text-white text-[1rem]">{idx.text}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-6 xxl:col-span-8 col-span-12">
                                <div className="grid grid-cols-12 gap-x-6">
                                    {blog1.map((idx)=>(
                                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12" key={Math.random()}>
                                            <SpkBlogimgcards Navigate={`${import.meta.env.BASE_URL}pages/blog/blog-details/`} buttonclass={idx.class} card={idx} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="xl:col-span-6 xxl:col-span-4 col-span-12">
                                <div className="box">
                                    <div className="box-header flex items-center justify-between">
                                        <div className="box-title">
                                            Featured Blogs
                                        </div>
                                        <div>
                                            <SpkBadge variant="primary/10" customClass="text-primary">32 Blogs</SpkBadge>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <ul className="list-group">
                                            {RecentPostsdata.map((idx)=>(
                                                <li className="list-group-item" key={Math.random()}>
                                                    <div className="flex flex-wrap items-center">
                                                        <span className="avatar avatar-xl me-4">
                                                            <img src={idx.src} className="img-fluid !rounded-md" alt="..." />
                                                        </span>
                                                        <div className="flex-grow">
                                                            <Link to="#" className="text-[0.875rem] font-semibold mb-0">{idx.name}</Link>
                                                            <p className="mb-1 popular-blog-content text-truncate">
                                                                {idx.text}
                                                            </p>
                                                            <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">{idx.date}</span>
                                                        </div>
                                                        <div>
                                                            <SpkButton buttontype="button" Label="button" variant="light" Size="sm" customClass="ti-btn rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                            <li className="list-group-item text-center">
                                                <SpkButton buttontype="button" variant="primary" customClass="ti-btn !font-medium !mb-0">Load more</SpkButton>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            {Populartopics1.map((idx) => (
                                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12" key={Math.random()}>
                                    <SpkBlogimgcards Navigate={`${import.meta.env.BASE_URL}pages/blog/blog-details/`} card={idx} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="sm:ltr:float-right sm:rtl:float-left mb-6">
                    <nav aria-label="Page navigation">
                        <ul className="pagination mb-0 flex flex-row rounded-sm text-[1rem]">
                            <li className="page-item disabled">
                                <Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">
                                    Prev
                                </Link>
                            </li>
                            <li className="page-item active"><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">1</Link></li>
                            <li className="page-item "><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">2</Link></li>
                            <li className="page-item ">
                                <Link aria-label="anchor" className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">
                                    <i className="bi bi-three-dots"></i>
                                </Link>
                            </li>
                            <li className="page-item "><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">17</Link></li>
                            <li className="page-item">
                                <Link className="page-link !text-primary !py-[0.375rem] !px-[0.75rem]" to="#">
                                    next
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default Blog;