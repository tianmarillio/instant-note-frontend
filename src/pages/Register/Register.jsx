import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import Logo from '../../assets/logo.png';

import AuthToggler from '../../components/AuthToggler';
import AuthContext from '../../contexts/auth';

export default function Register() {
  const navigate = useNavigate();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const { login } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const url = '/register';
    const payload = {
      email: inputEmail?.current?.value,
      password: inputPassword?.current?.value,
    };
    const { data } = await axios.post(url, payload);
    login(data.userToken);
    navigate('/');
  };

  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center">
      <div>
        <div className="mb-4 flex justify-center">
          <img src={Logo} alt="logo" className="h-32" />
        </div>
        <div className="mb-4">
          <AuthToggler activePage="register" />
        </div>

        <form onSubmit={handleRegister}>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Email"
              className="rounded px-4 py-2 w-full"
              ref={inputEmail}
            />
          </div>

          <div className="mb-12">
            <input
              type="password"
              placeholder="Password"
              className="rounded px-4 py-2 w-full"
              ref={inputPassword}
            />
          </div>

          <div>
            <button className="px-4 py-2 bg-slate-500 text-slate-200 rounded w-full">REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  );
}
