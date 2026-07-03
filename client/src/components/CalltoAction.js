import React from 'react';
import {Button} from 'react-bootstrap';

function CTA({ currentPage, handlePageChange }) {
  return (
    <div className="container" style={{ maxWidth: "75vmin"}}>
      <div>
        <ul className="row justify-content-center">
          <li className="col-8 col-sm-7 d-flex mb-3 mb-sm-0">
            <h5>Would you like to know more?</h5>
          </li>
          <li className="col-4 col-sm-2 d-flex mb-3 mb-sm-0">
            <a 
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              style={{ fontSize: "2vmin", flex: '0 0 auto' }}
            >
              <Button 
              className="button" 
              size="sm" 
              style={{ borderStyle: "solid" }}
              >
                Contact Us
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CTA;
