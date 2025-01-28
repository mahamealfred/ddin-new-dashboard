import face1 from "../../../../assets/images/faces/1.jpg";
import face2 from "../../../../assets/images/faces/2.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face6 from "../../../../assets/images/faces/6.jpg";
import face7 from "../../../../assets/images/faces/7.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import face14 from "../../../../assets/images/faces/14.jpg";
import media86 from "../../../../assets/images/media/media-86.svg";
import media36 from "../../../../assets/images/media/media-36.jpg";
import media41 from "../../../../assets/images/media/media-41.jpg";
import media43 from "../../../../assets/images/media/media-43.jpg";

export const Kanbandata = [
    {
        createdDate: "Created - 28 May",
        days: "2 days left",
        badges: (
            <>
             <span className="badge bg-light text-default">#SPK - 11</span>
            <span className="ms-1 badge bg-primary/10 text-primary">UI/UX</span>
            </>
        ),
        title: "New Dashboard design.",
        showDescription:true,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit, Nulla soluta consectetur sit amet elit dolor sit amet.",
        likes: 12,
        message: "02",
        avatars: (
                <>
                <span className="avatar avatar-sm avatar-rounded">
                            <img src={face11} alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                            <img src={face12} alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                            <img src={face7} alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                            <img src={face8} alt="img" />
                        </span>
                </>
            )  
    },
    {
        createdDate: "Created- 30 May",
        days: "2 days left",
        showDescription:true,
        badges:(
            <>
            <span className="badge bg-light text-default">#SPK - 05</span>
                        <span className="ms-1 badge bg-info/10 text-info">Marketing</span>
                        <span className="ms-1 badge bg-warning/10 text-warning">Finance</span>
            </>
        ),
        title: "Marketing next projects.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta.",
        likes: 40,
        message: 8,
        avatars: (
            <>
            <span className="avatar avatar-sm avatar-rounded">
                        <img src={face13} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={face6} alt="img" />
                    </span>
            </>
        ),
    },
    {
        createdDate: "Created- 02 Jun",
        days: "1 day left",
        showDescription:true,
        badges: (
            <>
            <span className="badge bg-light text-default">#SPK - 05</span>
                        <span className="ms-1 badge bg-success/10 text-success">Designing</span>
            </>
        ),
        title: "Design multi usage landing.",
        description: "",
        imgSrc: media36,
        showImage:true, 
        likes: 16,
        message: 28,
        avatars:  (
            <>
            <span className="avatar avatar-sm avatar-rounded">
                        <img src={face2} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={face8} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={face5} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={face10} alt="img" />
                    </span>
            </>
        ),
    }
];

export const kanbandata1 = [
    {
      createdDate: "Created - 01 Jun",
      days: "10 days left",
      showDescription:true,
      title: "Adding Authentication Pages.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
      badges: (
        <>
       <span className="badge bg-light text-default">#SPK - 07</span>
       <span className="ms-1 badge bg-pinkmain/10 text-pinkmain">Admin</span>
       <span className="ms-1 badge bg-light text-default">Authentication</span>
        </>
      ),
      likes: '06',
      message: '02',
      imgSrc: '',
      showImage:false,
      avatars:(
        <>
      <span className="avatar avatar-sm avatar-rounded"><img src={face9} alt="img"/></span>
      <span className="avatar avatar-sm avatar-rounded"><img src={face8} alt="img"/></span>
      <span className="avatar avatar-sm avatar-rounded"><img src={face14} alt="img"/></span>
        </>
      ),
    },
    {
     createdDate: "Created -05 Jun",
     showDescription:true,
      days: '14 days left',
      title: "New Project Discussion.",
      description: '',
      badges: (
        <>
      <span className="badge bg-light text-default">#SPK - 15</span>
      <span className="ms-1 badge bg-success/10 text-success">Planning</span>
        </>
      ),
      likes: '17',
      imgSrc:media41,
      message: '06',
      showImage:true,
      avatars: (
        <>
       <span className="avatar avatar-sm avatar-rounded"><img src={face2} alt="img"/></span>
       <span className="avatar avatar-sm avatar-rounded"><img src={face8} alt="img"/></span>
       <span className="avatar avatar-sm avatar-rounded"><img src={face5} alt="img"/></span>
       <span className="avatar avatar-sm avatar-rounded"><img src={face10} alt="img"/></span>
        </>
      ),
    },
]
export const kanbandata2 = [
    {
        createdDate: "Created - 02 Jun",
        showDescription:true,
        days: "5 days left",
        title: "Create Calendar & Mail pages.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta.",
        badges: (
            <>
                <span className="badge bg-light text-default">#SPK - 13</span>
                <span className="ms-1 badge bg-primary/10 text-primary">UI Design</span>
                <span className="ms-1 badge bg-danger/10 text-danger">Development</span>
            </>
        ),
        likes: "05",
        message: "13",
        showImage: false,
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face13} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face6} alt="img" /></span>
            </>
        ),
    },
    {
        createdDate: "Created - 03 Jun",
        showDescription:true,
        days: "12 days left",
        title: "Project design Figma,Sketch.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta.",
        badges: (
            <>
                <span className="badge bg-light text-default">#SPK - 09</span>
                <span className="ms-1 badge bg-tealmain/10 text-tealmain">Product</span>
            </>
        ),
        likes: "02",
        message: "0",
        showImage: false,
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face12} alt="img" /></span>
            </>
        ),
    },
];

export const kanbandata3 = 
    {
        createdDate: "Created - 05 Jun",
        showDescription:false,
        days: "14 days left",
        title: "Design Architecture strategy.",
        description: "",
        badges: (
            <>
                <span className="badge bg-light text-default">#SPK - 15</span>
                <span className="ms-1 badge bg-purplemain/10 text-purplemain">Review</span>
            </>
        ),
        likes: "09",
        message: "35",
        showImage: true,
        imgSrc:media43,   
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face3} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face5} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face7} alt="img" /></span>
            </>
        ),
}

export const kanbandataCompleted = [
    {
        createdDate: "Created - 12 Jun",
        timeLeft: "Done",
        title: "Sash project update.",
        showDescription:true,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
        badges: (
            <>
                <span className="badge bg-light text-default">#SPK - 04</span>
                <span className="ms-1 badge bg-success/10 text-success">UI/UX</span>
            </>
        ),
        likes: "18",
        message: "03",
        showImage: false,
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face6} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face13} alt="img" /></span>
            </>
        ),
    },
    {
        createdDate: "Created - 10 Jun",
        timeLeft: "Done",
        showDescription:true,
        title: "React JS new version update.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
        badges: (
            <>
                <span className="badge bg-light text-default">#SPK - 10</span>
                <span className="ms-1 badge bg-info/10 text-info">Development</span>
            </>
        ),
        likes: "22",
        message: "12",
        showImage: false,
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face10} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face11} alt="img" /></span>
                <span className="avatar avatar-sm avatar-rounded"><img src={face1} alt="img" /></span>
            </>
        ),
    },
    {
        createdDate: "Created - 07 Jun",
        timeLeft: "Done",
        title: "Project discussion with client.",
        description: "",
        badges: (
            <>
                <span className="badge bg-light text-default">#SPK - 16</span>
                <span className="ms-1 badge bg-primary/10 text-primary">Discussion</span>
            </>
        ),
        likes: "11",
        message: "05",
        showImage: true,
        imgSrc: media86,
        avatars: (
            <>
                <span className="avatar avatar-sm avatar-rounded"><img src={face4} alt="img" /></span>
            </>
        ),
    },
];

