import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/Auth/LoginPage';
import RegisterPage from './features/Auth/RegisterPage';
import { getCurrentUser, isAuthenticated } from './lib/authApi';
import './App.css';

/**
 * Protected Route Component
 * Redirects to login if user is not authenticated
 */
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

/**
 * Main App Component with Routing
 */
function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication on mount
  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (isLoading) {
    return (
      <div className="app-loading">
        <div className="loader"></div>
        <p>Memuat...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route 
          path="/login" 
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage onLoginSuccess={handleLoginSuccess} />
            )
          }
        />

        {/* Register Route */}
        <Route 
          path="/register"
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <RegisterPage />
            )
          }
        />

        {/* Dashboard Route (Protected) */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPlaceholder user={user} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        {/* Root route - redirect based on auth status */}
        <Route 
          path="/" 
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* 404 - Not Found */}
        <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}

/**
 * Dashboard Placeholder Component
 * Will be replaced with actual Dashboard later
 */
const DashboardPlaceholder = ({ user, onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('intervU_auth_token');
    localStorage.removeItem('intervU_user_profile');
    onLogout();
    window.location.href = '/login';
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid #E2E8F0',
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        <h1 style={{ color: '#0F172A', marginBottom: '0.5rem' }}>
          Selamat Datang, {user?.name}! 👋
        </h1>
        <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
          Dashboard sedang dalam pengembangan. Ini adalah placeholder untuk halaman utama.
        </p>
        <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Email: {user?.email}
        </p>
        <button
          onClick={handleLogout}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#0F4C75',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1B5F8C'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0F4C75'}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default App;
