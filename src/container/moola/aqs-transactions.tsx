import { ChangeEvent, FC, Fragment, useEffect, useMemo, useState, useCallback, useRef } from "react";
import axios from "axios";
import Pageheader from "../../components/common/page-header/pageheader";
import { useLocation } from "react-router-dom";

// ==================== Types ====================
interface ExternalForm {
  _id: string;
  title: string;
  description?: string;
  status?: string;
  country?: string;
  department?: {
    name?: string;
    code?: string;
  };
  analytics?: {
    totalSubmissions?: number;
  };
  createdAt?: string;
  updatedAt?: string;
}

interface CollectorCsvRow {
  username: string;
  fullName: string;
  status: string;
  formId?: string;
}

interface DataCollector {
  id: string | number;
  username: string;
  fullName: string;
  formId: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

interface CollectorFormPayload {
  username: string;
  fullName: string;
  formId: string;
  status: string;
}

type ToastType = "success" | "error";

interface ToastItem {
  id: number;
  type: ToastType;
  message: string;
}

interface ApiResponse<T> {
  forms?: T[];
  collectors?: T[];
  message?: string;
  data?: {
    data?: {
      forms?: T[];
      collectors?: T[];
    };
    forms?: T[];
    collectors?: T[];
    message?: string;
  };
}

// ==================== Constants ====================
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:4000").replace(/\/+$/, "");

const API_ENDPOINTS = {
  FORMS: `${API_BASE_URL}/v1/collection/external/forms`,
  COLLECTORS: `${API_BASE_URL}/v1/collection/datacollectors`,
  BULK_COLLECTORS: `${API_BASE_URL}/v1/collection/datacollectors/bulk`,
} as const;

const CSV_TEMPLATE = [
  "username,fullName,status",
  "liveagent,Alfred Mahame,active",
  "collector2,Jane Doe,active",
].join("\n");

// ==================== Utility Functions ====================
const safeJsonParse = (value: string | null) => {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

const getStoredToken = (): string => {
  const parsed = safeJsonParse(localStorage.getItem("token"));
  return typeof parsed === "string" ? parsed : "";
};

const getAuthHeaders = () => {
  const token = getStoredToken();
  return {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    "Content-Type": "application/json",
  };
};

const formatDateTime = (value?: string) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString();
};

// ==================== CSV Parsing ====================
const parseCsvLine = (line: string): string[] => {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      const nextChar = line[i + 1];
      if (inQuotes && nextChar === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
};

const parseCsvContent = (content: string): CollectorCsvRow[] => {
  const rows = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!rows.length) return [];

  const headers = parseCsvLine(rows[0]).map((header) => header.toLowerCase());

  const usernameIndex = headers.indexOf("username");
  const fullNameIndex = headers.indexOf("fullname");
  const statusIndex = headers.indexOf("status");
  const formIdIndex = headers.indexOf("formid");

  if (usernameIndex === -1 || fullNameIndex === -1 || statusIndex === -1) {
    throw new Error("CSV must include username, fullName, and status columns.");
  }

  return rows.slice(1).map((line) => {
    const cells = parseCsvLine(line);

    return {
      username: cells[usernameIndex] || "",
      fullName: cells[fullNameIndex] || "",
      status: cells[statusIndex] || "",
      formId: formIdIndex >= 0 ? cells[formIdIndex] : undefined,
    };
  });
};

// ==================== Sub-components ====================
interface StatusBadgeProps {
  status: string;
}

const StatusBadge: FC<StatusBadgeProps> = ({ status }) => (
  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400">
    {status || "unknown"}
  </span>
);

interface TableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
  emptyMessage: string;
  loading?: boolean;
  error?: string;
}

