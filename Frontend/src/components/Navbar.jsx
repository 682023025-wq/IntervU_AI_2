// src/components/Navbar.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import { useNavbarLogic } from './navbarLogic';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstName, handleLogout } = useNavbarLogic(navigate);

  const navItems = [
    { path: '/dashboard', label: 'Home' },
    { path: '/interview', label: 'Interview' },
    { path: '/cv', label: 'CV' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/profile', label: 'Profile' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <img 
            src="https://res.cloudinary.com/dxvryfbpz/image/upload/Logo_IntervU_AI_ksikyh.png" 
            alt="Logo" 
            className="navbar-logo" 
          />
          <span className="navbar-brand-name">IntervU AI</span>
        </div>
        <div className="navbar-menu">
          {navItems.map(({ path, label }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`navbar-item ${location.pathname === path ? 'navbar-item-active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="navbar-actions">
          <span className="navbar-user">Halo, {firstName}</span>
          <button onClick={handleLogout} className="navbar-logout-btn" title="Keluar">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}