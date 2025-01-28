import face4 from "../../../../assets/images/faces/4.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face16 from "../../../../assets/images/faces/16.jpg";
import face21 from "../../../../assets/images/faces/21.jpg";
import french from "../../../../assets/images/flags/french_flag.jpg";
import usa from "../../../../assets/images/flags/us_flag.jpg";
import uae from "../../../../assets/images/flags/uae_flag.jpg";
import germany from "../../../../assets/images/flags/germany_flag.jpg";
import argentina from "../../../../assets/images/flags/argentina_flag.jpg";
import companylogo8 from "../../../../assets/images/company-logos/8.png";
import companylogo10 from "../../../../assets/images/company-logos/10.png";
import companylogo1 from "../../../../assets/images/company-logos/1.png";
import companylogo4 from "../../../../assets/images/company-logos/4.png";


  
//***  Candidates--- Start  ***//
export const Candiseries = [1754, 1234]
export const Candioptions:any = {

                labels: ["Female", "Male"],
                chart: {
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    height: 250,
                    type: 'donut'
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ["#fff"],
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '80%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val: string) {
                                        return val + "%";
                                    }
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#495057',
                                }

                            }
                        }
                    }
                },
                colors: ["rgb(132, 90, 223)", "#23b7e5"],
            }
//***  Candidates--- End  ***//


//***  Subscriptions Overview--- Start  ***//
export const Subseries = [{
                name: "Basic",
                data: [75, 78, 38, 39, 38, 73, 73, 53, 53, 16, 16, 53]
            },
            {
                name: "Pro",
                data: [35, 35, 62, 63, 13, 13, 60, 60, 41, 41, 82, 82]
            }
            ]
