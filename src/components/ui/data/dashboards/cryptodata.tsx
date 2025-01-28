import face4 from "../../../../assets/images/faces/4.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import bitcoin from "../../../../assets/images/crypto-currencies/regular/Bitcoin.svg";
import bitcoinsq from "../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg";
import litecoin from "../../../../assets/images/crypto-currencies/regular/litecoin.svg";
import dashsq from "../../../../assets/images/crypto-currencies/square-color/Dash.svg";
import dash from "../../../../assets/images/crypto-currencies/regular/Dash.svg";
import euro from "../../../../assets/images/crypto-currencies/regular/Euro.svg";
import ethereumsq from "../../../../assets/images/crypto-currencies/square-color/Ethereum.svg";
import ethereum from "../../../../assets/images/crypto-currencies/regular/Ethereum.svg";
import bytecoin from "../../../../assets/images/crypto-currencies/square-color/Bytecoin.svg";
import golem from "../../../../assets/images/crypto-currencies/square-color/Golem.svg";
import monero from "../../../../assets/images/crypto-currencies/square-color/Monero.svg";
import Siacoin from "../../../../assets/images/crypto-currencies/square-color/Siacoin.svg";
import bitcoinreg from "../../../../assets/images/crypto-currencies/regular/Bitcoin.svg";
import ethereumreg from "../../../../assets/images/crypto-currencies/regular/Ethereum.svg";
import dashreg from "../../../../assets/images/crypto-currencies/regular/Dash.svg";
import ripplereg from "../../../../assets/images/crypto-currencies/regular/Ripple.svg";
import neoreg from "../../../../assets/images/crypto-currencies/regular/Neo.svg";
import iotareg from "../../../../assets/images/crypto-currencies/regular/IOTA.svg";

//***  Bitcoin - BTC--- Start ***//
export const Bitseries = [{
  name: 'Value',
  data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
}]
export const Bitoptions:any = {
  chart: {
    type: 'line',
    height: 40,
    width: 120,
    sparkline: {
      enabled: true
    },
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['#26bf94'],
}
//***  Bitcoin - BTC--- End ***//


//***  Etherium - ETH--- Start ***//
export const Ethseries = [{
  name: 'Value',
  data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
}]
export const Ethoptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    type: 'line',
    height: 40,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
  },

  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['#26bf94'],
}
//***  Etherium - ETH--- End ***//


//***  Dash - DASH--- Start ***//
export const Dasseries = [{
  name: 'Value',
  data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
}]
export const Dasoptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    type: 'line',
    height: 40,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {

  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['#e6533c'],
}
//***  Dash - DASH--- End ***//

