import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import useAuth from './hooks/useAuth';
import AuthContext from './contexts/auth';
import AppRoutes from './routes';

function App() {
  const authHelper = useAuth();

  return (
    <div className="App">
      <AuthContext.Provider value={authHelper}>
        <Router>
          <AppRoutes />
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
