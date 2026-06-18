import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from './authApi';
import { Button } from '../../components'; // Pastikan komponen Button sudah ada

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const data = await loginWithGoogle("dummy_credential");
      
      // Simpan data sesi di localStorage
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user_profile', JSON.stringify(data.user));
      
      navigate('/dashboard');
    } catch (error) {
      alert("Gagal masuk.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl border border-slate-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">IntervU AI</h1>
          <p className="text-slate-500 mt-2">Platform Mock Interview Berbasis AI</p>
        </div>

        <Button 
          onClick={handleLogin} 
          disabled={loading}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all"
        >
          {loading ? 'Memproses...' : 'Masuk dengan Google'}
        </Button>

        {/* Indikator Demo */}
        <div className="mt-6 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
            👤 Login sebagai: Demo User
          </span>
        </div>
      </div>
    </div>
  );
}