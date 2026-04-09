import React, { useState, useEffect } from "react";
import NMCasual from '../../assets/NMCasual.JPG';
import maininterior from '../../assets/maininterior.jpeg';
import amazon from '../../assets/amazon.jpeg';
import honeyfund from '../../assets/honeyfund.jpeg';
import hands from '../../assets/hands.JPG';
import chandelier from '../../assets/chandelier.jpeg';
import { Carousel } from "bootstrap";


export default function Registry() {
    const [showBottom, setShowBottom] = useState(false);
      const [cardVisible, setCardVisible] = useState(false);
             const getCardStyle = (visible, delay = 0) => ({
             opacity: visible ? 1 : 0,
             transform: visible ? "translateY(0px)" : "translateY(40px)",
             transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
           });
           
             useEffect(() => {
               const timer = setTimeout(() => {
                 setCardVisible(true);
               }, 500);
               return () => clearTimeout(timer);
             }, []);
             
  
    useEffect(() => {
      const t = setTimeout(() => setShowBottom(true), 300);
      return () => clearTimeout(t);
    }, []);

    useEffect(() => {
  const el = document.querySelector('#venueCarousel');
  if (el) {
    new Carousel(el);
  }
}, []);
  return (
    <> 
    <div className="container" 
    style={{ 
      marginTop:'2.70vmin',
      
      }}> 
         <img src={hands} alt=""
           style={{
                position: 'fixed',
                top: 0,
                left: 0,
                 width: "100vw",
                height: "100vh",
                objectFit: 'cover',
                zIndex: -1,
              }}
         />
    <div className='container'>
         <div
  className="d-flex justify-content-center"
  style={{
    opacity: showBottom ? 1 : 0,
    transition: "opacity 0.6s ease",
     transitionDelay: "0s"
    
  }}
>
  <div
    style={{
      background: "rgba(40, 39, 37, 0.7)",
      backdropFilter: "blur(1px)",
      WebkitBackdropFilter: "blur(5px)",
      borderRadius: "30px",
      padding: "0.2rem 0.6rem",
          maskImage: `linear-gradient(to right, transparent, white 3%, white 90%, transparent), 
                    linear-gradient(to bottom, transparent, white 20%, white 30%, transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, white 2%, white 95%, transparent), 
                          linear-gradient(to bottom, transparent, white 25%, white 60%, transparent)`,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
    }}
  >
    <h1
      style={{
        margin: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "0",
        animation: "typing 2.5s ease-out forwards",
        color: "white",
      }}
    >
      Registry
    </h1>
  </div>
</div>

    <br></br>


          <div className='container text-center'
          style={{
            ...getCardStyle(cardVisible, 0),
            background: "rgba(40, 39, 37, 0.7)",
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(5px)",
            borderRadius: "30px",
             padding: "15px",
             border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `
           0 0 5px rgba(243, 174, 61, 0.6),
          0 0 10px rgba(243, 174, 61, 0.35)
        `, 
            marginBottom: '15vmin',
          }}>
            <p> If you would like to make a contribution, please visit our wedding registry at either <strong>Amazon</strong> or <strong>Honeyfund</strong> by selecting the links below
            </p>
          </div>

<div
  className="container align-items-center">
  <div className="row g-3 justify-content-center"
    style={{
      ...getCardStyle(cardVisible, 0.2),
    background: "rgba(40, 39, 37, 0.7)",
    backdropFilter: "blur(1px)",
    WebkitBackdropFilter: "blur(5px)",
    borderRadius: "30px",
     padding: "15px",
             border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `
           0 0 5px rgba(243, 174, 61, 0.6),
          0 0 10px rgba(243, 174, 61, 0.35)
        `, 
    marginBottom: "2vmin",
  }}
  >
    
<div className="col-12 col-md-6 text-center">
  <p>
    <a
      href="https://www.amazon.com/wedding/share/scottortizwedding"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={amazon}
        alt="Amazon Logo"
        style={{ width: "100%", height: "auto", borderRadius: "12px", }}
      />
    </a>
  </p>
</div>

<div className="col-12 col-md-6 text-center">
  <p>
    <a
      href="https://www.honeyfund.com/site/scott-ortiz-10-16-2026"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={honeyfund}
        alt="Honeyfund Logo"
        style={{ width: "100%", height: "auto", borderRadius: "12px", }}
      />
    </a>
  </p>
    </div>

  </div>
</div>

     <br></br>

    </div>
    </div>
    </>
  );
}

