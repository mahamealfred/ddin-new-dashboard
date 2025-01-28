
import product1 from "../../../../assets/images/ecommerce/jpg/1.jpg";
import product2 from "../../../../assets/images/ecommerce/jpg/2.jpg";
import product3 from "../../../../assets/images/ecommerce/jpg/3.jpg";
import product4 from "../../../../assets/images/ecommerce/jpg/4.jpg";
import product5 from "../../../../assets/images/ecommerce/jpg/5.jpg";
import product6 from "../../../../assets/images/ecommerce/jpg/6.jpg";
import french from '../../../../assets/images/flags/french_flag.jpg';
import spain from '../../../../assets/images/flags/spain_flag.jpg';
import argentina from '../../../../assets/images/flags/argentina_flag.jpg';
import uae from '../../../../assets/images/flags/uae_flag.jpg';
import germany from '../../../../assets/images/flags/germany_flag.jpg';
import product36 from "../../../../assets/images/ecommerce/png/36.png";
import product37 from "../../../../assets/images/ecommerce/png/37.png";
import product38 from "../../../../assets/images/ecommerce/png/38.png";
import product39 from "../../../../assets/images/ecommerce/png/39.png";
import product40 from "../../../../assets/images/ecommerce/png/40.png";

import face2 from "../../../../assets/images/faces/2.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face7 from "../../../../assets/images/faces/7.jpg";
import face6 from "../../../../assets/images/faces/6.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import face14 from "../../../../assets/images/faces/14.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face16 from "../../../../assets/images/faces/16.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import png1 from "../../../../assets/images/ecommerce/png/1.png";
import png2 from "../../../../assets/images/ecommerce/png/2.png";
import png3 from "../../../../assets/images/ecommerce/png/3.png";
import png4 from "../../../../assets/images/ecommerce/png/4.png";
import png5 from "../../../../assets/images/ecommerce/png/5.png";
import png6 from "../../../../assets/images/ecommerce/png/6.png";
import png7 from "../../../../assets/images/ecommerce/png/7.png";
import png8 from "../../../../assets/images/ecommerce/png/8.png";
import png9 from "../../../../assets/images/ecommerce/png/9.png";
import png10 from "../../../../assets/images/ecommerce/png/10.png";
import png11 from "../../../../assets/images/ecommerce/png/11.png";
import png12 from "../../../../assets/images/ecommerce/png/12.png";
import png13 from "../../../../assets/images/ecommerce/png/13.png";
import png14 from "../../../../assets/images/ecommerce/png/14.png";
import png15 from "../../../../assets/images/ecommerce/png/15.png";
import png36 from "../../../../assets/images/ecommerce/png/36.png";
import png38 from "../../../../assets/images/ecommerce/png/38.png";
import png39 from "../../../../assets/images/ecommerce/png/39.png";
import png40 from "../../../../assets/images/ecommerce/png/40.png";

