
import media64 from "../../../../../assets/images/media/media-64.jpg";

//*** Basic Pie Chart --- Start ***//
export const Basicpseries = [70]
export const Basicpoptions: any = {
                chart: {
                    height: 300,
                    type: 'radialBar',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                colors: ["#845adf"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['Cricket'],
            }
//*** Basic Pie Chart --- End ***//


//*** Multiple Radialbar Chart --- Start ***//
export const Multipseries = [44, 55, 67, 83]
 export const Multipoptions:any = {
                chart: {
                    height: 300,
                    type: 'radialBar',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (_w: any) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return '249';
                                }
                            }
                        }
                    }
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#e6533c"],
                labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
            }
//*** Multiple Radialbar Chart --- End ***//


//*** Circle Chart - Custom Angle --- Start ***//
export const Angleseries = [76, 67, 61, 90]
export const Angleoptions:any = {
                chart: {
                    height: 320,
                    type: 'radialBar',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#845adf', '#23b7e5', '#f5b849', '#e6533c'],
                labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '14px',
                    position: 'left',
                    labels: {
                        useSeriesColors: true,
                    },
                    formatter: function (seriesName: string, opts: { w: { globals: { series: { [x: string]: string; }; }; }; seriesIndex: string | number; }) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
                    },
                    itemMargin: {
                        vertical: 3
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
}
//*** Circle Chart - Custom Angle --- End ***//


//*** Gradient Circle Chart --- Start ***//
export const Circleseries = [75]
export const Circleoptions:any = {
                chart: {
                    height: 320,
                    type: 'radialBar',
                    toolbar: {
                        show: true
                    },
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: '#fff',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: '#fff',
                            strokeWidth: '67%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#888',
                                fontSize: '17px'
                            },
                            value: {
                                formatter: function (val: number) {
                                    // return parseInt(val);
                                    return val.toString();
                                },
                                color: '#111',
                                fontSize: '36px',
                                show: true,
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#23b7e5'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Percent'],
            }
//*** Gradient Circle Chart --- End ***//


//*** Stroked Circular Gauge --- Start ***//
export const Gaugeseries = [67]
export const Gaugeoptions:any = {
                chart: {
                    height: 320,
                    type: 'radialBar',
                    offsetY: -10,
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                colors: ["#845adf"],
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: '22px',
                                color: undefined,
                                formatter: function (val: string) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 4
                },
                labels: ['Median Ratio'],
            }
//*** Stroked Circular Gauge --- End ***//


//*** Circle Chart With Image --- Start ***//
export const Imageseries = [67]
export const Imageoptions:any = {
                chart: {
                    height: 330,
                    type: 'radialBar',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 15,
                            size: '70%',
                            imageWidth: 32,
                            imageHeight: 32,
                            imageClipped: false
                        },
                        dataLabels: {
                            name: {
                                show: false,
                                color: '#fff'
                            },
                            value: {
                                show: true,
                                color: '#333',
                                offsetY: 10,
                                fontSize: '22px'
                            }
                        }
                    }
                },
                fill: {
                    type: 'image',
                    image: {
                        src: [media64],
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Volatility'],
            }
//*** Circle Chart With Image --- End ***//


//*** Semi Circular Gauge --- Start ***//
export const Semiseries = [76]
export const Semioptions:any = {
                chart: {
                    type: 'radialBar',
                    height: 320,
                    offsetY: -20,
                    sparkline: {
                        enabled: true
                    },
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#fff",
                            strokeWidth: '97%',
                            margin: 5, // margin is in pixels
                            dropShadow: {
                                enabled: false,
                                top: 2,
                                left: 0,
                                color: '#999',
                                opacity: 1,
                                blur: 2
                            }
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: '22px'
                            }
                        }
                    }
                },
                colors: ["#845adf"],
                grid: {
                    padding: {
                        top: -10
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91]
                    },
                },
                labels: ['Average Results'],
            }
//*** Semi Circular Gauge --- End ***//

