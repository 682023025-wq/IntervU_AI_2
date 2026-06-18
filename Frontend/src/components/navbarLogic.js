// src/components/navbarLogic.js
import { useState, useEffect, useCallback } from 'react';

export const useNavbarLogic = (navigate) => {
  const [firstName, setFirstName] = useState('User');

  const getFirstName = useCallback(() => {
    const storedUser = localStorage.getItem('user_profile');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      return user.nama_lengkap ? user.nama_lengkap.split(' ')[0] : 'User';
    }
    return 'User';
  }, []);

  useEffect(() => {
    setFirstName(getFirstName());
  }, [getFirstName]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_profile');
    navigate('/login');
  }, [navigate]);

  return { firstName, handleLogout };
};