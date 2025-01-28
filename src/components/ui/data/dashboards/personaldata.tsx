import face12 from "../../../../assets/images/faces/12.jpg";
import face2 from "../../../../assets/images/faces/2.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
//***  Water Tracking--- Start  ***//
export const Waterseries = [{
  data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
}]
export const Wateroptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    height: 115,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["rgb(132, 90, 223)"],
  stroke: {
    width: [1],
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
    }
  },
}
//***  Water Tracking--- End  ***//


//***  Sleep Tracking--- Start  ***//
export const Sleepseries = [{
  data: [102, 148, 87, 112, 105, 145, 80, 110, 98]
}]
export const Sleepoptions:any = {
  chart: {
    events: {
      mounted: (chart:any) => {
        chart.windowResizeHandler();
      }
    },
    height: 115,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["#64af6d"],
  stroke: {
    width: [1],
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
    }
  },
}
//***  Sleep Tracking--- End  ***//

 export const Discover = [
  { label: 'Bills', iconClass: 'cash-coin', buttonClass: 'info' },
  { label: 'Shopping', iconClass: 'shop-window', buttonClass: 'primary' },
  { label: 'Travel', iconClass: 'compass', buttonClass: 'warning' },
  { label: 'Food', iconClass: 'gift', buttonClass: 'secondary' },
  { label: 'Stocks', iconClass: 'currency-bitcoin', buttonClass: 'danger' },
  { label: 'Others', iconClass: 'three-dots', buttonClass: 'light' },
]
 export const goals = [
  {
      title: "Maldives Trip",
      progresstxt: 80,
      progress: "w-[80%]",
      iconClass: "globe2",
      iconBgClass: "secondary",
  },
  {
      title: "Savings For Birthday",
      progresstxt: 90,
      progress: "w-[90%]",
      iconClass: "balloon-heart",
      iconBgClass: "warning",
  },
  {
      title: "Join Guitar Class",
      progresstxt: 40,
      progress: "w-[40%]",
      iconClass: "lightning",
      iconBgClass: "primary",
  },
]
 export const Upcomingevents= [
  { name: "Meeting with Umar Xai", text: "2 Hours", balance: "11-06-2023", icon: "bi-calendar2-heart", bgColor: "bg-light", color: "primary", badgeColor: "bg-primary-transparent" },
  { name: "Shin Map Birthday Party", text: "5 Hours", balance: "15-06-2023", avatar: face12, badgeColor: "bg-success-transparent" },
  { name: "Holiday Trip To Italy", text: "1 Week", balance: "20-06-2023", icon: "bi-compass", bgColor: "bg-light", color: "pink", badgeColor: "bg-danger-transparent" },
  { name: "Wedding Anniversary", text: "1 Day", balance: "24-07-2023", icon: "bi-balloon-heart", bgColor: "bg-light", color: "success", badgeColor: "bg-secondary-transparent" },
  { name: "Meeting with Irav Ert", text: "45 Minutes", balance: "15-06-2023", avatar: face12, badgeColor: "bg-warning-transparent" },
]

export const FavouriteContacts= [
  { name: "Kiara Advain", text: "+(72)-8765700876", avatar: face2},
  { name: "Jason Mama", text: "+(72)-234226333", avatar: face9},
  { name: "Stuart Edward", text: "+(11)-16743256", avatar: face10},
]