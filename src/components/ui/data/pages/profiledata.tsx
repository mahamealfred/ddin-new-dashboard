import { Fragment, useState } from "react";


// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Link } from "react-router-dom";

import media39 from "../../../../assets/images/media/media-39.jpg";
import media40 from "../../../../assets/images/media/media-40.jpg";
import media41 from "../../../../assets/images/media/media-41.jpg";
import media42 from "../../../../assets/images/media/media-42.jpg";
import media43 from "../../../../assets/images/media/media-43.jpg";
import media44 from "../../../../assets/images/media/media-44.jpg";
import media45 from "../../../../assets/images/media/media-45.jpg";
import media46 from "../../../../assets/images/media/media-46.jpg";
import media54 from "../../../../assets/images/media/media-54.jpg";
import media56 from "../../../../assets/images/media/media-56.jpg";
import media60 from "../../../../assets/images/media/media-60.jpg";
import media26 from "../../../../assets/images/media/media-26.jpg";
import media32 from "../../../../assets/images/media/media-32.jpg";
import media30 from "../../../../assets/images/media/media-30.jpg";
import media31 from "../../../../assets/images/media/media-31.jpg";
import face2 from "../../../../assets/images/faces/2.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face16 from "../../../../assets/images/faces/16.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face7 from "../../../../assets/images/faces/7.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face1 from "../../../../assets/images/faces/1.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";
import media17 from "../../../../assets/images/media/media-17.jpg";
import media18 from "../../../../assets/images/media/media-18.jpg";
import filemanager3 from "../../../../assets/images/media/file-manager/3.png";
import media59 from "../../../../assets/images/media/media-59.jpg";
import media61 from "../../../../assets/images/media/media-61.jpg";
import media29 from "../../../../assets/images/media/media-29.jpg";
import media75 from "../../../../assets/images/media/media-75.jpg";
import media52 from "../../../../assets/images/media/media-52.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import { Lightboxcomponent } from "../../../../@spk/spk-packages/spk-lightbox-component";


export const Friendsdata = [
    { id: 1, src: face2, name: 'Samantha May', mail: 'samanthamay2912@gmail.com', badge: 'Team Member', color: 'info' , Buttontext1:'Block', Buttontext2:'Unfollow'},
    { id: 2, src: face15, name: 'Andrew Garfield', mail: 'andrewgarfield98@gmail.com', badge: 'Team Lead', color: 'success' , Buttontext1:'Block', Buttontext2:'Unfollow'},
    { id: 3, src: face5, name: 'Jessica Cashew', mail: 'jessicacashew143@gmail.com', badge: 'Team Member', color: 'info' , Buttontext1:'Block', Buttontext2:'Unfollow'},
    { id: 4, src: face11, name: 'Simon Cowan', mail: 'jessicacashew143@gmail.com', badge: 'Team Manager', color: 'warning' , Buttontext1:'Block', Buttontext2:'Unfollow'},
    { id: 5, src: face7, name: 'Amanda nunes', mail: 'amandanunes45@gmail.com', badge: 'Team Member', color: 'info' , Buttontext1:'Block', Buttontext2:'Unfollow'},
    { id: 6, src: face12, name: 'Mahira Hose', mail: 'mahirahose9456@gmail.com', badge: 'Team Member', color: 'info' , Buttontext1:'Block', Buttontext2:'Unfollow'},
];


export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    // const value = true;
    // const div = value.toString(); // Convert the value to a string

    const slidedata = [
        { src: media40 }, 
        { src: media41 }, 
        { src: media42 }, 
        { src: media43 }, 
        { src: media44 }, 
        { src: media45 }, 
        { src: media46 }, 
        { src: media60 }, 
        { src: media26 },
        { src: media32 },
        { src: media30 },
        { src: media31 }

    ]
    return (
        <Fragment>
  <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media40} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media41} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media42} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media43} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media44} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media45} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media46} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media60} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media26} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media32} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media30} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12">
                     <Link to="#" className="glightbox card" data-gallery="gallery1">
                         <img src={media31} alt="image"  className="rounded-md" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
             <Lightboxcomponent
                close={() => setOpen(false)} // Close function
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} // Zoom settings
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={slidedata} index={0}            />

        </Fragment>
    );
};

