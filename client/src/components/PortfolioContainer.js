import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "../components/style/global.css"
import Header from './Header';
import Footer from './Footer';
import CTA from './CalltoAction';
import Home from './pages/Home';

import About from './pages/About';
import Contact from './pages/Contact';
import Video from '../assets/vid';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div>
      {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {/* <Video/> */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/CalltoAction" element={<CTA />} /> */}
      </Routes>
      {/* <Footer currentPage={currentPage} handlePageChange={handlePageChange} /> */}
    </div>
  );
}
