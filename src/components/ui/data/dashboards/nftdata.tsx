import nftimage1 from "../../../../assets/images/nft-images/1.png";
import nftimage2 from "../../../../assets/images/nft-images/2.png";
import nftimage3 from "../../../../assets/images/nft-images/3.png";
import nftimage4 from "../../../../assets/images/nft-images/4.png";
import nftimage5 from "../../../../assets/images/nft-images/5.png";
import nftimage6 from "../../../../assets/images/nft-images/6.png";
import nftimage7 from "../../../../assets/images/nft-images/7.png";
import nftimage8 from "../../../../assets/images/nft-images/8.png";
import nftimage9 from "../../../../assets/images/nft-images/9.png";
import nftimage16 from "../../../../assets/images/nft-images/16.png";
import nftimage10 from "../../../../assets/images/nft-images/10.png";
import nftimage11 from "../../../../assets/images/nft-images/11.png";
import nftimage12 from "../../../../assets/images/nft-images/12.png";
import nftimage13 from "../../../../assets/images/nft-images/13.png";
import nftimage14 from "../../../../assets/images/nft-images/14.png";
import nftimage15 from "../../../../assets/images/nft-images/15.png";
import nftimage17 from "../../../../assets/images/nft-images/17.png";
import face2 from "../../../../assets/images/faces/2.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face7 from "../../../../assets/images/faces/7.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import face14 from "../../../../assets/images/faces/14.jpg";
import ethereum from "../../../../assets/images/crypto-currencies/regular/Ethereum.svg";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../../@spk/uielements/spk-dropdown";
import SpkBadge from "../../../../@spk/uielements/spk-badge";

  
//Your Balance

//***  Your Balance--- Start  ***//
export const Balanceseries = [{
    name: 'Value',
    data: [20, 14, 19, 10, 25, 20, 22, 9, 12]
}]
export const Balanceoptions:any = {

    chart: {
        events: {
            mounted: (chart:any) => {
              chart.windowResizeHandler();
            }
          },
        type: 'line',
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 2.5,
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
    colors: ["rgb(132, 90, 223)"],
}
//***  Your Balance--- End  ***//

//***  NFTs Statistics--- Start  ***//
export const NFTseries = [{
    name: "Price",
    data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
}, {
    name: "Volume",
    data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
}]
export const NFToptions:any = {
    chart: {
        height: 343,
        type: 'line',
        zoom: {
            enabled: false
        },
        events: {
            mounted: (chart:any) => {
              chart.windowResizeHandler();
            }
          },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
        },
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: "top",
        horizontalAlign: "center",
        offsetX: -15,
        fontWeight: "bold",
    },
    stroke: {
        curve: 'smooth',
        dashArray: [0, 5],
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)"],
    yaxis: {
        title: {
            text: 'Statistics',
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
            }
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
            rotate: -90
        }
    }
}
//***  NFTs Statistics--- End  ***//
//Trending Auctions

export const Trendingauctions = [
    { id: 1, likes: '1.32k', image1:nftimage2, image2:face10, name: 'Bloom NFT', mail: '@bloom116', title: 'Color Abstrac-NFT', bid: '0.19ETH' ,avatarclass:'rounded-md me-2 leading-none !mb-0'},
    { id: 2, likes: '1.26k', image1:nftimage3, image2:face5, name: 'Ergos NFT', mail: '@ergos900', title: 'Fluid Abstract-NFT', bid: '0.35ETH' ,avatarclass:'rounded-md me-2 leading-none !mb-0'},
    { id: 3, likes: '2.45k', image1:nftimage5, image2:face7, name: 'Caros NFT', mail: '@caros002', title: 'Space Fluid-NFT', bid: '0.13ETH' ,avatarclass:'rounded-md me-2 leading-none !mb-0'},
    { id: 4, likes: '1.57k', image1:nftimage4, image2:face11, name: 'Daron NFT', mail: '@daron789', title: 'Fluid Abstract-NFT', bid: '0.75ETH' ,avatarclass:'rounded-md me-2 leading-none !mb-0'},
];

// Top Collectors
interface auctions1 {
    id: number
    src: string
    name: string
    progress: string
    text1: string
    text2: string
    value: string
    class: string
}

