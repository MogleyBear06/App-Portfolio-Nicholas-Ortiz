import React from 'react';
import video from '../assets/headerbg.mp4';
const vid = () => {
    return (
      <div className='container justify-content-center'>
        <video src= {video} muted autoPlay controls playsInline loop style={{ width: '100%', height: '300pt' }}/>
    
          </div> 
    )
  };
  
  export default vid;