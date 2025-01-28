 import face1 from "../../../../assets/images/faces/1.jpg";
 import face2 from "../../../../assets/images/faces/2.jpg";
 import face3 from "../../../../assets/images/faces/3.jpg";
 import face5 from "../../../../assets/images/faces/5.jpg";
 import face6 from "../../../../assets/images/faces/6.jpg";
 import face8 from "../../../../assets/images/faces/8.jpg";
 import face9 from "../../../../assets/images/faces/9.jpg";
 import face10 from "../../../../assets/images/faces/10.jpg";
 import face11 from "../../../../assets/images/faces/11.jpg";
 import face12 from "../../../../assets/images/faces/1.jpg";
 import face13 from "../../../../assets/images/faces/13.jpg";
 import face14 from "../../../../assets/images/faces/14.jpg";
 import face15 from "../../../../assets/images/faces/15.jpg";

interface Task {
    id:number;
    name: string;
    spk: string;
    startDate: string;
    status: string;
    endDate: string;
    priority: string;
    assignees: any;
    color:string;
    color1:string;
}

export const Listdata: Task[] = [
    {
        id:1,
        name: "Design New Landing Page",
        spk: "SPK - 01",
        startDate: "02-06-2023",
        status: "New",
        endDate: "10-06-2023",
        priority: "Medium",
        color:'primary',
        color1:'secondary',
        assignees: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face2} alt="img"/></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face8} alt="img"/></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face2} alt="img"/></span>
                <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/task/list-view`}>+2</a>
            </>
        ),
    },
    {
        id:2,
        name: "New Project Blueprint",
        spk: "SPK - 04",
        startDate: "05-06-2023",
        status: "Inprogress",
        endDate: "15-06-2023",
        priority: "High",
        color:'secondary',
        color1:'danger',
        assignees: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face12} alt="img"/></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face11} alt="img"/></span>
                <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/task/list-view`}>+4</a>
            </>
        ),
    },
    {
        id:3,
        name: "Server Side Validation",
        spk: "SPK - 11",
        startDate: "12-06-2023",
        status: "Pending",
        endDate: "16-06-2023",
        priority: "Low",
        color:'warning',
        color1:'success',
        assignees: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face5} alt="img"/></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face9} alt="img"/></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face13} alt="img"/></span>
                <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/task/list-view`}>+5</a>
            </>
        ),
    },
    {
        id:4,
        name: "New Plugin Development",
        spk: "SPK - 24",
        startDate: "08-06-2023",
        status: "Completed",
        endDate: "17-06-2023",
        priority: "Low",
        color:'success',
        color1:'success',
        assignees: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face2} alt="img"/></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face8} alt="img"/></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face2} alt="img"/></span>
                <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/task/list-view`}>+2</a>
            </>
        ),
    },
    {
        id:5,
        name: "Designing New Authentication Page",
        spk: "SPK - 16",
        startDate: "03-06-2023",
        status: "Inprogress",
        endDate: "08-06-2023",
        priority: "Medium",
        color:'secondary',
        color1:'secondary',
        assignees: (
            <>
                    <span className="avatar avatar-sm avatar-rounded"><img src={face10} alt="img"/></span>
                    <span className="avatar avatar-sm avatar-rounded"><img src={face15} alt="img"/></span>
                    <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/task/list-view`}>+3</a>
            </>
        ),
    },
    {
        id: 6,
        name: 'Documentation For New Template',
        spk: 'SPK - 07',
        startDate: '12-06-2023',
        status: 'New',
        endDate: '25-06-2023',
        priority: 'High',
        color:'primary',
        color1:'danger',
        assignees: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face12} alt="img"/></span>
            </>
        ),
      },
      {
        id: 7,
        name: 'Updating Old UI',
        spk: 'SPK - 13',
        startDate: '06-06-2023',
        status: 'Completed',
        endDate: '12-06-2023',
        priority: 'Low',
        color:'success',
        color1:'success',
        assignees: (
            <>
           <span className="avatar avatar-sm avatar-rounded"><img src={face11} alt="img"/></span>
           <span className="avatar avatar-sm avatar-rounded"><img src={face1} alt="img"/></span>
           <span className="avatar avatar-sm avatar-rounded"><img src={face10} alt="img"/></span>
           <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/task/list-view`}>+1</a>
            </>
        ),
      },
      {
        id: 8,
        name: 'Developing New Events In Plugins',
        spk: 'SPK - 20',
        startDate: '14-06-2023',
        status: 'Pending',
        endDate: '19-06-2023',
        priority: 'High',
        color:'warning',
        color1:'danger',
        assignees: (
            <>
         <span className="avatar avatar-sm avatar-rounded"><img src={face3} alt="img"/></span>
         <span className="avatar avatar-sm avatar-rounded"><img src={face9} alt="img"/></span>
         <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/task/list-view`}>+2</a>
            </>
        ),
      },
      {
        id: 9,
        name: 'Fixing Minor UI Issues',
        spk: 'SPK - 26',
        startDate: '11-06-2023',
        status: 'Completed',
        endDate: '18-06-2023',
        priority: 'Medium',
        color:'success',
        color1:'secondary',
        assignees: (
            <>
       <span className="avatar avatar-sm avatar-rounded"><img src={face5} alt="img"/></span>
       <span className="avatar avatar-sm avatar-rounded"><img src={face14} alt="img"/></span>
       <span className="avatar avatar-sm avatar-rounded"><img src={face12} alt="img"/></span>
       <span className="avatar avatar-sm avatar-rounded"><img src={face3} alt="img"/></span>
       <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/task/list-view`}>+1</a>
            </>
        ),
      },
      {
        id: 10,
        name: 'Designing Of New Ecommerce Website',
        spk: 'SPK - 32',
        startDate: '03-06-2023',
        status: 'Inprogress',
        endDate: '09-06-2023',
        priority: 'Low',
        color:'secondary',
        color1:'success',
        assignees: (
            <>
       <span className="avatar avatar-sm avatar-rounded"><img src={face12} alt="img"/></span>
       <span className="avatar avatar-sm avatar-rounded"><img src={face6} alt="img"/></span>
       <a className="avatar avatar-sm bg-primary avatar-rounded text-white" href={`${import.meta.env.BASE_URL}/task/list-view`}>+4</a>
            </>
        ),
      },
];