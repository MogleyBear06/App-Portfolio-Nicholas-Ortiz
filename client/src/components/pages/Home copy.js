import React, { useState, useEffect } from "react";
import mainimg from "../../assets/main2.jpeg";
import { Card, Button, Carousel, CardText, Nav} from 'react-bootstrap';

export default function Home() {
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBottom(true), 300);
    return () => clearTimeout(t);
  }, []);


  return (
    <>
    
  <div
    style={{
          marginTop: '7%',
          marginBottom: '7%',
          minHeight: '100vh',
        }}
  >
   <img src={mainimg} alt=""
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

    <div
  style={{
    display: "flex",
    flexDirection: "column",  
    alignItems: "center",      
  }}
>
        <Card
          style={{
            maxWidth: '800px', 
            margin: "0 auto",
            marginBottom: "40px",
            textAlign: "center",
            backdropFilter: 'blur(8px)',           
             WebkitBackdropFilter: 'blur(8px)',
            padding: "0", // remove padding from Card to avoid clipping background
            transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
            border: '2px solid rgb(179, 37, 25)',
            
            clipPath: "polygon(0 50%, 20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%)",
            position: 'relative', // for z-index control if needed
          }}
        >
          
          <CardText
            className='home-tag'
          style={{
    fontWeight: "bold",
    color: "silver",

    /* Core surface */
    backgroundColor: "rgba(15, 15, 15, 0.7)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",

    borderRadius: "12px",

    padding: "1rem",
    margin: "0",
  }}
          >
             Brass Knuckle Films is the new action film label from Robert Rodriguez, 
           creator of blockbuster hits such as Desperado, Spy Kids, Alita: Battle 
           Angel and Sin City. We are based out of Robert’s Troublemaker Studios 
           in Austin, Texas, where Robert has maximized efficiencies on all his 
           movies while pushing the boundaries of innovation and entertainment. 
            Using the Republic platform, Brass Knuckle Films has taken innovation 
           even further by giving fans an opportunity to invest in its inaugural 
           slate through a campaign that was launched (and oversubscribed) in 
           March of 2025. See below for the main campaign video or for more information 
           go to{" "}
            <a
              href="https://republic.com/rodriguez"
              className="custom-nav-link hover-brighten"
              style={{ color: 'silver' }}
            >
            <strong>Republic.com</strong>.
            </a>
          </CardText>
        </Card>


        <div style={{ 

  position: "relative", 
  display: "inline-block",  
  opacity: showBottom ? 1 : 0,
  transition: "opacity 0.6s ease", }}>
  <h2 style={{ position: "relative", zIndex: 2 }}>
    October 16, 2026
  </h2>

  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(96,85,61,0.7)",
      backdropFilter: "blur(1px)",
      WebkitBackdropFilter: "blur(5px)",
      borderRadius: "30px",
         maskImage: `linear-gradient(to right, transparent, white 3%, white 90%, transparent), 
                    linear-gradient(to bottom, transparent, white 20%, white 30%, transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, white 2%, white 95%, transparent), 
                          linear-gradient(to bottom, transparent, white 25%, white 60%, transparent)`,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      zIndex: 1,

    }}
  />
</div>
<div style={{ 
 
  position: "relative", 
  display: "inline-block",  
  opacity: showBottom ? 1 : 0,
  transition: "opacity 0.6s ease", }}>
  <h2 style={{ position: "relative", zIndex: 2 }}>
    Austin, TX
  </h2>

  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(96,85,61,0.7)",
      backdropFilter: "blur(1px)",
      WebkitBackdropFilter: "blur(5px)",
      borderRadius: "30px",
         maskImage: `linear-gradient(to right, transparent, white 3%, white 90%, transparent), 
                    linear-gradient(to bottom, transparent, white 20%, white 30%, transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, white 2%, white 95%, transparent), 
                          linear-gradient(to bottom, transparent, white 25%, white 60%, transparent)`,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      zIndex: 1,

    }}
  />
</div>

      </div>
   </div>
 

      </>
  );
}