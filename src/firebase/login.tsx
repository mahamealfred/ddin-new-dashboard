import { FC, Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LocalStorageBackup } from "../components/ui/data/switcherdata/switcherdata";
import SpkButton from "../@spk/uielements/spk-button";
import {  useAuth } from "../components/common/contextapi";

interface LoginProps {}


const Login: FC<LoginProps> = ({ ThemeChanger }: any) => {
    const {setpageloading,setAuthToken,setUser}=useAuth()
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = data;
   const navigate = useNavigate();
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };

    const routeChange = () => {
        const path = `${import.meta.env.BASE_URL}dashboards/corporate/`;
        navigate(path);
    };

    const loginHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("")
        const base64Credentials = btoa(`${email}:${password}`);
        try {
            const response = await axios.get("https://app.ddin.rw/api/v1/authentication/login",
             {
                headers: {
                    "Authorization": `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );
            // Store token if provided
            if (response.data) {
            
                setUser({
                        id: response.data.data.id,
                        name: response.data.data.id,
                        email: response.data.data.id,
                        phone: response.data.data.id,
                        username: response.data.data.username,
                    
                })
                setAuthToken(base64Credentials);
                localStorage.setItem("token",  JSON.stringify(base64Credentials));
                localStorage.setItem("userData", JSON.stringify({
                    id:response.data.data.id,
                    accountId:response.data.data.agentFloatAccountId,
                    email:response.data.data.email,
                    name:response.data.data.name,
                    username: response.data.data.username,
                    role:response.data.data.agentCategory
                }));

            }
            // Redirect user
           routeChange();
        } catch (error: any) {
            console.error(error);
            setError(error.response?.data?.responseDescription || "Login failed. Please try again.");
        }
    };

   

    useEffect(() => {
        LocalStorageBackup(ThemeChanger, setpageloading);
    }, []);

    return (
        <Fragment>
            <div className="container">
                <div className="authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor flex">
                    <div className="grid grid-cols-12 w-full">
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
                            <div className="box">
                                <div className="box-body !p-[3rem]">
                                    <p className="h5 font-semibold mb-2 text-center">Sign In</p>
                                    {err && (
                                        <div className="alert-danger px-4 py-3 shadow-md mb-2">
                                            <div className="flex">
                                                <div>{err}</div>
                                            </div>
                                        </div>
                                    )}
                                    <form onSubmit={loginHandler}>
                                        <div className="grid grid-cols-12 gap-y-4">
                                            <div className="xl:col-span-12 col-span-12">
                                                <label className="form-label text-default">Username</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className="form-control form-control-lg w-full !rounded-md"
                                                    onChange={changeHandler}
                                                    value={email}
                                                    placeholder="Enter username"
                                                    required
                                                />
                                            </div>
                                            <div className="xl:col-span-12 col-span-12 mb-2">
                                                <label className="form-label text-default block">
                                                    Password
                                                    <Link to="#" className="float-end text-danger">
                                                        Forget password?
                                                    </Link>
                                                </label>
                                                <div className="input-group">
                                                    <input
                                                        type={passwordshow1 ? "text" : "password"}
                                                        className="form-control form-control-lg !rounded-s-md"
                                                        name="password"
                                                        placeholder="Enter password"
                                                        value={password}
                                                        onChange={changeHandler}
                                                        required
                                                    />
                                                    <SpkButton
                                                        variant="light"
                                                        onclickfunc={() => setpasswordshow1(!passwordshow1)}
                                                        Label="button"
                                                        customClass="ti-btn !rounded-s-none !mb-0"
                                                        buttontype="button"
                                                        Id="button-addon2"
                                                    >
                                                        <i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12 grid mt-2">
                                                <SpkButton
                                                    variant="primary"
                                                    customClass="ti-btn !bg-primary !text-white !font-medium"
                                                    buttontype="submit"
                                                >
                                                    Sign In
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </form>
                                    {/* <div className="text-center">
                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">
                                            Don't have an account?{" "}
                                            <Link to={`${import.meta.env.BASE_URL}firebase/signup`} className="text-primary">
                                                Sign Up
                                            </Link>
                                        </p>
                                    </div> */}
                                    {/* <div className="text-center my-4 authentication-barrier">
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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_variable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Login);
