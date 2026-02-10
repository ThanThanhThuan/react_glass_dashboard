import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic goes here
        navigate('/');
    };

    return (
        <div className="login-card">
            <div className="login-header">
                <div className="login-logo">G</div>
                <h1 className="login-title">Welcome Back</h1>
                <p className="login-subtitle">Sign in to continue to GlassDash</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="form-input" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-input" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>

            <p className="login-footer">
                Don't have an account? <Link to="/register">Create Account</Link>
            </p>
        </div>
    );
};

export default Login;