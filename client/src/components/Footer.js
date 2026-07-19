import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button} from "react-bootstrap";
import { useAuth } from './utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Auth from './utils/auth';
import NM from '../assets/NM.jpg';

function Footer({ currentPage, handlePageChange }) {
const { user, logout } = useAuth();
const navigate = useNavigate();
  const [formState, setFormState] = useState({});

  useEffect(() => {
    if (!user) return;
    
    const token = Auth.getToken();

    fetch(`https://wedding-dek9.onrender.com/rsvp/${user.userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setFormState(data))
      .catch(err => console.error("Error fetching profile image:", err));
  }, [user]);


  return (
    <Navbar className="d-flex justify-content-center">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        padding: '0 20px'
      }}>
<Nav
  className="mr-auto align-items-center"
  style={{
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: '1px',
    width: 'fit-content',
    maxWidth: '100%',
    margin: '0 auto',
    background: "rgba(89, 66, 56, 0.8)",
    backdropFilter: "blur(1px)",
    WebkitBackdropFilter: "blur(5px)",
    borderRadius: "30px",
    maskImage: `linear-gradient(to right, transparent, white 3%, white 95%, transparent), linear-gradient(to bottom, transparent, white 10%, white 80%, transparent)`,
    WebkitMaskImage: `linear-gradient(to right, transparent, white 2%, white 95%, transparent), linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)`,
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in',
  }}
>
          {user ? (
            <>
              <Nav.Link
                onClick={() => { handlePageChange('Profile'); navigate('/Profile'); }}
                className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'} style={{flex: '0 1 auto'}}>
                <h2 className='hover-brighten nav-heading'
                >My RSVP</h2>
              </Nav.Link>
              <Nav.Link
                onClick={() => { handlePageChange('Venue'); navigate('/Venue'); }}
                className={currentPage === 'Venue' ? 'nav-link active' : 'nav-link'} style={{flex: '0 1 auto'}}>
                <h2 className='hover-brighten nav-heading'>Venue</h2>
              </Nav.Link>
              <Nav.Link
                onClick={() => { handlePageChange('Travel'); navigate('/Travel'); }}
                className={currentPage === 'Travel' ? 'nav-link active' : 'nav-link'} style={{flex: '0 1 auto'}}>
                <h2 className='hover-brighten nav-heading'>Travel</h2>
              </Nav.Link>
              <Nav.Link
                onClick={() => { handlePageChange('Registry'); navigate('/Registry'); }}
                className={currentPage === 'Registry' ? 'nav-link active' : 'nav-link'} style={{flex: '0 1 auto'}}>
                <h2 className='hover-brighten nav-heading'>Registry</h2>
              </Nav.Link>
              <Nav.Link
                onClick={() => { handlePageChange('FAQ'); navigate('/FAQ'); }}
                className={currentPage === 'FAQ' ? 'nav-link active' : 'nav-link'} style={{flex: '0 1 auto'}}>
                <h2 className='hover-brighten nav-heading'>FAQ's</h2>
              </Nav.Link>
              <Nav.Link
                onClick={() => { logout(); navigate('/'); }}
                style={{ flex: '0 1 auto', cursor: 'pointer' }}>
                <h2 className='hover-brighten nav-heading'>Logout</h2>
              </Nav.Link>
            </>
          ) : (
            <Nav.Link href="/Login"
              onClick={() => handlePageChange('Login')}
              className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'} style={{ flex: '0 1 auto' }}>
              <h2 className='hover-brighten nav-heading'>RSVP</h2>
            </Nav.Link>
          )}
        </Nav>
        <Link to="/">
          <Button
            className="hover-brighten"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              display: "inline-block",
              marginTop: "10px"
            }}
          >
            <img
              src={NM}
              alt=""
              style={{
                width: "90px",
                borderRadius: "30px",
                display: "block",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: `
                 0 0 5px rgba(243, 174, 61, 0.6),
                0 0 10px rgba(243, 174, 61, 0.35)
              `, 
              }}
            />
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}

export default Footer;