//Skills

export const Skillsdata = [
    { id: 1, text: 'Cloud computing' },
    { id: 2, text: 'Data analysis' },
    { id: 3, text: 'DevOps' },
    { id: 4, text: 'Machine learning' },
    { id: 5, text: 'Programming' },
    { id: 6, text: 'Security' },
    { id: 7, text: 'Python' },
    { id: 8, text: 'JavaScript' },
    { id: 9, text: 'Ruby' },
    { id: 10, text: 'PowerShell' },
    { id: 11, text: 'Statistics' },
    { id: 12, text: 'SQL' },
];

//Followers

export const Followersdata = [
    { id: 1, src: face15, name: 'Alicia Sierra', mail: 'aliciasierra389@gmail.com' },
    { id: 2, src: face4, name: 'Samantha Mery', mail: 'samanthamery@gmail.com' },
    { id: 3, src: face11, name: 'Juliana Pena', mail: 'juliapena555@gmail.com' },
    { id: 4, src: face5, name: 'Adam Smith', mail: 'adamsmith99@gmail.com' },
    { id: 5, src: face7, name: 'Farhaan Amhed', mail: 'farhaanahmed989@gmail.com' },
];

//Personal info

export const Personalinfodata = [
    { id: 1, text1: 'Name :', text2: 'Sonya Taylor' },
    { id: 2, text1: 'Email :', text2: 'sonyataylor231@gmail.com' },
    { id: 3, text1: 'Phone :', text2: '+(555) 555-1234' },
    { id: 4, text1: 'Designation :', text2: 'C.E.O' },
    { id: 5, text1: 'Age :', text2: '28' },
    { id: 6, text1: 'Experience :', text2: '10 Years' },
];

//Recent Posts
export const RecentPostsdata = [
    { id: 1, src: media39, name:"Samantha Jack", animalname: 'Animals', text: 'There are many variations of passages of Lorem Ipsum available' , date:'24,Nov 2022 - 18:27'},
    { id: 2, src: media56, name:"Kirsten Sam", animalname: 'Travel', text: 'Latin words, combined with a handful of model sentence' , date:'28,Nov 2022 - 10:45'},
    { id: 3, src: media54, name:"Jessica Karon", animalname: 'Interior', text: 'Contrary to popular belief, Lorem Ipsum is not simply random' , date:'30,Nov 2022 - 08:32'},
    { id: 4, src: media52, name:"Broad Stuart", animalname: 'Nature', text: 'It is a long established fact that a reader will be distracted by the readable content' , date:'3,Dec 2022 - 12:56'}
];

//Suggestions

