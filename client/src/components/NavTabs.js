import React from "react";
import { Nav, Navbar} from "react-bootstrap";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar collapseOnSelect expand="xxl"variant="dark">
  <Navbar.Brand href="#home"
          onClick={() => handlePageChange('Home')}
          className= {currentPage === 'Home' ? 'nav-link active' : 'nav-link'} style={{fontSize: "4vmin",  flex: '0 0 auto',}}> 
          MBK Consulting
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
     <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link  href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto',}}>
            Home 
        </Nav.Link>
        <Nav.Link href="#Services"
          onClick={() => handlePageChange('Services')}
          className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto'}}>
           Services
        </Nav.Link>
        <Nav.Link  href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto'}}>
          About
        </Nav.Link>
        <Nav.Link  href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto'}}>
          Contact
        </Nav.Link>
        {/* <Nav.Link  href="#clientlogin"
          onClick={() => handlePageChange('ClientLogin')}
          className={currentPage === 'ClientLogin' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto'}}>
          Client Login
        </Nav.Link> */}
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;