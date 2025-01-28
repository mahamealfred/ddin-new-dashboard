import nft18 from "../../../../../assets/images/nft-images/18.png";
import nft19 from "../../../../../assets/images/nft-images/19.png";
import nft20 from "../../../../../assets/images/nft-images/20.png";
import nft21 from "../../../../../assets/images/nft-images/21.png";
import nft22 from "../../../../../assets/images/nft-images/22.png";
import nft23 from "../../../../../assets/images/nft-images/23.png";
import nft24 from "../../../../../assets/images/nft-images/24.png";
import nft25 from "../../../../../assets/images/nft-images/25.png";
import nft26 from "../../../../../assets/images/nft-images/26.png";
import nft27 from "../../../../../assets/images/nft-images/27.png";
import nft28 from "../../../../../assets/images/nft-images/28.png";
import nft29 from "../../../../../assets/images/nft-images/29.png";
import face1 from "../../../../../assets/images/faces/1.jpg";
import face2 from "../../../../../assets/images/faces/2.jpg";
import face3 from "../../../../../assets/images/faces/3.jpg";
import face4 from "../../../../../assets/images/faces/4.jpg";
import face5 from "../../../../../assets/images/faces/5.jpg";
import face6 from "../../../../../assets/images/faces/6.jpg";
import face7 from "../../../../../assets/images/faces/7.jpg";
import face8 from "../../../../../assets/images/faces/8.jpg";
import face9 from "../../../../../assets/images/faces/9.jpg";
import face10 from "../../../../../assets/images/faces/10.jpg";
import face11 from "../../../../../assets/images/faces/11.jpg";
import face12 from "../../../../../assets/images/faces/12.jpg";
import image18 from "../../../../../assets/images/nft-images/18.png";
import image21 from '../../../../../assets/images/nft-images/21.png';
import image20 from '../../../../../assets/images/nft-images/20.png';
import image25 from '../../../../../assets/images/nft-images/25.png';
import image26 from '../../../../../assets/images/nft-images/26.png';

interface tabpane {
    id:number;
    image1:string;
    image2:string;
    time:string;
    name:string;
    mail:string;
    title:string;
    text3:string;
    bid:string;
    likes:string
    avatarclass:string
}

export const Tabpane1data :tabpane[]= [
    { id: 1, image1:nft18, image2:face1, time: '04hrs : 24m : 38s', name: 'NFTNinja', mail: '@nftninja', title: 'Digital Dreamscape', text3: ' Highest Bid -', bid: '0.24ETH', likes: '0.47k' ,avatarclass:'avatar-rounded me-2'},
    { id: 2, image1:nft19, image2:face2, time: '04hrs : 24m : 38s', name: 'ArtTechie', mail: '@arttechie', title: 'Neo-Nebulae', text3: 'Highest Bid -', bid: '0.32ETH', likes: '1.19k' ,avatarclass:'avatar-rounded me-2'},
    { id: 3, image1:nft20, image2:face3, time: '04hrs : 24m : 38s', name: 'BitMaster', mail: '@bit_master', title: 'Chromatic Chaos', text3: 'Highest Bid -', bid: '0.19ETH', likes: '2.05k' ,avatarclass:'avatar-rounded me-2'},
    { id: 4, image1:nft21, image2:face4, time: '04hrs : 24m : 38s', name: 'CyberCanvas', mail: '@cybercanvas', title: 'Surreal Synthesis', text3: 'Highest Bid -', bid: '0.11ETH', likes: '0.19k' ,avatarclass:'avatar-rounded me-2'},
    { id: 5, image1:nft22, image2:face5, time: '04hrs : 24m : 38s', name: 'DigitalDreamer', mail: '@d_dreamer', title: 'Virtual Visions', text3: 'Highest Bid -', bid: '0.10ETH', likes: '0.65k' ,avatarclass:'avatar-rounded me-2'},
    { id: 6, image1:nft23, image2:face6, time: '04hrs : 24m : 38s', name: 'PixelProphet', mail: '@pixelprophet', title: 'Electric Euphoria', text3: 'Highest Bid -', bid: '0.45ETH', likes: '0.52k' ,avatarclass:'avatar-rounded me-2'},
    { id: 7, image1:nft24, image2:face7, time: '04hrs : 24m : 38s', name: 'TechnoTalent', mail: '@techno_t', title: 'Crypto Cosmos', text3: 'Highest Bid -', bid: '0.38ETH', likes: '1.55k' ,avatarclass:'avatar-rounded me-2'},
    { id: 8, image1:nft25, image2:face8, time: '04hrs : 24m : 38s', name: 'PixelMaestro', mail: '@pixelmaestro', title: 'Pixel Prism', text3: 'Highest Bid -', bid: '0.23ETH', likes: '1.75k' ,avatarclass:'avatar-rounded me-2'},
    { id: 9, image1:nft26, image2:face9, time: '04hrs : 24m : 38s', name: 'BitBard', mail: '@bitbard', title: 'Meta-Morphosis', text3: 'Highest Bid -', bid: '0.38ETH', likes: '0.83k' ,avatarclass:'avatar-rounded me-2'},
    { id: 10, image1:nft27, image2:face10, time: '04hrs : 24m : 38s', name: 'CryptoCraft', mail: '@cryptocraft', title: 'Virtual Veracity', text3: 'Highest Bid -', bid: '0.15ETH', likes: '0.16k' ,avatarclass:'avatar-rounded me-2'},
    { id: 11, image1:nft28, image2:face11, time: '04hrs : 24m : 38s', name: 'ArtWizard', mail: '@artwizard', title: 'Quantum Quirk', text3: 'Highest Bid -', bid: '0.33ETH', likes: '1.38k' ,avatarclass:'avatar-rounded me-2'},
    { id: 12, image1:nft29, image2:face12, time: '04hrs : 24m : 38s', name: 'DigitalMuse', mail: '@digitalmuse', title: 'Cybernetic Collage', text3: 'Highest Bid -', bid: '0.59ETH', likes: '1.32k' ,avatarclass:'avatar-rounded me-2'},
];
export const Nftcard={
    name:"NFTNinja",
    mail:"@nftninja",
    image1:image18,
    image2:face1,
    likes:"0.47k" ,
    bid:"0.24ETH" ,
    title:"Digital Dreamscape"
}

 export const Tab2data=[
    {name:"CyberCanvas" ,mail:"@cybercanvas" ,image1:image21 ,image2:face4 , likes:"0.19k" ,bid:"0.11ETH", title:"Surreal Synthesis"},
    {name:"PixelMaestro", mail:"@pixelmaestro", image1:image25, image2:face8,  likes:"1.75k", bid:"0.23ETH", title:"Pixel Prism"},
    {name:"BitBard", mail:"@bitbard" ,image1:image26 ,image2:face9 ,likes:"0.83k" ,bid:"0.38ETH", title:"Meta-Morphosis"}
 ]
  export const tab3data={
    name:"BitMaster",
    mail:"@bit_master", 
    image1:image20, 
    image2:face3, 
    likes:"0.47k",
    bid:"0.19ETH",
    title:"Chromatic Chaos"
  }