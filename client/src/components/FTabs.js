import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { useAuth } from './utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Auth from './utils/auth';

function FTabs({ currentPage, handlePageChange }) {
const { user } = useAuth();
const navigate = useNavigate();
  const [formState, setFormState] = useState({});

  useEffect(() => {
    if (!user) return;
    
    const token = Auth.getToken();

    fetch(`http://localhost:3003/rsvp/${user.userId}`, {
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
      <Nav className="mr-auto align-items-center">
     {user ? (
      <>
  <Nav.Link
  onClick={() => { handlePageChange('Profile'); navigate('/Profile'); }}
  className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'} style={{flex: '0 0 auto'}}>
  <h4 className='hover-brighten'>My RSVP</h4>
</Nav.Link>
  <Nav.Link
  onClick={() => { handlePageChange('Venue'); navigate('/Venue'); }}
  className={currentPage === 'Venue' ? 'nav-link active' : 'nav-link'} style={{flex: '0 0 auto'}}>
  <h4 className='hover-brighten'>Venue</h4>
</Nav.Link>

<Nav.Link
  onClick={() => { handlePageChange('Travel'); navigate('/Travel'); }}
  className={currentPage === 'Travel' ? 'nav-link active' : 'nav-link'} style={{flex: '0 0 auto'}}>
  <h4 className='hover-brighten'>Travel</h4>
</Nav.Link>

<Nav.Link
  onClick={() => { handlePageChange('Registry'); navigate('/Registry'); }}
  className={currentPage === 'Registry' ? 'nav-link active' : 'nav-link'} style={{flex: '0 0 auto'}}>
  <h4 className='hover-brighten'>Registry</h4>
</Nav.Link>

<Nav.Link
  onClick={() => { handlePageChange('FAQ'); navigate('/FAQ'); }}
  className={currentPage === 'FAQ' ? 'nav-link active' : 'nav-link'} style={{flex: '0 0 auto'}}>
  <h4 className='hover-brighten'>FAQ's</h4>
</Nav.Link>
            <Nav.Link
            onClick={() => { 
              Auth.logout(); 
              navigate('/login'); }}
            style={{ flex: '0 0 auto', cursor: 'pointer' }}>
            <h4 className='hover-brighten'>Logout</h4>
          </Nav.Link>
      </>

  
) : (
  <Nav.Link href="/RSVP"
    onClick={() => handlePageChange('RSVP')}
    className={currentPage === 'RSVP' ? 'nav-link active' : 'nav-link'} style={{ flex: '0 0 auto' }}>
    <h4 className='hover-brighten'>RSVP</h4>
  </Nav.Link>
)}
   

    </Nav>
    </Navbar>
  );
}

export default FTabs;