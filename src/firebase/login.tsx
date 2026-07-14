import { FC, Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LocalStorageBackup } from "../components/ui/data/switcherdata/switcherdata";
import { useAuth } from "../components/common/contextapi";
import { API_BASE_URL } from "../config/api";

interface LoginProps {}

const REMEMBERED_USERNAME_KEY = "rememberedUsername";

const Login: FC<LoginProps> = ({ ThemeChanger }: any) => {
    const { setpageloading, setAuthToken, setUser } = useAuth();
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [err, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [data, setData] = useState({
        username: localStorage.getItem(REMEMBERED_USERNAME_KEY) || "",
        password: "",
    });

    const { username, password } = data;
    const navigate = useNavigate();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };

    const loginHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const apiBaseUrl = API_BASE_URL;
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

                if (rememberMe) {
                    localStorage.setItem(REMEMBERED_USERNAME_KEY, username);
                } else {
                    localStorage.removeItem(REMEMBERED_USERNAME_KEY);
                }

                const category = String(userData.category || "").toLowerCase();
                if (category === "centrika") {
                    navigate(`${import.meta.env.BASE_URL}centrika/momo/dashboard`);
                } else if (category === "corporate") {
                    navigate(`${import.meta.env.BASE_URL}moola/new-momo/dashboard`);
                } else {
                    navigate(`${import.meta.env.BASE_URL}moola/new-momo/collect`);
                }
            }
        } catch (error: any) {
            console.error(error);
            setError(error.response?.data?.message || "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        LocalStorageBackup(ThemeChanger, setpageloading);
    }, []);

    return (
        <Fragment>
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-bodybg px-4 py-12">
                {/* Subtle background accents */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.15] dark:opacity-[0.06]"
                    style={{
                        backgroundImage: "radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)",
                        backgroundSize: "28px 28px",
                    }}
                />
                <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl" />

                <div className="relative w-full max-w-md">
                    {/* Brand mark */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-4 shadow-lg shadow-primary/30">
                            <span className="text-white text-2xl font-extrabold leading-none tracking-tight">M</span>
                        </div>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">MoolaCore</h1>
                    </div>

                    {/* Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-gray-200/70 dark:shadow-black/20 p-8 border border-gray-100 dark:border-defaultborder/10">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Sign in to your account</h2>
                            <p className="text-sm text-gray-500 dark:text-white/60 mt-1">Enter your credentials to access your dashboard.</p>
                        </div>

                        {/* Error Alert */}
                        {err && (
                            <div className="mb-5 flex items-start gap-2.5 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 px-3.5 py-2.5 rounded-xl">
                                <i className="ri-error-warning-line text-red-500 text-base mt-0.5 flex-shrink-0" />
                                <p className="text-red-700 dark:text-red-400 text-xs font-medium leading-relaxed">{err}</p>
                            </div>
                        )}

                        {/* Login Form */}
                        <form onSubmit={loginHandler} className="space-y-4">
                            <div className="space-y-1.5">
                                <label htmlFor="username" className="text-xs font-semibold text-gray-600 dark:text-white/70">
                                    Username
                                </label>
                                <div className="relative">
                                    <i className="ri-user-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
                                    <input
                                        id="username"
                                        type="text"
                                        name="username"
                                        autoComplete="username"
                                        className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white dark:focus:bg-gray-700 transition-all"
                                        onChange={changeHandler}
                                        value={username}
                                        placeholder="Enter your username"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-xs font-semibold text-gray-600 dark:text-white/70">
                                        Password
                                    </label>
                                    <Link to="#" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <i className="ri-lock-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
                                    <input
                                        id="password"
                                        type={passwordshow1 ? "text" : "password"}
                                        name="password"
                                        autoComplete="current-password"
                                        className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 pl-9 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white dark:focus:bg-gray-700 transition-all"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={changeHandler}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setpasswordshow1(!passwordshow1)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white/80 transition-colors"
                                        tabIndex={-1}
                                    >
                                        <i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} text-base`}></i>
                                    </button>
                                </div>
                            </div>

                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-2 focus:ring-primary/40"
                                />
                                <span className="text-xs font-medium text-gray-600 dark:text-white/70">Remember my username</span>
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-primary/90 active:scale-[0.99] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading && <i className="ri-loader-4-line animate-spin text-base"></i>}
                                {loading ? "Signing in..." : "Sign in"}
                            </button>
                        </form>
                    </div>

                    {/* Help Text */}
                    <p className="text-center text-xs text-gray-500 dark:text-white/50 mt-6">
                        Need help? <Link to="#" className="text-primary hover:text-primary/80 font-semibold">Contact support</Link>
                    </p>
                    <p className="text-center text-[11px] text-gray-400 dark:text-white/30 mt-2">
                        © 2026 MoolaCore. All rights reserved.
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_variable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Login);