//***  Crypto Statistics--- Start ***//
export const Statseries = [{
  data: [{
    x: new Date(1538778600000),
    y: [6629.81, 6650.5, 6623.04, 6633.33]
  },
  {
    x: new Date(1538780400000),
    y: [6632.01, 6643.59, 6620, 6630.11]
  },
  {
    x: new Date(1538782200000),
    y: [6630.71, 6648.95, 6623.34, 6635.65]
  },
  {
    x: new Date(1538784000000),
    y: [6635.65, 6651, 6629.67, 6638.24]
  },
  {
    x: new Date(1538785800000),
    y: [6638.24, 6640, 6620, 6624.47]
  },
  {
    x: new Date(1538787600000),
    y: [6624.53, 6636.03, 6621.68, 6624.31]
  },
  {
    x: new Date(1538789400000),
    y: [6624.61, 6632.2, 6617, 6626.02]
  },
  {
    x: new Date(1538791200000),
    y: [6627, 6627.62, 6584.22, 6603.02]
  },
  {
    x: new Date(1538793000000),
    y: [6605, 6608.03, 6598.95, 6604.01]
  },
  {
    x: new Date(1538794800000),
    y: [6604.5, 6614.4, 6602.26, 6608.02]
  },
  {
    x: new Date(1538796600000),
    y: [6608.02, 6610.68, 6601.99, 6608.91]
  },
  {
    x: new Date(1538798400000),
    y: [6608.91, 6618.99, 6608.01, 6612]
  },
  {
    x: new Date(1538800200000),
    y: [6612, 6615.13, 6605.09, 6612]
  },
  {
    x: new Date(1538802000000),
    y: [6612, 6624.12, 6608.43, 6622.95]
  },
  {
    x: new Date(1538803800000),
    y: [6623.91, 6623.91, 6615, 6615.67]
  },
  {
    x: new Date(1538805600000),
    y: [6618.69, 6618.74, 6610, 6610.4]
  },
  {
    x: new Date(1538807400000),
    y: [6611, 6622.78, 6610.4, 6614.9]
  },
  {
    x: new Date(1538809200000),
    y: [6614.9, 6626.2, 6613.33, 6623.45]
  },
  {
    x: new Date(1538811000000),
    y: [6623.48, 6627, 6618.38, 6620.35]
  },
  {
    x: new Date(1538812800000),
    y: [6619.43, 6620.35, 6610.05, 6615.53]
  },
  {
    x: new Date(1538814600000),
    y: [6615.53, 6617.93, 6610, 6615.19]
  },
  {
    x: new Date(1538816400000),
    y: [6615.19, 6621.6, 6608.2, 6620]
  },
  {
    x: new Date(1538818200000),
    y: [6619.54, 6625.17, 6614.15, 6620]
  },
  {
    x: new Date(1538820000000),
    y: [6620.33, 6634.15, 6617.24, 6624.61]
  },
  {
    x: new Date(1538821800000),
    y: [6625.95, 6626, 6611.66, 6617.58]
  },
  {
    x: new Date(1538823600000),
    y: [6619, 6625.97, 6595.27, 6598.86]
  },
  {
    x: new Date(1538825400000),
    y: [6598.86, 6598.88, 6570, 6587.16]
  },
  {
    x: new Date(1538827200000),
    y: [6588.86, 6600, 6580, 6593.4]
  },
  {
    x: new Date(1538829000000),
    y: [6593.99, 6598.89, 6585, 6587.81]
  },
  {
    x: new Date(1538830800000),
    y: [6587.81, 6592.73, 6567.14, 6578]
  },
  {
    x: new Date(1538832600000),
    y: [6578.35, 6581.72, 6567.39, 6579]
  },
  {
    x: new Date(1538834400000),
    y: [6579.38, 6580.92, 6566.77, 6575.96]
  },
  {
    x: new Date(1538836200000),
    y: [6575.96, 6589, 6571.77, 6588.92]
  },
  {
    x: new Date(1538838000000),
    y: [6588.92, 6594, 6577.55, 6589.22]
  },
  {
    x: new Date(1538839800000),
    y: [6589.3, 6598.89, 6589.1, 6596.08]
  },
  {
    x: new Date(1538841600000),
    y: [6597.5, 6600, 6588.39, 6596.25]
  },
  {
    x: new Date(1538843400000),
    y: [6598.03, 6600, 6588.73, 6595.97]
  },
  {
    x: new Date(1538845200000),
    y: [6595.97, 6602.01, 6588.17, 6602]
  },
  {
    x: new Date(1538847000000),
    y: [6602, 6607, 6596.51, 6599.95]
  },
  {
    x: new Date(1538848800000),
    y: [6600.63, 6601.21, 6590.39, 6591.02]
  },
  {
    x: new Date(1538850600000),
    y: [6591.02, 6603.08, 6591, 6591]
  },
  {
    x: new Date(1538852400000),
    y: [6591, 6601.32, 6585, 6592]
  },
  {
    x: new Date(1538854200000),
    y: [6593.13, 6596.01, 6590, 6593.34]
  },
  {
    x: new Date(1538856000000),
    y: [6593.34, 6604.76, 6582.63, 6593.86]
  },
  {
    x: new Date(1538857800000),
    y: [6593.86, 6604.28, 6586.57, 6600.01]
  },
  {
    x: new Date(1538859600000),
    y: [6601.81, 6603.21, 6592.78, 6596.25]
  },
  {
    x: new Date(1538861400000),
    y: [6596.25, 6604.2, 6590, 6602.99]
  },
  {
    x: new Date(1538863200000),
    y: [6602.99, 6606, 6584.99, 6587.81]
  },
  {
    x: new Date(1538865000000),
    y: [6587.81, 6595, 6583.27, 6591.96]
  },
  {
    x: new Date(1538866800000),
    y: [6591.97, 6596.07, 6585, 6588.39]
  },
  {
    x: new Date(1538868600000),
    y: [6587.6, 6598.21, 6587.6, 6594.27]
  },
  {
    x: new Date(1538870400000),
    y: [6596.44, 6601, 6590, 6596.55]
  },
  {
    x: new Date(1538872200000),
    y: [6598.91, 6605, 6596.61, 6600.02]
  },
  {
    x: new Date(1538874000000),
    y: [6600.55, 6605, 6589.14, 6593.01]
  },
  {
    x: new Date(1538875800000),
    y: [6593.15, 6605, 6592, 6603.06]
  },
  {
    x: new Date(1538877600000),
    y: [6603.07, 6604.5, 6599.09, 6603.89]
  },
  {
    x: new Date(1538879400000),
    y: [6604.44, 6604.44, 6600, 6603.5]
  },
  {
    x: new Date(1538881200000),
    y: [6603.5, 6603.99, 6597.5, 6603.86]
  },
  {
    x: new Date(1538883000000),
    y: [6603.85, 6605, 6600, 6604.07]
  },
  {
    x: new Date(1538884800000),
    y: [6604.98, 6606, 6604.07, 6606]
  },
  ]
}]
export const Statoptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    type: 'candlestick',
    // borderRadius: 20,
    height: 266,
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: "rgb(132, 90, 223)",
        downward: "rgba(132, 90, 223, 0.2)"
      }
    }
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#f2f6f7',
  },
  xaxis: {
    type: 'datetime',
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
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
}
//***  Crypto Statistics--- End ***//


