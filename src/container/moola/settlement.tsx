import { FC, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pageheader from "../../components/common/page-header/pageheader";

const Settlement: FC = () => {
  const [balance, setBalance] = useState<string>("-");
  // Removed unused businessAccount state
  const [autoSettlementEnabled, setAutoSettlementEnabled] = useState<boolean>(false);
  const [autoSettlementDuration, setAutoSettlementDuration] = useState<string>("Daily");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [includeZeroAmount, setIncludeZeroAmount] = useState<boolean>(false);
  const [goToPage, setGoToPage] = useState<string>("1");
  const [itemsPerPage, setItemsPerPage] = useState<string>("10");

  useEffect(() => {
    const storedAutoEnabled = localStorage.getItem("settlement_auto_enabled");
    const storedAutoDuration = localStorage.getItem("settlement_auto_duration");

    if (storedAutoEnabled !== null) {
      setAutoSettlementEnabled(storedAutoEnabled === "true");
    }
    if (storedAutoDuration) {
      setAutoSettlementDuration(storedAutoDuration);
    }

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
    const storedToken = localStorage.getItem("token");
    if (!storedToken) return;

    const fetchBusinessAccount = async () => {
      try {
        const token = JSON.parse(storedToken);
        const response = await axios.get(`${apiBaseUrl}/v1/agency/accounts/all/accounts/info/balance`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.data?.success) {
          const allAccounts = response.data.accounts || response.data.data?.accounts || [];
          const business = allAccounts.find((acc: any) => acc.accountName === "Agent Business Account");
          // Removed setBusinessAccount (unused)
          setBalance(business ? (business.formattedAvailableBalance || business.formattedBalance) : "-");
        }
      } catch {
        setBalance("-");
        // Removed setBusinessAccount (unused)
      }
    };

    fetchBusinessAccount();
  }, []);

  useEffect(() => {
    localStorage.setItem("settlement_auto_enabled", String(autoSettlementEnabled));
    localStorage.setItem("settlement_auto_duration", autoSettlementDuration);
  }, [autoSettlementEnabled, autoSettlementDuration]);

  const resetFilters = () => {
    setFromDate("");
    setToDate("");
    setIncludeZeroAmount(false);
    setGoToPage("1");
    setItemsPerPage("10");
  };

  return (
    <Fragment>
      <Pageheader currentpage="Settlement" activepage="Dashboard" mainpage="Settlement" />

      {/* Hero Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full -mr-36 -mt-36"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white opacity-5 rounded-full -ml-28 -mb-28"></div>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-sm opacity-90 mb-2 font-medium">Settlement Wallet</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm opacity-80">Available Balance</p>
                  <p className="text-4xl font-bold mt-1 tracking-tight">{balance} RWF</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Settlement Service Active
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link 
                to={`${import.meta.env.BASE_URL}moola/bank-details`} 
                className="px-5 py-2.5 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl text-white font-medium transition-all duration-200"
              >
                Manage Bank Details
              </Link>
              <button 
                type="button" 
                className="px-5 py-2.5 bg-white text-purple-600 hover:bg-gray-100 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Run Manual Settlement
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="box animate-fade-in">
          <div className="box-body">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-gray-500 dark:text-white/60 uppercase tracking-wider">Total Amount Settled</p>
              <div className="w-8 h-8 bg-green-100 dark:bg-green-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">0 RWF</p>
            <p className="text-xs text-gray-500 dark:text-white/60 mt-2">No settlement amount recorded yet</p>
          </div>
        </div>

        <div className="box animate-fade-in animation-delay-100">
          <div className="box-body">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-gray-500 dark:text-white/60 uppercase tracking-wider">Pending Settlement</p>
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mt-2">Date: N/A - N/A</p>
            <p className="text-xs text-gray-500 dark:text-white/60 mt-2">Awaiting eligible transactions</p>
          </div>
        </div>

        <div className="box animate-fade-in animation-delay-200">
          <div className="box-body">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-gray-500 dark:text-white/60 uppercase tracking-wider">Auto Settlement</p>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${autoSettlementEnabled ? 'bg-blue-100 dark:bg-blue-500/10' : 'bg-gray-100 dark:bg-gray-500/10'}`}>
                <svg className={`w-4 h-4 ${autoSettlementEnabled ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
              {autoSettlementEnabled ? "Enabled" : "Disabled"}
            </p>
            <p className="text-xs text-gray-500 dark:text-white/60 mt-2">Duration: {autoSettlementDuration}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 space-y-6">
          {/* Services Section */}
          <div className="box animate-fade-in">
            <div className="box-header border-b border-gray-200 dark:border-defaultborder/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Services</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Bank account and settlement details</p>
                </div>
              </div>
            </div>
            <div className="box-body space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-white/60 mb-1">Bank Name</p>
                  <p className="font-semibold text-gray-900 dark:text-white">N/A</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-white/60 mb-1">Account Name</p>
                  <p className="font-semibold text-gray-900 dark:text-white">N/A</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-white/60 mb-1">Account Number</p>
                  <p className="font-semibold text-gray-900 dark:text-white">N/A</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-white/60 mb-1">Currency</p>
                  <p className="font-semibold text-gray-900 dark:text-white">N/A</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-white/60 mb-1">Settlement Amount</p>
                  <p className="font-semibold text-gray-900 dark:text-white">N/A</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-500/10 rounded-lg border border-blue-200 dark:border-blue-500/20">
                <p className="text-sm text-blue-700 dark:text-blue-400">AzamPay Service Commission included.</p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-500/10 rounded-lg border border-yellow-200 dark:border-yellow-500/20">
                <p className="text-sm text-yellow-700 dark:text-yellow-400">* Please register a bank account before using this feature.</p>
              </div>
            </div>
          </div>

          {/* Settlement History Section */}
          <div className="box animate-fade-in animation-delay-100">
            <div className="box-header border-b border-gray-200 dark:border-defaultborder/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Settlement History</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">View and filter settlement records</p>
                </div>
              </div>
            </div>
            <div className="box-body !p-0">
              <div className="p-6 border-b border-gray-200 dark:border-defaultborder/10 bg-gray-50 dark:bg-white/5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div>
                    <label className="form-label text-xs font-semibold text-gray-600 dark:text-white/60 mb-2">From Date</label>
                    <input
                      type="date"
                      className="form-control rounded-lg border-gray-300 dark:border-defaultborder/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      value={fromDate}
                      onChange={(event) => setFromDate(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label text-xs font-semibold text-gray-600 dark:text-white/60 mb-2">To Date</label>
                    <input
                      type="date"
                      className="form-control rounded-lg border-gray-300 dark:border-defaultborder/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      value={toDate}
                      onChange={(event) => setToDate(event.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2 pb-2">
                    <input
                      type="checkbox"
                      className="form-check-input rounded border-gray-300"
                      id="includeZeroAmount"
                      checked={includeZeroAmount}
                      onChange={(event) => setIncludeZeroAmount(event.target.checked)}
                    />
                    <label htmlFor="includeZeroAmount" className="text-sm text-gray-700 dark:text-white/80">
                      Include Zero Amount Settlements
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" className="ti-btn ti-btn-primary-full flex-1">Apply</button>
                    <button type="button" className="ti-btn ti-btn-light flex-1" onClick={resetFilters}>Reset</button>
                  </div>
                </div>
              </div>

              <div className="px-6 py-3 bg-white dark:bg-bodybg border-b border-gray-200 dark:border-defaultborder/10 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-gray-600 dark:text-white/60">Showing 0 records out of 0</span>
                <span className="text-gray-600 dark:text-white/60">Page 1 of 0</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-white/60">Go to</span>
                  <input
                    type="number"
                    className="form-control max-w-[72px] rounded-lg"
                    value={goToPage}
                    onChange={(event) => setGoToPage(event.target.value)}
                  />
                  <span className="text-gray-600 dark:text-white/60">Page</span>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-gray-600 dark:text-white/60">Items per page</span>
                  <select
                    className="form-control max-w-[90px] rounded-lg"
                    value={itemsPerPage}
                    onChange={(event) => setItemsPerPage(event.target.value)}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-defaultborder/10">
                  <thead className="bg-gray-50 dark:bg-black/20">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Vendor Name</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Date Range</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Created At</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Transaction Fee %</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Reservation %</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Settled Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Bank Name</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Account Name</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">No. Of Transactions</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-bodybg divide-y divide-gray-200 dark:divide-defaultborder/10">
                    <tr>
                      <td colSpan={13} className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M7 8h10M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-gray-700 dark:text-white/80">No Record Found</p>
                          <p className="text-xs text-gray-500 dark:text-white/60">Once settlements are processed, records appear here.</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 space-y-6">
          {/* Auto Settlement Card */}
          <div className="box animate-fade-in animation-delay-200">
            <div className="box-header border-b border-gray-200 dark:border-defaultborder/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Auto Settlement</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Configure automatic settlements</p>
                </div>
              </div>
            </div>
            <div className="box-body space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                <p className="text-sm font-medium text-gray-800 dark:text-white">Activate Auto Settlement</p>
                <input
                  type="checkbox"
                  checked={autoSettlementEnabled}
                  onChange={(event) => setAutoSettlementEnabled(event.target.checked)}
                  className="form-check-input w-5 h-5 rounded border-gray-300"
                />
              </div>

              <div>
                <label className="form-label text-xs font-semibold text-gray-600 dark:text-white/60 mb-2">Auto Settlement Duration</label>
                <select
                  className="form-control rounded-lg border-gray-300 dark:border-defaultborder/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  value={autoSettlementDuration}
                  onChange={(event) => setAutoSettlementDuration(event.target.value)}
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2 border-t border-gray-200 dark:border-defaultborder/10">
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-white/60 mb-1">Next Settlement</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-white/60 mb-1">Previous Settlement</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">Date: N/A - N/A</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-white/60 mb-1">Account Number</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-white/60 mb-1">Settlement Amount</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
              </div>
            </div>
          </div>

          {/* Readiness Checklist */}
          <div className="box animate-fade-in animation-delay-300">
            <div className="box-header border-b border-gray-200 dark:border-defaultborder/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Readiness Checklist</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Requirements for settlement</p>
                </div>
              </div>
            </div>
            <div className="box-body space-y-3">
              <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-500/10 rounded-lg border border-yellow-200 dark:border-yellow-500/20">
                <span className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5"></span>
                <p className="text-sm text-gray-700 dark:text-white/80">Bank details should be registered.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-500/10 rounded-lg border border-green-200 dark:border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5"></span>
                <p className="text-sm text-gray-700 dark:text-white/80">Settlement service is available.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-500/10 rounded-lg border border-yellow-200 dark:border-yellow-500/20">
                <span className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5"></span>
                <p className="text-sm text-gray-700 dark:text-white/80">Review auto-settlement duration before activation.</p>
              </div>
              <Link 
                to={`${import.meta.env.BASE_URL}moola/bank-details`} 
                className="ti-btn ti-btn-primary-full w-full mt-2"
              >
                Go to Bank Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </Fragment>
  );
};

export default Settlement;