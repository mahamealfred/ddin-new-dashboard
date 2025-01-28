import logo1 from "../../../../../assets/images/company-logos/1.png";
import logo2 from "../../../../../assets/images/company-logos/2.png";
import logo3 from "../../../../../assets/images/company-logos/3.png";
import logo8 from "../../../../../assets/images/company-logos/8.png";
import logo6 from "../../../../../assets/images/company-logos/6.png";
import logo9 from "../../../../../assets/images/company-logos/9.png";
import logo10 from "../../../../../assets/images/company-logos/10.png";
import logo5 from "../../../../../assets/images/company-logos/5.png";
import face1 from "../../../../../assets/images/faces/1.jpg";
import face2 from "../../../../../assets/images/faces/2.jpg";
import face5 from "../../../../../assets/images/faces/5.jpg";
import face14 from "../../../../../assets/images/faces/14.jpg";
import face15 from "../../../../../assets/images/faces/15.jpg";
import face13 from "../../../../../assets/images/faces/13.jpg";
import face16 from "../../../../../assets/images/faces/16.jpg";
import face7 from "../../../../../assets/images/faces/7.jpg";
import face8 from "../../../../../assets/images/faces/8.jpg";
import face9 from "../../../../../assets/images/faces/9.jpg";
import face10 from "../../../../../assets/images/faces/10.jpg";
import face11 from "../../../../../assets/images/faces/11.jpg";
import face12 from "../../../../../assets/images/faces/12.jpg";
import face6 from "../../../../../assets/images/faces/6.jpg";

interface Project {
    imgSrc: string;
    title: string;
    count: string;
    avatars: any;
    badge: string;
    description: string;
    percent: number | string;
    assigndate: string;
    duedate: string;
    id: number;
    color: string;
    progress: string;
    bgcolor: string;
}
export const Projectsdata: Project[] = [
    {
        id: 1,
        imgSrc: logo1,
        title: 'Design & Developing New Project',
        count: '18/22',
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face2} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face8} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face2} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face10} alt="img" /></span>
                <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/apps/projects/project-list`}>+2</a>
            </>
        ),
        badge: 'Low',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
        percent: '80',
        assigndate: '24, May 2023',
        duedate: '12, Jul 2023',
        color: 'success',
        progress: 'w-4/5',
        bgcolor:'danger'
    },
    {
        id: 2,
        imgSrc: logo2,
        title: 'Content Management System (CMS) Integration',
        count: '26/68',
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face12} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face9} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face11} alt="img" /></span>
                <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/apps/projects/project-list`}>+4</a>
            </>
        ),
        badge: 'Medium',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
        percent: 45,
        assigndate: '20, May 2023',
        duedate: '10, Jun 2023',
        color: 'info',
        progress: 'w-[45%]' ,
        bgcolor:'warning'
    },
    {
        id: 3,
        imgSrc: logo3,
        title: 'Task Scheduler and Automation',
        count: '21/45',
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face5} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face6} alt="img" /></span>
                <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/apps/projects/project-list`}>+1</a>
            </>
        ),
        badge: 'Low',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
        percent: 66,
        assigndate: '31, May 2023',
        duedate: '10, Jul 2023',
        color: 'success',
        progress: 'w-[66%]',
         bgcolor:'secondary'
    },
    {
        id: 4,
        imgSrc: logo5,
        title: 'Advanced Search and Filtering',
        count: '45/54',
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face10} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face2} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face1} alt="img" /></span>
                <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/apps/projects/project-list`}>+1</a>
            </>
        ),
        badge: 'High',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.',
        percent: 89,
        assigndate: '02, Jun 2023',
        duedate: '15, Jun 2023',
        color: 'info',
        progress: 'w-[89%]',
         bgcolor:'success'
    },
    {
        id: 5,
        title: "Data Export and Reporting",
        imgSrc: logo8,
        count: "14/26",
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face7} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face13} alt="img" /></span>
            </>
        ),
        badge: "Medium",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.",
        percent: 60,
        assigndate: "29,May 2023",
        duedate: "08,Jun 2023",
        color: 'info',
        progress: 'w-4/5',
         bgcolor:'primary'
    },
    {
        id: 6,
        title: "Activity Log and Audit Trail",
        imgSrc: logo10,
        count: "28/64",
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face7} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face13} alt="img" /></span>
            </>
        ),
        badge: "Low",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.",
        percent: 45,
        assigndate: "04,Jun 2023",
        duedate: "15,Jun 2023",
        color: 'success',
        progress: 'w-[45%]',
         bgcolor:'success'
    },
    {
        id: 7,
        title: "Role-Based Access Control (RBAC) Implementation",
        imgSrc: logo9,
        count: "86/122",
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face5} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face14} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face15} alt="img" /></span>
                <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/apps/projects/project-list`}>+2</a>
            </>
        ),
        badge: "High",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.",
        percent: 65,
        assigndate: "24,Jun 2023",
        duedate: "05,Jul 2023",
        color: 'danger',
        progress: 'w-[65%]',
         bgcolor:'info'
    },
    {
        id: 8,
        title: "Customizable Themes and Layouts",
        imgSrc: logo6,
        count: "20/26",
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face13} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face16} alt="img" /></span>
                <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/apps/projects/project-list`}>+2</a>
            </>
        ),
        badge: "Medium",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.",
        percent: 75,
        assigndate: "20,Jun 2023",
        duedate: "18,Jul 2023",
        color: 'info',
        progress: 'w-3/4',
         bgcolor:'pinkmain'
    }
];