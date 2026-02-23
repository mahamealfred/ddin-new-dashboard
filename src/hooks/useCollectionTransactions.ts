import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export interface CollectionTransaction {
  id: number;
  referenceId?: string;
  operationReferenceId?: string;
  provider?: string;
  customerAccountNumber?: string;
  customerName?: string;
  currencyCode?: string;
  amount?: string | number;
  status?: string;
  message?: string;
  agentId?: string;
  transactionId?: string;
  additionalProperties?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}

export interface TransactionSummary {
  total: number;
  success: number;
  pending: number;
  failed: number;
  amount: number;
}

interface UseCollectionTransactionsOptions {
  status?: string;
  limit?: number;
  offset?: number;
  agentId?: string;
}

const normalizeStatus = (status?: string) => String(status || "").toLowerCase();
const statusType = (status?: string) => {
  const normalized = normalizeStatus(status);
  if (normalized.includes("success") || normalized.includes("complete")) return "success";
  if (normalized.includes("pending") || normalized.includes("process")) return "pending";
  if (normalized.includes("fail") || normalized.includes("error") || normalized.includes("reject")) return "failed";
  return "unknown";
};

export const useCollectionTransactions = (options: UseCollectionTransactionsOptions = {}) => {
  const { status = "all", limit = 50, offset = 0, agentId } = options;
  const [data, setData] = useState<CollectionTransaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<TransactionSummary>({
    total: 0,
    success: 0,
    pending: 0,
    failed: 0,
    amount: 0,
  });

  const refresh = useCallback(async () => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("userData");

    if (!storedToken) {
      setError("Missing auth token. Please log in again.");
      return;
    }

    const token = JSON.parse(storedToken);
    const userData = storedUser ? JSON.parse(storedUser) : {};
    const role = String(userData?.role || "").toLowerCase();
    const isCorporate = role === "corporate";

    const endpoint = isCorporate
      ? `${apiBaseUrl}/v1/thirdparty/collection`
      : `${apiBaseUrl}/v1/thirdparty/collection/agent/transactions`;

    const params = {
      ...(isCorporate && agentId ? { agentId } : {}),
      ...(status !== "all" ? { status } : {}),
      limit,
      offset,
    };

    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params,
      });

      const responseData: CollectionTransaction[] = response.data?.data || [];
      setData(responseData);

      const nextSummary = responseData.reduce(
        (acc, item) => {
          acc.total += 1;
          const type = statusType(item.status);
          if (type === "success") acc.success += 1;
          if (type === "pending") acc.pending += 1;
          if (type === "failed") acc.failed += 1;
          acc.amount += Number(item.amount || 0);
          return acc;
        },
        { total: 0, success: 0, pending: 0, failed: 0, amount: 0 } as TransactionSummary
      );

      setSummary(nextSummary);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to load transactions.");
    } finally {
      setLoading(false);
    }
  }, [agentId, limit, offset, status]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { data, loading, error, summary, refresh };
};
