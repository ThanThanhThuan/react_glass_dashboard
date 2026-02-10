/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import { billingService } from '../services/api'; // Import Service

const Admin = () => {
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ type: '', message: '' });
    const [records, setRecords] = useState([]);
    const [editingId, setEditingId] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        desc: '',
        amount: '',
        status: 'paid',
        date: new Date().toISOString().slice(0, 16)
    });

    // --- 1. FETCH RECORDS ---
    const fetchRecords = async () => {
        const list = await billingService.getAll();
        // Sort by date descending
        list.sort((a, b) => new Date(b.date) - new Date(a.date));
        setRecords(list);
    };

    useEffect(() => {
        fetchRecords();
    }, []);

    // --- 2. HANDLE FORM CHANGE ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // --- 3. HANDLE CREATE / UPDATE ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setNotification({ type: '', message: '' });

        const formattedDate = formData.date.replace('T', ' ') + ':00';

        const payload = {
            sub_table: "billing",
            date: formattedDate,
            desc: formData.desc,
            amount: parseFloat(formData.amount),
            status: formData.status
        };

        try {
            if (editingId) {
                await billingService.update(editingId, payload);
                setNotification({ type: 'success', message: 'Record updated successfully!' });
            } else {
                await billingService.create(payload);
                setNotification({ type: 'success', message: 'Bill added successfully!' });
            }

            // Reset form
            setFormData({
                desc: '',
                amount: '',
                status: 'paid',
                date: new Date().toISOString().slice(0, 16)
            });
            setEditingId(null);
            fetchRecords();

        } catch (error) {
            setNotification({ type: 'error', message: error.message || 'Operation failed' });
        } finally {
            setLoading(false);
        }
    };

    // --- 4. PREPARE EDIT ---
    const handleEdit = (item) => {
        setEditingId(item.id);
        let inputDate = '';
        try {
            const d = new Date(item.date);
            const offset = d.getTimezoneOffset() * 60000;
            inputDate = new Date(d.getTime() - offset).toISOString().slice(0, 16);
        } catch (e) {
            inputDate = new Date().toISOString().slice(0, 16);
        }

        setFormData({
            desc: item.desc,
            amount: item.amount,
            status: item.status,
            date: inputDate
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- 5. CANCEL EDIT ---
    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData({
            desc: '',
            amount: '',
            status: 'paid',
            date: new Date().toISOString().slice(0, 16)
        });
    };

    // --- 6. HANDLE DELETE ---
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this record?")) return;

        try {
            await billingService.delete(id);
            setRecords(prev => prev.filter(item => item.id !== id));
            setNotification({ type: 'success', message: 'Record deleted successfully' });
        } catch (error) {
            setNotification({ type: 'error', message: 'Failed to delete record' });
        }
    };

    return (
        <div className="content-grid" style={{ gridTemplateColumns: '1fr' }}>
            {/* ... (JSX Remains identical to previous step) ... */}
            {/* ... I will omit the JSX strictly for brevity, copy the JSX from the previous Admin.jsx exactly ... */}
            <GlassCard className="chart-card" style={{ minHeight: 'auto', marginBottom: '24px' }}>
                <div className="card-header">
                    <div>
                        <h2 className="card-title">{editingId ? 'Edit Billing Record' : 'Add New Billing Record'}</h2>
                        <p className="card-subtitle">{editingId ? `Editing ID: ${editingId}` : 'Add new billing records to database'}</p>
                    </div>
                </div>
                <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px 0' }}>
                    {notification.message && (
                        <div style={{
                            padding: '12px 16px', marginBottom: '20px', borderRadius: '8px',
                            background: notification.type === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(220, 38, 38, 0.2)',
                            border: `1px solid ${notification.type === 'success' ? 'var(--success)' : 'var(--danger)'}`,
                            color: notification.type === 'success' ? 'var(--success)' : '#ff8888',
                            display: 'flex', alignItems: 'center', gap: '10px'
                        }}>
                            {notification.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <input type="text" name="desc" className="form-input" placeholder="e.g. Pro Plan - Monthly" value={formData.desc} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Amount ($)</label>
                            <input type="number" name="amount" step="0.01" className="form-input" placeholder="0.00" value={formData.amount} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Date</label>
                            <input type="datetime-local" name="date" className="form-input" value={formData.date} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Status</label>
                            <select name="status" className="form-input" value={formData.status} onChange={handleChange} style={{ appearance: 'auto' }}>
                                <option value="paid" style={{ color: 'black' }}>Paid</option>
                                <option value="pending" style={{ color: 'black' }}>Pending</option>
                                <option value="failed" style={{ color: 'black' }}>Failed</option>
                            </select>
                        </div>
                        <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
                            <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} disabled={loading}>{loading ? 'Saving...' : (editingId ? 'Update Record' : 'Add Record')}</button>
                            {editingId && <button type="button" className="btn btn-secondary" style={{ width: 'auto' }} onClick={handleCancelEdit}>Cancel</button>}
                        </div>
                    </form>
                </div>
            </GlassCard>

            <GlassCard className="table-card" style={{ gridColumn: 'span 1' }}>
                <div className="card-header">
                    <div>
                        <h2 className="card-title">Database Records</h2>
                        <p className="card-subtitle">Live data from NoCodeBackend ({records.length} records)</p>
                    </div>
                    <button className="card-btn" onClick={fetchRecords} title="Refresh Data">Refresh</button>
                </div>
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr><th>Date</th><th>Description</th><th>Amount</th><th>Status</th><th>Actions</th></tr>
                        </thead>
                        <tbody>
                            {records.length === 0 ? (
                                <tr><td colSpan="5" style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>No records found in database.</td></tr>
                            ) : (
                                records.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.date}</td>
                                        <td>{item.desc}</td>
                                        <td><span className="table-amount">${parseFloat(item.amount).toFixed(2)}</span></td>
                                        <td><span className={`status-badge ${item.status.toLowerCase() === 'paid' ? 'completed' : item.status.toLowerCase() === 'pending' ? 'pending' : 'processing'}`}>{item.status}</span></td>
                                        <td style={{ display: 'flex', gap: '8px' }}>
                                            <button className="card-btn" style={{ padding: '6px 12px' }} onClick={() => handleEdit(item)}>Edit</button>
                                            <button className="card-btn" style={{ padding: '6px 12px', borderColor: 'var(--danger)', color: '#ff8888' }} onClick={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    );
};

export default Admin;