import  { FC, Fragment } from 'react';
import { reactbuttons1, reactbuttons10, reactbuttons11, reactbuttons12, reactbuttons13, reusebuttons3,reactbuttons14,buttondata3,reactbuttons15,reusebuttons2, reusebuttons4, reusebuttons5, reusebuttons6, reusebuttons7,buttondata5, buttondata7, buttondata12, buttondata13, buttondata14, buttondata15, buttondata16, buttondata17, buttondata18, buttondata19, buttondata20, buttondata21,  reusebuttons8, reusebuttons9, reusebuttons10, reusebuttons11, reusebuttons12, reusebuttons13, reusebuttons14, reusebuttons15, reusebuttons16, reusebuttons17, reusebuttons18, reusebuttons19, reusebuttons20, reusebuttons21, reusebuttons22,buttondata1, reusebuttons1, reactbuttons16, reactbuttons17, reactbuttons18, reactbuttons19, reactbuttons2, reactbuttons20, reactbuttons21, reactbuttons22, reactbuttons3, reactbuttons4, reactbuttons5, reactbuttons6, reactbuttons7, reactbuttons8, reactbuttons9 } from '../../../components/prism-code/uielementsprism';
import { Buttonwidths, Custombuttons, Defaultbutton, Differentcolored, Differentshadows, Disabledanchortags, IconButtons, Labelbuttons, Lightbuttons, Loadingbuttons, Sizes, SocialButtons, gradientbuttons, outlinebuttons } from '../../../components/ui/data/ui-elements/buttonsdata'
import Pageheader from '../../../components/common/page-header/pageheader';
import Showcode from '../../../components/common/showcode/showcode';
import { Link } from 'react-router-dom';
import SpkButton from '../../../@spk/uielements/spk-button';

interface ButtonsProps {}

