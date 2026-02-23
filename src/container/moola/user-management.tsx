import { FC, Fragment, useMemo, useState } from "react";
import Pageheader from "../../components/common/page-header/pageheader";
import { useCollectionTransactions } from "../../hooks/useCollectionTransactions";

interface ApplicationItem {
  id: string | number;
  name: string;
  phone: string;
  status: string;
  role: string;
}

const UserManagement: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [localApplications, setLocalApplications] = useState<ApplicationItem[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Corporate",
    role: "User",
  });

  const { data, loading, error } = useCollectionTransactions({ status: "all", limit: 50, offset: 0 });

  const recentApplications = useMemo(() => {
    const mappedFromTransactions: ApplicationItem[] = data.slice(0, 10).map((item) => ({
      id: item.id,
      name: item.customerName || "Unknown",
      phone: item.customerAccountNumber || "N/A",
      status: item.status || "failed",
      role: "User",
    }));

    const combined = [...localApplications, ...mappedFromTransactions];
    const query = searchTerm.toLowerCase();

    return combined
      .filter((item) =>
        `${item.name} ${item.phone} ${item.role}`.toLowerCase().includes(query)
      )
      .slice(0, 10);
  }, [data, localApplications, searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newApplication: ApplicationItem = {
      id: `local-${Date.now()}`,
      name: formData.name,
      phone: formData.phone,
      status: "success",
      role: formData.role,
    };

    setLocalApplications((prev) => [newApplication, ...prev]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "Corporate",
        role: "User",
      });
    }, 2500);
  };

  return (
    <Fragment>
      <Pageheader currentpage="Register Application" activepage="Dashboard" mainpage="Applications" />

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
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">New Application</h3>
                <p className="text-sm text-gray-600 dark:text-white/60">Register a new applicant</p>
              </div>
            </div>
          </div>
          <div className="box-body">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-500/10 border-l-4 border-green-500 rounded-lg">
                <p className="font-semibold text-green-700 dark:text-green-400">User added successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="form-label text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                  Applicant Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="form-control !rounded-xl"
                  placeholder="Enter full name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="form-label text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="form-control !rounded-xl"
                  placeholder="email@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="form-label text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="form-control !rounded-xl"
                  placeholder="+250 XXX XXX XXX"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="form-label text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  className="form-control !rounded-xl"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Corporate">Corporate</option>
                  <option value="Agent">Agent</option>
                </select>
              </div>

              <div>
                <label className="form-label text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                  Role <span className="text-red-500">*</span>
                </label>
                <select
                  className="form-control !rounded-xl"
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
                className="w-full bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white font-semibold py-3.5 px-4 rounded-xl"
              >
                Submit Application
              </button>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-500/10 rounded-xl border border-blue-200 dark:border-blue-500/20">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Submissions are stored when backend registration integration is enabled.
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="box animate-fade-in">
          <div className="box-header border-b border-gray-200 dark:border-defaultborder/10 pb-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Applications</h3>
                <p className="text-sm text-gray-600 dark:text-white/60">Latest submitted applications</p>
              </div>
              <input
                className="form-control !rounded-xl max-w-[220px]"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>
          <div className="box-body">
            {loading && <div className="text-sm text-[#8c9097]">Loading applications...</div>}
            {error && <div className="text-red-500">{error}</div>}
            {!loading && !error && (
              <div className="space-y-3">
                {recentApplications.map((item) => (
                  <div key={item.id} className="p-4 border border-gray-200 dark:border-defaultborder/10 rounded-xl">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">{(item.name || "U").charAt(0).toUpperCase()}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                          <p className="text-xs text-gray-600 dark:text-white/60">{item.phone}</p>
                          <p className="text-xs text-gray-600 dark:text-white/60">Role: {item.role}</p>
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          item.status === "success"
                            ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                            : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
                {recentApplications.length === 0 && (
                  <div className="text-center py-8 text-sm text-gray-600 dark:text-white/60">No applications found</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserManagement;