export const Suboptions:any = {

                chart: {
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    toolbar: {
                        show: false
                    },
                    height: 285,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 5,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.15
                    },
                },
                grid: {
                    borderColor: '#f1f1f1',
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [2, 2],
                    curve: ['smooth', 'smooth'],
                    lineCap: 'butt',
                    dashArray: [0, 0]
                },
                title: {
                    text: undefined,
                },
                legend: {
                    show: true,
                    position: 'top',
                    horizontalAlign: 'center',
                    fontWeight: 600,
                    fontSize: '11px',
                    tooltipHoverFormatter: function (val: string, opts: { w: { globals: { series: { [x: string]: { [x: string]: string; }; }; }; }; seriesIndex: string | number; dataPointIndex: string | number; }) {
                        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
                    },
                    labels: {
                        colors: '#74767c',
                    },
                    markers: {
                        width: 7,
                        height: 7,
                        strokeWidth: 0,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0
                    },
                },
                markers: {
                    discrete: [{
                        seriesIndex: 0,
                        dataPointIndex: 5,
                        fillColor: '#305cfc',
                        strokeColor: '#fff',
                        size: 4,
                        shape: "circle"
                    },
                    {
                        seriesIndex: 0,
                        dataPointIndex: 11,
                        fillColor: '#305cfc',
                        strokeColor: '#fff',
                        size: 4,
                        shape: "circle"
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 10,
                        fillColor: '#23b7e5',
                        strokeColor: '#fff',
                        size: 4,
                        shape: "circle"
                    }, {
                        seriesIndex: 1,
                        dataPointIndex: 4,
                        fillColor: '#23b7e5',
                        strokeColor: '#fff',
                        size: 4,
                        shape: "circle"
                    }],
                    hover: {
                        sizeOffset: 6
                    }
                },
                yaxis: {
                    title: {
                        style: {
                            color: '#adb5be',
                            fontSize: '14px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    labels: {
                        formatter: function (y: number) {
                            return y.toFixed(0) + "";
                        },
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                xaxis: {
                    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                        '10 Jan', '11 Jan', '12 Jan'
                    ],
                    axisBorder: {
                        show: true,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                tooltip: {
                    y: [
                        {
                            title: {
                                formatter: function (val: any) {
                                    return val;
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val: any) {
                                    return val;
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val: any) {
                                    return val;
                                }
                            }
                        }
                    ]
                },
                colors: ["rgb(132, 90, 223)", "#23b7e5"],
            }
//***  Subscriptions Overview--- End  ***//

//  Recent Employers
interface Employers {
    id: string
    src: string
    name: string
    role: string
    place: string
    mail: string
    location: string
    date: string
    color: string
    checked: string
}
export const Recentemployers: Employers[] = [
    { id: '1', src:face4, name: 'Mayor Kelly', role: 'Team Lead', place: 'Manufacture', mail: 'mayorkelly@gmail.com', location: 'Germany', date: 'Sep 15 - Oct 12, 2023', color: 'primary', checked: '' },
    { id: '2', src:face15, name: 'Andrew Garfield', role: 'Director', place: 'Development', mail: 'andrewgarfield@gmail.com', location: 'Canada', date: 'Apr 10 - Dec 12, 2023', color: 'secondary', checked: 'defaultChecked' },
    { id: '3', src:face11, name: 'Simon Cowel', role: 'Manager', place: 'Service', mail: 'simoncowel234@gmail.com', location: 'Europe', date: 'Sep 15 - Oct 12, 2023', color: 'success', checked: '' },
    { id: '4', src:face8, name: 'Mirinda Hers', role: 'Employee', place: 'Marketing', mail: 'mirindahers@gmail.com', location: 'USA', date: 'Apr 10 - Dec 12, 2023', color: 'danger', checked: 'defaultChecked' },
    { id: '5', src:face16, name: 'Andrew Garfield', role: 'Director', place: 'Development', mail: '	andrewgarfield@gmail.com', location: 'London', date: 'Jun 10 - Dec 12, 2022', color: 'warning', checked: 'defaultChecked' },
];

//Registers By Country
interface Registers {
    id: number
    src: string
    city: string
    date: string
    total: string
}
export const Registersbycountry: Registers[] = [
    { id: 1, src:usa, city: 'U.S.A', date: '21,Dec 2022', total: '782' },
    { id: 2, src:french, city: 'France', date: '29,April 2023', total: '53' },
    { id: 3, src:uae, city: 'U.A.E', date: '30,Nov 2023', total: '15' },
    { id: 4, src:germany, city: 'Germany', date: '18,Mar 2023', total: '19' },
    { id: 5, src:argentina, city: 'Argentina', date: '25,Apr 2023', total: '92' }
];

//Top Companies
interface Top {
    id: number
    src: string
    text1: string
    text2: string
    color: string
    date: string
    total: string
}
export const TopCompanies: Top[] = [
    { id: 1, src:companylogo4, text1: 'Obligation Pvt.Ltd', text2: 'Basic', color: 'primary', date: '24,Nov 2021', total: '547' },
    { id: 2, src:companylogo10, text1: 'Voluptatem Pvt.Ltd', text2: 'Pro', color: 'secondary', date: '13,Jan 2020', total: '223' },
    { id: 3, src:companylogo8, text1: 'BloomTech.Inc', text2: 'Basic', color: 'primary', date: '06,Sep 2020', total: '189' },
    { id: 4, src:companylogo1, text1: 'Beatae Industries', text2: 'Basic', color: 'primary', date: '19,Mar 2020', total: '106' }
];
 export const Jobusers= [
    { name: "Ui Developer", text: "Achies - 12 hrs ago", content: "Full Time", initials: "AC", bgColor: "primary", somecontent: "Fresher", color: "success", class:'!border-t-0 !border-s-0 !border-e-0' },
    { name: "AWS Engineer", text: "Siachles - 2 hrs ago", content: "Part Time", initials: "SI", bgColor: "secondary", somecontent: "+1 yrs - Experience", color: "info", class:'!border-x-0' },
    { name: "React Developer", text: "LifeSpace - 6 hrs ago", content: "Freelancer", initials: "LS", bgColor: "success", somecontent: "Fresher", color: "success", class:'!border-x-0' },
    { name: "Angular Developer", text: "MegaSoft - 14 hrs ago", content: "Full Time", initials: "MS", bgColor: "warning", somecontent: "+2 yrs - Experience", color: "info", class:'!border-x-0' },
    { name: "UI Tester", text: "Joggle - 2 days ago", content: "Full Time", initials: "J", bgColor: "danger", somecontent: "+3 yrs - Experience", color: "info", class:'!border-x-0' },
    { name: "Php - Laravel Develope", text: "Nirlog - 2 days ago", content: "Part Time", initials: "NL", bgColor: "info", somecontent: "Fresher", color: "success", class:'!border-s-0 !border-e-0 !border-b-0' },
]
export const  acquisitionsBadge = [
    { id: 1, color: "primary", badgeText: "1,982", title: "Total Applications" },
    { id: 2, color: "secondary", badgeText: "214", title: "Recruited" },
    { id: 3, color: "success", badgeText: "262", title: "Short Listed" },
    { id: 4, color: "warning", badgeText: "395", title: "Rejected" },
    { id: 5, color: "danger", badgeText: "79", title: "Blocked" },
]
 export const  registrations = [
    { id: 1, name: "Hr@Spruko", email: "hr.spruko@gmail.com", vacancies: "07", badgeColor: "info", badgeText: "Aws Engineer", avatar: face4 },
    { id: 2, name: "Hr@Nicero", email: "nicero.help@gmail.com", vacancies: "16", badgeColor: "warning", badgeText: "React Developer", avatar: face21 },
    { id: 3, name: "JosephSmith", email: "josephsmith@gmail.com", vacancies: "32", badgeColor: "primary", badgeText: "UI Developer", avatar: face15 },
];