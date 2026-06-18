// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/Auth/LoginPage';
import DashboardPage from './features/Dashboard/DashboardPage';

// Placeholder components untuk route yang belum dibuat
const ComingSoon = ({ name }) => (
  <div className="flex h-screen items-center justify-center bg-slate-50">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">Fitur {name}</h1>
      <p className="text-slate-500">Sedang dalam pengembangan oleh Backend Dev.</p>
    </div>
  </div>
);

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
        
        {/* Route Sementara */}
        <Route path="/interview" element={isAuthenticated ? <ComingSoon name="Interview" /> : <Navigate to="/login" />} />
        <Route path="/cv" element={isAuthenticated ? <ComingSoon name="CV Builder" /> : <Navigate to="/login" />} />
        <Route path="/jobs" element={isAuthenticated ? <ComingSoon name="Job Search" /> : <Navigate to="/login" />} />
        
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;