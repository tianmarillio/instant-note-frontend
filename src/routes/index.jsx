import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NoteCreate from '../pages/NoteCreate/NoteCreate';
import NoteUpdate from '../pages/NoteUpdate/NoteUpdate';
import NoteList from '../pages/NoteList/NoteList';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<NoteList />} />
        <Route path="/create" element={<NoteCreate />} />
        <Route path="/update/:id" element={<NoteUpdate />} />
      </Route>
    </Routes>
  );
}
