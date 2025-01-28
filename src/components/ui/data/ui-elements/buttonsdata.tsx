
//Default Buttons

interface Defaultbutton1 {
    id:number;
    class:string;
    color:string;
}
export const Defaultbutton:Defaultbutton1[] = [
    {id:1, class:"Primary", color:"primary-full"},
    {id:2, class:"Secondary", color:"secondary-full"},
    {id:3, class:"Success", color:"success-full"},
    {id:4, class:"Danger", color:"danger-full"},
    {id:5, class:"Warning", color:"warning-full"},
    {id:6, class:"Info", color:"info-full"},
    {id:7, class:"Light", color:"light"},
    {id:8, class:"Dark", color:"dark"},
]

//Light Buttons

interface Lightbuttons1 {
    id:number;
    class:string;
    color:string;
}
export const Lightbuttons:Lightbuttons1[]= [
{id:1, class:"Primary", color:"primary"},
{id:2, class:"Secondary", color:"secondary"},
{id:3, class:"Success", color:"success"},
{id:4, class:"Danger", color:"danger"},
{id:5, class:"Warning", color:"warning"},
{id:6, class:"Info", color:"info"},
{id:7, class:"Purple", color:"purple"},
{id:8, class:"Teal", color:"teal"},
{id:9, class:"Orange", color:"orange"},
]

//Outline Buttons

interface outlinebuttons1 {
    id:number;
    class:string;
    color:string;
}
export const outlinebuttons:outlinebuttons1[] = [
    {id:1, class:"Primary", color:"primary"},
    {id:2, class:"Secondary", color:"secondary"},
    {id:3, class:"Success", color:"success"},
    {id:4, class:"Danger", color:"danger"},
    {id:5, class:"Warning", color:"warning"},
    {id:6, class:"Info", color:"info"},
    {id:7, class:"Light", color:"light"},
    {id:8, class:"Dark", color:"dark"},
]

    //Gradient Buttons

interface gradientbuttons1 {
    id:number;
    class:string;
    color:string;
}
export const gradientbuttons:gradientbuttons1[] = [
    {id:1, class:"Primary", color:"primary"},
    {id:2, class:"Secondary", color:"secondary"},
    {id:3, class:"Success", color:"success"},
    {id:4, class:"Danger", color:"danger"},
    {id:5, class:"Warning", color:"warning"},
    {id:6, class:"Info", color:"info"},
    {id:7, class:"Orange", color:"orange"},
    {id:8, class:"Purple", color:"purple"},
    {id:9, class:"Teal", color:"teal"} 
]
export const Disabledanchortags = [
    {id:1, title:"Primary button", color:"primary-full"},
    {id:2, title:"Button", color:"secondary-full"},
    {id:3, title:"Primary button", color:"outline-primary"},
    {id:4, title:"Button", color:"outline-secondary"}, 
]
export const Loadingbuttons = [
    {id:1, color:"primary-full", htmltext:(<><span className='me-2'>Loading</span> <span className='loading'><i className='ri-loader-2-fill text-[1rem] animate-spin'></i></span></>), customcls:" ti-btn ti-btn-loader me-2"},
    {id:1, color:"outline-secondary",htmltext:(<><span className='me-2'>Loading</span><span className='loading'><i className='ri-loader-2-fill text-[1rem] animate-spin'></i></span></>) ,icon:'loader-2-fill', customcls:" ti-btn bg-info/10 me-2"},
    {id:2, color:"", htmltext:(<><span className='me-2'>Loading</span><span className='loading'><i className='ri-loader-4-line text-[1rem] animate-spin'></i></span></>) ,icon:'loader-4-line', customcls:" ti-btn bg-info/10 text-info me-2"},
    {id:3, color:"", htmltext:(<><span className='me-2'>Loading</span><span className='loading'><i className='ri-loader-5-line text-[1rem] animate-spin'></i></span></>) ,icon:'loader-5-line', customcls:" ti-btn bg-warning/10 text-warning me-2"},
    {id:4, color:"success-full", htmltext:(<><span className='me-2'>Disabled</span><span className='loading'><i className='ri-refresh-line text-[1rem] animate-spin'></i></span></>)  ,icon:'refresh-line', customcls:" ti-btn ti-btn-disabled me-2"},
]

