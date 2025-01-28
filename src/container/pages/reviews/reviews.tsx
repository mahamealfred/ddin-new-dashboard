import  { FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import face15 from "../../../assets/images/faces/15.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face16 from "../../../assets/images/faces/16.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face7 from "../../../assets/images/faces/7.jpg"; 
import SpkReviewcards from '../../../@spk/spk-pages/spk-reviewcards';
interface ReviewsProps {}

const Reviews: FC<ReviewsProps> = () => {
  interface review {
    id: number
    src: string
    name: string
    title: string
    class: string
    text: string
}


 const Reviewslist:review[] = [
        { id: 1, src: face15, name: 'Json Taylor', title: 'CEO OF NORJA', class: 'half-fill', text: '12 days ago' },
        { id: 2, src: face4, name: 'Melissa Blue', title: 'MANAGER CHO', class: 'half-fill', text: '7 days ago' },
        { id: 3, src: face2, name: 'Kiara Advain', title: 'CEO OF EMPIRO', class: 'line', text: '2 days ago' },
        { id: 4, src: face10, name: 'Jhonson Smith', title: 'CHIEF SECRETARY MBIO', class: 'half-fill', text: '16 hrs ago' },
        { id: 5, src: face12, name: 'Dwayne Stort', title: 'CEO ARMEDILLO', class: 'line', text: '22 days ago' },
        { id: 6, src: face3, name: 'Jasmine Kova', title: 'AGGENT AMIO', class: 'half-fill', text: '26 days ago' },
        { id: 7, src: face16, name: 'Dolph MR', title: 'CEO MR BRAND', class: 'fill', text: '1 month ago' },
        { id: 8, src: face5, name: 'Brenda Simpson', title: 'CEO AIBMO', class: 'half-fill', text: '1 month ago' },
        { id: 9, src: face7, name: 'Julia Sams', title: 'HELP SECRETARY BHOL', class: 'fill', text: '2 month ago' },
    ];

    return (
        <Fragment>
            <Pageheader currentpage="Reviews" activepage="Pages" mainpage="Reviews" />
            <div className="container">
                <div className="max-w-6xl mx-auto reviews-container">
                    <div className="grid grid-cols-12 sm:gap-x-6 gap-y-4">
                        {Reviewslist.map((idx) =>(

                        <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}>
                            <SpkReviewcards Navigate='#' Color="primary" Name={idx.name} Timevalue={idx.text} Imgsrc={idx.src}  Rating={idx.class} Title={idx.title} />
                        </div>
                        ))}
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="ti-pagination  mb-4 justify-end">
                            <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#" >Previous</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >1</Link></li>
                            <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" to="#" >2</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >3</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#" >Next</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </Fragment>
    )
}

export default Reviews