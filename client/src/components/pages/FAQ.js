import React, { useState, useEffect } from "react";
import NMCasual from '../../assets/NMCasual.JPG';
import maininterior from '../../assets/maininterior.jpeg';
import dock from '../../assets/dock.JPG';
import outsidewide from '../../assets/outsidewide.jpeg';
import chandelier from '../../assets/chandelier.jpeg';
import { Carousel } from "bootstrap";


export default function FAQ() {
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
         <img src={dock} alt=""
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
      FAQ's
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
             padding: "15px",
             border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `
           0 0 5px rgba(243, 174, 61, 0.6),
          0 0 10px rgba(243, 174, 61, 0.35)
        `, 
            marginBottom: '2vmin',
          }}>
            <h3><strong>How do I rsvp and what is the deadline? </strong></h3>
            <p style={{ marginBottom: 0 }}>
             <strong>COMING SOON:</strong> You’ll receive login credentials (username and password) with your mailed invitation. At that point you may log on via the “RSVP” page to submit your response.
            </p>
          </div>
               <div className='container align-items-center'
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
            marginBottom: '2vmin',
          }}>
            <h3><strong>Can I bring my kid(s) or a plus-one? </strong></h3>
            <p>
             While we love kids, this will be an adults-only event and we kindly ask that children under 18 stay home.
            </p>
             <p style={{ marginBottom: 0 }}>
             Any plus-ones will be listed on your invitation and on your personal RSVP page when you log in to submit your RSVP. Unfortunately, we cannot accommodate additional guests or anyone not explicitly listed on your invitation.
            </p>
          </div>

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
            marginBottom: '2vmin',
          }}>
            <h3><strong>What time does the wedding start?  </strong></h3>
            <p style={{ marginBottom: 0 }}>
             Doors will open to guests at 5:30 for a 6pm ceremony. A more detailed itinerary will be shared ahead of the wedding. 
            </p>
          </div>

              <div className='container align-items-center'
          style={{
            ...getCardStyle(cardVisible, 0.6),
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
            marginBottom: '2vmin',
          }}>
            <h3><strong>I have some dietary concerns. Will I be able to enjoy dinner?</strong></h3>
            <p style={{ marginBottom: 0 }}>
             When you RSVP, a comment box will be available to make us aware of any dietary concerns and we’ll work to accommodate accordingly - we’re working with our caterer to provide a range of dietary options, and allergen information for our menu will be available on the day. 
            </p>
          </div>

              <div className='container align-items-center'
          style={{
            ...getCardStyle(cardVisible, 0.8),
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
            marginBottom: '2vmin',
          }}>
            <h3><strong>What is the dress code?</strong></h3>
            <p style={{ marginBottom: 0 }}>
             The dress code for our wedding is Cocktail Attire: a semi-formal, polished, and elevated dress code sitting between Semi-Formal and Formal. This generally means a suit and tie with dress shoes, or a knee length or midi length dress with heels or dressy flats. Please feel free (but certainly not obligated) to lean into fall colors when choosing your ensemble.
            </p>
          </div>

              <div className='container align-items-center'
          style={{
            ...getCardStyle(cardVisible, 1.0),
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
            marginBottom: '2vmin',
          }}>
            <h3><strong>I have questions about the venue and transportation / parking logistics.</strong></h3>
            <p style={{ marginBottom: 0 }}>
             Please refer to the “Venue” page to learn more about the Brodie Homestead and find details about arrival and parking.
            </p>
          </div>
                  <div className='container align-items-center'
          style={{
            ...getCardStyle(cardVisible, 1.2),
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
            marginBottom: '2vmin',
          }}>
            <h3><strong>Is there a room block at a specific hotel? Do you have any recommendations on lodging or the best parts of town to stay in?</strong></h3>
            <p style={{ marginBottom: 0 }}>
             We do not have a room block. Please refer to the “Travel” page for lodging recommendations.
            </p>
          </div>

                   <div className='container align-items-center'
          style={{
            ...getCardStyle(cardVisible, 1.4),
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
            marginBottom: '2vmin',
          }}>
            <h3><strong>October 16th is a Friday…is that right?</strong></h3>
            <p style={{ marginBottom: 0 }}>
             That’s right! We met on October 16th, 2021 and never looked back, so we figured our 5th anniversary was the perfect day to tie the knot! Plus, nobody will risk missing their favorite college football matchups on Saturday.
            </p>
          </div>

                    <div className='container align-items-center'
          style={{
            ...getCardStyle(cardVisible, 1.6),
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
          }}>
            <h3><strong>My question wasn’t answered here. What can I do?</strong></h3>
           <p style={{ marginBottom: 0 }}>
  Please feel free to reach out to us directly via phone or email us at{" "}
  <a href="mailto:scottortizwedding@gmail.com">
    scottortizwedding@gmail.com
  </a>.
</p>
          </div>
     <br></br>

    </div>
    </div>
    </>
  );
}

