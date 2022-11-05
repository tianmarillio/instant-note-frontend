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
        <div className="bg-orange-200" onClick={() => navigate('/')}>
          HOME
        </div>
      )}

      {hideLogout ? null : (
        <div className="bg-red-200" onClick={handleLogout}>
          LOGOUT
        </div>
      )}
    </div>
  );
}