export const IconButtons = [
    {id:1, color:"primary-full", htmltext:(<><i className='ri-bank-fill'></i></>), customcls:" ti-btn ti-btn-icon"}, 
    {id:2, color:"info-full", htmltext:(<><i className='ri-medal-line'></i></>), customcls:" ti-btn ti-btn-icon"},
    {id:3, color:"danger-full", htmltext:(<><i className='ri-archive-line'></i></>), customcls:" ti-btn ti-btn-icon"},
    {id:4, color:"warning-full",  htmltext:(<><i className='ri-calendar-2-line'></i></>), customcls:" ti-btn ti-btn-icon"},
    {id:5, color:"",  htmltext:(<><i className="ri-home-smile-line"></i></>), customcls:" ti-btn ti-btn-icon bg-primary/10 text-primary !border hover:bg-primary hover:text-white !rounded-full"},
    {id:6, color:"",  htmltext:(<><i className="ri-delete-bin-line"></i></>), customcls:" ti-btn ti-btn-icon bg-secondary/10 text-secondary hover:bg-secondary hover:text-white !rounded-full"},
    {id:7, color:"",  htmltext:(<><i className="ri-notification-3-line"></i></>), customcls:" ti-btn ti-btn-icon bg-success/10 text-success hover:bg-success hover:text-white !rounded-full "},
    {id:8, color:"",  htmltext:(<><i className="ri-chat-settings-line"></i></>), customcls:" ti-btn ti-btn-icon bg-danger/10 text-danger hover:bg-danger hover:text-white !rounded-full me-5"},
    {id:9, color:"outline-primary",  htmltext:(<><i className="ri-phone-line"></i></>), customcls:" ti-btn ti-btn-icon !rounded-full"},
    {id:10, color:"outline-teal",  htmltext:(<><i className="ri-customer-service-2-line"></i></>), customcls:" ti-btn ti-btn-icon  !border-teal !text-teal !rounded-full"},
    {id:11, color:"outline-success",  htmltext:(<><i className="ri-live-line"></i></>), customcls:" ti-btn ti-btn-icon !rounded-full"},
    {id:12, color:"outline-secondary",  htmltext:(<><i className="ri-save-line"></i></>), customcls:" ti-btn ti-btn-icon !rounded-full"},
]
export const SocialButtons = [
    {id:1, color:'facebook', icon:(<><i className="ri-facebook-line"></i></>) },
    {id:2, color:'twitter', icon:(<><i className="ri-twitter-x-line "></i></>) },
    {id:3, color:'instagram', icon:(<><i className="ri-instagram-line"></i></>) },
    {id:4, color:'github', icon:(<><i className="ri-github-line"></i></>) },
    {id:5, color:'youtube', icon:(<><i className="ri-youtube-line"></i></>) },
    {id:6, color:'google', icon:<><i className="ri-google-line"></i></> }
]
export const Sizes = [
    {id:1, color:'primary-full', customcls:' ti-btn !py-1 !px-2' , size:'', titletxt:'Small button'},
    {id:2, color:'secondary-full', customcls:' ti-btn ' , size:'', titletxt:'Default button'},
    {id:3, color:'success-full', customcls:' ti-btn ' , size:'lg', titletxt:'Large button'}
]

export const Differentcolored = [
   {id:1, color:'primary-full', customcls:' ti-btn shadow-primary'},
   {id:2, color:'secondary-full', customcls:' ti-btn shadow-secondary'},
   {id:3, color:'success-full', customcls:' ti-btn shadow-success'},
   {id:4, color:'info-full', customcls:' ti-btn shadow-info'},
   {id:5, color:'warning-full', customcls:' ti-btn shadow-warning'},
   {id:6, color:'danger-full', customcls:' ti-btn shadow-danger'},
   {id:7, color:'purple-full', customcls:' ti-btn shadow-purple'},
   {id:8, color:'orange-full', customcls:' ti-btn shadow-orange'}
]

export const Labelbuttons = [
    {id:1, color:'primary-full', customcls:' ti-btn label-ti-btn', title:"Primary", icon:<><i className="ri-chat-smile-line label-ti-btn-icon  me-2"></i></>},
    {id:2, color:'secondary-full', customcls:' ti-btn label-ti-btn', title:"Secondary", icon:<><i className="ri-settings-4-line label-ti-btn-icon me-2"></i></>},
    {id:3, color:'warning-full', customcls:' ti-btn label-ti-btn !rounded-full', title:"Warning", icon:<><i className="ri-spam-2-line label-ti-btn-icon me-2 !rounded-full"></i></>},
    {id:4, color:'info-full', customcls:' ti-btn label-ti-btn !rounded-full', title:"Info", icon:<><i className="ri-phone-line label-ti-btn-icon me-2 !rounded-full"></i></>},
    {id:5, color:'success-full', customcls:' ti-btn label-ti-btn label-end', title:"Success", icon:<> <i className="ri-thumb-up-line label-ti-btn-icon ms-2"></i></>},
    {id:6, color:'danger-full', customcls:' ti-btn label-ti-btn label-end !rounded-full', title:"Cancel", icon:<><i className="ri-close-line label-ti-btn-icon ms-2 !rounded-full"></i></>}
 ]
 export const Custombuttons = [
    {id:1, color:'teal', customcls:' ti-btn ti-btn-border-down border-0', title:"Border"},
    {id:2, color:'secondary', customcls:' ti-btn ti-btn-border-start', title:"Border"},
    {id:3, color:'purple', customcls:' ti-btn ti-btn-border-end', title:"Border"},
    {id:4, color:'warning', customcls:' ti-btn ti-btn-border-top', title:"Border"},
    {id:5, color:'danger-full', customcls:' ti-btn ti-btn-hover ti-btn-hover-animate', title:"Like"},
    {id:6, color:'success-full', customcls:' ti-btn ti-btn-darken-hover', title:"Hover"},
    {id:6, color:'orange-full', customcls:' ti-btn ti-btn-custom-border', title:"Hover"}
 ]
 export const Buttonwidths = [
    {id:1, title:"XS", color:"primary-full", size:'w-xs'},
    {id:2, title:"SM", color:"secondary-full", size:'w-sm'},
    {id:3, title:"MD", color:"warning-full", size:'w-md'},
    {id:4, title:"LG", color:"info-full", size:'w-lg'}, 
]
export const Differentshadows = [
    {id:1, color:"primary-full", customcls:'ti-btn shadow-sm'},
    {id:2, color:"primary-full", customcls:'ti-btn shadow'},
    {id:3, color:"primary-full", customcls:'ti-btn shadow-lg'},
    {id:4, color:"secondary-full", customcls:'ti-btn !py-1 !px-2 shadow-sm'},
    {id:5, color:"info-full", customcls:'ti-btn shadow'},
    {id:6, color:"success-full", customcls:'ti-btn shadow-lg'},
]
