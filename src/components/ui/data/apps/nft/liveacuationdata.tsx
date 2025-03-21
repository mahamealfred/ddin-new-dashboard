import face1 from "../../../../../assets/images/faces/1.jpg";
import face3 from "../../../../../assets/images/faces/3.jpg";
import face5 from "../../../../../assets/images/faces/5.jpg";
import face8 from "../../../../../assets/images/faces/8.jpg";
import face9 from "../../../../../assets/images/faces/9.jpg";
import face11 from "../../../../../assets/images/faces/11.jpg";
import face13 from "../../../../../assets/images/faces/13.jpg";
import face15 from "../../../../../assets/images/faces/15.jpg";
import image4 from "../../../../../assets/images/nft-images/4.png";
import image31 from "../../../../../assets/images/nft-images/31.png";
import image30 from "../../../../../assets/images/nft-images/30.png";
import image33 from "../../../../../assets/images/nft-images/33.png";
import image2 from "../../../../../assets/images/nft-images/2.png";
import image32 from "../../../../../assets/images/nft-images/32.png";
import image3 from "../../../../../assets/images/nft-images/3.png";
import image5 from "../../../../../assets/images/nft-images/5.png";
import image18 from "../../../../../assets/images/nft-images/18.png";
import image8 from "../../../../../assets/images/nft-images/8.png";
import image11 from "../../../../../assets/images/nft-images/11.png";
import image22 from "../../../../../assets/images/nft-images/22.png";
//Live Auction
interface live {
    id: number;
    imgSrc1: string;
    imgSrc2: string;
    name: string;
    heading: string;
    text1: string;
    text2: string;
    highestBid: string
}

export const Liveauctiondata: live[] = [
    {id:1, imgSrc1:image4, imgSrc2:face11 ,name:'BitMaster', heading:'Chromatic Chaos', text1:'@bit_master', text2:'1.2K Likes', highestBid:'1.19ETH'},
    {id:2, imgSrc1:image30, imgSrc2:face1 ,name:'SpaceY NFT', heading:'NFT Lorem Shapes', text1:'@sp1116 ', text2:'1.45K Likes', highestBid:'1.16ETH'},
    {id:3, imgSrc1:image31, imgSrc2:face5 ,name:'NFTNinja', heading:'Chromatic Chaos', text1:'@nftninja', text2:'0.37K Likes', highestBid:'1.64ETH'},
    {id:4, imgSrc1:image2, imgSrc2:face3 ,name:'CryptoCraft', heading:'Virtual Veracity', text1:'@cryptocraft', text2:'0.62K Likes', highestBid:'2.57ETH'},
    {id:5, imgSrc1:image33, imgSrc2:face13 ,name:'DigitalDreamer', heading:'Crypto Cosmos', text1:'@d_dreamer', text2:'0.5K Likes', highestBid:'0.45ETH'},
    {id:6, imgSrc1:image3, imgSrc2:face8 ,name:'PixelProphet', heading:'Electric Euphoria', text1:'@pixelprophet', text2:'1.2K Likes', highestBid:'0.45ETH'},
    {id:7, imgSrc1:image32, imgSrc2:face9 ,name:'PixelMaestro', heading:'Meta-Morphosis', text1:'@pixelmaestro', text2:'1.9K Likes', highestBid:'2.07ETH'},
    {id:8, imgSrc1:image5, imgSrc2:face15 ,name:'ArtTechie', heading:'Digital Dreamscape', text1:'@arttechie', text2:'1.3K Likes', highestBid:'0.24ETH'}
];

interface live1 {
    id: number;
    src: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    class:string;
}
export const Liveauctiondata1: live1[] = [
    { id: 1, src: image2, text1: 'Joseph Smith', text2: '@josephsmith', text3: '+18.93ETH', text4: '22 NFT', class:"!border-t-0 !border-e-0 !border-s-0" },
    { id: 2, src: image18, text1: 'Elisha Sean', text2: '@elishasean', text3: '+12.45ETH', text4: '17 NFT', class:"!border-e-0 !border-s-0" },
    { id: 3, src: image8, text1: 'Json Taylor', text2: '@jsontaylor', text3: '+11.25ETH', text4: '15 NFT', class:"!border-e-0 !border-s-0" },
    { id: 4, src: image11, text1: 'Julia Camo', text2: '@juliacamo', text3: '+10.48ETH', text4: '14 NFT', class:"!border-e-0 !border-s-0" },
    { id: 5, src: image22, text1: 'Charles Achilles', text2: '@charlesachilles', text3: '+9.58ETH', text4: '12 NFT', class:"!border-e-0 !border-s-0" },
    { id: 6, src: image31, text1: 'Amanda Nanes', text2: 'amandananes@', text3: '+7.67ETH', text4: '11 NFT', class:"!border-b-0 !border-e-0 !border-s-0" },
];