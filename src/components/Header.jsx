import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Header({ hideHome, hideLogout }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-green-200 h-full w-full flex justify-between">
      {hideHome ? (
        <div />
      ) : (
        <button type="button" className="bg-orange-200" onClick={() => navigate('/')}>
          HOME
        </button>
      )}

      {hideLogout ? null : (
        <button type="button" className="bg-red-200" onClick={handleLogout}>
          LOGOUT
        </button>
      )}
    </div>
  );
}
