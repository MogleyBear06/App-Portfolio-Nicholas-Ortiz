import React, { useState, useEffect } from "react";
import NMCasual from '../../assets/NMCasual.JPG';
import maininterior from '../../assets/maininterior.jpeg';
import outsideclose from '../../assets/outsideclose.jpeg';
import outsidewide from '../../assets/outsidewide.jpeg';
import chandelier from '../../assets/chandelier.jpeg';
import { Carousel } from "bootstrap";


export default function Venue() {
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
         <img src={maininterior} alt=""
           style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
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
      Venue & Parking
    </h1>
  </div>
</div>

    <br></br>



          <div className='container align-items-center'
          style={{
            ...getCardStyle(cardVisible, 0),
            background: "rgba(40, 39, 37, 0.7)",
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(5px)",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `
           0 0 5px rgba(243, 174, 61, 0.6),
          0 0 10px rgba(243, 174, 61, 0.35)
        `, 
            padding: "15px",
          }}>
            <h2><strong>Brodie Homestead</strong></h2>
            <p >
              “In 1949, the Brodie Homestead barn was built by John and Charlotte Weaver, who had 
              moved to the 280-acre homestead in 1945. The structure functioned as a barn for nearly 
              50 years, and was home to cattle, horses, and donkeys, among others. After an extensive 
              renovation, Brodie Homestead opened for business in 2014. The incredible cathedral-like 
              ceilings and large stone walls are original to the barn, and nearly all of the wood used 
              inside the building was repurposed from the original structure. There were also some new
               additions, including the six stunning crystal chandeliers and the recycled maple floors.”  
            </p>

                  <p style={{ marginBottom: 0 }}>
              We know Texas weather can still be pretty warm in October, and is generally unpredictable. 
              The Ceremony and Reception will take place inside the air conditioned venue. Guest Arrival and 
              Cocktail Hour will be indoor/outdoor, but the option to be inside will always be available. 
            </p>
          </div>

          <div id="venueCarousel" className="carousel slide my-3" data-bs-ride="carousel"
          style={getCardStyle(cardVisible, 0.2)}
          >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={outsidewide} className="d-block w-100 rounded" alt="Venue 1" />
            </div>
            <div className="carousel-item">
              <img src={outsideclose} className="d-block w-100 rounded" alt="Venue 2" />
            </div>
            <div className="carousel-item">
              <img src={maininterior} className="d-block w-100 rounded" alt="Venue 3" />
            </div>
              <div className="carousel-item">
              <img src={chandelier} className="d-block w-100 rounded" alt="Venue 3" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#venueCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#venueCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
          
        

      
 
     <br></br>
       <div className='container align-items-center'
       
               style={{
                ...getCardStyle(cardVisible, 0.4),
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
        //   maskImage: `linear-gradient(to right, transparent, white 3%, white 90%, transparent), 
        //             linear-gradient(to bottom, transparent, white 20%, white 30%, transparent)`,
        // WebkitMaskImage: `linear-gradient(to right, transparent, white 2%, white 95%, transparent), 
        //                   linear-gradient(to bottom, transparent, white 25%, white 60%, transparent)`,
        // maskComposite: 'intersect',
        // WebkitMaskComposite: 'source-in',
    }}>
            <h2><strong>Arrival & Parking Logistics</strong></h2>
              <p>
              We encourage everyone who will be having a drink to use Lyft, Uber, or another rideshare 
              service. The venue is only about 15 minutes from the middle of downtown so rides should be 
              fairly easy to find.  
            </p>
              <p>
              For those driving, the venue has an attached parking lot that holds 45 cars. 
              There is overflow parking available in the adjacent shopping center. A parking map 
              will be shared ahead of the wedding.
            </p>
            <p style={{ marginBottom: 0 }}>
             You may leave your car in the parking lot overnight if needed. However, the venue does not 
             have overnight security and is not responsible for your vehicle once our event ends. The 
             venue may require cars be moved by a certain time the next day or risk being towed, 
             depending on their event schedule for the weekend. If this is the case, we will let everyone 
             know that time ahead of the wedding. 
            </p>
          </div>
    </div>
    </div>
    </>
  );
}

