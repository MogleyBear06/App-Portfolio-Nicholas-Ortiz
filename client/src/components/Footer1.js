import React  from "react";
import { Link } from "react-router-dom";
import Links from "./Links";
import { Card, Button, Carousel, CardText, Nav} from 'react-bootstrap';
import FTabs from "./FTabs";
import NM from '../assets/NM.jpg';
function Footer({ currentPage, handlePageChange }) {
  return (
    <footer className="footer text-center" 
    style={{ width: "100%", marginBottom: "30px",  padding: 0,    
      // backdropFilter: "blur(1px)",
      // WebkitBackdropFilter: "blur(5px)", 
      }}>
      <div >
        <FTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      </div>
<Link to="/">
  <Button
    className="hover-brighten"
    style={{
      background: "none",
      border: "none",
      padding: 0,
      display: "inline-block",
      marginTop: "-10px" // reduce or adjust this
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
    </footer>
  );
}

export default Footer;
