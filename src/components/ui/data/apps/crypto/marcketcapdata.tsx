import bytecoinsq from "../../../../../assets/images/crypto-currencies/square-color/Bytecoin.svg";
import bitcoin from "../../../../../assets/images/crypto-currencies/regular/Bitcoin.svg";
import bitcoinsq from "../../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg";
import litecoin from "../../../../../assets/images/crypto-currencies/square-color/Litecoin.svg";
import ethereum from "../../../../../assets/images/crypto-currencies/square-color/Ethereum.svg";
import ethereumreg from "../../../../../assets/images/crypto-currencies/regular/Ethereum.svg";
import dashreg from "../../../../../assets/images/crypto-currencies/regular/Dash.svg";
import dash from "../../../../../assets/images/crypto-currencies/square-color/Dash.svg";
import ripplesq from "../../../../../assets/images/crypto-currencies/square-color/Ripple.svg";
import golemsq from "../../../../../assets/images/crypto-currencies/square-color/Golem.svg";
import eossq from "../../../../../assets/images/crypto-currencies/square-color/EOS.svg";
import iotasq from "../../../../../assets/images/crypto-currencies/square-color/IOTA.svg";
import monerosq from "../../../../../assets/images/crypto-currencies/square-color/Monero.svg";

//***  Bitcoin - BTC--- Start  ***//
const Bseries = [
  {
    name: "Value",
    data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
  },
]
const Boptions:any = ({color}:any) => ({
  chart: {
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
    gradient: {
      enabled: false
    }
  },
  yaxis: {
    min: 0,
    show: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  // yaxis: {
  //   axisBorder: {
  //     show: false
  //   },
  // },
  colors: [color],
})
//***  Bitcoin - BTC--- End  ***//

//***  Bit--- Start  ***//
export const B1series = [{
name: 'Value',
data: [
  0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
  61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
  35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
  65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
  46,
],
}]
export const B1options: any = ({color}:any) =>({
  chart: {
    type: "line",
    height: 30,
    width: 120,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.1,
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  yaxis: {
    min: 0,
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  // yaxis: {
  //   axisBorder: {
  //     show: false,
  //   },
  // },
  tooltip: {
    enabled: false,
  },
colors: [color],
})
//***  Bit--- End  ***//


interface CryptocurrencyCard {
  id: number;
  Image: string;
  title: string;
  Text: string;
  Value: string;
  amount: string;
  percentage: string;
  dollarvalue: string;
  Options: any;
  Series: any;
  rank: string;
  badge: any;
}

export const Cryptocurrencies: CryptocurrencyCard[] = [
  {
    id: 1,
    Image: bitcoin,
    title: ' Bitcoin - BTC ',
    Text: 'BTC / USD',
    Value: '$35,876.29',
    amount: '+280.30 (0.96%)',
    percentage: '+2.33%',
    dollarvalue:"$0.04",
    Options: Boptions({color:"rgb(38, 191, 148)"}),
    Series: Bseries,
    rank: '#1',
    badge: <span className="badge bg-secondary/10 text-secondary ms-4">3 Years</span>
  },
  {
    id: 2,
    Image: ethereumreg,
    title: ' Etherium - ETH ',
    Text: 'ETH / USD',
    Value: '$31,244.12',
    amount: '+2,044.24 (1.32%)',
    percentage: '+13.45%',
    dollarvalue:"$2.57",
    Options: Boptions({color:"rgb(38, 191, 148)"}),
    Series: Bseries,
    rank: '#2',
    badge: '',
  },
  {
    id: 3,
    Image: dashreg,
    title: ' Dash - DASH ',
    Text: 'DASH / USD',
    Value: '$26,345.000',
    amount: '+40.17 (1.52%)',
    percentage: '+112.95%',
    dollarvalue:"$12.32",
    Options: Boptions({color:"rgb(230, 83, 60)"}),
    Series: Bseries,
    rank: '#105',
    badge: '',
  },
];


interface CryptoData {
  rank: number;
  name: string;
  marketCap: string;
  price: string;
  dayChange: string;
  weekChange: string;
  volume: string;
  supply: string;
  supplyProgress: number |string | any; 
  chartOptions: object;
  chartSeries: object;
  imageUrl: string;
  color:string;
  icon:string;
  color1:string;
  icon1:string;
}

export const CurrenctTable: CryptoData[] = [
  {
    rank: 1,
    name: 'Bitcoin (BTC)',
    marketCap: '$582.23B',
    price: '$29,948.80',
    dayChange: '0.483%',
    weekChange: '0.239%',
    volume: '$11.79B USD',
    supply: '19.43M of (21M)',
    supplyProgress: <div className="progress-stacked  progress-xs w-[75%] mb-4 flex">
       <div className="progress-bar !bg-success !rounded-full opacity-[0.5] w-full" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
       <div className="progress-bar !rounded-s-none !rounded-e-full !bg-danger opacity-[0.5] w-[12%]" role="progressbar" aria-valuenow={12} aria-valuemin={0} aria-valuemax={100}></div>
        </div>,
    chartOptions: B1options({color:"rgb(230, 83, 60)"}),
    chartSeries: B1series,
    imageUrl: bitcoinsq, 
    color:'danger',
    icon:'down',
    color1:'success',
    icon1:'up'
  },
  {
    rank: 2,
    name: 'Ethereum (ETH)',
    marketCap: '$226.91B',
    price: '$1,895.96',
    dayChange: '0.87%',
    weekChange: '0.29%',
    volume: '$2.83B USD',
    supply: '120M',
    supplyProgress: '',
    chartOptions: B1options({color:'rgb(38, 191, 148)'}),
    chartSeries: B1series,
    imageUrl: ethereum, 
    color:'danger',
    icon:'down',
    color1:'danger',
    icon1:'down'
  },
  {
    rank: 3,
    name: 'Golem (GLM)',
    marketCap: '$202.07M',
    price: '$0.201472',
    dayChange: '0.61%',
    weekChange: '34.96%',
    volume: '$2,112,645 USD',
    supply: '1,000M',
    supplyProgress:  <div className="progress-stacked progress-xs w-[75%] mb-4 flex">
    <div className="progress-bar !bg-success opacity-[0.5] !rounded-full w-full" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
  </div>,
    chartOptions: B1options({color:'rgb(38, 191, 148)'}),
    chartSeries: B1series,
    imageUrl: golemsq, 
    color:'success',
    icon:'up',
    color1:'danger',
    icon1:'down'
  },
  {
    rank: 4,
    name: 'Dash (DASH)',
    marketCap: '$365.877M',
    price: '$32.13',
    dayChange: '0.59%',
    weekChange: '1.24%',
    volume: '$3.61M USD',
    supply: '11.37M of (18.92M)',
    supplyProgress: <div className="progress-stacked progress-xs w-[75%] mb-4 flex">
    <div className="progress-bar !bg-success opacity-[0.5] w-[56%]" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
    <div className="progress-bar !rounded-s-none !rounded-e-full !bg-danger opacity-[0.5] w-[44%]" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
  </div>,
    chartOptions: B1options({color:'rgb(38, 191, 148)'}),
    chartSeries: B1series,
    imageUrl: dash, 
    color:'success',
    icon:'up',
    color1:'success',
    icon1:'down'
  },
  {
    rank: 5,
    name: 'Litecoin (LTC)',
    marketCap: '$6.80B',
    price: '$92.98',
    dayChange: '0.90%',
    weekChange: '2.22%',
    volume: '$11.46B USD',
    supply: '73.40M',
    supplyProgress:  <div className="progress-stacked progress-xs w-[75%] mb-4 flex">
    <div className="progress-bar !rounded-full !bg-success opacity-[0.5] w-full" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
  </div>,
    chartOptions: B1options({color:"rgb(230, 83, 60)"}),
    chartSeries: B1series,
    imageUrl: litecoin, 
    color:'danger',
    icon:'up',
    color1:'success',
    icon1:'down'
  },
  {
    rank: 6,
    name: "Ripple (XRP)",
    marketCap: "$42.48B",
    price: "$0.83",
    dayChange: "0.01%",
    weekChange: "0.91%",
    volume: "$2.99B USD",
    supply: "52.54B of (100B)",
    supplyProgress: <div className="progress-stacked progress-xs w-[75%] mb-4 flex">
    <div className="progress-bar !bg-success opacity-[0.5] w-[52%]" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
    <div className="progress-bar !rounded-s-none !rounded-e-full !bg-danger opacity-[0.5] w-[48%]" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
  </div>,
    imageUrl: ripplesq,
    chartOptions: B1options({color:'rgb(38, 191, 148)'}),
    chartSeries: B1series,
    color:'success',
    icon:'up',
    color1:'success',
    icon1:'down'
  },
  {
    rank: 7,
    name: "EOS",
    marketCap: "$85.2M",
    price: "$0.765957",
    dayChange: "0.61%",
    weekChange: "20.65%",
    volume: "$116.91M USD",
    supply: "10.1B of (105B)",
    imageUrl: eossq,
    supplyProgress:  <div className="progress-stacked progress-xs w-[75%] mb-4 flex">
    <div className="progress-bar !bg-success opacity-[0.5] w-[10%]" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
    <div className="progress-bar !rounded-s-none !rounded-e-full !bg-danger opacity-[0.5] w-[90%]" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
  </div>,
    chartOptions: B1options({color:'rgb(38, 191, 148)'}),
    chartSeries: B1series,
    color:'danger',
    icon:'up',
    color1:'danger',
    icon1:'down'
  },
  {
    rank: 8,
    name: "Bytecoin (BCN)",
    marketCap: "$6.2M",
    price: "$0.00039",
    dayChange: "25.24%",
    weekChange: "27.12%",
    volume: "$6,184 USD",
    supply: "184.02B of (184.07B)",
    imageUrl: bytecoinsq,
    supplyProgress:  <div className="progress-stacked progress-xs w-[75%] mb-4 flex">
    <div className="progress-bar !bg-success opacity-[0.5] w-[90%]" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
    <div className="progress-bar !rounded-s-none !rounded-e-full !bg-danger w-[10%] opacity-[0.5]" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
  </div>,
    chartOptions: B1options({color:"rgb(230, 83, 60)"}),
    chartSeries: B1series,
    color:'danger',
    icon:'up',
    color1:'danger',
    icon1:'down'
  },
  {
    rank: 9,
    name: "IOTA",
    marketCap: "$510.429M",
    price: "$0.184992",
    dayChange: "1.08%",
    weekChange: "1.41%",
    volume: "$7.50M USD",
    supply: "2.78B",
    imageUrl: iotasq,
    supplyProgress: '',
    chartOptions: B1options({color:"rgb(230, 83, 60)"}),
    chartSeries: B1series,
    color:'danger',
    icon:'up',
    color1:'danger',
    icon1:'down'
  },
  {
    rank: 10,
    name: "Monero",
    marketCap: "$3.062B",
    price: "$165.76",
    dayChange: "3.22%",
    weekChange: "3.48%",
    volume: "$105.8M USD",
    supply: "18.15M",
    imageUrl: monerosq,
    supplyProgress: '',
    chartOptions: B1options({color:'rgb(38, 191, 148)'}),
    chartSeries: B1series,
    color:'danger',
    icon:'up',
    color1:'danger',
    icon1:'down'
  }
];
