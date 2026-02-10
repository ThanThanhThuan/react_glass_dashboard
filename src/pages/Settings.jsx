import { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import { useTheme } from '../context/ThemeContext';
import { billingHistory } from '../services/mockData';
import { billingService } from '../services/api'; // Import Service



const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const { theme, setTheme } = useTheme();

    // State for billing list
    const [bills, setBills] = useState([]); // Start empty to prevent hydration mismatch

    // Fetch and Sort Data
    useEffect(() => {
        const loadData = async () => {
            // 1. Fetch raw data from API Service
            const apiRecords = await billingService.getAll();

            // 2. Format API data to match UI requirements
            const formattedApiRecords = apiRecords.map(item => ({
                id: item.id,
                rawDate: new Date(item.date),
                date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                description: item.desc,
                amount: `$${parseFloat(item.amount).toFixed(2)}`,
                status: item.status.charAt(0).toUpperCase() + item.status.slice(1),
                statusClass: item.status.toLowerCase() === 'paid' ? 'completed' :
                    item.status.toLowerCase() === 'pending' ? 'pending' : 'processing'
            }));

            // 3. Combine with mock data and Sort
            const combined = [...formattedApiRecords, ...billingHistory];
            combined.sort((a, b) => b.rawDate - a.rawDate);

            setBills(combined);
        };
        loadData();
    }, []);

    return (
        <div className="settings-grid">
            {/* Settings Navigation */}
            <GlassCard className="settings-nav-card">
                <ul className="settings-nav">
                    <li className="settings-nav-item">
                        <button
                            className={`settings-nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                            style={{ background: 'transparent', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left', fontSize: 'inherit', fontFamily: 'inherit' }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                            </svg>
                            Profile
                        </button>
                    </li>
                    <li className="settings-nav-item">
                        <button
                            className={`settings-nav-link ${activeTab === 'security' ? 'active' : ''}`}
                            onClick={() => setActiveTab('security')}
                            style={{ background: 'transparent', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left', fontSize: 'inherit', fontFamily: 'inherit' }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            Security
                        </button>
                    </li>
                    <li className="settings-nav-item">
                        <button
                            className={`settings-nav-link ${activeTab === 'notifications' ? 'active' : ''}`}
                            onClick={() => setActiveTab('notifications')}
                            style={{ background: 'transparent', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left', fontSize: 'inherit', fontFamily: 'inherit' }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                            Notifications
                        </button>
                    </li>
                    <li className="settings-nav-item">
                        <button
                            className={`settings-nav-link ${activeTab === 'appearance' ? 'active' : ''}`}
                            onClick={() => setActiveTab('appearance')}
                            style={{ background: 'transparent', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left', fontSize: 'inherit', fontFamily: 'inherit' }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" />
                                <path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" />
                            </svg>
                            Appearance
                        </button>
                    </li>
                    <li className="settings-nav-item">
                        <button
                            className={`settings-nav-link ${activeTab === 'billing' ? 'active' : ''}`}
                            onClick={() => setActiveTab('billing')}
                            style={{ background: 'transparent', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left', fontSize: 'inherit', fontFamily: 'inherit' }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
                            </svg>
                            Billing
                        </button>
                    </li>
                </ul>
            </GlassCard>

            {/* Settings Content */}
            <GlassCard>

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                    <div className="settings-tab-content active">
                        <div className="profile-header">
                            <div className="profile-avatar-large">
                                TM
                                <div className="profile-avatar-edit">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="profile-info">
                                <h2>TemplateMo</h2>
                                <p>admin@templatemo.com • Administrator</p>
                            </div>
                        </div>

                        <div className="settings-section">
                            <h3 className="settings-section-title">Profile Information</h3>
                            <div className="form-grid">
                                <div className="form-group-settings">
                                    <label>First Name</label>
                                    <input type="text" defaultValue="Template" />
                                </div>
                                <div className="form-group-settings">
                                    <label>Last Name</label>
                                    <input type="text" defaultValue="Mo" />
                                </div>
                                <div className="form-group-settings">
                                    <label>Email Address</label>
                                    <input type="email" defaultValue="admin@templatemo.com" />
                                </div>
                                <div className="form-group-settings">
                                    <label>Phone Number</label>
                                    <input type="tel" defaultValue="+1 (555) 123-4567" />
                                </div>
                                <div className="form-group-settings full-width">
                                    <label>Bio</label>
                                    <textarea defaultValue="Dashboard template creator and web design enthusiast. Building beautiful interfaces for modern applications."></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="settings-section">
                            <h3 className="settings-section-title">Preferences</h3>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Language</span>
                                    <span className="settings-label-desc">Select your preferred language</span>
                                </div>
                                <select className="settings-select" defaultValue="English (US)">
                                    <option>English (US)</option>
                                    <option>English (UK)</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                    <option>German</option>
                                </select>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Timezone</span>
                                    <span className="settings-label-desc">Set your local timezone</span>
                                </div>
                                <select className="settings-select" defaultValue="UTC -08:00 (Pacific)">
                                    <option>UTC -08:00 (Pacific)</option>
                                    <option>UTC -05:00 (Eastern)</option>
                                    <option>UTC +00:00 (London)</option>
                                    <option>UTC +01:00 (Berlin)</option>
                                    <option>UTC +09:00 (Tokyo)</option>
                                </select>
                            </div>
                        </div>

                        <div className="btn-group">
                            <button className="btn btn-primary" style={{ width: 'auto' }}>Save Changes</button>
                            <button className="btn btn-secondary" style={{ width: 'auto' }}>Cancel</button>
                        </div>
                    </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                    <div className="settings-tab-content active">
                        <div className="settings-section">
                            <h3 className="settings-section-title">Change Password</h3>
                            <div className="form-grid">
                                <div className="form-group-settings full-width">
                                    <label>Current Password</label>
                                    <input type="password" placeholder="Enter current password" />
                                </div>
                                <div className="form-group-settings">
                                    <label>New Password</label>
                                    <input type="password" placeholder="Enter new password" />
                                </div>
                                <div className="form-group-settings">
                                    <label>Confirm New Password</label>
                                    <input type="password" placeholder="Confirm new password" />
                                </div>
                            </div>
                        </div>

                        <div className="settings-section">
                            <h3 className="settings-section-title">Two-Factor Authentication</h3>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Enable 2FA</span>
                                    <span className="settings-label-desc">Add an extra layer of security to your account</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">SMS Authentication</span>
                                    <span className="settings-label-desc">Receive codes via SMS</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Authenticator App</span>
                                    <span className="settings-label-desc">Use Google Authenticator or similar</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        <div className="settings-section">
                            <h3 className="settings-section-title">Active Sessions</h3>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Chrome on MacOS</span>
                                    <span className="settings-label-desc">San Francisco, CA • Current session</span>
                                </div>
                                <span className="status-badge completed">Active</span>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Safari on iPhone</span>
                                    <span className="settings-label-desc">San Francisco, CA • 2 hours ago</span>
                                </div>
                                <button className="card-btn" style={{ padding: '6px 12px' }}>Revoke</button>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Firefox on Windows</span>
                                    <span className="settings-label-desc">New York, NY • 3 days ago</span>
                                </div>
                                <button className="card-btn" style={{ padding: '6px 12px' }}>Revoke</button>
                            </div>
                        </div>

                        <div className="btn-group">
                            <button className="btn btn-primary" style={{ width: 'auto' }}>Update Password</button>
                            <button className="btn btn-secondary" style={{ width: 'auto' }}>Cancel</button>
                        </div>
                    </div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                    <div className="settings-tab-content active">
                        <div className="settings-section">
                            <h3 className="settings-section-title">Email Notifications</h3>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Account Activity</span>
                                    <span className="settings-label-desc">Get notified about sign-ins and security changes</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">New Features</span>
                                    <span className="settings-label-desc">Learn about new features and updates</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Weekly Reports</span>
                                    <span className="settings-label-desc">Receive weekly analytics summary</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Marketing Emails</span>
                                    <span className="settings-label-desc">Receive news about promotions and offers</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        <div className="settings-section">
                            <h3 className="settings-section-title">Push Notifications</h3>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Desktop Notifications</span>
                                    <span className="settings-label-desc">Show notifications on your desktop</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Mobile Push</span>
                                    <span className="settings-label-desc">Receive push notifications on mobile</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Sound</span>
                                    <span className="settings-label-desc">Play sound for notifications</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        <div className="btn-group">
                            <button className="btn btn-primary" style={{ width: 'auto' }}>Save Preferences</button>
                            <button className="btn btn-secondary" style={{ width: 'auto' }}>Reset to Default</button>
                        </div>
                    </div>
                )}

                {/* Appearance Tab */}
                {activeTab === 'appearance' && (
                    <div className="settings-tab-content active">
                        <div className="settings-section">
                            <h3 className="settings-section-title">Theme</h3>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Color Mode</span>
                                    <span className="settings-label-desc">Choose your preferred color mode</span>
                                </div>
                                <select
                                    className="settings-select"
                                    value={theme}
                                    onChange={(e) => setTheme(e.target.value)}
                                >
                                    <option value="dark">Dark Mode</option>
                                    <option value="light">Light Mode</option>
                                </select>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Accent Color</span>
                                    <span className="settings-label-desc">Choose your preferred accent color</span>
                                </div>
                                <select className="settings-select" defaultValue="Emerald (Default)">
                                    <option>Emerald (Default)</option>
                                    <option>Blue</option>
                                    <option>Purple</option>
                                    <option>Orange</option>
                                    <option>Pink</option>
                                </select>
                            </div>
                        </div>

                        <div className="settings-section">
                            <h3 className="settings-section-title">Display</h3>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Compact Mode</span>
                                    <span className="settings-label-desc">Reduce spacing for more content</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Animations</span>
                                    <span className="settings-label-desc">Enable smooth animations and transitions</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Blur Effects</span>
                                    <span className="settings-label-desc">Enable glassmorphism blur effects</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="settings-row">
                                <div className="settings-label">
                                    <span className="settings-label-title">Floating Orbs</span>
                                    <span className="settings-label-desc">Show animated background orbs</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        <div className="btn-group">
                            <button className="btn btn-primary" style={{ width: 'auto' }}>Apply Changes</button>
                            <button className="btn btn-secondary" style={{ width: 'auto' }}>Reset to Default</button>
                        </div>
                    </div>
                )}

                {/* Billing Tab */}
                {activeTab === 'billing' && (
                    <div className="settings-tab-content active">
                        <div className="settings-section">
                            <h3 className="settings-section-title">Current Plan</h3>
                            <div className="billing-plan-card" style={{ background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15), rgba(212, 165, 116, 0.15))', padding: '24px', borderRadius: '16px', marginBottom: '20px', border: '1px solid var(--glass-border)' }}>
                                {/* ... Plan Details ... */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <div><h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>Pro Plan</h4><p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Billed monthly</p></div>
                                    <div style={{ textAlign: 'right' }}><span style={{ fontFamily: "'Space Mono', monospace", fontSize: '32px', fontWeight: '700' }}>$29</span><span style={{ color: 'var(--text-muted)' }}>/month</span></div>
                                </div>
                                <div style={{ display: 'flex', gap: '12px' }}><button className="btn btn-primary" style={{ width: 'auto', padding: '10px 20px' }}>Upgrade Plan</button><button className="btn btn-secondary" style={{ width: 'auto', padding: '10px 20px' }}>Cancel Subscription</button></div>
                            </div>
                        </div>

                        <div className="settings-section">
                            <h3 className="settings-section-title">Billing History</h3>
                            <div className="table-wrapper" style={{ margin: 0 }}>
                                <table className="data-table" style={{ minWidth: '100%' }}>
                                    <thead>
                                        <tr><th>Date</th><th>Description</th><th>Amount</th><th>Status</th><th>Invoice</th></tr>
                                    </thead>
                                    <tbody>
                                        {bills.map((bill) => (
                                            <tr key={bill.id}>
                                                <td>{bill.date}</td>
                                                <td>{bill.description}</td>
                                                <td><span className="table-amount">{bill.amount}</span></td>
                                                <td><span className={`status-badge ${bill.statusClass}`}>{bill.status}</span></td>
                                                <td><button style={{ background: 'none', border: 'none', color: 'var(--emerald-light)', cursor: 'pointer' }}>Download</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </GlassCard>
        </div>
    );
};

export default Settings;