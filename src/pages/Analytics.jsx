// src/pages/Analytics.jsx
import GlassCard from '../components/GlassCard';
import {
    analyticsStats,
    trafficChartData,
    topPages,
    browserStats,
    countryStats
} from '../services/mockData';

const Analytics = () => {
    return (
        <>
            {/* Stats Cards */}
            <section className="stats-grid">
                {analyticsStats.map((stat) => (
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
                {/* Main Chart */}
                <GlassCard className="chart-card">
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">Traffic Overview</h2>
                            <p className="card-subtitle">Daily visitors and page views</p>
                        </div>
                        <div className="card-actions">
                            <button className="card-btn">7 Days</button>
                            <button className="card-btn active">30 Days</button>
                            <button className="card-btn">90 Days</button>
                        </div>
                    </div>
                    <div className="chart-wrapper">
                        <div className="chart-container">
                            <div className="chart-y-axis">
                                <span className="y-value">50K</span>
                                <span className="y-value">40K</span>
                                <span className="y-value">30K</span>
                                <span className="y-value">20K</span>
                                <span className="y-value">10K</span>
                                <span className="y-value">0</span>
                            </div>
                            <div className="chart-placeholder">
                                {trafficChartData.map((bar, index) => (
                                    <div key={index} className="chart-bar-group">
                                        <div className={`chart-bar ${bar.color}`} style={{ height: bar.height }}></div>
                                        <span className="chart-label">{bar.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Top Pages */}
                <GlassCard className="activity-card">
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">Top Pages</h2>
                            <p className="card-subtitle">Most visited pages</p>
                        </div>
                    </div>
                    <div className="activity-list">
                        {topPages.map((page) => (
                            <div key={page.id} className="activity-item">
                                <div className="activity-avatar" style={{ background: `linear-gradient(135deg, ${page.color[0]}, ${page.color[1]})` }}>{page.rank}</div>
                                <div className="activity-content">
                                    <p className="activity-text"><strong>{page.path}</strong></p>
                                    <span className="activity-time">{page.views}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </section>

            {/* Bottom Grid */}
            <section className="bottom-grid">
                {/* Device Breakdown (Chart is mostly static SVG for now, legend data provided) */}
                <GlassCard>
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">Devices</h2>
                            <p className="card-subtitle">Traffic by device type</p>
                        </div>
                    </div>
                    <div className="donut-container">
                        <div className="donut-chart">
                            <svg width="140" height="140" viewBox="0 0 140 140">
                                <circle className="donut-bg" cx="70" cy="70" r="54" />
                                <circle className="donut-segment" cx="70" cy="70" r="54" stroke="var(--emerald-light)" strokeDasharray="186.6 339.3" strokeDashoffset="0" />
                                <circle className="donut-segment" cx="70" cy="70" r="54" stroke="var(--gold)" strokeDasharray="118.8 339.3" strokeDashoffset="-186.6" />
                                <circle className="donut-segment" cx="70" cy="70" r="54" stroke="var(--coral)" strokeDasharray="33.9 339.3" strokeDashoffset="-305.4" />
                            </svg>
                            <div className="donut-center">
                                <div className="donut-value">100%</div>
                                <div className="donut-label">Total</div>
                            </div>
                        </div>
                        <div className="donut-legend">
                            <div className="legend-item"><span className="legend-color cyan"></span><span>Mobile (55%)</span></div>
                            <div className="legend-item"><span className="legend-color magenta"></span><span>Desktop (35%)</span></div>
                            <div className="legend-item"><span className="legend-color purple"></span><span>Tablet (10%)</span></div>
                        </div>
                    </div>
                </GlassCard>

                {/* Browser Stats */}
                <GlassCard className="progress-card">
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">Browsers</h2>
                            <p className="card-subtitle">Traffic by browser</p>
                        </div>
                    </div>
                    {browserStats.map((item, index) => (
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

                {/* Countries */}
                <GlassCard className="progress-card">
                    <div className="card-header">
                        <div>
                            <h2 className="card-title">Countries</h2>
                            <p className="card-subtitle">Top traffic sources</p>
                        </div>
                    </div>
                    {countryStats.map((item, index) => (
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

export default Analytics;