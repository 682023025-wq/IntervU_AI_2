// src/features/Auth/authApi.js
import api from '../../lib/axios';

const DEMO_MODE = true;

// Fungsi helper untuk membuat data profil sesuai skema DB
const createMockProfile = (email, provider) => ({
  id: 'demo-user-uuid-123',
  nama_lengkap: 'Demo User',
  email: email,
  telepon: null,
  tanggal_lahir: null,
  jenis_kelamin: 'prefer_tidak_menyebutkan',
  url_avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=random',
  url_foto_cv: null,
  penyedia_auth: provider, // 'google' atau 'email'
  posisi_target: null,
  bahasa_preferensi: 'id',
  data_cv: {},
  tanggal_dibuat: new Date().toISOString(),
  tanggal_diperbarui: new Date().toISOString()
});

export const loginWithGoogle = async () => {
  if (DEMO_MODE) {
    await new Promise(r => setTimeout(r, 800));
    return { 
      access_token: 'demo_jwt_google', 
      user: createMockProfile('demo@gmail.com', 'google') 
    };
  }
  const res = await api.post('/auth/login/google');
  return res.data;
};

export const loginWithEmail = async (email, password) => {
  if (DEMO_MODE) {
    await new Promise(r => setTimeout(r, 800));
    // Simulasi validasi sederhana
    if (!email || !password) throw new Error('Email dan password wajib diisi');
    return { 
      access_token: 'demo_jwt_email', 
      user: createMockProfile(email, 'email') 
    };
  }
  const res = await api.post('/auth/login', { email, password });
  return res.data;
};

export const signUpWithEmail = async (email, password, namaLengkap) => {
  if (DEMO_MODE) {
    await new Promise(r => setTimeout(r, 1000));
    const profile = createMockProfile(email, 'email');
    profile.nama_lengkap = namaLengkap;
    return { 
      access_token: 'demo_jwt_signup', 
      user: profile,
      message: 'Akun berhasil dibuat!'
    };
  }
  const res = await api.post('/auth/signup', { email, password, nama_lengkap: namaLengkap });
  return res.data;
};