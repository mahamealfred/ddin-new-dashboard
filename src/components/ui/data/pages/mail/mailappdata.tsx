import face4 from "../../../../../assets/images/faces/4.jpg";
import face14 from "../../../../../assets/images/faces/14.jpg";
import face12 from "../../../../../assets/images/faces/12.jpg";
import face13 from "../../../../../assets/images/faces/13.jpg";
import face3 from "../../../../../assets/images/faces/3.jpg";
import face5 from "../../../../../assets/images/faces/5.jpg";
import face7 from "../../../../../assets/images/faces/7.jpg";
import face15 from "../../../../../assets/images/faces/15.jpg";
import face16 from "../../../../../assets/images/faces/16.jpg";
import face8 from "../../../../../assets/images/faces/8.jpg";
import face10 from "../../../../../assets/images/faces/10.jpg";
import face11 from "../../../../../assets/images/faces/11.jpg";

interface mailapp {
    id: string;
    class: string;
    src: string;
    name: string;
    title: string;
    icon: string;
    star: string;
    badge: string;
    color: string;
    active: string;
    time: string;
}
export const Mailappdata: mailapp[] = [
    { id: '1', class: '', src: face5, name: 'Sujika', title: 'New Project details', time: '1:32PM', icon: 'ri-attachment-2 align-middle text-[0.75rem]', star: 'text-[.6875rem] text-[#8c9097] dark:text-white/50 text-wrap ', badge: '', color: '', active: '' },
    { id: '2', class: 'defaultChecked', src: face12, name: 'Michael Jeremy', title: 'History of planets are discovered yesterday', time: '10:27AM', icon: '', star: '', badge: '', color: '', active: 'active' },
    { id: '3', class: '', src: face14, name: 'King Berunda', title: 'Request for return of item ?', time: 'Yesterday, 10:27AM', icon: '', star: '', badge: 'Promotion', color: 'success', active: '' },
    { id: '4', class: 'defaultChecked', src: face7, name: 'Samantha May', title: 'Completion of work is pending', time: '24 Oct, 5:45PM', icon: '', star: '', badge: 'Social', color: 'primary', active: '' },
    { id: '5', class: '', src: face15, name: 'Alex Carey', title: 'Most Probable date of project completion', time: '12 Sep, 11:24AM', icon: '', star: 'text-[.6875rem] text-[#8c9097] dark:text-white/50 text-wrap ', badge: '', color: '', active: '' },
    { id: '6', class: '', src: face16, name: 'Dawn Bradshaw ', title: 'Personal Mail', time: '11 Sep, 10:32AM', icon: '', star: 'text-[.6875rem] text-[#8c9097] dark:text-white/50 text-wrap ', badge: 'Personal', color: 'danger', active: '' },
    { id: '7', class: '', src: face3, name: 'Kiara Jah', title: 'Applying for bank loan?', time: '08 Aug, 08:12AM', icon: '', star: '', badge: '', color: '', active: '' },
    { id: '8', class: '', src: face13, name: 'David Subhman', title: 'Life Insurance Corparation.', time: '16 July, 05:52PM', icon: '', star: '', badge: '', color: '', active: '' },
];
interface images {
    id: number;
    src: string;
    name: string;
}
export const Imagesdata: images[] = [
    { id: 1, src: face5, name: 'Sujika' },
    { id: 2, src: face7, name: 'Samantha May' },
    { id: 3, src: face4, name: 'Brenda' },
    { id: 4, src: face8, name: 'Monika' },
    { id: 5, src: face3, name: 'Kiara Jah' },
    { id: 6, src: face11, name: 'Sujika' },
    { id: 7, src: face11, name: 'Kim Noah' },
    { id: 7, src: face16, name: 'Sujika' },
    { id: 8, src: face10, name: 'Professor' },
    { id: 9, src: face15, name: 'Alex Carey' },
];
interface mail {
    id: number;
    icon: string;
    text1: string;
    text2: string;
    class: string;
    class1: string;
}
export const Mails: mail[] = [
    { id: 1, icon: 'inbox-archive-line', text1: 'All Mails', text2: '12,456', class: 'badge bg-success/10 text-success !rounded-full', class1: 'active' },
    { id: 2, icon: 'inbox-archive-line', text1: 'Inbox', text2: '8', class: 'badge bg-primary/10 text-primary !rounded-full', class1: '' },
    { id: 3, icon: 'send-plane-2-line', text1: 'Sent', text2: '', class: '', class1: '' },
    { id: 4, icon: 'draft-line', text1: 'Drafts', text2: '', class: '', class1: '' },
    { id: 5, icon: 'spam-2-line', text1: 'Spam', text2: '4', class: 'badge bg-danger/10 text-danger !rounded-full', class1: '' },
    { id: 6, icon: 'bookmark-line', text1: 'Important', text2: '', class: '', class1: '' },
    { id: 7, icon: 'delete-bin-line', text1: 'Trash', text2: '', class: '', class1: '' },
    { id: 8, icon: 'archive-line', text1: 'Archive', text2: '', class: '', class1: '' },
    { id: 9, icon: 'star-line', text1: 'Starred', text2: '12', class: 'badge bg-warning/10 text-warning !rounded-full', class1: '' }
]
interface mail1 {
    id: number;
    checked: string;
    img: string;
    active: string;
    name: string;
    title: string;
    time: string;
    icon: string;
    star: string;
    badge: string;
    badgetxt: string;
    bordercls: string;
}
export const Mails1: mail1[] = [
    { id: 1, checked: '', img: face5, active: 'online', name: 'Sujika', title: 'New Project details', time: '1:32PM', icon: 'ri-attachment-2 align-middle text-[0.75rem]', star: 'true', badge: '', badgetxt: '', bordercls: '' },
    { id: 2, checked: 'defaultChecked', img: face12, active: 'online', name: 'Michael Jeremy', title: 'History of planets are discovered yesterday.', time: '10:27AM', icon: '', star: '', badge: '', badgetxt: '', bordercls: 'active !border-t-0' },
    { id: 3, checked: '', img: face14, active: 'offline', name: 'King Berunda', title: 'Request for return of item ?', time: 'Yesterday, 10:27AM', icon: '', star: '', badge: 'badge bg-success text-white', badgetxt: 'Promotion', bordercls: '!border-t-0' },
    { id: 4, checked: 'defaultChecked', img: face7, active: 'offline', name: 'Samantha May', title: 'Completion of work is pending', time: '24 Oct, 5:45PM', icon: '', star: '', badge: 'badge bg-primary text-white', badgetxt: 'Social', bordercls: '!border-t-0' },
    { id: 5, checked: '', img: face15, active: 'offline', name: 'Alex Carey', title: 'Most Probable date of project completion', time: '12 Sep, 11:24AM', icon: '', star: '', badge: '', badgetxt: '', bordercls: '!border-t-0' },
    { id: 6, checked: '', img: face16, active: 'offline', name: 'Dawn Bradshaw ', title: 'Personal Mail', time: '11 Sep, 10:32AM', icon: '', star: '', badge: 'badge bg-danger text-white', badgetxt: 'Personal', bordercls: '!border-t-0' },
    { id: 7, checked: '', img: face3, active: 'offline', name: 'Kiara Jah', title: 'Applying for bank loan?', time: '08 Aug, 08:12AM', icon: '', star: '', badge: '', badgetxt: '', bordercls: '!border-t-0' },
    { id: 8, checked: '', img: face13, active: 'offline', name: 'David Subhman', title: 'Life Insurance Corparation.', time: '16 July, 05:52PM', icon: '', star: '', badge: '', badgetxt: '', bordercls: '!border-t-0' },
]