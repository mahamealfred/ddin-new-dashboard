import { FC, Fragment, useEffect, useState } from "react";
import Pageheader from "../../components/common/page-header/pageheader";
import axios from "axios";

interface UserData {
  id?: string;
  name?: string;
  email?: string;
  username?: string;
  role?: string;
  phoneNumber?: string;
}

const MyAccount: FC = () => {
  const [user, setUser] = useState<UserData>({});
  const [balance, setBalance] = useState<string>("-");

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
    const storedToken = localStorage.getItem("token");
    if (!storedToken) return;

    const fetchBalance = async () => {
      try {
        const token = JSON.parse(storedToken);
        const response = await axios.get(`${apiBaseUrl}/v1/agency/accounts/main/balance`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.data?.success) {
          const amount = response.data?.data?.mainBalance?.availableBalance ?? response.data?.data?.mainBalance?.balance ?? 0;
          setBalance(Number(amount).toLocaleString());
        }
      } catch (error) {
        setBalance("-");
      }
    };

    fetchBalance();
  }, []);

  return (
    <Fragment>
      <Pageheader currentpage="My Account" activepage="Dashboard" mainpage="Account" />
      
      {/* Balance Card */}
      <div className="mb-6">
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-xl shadow-xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm opacity-90">Available Balance</p>
                <p className="text-4xl font-bold mt-1">{balance} RWF</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white border-opacity-20">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <p className="text-xs opacity-75 mb-1">Account Status</p>
                <p className="text-sm font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Active
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <p className="text-xs opacity-75 mb-1">Account Type</p>
                <p className="text-sm font-semibold">{user.role || "Standard"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-8 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Profile Information</div>
            </div>
            <div className="box-body">
              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {(user.name || "U")[0].toUpperCase()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{user.name || "User"}</h3>
                  <p className="text-gray-500">{user.email || "-"}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium">
                    {user.role || "User"}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Username</p>
                      <p className="font-semibold text-gray-800">{user.username || "-"}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email Address</p>
                      <p className="font-semibold text-gray-800 truncate">{user.email || "-"}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone Number</p>
                      <p className="font-semibold text-gray-800">{user.phoneNumber || "-"}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">User ID</p>
                      <p className="font-mono text-sm font-semibold text-gray-800">{user.id || "-"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Quick Actions</div>
            </div>
            <div className="box-body space-y-3">
              <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-700">Edit Profile</span>
              </button>

              <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-700">Change Password</span>
              </button>

              <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-700">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyAccount;
