
import logo1 from "../../../../../assets/images/company-logos/1.png";
import logo2 from "../../../../../assets/images/company-logos/2.png";
import logo3 from "../../../../../assets/images/company-logos/3.png";
import logo7 from "../../../../../assets/images/company-logos/7.png";
import logo5 from "../../../../../assets/images/company-logos/5.png";
import logo6 from "../../../../../assets/images/company-logos/6.png";

interface Company {
    id: number;
    title: string;
    imgSrc: string;
    address: string;
    year: string;
    ratings: number | any;
    employees: string;
    vacancies: string;
    rate:string
    Shareicon:boolean
}

export const SearchCompanies: Company[] = [
    {
        id: 1,
        title: "Spotech Technical Solutions",
        imgSrc: logo1,
        address: "Kondapur, Hyderabad",
        year:'Establishment year- 2019',
        ratings: (
          <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
          </>
    ),
        employees: 'No. of Emp : 345',
        vacancies: 'Vacancies : 50',
        rate:'(142)',
        Shareicon:false,
    },
    {
        id: 2,
        title: "G Technical Solutions",
        imgSrc: logo2,
        address: "Gachibowli, Hyderabad",
        year: 'Establishment year-2015',
        ratings:  (
          <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star"></i></span>
          </>
    ),
        employees: 'No. of Emp : 345',
        vacancies: 'Vacancies : 50',
        rate:'(134)',
        Shareicon:false,
    },
    {
        id: 3,
        title: "Diego Technical Solutions",
        imgSrc: logo3,
        address: "Gachibowli, Chennai",
        year: 'Establishment year-2013',
        ratings:  (
          <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star"></i></span>
          </>
    ),
        employees: 'No. of Emp : 345',
        vacancies: 'Vacancies : 50',
        rate:'(234)',
        Shareicon:false,
    },
    {
        id: 4,
        title: "Spoteck Solutions Pvt Ltd",
        imgSrc: logo7,
        address: "Gachibowli, Banglore",
        year: 'Establishment year-2002',
        ratings:  (
          <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
          </>
    ),
        employees: 'No. of Emp : 345',
        vacancies: 'Vacancies : 50',
        rate:'(239)',
        Shareicon:false,
      },
      {
        id: 5,
        title: "Vehement Capital Partners",
        imgSrc: logo5,
        address: "Gachibowli, Banglore",
        year: 'Establishment year-2017',
        ratings:  (
          <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
          </>
    ),
        employees: 'No. of Emp : 345',
        vacancies: 'Vacancies : 50',
        rate:'(239)',
        Shareicon:true,
      },
      {
        id: 6,
        title: "Wonka Industries",
        imgSrc: logo6,
        address: "Kukatpally, Hyderabad",
        year: 'Establishment year-2000',
        ratings:  (
          <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
          </>
    ),
        employees: 'No. of Emp : 345',
        vacancies: 'Vacancies : 50',
        Shareicon:true,
        rate:'(764)',
      },
];