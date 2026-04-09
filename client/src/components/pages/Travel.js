import React, { useState, useEffect } from "react";
import NMCasual from '../../assets/NMCasual.JPG';
import maininterior from '../../assets/maininterior.jpeg';
import outsideclose from '../../assets/outsideclose.jpeg';
import outsidewide from '../../assets/outsidewide.jpeg';
import chandelier from '../../assets/chandelier.jpeg';
import { Carousel } from "bootstrap";


export default function Travel() {
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
      marginBottom:'2vmin',
      }}> 
         <img src={NMCasual} alt=""
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
      Travel & Lodging
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
            marginBottom: '5vmin',
             border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `
           0 0 5px rgba(243, 174, 61, 0.6),
          0 0 10px rgba(243, 174, 61, 0.35)
        `, 
          }}>
            <p> Although we have not reserved a block of rooms at a nearby hotel, 
              we have compiled a list of recommended accommodations suitable for the 
              occasion. The closest airport to Brodie Homestead is <strong>Austin Bergtstrom International (ABIA)</strong>.</p>
          </div>

<div
  className="container align-items-center">
  <div className="row g-3 justify-content-center"
    style={{
      ...getCardStyle(cardVisible, .2),
    background: "rgba(40, 39, 37, 0.7)",
    backdropFilter: "blur(1px)",
    WebkitBackdropFilter: "blur(5px)",
    borderRadius: "30px",
    padding: "0.6rem",
    marginBottom: "10vmin",
     border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `
           0 0 5px rgba(243, 174, 61, 0.6),
          0 0 10px rgba(243, 174, 61, 0.35)
        `, 
  }}
  >
    <h2 className="text-center justify-content-center"><strong>Hotels Close to the Venue</strong></h2>
    <div className="col-12 col-md-6 text-center">
      <p>
        <strong>Holiday Inn Express Austin SW - Sunset Valley</strong><br />
        4892 US Hwy 290 West<br />
        Sunset Valley, TX 78735<br />
        Phone: 1-888-465-4329 <br />
        <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/sunset-valley/aussv/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-AUSSV" target="_blank" rel="noopener noreferrer">Website</a>
      </p>
    </div>

    <div className="col-12 col-md-6 text-center">
      <p>
        <strong>Extended Stay America Suites Austin - Southwest</strong><br />
        5100 US Hwy 290 West<br />
        Austin, TX 78735<br />
        Phone: 1-512-892-4272 <br />
        <a href="http://extendedstayamerica.com/hotels/tx/austin/southwest?channel=gmb-listing&utm_source=google&utm_medium=organic&utm_campaign=gmb_listing" target="_blank" rel="noopener noreferrer">Website</a>
      </p>
    </div>

    <div className="col-12 col-md-6 text-center">
      <p>
        <strong>La Quinta Inn & Suites by Wyndham - Austin Southwest</strong><br />
        4424 South Mopac Expwy<br />
        Austin, TX, 78735<br />
        Phone: 1-888-946-4170 <br />
        <a href="https://www.wyndhamhotels.com/laquinta/austin-texas/la-quinta-austin-southwest/overview?CID=LC:6ysy27krtpcrqev:53157&iata=00093796" target="_blank" rel="noopener noreferrer">Website</a>
      </p>
    </div>

    <div className="col-12 col-md-6 text-center">
      <p>
        <strong>Residence Inn by Marriott Austin Southwest</strong><br />
        6000 US Hwy 290 West<br />
        Austin, TX 78735<br />
        Phone: 1-512-892-0577 <br />
        <a href="https://www.marriott.com/en-us/hotels/auswe-residence-inn-austin-southwest/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" target="_blank" rel="noopener noreferrer">Website</a>
      </p>
    </div>

    <div className="col-12 col-md-6 text-center">
      <p>
        <strong>Aloft Austin Southwest</strong><br />
        6731 Legado Ln<br />
        Austin, TX 78749<br />
        Phone: 1-512-614-1010 <br />
        <a href="https://www.marriott.com/en-us/hotels/auswa-aloft-austin-southwest/overview/" target="_blank" rel="noopener noreferrer">Website</a>
      </p>
    </div>
  </div>
</div>

<div
  className="container align-items-center">
  <div className="row g-3 justify-content-center"
  style={{
    ...getCardStyle(cardVisible, 0.4),
    background: "rgba(40, 39, 37, 0.7)",
    backdropFilter: "blur(1px)",
    WebkitBackdropFilter: "blur(5px)",
    borderRadius: "30px",
    padding: "0.6rem",
    marginBottom: "2vmin",
     border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `
           0 0 5px rgba(243, 174, 61, 0.6),
          0 0 10px rgba(243, 174, 61, 0.35)
        `, 
  }}
  >
    <h2 className="text-center justify-content-center"><strong>Uniquely Austin Accommodations</strong></h2>
    <div className="col-12 col-md-6 text-center">
      <p>
        <strong>The Driskill</strong><br />
        604 Brazos St<br />
        Austin, TX 78701<br />
        Phone: 1-512-439-1234 <br />
        <a href="https://www.hyatt.com/unbound-collection/en-US/aushd-the-driskill?src=corp_lclb_google_seo_aushd&utm_source=google&utm_medium=organic&utm_campaign=lmr" target="_blank" rel="noopener noreferrer">Website</a>
      </p>
    </div>

    <div className="col-12 col-md-6 text-center">
      <p>
        <strong>Hotel San Jose</strong><br />
        1316 South Congress Ave<br />
        Austin, TX 78704<br />
        Phone: 1-512-852-2350 <br />
        <a href="https://www.bunkhousehotels.com/hotel-san-jose" target="_blank" rel="noopener noreferrer">Website</a>
      </p>
    </div>

    <div className="col-12 col-md-6 text-center">
      <p>
        <strong>The Line Hotel</strong><br />
        111 East Cesar Chavez<br />
        Austin, TX 78701<br />
        Phone: 512 478 9611 <br />
        <a href="https://www.thelinehotel.com/austin/?utm_source=local-listings&utm_medium=organic&utm_campaign=local-listings" target="_blank" rel="noopener noreferrer">Website</a>
      </p>
    </div>

    <div className="col-12 col-md-6 text-center">
      <p>
        <strong>Hotel Magdalena</strong><br />
        1101 Music Ln<br />
        Austin, TX 78704<br />
        Reservations: 1-512-442-1000 <br />
        <a href="https://www.hyatt.com/bunkhouse-hotels/en-US/auskr-hotel-magdalena?src=vanity_hotelmagdalena.com" target="_blank" rel="noopener noreferrer">Website</a>
      </p>
    </div>

    <div className="col-12 col-md-6 text-center">
      <p>
        <strong>Hotel ZaZa</strong><br />
        400 Lavaca St<br />
        Austin, TX 78701<br />
        Phone: 1-512-542-9292 <br />
        <a href="https://www.hotelzaza.com/austin" target="_blank" rel="noopener noreferrer">Website</a>
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

