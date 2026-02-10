import { Outlet } from 'react-router-dom';
import Background from '../components/Background';
import ThemeToggle from '../components/ThemeToggle';

const AuthLayout = () => {
    return (
        <>
            <Background />
            <div className="login-page">
                <ThemeToggle isFloating={true} />
                <div className="login-container">
                    <Outlet />
                </div>
                <footer className="site-footer">
                    <p>Copyright © 2026 Your Company. Designed by <a href="https://templatemo.com" target="_blank" rel="noreferrer">TemplateMo</a></p>
                </footer>
            </div>
        </>
    );
};

export default AuthLayout;