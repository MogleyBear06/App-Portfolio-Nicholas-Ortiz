import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "../components/style/global.css"
import Header from './Header';
import Footer from './Footer';
import CTA from './CalltoAction';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Travel from './pages/Travel';
import Venue from './pages/Venue';
import Contact from './pages/Contact';
import Registry from './pages/Registry';
import Video from '../assets/vid';
import Login from './pages/Login.js';
import Profile from './pages/investorProfile.js';
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from '../components/utils/AuthContext.js'; 
import store from './utils/store.js';
import { Provider } from 'react-redux';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  
  
  return (
    <div className="app-container">
      <AuthProvider> 
        <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Venue" element={<PrivateRoute><Venue /></PrivateRoute>} />
        <Route path="/Registry" element={<PrivateRoute><Registry /></PrivateRoute>} />
        <Route path="/FAQ" element={<PrivateRoute><FAQ /></PrivateRoute>} />
        <Route path="/Travel" element={<PrivateRoute><Travel /></PrivateRoute>} />
        <Route path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      </Provider>
      </AuthProvider>
    </div>
  );
}
