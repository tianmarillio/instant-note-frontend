import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthToggler({ activePage = null }) {
  const isLoginPage = activePage === 'login';
  const isRegisterPage = activePage === 'register';

  return (
    <div className="w-full h-full bg-orange-200 flex rounded">
      <div className={`flex-1 ${isLoginPage ? 'bg-orange-400' : ''}`}>
        <Link to="/login">
          <p className="text-center">Login</p>
        </Link>
      </div>
      <div className={`flex-1 ${isRegisterPage ? 'bg-orange-400' : ''}`}>
        <Link to="/register">
          <p className="text-center">Register</p>
        </Link>
      </div>
    </div>
  );
}
