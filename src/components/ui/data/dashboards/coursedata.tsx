
import nftimage1 from "../../../../assets/images/nft-images/1.png";
import nftimage2 from "../../../../assets/images/nft-images/2.png";
import nftimage5 from "../../../../assets/images/nft-images/5.png";
import nftimage6 from "../../../../assets/images/nft-images/6.png";
import nftimage7 from "../../../../assets/images/nft-images/7.png";
import nftimage8 from "../../../../assets/images/nft-images/8.png";
import face2 from "../../../../assets/images/faces/2.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face1 from "../../../../assets/images/faces/1.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import face14 from "../../../../assets/images/faces/14.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";

//***   Earnings Report--- Start  ***//
export const Earningseries = [{
    name: "Earnings",
    data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
}, {
    name: "Students",
    data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
}]
export const Earningoptions:any = {
    chart: {
        height: 340,
        type: "bar",
        events: {
            mounted: (chart:any) => {
              chart.windowResizeHandler();
            }
          },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1.1, 1.1],
        show: true,
        curve: ['smooth', 'smooth'],
    },
    grid: {
        borderColor: '#f3f3f3',
        strokeDashArray: 3
    },
    xaxis: {
        axisBorder: {
            color: 'rgba(119, 119, 142, 0.05)',
        },
    },
    legend: {
        show: false
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    markers: {
        size: 0
    },
    colors: ["rgb(132, 90, 223)", "#e9e9e9"],
    plotOptions: {
        bar: {
            columnWidth: "50%",
            borderRadius: 2,
        }
    },
}
//***   Earnings Report--- End  ***//


