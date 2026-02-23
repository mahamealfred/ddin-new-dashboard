import { FC, Fragment, useMemo, useState } from "react";
import Pageheader from "../../components/common/page-header/pageheader";

interface UserItem {
  id: string | number;
  name: string;
  phone: string;
  email: string;
  status: string;
  role: string;
}

const RegisterApplication: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "User",
  });
  const [savedMessage, setSavedMessage] = useState(false);
  const [localUsers, setLocalUsers] = useState<UserItem[]>([
    { id: "1", name: "Alfred Mahame", phone: "250789595309", email: "-", role: "Corporate", status: "success" },
    { id: "2", name: "Alfred Mahame", phone: "250789595309", email: "-", role: "User", status: "success" },
    { id: "3", name: "Alfred Mahame", phone: "250789595309", email: "-", role: "User", status: "success" },
    { id: "4", name: "Alfred Mahame", phone: "250789595309", email: "-", role: "User", status: "success" },
    { id: "5", name: "Alfred Mahame", phone: "250789595309", email: "-", role: "Admin", status: "failed" },
    { id: "6", name: "Alfred Mahame", phone: "250789595309", email: "-", role: "User", status: "failed" },
    { id: "7", name: "Alfred Mahame", phone: "250789595308", email: "-", role: "User", status: "success" },
    { id: "8", name: "Alfred Mahame", phone: "250789595308", email: "-", role: "User", status: "success" },
    { id: "9", name: "Alfred Mahame", phone: "250789595309", email: "-", role: "User", status: "success" },
    { id: "10", name: "Alfred Mahame", phone: "250789595309", email: "-", role: "User", status: "failed" },
  ]);
  const [roleById, setRoleById] = useState<Record<string, string>>({});
  const [selectedUser, setSelectedUser] = useState<UserItem | null>(null);
  
  const users = useMemo(() => {
    const query = searchTerm.toLowerCase();
    const withLocalRoles = localUsers.map((user) => ({
      ...user,
      role: roleById[String(user.id)] || user.role,
    }));

    return withLocalRoles
      .filter((item) =>
        `${item.name} ${item.phone} ${item.email} ${item.role}`.toLowerCase().includes(query)
      )
      .slice(0, 10);
  }, [searchTerm, localUsers, roleById]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: UserItem = {
      id: `local-${Date.now()}`,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      status: "success",
      role: formData.role,
    };
    setLocalUsers((prev) => [newItem, ...prev]);
    setRoleById((prev) => ({ ...prev, [String(newItem.id)]: newItem.role }));
    setSavedMessage(true);
    setTimeout(() => {
      setSavedMessage(false);
      setFormData({ name: "", email: "", phone: "", role: "User" });
    }, 2500);
  };

  const handleRoleChange = (id: string | number, role: string) => {
    setRoleById((prev) => ({ ...prev, [String(id)]: role }));
  };

  const handleViewDetails = (user: UserItem) => {
    setSelectedUser(user);
  };

  return (
    <Fragment>
      <Pageheader currentpage="User Management" activepage="Dashboard" mainpage="Users" />
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="box animate-fade-in">
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
                  <option value="User">User</option>
                  <option value="Staff">Staff</option>
                  <option value="Agent">Agent</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white font-semibold py-3.5 px-4 rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Add User
              </button>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-500/10 rounded-xl border border-blue-200 dark:border-blue-500/20">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    New users added here appear instantly in the user list with their assigned role.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="box animate-fade-in">
          <div className="box-header border-b border-gray-200 dark:border-defaultborder/10 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Users List</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Search users and assign roles</p>
                </div>
              </div>
              <div className="relative w-full sm:w-[240px]">
                <input
                  className="form-control !rounded-xl pl-10 pr-4 py-2 text-sm border-gray-300 dark:border-defaultborder/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="box-body">
            {
              <div>
                <div className="overflow-x-auto">
                  <table className="table min-w-[760px] w-full">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th className="hidden md:table-cell">Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center text-sm text-gray-600 dark:text-white/60 py-6">
                            No users found
                          </td>
                        </tr>
                      ) : (
                        users.map((item) => (
                          <tr key={item.id}>
                            <td className="whitespace-nowrap">{item.name || "Unknown"}</td>
                            <td className="whitespace-nowrap">{item.phone || "N/A"}</td>
                            <td className="hidden md:table-cell whitespace-nowrap">{item.email || "-"}</td>
                            <td>
                              <select
                                className="form-control !rounded-lg !py-1.5 !text-xs min-w-[130px]"
                                value={item.role}
                                onChange={(event) => handleRoleChange(item.id, event.target.value)}
                              >
                                <option value="User">User</option>
                                <option value="Staff">Staff</option>
                                <option value="Agent">Agent</option>
                                <option value="Corporate">Corporate</option>
                                <option value="Admin">Admin</option>
                              </select>
                            </td>
                            <td>
                              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                                item.status === "success"
                                  ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                                  : item.status === "pending"
                                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
                                  : "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400"
                              }`}>
                                {item.status}
                              </span>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="ti-btn ti-btn-sm ti-btn-primary-full whitespace-nowrap"
                                onClick={() => handleViewDetails(item)}
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {selectedUser && (
                  <div className="mt-5 p-4 rounded-xl border border-gray-200 dark:border-defaultborder/10 bg-gray-50 dark:bg-bodybg2">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">User Details</h4>
                      <button type="button" className="text-xs text-primary" onClick={() => setSelectedUser(null)}>
                        Close
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <p><span className="text-gray-500 dark:text-white/60">Name:</span> {selectedUser.name || "Unknown"}</p>
                      <p><span className="text-gray-500 dark:text-white/60">Phone:</span> {selectedUser.phone || "N/A"}</p>
                      <p><span className="text-gray-500 dark:text-white/60">Email:</span> {selectedUser.email || "-"}</p>
                      <p><span className="text-gray-500 dark:text-white/60">Role:</span> {selectedUser.role || "User"}</p>
                      <p><span className="text-gray-500 dark:text-white/60">Status:</span> {selectedUser.status || "-"}</p>
                      <p><span className="text-gray-500 dark:text-white/60">User ID:</span> {selectedUser.id}</p>
                    </div>
                  </div>
                )}
              </div>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterApplication;
