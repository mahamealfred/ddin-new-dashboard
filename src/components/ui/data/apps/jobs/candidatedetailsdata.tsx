
import face1 from "../../../../../assets/images/faces/1.jpg";
import face21 from "../../../../../assets/images/faces/21.jpg";
import face3 from "../../../../../assets/images/faces/3.jpg";

// const exp = <SpkBadge variant="info/10" customClass="badge-md !rounded-full text-info" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>2 years bond accepted</SpkBadge>

// const exp1 = <SpkBadge variant="info/10" customClass="badge-md !rounded-full  text-info" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>1 year bond accepted</SpkBadge>

import SpkCandidate from "../../../../../@spk/apps/spk-candidatecard";

const Candidatedata = [
    {
        id: 1,
        imgSrc: face1,
        title: "Brenda Simpson",
        role: "Software Developer",
        ratings: (
            <>
            <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
            <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
            <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
            <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
            <span className="text-warning"><i className="bi bi-star-half me-1"></i></span>
            </>
          ),
        rate: "(142)",
         bond: '1 year bond accepted',
        experience: "Exp :2 years",
        location: "Kondapur, Hyderabad",
       graduateBadge:'Garduate',
        shiftBadge:'sm:flexible-shift',
        goodBadge:'Good at English',
        joinBadge:'Immediate Joinee',
        skillbadge:'HTML',
        skillbadge1:'CSS',
        skillbadge2:'Javascript',
        skill3:'Angular'
    },
    {
        id: 2,
        imgSrc: face3,
        title: " Dwayne Stort",
        role: "Web Developer",
        ratings: (
            <>
            <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
            <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
            <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
            <span className="text-warning"><i className="bi bi-star me-1"></i></span>
            <span className="text-warning"><i className="bi bi-star me-1"></i></span>
            </>
          ),
        rate: "(35)",
       bond: '2 year bond accepted',
        experience: "Exp : 4 years",
        location: "Gachibowli, Hyderabad",
       graduateBadge:'Garduate',
        shiftBadge:'sm:flexible-shift',
        goodBadge:'Good at English',
        joinBadge:'Within 10 Days',
        skillbadge:'React',
        skillbadge1:'Javascript',
        skillbadge2:'React Navitive',
        skill3:''
    },
    {
        id: 3,
        imgSrc: face21,
        title: "Jasmine Kova",
        role: "Python Developer",
        ratings:(
            <>
                 <span className="text-warning"><i className="bi bi-star-fill"></i></span> 
                 <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                 <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                 <span className="text-warning"><i className="bi bi-star"></i></span> 
                 <span className="text-warning"><i className="bi bi-star"></i></span>
            </>
        ),
        rate: "(56)",
         bond: "",
        experience: "Exp : 5 Years",
        location: "Gachibowli, Chennai",
         graduateBadge:'MBA',
        shiftBadge:'day-shift',
        goodBadge:'Avg at English',
        joinBadge:'Within 30 Days',
        skillbadge:'Python',
        skillbadge1:'Java',
        skillbadge2:'React',
        skill3:''
    },
]

export const CandidateSwiper = Candidatedata.map((idx) => (

    <div className="rtl:dir-rtl" key={Math.random()}>
        <div className="box custom-box">
            <SpkCandidate key={Math.random()} card={idx} tooltip={'Download Resume'} tooltipwishlist={'Wishlist'} profiletooltip={'View Profile'} />
        </div>
    </div>
))

 export const Personaldata=[
    {id:1, heading:'Full Name', text:': Brenda Simpson'},
    {id:2, heading:'Email', text:': brendra@gmail.com'},
    {id:3, heading:'D.O.B', text:': 13 Jan 2022'},
    {id:4, heading:'Gender', text:': Female'},
    {id:5, heading:'Age', text:': 35'},
    {id:6, heading:'Mobile', text:': +91 7865343874'},
    {id:7, heading:'Mother Tongue', text:': Telugu'},
    {id:8, heading:'Marital Status', text:': Unmarried'},
    {id:9, heading:'Blood Group', text:': o +ve'},
    {id:10, heading:'Address', text:'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016'}
 ]