export const Suggestionsdata = [
    { id: 1, src: face15, name: 'Alister' },
    { id: 2, src: face4, name: 'Samantha Sams' },
    { id: 3, src: face11, name: 'Jason Mama' },
    { id: 4, src: face5, name: 'Alicia Sierra' },
    { id: 5, src: face7, name: 'Kiara Advain' }
];


 export const activity = [
    {
        id: 1,
        avatar: { text: "E", bgClass: "bg-primary/10 !text-primary" },
        description: ` <p class="mb-2">
                <b>You</b> Commented on <b>alexander taylor</b> post
                 <a class="text-secondary" to="#" ><u>#beautiful day</u>
                </a>.<span class="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">24,Dec 2022 - 14:34</span>
            </p>`,
        media: [
          { img: media17, name: "Media 17" },
          { img: media18, name: "Media 18" },
        ],
        avatarList: [],
      },
      {
        id: 2,
        avatar: { img: face11, alt: "" },
        description: `
          <span class="text-default"><b>Json Smith</b> reacted to the post 👍</span>.
          <span class="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">18, Dec 2022 - 12:16</span>
        `,
        additionalText: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
        `,
        media: [],
        avatarList: [],
      },
    {
        id: 3,
        avatar: { img: face4, alt: "" },
        description: `
        <span class="text-default"><b>Alicia Keys</b> shared a document with <b>you</b></span>.
        <span class="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">21, Dec 2022 - 15:32</span>
        `,
        media: [
        { img: filemanager3, name: "File", size: "432.87KB" },
        ],
        avatarList: [],
    },
    {
        id: 4,
        avatar: { text: "P", bgClass: "bg-success/10 !text-success" },
        description: `
        <span class="text-default"><b>You</b> shared a post with 4 people <b>Simon, Sasha, Anagha, Hishen</b></span>.
        <span class="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">28, Dec 2022 - 18:46</span>
        `,
        media: [
        { img: media75, name: "Media 75" },
        ],
        avatarList: [
        { img: face2, alt: "Simon" },
        { img: face8, alt: "Sasha" },
        { img: face2, alt: "Anagha" },
        { img: face10, alt: "Hishen" },
        ],
    },
    {
        id: 5,
        avatar: { img: face5, alt: "" },
        description: `
        <span class="text-default"><b>Melissa Blue</b> liked your post <b>travel excites</b></span>.
        <span class="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">11, Dec 2022 - 11:18</span>
        `,
        additionalText: `
        you are already feeling the tense atmosphere of the video playing in the background
        `,
        media: [
        { img: media59, alt: "" },
        { img: media60, alt: "" },
        { img: media61, alt: "" },
        ],
        avatarList: [],
    },
    {
        id: 6,
        avatar: { img: media39, alt: "" },
        description: `
        <b>You</b> Commented on <b>Peter Engola</b> post 
        <a class="text-secondary" href="#"><u>#Mother Nature</u></a>.
        <span class="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">24, Dec 2022 - 14:34</span>
        `,
        additionalText: `
        Technology is developing rapidly, keep up your work 👌
        `,
        media: [
        { img: media26, alt: "" },
        { img: media29, alt: "" },
        ],
        avatarList: [],
    },
      
 ]

  export const  postsdata=[
    {id: 1, avatar:"", img:face9, username:"You", date:"24, Dec - 04:32PM", message:"<p class='fs-12 text-muted mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p class='fs-12 text-muted mb-3'>As opposed to using 'Content here &#128076;</p>", media:[], type:"Fashion", typeBg:"primary", avatarList:[]}, 
    {id: 2, avatar:"", img:face9, username:"You", date:"26, Dec - 12:45PM", message:"<p class='fs-12 text-muted mb-1'>Shared pictures with 4 of friends <span>Hiren,Sasha,Biden,Thara</span>.</p>", media:[{img:media52, name:media52},{img:media56, name:media56}], type:"Nature", typeBg:"success", avatarList:[{img:face2, name:face2},{img:face8, name:face8},{img:face3, name:face3},{img:face10, name:face10}]}, 
    {id: 3, avatar:"", img:face9, username:"You", date:"29, Dec - 09:53AM", message:"<p class='fs-12 text-muted mb-1'>Sharing an article that excites me about nature more than what i thought. </p><p class='mb-3 profile-post-link'><a href='javascript:void(0);' class='fs-12 text-primary'><u>https://www.discovery.com/nature/caring-for-coral</u></a></p>", media:"", type:"Travel", typeBg:"secondary", avatarList:[]}, 
    {id: 4, avatar:"", img:face9, username:"You", date:"22, Dec - 11:22PM", message:"<p class='fs-12 text-muted mb-1'>Shared pictures with 3 of your friends <span>Maya,Jacob,Amanda</span>.</p>", media:[{img:media40, name:media40},{img:media45, name:media45}], type:"Nature", typeBg:"success", avatarList:[{img:face1, name:face1},{img:face5, name:face5},{img:face16, name:face16}]}, 
    {id: 5, avatar:"", img:face9, username:"You", date:"18, Dec - 12:28PM", message:"<p class='fs-12 text-muted mb-1'>Followed this author for top class themes with best code you can get in the  market.</p> <p class='mb-3 profile-post-link'><a href='https://themeforest.net/user/spruko/portfolio' target='_blank' class='fs-12 text-primary'><u>https://themeforest.net/user/spruko/portfolio</u></a></p>", media:"", type:"Travel", typeBg:"secondary", avatarList:[]}, 
    {id: 6, avatar:"", img:face9, username:"You", date:"02, Dec - 06:32AM", message:"<p class='fs-12 text-muted mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p class='fs-12 text-muted mb-3'>There are many variations of passages &#128079;&#128525;</p>", media:"", type:"Fashion", typeBg:"primary", avatarList:[]}, 
]
  