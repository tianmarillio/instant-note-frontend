import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NoteCreate from './pages/NoteCreate/NoteCreate';
import NoteUpdate from './pages/NoteUpdate/NoteUpdate';
import NoteList from './pages/NoteList/NoteList';

import useAuth from './hooks/useAuth';
import AuthContext from './contexts/auth';

function App() {
  const authHelper = useAuth();

  return (
    <AuthContext.Provider value={authHelper}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<NoteList />} />
            <Route path="/create" element={<NoteCreate />} />
            <Route path="/update/:id" element={<NoteUpdate />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
