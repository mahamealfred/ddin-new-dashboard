import { FC, Fragment, useState } from "react";
import Pageheader from "../../components/common/page-header/pageheader";


const RegisterApplication: FC = () => {
  // Removed unused searchTerm state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "User",
  });
  const [savedMessage, setSavedMessage] = useState(false);
  // Removed unused localUsers state
  // Removed unused roleById state
  // Removed unused selectedUser state
  
  // Removed unused users useMemo

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedMessage(true);
    setTimeout(() => {
      setSavedMessage(false);
      setFormData({ name: "", email: "", phone: "", role: "User" });
    }, 2500);
  };

  // Removed unused handleRoleChange

  // Removed unused handleViewDetails

  return (
    <Fragment>
      <Pageheader currentpage="User Management" activepage="Dashboard" mainpage="Users" />
      
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="box">
            <div className="box-header border-b border-gray-200 dark:border-defaultborder/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Add New User</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Create user and assign role</p>
                </div>
              </div>
            </div>
            <div className="box-body">
              {savedMessage && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-500/10 border-l-4 border-green-500 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-400">User Created!</p>
                      <p className="text-sm text-green-600 dark:text-green-400/80">User has been added and role assigned.</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="form-label text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      className="form-control !rounded-xl pl-10 border-gray-300 dark:border-defaultborder/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter full name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      className="form-control !rounded-xl pl-10 border-gray-300 dark:border-defaultborder/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="email@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      className="form-control !rounded-xl pl-10 border-gray-300 dark:border-defaultborder/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="+250 XXX XXX XXX"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="form-control !rounded-xl border-gray-300 dark:border-defaultborder/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="User">Admin</option>
                    <option value="Staff">Finance</option>
                    <option value="Agent">Staff</option>
                   
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={true}
                  className="w-full bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white font-semibold py-3.5 px-4 rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  Add User
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterApplication;