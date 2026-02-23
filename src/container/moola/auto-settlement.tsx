import { ChangeEvent, FC, FormEvent, Fragment, useEffect, useState } from "react";
import Pageheader from "../../components/common/page-header/pageheader";
import axios from "axios";

interface BankFormData {
  serviceName: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  currency: string;
}

const AutoSettlement: FC = () => {
  const [balance, setBalance] = useState<string>("-");
  const [bankList, setBankList] = useState<BankFormData[]>([]);
  const [formData, setFormData] = useState<BankFormData>({
    serviceName: "DDIN",
    bankName: "",
    accountName: "",
    accountNumber: "",
    currency: "RWF",
  });

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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBank = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newBank: BankFormData = {
      serviceName: formData.serviceName.trim() || "DDIN",
      bankName: formData.bankName.trim(),
      accountName: formData.accountName.trim(),
      accountNumber: formData.accountNumber.trim(),
      currency: formData.currency,
    };

    setBankList((prev) => [newBank, ...prev]);

    setFormData({
      serviceName: "DDIN",
      bankName: "",
      accountName: "",
      accountNumber: "",
      currency: "RWF",
    });
  };

  return (
    <Fragment>
      <Pageheader currentpage="Bank Details" activepage="Dashboard" mainpage="Settlement" />

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
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="box">
          <div className="box-header">
            <div className="box-title">Add Bank for Auto Settlement</div>
          </div>
          <div className="box-body">
            <form onSubmit={handleAddBank} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="form-label text-xs text-gray-600 dark:text-white/60">Service Name</label>
                <input
                  type="text"
                  name="serviceName"
                  value={formData.serviceName}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Service Name"
                />
              </div>
              <div>
                <label className="form-label text-xs text-gray-600 dark:text-white/60">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Bank Name"
                  required
                />
              </div>
              <div>
                <label className="form-label text-xs text-gray-600 dark:text-white/60">Account Name</label>
                <input
                  type="text"
                  name="accountName"
                  value={formData.accountName}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Account Name"
                  required
                />
              </div>
              <div>
                <label className="form-label text-xs text-gray-600 dark:text-white/60">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Account Number"
                  required
                />
              </div>
              <div>
                <label className="form-label text-xs text-gray-600 dark:text-white/60">Currency</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="RWF">RWF</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <button type="submit" className="ti-btn ti-btn-primary-full">
                  Add Bank
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="box">
          <div className="box-header">
            <div className="box-title">Bank Details List</div>
          </div>
          <div className="box-body !p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-defaultborder/10">
                <thead className="bg-gray-50 dark:bg-black/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Service Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Bank Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Account Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Account Number</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Currency</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-bodybg divide-y divide-gray-200 dark:divide-defaultborder/10">
                  {bankList.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-6 text-sm text-center text-gray-500 dark:text-white/60">
                        No bank details added yet.
                      </td>
                    </tr>
                  ) : (
                    bankList.map((bank, index) => (
                      <tr key={`${bank.accountNumber}-${index}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{bank.serviceName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-white/80">{bank.bankName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-white/80">{bank.accountName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-white/80">{bank.accountNumber}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-white/80">{bank.currency}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AutoSettlement;