const Buttons: FC<ButtonsProps> = () =>{
    return (
        <Fragment>
            <Pageheader currentpage="Buttons" activepage="Ui Elements" mainpage="Buttons" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Default Buttons" reactCode={reactbuttons1}  reusableCode={reusebuttons1} dataCode={buttondata1}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <SpkButton buttontype="button" customClass="ti-btn" variant="primary-full">Primary</SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn" variant="secondary-full">Secondary</SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn" variant="success-full">Success</SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn" variant="danger-full">Danger</SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn" variant="warning-full">Warning</SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn" variant="info-full">Info</SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn" variant="light">Light</SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn" variant="dark">Dark</SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn ti-btn-link" variant="dark-full">Link</SpkButton>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Rounded Buttons" reactCode={reactbuttons2}  reusableCode={reusebuttons2}  dataCode={buttondata1}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {Defaultbutton.map((idx) => (
                                 <SpkButton  buttontype="button"  customClass="ti-btn !rounded-full ti-btn-wave" variant={idx.color}  key={Math.random()} >
                                    {idx.class}
                                </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Light Buttons" reactCode={reactbuttons3}  reusableCode={reusebuttons3}  dataCode={buttondata3}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {Lightbuttons.map((idx) => (
                                <SpkButton  buttontype="button" customClass="ti-btn"  variant={idx.color}  key={Math.random()}   >
                                        {idx.class}
                                </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Light Rounded Buttons" reactCode={reactbuttons4}  reusableCode={reusebuttons4}  dataCode={buttondata3}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {Lightbuttons.map((idx) => (
                                <SpkButton  buttontype="button"  variant={idx.color} customClass="ti-btn !rounded-full ti-btn-wave"  key={Math.random()} >
                                     {idx.class}
                                </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Outline Buttons" reactCode={reactbuttons5}  reusableCode={reusebuttons5}  dataCode={buttondata5}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {outlinebuttons.map((idx) => (
                                <SpkButton buttontype="button"  variant={`outline-${idx.color}`}  customClass="ti-btn"  key={Math.random()} >
                                    {idx.class}
                                </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Rounded Outline Buttons" reactCode={reactbuttons6}  reusableCode={reusebuttons6}  dataCode={buttondata5}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {outlinebuttons.map((idx) => (
                                <SpkButton  buttontype="button"  variant={`outline-${idx.color}`}  customClass="ti-btn !rounded-full ti-btn-wave"  key={Math.random()} >
                                    {idx.class}
                                </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Gradient Buttons" reactCode={reactbuttons7}  reusableCode={reusebuttons7}  dataCode={buttondata7}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {gradientbuttons.map((idx) => (
                                <SpkButton  buttontype="button"  variant={`${idx.color}-gradient`}  customClass="ti-btn ti-btn-wave"  key={Math.random()} >
                                    {idx.class}
                                </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Rounded Gradient Buttons" reactCode={reactbuttons8}  reusableCode={reusebuttons8}  dataCode={buttondata7}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {gradientbuttons.map((idx) => (
                                <SpkButton  buttontype="button"  variant={`${idx.color}-gradient`}  customClass="ti-btn !rounded-full ti-btn-wave"  key={Math.random()} >
                                    {idx.class}
                               </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Ghost Buttons" reactCode={reactbuttons9}  reusableCode={reusebuttons9}  dataCode={buttondata7}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {gradientbuttons.map((idx) => (
                                <SpkButton buttontype="button"  variant={`ghost-${idx.color}`}  customClass="ti-btn"  key={Math.random()} >
                                    {idx.class}
                                </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Rounded Ghost Buttons" reactCode={reactbuttons10}  reusableCode={reusebuttons10}  dataCode={buttondata7}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {gradientbuttons.map((idx) => (
                              <SpkButton buttontype="button"  variant={`ghost-${idx.color}`}  customClass="ti-btn"  key={Math.random()} >
                                 {idx.class}
                             </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Button Tags" reactCode={reactbuttons11}  reusableCode={reusebuttons11}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <Link className="ti-btn ti-btn-primary-full ti-btn-wave" to="#">Link</Link>
                                <SpkButton buttontype="button"  variant="secondary-full"  customClass="ti-btn" >
                                    Button
                                </SpkButton>
                            <input className="ti-btn ti-btn-info-full" type="button" defaultValue="Input" />
                            <input className="ti-btn ti-btn-warning-full" type="button" defaultValue="Submit" />
                            <input className="ti-btn ti-btn-success-full" type="button" defaultValue="Reset" />
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Disable State With anchor Tags" reactCode={reactbuttons12}  reusableCode={reusebuttons12}  dataCode={buttondata12}>
                        <div className="ti-btn-list flex flex-wrap gap-x-2 space-x-2 rtl:space-x-reverse">
                                    {Disabledanchortags.map((idx)=>(
                                        <SpkButton  key={Math.random()}  buttontype="button"  variant={idx.color} disabled={true}  customClass="ti-btn" >
                                            {idx.title}
                                        </SpkButton>
                                    ))}
                            <div className='space-x-2 rtl:space-x-reverse'>
                                <Link to="#" className="ti-btn ti-btn-primary ti-btn-disabled" aria-disabled="true">Primary
                                    link</Link>
                                <Link to="#" className="ti-btn ti-btn-secondary ti-btn-disabled ms-2" aria-disabled="true">Link</Link>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Loading Buttons" reactCode={reactbuttons13}  reusableCode={reusebuttons13}  dataCode={buttondata13}>
                        <div className="ti-btn-list md:flex flex-wrap">
                                {Loadingbuttons.map((idx)=>(
                                    <SpkButton  key={Math.random()}  buttontype="button" variant={idx.color}  customClass={idx.customcls} >
                                        {idx.htmltext}
                                    </SpkButton>
                                ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Icon Buttons" reactCode={reactbuttons14}  reusableCode={reusebuttons14}  dataCode={buttondata14}>
                        <div className="ti-btn-list md:flex flex-wrap gap-y-2 block">
                            <div className="md:mb-0 mb-2 flex gap-x-2">
                                    {IconButtons.slice(0, 4).map((idx)=>(
                                        <SpkButton  key={idx.id} 
                                        // title={idx.htmltext} 
                                            buttontype="button" variant={idx.color}  customClass={idx.customcls}>
                                            {idx.htmltext}
                                        </SpkButton>
                                    ))}
                            </div>
                            <div className="md:mb-0 mb-2 flex gap-x-2">
                                    {IconButtons.slice(4, 8).map((idx)=>(
                                        <SpkButton  key={idx.id}   buttontype="button" variant={idx.color}  customClass={idx.customcls} >
                                                {idx.htmltext}
                                        </SpkButton>
                                    ))}
                            </div>
                            <div className=" flex gap-x-2">
                                {IconButtons.slice(8, 12).map((idx)=>(
                                    <SpkButton key={idx.id} buttontype="button" variant={idx.color}  customClass={idx.customcls}>
                                            {idx.htmltext}
                                    </SpkButton>
                                ))}
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Social Buttons" reactCode={reactbuttons15}  reusableCode={reusebuttons15}  dataCode={buttondata15}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                {SocialButtons.map((idx)=>(
                                    <SpkButton key={idx.id}  buttontype="button" variant={idx.color}  customClass="ti-btn ti-btn-icon" >
                                        {idx.icon}
                                    </SpkButton>
                                ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Sizes" reactCode={reactbuttons16}  reusableCode={reusebuttons16}  dataCode={buttondata16}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {Sizes.map((idx)=>(
                                        <SpkButton  key={idx.id}   buttontype="button" variant={idx.color}  customClass={idx.customcls} size={idx.size} >
                                            {idx.titletxt}
                                        </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Button Widths" reactCode={reactbuttons17}  reusableCode={reusebuttons17}  dataCode={buttondata17}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {Buttonwidths.map((idx)=>(
                                        <SpkButton  key={Math.random()}  buttontype="button" size={idx.size}  variant={idx.color} customClass="ti-btn" >
                                            {idx.title}
                                        </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Buttons With Different Shadows" reactCode={reactbuttons18}  reusableCode={reusebuttons18}  dataCode={buttondata18}>
                        <div className="ti-btn-list flex flex-wrap gap-y-2">
                            <div className="me-[3rem] flex gap-x-2">
                                {Differentshadows.slice(0, 3).map((idx)=>(
                                    <SpkButton key={Math.random()}  buttontype="button"  variant={idx.color} customClass={idx.customcls}>
                                            Button
                                     </SpkButton>
                                ))}
                            </div>
                            <div className="flex gap-x-2">
                                {Differentshadows.slice(3 ,6).map((idx)=>(
                                        <SpkButton key={Math.random()}  buttontype="button"  variant={idx.color} customClass={idx.customcls} >
                                            Button
                                    </SpkButton>
                                ))}
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Different Colored Buttons With Shadows" reactCode={reactbuttons19}  reusableCode={reusebuttons19}  dataCode={buttondata19}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {Differentcolored.map((idx)=>(
                                <SpkButton key={Math.random()}  buttontype="button"  variant={idx.color} customClass={idx.customcls} >
                                    Button
                                </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Label Buttons" reactCode={reactbuttons20}  reusableCode={reusebuttons20}  dataCode={buttondata20}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {Labelbuttons.map((idx)=>(
                                    <SpkButton  key={Math.random()}  buttontype="button"  variant={idx.color} customClass={idx.customcls} >
                                    {idx.title}{idx.icon}
                                    </SpkButton>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Custom Buttons" reactCode={reactbuttons21}  reusableCode={reusebuttons21}  dataCode={buttondata21}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <SpkButton  key={Math.random()}  label="ri-twitter-line text-info"  buttontype="button"  variant="info-full" customClass="ti-btn custom-button !rounded-full" >
                                <span className="custom-ti-btn-icons"><i className="ri-twitter-x-line text-info"></i></span>
                                Twitter
                            </SpkButton>
                            {Custombuttons.map((idx)=>(
                                <SpkButton  key={Math.random()}   buttontype="button"  variant={idx.color} customClass={idx.customcls} >
                                    {idx.title}
                                </SpkButton>
                                ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Block Buttons" reactCode={reactbuttons22}  reusableCode={reusebuttons22}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <div className="grid  gap-2 mb-4">
                                <SpkButton  buttontype="button"  variant="primary-full" customClass="ti-btn me-1" >
                                    Button
                                </SpkButton>
                                <SpkButton  buttontype="button"  variant="secondary-full" customClass="ti-btn " >
                                    Button
                                </SpkButton>
                            </div>
                            <div className="grid gap-2 md:block">
                                <SpkButton  buttontype="button"  variant="info-full" customClass="ti-btn " >
                                    Button
                                </SpkButton>
                                <SpkButton  buttontype="button"  variant="success-full" customClass="ti-btn " >
                                    Button
                                </SpkButton>
                            </div>
                            <div className="grid !mx-auto gap-2 w-[50%] ">
                                <SpkButton  buttontype="button"  variant="danger-full" customClass="ti-btn " >
                                    Button
                                </SpkButton>
                                <SpkButton  buttontype="button"  variant="warning-full" customClass="ti-btn " >
                                    Button
                                </SpkButton>
                            </div>
                            <div className="grid gap-2 md:flex md:justify-end">
                                <SpkButton  buttontype="button"  variant="teal-full" customClass="ti-btn md:me-2" >
                                    Button
                                </SpkButton>
                                <SpkButton  buttontype="button"  variant="purple-full" customClass="ti-btn " >
                                    Button
                                </SpkButton> 
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
        </Fragment>
    )
}

export default Buttons