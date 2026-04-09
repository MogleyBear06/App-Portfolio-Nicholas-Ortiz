import React from "react";
import { Nav, Navbar} from "react-bootstrap";


function FTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className="d-flex justify-content-center">
      <Nav className="mr-auto align-items-center">
   
        <Nav.Link  href="/Venue"
          onClick={() => handlePageChange('Venue')}
          className={currentPage === 'Venue' ? 'nav-link active' : 'nav-link'} style={{flex: '0 0 auto'}}>
            <h4
            className='hover-brighten'>Venue</h4>
        </Nav.Link>
          <Nav.Link  href="/Travel"
          onClick={() => handlePageChange('Travel')}
          className={currentPage === 'Travel' ? 'nav-link active' : 'nav-link'} style={{flex: '0 0 auto'}}>
          <h4 className='hover-brighten'>Travel</h4>
        </Nav.Link>
        <Nav.Link  href="/Registry"
          onClick={() => handlePageChange('Registry')}
          className={currentPage === 'Registry' ? 'nav-link active' : 'nav-link'} style={{flex: '0 0 auto'}}>
          <h4 className='hover-brighten'>Registry</h4>
        </Nav.Link>
          <Nav.Link  href="/FAQ"
          onClick={() => handlePageChange('FAQ')}
          className={currentPage === 'FAQ' ? 'nav-link active' : 'nav-link'} style={{flex: '0 0 auto'}}>
          <h4 className='hover-brighten'>FAQ's</h4>
        </Nav.Link>
    </Nav>
    </Navbar>
  );
}

export default FTabs;