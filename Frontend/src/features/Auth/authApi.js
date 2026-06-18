import api from '../../lib/axios';

// --- KONFIGURASI MODE ---
const DEMO_MODE = true; // Ubah ke false saat backend Flask sudah siap

export const loginWithGoogle = async (credential) => {
  if (DEMO_MODE) {
    console.log("[DEMO] Simulasi login Google...");
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulasi delay jaringan
    
    return {
      access_token: "demo_jwt_token_xyz",
      user: {
        id: 999,
        name: "Demo User",
        email: "demo@intervu.ai",
        avatar: "https://ui-avatars.com/api/?name=Demo+User&background=random"
      }
    };
  }

  // Real API Call ke Backend Flask
  const response = await api.post('/auth/login/google', { credential });
  return response.data;
};