//***  Crypto currencies Market Value--- Start ***//
export const Curseries = [{
  name: 'Value',
  data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
}]
export const Curoptions:any = ({color}:any)=>({
    chart: {
      events: {
        mounted: (chart:any) => {
          chart.windowResizeHandler();
        }
      },
      type: 'line',
      height: 20,
      width: 120,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 0,
    },
    fill: {
  
    },
    tooltip: {
      enabled: false,
    },
  
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      axisBorder: {
        show: false
      },
    },
    colors: [color],
  }
)
//***  Crypto currencies Market Value--- End ***//


//***  Etherium--- Start ***//
export const Eseries = [{
  name: 'Value',
  data: [0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31, 37, 39, 62, 51, 35, 41]
}]
export const Eoptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
  },
  tooltip: {
    enabled: false,
  },

  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['#e6533c'],
}
//***  Etherium--- End ***//


//***  Cryptodash--- Start ***//
export const Cseries = [{
  name: 'Value',
  data: [61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 62, 51, 35, 41]
}]
export const Coptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {

  },
  tooltip: {
    enabled: false,
  },

  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['#26bf94'],
}
//***  Cryptodash--- End ***//


//***  Ripple--- Start ***//
export const Ripseries = [{
  name: 'Value',
  data: [61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41]
}]
export const Ripoptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {

  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['#26bf94'],
}
//***  Ripple--- End ***//


//***  Iota--- Start ***//
export const Iotaseries = [{
  name: 'Value',
  data: [61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31]
}]
export const Iotaoptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['#e6533c'],
}
//***  Iota--- End ***//


//***  NEO--- Start ***//
export const Neoseries = [{
  name: 'Value',
  data: [62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54, 37, 39, 0, 45, 54, 38]
}]
export const Neooptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {

  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['#e6533c'],
}

