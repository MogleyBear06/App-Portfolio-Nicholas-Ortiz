import React from "react";
import { Nav, Navbar} from "react-bootstrap";

function FTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className="d-flex justify-content-center">
      <Nav className="mr-auto align-items-center">
   
        <Navbar.Brand href="/"
          onClick={() => handlePageChange('Home')}
          className= {currentPage === 'Home' ? 'nav-link active' : 'nav-link'} style={{fontSize: "3vmin",  flex: '0 0 auto',}}> 
          Nick and Molly's Wedding
        </Navbar.Brand>
        <Nav.Link  href="/About"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto'}}>
          About
        </Nav.Link>
        <Nav.Link  href="/Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto'}}>
          Contact
        </Nav.Link>
    </Nav>
    </Navbar>
  );
}

export default FTabs;