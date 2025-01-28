import bitcoin from "../../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg";
import ethereum from "../../../../../assets/images/crypto-currencies/square-color/Ethereum.svg";
import litecoin from "../../../../../assets/images/crypto-currencies/square-color/Litecoin.svg";
import ripple from "../../../../../assets/images/crypto-currencies/square-color/Ripple.svg";
import media89 from "../../../../../assets/images/media/media-89.png";

interface Wallet {
  id: number;
  title: string;
  amount: string;
  price: string;
  imgSrc: string;
  available:string;
  data:string;
}

export const WalletData: Wallet[] = [
  {
    id: 1,
    title: 'BTC WALLET',
    amount: '0.05437 BTC',
    price: '$1646.94 USD',
    imgSrc:bitcoin,
    available:'Available BTC',
    data:'In USD'
  },
  {
    id: 2,
    title: 'ETH WALLET',
    amount: '2.3892 ETH',
    price: '$4581.24 USD',
    imgSrc:ethereum,
    available:'Available ETH',
    data:'In USD'
  },
  {
    id: 3,
    title: 'XRP WALLET',
    amount: '234.943 XRP',
    price: '$192.29 USD',
    imgSrc:ripple,
    available:'Available XRP',
    data:'In USD'
  },
  {
    id: 4,
    title: 'LTC WALLET',
    amount: '37.254 LTC',
    price: '$3519.01 USD',
    imgSrc:litecoin, 
    available:'Available LTC',
    data:'In USD'
  },
];

export const WalletData1 = [
    {
      title: 'BTC Wallet Address',
      address:'Wallet Address',
      copy:'Copy',
      recieve:'Recieved',
      price:'6.2834',
      sent:'Sent',
      sentPrice:'2.7382',
      balance:'Wallet Balance',
      balancePrice:'12.5232',
      btnTitle: 'Connect',
      imgSrc: media89, 
    },
    {
      title: 'ETH Wallet Address',
      address:'Wallet Address',
      copy:'Copy',
      recieve:'Recieved',
      price:'6.2834',
      sent:'Sent',
      sentPrice:'2.7382',
      balance:'Wallet Balance',
      balancePrice:'12.5232',
      btnTitle: 'Connect',
      imgSrc: media89, 
    },
    {
      title: 'LTC Wallet Address',
      address:'Wallet Address',
      copy:'Copy',
      recieve:'Recieved',
      price:'6.2834',
      sent:'Sent',
      sentPrice:'2.7382',
      balance:'Wallet Balance',
      balancePrice:'12.5232',
      btnTitle: 'Connect',
      imgSrc: media89, 
    },
  ];
