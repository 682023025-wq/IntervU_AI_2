// src/features/Dashboard/dashboardLogic.js
import { useCallback } from 'react';

export const useDashboardLogic = (navigate) => {
  const getUserData = useCallback(() => {
    const storedUser = localStorage.getItem('user_profile');
    if (!storedUser) {
      navigate('/login');
      return null;
    }
    return JSON.parse(storedUser);
  }, [navigate]);

  const getFirstName = useCallback((fullName) => {
    return fullName ? fullName.split(' ')[0] : 'User';
  }, []);

  return { getUserData, getFirstName };
};