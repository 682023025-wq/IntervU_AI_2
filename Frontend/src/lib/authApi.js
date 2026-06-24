// Authentication API & Services
// Currently using mock/demo mode with localStorage
// TODO: Replace with actual FastAPI backend integration

const DEMO_MODE = true;
const STORAGE_KEY_TOKEN = 'intervU_auth_token';
const STORAGE_KEY_USER = 'intervU_user_profile';

// Mock user credentials for demo
const MOCK_USERS = [
  {
    id: '1',
    username: 'johndoe',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'user'
  },
  {
    id: '2',
    username: 'admin',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin'
  }
];

const findUser = (identifier) => {
  return MOCK_USERS.find(
    (user) => user.email === identifier || user.username === identifier
  );
};

/**
 * Login user with email or username and password
 * @param {string} identifier - Email or username
 * @param {string} password - User password
 * @returns {Promise<{success: boolean, token: string, user: object, message: string}>}
 */
export const login = async (identifier, password) => {
  if (!DEMO_MODE) {
    // TODO: Replace with actual API call to FastAPI backend
    // return fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ identifier, password })
    // });
  }

  // Demo mode implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = findUser(identifier.trim().toLowerCase());
      
      if (user && password.length >= 6) {
        const token = `mock_token_${Date.now()}`;
        localStorage.setItem(STORAGE_KEY_TOKEN, token);
        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
        
        resolve({
          success: true,
          token,
          user,
          message: 'Login berhasil'
        });
      } else {
        resolve({
          success: false,
          token: null,
          user: null,
          message: 'Email atau username / password salah'
        });
      }
    }, 1000);
  });
};

/**
 * Register new user
 * @param {object} userData - {username, email, password, name}
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const register = async (userData) => {
  if (!DEMO_MODE) {
    // TODO: Replace with actual API call
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const existingEmail = MOCK_USERS.some((user) => user.email === userData.email);
      const existingUsername = MOCK_USERS.some((user) => user.username === userData.username);

      if (existingEmail) {
        resolve({
          success: false,
          message: 'Email sudah terdaftar'
        });
        return;
      }

      if (existingUsername) {
        resolve({
          success: false,
          message: 'Username sudah digunakan'
        });
        return;
      }

      MOCK_USERS.push({
        id: `${MOCK_USERS.length + 1}`,
        username: userData.username,
        email: userData.email,
        name: userData.name,
        role: 'user'
      });

      resolve({
        success: true,
        message: 'Registrasi berhasil. Silakan login'
      });
    }, 1000);
  });
};

/**
 * Login using Google account
 * @returns {Promise<{success: boolean, token: string, user: object, message: string}>}
 */
export const loginWithGoogle = async () => {
  if (!DEMO_MODE) {
    // TODO: Replace with actual Google OAuth integration
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const user = MOCK_USERS[0];
      const token = `mock_google_token_${Date.now()}`;
      localStorage.setItem(STORAGE_KEY_TOKEN, token);
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      resolve({
        success: true,
        token,
        user,
        message: 'Login Google berhasil'
      });
    }, 1000);
  });
};

/**
 * Logout user
 */
export const logout = () => {
  localStorage.removeItem(STORAGE_KEY_TOKEN);
  localStorage.removeItem(STORAGE_KEY_USER);
};

/**
 * Get current authenticated user
 * @returns {object|null}
 */
export const getCurrentUser = () => {
  const userStr = localStorage.getItem(STORAGE_KEY_USER);
  return userStr ? JSON.parse(userStr) : null;
};

/**
 * Get auth token
 * @returns {string|null}
 */
export const getAuthToken = () => {
  return localStorage.getItem(STORAGE_KEY_TOKEN);
};

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  return !!getAuthToken();
};
