import  {  Fragment, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import face1 from '../../../../../assets/images/faces/1.jpg';
import face21 from '../../../../../assets/images/faces/21.jpg';
import face13 from '../../../../../assets/images/faces/13.jpg';
import face3 from '../../../../../assets/images/faces/3.jpg';

  const LabeledTwoThumbs1 = ({ rtl }:any) => {
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;
  
    const [values, setValues] = useState([20, 40]);
  
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          rtl={rtl}
          onChange={(newValues) => setValues(newValues)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                className="rangeslider-thumb"
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values,
                    colors: ['#ccc', 'rgb(132, 90, 223)', '#ccc'],
                    min: MIN,
                    max: MAX,
                    rtl,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => (
           <Fragment key={Math.random()}>
             <div
              {...props}
              style={{
                ...props.style,
                top:'18px',
                height: '24px',
                width: '24px',
                borderRadius: '4px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // boxShadow: '0px 2px 6px #AAA',
                boxShadow: '0px 2px 6px rgb(170 170 170 / 30%)',
              }}
              key={index}
            >
            <Fragment key={Math.random()}>
            <div
                style={{
                  position: 'absolute',
                  top: '-28px',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
                  padding: '2px',
                  borderRadius: '4px',
                  backgroundColor: 'rgb(132, 90, 223)',
                }}
              >
                {values[index].toFixed(1)}
              </div>
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? "rgb(132, 90, 223)" : '#CCC',
                }}
              />
            </Fragment>
            </div>
           </Fragment>
          )}
        />
      </div>
    );
  };
  
  export default LabeledTwoThumbs1;


  interface Candidate {
    id: number;
   title: string;
    imgSrc: string;
    role: string;
    location: string;
    ratings: any;
    rate: string;
    price: number | string;
    price1: string;
    languages: string[];
    skillbadge: string;
    bond: string;
    experience: string;
    graduateBadge: string;
    skillbadge1:string;
    skillbadge2:string;
    shiftBadge:string;
    joinBadge:string;
    goodBadge:string;
  }
  
  export const Candidates: Candidate[] = [
    {
      id: 1,
      title: "Brenda Simpson",
      imgSrc:face1,
      role: "Software Developer",
      location: "Kondapur, Hyderabad",
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
      price: '$2,300',
      price1: '$3,678',
      languages: [" English, Hindi, Telugu "],
      skillbadge: "HTML", 
      skillbadge1:"CSS", 
      skillbadge2:"Javascript",
      bond: "1 year bond accepted",
      experience: 'Exp : 2 Years',
      graduateBadge: "Graduate", 
      shiftBadge:"flexible-shift", 
      joinBadge:"Immediate Joinee", 
      goodBadge:"Good at English"
    },
    {
      id: 2,
     title: "Dwayne Stort",
      imgSrc: face3,
      role: "Web Developer",
      location: "Gachibowli, Hyderabad",
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
      price: '$3,600',
      price1: '$4,700',
      languages: [" English, Hindi, Telugu "],
      skillbadge: "HTML", 
      skillbadge1:"React Native", 
      skillbadge2:"Java",
      bond: "2 year bond accepted",
      experience: 'Exp : 4 Years',
      graduateBadge: "Post Graduate", 
      shiftBadge:"flexible-shift", 
      joinBadge:"Within 10 Days", 
      goodBadge:"Good at English"
    },
    {
      id: 3,
     title: "Jasmine Kova",
      imgSrc: face3,
      role: "Python Developer",
      location: "Gachibowli, Chennai",
      ratings: (
        <>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star me-1"></i></span>
        </>
      ),
      rate: "(56)",
      price: '$4,300',
      price1: '$5,000',
      languages: [" English, Hindi, Telugu "],
      skillbadge: "Python", 
      skillbadge1:"Java", 
      skillbadge2:"React",
      bond: "1 year bond accepted",
      experience: 'Exp : 5 Years',
      graduateBadge: "MBA", 
      shiftBadge:"Day-shift", 
      joinBadge:"Within 30 Days", 
      goodBadge:"Avg at English"
    },
    {
      id: 4,
     title: "Kiara Advain",
      imgSrc: face3,
      role: "Java Developer",
      location: "Gachibowli, Banglore",
      ratings: (
        <>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star me-1"></i></span>
        </>
      ),
      rate: "(13)",
      price: '$3,678',
      price1: '$4,500',
      languages: [" English, Hindi, Telugu "],
      skillbadge: "Java", 
      skillbadge1:"Core Java", 
      skillbadge2:"Spring",
      bond: "2 year bond accepted",
      experience: 'Exp : Fresher',
      graduateBadge: "MBA", 
      shiftBadge:"Day-shift", 
      joinBadge:"Within 30 Days", 
      goodBadge:"Good at English"
    },
    {
      id: 5,
     title: "Json Taylor",
      imgSrc: face13,
      role: "Angular Developer",
      location: "Gachibowli, Nellore",
      ratings: (
        <>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star me-1"></i></span>
        </>
      ),
      rate: "(18)",
      price: '$3,600',
      price1: '$4,700',
      languages: ["English, Telugu"],
      skillbadge: "Angular", 
      skillbadge1:"Advanced Java", 
      skillbadge2:"HTML",
      bond: "2 year bond accepted",
      experience: 'Exp : 5 Years',
      graduateBadge: "MCA", 
      shiftBadge:"flexible-shift", 
      joinBadge:" Within 15 Days", 
      goodBadge:" Fluent at English"
    },
    {
      id: 6,
     title: "Diego Sanch",
      imgSrc: face21,
      role: "AWS Developer",
      location: "Kukatpally, Hyderabad",
      ratings: (
        <>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star me-1"></i></span>
        <span className="text-warning"><i className="bi bi-star me-1"></i></span>
        </>
      ),
      rate: "(13)",
      price: '$8,900',
      price1: '$10,000',
      languages: [" English, Hindi, Telugu "],
      skillbadge: "AWS Lambda", 
      skillbadge1:"Athena", 
      skillbadge2:"Linux",
      bond: "2 year bond accepted",
      experience: 'Exp : Fresher',
      graduateBadge: "MBA", 
      shiftBadge:"Day-shift", 
      joinBadge:"", 
      goodBadge:""
    },
  ];