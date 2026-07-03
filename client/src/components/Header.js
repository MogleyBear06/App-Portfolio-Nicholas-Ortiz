import React from "react";
import NavTabs from "./NavTabs";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
    <div className="header">
        <header className="row">
          <div className="col-10 navbrand">
            {/* <h1>
              <a href="/"
          onClick={() => handlePageChange('Home')}
          className= {currentPage === 'Home' ? 'nav-link active' : 'nav-link'} style={{fontSize: "4vmin",  flex: '0 0 auto',}}> 
          Our Wedding
              </a>
            </h1> */}
          </div>
          {/* <div className="col-2">
            <NavTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div> */}
        </header>
        </div>
    </>
  );
}

export default Header;