//***   Payouts--- Start  ***//
export const Payseries = [{
    name: 'Paid',
    data: [55, 55, 42, 42, 55, 55, 38, 38, 53, 53, 35, 35],
    type: 'line',
}, {
    name: 'UnPaid',
    data: [35, 35, 46, 46, 35, 35, 48, 48, 33, 33, 38, 38],
    type: "line",
}]
export const Payoptions:any = {
    chart: {
        height: 270,
        toolbar: {
            show: false,
        },
        background: 'none',
        events: {
            mounted: (chart:any) => {
              chart.windowResizeHandler();
            }
          },
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["rgb(132, 90, 223)", "rgba(230, 83, 60,0.5)"],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        dashArray: [0, 5],
    },
    legend: {
        show: true,
        position: 'top',
    },
    xaxis: {
        axisBorder: {
            show: false,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90,
        }
    },
    yaxis: {
        show: false,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
}
//***   Payouts--- End  ***//

//Course list
interface list {
    id: number
    src: string
    name: string
    category: string
    classes: string
    last: string
    instructor: string
    students: string
}
export const Courselist: list[] = [
    { id: 1, src:nftimage1, name: 'Ray Optics & Optical Fibre Master Class', category: 'Science', classes: '20', last: '29-05-2023', instructor: 'Shin Opran', students: '25' },
    { id: 2, src:nftimage2, name: 'Master Linear Alzebra Medium Level', category: 'Mathematics', classes: '90', last: '11-06-2023', instructor: '	Arya Neo', students: '773' },
    { id: 3, src:nftimage8, name: 'Learn How To Trade And Invest For-Absolute Beginners', category: 'Stocks & Trading', classes: '161', last: '10-06-2023', instructor: 'Sia Niu', students: '51' },
    { id: 4, src:nftimage7, name: 'Digital Marketing Course from Scratch', category: 'Marketing', classes: '115', last: '21-06-2023', instructor: 'Stuart George', students: '1,189' },
    { id: 5, src:nftimage5, name: 'Data Structures & Algorithms For Beginners', category: 'Programming', classes: '30', last: '15-06-2023', instructor: 'Boran Ray', students: '3,368' },
    { id: 6, src:nftimage6, name: 'Css Zero to Hero Master Class', category: 'UI/UX', classes: '51', last: '22-06-2023', instructor: 'Burak Oin', students: '252' },
];

 export const Coursestabledata=[
    {id:1,title:'ui/ux Designing', status:60, duration:'3 Months', type:'Full Time', instructor:'Sarah Taylor',src:face2, color:'primary', width:'w-3/5'},
    {id:2,title:'Project Management', status:100, duration:'45 Days', type:'Completed', instructor:'Jason Smith',src:face11, color:'success', width:'w-full'},
    {id:3,title:'Python', status:38, duration:'90 Days', type:'	Part Time', instructor:'Alex Perira',src:face14, color:'warning', width:'w-[38%]'},
    {id:4,title:'Digital Marketing', status:75, duration:'24 Days', type:'Week End', instructor:'Kamala Singh',src:face8, color:'info', width:'w-3/4'},
    {id:5,title:'Full Stack Development', status:55, duration:'6 Months', type:'Full Time', instructor:'Jessica Leon',src:face4, color:'primary', width:'w-[55%]'},
    {id:6,title:'Stocks & Trading', status:29, duration:'1 Month', type:'Stopped', instructor:'Israel Khan',src:face12, color:'danger', width:'w-[29%]'},
 ]
export const Studentsdata=[
    {id:1, src:face13, name:'Richard Dom', mail:'richarddom1116@demo.com',courses:'9', completed:'1', },
    {id:2, src:face5, name:'Alicia Keys', mail:'aliciakeys89@gmail.com',courses:'1', completed:'0', },
    {id:3, src:face10, name:'Robert Brook', mail:'robertbrook95@gmail.com',courses:'15', completed:'0', },
    {id:4, src:face9, name:'Alex Boi', mail:'alexboi555@gmail.com',courses:'16', completed:'3', },
]

export const Coursescategories = [
    {id: 1, title: 'UI/UX Design', status: "primary", count : "1000+", icon: '', svg: <><svg xmlns="http://www.w3.org/2000/svg" className="category-svg"viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg></>},
    {id: 2, title: 'Digital Marketing', status: "secondary", count : "90+", icon: '', svg: <><svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g opacity=".3"><path d="M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5 l-0.82-1.91c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M19.99,4.01c0,0-3.55-0.69-8.23,3.99 c-1.32,1.32-2.4,3.38-2.73,4.04l2.93,2.93c0.65-0.32,2.71-1.4,4.04-2.73C20.68,7.56,19.99,4.01,19.99,4.01z M15,11 c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C17,10.1,16.1,11,15,11z"></path></g><g><path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z"></path></g></g></svg></>},
    {id: 3, title: 'Web Development', status: "warning", count : "250+", icon: '', svg: <><svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="swatchbook"><path opacity="0.2" d="M9 22H5a3.003 3.003 0 0 1-3-3V5a3.003 3.003 0 0 1 3-3h4a3.003 3.003 0 0 1 3 3v14a3.003 3.003 0 0 1-3 3z"></path><path opacity="0.4" d="m20.293 6.535-2.828-2.828a3.004 3.004 0 0 0-4.243 0l-1.229 1.228c0 .022.007.043.007.065v14c0 .027-.007.052-.008.08l8.301-8.302a3.004 3.004 0 0 0 0-4.243z"></path><circle cx="7" cy="17" r="1" opacity="1"></circle><path opacity="1" d="m19.065 12.007-7.073 7.072c0-.027.008-.052.008-.079a3.003 3.003 0 0 1-3 3h10a3.003 3.003 0 0 0 3-3v-4a3 3 0 0 0-2.935-2.993z"></path></svg></>},
    {id: 4, title: 'Stocks & Trading', status: "success", count : "100+", icon: '', svg:<> <svg xmlns="http://www.w3.org/2000/svg" className="category-svg"enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><rect fill="none" height="24" width="24"></rect><g opacity=".3"><path d="M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path></g><g><path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path></g></svg></>},
]
 export const TopInstructors= [
    { name: "John Henry", text: "M.Tech", balance: "321 Classes", avatar: face1, domain: "Digital Marketing" },
    { name: "Mortal Yun", text: "P.H.D", balance: "25 Classes", avatar: face5, domain: "Stocks & Trading" },
    { name: "Trex Con", text: "MBBS", balance: "39 Classes", avatar: face8, domain: "Science" },
    { name: "Saiu Sarah", text: "P.H.D", balance: "11 Classes", avatar: face12, domain: "Science" },
    { name: "Ion Hau", text: "M.Tech", balance: "124 Classes", avatar: face15, domain: "Web Development" },
]