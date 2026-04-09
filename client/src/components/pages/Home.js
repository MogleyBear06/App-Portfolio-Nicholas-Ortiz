import React, { useState, useEffect } from "react";
import mainimg from "../../assets/main2.jpeg";

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
          
          minHeight: '80vh',
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
          
          marginBottom: '7%',
         
        }}
   >

   
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
      background: "rgba(96,85,61,0.7)",
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
      Nick & Molly
    </h1>
  </div>
</div>

   <div
  className="d-flex justify-content-center"
  style={{
    opacity: showBottom ? 1 : 0,
    transition: "opacity 0.9s ease",
    transitionDelay: "0.8s"
  }}
>
  <div
    style={{
      background: "rgba(96,85,61,0.7)",
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
    <h2
      style={{
        margin: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",

       
        color: "white"
      }}
    >
      October 16th, 2026
    </h2>
  </div>
</div>

   <div
  className="d-flex justify-content-center"
  style={{
    opacity: showBottom ? 1 : 0,
    transition: "opacity 0.9s ease",
    transitionDelay: "1.6s"
  }}
>
  <div
    style={{
      background: "rgba(96,85,61,0.7)",
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
    <h2
      style={{
        margin: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
   
        color: "white"
      }}
    >
      Austin, TX
    </h2>
  </div>
</div>

</div>

   </div>
 

      </>
  );
}