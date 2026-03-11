import React from "react";
import Links from "./Links";
import FTabs from "./FTabs";

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer className="footer text-center" style={{ width: "100%", margin: 0, padding: 0 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* <FTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
        <ul className="align-items-center list-unstyled">
          <li className="col">
            
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