export const TopCollectors :auctions1[]= [
    { id: 1, src:face5, name: 'Alicia Smith', progress:"w-[75%]", text1: '$9,223.46', text2: '0.214ETH', value: '75%', class:"" },
    { id: 2, src:face15, name: 'Alex Carey', progress:"w-[60%]", text1: '$17,239.09', text2: '1.890ETH', value: '60%', class:"" },
    { id: 3, src:face4, name: 'Emiley Jack', progress:"w-[35%]", text1: '$5,902.83', text2: '1.903ETH', value: '35%', class:"" },
    { id: 4, src:face3, name: 'Jessica', progress:"w-[70%]", text1: '$12,124.34', text2: '0.689ETH', value: '70%', class:"" },
    { id: 5, src:face11, name: 'Json Taylor', progress:"w-[90%]", text1: '$12,124.34', text2: '2.577ETH', value: '90%', class:"" },
    { id: 6, src:face2, name: 'Kiara May', progress:"w-[62%]", text1: '$2,534.56', text2: '0.737ETH', value: '62%', class:"" },
    { id: 7, src:face14, name: 'Agire Khan', progress:"w-[85%]", text1: '$15,236.00', text2: '6.345ETH', value: '85%', class:"border-b-0"}
];

//   Trending NFTs

interface NFT {
    id: number
    src: string
    name: string
    mail: string
    rank: string
    volume: string
    value1: string
    value2: string
    price: string
    items: string
    color1: string
    color2: string
    class1: string
    class2: string
}


export const TrendingNFTs :NFT[]= [
    { id: 1, src: nftimage1, name: 'Starter Sense NFT', mail: '@irukasensei229', rank: '#1', volume: '2.56ETH', value1: '15.2%', value2: '3.1%', price: '2.31ETH', items: '12.4K', color1: 'text-success', color2: 'text-success', class1: 'up', class2: 'up', },
    { id: 2, src:nftimage2, name: 'Lorem Kekkei', mail: '@clansound209', rank: '#2', volume: '1.25ETH', value1: '3.7%', value2: '0.5%', price: '0.25ETH', items: '10.1K', color1: 'text-success', color2: 'text-danger', class1: 'up', class2: 'down' },
    { id: 3, src:nftimage10, name: 'NFT Uchiha', mail: '@sasukeuhi990', rank: '#3', volume: '2,092ETH', value1: '23.1%', value2: '9.12%', price: '2,000ETH', items: '52.7K', color1: 'text-danger', color2: 'text-success', class1: 'down', class2: 'up', },
    { id: 4, src:nftimage12, name: 'Lorem Ipsum Uch', mail: '@kakashi092', rank: '#4', volume: '36.25ETH', value1: '5.2%', value2: '4.1%', price: '30.12ETH', items: '31.4K', color1: 'text-danger', color2: 'text-danger', class1: 'down', class2: 'down '},
    { id: 5, src:nftimage15, name: 'Ivan Shomer Har', mail: '@narutouze025', rank: '#5', volume: '12.52ETH', value1: '7.0%', value2: '12.5% ', price: '12.50ETH', items: '121.5K', color1: 'text-success', color2: 'text-success', class1: 'up', class2: 'up', },
];

//Personal Listings
const data = <i className="ri-arrow-up-s-line align-middle me-1"></i>
const data1 = <i className="ri-arrow-down-s-line align-middle me-1"></i>
//
interface NFT1 {
    id: number
    src: string
    name: string
    mail: string
    value: string
    color: string
    price: string
    icon: React.ReactNode
    class: string
}
export const TrendingNFTs1  :NFT1[]= [
    { id: 1, src:nftimage10, name: 'Kakasha Si', mail: '@sensei011', value: '0.45%', color: 'success', price: '1.75ETH', icon:data , class:""},
    { id: 2, src:nftimage1, name: 'Oorichimaru lo', mail: '@ooro001', value: '0.24%', color: 'success', price: '1.15ETH', icon:data , class:""},
    { id: 3, src:nftimage12, name: 'SakuraYM', mail: '@sakura903', value: '0.07%', color: 'danger', price: '1.58ETH', icon:data1 , class:""},
    { id: 4, src:nftimage4, name: 'Sasuke Uchiha', mail: '@sasuke777', value: '1.34%', color: 'success', price: '1.19ETH', icon:data, class:""},
    { id: 5, src:nftimage15, name: 'Naruto Uzumaki', mail: '@naruto111', value: '1.70%', color: 'success', price: '2.45ETH', icon:data, class:""},
    { id: 6, src:nftimage16, name: 'Kazimo Aruke', mail: '@kazimo900', value: '1.21%', color: 'danger', price: '1.95ETH', icon:data1, class:""},
    { id: 7, src:nftimage6, name: 'Nagiro Ohinavo', mail: '@nagiro096', value: '0.99%', color: 'success', price: '1.12ETH', icon:data, class:"rounded-b-md"},
];


