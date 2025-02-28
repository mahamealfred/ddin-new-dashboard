import { FC, Fragment, useContext, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { ThemeChanger } from "../redux/action";
import { Link, useNavigate } from 'react-router-dom';
import desktoplogo from "../assets/images/brand-logos/ddinlogoT.png";
import desktopdarklogo from "../assets/images/brand-logos/ddinlogoT.png";

import { auth } from './firebaseapi';
import { LocalStorageBackup } from '../components/ui/data/switcherdata/switcherdata';
import SpkButton from '../@spk/uielements/spk-button';
import { Initialload } from '../components/common/contextapi';

interface LoginProps { }

const Login: FC<LoginProps> = ({ ThemeChanger }: any) => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        "email": "adminreact@gmail.com",
        "password": "1234567890",
    });
    const { email, password } = data;
    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };
    const navigate = useNavigate();
    const routeChange = () => {
        const path = `${import.meta.env.BASE_URL}dashboards/crm/`;
        navigate(path);
    };
    const Login1 = () => {

        if (data.email == "adminreact@gmail.com" && data.password == "1234567890") {
            routeChange();
        }
        else {
            setError("The Auction details did not Match");
            setData({
                "email": "adminreact@gmail.com",
                "password": "1234567890",
            });
        }
    };
    const Login = (e: any) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            user => { console.log(user); routeChange(); }).catch(err => { console.log(err); setError(err.message); });
    };

    const theme :any= useContext(Initialload);

    useEffect(() => {
        LocalStorageBackup(ThemeChanger, theme.setpageloading);
    }, []);
    return (
        <Fragment>
            <div className="container">
                <div className="authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor flex">
                    <div className="grid grid-cols-12 w-full">
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
                            <div className="my-[2.5rem] flex justify-center">
                                <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                                    <img src={desktoplogo} alt="logo" className="desktop-logo w-[160px] h-auto" />
                                    <img src={desktopdarklogo} alt="logo" className="desktop-dark w-[160px] h-auto" />
                                </Link>
                            </div>

                            <div className="box">
                                {/* <nav className="!block firebase-data mt-6 bg-light mx-auto p-2 rounded-md" aria-label="Tabs" role='tablist'>
                                    <div className="flex justify-center space-x-2  rtl:space-x-reverse">
                                        <SpkButton buttontype="button" customClass="hs-tab-active:bg-primary hs-tab-active:text-white py-2 px-2 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white active"
                                          Id="pills-with-brand-color-item-1" Tab="#pills-with-brand-color-01" Controls="pills-with-brand-color-01">
                                            <img src={react} alt="user-img" className="w-6 h-6 rounded-full ring-0" />
                                        </SpkButton>
                                        <SpkButton buttontype="button" customClass="hs-tab-active:bg-primary hs-tab-active:text-white py-2 px-2 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white" 
                                          Id="pills-with-brand-color-item-2" Tab="#pills-with-brand-color-02" Controls="pills-with-brand-color-02">
                                            <img src={firebase} alt="user-img" className="w-6 h-6 rounded-full ring-0" />
                                        </SpkButton>
                                    </div>
                                </nav> */}
                                <div className="box-body !p-[3rem]" role="tabpanel" id="pills-with-brand-color-01" aria-labelledby="pills-with-brand-color-item-1">
                                    <p className="h5 font-semibold mb-2 text-center">Sign In</p>
                                    <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back Jhon !</p>
                                    {err && <div className="alert-danger px-4 py-3 shadow-md mb-2" role="alert">
                                        <div className="flex">
                                            <div className="py-1">
                                            </div>
                                            <div>{err}</div>
                                        </div>
                                    </div>}
                                    <div className="grid grid-cols-12 gap-y-4">
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="signin-username" className="form-label text-default">Email</label>
                                            <input type="email" name="email" className="form-control form-control-lg w-full !rounded-md" onChange={changeHandler} value={email}
                                                id="signin-username" placeholder="user name" />
                                        </div>
                                        <div className="xl:col-span-12 col-span-12 mb-2">
                                            <label htmlFor="signin-password" className="form-label text-default block">Password
                                                <Link to="#" className="float-end text-danger">
                                                    Forget password ?</Link></label>
                                            <div className="input-group">
                                                <input type={(passwordshow1) ? 'text' : "password"} className="form-control form-control-lg !rounded-s-md"
                                                    name="password"
                                                    placeholder="password" value={password}
                                                    onChange={changeHandler} />
                                                <SpkButton variant="light"
                                                    onclickfunc={() => setpasswordshow1(!passwordshow1)}
                                                   Label="button" customClass="ti-btn !rounded-s-none !mb-0" buttontype="button" Id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></SpkButton>
                                            </div>
                                            <div className="mt-2">
                                                <div className="form-check !ps-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                                                        Remember password ?
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-12 col-span-12 grid mt-2">
                                            <SpkButton variant="primary" customClass="ti-btn !bg-primary !text-white !font-medium"
                                                onclickfunc={Login1}>Sign In</SpkButton>
                                        </div>
                                    </div>
                                    {/* <div className="text-center">
                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Dont have an account? <Link to={`${import.meta.env.BASE_URL}firebase/signup`} className="text-primary">Sign Up</Link></p>
                                    </div>
                                    <div className="text-center my-4 authentication-barrier">
                                        <span>OR</span>
                                    </div> */}
                                    {/* <div className="btn-list text-center">
                                        <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn ti-btn-icon me-[0.365rem]">
                                            <i className="ri-facebook-line font-bold text-dark opacity-[0.7]"></i>
                                        </SpkButton>
                                        <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn ti-btn-icon me-[0.365rem]">
                                            <i className="ri-google-line font-bold text-dark opacity-[0.7]"></i>
                                        </SpkButton>
                                        <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn ti-btn-icon">
                                            <i className="ri-twitter-x-line font-bold text-dark opacity-[0.7]"></i>
                                        </SpkButton>
                                    </div> */}
                                </div>
                                <div className="box-body !p-[3rem] hidden" role="tabpanel" id="pills-with-brand-color-02" aria-labelledby="pills-with-brand-color-item-2">
                                    <p className="h5 font-semibold mb-2 text-center">Sign In</p>


                                    <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back Jhon !</p>

                                    {err && <div className="alert-danger px-4 py-3 shadow-md mb-2" role="alert">
                                        <div className="flex">
                                            <div className="py-1">
                                            </div>
                                            <div>{err}</div>
                                        </div>
                                    </div>}
                                    <div className="grid grid-cols-12 gap-y-4">
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="signin-username" className="form-label text-default">Email</label>
                                            <input type="email" name="email" className="form-control form-control-lg w-full !rounded-md"

                                                placeholder="user name" value={email}
                                                onChange={changeHandler} />
                                        </div>
                                        <div className="xl:col-span-12 col-span-12 mb-2">
                                            <label htmlFor="signin-password" className="form-label text-default block">Password<Link to="#" className="float-end text-danger">Forget password ?</Link></label>
                                            <div className="input-group">
                                                <input name="password" type='password' className="form-control form-control-lg !rounded-s-md"

                                                    placeholder="password" value={password}
                                                    onChange={changeHandler} />
                                                <SpkButton onclickfunc={() => setpasswordshow1(!passwordshow1)} Label="button" variant="light" customClass="ti-btn !rounded-s-none !mb-0" buttontype="button" Id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></SpkButton>
                                            </div>
                                            <div className="mt-2">
                                                <div className="form-check !ps-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                                                        Remember password ?
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-12 col-span-12 grid mt-2">
                                            <Link to="#" className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium" onClick={Login}>Sign In</Link>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Dont have an account? <Link to={`${import.meta.env.BASE_URL}authentication/signup/signupbasic`} className="text-primary">Sign Up</Link></p>
                                    </div>
                                    <div className="text-center my-4 authentication-barrier">
                                        <span>OR</span>
                                    </div>
                                    <div className="btn-list text-center">
                                        <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn ti-btn-icon me-[0.365rem]">
                                            <i className="ri-facebook-line font-bold text-dark opacity-[0.7]"></i>
                                        </SpkButton>
                                        <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn ti-btn-icon me-[0.365rem]">
                                            <i className="ri-google-line font-bold text-dark opacity-[0.7]"></i>
                                        </SpkButton>
                                        <SpkButton Label="button" buttontype="button" variant="light" customClass="ti-btn ti-btn-icon">
                                            <i className="ri-twitter-x-line font-bold text-dark opacity-[0.7]"></i>
                                        </SpkButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
};

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Login);


