import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { register } from '../../lib/authApi';
import './LoginPage.css';

export const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username.trim()) {
      setError('Username harus diisi');
      return;
    }
    if (!name.trim()) {
      setError('Nama lengkap harus diisi');
      return;
    }
    if (!email.trim()) {
      setError('Email harus diisi');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }

    setLoading(true);
    try {
      const result = await register({ username, name, email, password });
      if (result.success) {
        setSuccess(result.message);
        setUsername('');
        setName('');
        setEmail('');
        setPassword('');
      } else {
        setError(result.message || 'Registrasi gagal');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form-section">
          <div className="login-form-wrapper">
            <div className="form-header">
              <div className="logo-login-box">
                <img 
                  src="https://res.cloudinary.com/dxvryfbpz/image/upload/v1781106636/Logo_IntervU_AI_ksikyh.png" 
                  alt="IntervU AI Logo"
                  className="logo-login"
                />
              </div>
              <h2 className="form-title">Daftar Akun Baru</h2>
              <p className="form-subtitle">
                Sudah punya akun? <Link to="/login" className="link-register">Masuk sekarang</Link>
              </p>
            </div>

            {error && (
              <div className="error-alert">
                <span>{error}</span>
              </div>
            )}
            {success && (
              <div className="success-alert">
                <span>{success}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="form-fields">
              <Input
                type="text"
                label="Username"
                placeholder="username Anda"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="text"
                label="Nama Lengkap"
                placeholder="Nama lengkap Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                label="Email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                label="Password"
                placeholder="Buat password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full"
              >
                {loading ? 'Mendaftar...' : 'Daftar'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
