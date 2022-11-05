import { useState, useEffect } from 'react';
import { USER_TOKEN } from '../lib/globalVariables';

export default function useAuth() {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem(USER_TOKEN);
    if (token) setUserToken(token);
  }, []);

  const login = (token) => {
    setUserToken(token);
    localStorage.setItem(USER_TOKEN, token);
  };

  const logout = () => {
    setUserToken(null);
    localStorage.removeItem(USER_TOKEN);
  };

  return {
    userToken,
    setUserToken,
    login,
    logout,
  };
}
