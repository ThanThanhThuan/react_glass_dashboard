// src/pages/Dashboard.jsx
import GlassCard from '../components/GlassCard';
import {
    dashboardStats,
    revenueChartData,
    recentActivity,
    recentTransactions,
    projectProgress
} from '../services/mockData';

const Dashboard = () => {
    return (
        <>
            {/* Stats Cards */}
            <section className="stats-grid">
                {dashboardStats.map((stat) => (
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

            {/* Content Grid */}
            <section className="content-grid">
                {/* Chart Card */}
                <GlassCard className="chart-card">
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">Revenue Analytics</h2>
                            <p className="card-subtitle">Monthly revenue overview</p>
                        </div>
                        <div className="card-actions">
                            <button className="card-btn active">Monthly</button>
                            <button className="card-btn">Weekly</button>
                            <button className="card-btn">Daily</button>
                        </div>
                    </div>
                    <div className="chart-wrapper">
                        <div className="chart-container">
                            <div className="chart-y-axis">
                                <span className="y-value">$100K</span>
                                <span className="y-value">$80K</span>
                                <span className="y-value">$60K</span>
                                <span className="y-value">$40K</span>
                                <span className="y-value">$20K</span>
                                <span className="y-value">$0</span>
                            </div>
                            <div className="chart-placeholder">
                                {revenueChartData.map((bar, index) => (
                                    <div key={index} className="chart-bar-group">
                                        <div className={`chart-bar ${bar.color}`} style={{ height: bar.height }}></div>
                                        <span className="chart-label">{bar.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Activity Feed */}
                <GlassCard className="activity-card">
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">Recent Activity</h2>
                            <p className="card-subtitle">Latest transactions</p>
                        </div>
                    </div>
                    <div className="activity-list">
                        {recentActivity.map((item) => (
                            <div key={item.id} className="activity-item">
                                <div
                                    className="activity-avatar"
                                    style={{ background: `linear-gradient(135deg, ${item.color[0]}, ${item.color[1]})` }}
                                >
                                    {item.avatar}
                                </div>
                                <div className="activity-content">
                                    <p className="activity-text"><strong>{item.name}</strong> {item.action}</p>
                                    <span className="activity-time">{item.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Data Table */}
                <GlassCard className="table-card">
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">Recent Transactions</h2>
                            <p className="card-subtitle">Latest orders and payments</p>
                        </div>
                        <div className="card-actions">
                            <button className="card-btn">View All</button>
                            <button className="card-btn">Export</button>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Product</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTransactions.map((tx) => (
                                    <tr key={tx.id}>
                                        <td>
                                            <div className="table-user">
                                                <div className="table-avatar" style={{ background: `linear-gradient(135deg, ${tx.color[0]}, ${tx.color[1]})` }}>{tx.avatar}</div>
                                                <div className="table-user-info">
                                                    <span className="table-user-name">{tx.customer}</span>
                                                    <span className="table-user-email">{tx.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{tx.product}</td>
                                        <td>{tx.date}</td>
                                        <td><span className={`status-badge ${tx.statusClass}`}>{tx.status}</span></td>
                                        <td><span className="table-amount">{tx.amount}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </section>

            {/* Bottom Grid */}
            <section className="bottom-grid">
                {/* Calendar Widget (Still somewhat static as it's complex, but logic removed) */}
                <GlassCard>
                    <div className="calendar-header">
                        <h2 className="card-title">January 2025</h2>
                        <div className="calendar-nav">
                            <button className="calendar-nav-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg></button>
                            <button className="calendar-nav-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></button>
                        </div>
                    </div>
                    <div className="calendar-grid">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <span key={day} className="calendar-day-name">{day}</span>
                        ))}
                        {/* Keeping grid hardcoded for visual simplicity as calendar logic is complex */}
                        <span className="calendar-day other-month">29</span><span className="calendar-day other-month">30</span><span className="calendar-day other-month">31</span><span className="calendar-day today">1</span><span className="calendar-day">2</span><span className="calendar-day">3</span><span className="calendar-day">4</span>
                        <span className="calendar-day">5</span><span className="calendar-day">6</span><span className="calendar-day">7</span><span className="calendar-day">8</span><span className="calendar-day">9</span><span className="calendar-day">10</span><span className="calendar-day">11</span>
                        <span className="calendar-day">12</span><span className="calendar-day">13</span><span className="calendar-day">14</span><span className="calendar-day">15</span><span className="calendar-day">16</span><span className="calendar-day">17</span><span className="calendar-day">18</span>
                        <span className="calendar-day">19</span><span className="calendar-day">20</span><span className="calendar-day">21</span><span className="calendar-day">22</span><span className="calendar-day">23</span><span className="calendar-day">24</span><span className="calendar-day">25</span>
                        <span className="calendar-day">26</span><span className="calendar-day">27</span><span className="calendar-day">28</span><span className="calendar-day">29</span><span className="calendar-day">30</span><span className="calendar-day">31</span><span className="calendar-day other-month">1</span>
                    </div>
                </GlassCard>

                {/* Donut Chart (Semi-static SVG, mapped legend) */}
                <GlassCard>
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">Traffic Sources</h2>
                            <p className="card-subtitle">User acquisition breakdown</p>
                        </div>
                    </div>
                    <div className="donut-container">
                        <div className="donut-chart">
                            <svg width="140" height="140" viewBox="0 0 140 140">
                                <circle className="donut-bg" cx="70" cy="70" r="54" />
                                <circle className="donut-segment" cx="70" cy="70" r="54" stroke="var(--emerald-light)" strokeDasharray="169.6 339.3" strokeDashoffset="0" />
                                <circle className="donut-segment" cx="70" cy="70" r="54" stroke="var(--gold)" strokeDasharray="101.8 339.3" strokeDashoffset="-169.6" />
                                <circle className="donut-segment" cx="70" cy="70" r="54" stroke="var(--coral)" strokeDasharray="67.9 339.3" strokeDashoffset="-271.4" />
                            </svg>
                            <div className="donut-center">
                                <div className="donut-value">24.5K</div>
                                <div className="donut-label">Visitors</div>
                            </div>
                        </div>
                        <div className="donut-legend">
                            <div className="legend-item"><span className="legend-color cyan"></span><span>Organic Search (50%)</span></div>
                            <div className="legend-item"><span className="legend-color magenta"></span><span>Social Media (30%)</span></div>
                            <div className="legend-item"><span className="legend-color purple"></span><span>Direct Traffic (20%)</span></div>
                        </div>
                    </div>
                </GlassCard>

                {/* Progress Card */}
                <GlassCard className="progress-card">
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">Project Progress</h2>
                            <p className="card-subtitle">Current sprint status</p>
                        </div>
                    </div>
                    {projectProgress.map((item, index) => (
                        <div key={index} className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">{item.label}</span>
                                <span className="progress-value">{item.value}</span>
                            </div>
                            <div className="progress-bar">
                                <div className={`progress-fill ${item.color}`} style={{ width: item.value }}></div>
                            </div>
                        </div>
                    ))}
                </GlassCard>
            </section>
        </>
    );
};

export default Dashboard;