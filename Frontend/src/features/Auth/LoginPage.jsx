import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Input, PasswordInput } from '../../components/Input';
import { MailIcon, LoaderIcon, ErrorIcon } from '../../components/Icons';
import { login, loginWithGoogle } from '../../lib/authApi';
import './LoginPage.css';

export const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!email.trim()) {
      setError('Email harus diisi');
      return;
    }
    if (!password) {
      setError('Password harus diisi');
      return;
    }
    if (password.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }

    setLoading(true);
    try {
      const result = await login(email, password);
      
      if (result.success) {
        setError('');
        onLoginSuccess(result.user);
      } else {
        setError(result.message || 'Login gagal');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await loginWithGoogle();
      if (result.success) {
        onLoginSuccess(result.user);
      } else {
        setError(result.message || 'Login Google gagal');
      }
    } catch {
      setError('Terjadi kesalahan saat login Google');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const result = await login('user@example.com', 'password123');
      if (result.success) {
        onLoginSuccess(result.user);
      } else {
        setError(result.message || 'Login demo gagal');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat login demo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-light rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-bright rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="login-content">
        {/* Left Section - Hero (hidden on mobile) */}
        <div className="login-hero">
          <div className="hero-content">
            <div className="logo-section">
              <img 
                src="https://res.cloudinary.com/dxvryfbpz/image/upload/v1781106636/Logo_IntervU_AI_ksikyh.png" 
                alt="IntervU AI Logo"
                className="logo-image"
              />
            </div>
            
            <h1 className="hero-title">
              Siap Untuk Wawancara Karir Anda?
            </h1>
            
            <p className="hero-subtitle">
              IntervU AI membantu Anda mempersiapkan wawancara dengan fitur CV Builder, Interview Practice, dan Job Recommendations.
            </p>

            <ul className="hero-features">
              <li>✓ Buat CV profesional dalam hitungan menit</li>
              <li>✓ Latihan interview interaktif dengan AI</li>
              <li>✓ Rekomendasi pekerjaan yang relevan</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="login-form-section">
          <div className="login-form-wrapper">
            {/* Header */}
            <div className="form-header">
              <h2 className="form-title">Masuk ke Akun Anda</h2>
              <p className="form-subtitle">
                Belum punya akun? <a href="/register" className="link-register">Daftar sekarang</a>
              </p>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="error-alert">
                <ErrorIcon />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="form-fields">
              <Input
                type="text"
                label="Email atau Username"
                placeholder="email@example.com atau username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error && error.includes('Email')}
                icon={<MailIcon active={true} />}
              />

              <div className="form-group">
                <label className="block text-sm font-semibold text-text-secondary mb-2">
                  Password
                </label>
                <div className="relative">
                  <svg width="20" height="20" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M7 11V7C7 4.24 8.5 2 12 2C15.5 2 17 4.24 17 7V11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                  
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 px-4 pl-10 py-3 bg-bg-secondary border border-border-light rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-bright focus:border-primary-dark transition-all duration-200"
                  />
                  
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.5 7.5C9 8.5 8 10 8 12C8 15.3 10.3 18 12.5 18M20 12C20 12 17.5 16 12.5 18M4 12C4 12 6.5 8 12 6C15 5 17.5 6 19.5 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M2 12C2 12 5 6 12 6C19 6 22 12 22 12C22 12 19 18 12 18C5 18 2 12 2 12Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      </svg>
                    )}
                  </button>
                </div>
                {error && error.includes('Password') && (
                  <p className="text-sm text-red-600 mt-1">⚠ {error}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full"
              >
                {loading ? 'Sedang Masuk...' : 'Masuk'}
              </Button>
            </form>

            <div className="social-login-section">
              <p className="text-sm text-text-muted text-center mb-3">
                Atau masuk dengan akun Google
              </p>
              <Button
                type="button"
                variant="secondary"
                size="md"
                onClick={handleGoogleLogin}
                className="w-full text-sm"
              >
                Masuk dengan Google
              </Button>
            </div>

            <div className="demo-section">
              <p className="text-sm text-text-muted text-center mb-3">
                Demo Mode - Gunakan kredensial test:
              </p>
              <Button
                type="button"
                variant="secondary"
                size="md"
                onClick={handleDemoLogin}
                className="w-full text-sm"
              >
                Isi Kredensial Demo
              </Button>
              <p className="text-xs text-text-muted text-center mt-2">
                Email: user@example.com | Password: password123
              </p>
            </div>

            {/* Footer */}
            <div className="form-footer">
              <a href="#" className="link-secondary">Lupa password?</a>
              <span>•</span>
              <a href="#" className="link-secondary">Bantuan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
