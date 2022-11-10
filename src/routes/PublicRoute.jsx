import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { USER_TOKEN } from '../lib/globalVariables';

export default function PublicRoute() {
  const userToken = localStorage.getItem(USER_TOKEN);

  if (userToken) return <Navigate to="/" replace />;
  return <Outlet />;
}
