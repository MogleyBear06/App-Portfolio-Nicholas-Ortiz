// components/PersistentBackground.js
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const CF_BASE = "https://d3duw5o0obopn7.cloudfront.net";

// Map each route to its background image
const routeImages = {
  "/": "main2.jpeg",
  "/Venue": "maininterior.jpeg",
  "/Travel": "dock.JPG",
  "/FAQ": "NMCasual.JPG",
  "/Profile": "hands.JPG",
  // add every route here
};

export default function PersistentBackground({ bgColor = "#2a2620" }) {
  const location = useLocation();
  const currentImage = routeImages[location.pathname] || routeImages["/"];

  const [layers, setLayers] = useState([{ src: currentImage, opacity: 1 }]);
  const prevImage = useRef(currentImage);

  useEffect(() => {
    if (currentImage === prevImage.current) return;

    // Add the new image on top, starting invisible
    setLayers((prev) => [...prev, { src: currentImage, opacity: 0 }]);

    // Next tick, fade it in
    requestAnimationFrame(() => {
      setLayers((prev) =>
        prev.map((l) => (l.src === currentImage ? { ...l, opacity: 1 } : l))
      );
    });

    prevImage.current = currentImage;

    // Clean up old layers after transition finishes
    const cleanup = setTimeout(() => {
      setLayers((prev) => prev.filter((l) => l.src === currentImage));
    }, 500);

    return () => clearTimeout(cleanup);
  }, [currentImage]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: bgColor,
          zIndex: -3,
        }}
      />
      {layers.map((layer, i) => (
        <img
          key={layer.src + i}
          src={`${CF_BASE}/${layer.src}`}
          alt=""
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2 + i,
            opacity: layer.opacity,
            transition: "opacity 0.4s ease",
          }}
        />
      ))}
    </>
  );
}