import { FC, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pageheader from "../../components/common/page-header/pageheader";

const Settlement: FC = () => {
  const [balance, setBalance] = useState<string>("-");
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
      } catch {
        setBalance("-");
      }
    };

    fetchBalance();
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

      <div className="mb-6">
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-xl shadow-xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-sm opacity-90 mb-2">Settlement Wallet</p>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Settlement Service Active
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link to={`${import.meta.env.BASE_URL}moola/bank-details`} className="ti-btn ti-btn-light-full">
                Manage Bank Details
              </Link>
              <button type="button" className="ti-btn ti-btn-primary-full">
                Run Manual Settlement
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="box">
          <div className="box-body">
            <p className="text-xs text-gray-500 dark:text-white/60 uppercase tracking-wide">Total Amount Settled</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">0</p>
            <p className="text-xs text-gray-500 dark:text-white/60 mt-1">No settlement amount recorded yet</p>
          </div>
        </div>
        <div className="box">
          <div className="box-body">
            <p className="text-xs text-gray-500 dark:text-white/60 uppercase tracking-wide">Pending Settlement</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mt-2">Date: N/A - N/A</p>
            <p className="text-xs text-gray-500 dark:text-white/60 mt-1">Awaiting eligible transactions</p>
          </div>
        </div>
        <div className="box">
          <div className="box-body">
            <p className="text-xs text-gray-500 dark:text-white/60 uppercase tracking-wide">Auto Settlement</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mt-2">{autoSettlementEnabled ? "Enabled" : "Disabled"}</p>
            <p className="text-xs text-gray-500 dark:text-white/60 mt-1">Duration: {autoSettlementDuration}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 space-y-6">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Services</div>
            </div>
            <div className="box-body space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Settlements</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-white/60">Bank Name</p>
                  <p className="font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-white/60">Account Name</p>
                  <p className="font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-white/60">Account Number</p>
                  <p className="font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-white/60">Currency</p>
                  <p className="font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-white/60">Settlement Amount</p>
                  <p className="font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-white/60">AzamPay Service Commission included.</p>
              <p className="text-sm text-warning">* Please register a bank account before using this feature.</p>
            </div>
          </div>

          <div className="box">
            <div className="box-header">
              <div className="box-title">Settlement History</div>
            </div>
            <div className="box-body !p-0">
              <div className="p-6 border-b border-gray-200 dark:border-defaultborder/10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div>
                    <label className="form-label text-xs text-gray-600 dark:text-white/60">From</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="DD/MM/YYYY"
                      value={fromDate}
                      onChange={(event) => setFromDate(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label text-xs text-gray-600 dark:text-white/60">To</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="DD/MM/YYYY"
                      value={toDate}
                      onChange={(event) => setToDate(event.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2 md:pb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="includeZeroAmount"
                      checked={includeZeroAmount}
                      onChange={(event) => setIncludeZeroAmount(event.target.checked)}
                    />
                    <label htmlFor="includeZeroAmount" className="text-sm text-gray-700 dark:text-white/80">
                      Include Zero Amount Settlements
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" className="ti-btn ti-btn-primary-full w-full">Apply</button>
                    <button type="button" className="ti-btn ti-btn-light w-full" onClick={resetFilters}>Reset</button>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 text-sm text-gray-600 dark:text-white/60 flex flex-wrap items-center gap-3 border-b border-gray-200 dark:border-defaultborder/10">
                <span>Showing 0 records out of 0</span>
                <span>Page1 of 0</span>
                <span>GoTo</span>
                <input
                  type="text"
                  className="form-control max-w-[72px]"
                  value={goToPage}
                  onChange={(event) => setGoToPage(event.target.value)}
                />
                <span>Page</span>
                <span>Items per page</span>
                <select
                  className="form-control max-w-[90px]"
                  value={itemsPerPage}
                  onChange={(event) => setItemsPerPage(event.target.value)}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
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
                      <td colSpan={13} className="px-6 py-10 text-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="box">
            <div className="box-header">
              <div className="box-title">Auto Settlement</div>
            </div>
            <div className="box-body space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-800 dark:text-white">Activate Auto Settlement</p>
                <input
                  type="checkbox"
                  checked={autoSettlementEnabled}
                  onChange={(event) => setAutoSettlementEnabled(event.target.checked)}
                  className="form-check-input"
                />
              </div>

              <div>
                <label className="form-label text-xs text-gray-600 dark:text-white/60">Auto Settlement Duration</label>
                <select
                  className="form-control"
                  value={autoSettlementDuration}
                  onChange={(event) => setAutoSettlementDuration(event.target.value)}
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2 border-t border-gray-200 dark:border-defaultborder/10">
                <div>
                  <p className="text-xs text-gray-500 dark:text-white/60">Next Settlement</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-white/60">Previous Settlement</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">Date: N/A - N/A</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-white/60">Account Number</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-white/60">Settlement Amount</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">N/A</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-header">
              <div className="box-title">Readiness Checklist</div>
            </div>
            <div className="box-body space-y-3">
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-warning mt-2"></span>
                <p className="text-sm text-gray-700 dark:text-white/80">Bank details should be registered.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-success mt-2"></span>
                <p className="text-sm text-gray-700 dark:text-white/80">Settlement service is available.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-warning mt-2"></span>
                <p className="text-sm text-gray-700 dark:text-white/80">Review auto-settlement duration before activation.</p>
              </div>
              <Link to={`${import.meta.env.BASE_URL}moola/bank-details`} className="ti-btn ti-btn-light w-full mt-2">
                Go to Bank Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Settlement;