//***  Earning --- Start ***//
export const Earseries = [{
  name: 'Total Orders',
  data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34]
}]
export const Earoptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    type: 'bar',
    height: 200
  },
  grid: {
    borderColor: '#f2f6f7',
  },
  colors: ["rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed"],
  plotOptions: {
    bar: {
      columnWidth: '25%',
      distributed: true,
      borderRadius: 7,
    }
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  yaxis: {
    title: {
      style: {
        color: '#adb5be',
        fontSize: '12px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
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
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
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
//***  Earning --- End ***//
  //Recent Orders
  interface orders {
    id: number
    src: string
    product: string
    price: string
    text: string
    class: string
  }

  export const Recentorders: orders[] = [
    { id: 1, src:product1 , product: 'Smart Phone', price: '199.99', text: 'Mobiles', class: 'mb-4' },
    { id: 2, src:product2 , product: 'White Headphones', price: '79.49', text: 'Music', class: 'mb-4' },
    { id: 3, src:product3 , product: 'Stop Watch', price: '49.29', text: 'Electronics', class: 'mb-4' },
    { id: 4, src:product4 , product: 'Kikon Camera', price: '1,699.00', text: 'Electronics', class: 'mb-4' },
    { id: 5, src:product5 , product: 'Photo Frame', price: '29.99', text: 'Furniture', class: 'mb-4' },
    { id: 6, src:product6 , product: 'Canvas Shoes', price: '89.99', text: 'Footwear', class: 'mb-0' },
  ];

  //Top Countries By Sales
  interface sales {
    id: number
    src: string
    text: string
    price: string
    class1: string
    class2: string
    color: string
  }

  export const Countries : sales[] = [
    { id: 1, src:french, text: 'France', class1: 'up', class2: 'mb-3', color: 'success', price: '5,932' },
    { id: 2, src:spain, text: 'spain', class1: 'down', class2: 'mb-3', color: 'danger', price: '5,383' },
    { id: 3, src:argentina, text: 'Argentina', class1: 'up', class2: 'mb-3', color: 'success', price: '4,825' },
    { id: 4, src:uae, text: 'Uae', class1: 'up', class2: 'mb-3', color: 'success', price: '4,527' },
    { id: 5, src:germany, text: 'Germany', class1: 'down', class2: 'mb-0', color: 'danger', price: '4,501' }
  ];

  //
  interface overview {
    id: number
    name: string
    src: string
    productid: string
    price: string
    status: string
    sales: string
    text: string
    color: string
  }
  export const ProductsOverview: overview[]  = [
    { id: 1, name: 'Niker College Bag', src:product36, productid: '#1734-9743', price: '$199.99', status: 'Available', sales: '3,903', text: '$67,899.24', color: 'success' },
    { id: 2, name: 'Dslr Camera (50mm f/1.9 HRM Lens)', src:product37, productid: '#1234-4567', price: '$1,299.99', status: 'Available', sales: '12,435', text: '$3,24,781.92', color: 'success' },
    { id: 3, name: 'Outdoor Bomber Jacket', src:product38, productid: '#1902-9883', price: '$99.99', status: 'Not Available', sales: '5,143', text: '$76,102.76', color: 'danger' },
    { id: 4, name: 'Light Blue Teddy', src:product39, productid: '#8745-1232', price: '$79.00', status: 'Limited Deal', sales: '7,183', text: '$78,211.83', color: 'warning' },
    { id: 5, name: 'Orange Smart Watch (24mm)', src:product40, productid: '#1962-9033', price: '$199.99', status: 'In Offer', sales: '10,287', text: '$2,32,982.99', color: 'primary' },
  ];
  

 export const activeOrders = [
    { customerImage: face4, customerName: 'Amanda Nanes', price: '$229.99', deliveryDate: '24 May 2022', productImage: png1, activeclass:'online', rowclass:''},
    { customerImage: face10, customerName: 'Peter Parkour', price: '$135.29', deliveryDate: '18 May 2022', productImage: png2, activeclass:'online', rowclass:'border border-inherit border-solid border-s-0 border-e-0'},
    { customerImage: face12, customerName: 'Jackie Chen', price: '$1,299.99', deliveryDate: '29 May 2022', productImage: png3, activeclass:'offline', rowclass:'border border-inherit border-solid border-s-0 border-e-0'},
    { customerImage: face5, customerName: 'Ryan Gercia', price: '$249.29', deliveryDate: '05 Jun 2022', productImage: png4, activeclass:'online', rowclass:'border border-inherit border-solid border-s-0 border-e-0'},
    { customerImage: face14, customerName: 'Hugh Jackma', price: '$499.99', deliveryDate: '15 May 2022', productImage: png5, activeclass:'offline', rowclass:''},
]
//Completed
export const completed = [
    { customerImage: face2, customerName: 'Lisa Rebecca', price: '$1,199.99', deliveryDate: '24 Dec 2022', productImage: png6, activeclass:'offline', rowclass:''},
    { customerImage: face13, customerName: 'Matt Martin', price: '$799.99', deliveryDate: '18 Nov 2022', productImage: png7, activeclass:'offline', rowclass:'border border-inherit border-solid border-s-0 border-e-0'},
    { customerImage: face7, customerName: 'Mitchell Osama', price: '$279.00', deliveryDate: '29 Dec 2022', productImage: png8, activeclass:'online', rowclass:'border border-inherit border-solid border-s-0 border-e-0'},
    { customerImage: face12, customerName: 'Cornor Mcgood', price: '$79.99', deliveryDate: '05 Dec 2022', productImage: png9, activeclass:'online', rowclass:'border border-inherit border-solid border-s-0 border-e-0'},
    { customerImage: face15, customerName: 'Kishan Patel', price: '$1,449.29', deliveryDate: '20 Nov 2022', productImage: png10, activeclass:'online', rowclass:''},
]

//Cancelled
export const cancelled = [
    { customerName: "Hailey Bobber", price: 199.99, cancelledDate: "09 Dec 2022", productImage: png11, customerImage: face6,activeclass:'offline', rowclass:''},
    { customerName: "Anthony Mansion", price: 179.99, cancelledDate: "28 Dec 2022", productImage: png12, customerImage: face14,activeclass:'offline', rowclass:'border border-inherit border-solid border-s-0 border-e-0'},
    { customerName: "Simon Carter", price: 149.99, cancelledDate: "30 Dec 2022", productImage: png13, customerImage: face16,activeclass:'online', rowclass:'border border-inherit border-solid border-s-0 border-e-0'},
    { customerName: "Sofia Sekh", price: 1439.99, cancelledDate: "03 Dec 2022", productImage: png14, customerImage: face3,activeclass:'online', rowclass:'border border-inherit border-solid border-s-0 border-e-0'},
    { customerName: "Kimura Kai", price: 1092.99, cancelledDate: "02 Dec 2022", productImage: png15, customerImage: face9,activeclass:'offline', rowclass:''}
]
export const  topSelling = [
  { image: png36, name: 'Ethnic School bag for children (24L)', category: 'Bags', stockStatus: 'In Stock', quantity: '5,093', color: "success" },
  { image: png38, name: 'Leather jacket for men (S,M,L,XL)', category: 'Clothing', stockStatus: 'In Stock', quantity: '6,890', color: "success" },
  { image: png39, name: 'Childrens Teddy toy of high quality', category: 'Toys', stockStatus: 'Out Of Stock', quantity: '5,423', color: "danger" },
  { image: png40, name: 'Orange smart watch with square dial (24mm)', category: 'Fashion', stockStatus: 'Out Of Stock', quantity: '10,234', color: "danger" },
];

export const usersdata= [
  { name: "Emma Wilson", text: "15 Purchases", balance: "$1,835", avatar: face4, class:'mb-4' },
  { name: "Robert Lewis", text: "18 Purchases", balance: "$2,415", avatar: face15, class:'mb-4' },
  { name: "Angelina Hose", text: "21 Purchases", balance: "$2,341", avatar: face5, class:'mb-4' },
  { name: "Samantha Sam", text: "24 Purchases", balance: "2,624", avatar: face2, class:'' },
]