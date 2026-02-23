import { FC, Fragment, useMemo, useState } from "react";
import Pageheader from "../../components/common/page-header/pageheader";
import { CollectionTransaction, useCollectionTransactions } from "../../hooks/useCollectionTransactions";

type PeriodType = "today" | "week" | "month" | "quarter" | "year" | "custom";
type SortType = "newest" | "oldest" | "amount_desc" | "amount_asc";

const toDateInput = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getTransactionDate = (item: CollectionTransaction): Date | null => {
  const raw = item.createdAt || item.updatedAt;
  if (!raw) return null;

  const direct = new Date(raw);
  if (!Number.isNaN(direct.getTime())) return direct;

  const normalized = String(raw).replace(" UTC", "Z");
  const fallback = new Date(normalized);
  if (!Number.isNaN(fallback.getTime())) return fallback;

  return null;
};

const normalizeStatus = (status?: string) => String(status || "").toLowerCase();

const TransactionDetails: FC = () => {
  const today = new Date();
  const defaultFrom = new Date(today);
  defaultFrom.setDate(today.getDate() - 30);

  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("month");
  const [fromDate, setFromDate] = useState<string>(toDateInput(defaultFrom));
  const [toDate, setToDate] = useState<string>(toDateInput(today));
  const [appliedFromDate, setAppliedFromDate] = useState<string>(toDateInput(defaultFrom));
  const [appliedToDate, setAppliedToDate] = useState<string>(toDateInput(today));

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState<SortType>("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransaction, setSelectedTransaction] = useState<CollectionTransaction | null>(null);

  const pageSize = 10;

  const { data, loading, error } = useCollectionTransactions({
    status: "all",
    limit: 300,
    offset: 0,
  });

  const applyQuickPeriod = (period: Exclude<PeriodType, "custom">) => {
    const now = new Date();
    const start = new Date(now);
    setSelectedPeriod(period);

    if (period === "today") {
      start.setHours(0, 0, 0, 0);
    } else if (period === "week") {
      const day = now.getDay();
      const diffToMonday = day === 0 ? 6 : day - 1;
      start.setDate(now.getDate() - diffToMonday);
      start.setHours(0, 0, 0, 0);
    } else if (period === "month") {
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
    } else if (period === "quarter") {
      start.setDate(now.getDate() - 90);
      start.setHours(0, 0, 0, 0);
    } else if (period === "year") {
      start.setMonth(0, 1);
      start.setHours(0, 0, 0, 0);
    }

    const startInput = toDateInput(start);
    const endInput = toDateInput(now);
    setFromDate(startInput);
    setToDate(endInput);
    setAppliedFromDate(startInput);
    setAppliedToDate(endInput);
    setCurrentPage(1);
  };

  const applyCustomRange = () => {
    setSelectedPeriod("custom");
    setAppliedFromDate(fromDate);
    setAppliedToDate(toDate);
    setCurrentPage(1);
  };

  const periodTransactions = useMemo(() => {
    const from = new Date(`${appliedFromDate}T00:00:00`);
    const to = new Date(`${appliedToDate}T23:59:59`);

    return data.filter((item) => {
      const created = getTransactionDate(item);
      if (!created) return false;
      return created.getTime() >= from.getTime() && created.getTime() <= to.getTime();
    });
  }, [data, appliedFromDate, appliedToDate]);

  const metrics = useMemo(() => {
    const summary = periodTransactions.reduce(
      (acc, item) => {
        const status = normalizeStatus(item.status);
        acc.total += 1;
        if (status.includes("success") || status.includes("complete")) acc.success += 1;
        else if (status.includes("pending") || status.includes("process")) acc.pending += 1;
        else if (status.includes("fail") || status.includes("error") || status.includes("reject")) acc.failed += 1;
        else acc.pending += 1;
        acc.amount += Number(item.amount || 0);
        return acc;
      },
      { total: 0, success: 0, pending: 0, failed: 0, amount: 0 }
    );

    return {
      ...summary,
      successRate: summary.total > 0 ? Math.round((summary.success / summary.total) * 100) : 0,
      pendingRate: summary.total > 0 ? Math.round((summary.pending / summary.total) * 100) : 0,
      failedRate: summary.total > 0 ? Math.round((summary.failed / summary.total) * 100) : 0,
    };
  }, [periodTransactions]);

  const tableRows = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    const filtered = periodTransactions.filter((item) => {
      const status = normalizeStatus(item.status);
      const matchesStatus = statusFilter === "all" ? true : status.includes(statusFilter);
      const combined = `${item.referenceId || item.operationReferenceId || item.id} ${item.customerName || ""} ${
        item.customerAccountNumber || ""
      } ${item.provider || ""}`
        .toLowerCase()
        .trim();

      return matchesStatus && combined.includes(query);
    });

    return filtered.sort((a, b) => {
      const timeA = getTransactionDate(a)?.getTime() || 0;
      const timeB = getTransactionDate(b)?.getTime() || 0;
      const amountA = Number(a.amount || 0);
      const amountB = Number(b.amount || 0);

      if (sortBy === "newest") return timeB - timeA;
      if (sortBy === "oldest") return timeA - timeB;
      if (sortBy === "amount_desc") return amountB - amountA;
      return amountA - amountB;
    });
  }, [periodTransactions, searchTerm, statusFilter, sortBy]);

  const topProviders = useMemo(() => {
    const providerMap: Record<string, { count: number; amount: number }> = {};

    tableRows.forEach((item) => {
      const provider = String(item.provider || "Unknown");
      if (!providerMap[provider]) {
        providerMap[provider] = { count: 0, amount: 0 };
      }
      providerMap[provider].count += 1;
      providerMap[provider].amount += Number(item.amount || 0);
    });

    return Object.entries(providerMap)
      .map(([provider, values]) => ({ provider, ...values }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 5);
  }, [tableRows]);

  const totalPages = Math.max(1, Math.ceil(tableRows.length / pageSize));
  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return tableRows.slice(start, start + pageSize);
  }, [tableRows, currentPage]);

  const exportToCsv = () => {
    const header = ["Transaction ID", "Customer", "Description", "Amount", "Status", "Date"];
    const rows = tableRows.map((item) => [
      String(item.referenceId || item.operationReferenceId || item.id),
      String(item.customerName || "-"),
      `${item.provider || "-"} • ${item.customerAccountNumber || "-"}`,
      `${Number(item.amount || 0)} ${item.currencyCode || "RWF"}`,
      String(item.status || "-"),
      getTransactionDate(item)?.toLocaleString() || "-",
    ]);

    const csvContent = [header, ...rows]
      .map((row) => row.map((col) => `"${String(col).split('"').join('""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `transactions_${appliedFromDate}_to_${appliedToDate}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const getStatusBadge = (status?: string) => {
    const normalized = normalizeStatus(status);
    const cls = normalized.includes("success") || normalized.includes("complete")
      ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
      : normalized.includes("pending") || normalized.includes("process")
      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
      : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400";

    return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${cls}`}>{normalized || "unknown"}</span>;
  };

  return (
    <Fragment>
      <Pageheader currentpage="Transactions" activepage="MOOLA" mainpage="Transaction Details" />

      <div className="box mb-6">
        <div className="box-header">
          <div className="box-title">Filter Range</div>
        </div>
        <div className="box-body space-y-4">
          <div className="flex flex-wrap gap-2">
            <button type="button" className={`ti-btn ${selectedPeriod === "today" ? "ti-btn-primary-full" : "ti-btn-light"}`} onClick={() => applyQuickPeriod("today")}>Today</button>
            <button type="button" className={`ti-btn ${selectedPeriod === "week" ? "ti-btn-primary-full" : "ti-btn-light"}`} onClick={() => applyQuickPeriod("week")}>This Week</button>
            <button type="button" className={`ti-btn ${selectedPeriod === "month" ? "ti-btn-primary-full" : "ti-btn-light"}`} onClick={() => applyQuickPeriod("month")}>This Month</button>
            <button type="button" className={`ti-btn ${selectedPeriod === "quarter" ? "ti-btn-primary-full" : "ti-btn-light"}`} onClick={() => applyQuickPeriod("quarter")}>Last 90 Days</button>
            <button type="button" className={`ti-btn ${selectedPeriod === "year" ? "ti-btn-primary-full" : "ti-btn-light"}`} onClick={() => applyQuickPeriod("year")}>This Year</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div>
              <label className="form-label text-xs">From</label>
              <input type="date" className="form-control" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            </div>
            <div>
              <label className="form-label text-xs">To</label>
              <input type="date" className="form-control" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </div>
            <div className="md:col-span-2 flex items-end">
              <button type="button" className="ti-btn ti-btn-primary-full w-full md:w-auto" onClick={applyCustomRange}>Apply Custom Range</button>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-white/60">Applied: {appliedFromDate} to {appliedToDate}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <div className="box"><div className="box-body"><p className="text-sm text-gray-600 dark:text-white/60">Total Transactions</p><p className="text-2xl font-bold">{metrics.total}</p></div></div>
        <div className="box"><div className="box-body"><p className="text-sm text-gray-600 dark:text-white/60">Completed</p><p className="text-2xl font-bold text-green-600">{metrics.success}</p><p className="text-xs text-gray-500">{metrics.successRate}%</p></div></div>
        <div className="box"><div className="box-body"><p className="text-sm text-gray-600 dark:text-white/60">Pending</p><p className="text-2xl font-bold text-yellow-600">{metrics.pending}</p><p className="text-xs text-gray-500">{metrics.pendingRate}%</p></div></div>
        <div className="box"><div className="box-body"><p className="text-sm text-gray-600 dark:text-white/60">Failed</p><p className="text-2xl font-bold text-red-600">{metrics.failed}</p><p className="text-xs text-gray-500">{metrics.failedRate}%</p></div></div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div className="box xl:col-span-2">
          <div className="box-header"><div className="box-title">Status Distribution</div></div>
          <div className="box-body space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1"><span>Success</span><span>{metrics.success}</span></div>
              <div className="h-2 bg-gray-100 dark:bg-white/10 rounded"><div className="h-2 bg-green-500 rounded" style={{ width: `${metrics.successRate}%` }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1"><span>Pending</span><span>{metrics.pending}</span></div>
              <div className="h-2 bg-gray-100 dark:bg-white/10 rounded"><div className="h-2 bg-yellow-500 rounded" style={{ width: `${metrics.pendingRate}%` }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1"><span>Failed</span><span>{metrics.failed}</span></div>
              <div className="h-2 bg-gray-100 dark:bg-white/10 rounded"><div className="h-2 bg-red-500 rounded" style={{ width: `${metrics.failedRate}%` }}></div></div>
            </div>
            <div className="pt-2 border-t border-gray-200 dark:border-defaultborder/10">
              <p className="text-sm text-gray-600 dark:text-white/60">Total Amount</p>
              <p className="text-2xl font-bold">{metrics.amount.toLocaleString()} RWF</p>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="box-header"><div className="box-title">Top Providers</div></div>
          <div className="box-body space-y-3">
            {topProviders.length === 0 && <p className="text-sm text-gray-600 dark:text-white/60">No provider data</p>}
            {topProviders.map((item) => (
              <div key={item.provider} className="p-3 rounded-lg border border-gray-200 dark:border-defaultborder/10">
                <p className="font-semibold text-sm">{item.provider}</p>
                <p className="text-xs text-gray-500">{item.count} transactions</p>
                <p className="text-sm font-medium mt-1">{item.amount.toLocaleString()} RWF</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="box mb-6">
        <div className="box-header">
          <div className="flex items-center justify-between w-full gap-3 flex-wrap">
            <div>
              <div className="box-title">Transactions</div>
              <p className="text-sm text-gray-600 dark:text-white/60">{tableRows.length}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <select className="form-control" value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}>
                <option value="all">All Status</option>
                <option value="success">Success</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
              <input className="form-control" placeholder="Search Here" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }} />
              <select className="form-control" value={sortBy} onChange={(e) => { setSortBy(e.target.value as SortType); setCurrentPage(1); }}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="amount_desc">Amount High-Low</option>
                <option value="amount_asc">Amount Low-High</option>
              </select>
              <button className="ti-btn ti-btn-success-full" onClick={exportToCsv}>Export CSV</button>
            </div>
          </div>
        </div>

        <div className="box-body !p-0">
          {loading && <div className="p-6 text-center text-sm text-gray-600 dark:text-white/60">Loading transactions...</div>}
          {error && <div className="p-6 text-center text-sm text-red-600">{error}</div>}

          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-defaultborder/10">
                <thead className="bg-gray-50 dark:bg-black/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Transaction ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Description</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-defaultborder/10">
                  {paginatedRows.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 text-sm">{item.referenceId || item.operationReferenceId || item.id}</td>
                      <td className="px-6 py-4 text-sm">{item.customerName || "-"}</td>
                      <td className="px-6 py-4 text-sm">{item.provider || "-"} • {item.customerAccountNumber || "-"}</td>
                      <td className="px-6 py-4 text-sm">{Number(item.amount || 0).toLocaleString()} {item.currencyCode || "RWF"}</td>
                      <td className="px-6 py-4">{getStatusBadge(item.status)}</td>
                      <td className="px-6 py-4 text-sm">{getTransactionDate(item)?.toLocaleString() || "-"}</td>
                      <td className="px-6 py-4">
                        <button className="ti-btn ti-btn-sm ti-btn-primary-full" onClick={() => setSelectedTransaction(item)}>
                          View
                        </button>
                      </td>
                    </tr>
                  ))}

                  {paginatedRows.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-sm text-gray-600 dark:text-white/60">No transactions found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="box-footer">
          <div className="flex items-center justify-between">
            <button className="ti-btn ti-btn-light" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}>Previous</button>
            <span className="text-sm">Page {currentPage} of {totalPages}</span>
            <button className="ti-btn ti-btn-light" onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>
      </div>

      {selectedTransaction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-bodybg rounded-xl shadow-xl max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Transaction Details</h3>
              <button className="ti-btn ti-btn-light" onClick={() => setSelectedTransaction(null)}>Close</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <p><span className="text-gray-500">Reference:</span> {selectedTransaction.referenceId || selectedTransaction.operationReferenceId || selectedTransaction.id}</p>
              <p><span className="text-gray-500">Customer:</span> {selectedTransaction.customerName || "-"}</p>
              <p><span className="text-gray-500">Account:</span> {selectedTransaction.customerAccountNumber || "-"}</p>
              <p><span className="text-gray-500">Provider:</span> {selectedTransaction.provider || "-"}</p>
              <p><span className="text-gray-500">Amount:</span> {Number(selectedTransaction.amount || 0).toLocaleString()} {selectedTransaction.currencyCode || "RWF"}</p>
              <p><span className="text-gray-500">Status:</span> {String(selectedTransaction.status || "-")}</p>
              <p className="md:col-span-2"><span className="text-gray-500">Date:</span> {getTransactionDate(selectedTransaction)?.toLocaleString() || "-"}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default TransactionDetails;