function Table<T>({ headers, data, renderRow, emptyMessage, loading, error }: TableProps<T>) {
  if (loading) return <p className="text-sm text-gray-600 dark:text-white/60">Loading...</p>;
  if (error) return <p className="text-sm text-red-500">{error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-defaultborder/10">
            {headers.map((header) => (
              <th key={header} className="text-left text-xs uppercase px-4 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => renderRow(item, index))
          ) : (
            <tr>
              <td colSpan={headers.length} className="px-4 py-8 text-center text-sm text-gray-600 dark:text-white/60">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// ==================== Custom Hooks ====================
const useForms = () => {
  const [forms, setForms] = useState<ExternalForm[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchForms = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get<ApiResponse<ExternalForm>>(API_ENDPOINTS.FORMS, {
        headers: getAuthHeaders(),
      });

      const retrievedForms = response.data?.data?.forms || response.data?.forms || [];
      setForms(retrievedForms);
    } catch (error: any) {
      setError(error?.response?.data?.message || "Failed to load forms from external API.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchForms();
  }, [fetchForms]);

  return { forms, loading, error, refetch: fetchForms };
};

const useCollectors = () => {
  const [collectors, setCollectors] = useState<DataCollector[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCollectors = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get<ApiResponse<DataCollector>>(API_ENDPOINTS.COLLECTORS, {
        headers: getAuthHeaders(),
      });

      const retrievedCollectors = response.data?.data?.collectors || response.data?.collectors || [];
      setCollectors(retrievedCollectors);
    } catch (error: any) {
      setError(error?.response?.data?.message || "Failed to load data collectors.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCollectors();
  }, [fetchCollectors]);

  return { collectors, loading, error, refetch: fetchCollectors };
};

// ==================== Main Component ====================
const AqsTransactions: FC = () => {
  const location = useLocation();
  const { forms, loading: formsLoading, error: formsError, refetch: refetchForms } = useForms();
  const { collectors, loading: collectorsLoading, error: collectorsError, refetch: refetchCollectors } = useCollectors();

  const [selectedFormId, setSelectedFormId] = useState("");
  const [csvRows, setCsvRows] = useState<CollectorCsvRow[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchCollector, setSearchCollector] = useState("");
  const [filterCollectorStatus, setFilterCollectorStatus] = useState("all");
  const [filterCollectorFormId, setFilterCollectorFormId] = useState("all");
  const [collectorPage, setCollectorPage] = useState(1);
  const [collectorPageSize, setCollectorPageSize] = useState(10);
  const [showBulkAssignModal, setShowBulkAssignModal] = useState(false);
  const [showCreateCollectorModal, setShowCreateCollectorModal] = useState(false);
  const [showEditCollectorModal, setShowEditCollectorModal] = useState(false);
  const [showDeleteCollectorModal, setShowDeleteCollectorModal] = useState(false);
  const [collectorToDelete, setCollectorToDelete] = useState<DataCollector | null>(null);
  const [createCollectorForm, setCreateCollectorForm] = useState<CollectorFormPayload>({
    username: "",
    fullName: "",
    formId: "",
    status: "active",
  });
  const [createCollectorLoading, setCreateCollectorLoading] = useState(false);
  const [editingCollectorId, setEditingCollectorId] = useState<string | number | null>(null);
  const [editCollectorForm, setEditCollectorForm] = useState<CollectorFormPayload>({
    username: "",
    fullName: "",
    formId: "",
    status: "active",
  });
  const [updatingCollectorId, setUpdatingCollectorId] = useState<string | number | null>(null);
  const [deletingCollectorId, setDeletingCollectorId] = useState<string | number | null>(null);
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const lastFormsErrorToastRef = useRef("");
  const lastCollectorsErrorToastRef = useRef("");

  const showToast = useCallback((type: ToastType, message: string) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3500);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    if (formsError && formsError !== lastFormsErrorToastRef.current) {
      showToast("error", formsError);
      lastFormsErrorToastRef.current = formsError;
    }
    if (!formsError) {
      lastFormsErrorToastRef.current = "";
    }
  }, [formsError, showToast]);

  useEffect(() => {
    if (collectorsError && collectorsError !== lastCollectorsErrorToastRef.current) {
      showToast("error", collectorsError);
      lastCollectorsErrorToastRef.current = collectorsError;
    }
    if (!collectorsError) {
      lastCollectorsErrorToastRef.current = "";
    }
  }, [collectorsError, showToast]);

  const preparedCollectors = useMemo(() => {
    return csvRows
      .filter((row) => row.username && row.fullName && row.status)
      .map((row) => ({
        username: row.username,
        fullName: row.fullName,
        status: row.status,
        formId: row.formId || selectedFormId,
      }))
      .filter((collector) => Boolean(collector.formId));
  }, [csvRows, selectedFormId]);

  const activeView = useMemo<"all" | "form-list" | "data-collectors">(() => {
    const pathname = location.pathname.toLowerCase();
    if (pathname.includes("/data-collections/form-list")) return "form-list";
    if (pathname.includes("/data-collections/data-collectors")) return "data-collectors";
    if (pathname.includes("/data-collections/add-data-collectors")) return "form-list";
    return "all";
  }, [location.pathname]);

  useEffect(() => {
    if (forms.length > 0 && !selectedFormId) {
      setSelectedFormId(forms[0]._id);
    }
  }, [forms, selectedFormId]);

  useEffect(() => {
    if (forms.length > 0 && !createCollectorForm.formId) {
      setCreateCollectorForm((prev) => ({ ...prev, formId: forms[0]._id }));
    }
  }, [forms, createCollectorForm.formId]);

  const downloadTemplate = useCallback(() => {
    const blob = new Blob([CSV_TEMPLATE], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "collectors-template.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  }, []);

  const onCsvUpload = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const content = await file.text();
      const rows = parseCsvContent(content);
      if (!rows.length) {
        showToast("error", "No data rows found in uploaded CSV.");
        setCsvRows([]);
        return;
      }
      setCsvRows(rows);
      showToast("success", `CSV loaded successfully with ${rows.length} row(s).`);
    } catch (error: any) {
      showToast("error", error?.message || "Failed to parse CSV file.");
      setCsvRows([]);
    }
  }, [showToast]);

  const submitCollectors = useCallback(async () => {
    if (!selectedFormId) {
      showToast("error", "Select a form before submitting collectors.");
      return;
    }

    if (!preparedCollectors.length) {
      showToast("error", "Upload a CSV with valid collectors before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = { collectors: preparedCollectors };
      const response = await axios.post(API_ENDPOINTS.BULK_COLLECTORS, payload, {
        headers: getAuthHeaders(),
      });

      const message = response.data?.message || "Collectors uploaded successfully.";
      showToast("success", message);
      setCsvRows([]);
      refetchCollectors();
    } catch (error: any) {
      showToast("error", error?.response?.data?.message || "Failed to upload collectors in bulk.");
    } finally {
      setIsSubmitting(false);
    }
  }, [selectedFormId, preparedCollectors, refetchCollectors, showToast]);

  const createCollector = useCallback(async () => {
    if (!createCollectorForm.username || !createCollectorForm.fullName || !createCollectorForm.formId || !createCollectorForm.status) {
      showToast("error", "Username, full name, form, and status are required to add a collector.");
      return;
    }

    setCreateCollectorLoading(true);
    try {
      const payload = {
        username: createCollectorForm.username.trim(),
        fullName: createCollectorForm.fullName.trim(),
        formId: createCollectorForm.formId,
        status: createCollectorForm.status,
      };

      const response = await axios.post(API_ENDPOINTS.COLLECTORS, payload, {
        headers: getAuthHeaders(),
      });

      showToast("success", response.data?.message || "Data collector created successfully.");
      setCreateCollectorForm((prev) => ({
        username: "",
        fullName: "",
        formId: prev.formId,
        status: "active",
      }));
      setShowCreateCollectorModal(false);
      refetchCollectors();
    } catch (error: any) {
      showToast("error", error?.response?.data?.message || "Failed to create data collector.");
    } finally {
      setCreateCollectorLoading(false);
    }
  }, [createCollectorForm, refetchCollectors, showToast]);

  const startEditCollector = useCallback((collector: DataCollector) => {
    setEditingCollectorId(collector.id);
    setEditCollectorForm({
      username: collector.username,
      fullName: collector.fullName,
      formId: collector.formId,
      status: collector.status || "active",
    });
    setShowEditCollectorModal(true);
  }, []);

  const cancelEditCollector = useCallback(() => {
    setEditingCollectorId(null);
    setEditCollectorForm({ username: "", fullName: "", formId: "", status: "active" });
    setShowEditCollectorModal(false);
  }, []);

  const saveEditCollector = useCallback(async (collectorId: string | number) => {
    if (!editCollectorForm.username || !editCollectorForm.fullName || !editCollectorForm.formId) {
      showToast("error", "Username, full name, and form are required.");
      return;
    }

    setUpdatingCollectorId(collectorId);

    const payload = {
      username: editCollectorForm.username.trim(),
      fullName: editCollectorForm.fullName.trim(),
      formId: editCollectorForm.formId,
      status: editCollectorForm.status || "active",
    };

    try {
      const response = await axios.put(`${API_ENDPOINTS.COLLECTORS}/${collectorId}`, payload, {
        headers: getAuthHeaders(),
      });

      showToast("success", response.data?.message || "Data collector updated successfully.");
      cancelEditCollector();
      refetchCollectors();
    } catch (error: any) {
      showToast("error", error?.response?.data?.message || "Failed to update data collector.");
    } finally {
      setUpdatingCollectorId(null);
    }
  }, [cancelEditCollector, editCollectorForm, refetchCollectors, showToast]);

  const deleteCollector = useCallback(async (collectorId: string | number) => {
    const collectorIdValue = String(collectorId).trim();
    if (!collectorIdValue) {
      showToast("error", "Invalid collector ID.");
      return;
    }

    setDeletingCollectorId(collectorId);
    try {
      const response = await axios.delete(`${API_ENDPOINTS.COLLECTORS}/${collectorIdValue}`, {
        headers: getAuthHeaders(),
      });
      showToast("success", response.data?.message || "Data collector deleted successfully.");
      refetchCollectors();
      setCollectorToDelete(null);
      setShowDeleteCollectorModal(false);
    } catch (error: any) {
      showToast("error", error?.response?.data?.message || "Failed to delete data collector.");
    } finally {
      setDeletingCollectorId(null);
    }
  }, [refetchCollectors, showToast]);

  const filteredCollectors = useMemo(() => {
    const query = searchCollector.trim().toLowerCase();

    return collectors.filter((collector) => {
      const matchesQuery = query
        ? `${collector.id} ${collector.username} ${collector.fullName} ${collector.formId}`.toLowerCase().includes(query)
        : true;
      const matchesStatus = filterCollectorStatus === "all" ? true : collector.status === filterCollectorStatus;
      const matchesForm = filterCollectorFormId === "all" ? true : collector.formId === filterCollectorFormId;
      return matchesQuery && matchesStatus && matchesForm;
    });
  }, [collectors, filterCollectorFormId, filterCollectorStatus, searchCollector]);

  const collectorTotalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredCollectors.length / collectorPageSize));
  }, [filteredCollectors.length, collectorPageSize]);

  const pagedCollectors = useMemo(() => {
    const start = (collectorPage - 1) * collectorPageSize;
    return filteredCollectors.slice(start, start + collectorPageSize);
  }, [collectorPage, collectorPageSize, filteredCollectors]);

  const collectorStartIndex = filteredCollectors.length === 0 ? 0 : (collectorPage - 1) * collectorPageSize + 1;
  const collectorEndIndex = Math.min(collectorPage * collectorPageSize, filteredCollectors.length);

  const collectorsByForm = useMemo(() => {
    const map: Record<string, number> = {};

    filteredCollectors.forEach((collector) => {
      map[collector.formId] = (map[collector.formId] || 0) + 1;
    });

    return Object.entries(map)
      .map(([formId, count]) => {
        const form = forms.find((item) => item._id === formId);
        return {
          formId,
          formTitle: form?.title || "Unknown Form",
          count,
        };
      })
      .sort((a, b) => b.count - a.count);
  }, [filteredCollectors, forms]);

  const exportCollectorsToCsv = useCallback(() => {
    if (!filteredCollectors.length) {
      showToast("error", "No data collectors available to export.");
      return;
    }

    const headers = ["User ID", "Username", "Full Name", "Form ID", "Form", "Status", "Created At", "Updated At"];

    const rows = filteredCollectors.map((collector) => {
      const formTitle = forms.find((form) => form._id === collector.formId)?.title || "Unknown Form";
      return [
        String(collector.id || ""),
        collector.username || "",
        collector.fullName || "",
        collector.formId || "",
        formTitle,
        collector.status || "",
        collector.createdAt || "",
        collector.updatedAt || "",
      ];
    });

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `data-collectors-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);

    showToast("success", `Exported ${filteredCollectors.length} data collector(s) to CSV.`);
  }, [filteredCollectors, forms, showToast]);

  const collectorMetrics = useMemo(() => {
    const total = filteredCollectors.length;
    const active = filteredCollectors.filter((collector) => collector.status === "active").length;
    const inactive = filteredCollectors.filter((collector) => collector.status === "inactive").length;
    const formsCount = new Set(filteredCollectors.map((collector) => collector.formId)).size;

    return { total, active, inactive, formsCount };
  }, [filteredCollectors]);

  const isBulkSubmitDisabled =
    isSubmitting || !selectedFormId || preparedCollectors.length === 0;

  const isCreateCollectorDisabled =
    createCollectorLoading ||
    !createCollectorForm.username.trim() ||
    !createCollectorForm.fullName.trim() ||
    !createCollectorForm.formId;

  const isEditCollectorDisabled =
    updatingCollectorId === editingCollectorId ||
    !editCollectorForm.username.trim() ||
    !editCollectorForm.fullName.trim() ||
    !editCollectorForm.formId;

  useEffect(() => {
    setCollectorPage(1);
  }, [searchCollector, filterCollectorFormId, filterCollectorStatus, collectorPageSize]);

  useEffect(() => {
    if (collectorPage > collectorTotalPages) {
      setCollectorPage(collectorTotalPages);
    }
  }, [collectorPage, collectorTotalPages]);

  const formTableHeaders = ["Title", "Department", "Status", "Submissions"];
  const collectorTableHeaders = ["User ID", "Username", "Full Name", "Form", "Status", "Created", "Action"];

  return (
    <Fragment>
      <div className="fixed top-24 right-6 z-[400] space-y-3 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto ti-toast shadow-lg border rounded-lg ${
              toast.type === "error"
                ? "bg-red-50 border-red-200 text-red-700 dark:bg-red-500/10 dark:border-red-500/30 dark:text-red-300"
                : "bg-green-50 border-green-200 text-green-700 dark:bg-green-500/10 dark:border-green-500/30 dark:text-green-300"
            }`}
            role="alert"
          >
            <div className="flex items-start gap-2 p-3">
              <span className="text-sm leading-5">{toast.message}</span>
              <button
                type="button"
                className="ms-auto text-xs opacity-70 hover:opacity-100"
                onClick={() => removeToast(toast.id)}
                aria-label="Dismiss notification"
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>

      <Pageheader currentpage="Data Collections" activepage="MOOLA" mainpage="Staff Tools" />

      <div className="space-y-6">
        <div className="space-y-6">
          {(activeView === "all" || activeView === "form-list") && (
            <>
              {/* Form List Section */}
              <div className="box">
                <div className="box-header flex items-center justify-between">
                  <div className="box-title">Form List</div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="ti-btn ti-btn-primary-full"
                      onClick={() => setShowBulkAssignModal(true)}
                    >
                      Bulk Assign Collectors
                    </button>
                    <button type="button" className="ti-btn ti-btn-light" onClick={refetchForms}>
                      Refresh Forms
                    </button>
                  </div>
                </div>
                <div className="box-body">
                  <Table
                    headers={formTableHeaders}
                    data={forms}
                    loading={formsLoading}
                    error={formsError}
                    emptyMessage="No forms returned by API."
                    renderRow={(form: ExternalForm) => (
                      <tr
                        key={form._id}
                        className={`border-b border-gray-100 dark:border-defaultborder/10 ${
                          selectedFormId === form._id ? "bg-primary/5" : ""
                        }`}
                      >
                        <td className="px-4 py-3">
                          <button
                            type="button"
                            className="text-left"
                            onClick={() => setSelectedFormId(form._id)}
                          >
                            <p className="font-semibold text-sm text-gray-900 dark:text-white">{form.title}</p>
                            <p className="text-xs text-gray-600 dark:text-white/60 line-clamp-2">
                              {form.description || "No description"}
                            </p>
                          </button>
                        </td>
                        <td className="px-4 py-3 text-sm">{form.department?.name || "-"}</td>
                        <td className="px-4 py-3 text-sm">
                          <StatusBadge status={form.status || "unknown"} />
                        </td>
                        <td className="px-4 py-3 text-sm">{form.analytics?.totalSubmissions || 0}</td>
                      </tr>
                    )}
                  />
                </div>
              </div>
            </>
          )}

          {(activeView === "all" || activeView === "data-collectors") && (
            <div className="box">
              <div className="box-header flex items-center justify-between">
                <div className="box-title">Data Collectors</div>
                <div className="flex items-center gap-2">
                  <button type="button" className="ti-btn ti-btn-primary-full" onClick={() => setShowBulkAssignModal(true)}>
                    Bulk Assign Collectors
                  </button>
                  <button type="button" className="ti-btn ti-btn-primary-full" onClick={() => setShowCreateCollectorModal(true)}>
                    Add Collector
                  </button>
                  <button type="button" className="ti-btn ti-btn-success" onClick={exportCollectorsToCsv}>
                    Export CSV
                  </button>
                  <button type="button" className="ti-btn ti-btn-light" onClick={refetchCollectors}>
                    Refresh Collectors
                  </button>
                </div>
              </div>
              <div className="box-body space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div className="rounded-xl border border-gray-200 dark:border-defaultborder/10 p-4 bg-gray-50 dark:bg-bodybg2">
                    <p className="text-xs text-gray-500 dark:text-white/60">Total Collectors</p>
                    <p className="text-2xl font-bold mt-1">{collectorMetrics.total}</p>
                  </div>
                  <div className="rounded-xl border border-green-200 dark:border-green-500/20 p-4 bg-green-50 dark:bg-green-500/10">
                    <p className="text-xs text-green-700 dark:text-green-300">Active</p>
                    <p className="text-2xl font-bold mt-1 text-green-700 dark:text-green-300">{collectorMetrics.active}</p>
                  </div>
                  <div className="rounded-xl border border-red-200 dark:border-red-500/20 p-4 bg-red-50 dark:bg-red-500/10">
                    <p className="text-xs text-red-700 dark:text-red-300">Inactive</p>
                    <p className="text-2xl font-bold mt-1 text-red-700 dark:text-red-300">{collectorMetrics.inactive}</p>
                  </div>
                  <div className="rounded-xl border border-blue-200 dark:border-blue-500/20 p-4 bg-blue-50 dark:bg-blue-500/10">
                    <p className="text-xs text-blue-700 dark:text-blue-300">Forms Assigned</p>
                    <p className="text-2xl font-bold mt-1 text-blue-700 dark:text-blue-300">{collectorMetrics.formsCount}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div>
                    <label className="form-label text-xs">Search</label>
                    <input
                      className="form-control"
                      value={searchCollector}
                      onChange={(event) => setSearchCollector(event.target.value)}
                      placeholder="Search by id, username, name..."
                    />
                  </div>
                  <div>
                    <label className="form-label text-xs">Filter Form</label>
                    <select
                      className="form-control"
                      value={filterCollectorFormId}
                      onChange={(event) => setFilterCollectorFormId(event.target.value)}
                    >
                      <option value="all">All forms</option>
                      {forms.map((form) => (
                        <option key={form._id} value={form._id}>{form.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label text-xs">Filter Status</label>
                    <select
                      className="form-control"
                      value={filterCollectorStatus}
                      onChange={(event) => setFilterCollectorStatus(event.target.value)}
                    >
                      <option value="all">All statuses</option>
                      <option value="active">active</option>
                      <option value="inactive">inactive</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <div className="w-full p-3 rounded-lg bg-primary/10 text-primary text-sm font-semibold text-center">
                      Showing {collectorStartIndex}-{collectorEndIndex} of {filteredCollectors.length} filtered ({collectors.length} total)
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-defaultborder/10">
                  <Table
                    headers={collectorTableHeaders}
                    data={pagedCollectors}
                    loading={collectorsLoading}
                    error={collectorsError}
                    emptyMessage="No data collectors found."
                    renderRow={(collector: DataCollector) => (
                      <tr key={collector.id} className="border-b border-gray-100 dark:border-defaultborder/10">
                        <td className="px-4 py-3 text-sm">{collector.id}</td>
                        <td className="px-4 py-3 text-sm">{collector.username}</td>
                        <td className="px-4 py-3 text-sm">{collector.fullName}</td>
                        <td className="px-4 py-3 text-sm">
                          <div>
                            <p className="font-semibold">{forms.find((form) => form._id === collector.formId)?.title || "Unknown Form"}</p>
                            <p className="text-xs text-gray-500">{collector.formId}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <StatusBadge status={collector.status || "unknown"} />
                        </td>
                        <td className="px-4 py-3 text-sm whitespace-nowrap">{formatDateTime(collector.createdAt)}</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              className="ti-btn ti-btn-sm ti-btn-warning"
                              onClick={() => startEditCollector(collector)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="ti-btn ti-btn-sm ti-btn-danger"
                              disabled={deletingCollectorId === collector.id}
                              onClick={() => {
                                setCollectorToDelete(collector);
                                setShowDeleteCollectorModal(true);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600 dark:text-white/60">Rows per page</label>
                    <select
                      className="form-control !w-[100px]"
                      value={collectorPageSize}
                      onChange={(event) => setCollectorPageSize(Number(event.target.value))}
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="ti-btn ti-btn-light"
                      disabled={collectorPage <= 1}
                      onClick={() => setCollectorPage((prev) => Math.max(1, prev - 1))}
                    >
                      Previous
                    </button>
                    <span className="text-sm px-2">Page {collectorPage} of {collectorTotalPages}</span>
                    <button
                      type="button"
                      className="ti-btn ti-btn-light"
                      disabled={collectorPage >= collectorTotalPages}
                      onClick={() => setCollectorPage((prev) => Math.min(collectorTotalPages, prev + 1))}
                    >
                      Next
                    </button>
                  </div>
                </div>

                <div className="box bg-gray-50 dark:bg-bodybg2 border border-gray-200 dark:border-defaultborder/10">
                  <div className="box-header">
                    <div className="box-title">Collectors Count By Form</div>
                  </div>
                  <div className="box-body">
                    <Table
                      headers={["Form", "Form ID", "Collectors"]}
                      data={collectorsByForm}
                      emptyMessage="No collector counts available for current filters."
                      renderRow={(row: { formId: string; formTitle: string; count: number }) => (
                        <tr key={row.formId} className="border-b border-gray-100 dark:border-defaultborder/10">
                          <td className="px-4 py-3 text-sm">{row.formTitle}</td>
                          <td className="px-4 py-3 text-sm">{row.formId}</td>
                          <td className="px-4 py-3 text-sm font-semibold">{row.count}</td>
                        </tr>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {showCreateCollectorModal && (
          <div className="fixed inset-0 z-[250] bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-bodybg rounded-xl shadow-xl w-full max-w-2xl">
              <div className="px-5 py-4 border-b border-gray-200 dark:border-defaultborder/10 flex items-center justify-between">
                <h3 className="text-base font-semibold">Add Data Collector</h3>
                <button
                  type="button"
                  className="ti-btn ti-btn-sm ti-btn-light"
                  onClick={() => setShowCreateCollectorModal(false)}
                >
                  Close
                </button>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label text-xs">Username</label>
                    <input
                      className="form-control"
                      value={createCollectorForm.username}
                      onChange={(event) => setCreateCollectorForm((prev) => ({ ...prev, username: event.target.value }))}
                      placeholder="collector username"
                    />
                  </div>
                  <div>
                    <label className="form-label text-xs">Full Name</label>
                    <input
                      className="form-control"
                      value={createCollectorForm.fullName}
                      onChange={(event) => setCreateCollectorForm((prev) => ({ ...prev, fullName: event.target.value }))}
                      placeholder="collector full name"
                    />
                  </div>
                  <div>
                    <label className="form-label text-xs">Form</label>
                    <select
                      className="form-control"
                      value={createCollectorForm.formId}
                      onChange={(event) => setCreateCollectorForm((prev) => ({ ...prev, formId: event.target.value }))}
                    >
                      <option value="">Select form</option>
                      {forms.map((form) => (
                        <option key={form._id} value={form._id}>{form.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label text-xs">Status</label>
                    <select
                      className="form-control"
                      value={createCollectorForm.status}
                      onChange={(event) => setCreateCollectorForm((prev) => ({ ...prev, status: event.target.value }))}
                    >
                      <option value="active">active</option>
                      <option value="inactive">inactive</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5 flex justify-end gap-2">
                  <button
                    type="button"
                    className="ti-btn ti-btn-light"
                    onClick={() => setShowCreateCollectorModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ti-btn ti-btn-primary-full"
                    onClick={createCollector}
                    disabled={isCreateCollectorDisabled}
                  >
                    {createCollectorLoading ? "Adding..." : "Add Collector"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showBulkAssignModal && (
          <div className="fixed inset-0 z-[245] bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-bodybg rounded-xl shadow-xl w-full max-w-2xl">
              <div className="px-5 py-4 border-b border-gray-200 dark:border-defaultborder/10 flex items-center justify-between">
                <h3 className="text-base font-semibold">Bulk Assign Collectors With CSV</h3>
                <button
                  type="button"
                  className="ti-btn ti-btn-sm ti-btn-light"
                  onClick={() => setShowBulkAssignModal(false)}
                >
                  Close
                </button>
              </div>

              <div className="p-5 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="form-label text-xs">Target Form</label>
                    <select
                      className="form-control"
                      value={selectedFormId}
                      onChange={(event) => setSelectedFormId(event.target.value)}
                    >
                      <option value="">Select form</option>
                      {forms.map((form) => (
                        <option key={form._id} value={form._id}>
                          {form.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="form-label text-xs">Upload CSV</label>
                    <input
                      type="file"
                      accept=".csv,text/csv"
                      className="form-control"
                      onChange={onCsvUpload}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button type="button" className="ti-btn ti-btn-light" onClick={downloadTemplate}>
                    Download Template
                  </button>
                  <button
                    type="button"
                    className="ti-btn ti-btn-primary-full"
                    onClick={submitCollectors}
                    disabled={isBulkSubmitDisabled}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Collectors"}
                  </button>
                </div>

                <div className="p-3 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500/20">
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    CSV columns required: username, fullName, status. Optional columns: formId.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showEditCollectorModal && editingCollectorId !== null && (
          <div className="fixed inset-0 z-[260] bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-bodybg rounded-xl shadow-xl w-full max-w-2xl">
              <div className="px-5 py-4 border-b border-gray-200 dark:border-defaultborder/10 flex items-center justify-between">
                <h3 className="text-base font-semibold">Edit Data Collector</h3>
                <button type="button" className="ti-btn ti-btn-sm ti-btn-light" onClick={cancelEditCollector}>Close</button>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label text-xs">Username</label>
                    <input
                      className="form-control"
                      value={editCollectorForm.username}
                      onChange={(event) => setEditCollectorForm((prev) => ({ ...prev, username: event.target.value }))}
                      placeholder="collector username"
                    />
                  </div>
                  <div>
                    <label className="form-label text-xs">Full Name</label>
                    <input
                      className="form-control"
                      value={editCollectorForm.fullName}
                      onChange={(event) => setEditCollectorForm((prev) => ({ ...prev, fullName: event.target.value }))}
                      placeholder="collector full name"
                    />
                  </div>
                  <div>
                    <label className="form-label text-xs">Form</label>
                    <select
                      className="form-control"
                      value={editCollectorForm.formId}
                      onChange={(event) => setEditCollectorForm((prev) => ({ ...prev, formId: event.target.value }))}
                    >
                      <option value="">Select form</option>
                      {forms.map((form) => (
                        <option key={form._id} value={form._id}>{form.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label text-xs">Status</label>
                    <select
                      className="form-control"
                      value={editCollectorForm.status}
                      onChange={(event) => setEditCollectorForm((prev) => ({ ...prev, status: event.target.value }))}
                    >
                      <option value="active">active</option>
                      <option value="inactive">inactive</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5 flex justify-end gap-2">
                  <button type="button" className="ti-btn ti-btn-light" onClick={cancelEditCollector}>Cancel</button>
                  <button
                    type="button"
                    className="ti-btn ti-btn-primary-full"
                    disabled={isEditCollectorDisabled}
                    onClick={() => saveEditCollector(editingCollectorId)}
                  >
                    {updatingCollectorId === editingCollectorId ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDeleteCollectorModal && collectorToDelete && (
          <div className="fixed inset-0 z-[270] bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-bodybg rounded-xl shadow-xl w-full max-w-lg">
              <div className="px-5 py-4 border-b border-gray-200 dark:border-defaultborder/10">
                <h3 className="text-base font-semibold text-red-600">Warning: Delete Collector</h3>
              </div>
              <div className="p-5 space-y-4">
                <p className="text-sm text-gray-700 dark:text-white/80">
                  Are you sure you want to delete <span className="font-semibold">{collectorToDelete.username}</span>? This action cannot be undone.
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="ti-btn ti-btn-light"
                    onClick={() => {
                      setShowDeleteCollectorModal(false);
                      setCollectorToDelete(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ti-btn ti-btn-danger"
                    disabled={deletingCollectorId === collectorToDelete.id}
                    onClick={() => deleteCollector(collectorToDelete.id)}
                  >
                    {deletingCollectorId === collectorToDelete.id ? "Deleting..." : "Delete Collector"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Fragment>
  );
};

export default AqsTransactions;