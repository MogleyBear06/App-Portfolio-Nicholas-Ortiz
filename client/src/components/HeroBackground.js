// components/HeroBackground.js
import React, { useState } from "react";

const CF_BASE = "https://d3duw5o0obopn7.cloudfront.net";

export default function HeroBackground({ image, bgColor = "#2a2620" }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: bgColor,
          zIndex: -2,
        }}
      />
      <img
        src={`${CF_BASE}/${image}`}
        alt=""
        onLoad={() => setImgLoaded(true)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          opacity: imgLoaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />
    </>
  );
}