const Seriesdata = {
  btc: {
      series: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
  },
  eth: {
      series:[0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31, 37, 39, 62, 51, 35, 41]
  },
  usd: {
      series:[61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 62, 51, 35, 41]
  },
  sol: {
      series:[61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41]
  },
  ada: {
      series:[61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31]
  },
  bnc: {
      series:[62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54, 37, 39, 0, 45, 54, 38]
  }
}
const Bitcoinseries = (data: { series: any }) => ({
  name: "Value",
  data: data.series
})
//***  NEO--- End ***//

  //
  interface Recent {
    id: number
    month: string
    day: string
    src1: string
    src2: string
    name: string
    time: string
    status: string
    color: string
    class: string
    text1: string
    text2: string
  }
export const Recentactivity : Recent[]= [
    { id: 1, month: 'Dec', day: '15', src1:bitcoin, src2:face4, name: 'Emiley Jackson', time: '04:24PM ', status: 'Delivered Time', color: 'danger', class: 'Sent', text1: 'Bitcoin', text2: '0.0092312' },
    { id: 2, month: 'Dec', day: '24', src1:ethereum, src2:face15, name: 'Jackie Shraff', time: '11:57PM', status: 'Received Time', color: 'success', class: 'Received', text1: 'Etherium', text2: '0.9207702' },
    { id: 3, month: 'Dec', day: '15', src1:dash, src2:face11, name: 'Json Taylor', time: '02:28AM', status: 'Received Time', color: 'success', class: 'Received', text1: 'Dash ', text2: '0.83092333' },
    { id: 4, month: 'Nov', day: '30', src1:euro, src2:face5, name: 'Jessica May', time: '10:08AM ', status: 'Sent Time', color: 'info', class: 'Processing', text1: 'Euro', text2: '0.0092363' },
    { id: 5, month: 'Nov', day: '29', src1:litecoin, src2:face12, name: 'Lieonel Marsi', time: '06:05PM', status: 'Received Time', color: 'success', class: 'Received', text1: 'Litecoin', text2: '1.00009023' }
];
  
  export const Selectdata1 = [
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'XRP', label: 'XRP' },
    { value: 'DASH', label: 'DASH' },
    { value: 'NEO', label: 'NEO' },
    { value: 'LTC', label: 'LTC' },
    { value: 'BSD', label: 'BSD' }
  ];
  export const Selectdata2 = [
    { value: 'USD', label: 'USD' },
    { value: 'AED', label: 'AED' },
    { value: 'AUD', label: 'AUD' },
    { value: 'ARS', label: 'ARS' },
    { value: 'AZN', label: 'AZN' },
    { value: 'BGN', label: 'BGN' },
    { value: 'BRL', label: 'BRL' }
  ];
  
export const Transactionsdata=[
  {id:1, img:bitcoinsq, title:'Bitcoin', text:'Sell', value:'+$19,123.02', btcvalue:'BTC 0.0823.45', class:'mb-4' },
  {id:2, img:ethereumsq, title:'Etherium', text:'Buy', value:'-$1,430.92', btcvalue:'ETH 10,783.23', class:'mb-4' },
  {id:3, img:dashsq, title:'Dash', text:'Sell', value:'+$5,236.53', btcvalue:'DASH 12,456.98', class:'mb-4' },
  {id:4, img:bytecoin, title:'Bytecoin', text:'Buy', value:'-$1,810.93', btcvalue:'BYTE 8,154.00', class:'mb-4' },
  {id:5, img:golem, title:'Golem', text:'Sell', value:'+$5,046.34', btcvalue:'GOLEM 9,384.73', class:'mb-4' },
  {id:6, img:Siacoin, title:'SiaCoin', text:'Sell', value:'+$2,625.50', btcvalue:'SIA 3,151.09', class:'mb-4' },
  {id:7, img:monero, title:'Monero', text:'Sell', value:'+$1,256.24', btcvalue:'XMR 2,799.06', class:'' }
]
export const TopTraderssdata=[
  {id:1, img:face11, title:'Json Taylor', text:'Bought 0.008213 Bitcoin using ****9808', value:'$1,203.92', btcvalue:'0.09251821409', class:" - BTC" ,liclass:'mb-4'},
  {id:2, img:face4, title:'Alicia Smith', text:'Sold - 0.7902400 Litecoin', value:'$19,092.56', btcvalue:'0.2362333001', class:" - LTC" ,liclass:'mb-3'},
  {id:3, img:face15, title:'Branco Eliga', text:'Bought +12.9092 Euro coin', value:'$8,977.46', btcvalue:'0.009823487', class:" - EUROC" ,liclass:'mb-3'},
  {id:4, img:face12, title:'Alec Carey', text:'Bought 32.09472944 Dash using wallet', value:'$9,772.46', btcvalue:'8.88234590', class:" - DASH" ,liclass:'mb-3'},
  {id:5, img:face5, title:'Sia Linda', text:'Sent 0.00662 Bitcoin to Ravos Chan', value:'$9,772.46', btcvalue:'58.6225600', class:" - BTC" ,liclass:'mb-3'},
  {id:6, img:face10, title:'Ryan Ranolds', text:'Bought 2.098123 Etherium', value:'$18,283982.00', btcvalue:'190.0092773', class:" - ETH" ,liclass:''},
]

