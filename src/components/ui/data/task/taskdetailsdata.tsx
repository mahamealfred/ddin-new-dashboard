import media18 from "../../../../assets/images/media/media-18.jpg";
import media29 from "../../../../assets/images/media/media-29.jpg";
import media39 from "../../../../assets/images/media/media-39.jpg";
import media26 from "../../../../assets/images/media/media-26.jpg";
import face2 from "../../../../assets/images/faces/2.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import filemanager1 from "../../../../assets/images/media/file-manager/1.png";
import filemanager3 from "../../../../assets/images/media/file-manager/3.png";

interface File {
    id: string;
    name: string;
    size: string;
    imageSrc: string;
}

export const Files: File[] = [
    { id: '1', name: 'Full Project', size: '0.45MB', imageSrc: filemanager1 },
    { id: '2', name: 'assets.zip', size: '0.99MB', imageSrc: filemanager3 },
    { id: '3', name: 'image-1.png', size: '245KB', imageSrc: filemanager1 },
    { id: '4', name: 'doc.zip', size: '2MB', imageSrc: filemanager3 },
    { id: '5', name: 'landing.zip', size: '3.46MB', imageSrc: filemanager3 },
];

export const Activitiesdata = [
    {
        SpanContent: 'E',
      description: 'Commented on Work Process in this project',
      timestamp: '24,Dec 2023 - 14:34',
      additionalInfo: 'Task is important and need to be completed on time to meet company work flow.',
      media: [],
      avatarList: [],
      message:'You',
      task:'#New Task',
      text:'',
      avatar: '',
      color:'primary'
    },
    {
      avatar: face11,
      description: 'reacted to the project 👍',
      timestamp: '18,Dec 2023 - 12:16',
      additionalInfo: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis! ',
      media: [],
      avatarList: [],
      message:'Json Smith',
      pClass:'text-[#8c9097] dark:text-white/50 mb-2',
      task:'',
      text:'',
      SpanContent: '',
      color:''
    },
    {
      avatar: face4,
      description: 'shared a document with',
      timestamp: '21,Dec 2023 - 15:32',
      additionalInfo: '',
      media: [{ img: filemanager3, alt: 'Document', storage:true }],
      avatarList: [],
      message:'Alicia Keys ',
      pClass:'text-[#8c9097] dark:text-white/50 mb-2',
      text:'you',
      task:'',
      SpanContent: '',
      color:''
    },
    {
      SpanContent: 'P',
      description: 'shared a post with 4 people',
      timestamp: '28,Dec 2023 - 18:46',
      text:'Simon, Sasha, Anagha, Hishen',
      additionalInfo: '',
      media: [{ img: media18, alt: 'Post Media' , storage:false}],
      avatarList: [face2, face8, face2, face10],
      message:'You',
      pClass:'text-[#8c9097] dark:text-white/50 mb-2',
      task:'',
      avatar: '',
      color:'success'
    },
    {
      avatar: media39,
      description: ' Commented on Task post',
      timestamp: '24,Dec 2023 - 14:34',
      additionalInfo: 'Technology id developing rapidly keep up your work 👌',
      media: [
        { img: media26, alt: 'UI Technologies Image 1',storage:false },
        { img: media29, alt: 'UI Technologies Image 2' ,storage:false}
      ],
      avatarList: [],
      message:'Json',
      task:'#UI Technologies',
      text:'',
      SpanContent: '',
      color:''
    },
  ];

export const Projectoverviewdata=[
  {id:1,src:face2, name:'Simon Conway', role:'UI Developer', color:'primary' ,imgclass:'!rounded-full', avatarclass:''},
  {id:2,src:face8, name:'Sasha Banks', role:'Ui Designer', color:'pinkmain' ,imgclass:'', avatarclass:'!rounded-full'},
  {id:3,src:face5, name:'Anagha May', role:'UI Tester', color:'warning' ,imgclass:'', avatarclass:'!rounded-full'},
  {id:4,src:face10, name:'Hishen Stuart', role:'Angular Developer', color:'success' ,imgclass:'', avatarclass:'!rounded-full'}
]