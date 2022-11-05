import { useContext } from 'react';
import AuthContext from '../contexts/auth';

export default function useAuthContext() {
  const authHelper = useContext(AuthContext);
  return authHelper;
}
