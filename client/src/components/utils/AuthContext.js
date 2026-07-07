import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import authService from './auth'; // make sure path is correct

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Check localStorage for a valid token on mount
useEffect(() => {
  const currentUser = authService.loggedIn();
  setUser(currentUser);
  setLoading(false);

  const handleAuthChange = () => {
    const currentUser = authService.loggedIn();
    setUser(currentUser);
  };

  window.addEventListener('auth-change', handleAuthChange);
  return () => window.removeEventListener('auth-change', handleAuthChange);
}, []);

    // 👇 THIS is the magic login bridge
  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const token = params.get("token");

  //   if (token) {
  //     authService.login(token);

  //     const currentUser = authService.loggedIn();
  //     setUser(currentUser);

  //     window.history.replaceState({}, document.title, location.pathname);
  //   }
  //   setLoading(false);
  // }, [location]);

  const login = (idToken) => {
    authService.login(idToken);
    const currentUser = authService.loggedIn();
    setUser(currentUser);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
