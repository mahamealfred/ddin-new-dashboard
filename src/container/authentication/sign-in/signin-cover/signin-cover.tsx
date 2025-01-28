import  { FC, Fragment, useState } from 'react'
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";
import { Link } from 'react-router-dom';
import SwiperComponent from '../../../../@spk/spk-packages/swiper-component';
import { SigninSwiper } from '../../../../components/ui/data/authentication/swipercoverdata';
import SpkButton from '../../../../@spk/uielements/spk-button';


interface SignincoverProps { }

const Signincover: FC<SignincoverProps> = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);

  return (
    <Fragment>
    <div className="grid grid-cols-12 authentication mx-0 text-defaulttextcolor text-defaultsize">

    <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-12 col-span-12 bg-white dark:!bg-bodybg">
        <div className="grid grid-cols-12 items-center h-full ">
          <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-2"></div>
          <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12">
                <div className="p-[3rem]">
                    <div className="mb-4">
                        <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                            <img src={desktoplogo} alt="" className="authentication-brand desktop-logo"/>
                            <img src={desktopdarklogo} alt="" className="authentication-brand desktop-dark"/>
                        </Link>
                    </div>
                    <p className="h5 font-semibold mb-2">Sign In</p>
                    <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal">Hello Jhon !</p>
                    <div className="btn-list">
                        <SpkButton Label="button" buttontype="button" variant="light" Size="lg" customClass="ti-btn !font-medium me-[0.365rem] dark:border-defaultborder/10"><svg className="google-svg" xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>Sign In with google</SpkButton>
                        <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn ti-btn-icon  me-[0.365rem]"><i className="ri-facebook-fill"></i></SpkButton>
                        <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn ti-btn-icon "><i className="ri-twitter-x-line"></i></SpkButton>
                    </div>
                    <div className="text-center my-[3rem] authentication-barrier">
                        <span>OR</span>
                    </div>
                    <div className="grid grid-cols-12 gap-y-4">
                        <div className="xl:col-span-12 col-span-12 mt-0">
                            <label htmlFor="signin-username" className="form-label text-default">User Name</label>
                            <input type="text" className="form-control form-control-lg w-full !rounded-md" id="signin-username" placeholder="user name"/>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <label htmlFor="signin-password" className="form-label text-default block">Password<Link to={`${import.meta.env.BASE_URL}authentication/reset-password/reset-cover`} className="ltr:float-right rtl:float-left text-danger">Forget password ?</Link></label>
                            <div className="input-group">
                                <input type={(passwordshow1) ? 'text' : "password"} className="form-control form-control-lg  !border-s !rounded-e-none" id="signin-password" placeholder="password"/>
                                <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn !rounded-s-none !mb-0" onclickfunc={()=>setpasswordshow1(!passwordshow1)} Id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></SpkButton>
                            </div>
                            <div className="mt-2">
                                <div className="form-check !ps-0">
                                    <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1"/>
                                    <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                                        Remember password ?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12 grid">
                            <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`} className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">Sign In</Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Dont have an account? <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/signup-cover`} className="text-primary">Sign Up</Link></p>
                    </div>
                </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-2"></div>
        </div>
    </div>
    <div className="xxl:col-span-5 xl:col-span-5 lg:col-span-5 col-span-12 xl:block hidden px-0">
        <div className="authentication-cover">
            <div className="aunthentication-cover-content rounded">
                <div className="swiper keyboard-control">
                <SwiperComponent slides={SigninSwiper} spaceBetween={30} navigation={true} centeredSlides={true} autoplay={true} pagination={true}  className="mySwiper"/>
                </div>
            </div>
        </div>
    </div>

</div>
</Fragment>
  )
}

export default Signincover