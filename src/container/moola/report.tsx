import { FC, Fragment, useState, useMemo } from "react";
import Pageheader from "../../components/common/page-header/pageheader";
import { useCollectionTransactions } from "../../hooks/useCollectionTransactions";
import * as XLSX from "xlsx";

type PeriodType = 'today' | 'week' | 'month' | 'quarter' | 'year' | 'all';
type StatusFilter = 'all' | 'success' | 'pending' | 'failed';

const Report: FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('month');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const { data, loading, error } = useCollectionTransactions({ 
    status: statusFilter === 'all' ? 'all' : statusFilter, 
    limit: 1000, 
    offset: 0 
  });

  // Filter data by period and search
  const filteredData = useMemo(() => {
    let filtered = [...data];
    
    // Period filter
    if (selectedPeriod !== 'all') {
      const now = new Date();
      const filterDate = new Date();
      
      switch (selectedPeriod) {
        case 'today':
          filterDate.setHours(0, 0, 0, 0);
          break;
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          break;
        case 'quarter':
          filterDate.setMonth(now.getMonth() - 3);
          break;
        case 'year':
          filterDate.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      filtered = filtered.filter(item => {
        if (!item.createdAt) return false;
        const itemDate = new Date(item.createdAt);
        return itemDate >= filterDate;
      });
    }
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        (item.referenceId?.toLowerCase().includes(query)) ||
        (item.operationReferenceId?.toLowerCase().includes(query)) ||
        (item.customerName?.toLowerCase().includes(query)) ||
        (item.customerAccountNumber?.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [data, selectedPeriod, searchQuery]);

  // Calculate filtered summary
  const filteredSummary = useMemo(() => {
    const summary = {
      total: filteredData.length,
      success: 0,
      pending: 0,
      failed: 0,
      totalAmount: 0
    };
    
    filteredData.forEach(item => {
      const status = item.status?.toUpperCase();
      if (status === 'SUCCESS') summary.success++;
      else if (status === 'PENDING') summary.pending++;
      else if (status === 'FAILED') summary.failed++;
      
      summary.totalAmount += Number(item.amount || 0);
    });
    
    return summary;
  }, [filteredData]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const exportToExcel = () => {
    if (!filteredData.length) return;
    const formatted = filteredData.map((item) => ({
      Reference: item.referenceId || item.operationReferenceId || item.id,
      Customer: item.customerName || "-",
      Account: item.customerAccountNumber || "-",
      Provider: item.provider || "-",
      Amount: item.amount,
      Currency: item.currencyCode || "RWF",
      Status: item.status,
      CreatedAt: item.createdAt,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formatted);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
    XLSX.writeFile(workbook, `moola-report-${selectedPeriod}-${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const exportToPDF = () => {
    window.print();
  };

  const getStatusColor = (status?: string) => {
    const statusUpper = status?.toUpperCase();
    switch (statusUpper) {
      case 'SUCCESS':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'FAILED':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <Fragment>
      <Pageheader currentpage="Report" activepage="Dashboard" mainpage="Reports" />
      
      {/* Filters Section */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12 gap-4">
                {/* Period Filter */}
                <div className="xl:col-span-6 lg:col-span-6 col-span-12">
                  <label className="text-sm font-semibold mb-2 block text-gray-700 dark:text-gray-300">
                    <i className="ri-calendar-line me-1"></i>Time Period
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Today', value: 'today' as PeriodType },
                      { label: 'Week', value: 'week' as PeriodType },
                      { label: 'Month', value: 'month' as PeriodType },
                      { label: 'Quarter', value: 'quarter' as PeriodType },
                      { label: 'Year', value: 'year' as PeriodType },
                      { label: 'All Time', value: 'all' as PeriodType },
                    ].map((period) => (
                      <button
                        key={period.value}
                        onClick={() => {
                          setSelectedPeriod(period.value);
                          setCurrentPage(1);
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedPeriod === period.value
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                        }`}
                      >
                        {period.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div className="xl:col-span-3 lg:col-span-3 col-span-12">
                  <label className="text-sm font-semibold mb-2 block text-gray-700 dark:text-gray-300">
                    <i className="ri-filter-line me-1"></i>Status Filter
                  </label>
                  <select 
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value as StatusFilter);
                      setCurrentPage(1);
                    }}
                    className="ti-form-select rounded-lg"
                  >
                    <option value="all">All Status</option>
                    <option value="success">Success</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>

                {/* Search */}
                <div className="xl:col-span-3 lg:col-span-3 col-span-12">
                  <label className="text-sm font-semibold mb-2 block text-gray-700 dark:text-gray-300">
                    <i className="ri-search-line me-1"></i>Search
                  </label>
                  <input
                    type="text"
                    placeholder="Search by reference, customer..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="ti-form-input rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-1">Total Transactions</p>
          <p className="text-3xl font-bold">{filteredSummary.total.toLocaleString()}</p>
          <p className="text-xs opacity-75 mt-2">{filteredSummary.totalAmount.toLocaleString()} RWF</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-1">Successful</p>
          <p className="text-3xl font-bold">{filteredSummary.success.toLocaleString()}</p>
          <p className="text-xs opacity-75 mt-2">
            {filteredSummary.total > 0 ? ((filteredSummary.success / filteredSummary.total) * 100).toFixed(1) : 0}% success rate
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-1">Pending</p>
          <p className="text-3xl font-bold">{filteredSummary.pending.toLocaleString()}</p>
          <p className="text-xs opacity-75 mt-2">Awaiting processing</p>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-1">Failed</p>
          <p className="text-3xl font-bold">{filteredSummary.failed.toLocaleString()}</p>
          <p className="text-xs opacity-75 mt-2">
            {filteredSummary.total > 0 ? ((filteredSummary.failed / filteredSummary.total) * 100).toFixed(1) : 0}% failure rate
          </p>
        </div>
      </div>

      {/* Report Table */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box">
            <div className="box-header justify-between">
              <div>
                <div className="box-title">Detailed Transactions Report</div>
                <p className="text-xs text-gray-500 mt-1">
                  Showing {paginatedData.length} of {filteredData.length} transactions
                </p>
              </div>
              <div className="flex gap-2">
                <button 
                  className="ti-btn bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                  onClick={exportToPDF}
                  disabled={!filteredData.length}
                >
                  <svg className="w-4 h-4 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Export PDF
                </button>
                <button 
                  className="ti-btn bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  onClick={exportToExcel}
                  disabled={!filteredData.length}
                >
                  <svg className="w-4 h-4 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export Excel
                </button>
              </div>
            </div>
            <div className="box-body">
              {loading && (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                  <span className="ml-3 text-gray-600">Loading report...</span>
                </div>
              )}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}
              {!loading && !error && !filteredData.length && (
                <div className="text-center py-8 text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="font-medium">No transactions found</p>
                  <p className="text-sm text-gray-400 mt-2">Try adjusting your filters</p>
                </div>
              )}
              {!loading && !error && filteredData.length > 0 && (
                <>
                  <div className="table-responsive">
                    <table className="table whitespace-nowrap min-w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                          <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">#</th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Reference</th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Customer</th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Provider</th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Amount</th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Status</th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Created</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedData.map((item, index) => (
                          <tr key={item.id} className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent dark:border-gray-700 dark:hover:from-gray-800 transition-colors">
                            <td className="px-4 py-3 text-sm text-gray-500">
                              {(currentPage - 1) * itemsPerPage + index + 1}
                            </td>
                            <td className="px-4 py-3">
                              <span className="font-mono text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                {(item.referenceId || item.operationReferenceId || item.id).toString().substring(0, 20)}...
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                                  {(item.customerName || "?")[0].toUpperCase()}
                                </div>
                                <div>
                                  <p className="font-medium text-sm text-gray-800 dark:text-gray-200">{item.customerName || "-"}</p>
                                  <p className="text-xs text-gray-500">{item.customerAccountNumber || "-"}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                                {item.provider || "-"}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="font-semibold text-gray-900 dark:text-white">
                                {Number(item.amount || 0).toLocaleString()}
                              </span>
                              <span className="text-xs text-gray-500 ml-1">{item.currencyCode || "RWF"}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border inline-flex items-center gap-1 ${getStatusColor(item.status)}`}>
                                {item.status?.toUpperCase() === 'SUCCESS' && (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                )}
                                {item.status?.toUpperCase() === 'PENDING' && (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                  </svg>
                                )}
                                {item.status?.toUpperCase() === 'FAILED' && (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                )}
                                {item.status?.toUpperCase() || 'UNKNOWN'}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                              {item.createdAt ? new Date(item.createdAt).toLocaleString() : "-"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} results
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                          disabled={currentPage === 1}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                          Previous
                        </button>
                        <div className="flex gap-1">
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                              pageNum = i + 1;
                            } else if (currentPage <= 3) {
                              pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageNum = totalPages - 4 + i;
                            } else {
                              pageNum = currentPage - 2 + i;
                            }
                            return (
                              <button
                                key={pageNum}
                                onClick={() => setCurrentPage(pageNum)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                  currentPage === pageNum
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                }`}
                              >
                                {pageNum}
                              </button>
                            );
                          })}
                        </div>
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Report;
