import { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Background from '../components/Background';
import ThemeToggle from '../components/ThemeToggle';

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    // Helper to generate Title from route (Simple version)
    const getPageTitle = () => {
        const path = location.pathname.substring(1);
        if (!path) return "Dashboard Overview";
        return path.charAt(0).toUpperCase() + path.slice(1);
    };

    return (
        <>
            <Background />
            <div className="dashboard">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

                <main className="main-content">
                    <nav className="navbar">
                        <div className="page-header">
                            <h1 className="page-title">{getPageTitle()}</h1>
                            <div className="page-breadcrumb">
                                <Link to="/">Dashboard</Link>
                                <span>/</span>
                                <span>{getPageTitle()}</span>
                            </div>
                        </div>
                        <div className="navbar-right">
                            {/* Search & Notifs omitted for brevity, but go here */}
                            <ThemeToggle />
                        </div>
                    </nav>

                    <Outlet />

                    <footer className="site-footer">
                        <p>Copyright © 2026 Your Company. Designed by <a href="https://templatemo.com" target="_blank" rel="noreferrer">TemplateMo</a></p>
                    </footer>
                </main>
            </div>

            <button className="mobile-menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
        </>
    );
};

export default MainLayout;