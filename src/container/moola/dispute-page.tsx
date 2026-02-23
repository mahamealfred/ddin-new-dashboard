import { FC, Fragment } from "react";
import Pageheader from "../../components/common/page-header/pageheader";
import { useCollectionTransactions } from "../../hooks/useCollectionTransactions";

const DisputePage: FC = () => {
  const { data, loading, error, summary } = useCollectionTransactions({ status: "failed", limit: 50, offset: 0 });

  return (
    <Fragment>
      <Pageheader currentpage="Dispute Page" activepage="Dashboard" mainpage="Disputes" />
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-1">Failed Transactions</p>
          <p className="text-3xl font-bold">{summary.failed.toLocaleString()}</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-1">Total Amount Failed</p>
          <p className="text-3xl font-bold">
            {data.reduce((sum, item) => sum + Number(item.amount || 0), 0).toLocaleString()} RWF
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-1">Showing Records</p>
          <p className="text-3xl font-bold">{data.length}</p>
        </div>
      </div>

      {/* Disputes Table */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box">
            <div className="box-header justify-between">
              <div className="box-title">Disputed Transactions</div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                  {summary.failed} Failed
                </span>
              </div>
            </div>
            <div className="box-body">
              {loading && (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                  <span className="ml-3 text-gray-600">Loading disputes...</span>
                </div>
              )}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}
              {!loading && !error && !data.length && (
                <div className="text-center py-8 text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>No failed transactions found</p>
                </div>
              )}
              {!loading && !error && data.length > 0 && (
                <div className="table-responsive">
                  <table className="table whitespace-nowrap min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3">Reference</th>
                        <th className="text-left px-4 py-3">Customer</th>
                        <th className="text-left px-4 py-3">Amount</th>
                        <th className="text-left px-4 py-3">Reason</th>
                        <th className="text-left px-4 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                          <td className="px-4 py-3">
                            <span className="font-mono text-sm text-gray-700">
                              {item.referenceId || item.operationReferenceId || item.id}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                {(item.customerName || "?")[0].toUpperCase()}
                              </div>
                              <span>{item.customerName || "-"}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 font-semibold text-red-600">
                            {Number(item.amount || 0).toLocaleString()} {item.currencyCode || "RWF"}
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-sm text-gray-600">{item.message || "No message provided"}</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {item.createdAt ? new Date(item.createdAt).toLocaleString() : "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DisputePage;
