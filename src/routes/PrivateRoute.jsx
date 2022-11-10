import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { USER_TOKEN } from '../lib/globalVariables';

export default function PrivateRoute() {
  const userToken = localStorage.getItem(USER_TOKEN);

  if (!userToken) return <Navigate to="/login" replace />;
  return <Outlet />;
}
