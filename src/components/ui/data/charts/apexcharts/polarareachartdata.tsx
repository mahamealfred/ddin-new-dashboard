
//*** Basic Polar Area Chart ---Start ***//
export const Polarseries = [14, 23, 21, 17, 15, 10, 12, 17, 21]
export const Polaroptions:any = {
                chart: {
                    type: 'polarArea',
                    height: 300,
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                },
                legend: {
                    position: 'bottom'
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c", "#26bf94", "#a65e76", "#49b6f5", "#5b67c7"],
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
//*** Basic Polar Area Chart ---End ***//


//*** Polar Area Monochrome Chart ---Start ***//
export const Chromeseries = [42, 47, 52, 58, 65]
export const Chromeoptions:any = {
                chart: {
                    height: 300,
                    type: 'polarArea',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
                fill: {
                    opacity: 1
                },
                stroke: {
                    width: 1,
                    colors: undefined
                },
                yaxis: {
                    show: false
                },
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 0
                        },
                        spokes: {
                            strokeWidth: 0
                        },
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        shadeTo: 'light',
                        shadeIntensity: 0.6,
                        color: "#845adf",
                    }
                }
            }
//*** Polar Area Monochrome Chart ---End ***//
