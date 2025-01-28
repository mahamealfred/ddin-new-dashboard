
import media21 from "../../../../../assets/images/media/media-21.jpg";

//*** Basic Pie Chart --- Start ***//

export const Pieseries = [44, 55, 13, 43, 22]
export const Pieoptions:any = {
                chart: {
                    height: 300,
                    type: 'pie',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                legend: {
                    position: "bottom"
                },
                dataLabels: {
                    dropShadow: {
                        enabled: false
                    }
                },
            }

//*** Basic Pie Chart --- End ***//


//*** Simple Donut Chart --- Start ***//
export const Simpleseries = [44, 55, 41, 17, 15]
export const Simpleoptions:any = {
                chart: {
                    type: 'donut',
                    height: 290,
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                legend: {
                    position: 'bottom'
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
                dataLabels: {
                    dropShadow: {
                        enabled: false
                    }
                },
            }
//*** Simple Donut Chart --- End ***//


//*** Updating Donut Chart --- Start ***//
export const Updateseries = [44, 55, 13, 33]
            
export const Updateoptions:any = {
                chart: {
                    height: 280,
                    type: 'donut',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#e6533c", "#49b6f5"],
                legend: {
                    position: 'bottom',
                },
            }
//*** Updating Donut Chart --- End ***//


//*** Monochrome Pie Chart --- Start ***//
export const Monoseries = [25, 15, 44, 55, 41, 17]
export const Monooptions:any= {
                chart: {
                    height: '280',
                    type: 'pie',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                theme: {
                    monochrome: {
                        enabled: true,
                        color: "#845adf",
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: -5
                        }
                    }
                },
                title: {
                    text: 'Monochrome Pie',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                dataLabels: {
                    // formatter(val, opts) {
                    //     const name = opts.w.globals.labels[opts.seriesIndex]
                    //     return [name, val.toFixed(1) + '%']
                    // },
                    dropShadow: {
                        enabled: false
                    }
                },
                legend: {
                    show: false
                }
            }
//*** Monochrome Pie Chart --- End ***//


//*** Gradient Donut Chart --- Start ***//
export const Gradientseries = [44, 55, 41, 17, 15]
export const Gradientoptions:any = {
                chart: {
                    height: 300,
                    type: 'donut',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270
                    }
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter: function (val: string, opts: { w: { globals: { series: { [x: string]: string; }; }; }; seriesIndex: string | number; }) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex];
                    },
                    position: 'bottom'
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
                title: {
                    text: 'Gradient Donut with custom Start-angle',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                // legend: {
                //     position: 'bottom'
                // },
            }
//*** Gradient Donut Chart --- End ***//


//*** Donut Chart With Patterns --- Start ***//
export const Patternseries = [44, 55, 41, 17, 15]
export const Patternoptions:any = {
                chart: {
                    height: 250,
                    type: 'donut',
                    dropShadow: {
                        enabled: true,
                        color: '#111',
                        top: -1,
                        left: 3,
                        blur: 3,
                        opacity: 0.2
                    },
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                stroke: {
                    width: 0,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    showAlways: true,
                                    show: true
                                }
                            }
                        }
                    }
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
                labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ['#111']
                    },
                    background: {
                        enabled: true,
                        foreColor: '#fff',
                        borderWidth: 0
                    }
                },
                fill: {
                    type: 'pattern',
                    opacity: 1,
                    pattern: {
                        // enabled: true,
                        style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
                    },
                },
                states: {
                    hover: {
                        // filter: 'none'
                    }
                },
                theme: {
                    palette: 'palette2'
                },
                title: {
                    text: 'Favourite Movie Type',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
//*** Donut Chart With Patterns --- End ***//


//*** Image Filled Pie Chart --- Start ***//
export const Filledseries = [44, 33, 54, 45]
export const Filledoptions:any = {
                chart: {
                    height: 300,
                    type: 'pie',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
                fill: {
                    type: 'image',
                    opacity: 0.85,
                    image: {
                        src: [media21, media21, media21, media21],
                        width: 25
                    },
                },
                stroke: {
                    width: 4
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ['#111']
                    },
                    background: {
                        enabled: true,
                        foreColor: '#fff',
                        borderWidth: 0
                    }
                },
                legend: {
                    position: 'bottom'
                },
            }
//*** Image Filled Pie Chart --- End ***//

