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

        <Route path="/Venue" element={<Venue />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Registry" element={<Registry />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/CalltoAction" element={<CTA />} />
      </Routes>
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