export const Currencymarketvalue=[
  {id:1,name:'Bitcoin',src:bitcoinreg, symbol:"BTC", price:'$16,839.10', marketcap:'324.01B', pricegraph:Curoptions({color:'#26bf94'}), series:Bitcoinseries(Seriesdata.btc),voulme:'14,674,311,168', pricechange:'0.30%' ,color:'success' ,chartid:'bitcoin-price-graph'},
  {id:2,name:'Etherium',src:ethereumreg, symbol:"ETH", price:'1,217.96', marketcap:'$149,316,232,699', pricegraph:Curoptions({color:'#e6533c'}), series:Bitcoinseries(Seriesdata.eth),voulme:'$4,758,554,801', pricechange:'0.30%' ,color:'success',chartid:'etherium-price-graph'},
  {id:3,name:'Dash',src:dashreg, symbol:"DASH", price:'$43.49', marketcap:'$480,799,847', pricegraph:Curoptions({color:'#26bf94'}), series:Bitcoinseries(Seriesdata.usd),voulme:'$52,626,563', pricechange:'0.45%' ,color:'success', chartid:'dash-price-graph'},
  {id:4,name:'Ripple',src:ripplereg, symbol:"XRP", price:'$0.3531', marketcap:'$17,791,969,465', pricegraph:Curoptions({color:'#26bf94'}), series:Bitcoinseries(Seriesdata.sol),voulme:'$511,598,941', pricechange:'0.97%' ,color:'success', chartid:'ripple-price-graph'},
  {id:5,name:'Iota',src:iotareg, symbol:"IOTA", price:'$0.169741', marketcap:'$471,800,600', pricegraph:Curoptions({color:'#e6533c'}), series:Bitcoinseries(Seriesdata.ada),voulme:'$5,524,385', pricechange:'0.93%' ,color:'success', chartid:'iota-price-graph'},
  {id:6,name:'Neo',src:neoreg, symbol:"NEO", price:'$6.43', marketcap:'$453,601,667', pricegraph:Curoptions({color:'#e6533c'}), series:Bitcoinseries(Seriesdata.bnc),voulme:'$12,904,320', pricechange:'0.49%' ,color:'danger', chartid:'neo-price-graph'}
]
 export const BtcCard={
   Image:bitcoinreg, 
   title:'Bitcoin - BTC',
   Options:Bitoptions,
   Series:Bitseries , 
   percentage:"+2.33%",
   dollarvalue:"$0.04",
   Text:'BTC / USD',
   Value:'$35,876.29'
 }

 export const ETHcard={
  Image:ethereumreg ,
  title:'Etherium - ETH',
  Options:Ethoptions ,
  Series:Ethseries ,
  percentage:"+13.45%" ,
  Text:'ETH / USD',
  dollarvalue:"$2.57",
  Value:'$31,244.12',
}
 export const Dashcard={
  Image:dashreg,
  title:'Dash - DASH' ,
  Options:Dasoptions ,
  Series:Dasseries ,
  dollarvalue:"$12.32",
  Text:'DASH / USD' ,
  Value:'$26,345.000',
  percentage:"+112.95%"
 }