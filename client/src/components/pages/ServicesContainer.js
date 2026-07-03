import React, { useState } from 'react';

import Services from './Services';
import BusinessConsulting from './services/BusinessConsulting';
import WebDev from './services/WebDev';
import DMAD from './services/DMAD';

export default function ServicesContainer() {
  const [currentPage, setCurrentPage] = useState('Services');
  

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'BusinessConsulting') {
      return <BusinessConsulting />;
    }
    if (currentPage === 'WebDev') {
      return <WebDev />;
    }
    if (currentPage === 'About') {
      return <DMAD />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Services currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div> 
  )
}
