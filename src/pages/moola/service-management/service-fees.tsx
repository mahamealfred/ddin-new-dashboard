import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  X, 
  Search,
  DollarSign,
  Percent,
  User,
  Building2,
  Hash,
  CreditCard,
  Calendar as CalendarIcon,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

const API_URL = 'http://localhost:4000/v1/thirdparty/service-fee';

type ServiceFee = {
  ID?: number;
  agentId: string;
  agentName: string;
  serviceName: string;
  serviceCode: string;
  cyclosTransferTypeId: string;
  fee_type: 'AMOUNT' | 'PERCENTAGE';
  fee_amount: string;
  date?: string;
};

const initialForm: ServiceFee = {
  agentId: '',
  agentName: '',
  serviceName: '',
  serviceCode: '',
  cyclosTransferTypeId: '',
  fee_type: 'AMOUNT',
  fee_amount: '',
};

const FEE_TYPES = [
  { label: 'Fixed Amount', value: 'AMOUNT', icon: DollarSign, color: 'text-blue-600' },
  { label: 'Percentage', value: 'PERCENTAGE', icon: Percent, color: 'text-green-600' },
];

export default function ServiceFeeManagement() {
  const [fees, setFees] = useState<ServiceFee[]>([]);
  const [filteredFees, setFilteredFees] = useState<ServiceFee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [viewing, setViewing] = useState<ServiceFee | null>(null);

  useEffect(() => {
    fetchFees();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredFees(fees);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredFees(fees.filter(fee => 
        fee.agentId.toLowerCase().includes(term) ||
        fee.agentName.toLowerCase().includes(term) ||
        fee.serviceName.toLowerCase().includes(term) ||
        fee.serviceCode.toLowerCase().includes(term)
      ));
    }
  }, [searchTerm, fees]);

  const fetchFees = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(API_URL);
      setFees(res.data.data || []);
    } catch (e) {
      setError('Failed to fetch service fees');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, form);
      } else {
        await axios.post(API_URL, form);
      }
      setShowForm(false);
      setForm(initialForm);
      setEditingId(null);
      fetchFees();
    } catch (e) {
      setError('Failed to save service fee');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (fee: ServiceFee) => {
    setForm({ ...fee });
    setEditingId(typeof fee.ID === 'number' ? fee.ID : null);
    setShowForm(true);
  };

  const handleView = (fee: ServiceFee) => {
    setViewing(fee);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this service fee?')) return;
    setLoading(true);
    setError('');
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchFees();
    } catch (e) {
      setError('Failed to delete service fee');
    } finally {
      setLoading(false);
    }
  };

  const getFeeTypeDisplay = (type: string, amount: string) => {
    if (type === 'AMOUNT') {
      return `${Number(amount).toLocaleString()} RWF`;
    }
    return `${amount}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Service Fee Management
            </h1>
            <p className="text-gray-500 mt-2">Configure and manage service fees for agents</p>
          </div>
          <button
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-medium hover:shadow-lg transition-all flex items-center gap-2 shadow-md"
            onClick={() => { setShowForm(true); setForm(initialForm); setEditingId(null); }}
          >
            <Plus className="w-4 h-4" />
            Add New Service Fee
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-4 mb-8 shadow-sm border border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Agent ID, Agent Name, Service Name, or Service Code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-red-600">{error}</p>
            <button onClick={fetchFees} className="ml-auto px-3 py-1 bg-red-100 rounded-lg text-red-600 text-sm">
              Retry
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 border-3 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4" />
            <p className="text-gray-500">Loading service fees...</p>
          </div>
        )}

        {/* Table */}
        {!loading && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transfer Type</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee Structure</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Created</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredFees.map((fee, index) => {
                    const feeTypeInfo = FEE_TYPES.find(t => t.value === fee.fee_type);
                    const FeeIcon = feeTypeInfo?.icon || DollarSign;
                    return (
                      <tr key={fee.ID || index} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                              <User className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-gray-800 font-medium">{fee.agentName}</p>
                              <p className="text-gray-400 text-sm">ID: {fee.agentId}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-gray-800 font-medium">{fee.serviceName}</p>
                            <p className="text-gray-400 text-sm">Code: {fee.serviceCode}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Hash className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">{fee.cyclosTransferTypeId}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${fee.fee_type === 'AMOUNT' ? 'from-blue-100 to-cyan-100' : 'from-green-100 to-emerald-100'} flex items-center justify-center`}>
                              <FeeIcon className={`w-4 h-4 ${feeTypeInfo?.color || 'text-blue-600'}`} />
                            </div>
                            <div>
                              <p className="text-gray-800 font-medium">{getFeeTypeDisplay(fee.fee_type, fee.fee_amount)}</p>
                              <p className="text-gray-400 text-sm">{fee.fee_type === 'AMOUNT' ? 'Fixed amount' : 'Percentage of transaction'}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-500 text-sm">
                              {fee.date ? new Date(fee.date).toLocaleDateString() : 'N/A'}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleView(fee)}
                              className="p-2 rounded-lg bg-gray-100 text-blue-600 hover:bg-blue-100 transition-all group"
                              title="View"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleEdit(fee)}
                              className="p-2 rounded-lg bg-gray-100 text-green-600 hover:bg-green-100 transition-all group"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => typeof fee.ID === 'number' && handleDelete(fee.ID)}
                              className="p-2 rounded-lg bg-gray-100 text-red-600 hover:bg-red-100 transition-all group"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {filteredFees.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-16 text-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                            <Search className="w-8 h-8 text-gray-400" />
                          </div>
                          <p className="text-gray-500">No service fees found</p>
                          <button
                            onClick={() => { setShowForm(true); setForm(initialForm); setEditingId(null); }}
                            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all"
                          >
                            Add your first service fee
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add/Edit Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl border border-gray-200 shadow-xl">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {editingId ? 'Edit Service Fee' : 'Add New Service Fee'}
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Agent ID</label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        name="agentId"
                        value={form.agentId}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                        placeholder="e.g., AGENT001"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Agent Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        name="agentName"
                        value={form.agentName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                        placeholder="e.g., John Doe"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        name="serviceName"
                        value={form.serviceName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                        placeholder="e.g., Airtime Purchase"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Code</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        name="serviceCode"
                        value={form.serviceCode}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                        placeholder="e.g., AIRTIME_001"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Type ID</label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        name="cyclosTransferTypeId"
                        value={form.cyclosTransferTypeId}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                        placeholder="e.g., T12345"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fee Type</label>
                    <select
                      name="fee_type"
                      value={form.fee_type}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                      {FEE_TYPES.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fee Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      name="fee_amount"
                      value={form.fee_amount}
                      onChange={handleChange}
                      required
                      type="number"
                      step="0.01"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                      placeholder={form.fee_type === 'AMOUNT' ? 'e.g., 500' : 'e.g., 2.5'}
                    />
                  </div>
                </div>
                <div className="flex gap-3 justify-end pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
                  >
                    {editingId ? 'Update Service Fee' : 'Create Service Fee'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* View Modal */}
        {viewing && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md border border-gray-200 shadow-xl">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Service Fee Details
                </h3>
                <button
                  onClick={() => setViewing(null)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="grid gap-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">Agent ID</span>
                      <span className="text-gray-800 font-medium">{viewing.agentId}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">Agent Name</span>
                      <span className="text-gray-800 font-medium">{viewing.agentName}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">Service Name</span>
                      <span className="text-gray-800 font-medium">{viewing.serviceName}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">Service Code</span>
                      <span className="text-gray-800 font-medium">{viewing.serviceCode}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">Transfer Type ID</span>
                      <span className="text-gray-800 font-medium">{viewing.cyclosTransferTypeId}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">Fee Type</span>
                      <span className="text-gray-800 font-medium">{viewing.fee_type === 'AMOUNT' ? 'Fixed Amount' : 'Percentage'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">Fee Amount</span>
                      <span className="text-gray-800 font-medium">
                        {viewing.fee_type === 'AMOUNT' 
                          ? `${Number(viewing.fee_amount).toLocaleString()} RWF`
                          : `${viewing.fee_amount}%`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-500 text-sm">Date Created</span>
                      <span className="text-gray-800 font-medium">
                        {viewing.date ? new Date(viewing.date).toLocaleString() : 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-end p-6 pt-0">
                <button
                  onClick={() => setViewing(null)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}