import { useState } from 'react';
import { AuthContext } from './AuthContext';  

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem('token'));

  const login = (token) => {
    localStorage.setItem('token', token);
    setUserToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout, isAuthenticated: !!userToken }}>
      {children}
    </AuthContext.Provider>
  );
};