
import bitcoin from "../../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg";
import litecoin from "../../../../../assets/images/crypto-currencies/square-color/Litecoin.svg";
import ethereum from "../../../../../assets/images/crypto-currencies/square-color/Ethereum.svg";
import dash from "../../../../../assets/images/crypto-currencies/square-color/Dash.svg";
import ripple from "../../../../../assets/images/crypto-currencies/square-color/Ripple.svg";
import golem from "../../../../../assets/images/crypto-currencies/square-color/Golem.svg";
import monero from "../../../../../assets/images/crypto-currencies/square-color/Monero.svg";
import eos from "../../../../../assets/images/crypto-currencies/square-color/EOS.svg"

export const CurrencyOptions1 = [
  { value: 'Bitcoin', label: 'Bitcoin' },
  { value: 'Etherium', label: 'Etherium' },
  { value: 'Litecoin', label: 'Litecoin' },
  { value: 'Ripple', label: 'Ripple' },
  { value: 'Cardano', label: 'Cardano' },
  { value: 'Neo', label: 'Neo' },
  { value: 'Stellar', label: 'Stellar' },
  { value: 'EOS', label: 'EOS' },
  { value: 'NEM', label: 'NEM' },
];
export const CurrencyOptions2 = [
  { value: 'USD', label: 'USD' },
  { value: 'Pound', label: 'Pound' },
  { value: 'Rupee', label: 'Rupee' },
  { value: 'Euro', label: 'Euro' },
  { value: 'Won', label: 'Won' },
  { value: 'Dinar', label: 'Dinar' },
  { value: 'Rial', label: 'Rial' }
];

//*** Bitcoin - BTC ---Start ***//
const  BTCoptions:any = ({color}:any) =>  ({
  chart: {
    type: "area",
    height: 60,
    sparkline: {
      enabled: true,
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
      blur: 1,
      color: "#fff",
      opacity: 0.05,
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
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false,
    },
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  colors: [color],
  tooltip: {
    enabled: false,
  },
})
const  BTCseries= [
  {
    name: "Value",
    data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
  },
]
//*** Bitcoin - BTC ---End ***//

export const Currencydata = [
  {
    title: 'Bitcoin - BTC',
    imgSrc:bitcoin,
    percentage: '24.3%',
    opacity: '+0.59',
    badge: '24H',
    amount: '0.00434',
    price: '$30.29',
    options: BTCoptions({color:"rgba(132, 90, 223,0.5)"}),
    series: BTCseries,
    type: 'area',
    amountColor:'primary',
    priceColor:'success',
  },
  {
    title: 'Etherium - ETH',
    imgSrc:ethereum,
    percentage: '17.67%',
    opacity: '+1.30',
    badge: '',
    amount: '1.2923',
    price: '$2,283.73',
    options: BTCoptions({color:"rgba(35, 183, 229,0.5)"}),
    series: BTCseries,
    type: 'area',
    amountColor:'secondary',
    priceColor:'success',
  },
  {
    title: 'Dash - DASH',
    imgSrc:dash,
    percentage: '17.67%',
    opacity: '+1.30',
    badge: '',
    amount: '1.2923',
    price: '$2,283.73',
    options: BTCoptions({color:"rgba(38, 191, 148,0.5)"}),
    series: BTCseries,
    type: 'area',
    amountColor:'success',
    priceColor:'success',
  },
  {
    title: 'Litecoin - LTC',
    imgSrc:litecoin,
    percentage: '17.67%',
    opacity: '+1.30',
    badge: '',
    amount: '1.2923',
    price: '$2,283.73',
    options: BTCoptions({color:"rgba(245, 184, 73,0.5)"}),
    series: BTCseries,
    type: 'area',
    amountColor:'warning',
    priceColor:'success',
  },
  {
    title: 'Ripple - XRS',
    imgSrc:ripple,
    percentage: '17.67%',
    opacity: '+1.30',
    badge: '',
    amount: '1.2923',
    price: '$2,283.73',
    options: BTCoptions({color:"rgba(231, 145, 188,0.5)"}),
    series: BTCseries,
    type: 'area',
    amountColor:'pinkmain',
    priceColor:'success',
  },
  {
    title: 'Golem - GLM',
    imgSrc:golem,
    percentage: '17.67%',
    opacity: '+1.30',
    badge: '',
    amount: '1.2923',
    price: '$2,283.73',
    options: BTCoptions({color:"rgba(137, 32, 173,0.5)"}),
    series: BTCseries,
    type: 'area',
    amountColor:'purplemain',
    priceColor:'success',
  },
  {
    title: 'Monero',
    imgSrc:monero,
    percentage: '17.67%',
    opacity: '+1.30',
    badge: '',
    amount: '1.2923',
    price: '$2,283.73',
    options: BTCoptions({color:"rgba(230, 83, 60,0.5)"}),
    series: BTCseries,
    type: 'area',
    amountColor:'danger',
    priceColor:'success',
  },
  {
    title: 'EOS',
    imgSrc:eos, 
    percentage: '17.67%',
    opacity: '+1.30',
    badge: '',
    amount: '1.2923',
    price: '$2,283.73',
    options: BTCoptions({color:"rgba(73, 182, 245,0.5)"}),
    series: BTCseries,
    type: 'area',
    amountColor:'info',
    priceColor:'success',
  }
];