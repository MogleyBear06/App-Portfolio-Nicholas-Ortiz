import React, { useState, useRef, useEffect } from "react";

const CF_BASE = "https://d3duw5o0obopn7.cloudfront.net";

export default function HeroBackgroundVideo({ video, poster, bgImage, bgColor = "#85673a", isSmallScreen }) {
  const videoRef = useRef(null);
  const imgRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [imageReady, setImageReady] = useState(!bgImage);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoReady(true);
    }
    if (imgRef.current && imgRef.current.complete) {
      setImageReady(true);
    }
  }, [video, bgImage]);

  const bothReady = videoReady && imageReady;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: bgColor,
          zIndex: -3,
        }}
      />
      {bgImage && (
        <img
          ref={imgRef}
          src={`${CF_BASE}/${bgImage}`}
          alt=""
          onLoad={() => setImageReady(true)}
          style={{
            position: 'fixed',
            inset: 0,
            width: '100%',
            height: '100dvh',
            minHeight: '100vh',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: -2,
            opacity: imageReady ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        />
      )}
   <video
  ref={videoRef}
  src={`${CF_BASE}/${video}`}
  poster={poster ? `${CF_BASE}/${poster}` : undefined}
  autoPlay
  muted
  playsInline
  webkit-playsinline="true"
  preload="auto"
  onCanPlay={() => setVideoReady(true)}
  style={{
    position: 'fixed',
    inset: 0,
    width: '100%',
    height: '100dvh',
    minHeight: '100vh',
    objectFit: isSmallScreen ? 'contain' : 'cover',
    objectPosition: 'center',
    zIndex: -1,
    opacity: bothReady ? 1 : 0,
    transition: bothReady ? 'none' : 'opacity 0.4s ease',
...(isSmallScreen && {
  maskImage: `linear-gradient(to right, transparent, white 3%, white 90%, transparent), linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)`,
  WebkitMaskImage: `linear-gradient(to right, transparent, white 2%, white 95%, transparent), linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)`,
  maskComposite: 'intersect',
  WebkitMaskComposite: 'source-in',
}),
  }}
/>
    </>
  );
}