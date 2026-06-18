// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/Auth/LoginPage';
import DashboardPage from './features/Dashboard/DashboardPage';
import CVPage from './features/CV/CVPage';

// Placeholder components untuk route yang belum dibuat
const ComingSoon = ({ name }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: "'Inter', sans-serif"
  }}>
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '0.5rem' }}>
        Fitur {name}
      </h1>
      <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '1.5rem' }}>
        Sedang dalam pengembangan
      </p>
      <button 
        onClick={() => window.history.back()}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0F4C75',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '0.9rem',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1B5F8C'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#0F4C75'}
      >
        Kembali
      </button>
    </div>
  </div>
);

function App() {
  // Cek status autentikasi
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        {/* --- AUTH ROUTES --- */}
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} 
        />
        
        {/* --- PROTECTED ROUTES --- */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/cv" 
          element={isAuthenticated ? <CVPage /> : <Navigate to="/login" />} 
        />
        
        {/* --- COMING SOON ROUTES --- */}
        <Route 
          path="/interview" 
          element={isAuthenticated ? <ComingSoon name="Interview" /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/jobs" 
          element={isAuthenticated ? <ComingSoon name="Job Search" /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/profile" 
          element={isAuthenticated ? <ComingSoon name="Profile" /> : <Navigate to="/login" />} 
        />
        
        {/* --- ROOT & FALLBACK --- */}
        <Route 
          path="/" 
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} 
        />
        <Route 
          path="*" 
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;