const NftSwiper = [
    {id:1, src:nftimage6, src1:nftimage7, src2:nftimage8, src3:nftimage9, src5:face15, heading:"Collection Rank :", data:"1.0979ETH", data1:"Simon Cowell", data2:"@simon"},
    {id:2, src:nftimage11, src1:nftimage12, src2:nftimage13, src3:nftimage14, src5:face5, heading:"Collection Rank :", data:"1.0466ETH", data1:"Melissa Smith", data2:"@melissa"},
    {id:3, src:nftimage10, src1:nftimage15, src2:nftimage17, src3:nftimage16, src5:face10, heading:"Collection Rank :", data:"1.0355ETH", data1:"son Talor", data2:"@taylor"},
]

export const NftSwiperSlide =  NftSwiper.map((idx) => (
    <div>
    <div className="box collections-data">
        <div className="box-body">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-6">
                    <img src={idx.src} alt=""
                        className="nft-featuredcollect-image" />
                </div>
                <div className="col-span-6">
                    <img src={idx.src1} alt=""
                        className="nft-featuredcollect-image" />
                </div>
                <div className="col-span-6">
                    <img src={idx.src2} alt=""
                        className="nft-featuredcollect-image" />
                </div>
                <div className="col-span-6">
                    <img src={idx.src3} alt=""
                        className="nft-featuredcollect-image" />
                </div>
            </div>
        </div>
        <div className="box-footer">
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] flex items-center">
                        {idx.heading}
                        <span
                            className="font-semibold text-success text-[0.9375rem] mb-0 ms-1">#{idx.id}</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="me-2 leading-none">
                        <span className="avatar avatar-rounded bg-light p-1 avatar-xs">
                            <img src={ethereum}
                                alt="" />
                        </span>
                    </div>
                    <div>
                        <span className="font-semibold">{idx.data}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="box-footer">
            <div className="flex items-center">
                <div className="flex items-center flex-grow">
                    <div className="me-2 leading-none">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src={idx.src5} alt="" />
                            <SpkBadge variant="primary" customClass="!rounded-full !text-white  avatar-badge"><i
                                    className="ri-check-line align-middle"></i></SpkBadge>
                        </span>
                    </div>
                    <div>
                        <p className="mb-0 font-semibold"><Link
                            to="#">{idx.data1}</Link></p>
                        <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-0">{idx.data2}</p>
                    </div>
                </div>
                <SpkDropdown Icon={true} IconClass="fe fe-more-vertical text-[0.8rem]" arialexpand={false} Linktag={true} 
                    Linkclass="flex items-center justify-center w-[1.75rem] h-[1.75rem] text-defaulttextcolor hover:bg-primary hover:text-white !text-[0.8rem] !py-1 !px-2 rounded-sm bg-primary/10 border-light shadow-none !font-medium">
                    <li>
                    <Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        to="#">Action</Link></li>
                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        to="#">Another action</Link></li>
                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        to="#">Something else here</Link></li>
                </SpkDropdown>
            </div>
        </div>
    </div>
    </div>
     )) 

export const  topCreators = [
    { name: 'Amanda Nanes', username: 'amandananes@', totalSold: 18, saleValue: '$1,982', avatar: face4, color: "primary-full", following: "Follow", },
    { name: 'Charles Achilles', username: '@charlesachilles', totalSold: 126, saleValue: '$16,982', avatar: face15, color: "primary", following: "Unfollow", },
    { name: 'Julia Camo', username: '@juliacamo', totalSold: 42, saleValue: '$3,432', avatar: face5, color: "primary-full", following: "Follow", },
    { name: 'Json Taylor', username: '@jsontaylor', totalSold: 63, saleValue: '$9,236', avatar: face12, color: "primary-full", following: "Follow", },
    { name: 'Elisha Sean', username: 'elishasean', totalSold: 59, saleValue: '$7,783', avatar: face3, color: "primary-full", following: "Follow", },
    { name: 'Joseph Smith', username: '@josephsmith', totalSold: 137, saleValue: '$13,562', avatar: face13, color: "primary", following: "Unfollow", },
]