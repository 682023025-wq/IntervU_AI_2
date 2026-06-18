import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/Auth/LoginPage';
// import DashboardPage from './features/Dashboard/DashboardPage'; // Nanti ditambahkan

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* Contoh Protected Route */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <h1>Dashboard Page</h1> : <Navigate to="/login" />} 
        />
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;