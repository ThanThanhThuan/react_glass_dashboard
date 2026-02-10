// src/pages/Users.jsx
import GlassCard from '../components/GlassCard';
import { userStats, usersList } from '../services/mockData';

const Users = () => {
    return (
        <>
            {/* Stats Cards */}
            <section className="stats-grid">
                {userStats.map((stat) => (
                    <GlassCard key={stat.id} tilt={true} className="stat-card">
                        <div className="stat-card-inner">
                            <div className="stat-info">
                                <h3>{stat.label}</h3>
                                <div className="stat-value">{stat.value}</div>
                                <span className={`stat-change ${stat.changeType}`}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        {stat.changeType === 'positive' ? (
                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                        ) : (
                                            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                                        )}
                                    </svg>
                                    {stat.change}
                                </span>
                            </div>
                            <div className={`stat-icon ${stat.iconColor}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke={stat.iconColor === 'success' ? 'var(--success)' : stat.iconColor === 'magenta' ? 'var(--gold)' : stat.iconColor === 'cyan' ? 'var(--emerald-light)' : 'var(--coral)'} strokeWidth="2">
                                    {stat.icon}
                                </svg>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </section>

            {/* Users Table */}
            <section className="content-grid" style={{ gridTemplateColumns: '1fr' }}>
                <GlassCard className="table-card" style={{ gridColumn: 'span 1' }}>
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">All Users</h2>
                            <p className="card-subtitle">Manage your user base</p>
                        </div>
                        <div className="card-actions">
                            <button className="card-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
                                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                                Add User
                            </button>
                            <button className="card-btn">Export</button>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Joined</th>
                                    <th>Last Active</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersList.map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                            <div className="table-user">
                                                <div className="table-avatar" style={{ background: `linear-gradient(135deg, ${user.color[0]}, ${user.color[1]})` }}>{user.avatar}</div>
                                                <div className="table-user-info">
                                                    <span className="table-user-name">{user.name}</span>
                                                    <span className="table-user-email">{user.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{user.role}</td>
                                        <td><span className={`status-badge ${user.statusClass}`}>{user.status}</span></td>
                                        <td>{user.joined}</td>
                                        <td>{user.lastActive}</td>
                                        <td>
                                            <button className="card-btn" style={{ padding: '6px 12px' }}>Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </section>
        </>
    );
};

export default Users;