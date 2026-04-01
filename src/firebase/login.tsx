import { FC, Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LocalStorageBackup } from "../components/ui/data/switcherdata/switcherdata";
import { useAuth } from "../components/common/contextapi";

interface LoginProps {}


const Login: FC<LoginProps> = ({ ThemeChanger }: any) => {
    const {setpageloading,setAuthToken,setUser}=useAuth()
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const { username, password } = data;
   const navigate = useNavigate();
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };

    const routeChange = () => {
        const path = `${import.meta.env.BASE_URL}dashboards/crm/`;
        navigate(path);
    };
    const routeChangeToCorporate = () => {
        const path = `${import.meta.env.BASE_URL}dashboards/corporate/`;
        navigate(path);
    };

    const loginHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("")
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
        try {
            const response = await axios.post(
                `${apiBaseUrl}/v1/agency/auth/login`,
                { username, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            // Store token if provided
            if (response.data?.data) {
                const userData = response.data.data;

                setUser({
                    id: userData.id,
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phoneNumber,
                    username: userData.username,
                });

                if (userData.accessToken) {
                    setAuthToken(userData.accessToken);
                    localStorage.setItem("token", JSON.stringify(userData.accessToken));
                }

                if (userData.refreshToken) {
                    localStorage.setItem("refreshToken", JSON.stringify(userData.refreshToken));
                }

                localStorage.setItem(
                    "userData",
                    JSON.stringify({
                        id: userData.id,
                        email: userData.email,
                        name: userData.name,
                        username: userData.username,
                        role: userData.category,
                        phoneNumber: userData.phoneNumber,
                    })
                );

                const category = String(userData.category || "").toLowerCase();
                if (category === "corporate") {
                    routeChangeToCorporate();
                } else if (category === "staff" ) {
                    routeChange();
                } else if (category === "agent") {
                    routeChange();
                } else {
                    routeChange();
                }
            }
           
            // Redirect user
         
        } catch (error: any) {
            console.error(error);
            setError(error.response?.data?.message || "Login failed. Please try again.");
        }
    };

   

    useEffect(() => {
        LocalStorageBackup(ThemeChanger, setpageloading);
    }, []);

    return (
        <Fragment>
            <div className="min-h-screen flex bg-gray-50 dark:bg-bodybg">
                {/* Left Side - Branding Panel */}
                <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden bg-gradient-to-br from-primary via-purple-600 to-pink-600">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
                        <div className="max-w-md text-center">
                            {/* Minimal Branding */}
                            <div className="mb-8 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-xl mb-6 shadow-2xl">
                                    <span className="text-white text-5xl font-extrabold leading-none tracking-tight">M</span>
                                </div>
                                <h1 className="text-4xl font-bold mb-3 tracking-tight">Welcome to MoolaCore</h1>
                                <div className="h-1 w-16 bg-white/70 mx-auto rounded-full mb-6"></div>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    Your secure portal for smart financial management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="w-full max-w-md">
                        {/* Mobile Logo */}
                        <div className="lg:hidden text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl mb-4 shadow-lg">
                                <span className="text-white text-4xl font-extrabold leading-none tracking-tight">M</span>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">MoolaCore</h1>
                        </div>

                        {/* Login Card */}
                        <div className="bg-white dark:bg-bodybg rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-100 dark:border-defaultborder/10">
                            {/* Header */}
                            <div className="text-center space-y-2">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
                                <p className="text-gray-600 dark:text-white/60">Sign in to continue to MoolaCore</p>
                            </div>

                            {/* Error Alert */}
                            {err && (
                                <div className="bg-red-50 dark:bg-red-500/10 border-l-4 border-red-500 px-4 py-3 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-red-700 dark:text-red-400 text-sm font-medium">{err}</p>
                                    </div>
                                </div>
                            )}

                            {/* Login Form */}
                            <form onSubmit={loginHandler} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-white/80">
                                        Username
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control form-control-lg w-full !rounded-xl pl-10 border-gray-300 dark:border-defaultborder/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                            onChange={changeHandler}
                                            value={username}
                                            placeholder="Enter your username"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-semibold text-gray-700 dark:text-white/80">
                                            Password
                                        </label>
                                        <Link to="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <input
                                            type={passwordshow1 ? "text" : "password"}
                                            className="form-control form-control-lg w-full !rounded-xl pl-10 pr-12 border-gray-300 dark:border-defaultborder/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                            name="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={changeHandler}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setpasswordshow1(!passwordshow1)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-white/80 transition-colors"
                                        >
                                            <i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} text-xl`}></i>
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white font-semibold py-3.5 px-4 rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-bodybg"
                                >
                                    Sign In
                                </button>
                            </form>

                            {/* Footer */}
                            <div className="pt-6 border-t border-gray-200 dark:border-defaultborder/10">
                                <p className="text-center text-sm text-gray-600 dark:text-white/60">
                                    © 2026 MoolaCore. All rights reserved.
                                </p>
                            </div>
                        </div>

                        {/* Help Text */}
                        <p className="text-center text-sm text-gray-500 dark:text-white/50 mt-6">
                            Need help? <Link to="#" className="text-primary hover:text-primary/80 font-medium">Contact Support</Link>
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(20px, -50px) scale(1.1);
                    }
                    50% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    75% {
                        transform: translate(50px, 50px) scale(1.05);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_variable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Login);
