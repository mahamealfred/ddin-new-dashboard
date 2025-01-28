import face1 from "../../../../../assets/images/faces/1.jpg";
import face2 from "../../../../../assets/images/faces/2.jpg";
import face3 from "../../../../../assets/images/faces/3.jpg";
import face21 from "../../../../../assets/images/faces/21.jpg";
import face5 from "../../../../../assets/images/faces/5.jpg";
import face6 from "../../../../../assets/images/faces/6.jpg";
import face17 from "../../../../../assets/images/faces/17.jpg";
import face8 from "../../../../../assets/images/faces/8.jpg";
import face9 from "../../../../../assets/images/faces/9.jpg";
import face10 from "../../../../../assets/images/faces/10.jpg";
import face11 from "../../../../../assets/images/faces/11.jpg";
import face12 from "../../../../../assets/images/faces/12.jpg";
import face13 from "../../../../../assets/images/faces/13.jpg";
import face14 from "../../../../../assets/images/faces/14.jpg";
import face15 from "../../../../../assets/images/faces/15.jpg";
import face16 from "../../../../../assets/images/faces/16.jpg";
import face22 from "../../../../../assets/images/faces/20.jpg";


interface DealStage {
    title: string;
    leads: string;
    amount: string;
    color: string;
    class:string;
  }

export const DealStages: DealStage[] = [
      { title: 'Leads Discovered', leads: '24 Leads', amount: '$25,238', color: 'primary', class:'lead-discovered'},
      { title: 'Qualified Leads', leads: '17 Leads', amount: '$32,453', color: 'warning', class:'lead-qualified'},
      { title: 'Contact Initiated', leads: '5 Leads', amount: '$13,756', color: 'success', class:'contact-initiated'},
      { title: 'Needs Identified', leads: '43 Leads', amount: '$47,093', color: 'info', class:'need-identified'},
      { title: 'Negotiation', leads: '15 Leads', amount: '$26,146', color: 'danger', class:'negotiation'},
      { title: 'Deal Finalized', leads: '127 Deals', amount: '$1,74,679', color: 'secondary', class:'deal-finalized'},
];

interface Deal {
    imgSrc: string;   
    title: string;   
    price: string;    
    company: string;  
    date: string;     
  }
  
export const Dealdata: Deal[] = [
    {
      imgSrc:face12, 
      title: 'Service Upgrade',
      price: '$5000',
      company: 'Spruko Technologies',
      date: '24,Jun 2023 - 12:45PM',
    },
    {
      imgSrc:face5, 
      title: 'Product Demo',
      price: '$50,000',
      company: 'Acme Corporation LTD',
      date: '18,Apr 2023 - 11:22AM',
    },
    {
      imgSrc:face15, 
      title: 'Website Redesign',
      price: '$20,000',
      company: 'Embark Technologies',
      date: '12,Jul 2023 - 10:15AM',
    },
    {
      imgSrc:face6, 
      title: 'Consulting Services',
      price: '$10,000',
      company: 'Adam Johnson',
      date: '29,Jul 2023 - 4:45PM',
    },
]

export const Dealdata1: Deal[] = [
    {
      imgSrc:face11, 
      title: 'Event Sponsorship',
      price: '$10,000',
      company: 'Initech Info',
      date: '21,May 2023 - 10:25AM',
    },
    {
      imgSrc:face11,
      title: 'Sales Training',
      price: '$6,000',
      company: 'Soylent Corp',
      date: '10,May 2023 - 9:20AM',
    },
    {
      imgSrc:face14,
      title: 'Content Creation',
      price: '$3,000',
      company: 'Hooli Technologies',
      date: '25,Aug 2023 - 3:38PM',
    },
]

export const Dealdata2: Deal[] = [
    {
      imgSrc:face3,
      title: 'E-commerce Integration',
      price: '$12,000',
      company: 'Spice Infotech',
      date: '15,Sep 2023 - 8:32PM',
    },
    {
      imgSrc:face16,
      title: 'Ad Campaign',
      price: '$5,500',
      company: 'Umbrella Corp',
      date: '17,Jun 2023 - 10:54AM',
    },
]

export const Dealdata3: Deal[] = [
    {
      imgSrc:face10,
      title: 'Webinar Series',
      price: '$9,500',
      company: 'Massive Dynamic',
      date: '16,May 2023 - 11:22AM',
    },
    {
      imgSrc:face13,
      title: 'SEO Audit',
      price: '$3,000',
      company: 'Logitech Ecostics',
      date: '27,Apr 2023 - 5:15PM',
    },
    {
      imgSrc:face8,
      title: 'Loyalty Program',
      price: '$12,000',
      company: 'Globex Corp',
      date: '26,Jul 2023 - 5:28AM',
    },
    {
      imgSrc:face9,
      title: 'CRM Integration',
      price: '$10,000',
      company: 'CrystalClear Consulting',
      date: '14,May 2023 - 11:29PM',
    },
]

export const Dealdata4: Deal[] = [
    {
      imgSrc:face16,
      title: 'Media Analytics',
      price: '$9,000',
      company: 'GlobalConnect',
      date: '18,Mar 2023 - 2:32PM',
    },
    {
      imgSrc:face21,
      title: 'Lead Nurturing Strategy',
      price: '$4,000',
      company: 'AlphaTech Solutions',
      date: '16,Jul 2023 - 7:53AM',
    },
    {
      imgSrc:face2,
      title: 'Newsletter Campaign',
      price: '$2,500',
      company: 'CoreTech Solutions',
      date: '12,May 2023 - 10:22AM',
    },
    {
      imgSrc:face17,
      title: 'Graphic Design',
      price: '$5,000',
      company: 'TechPro Services',
      date: '10,Jul 2023 - 10:15PM',
    },
    {
      imgSrc:face22,
      title: 'Website Maintenance',
      price: '$7,500',
      company: 'RedRock Industries',
      date: '30,Jul 2023 - 6:30AM',
    },
];

export const Dealdata5: Deal[] = [
    {
      imgSrc:face1,
      title: 'CRM Training',
      price: '$4,200',
      company: 'BlueSky Industries',
      date: '15,May 2023 - 8:20AM',
    },
    {
      imgSrc:face10,
      title: 'Market Research',
      price: '$10,500',
      company: 'BrightStar Solutions',
      date: '28,Jun 2023 - 9:27PM',
    },
  ];
  