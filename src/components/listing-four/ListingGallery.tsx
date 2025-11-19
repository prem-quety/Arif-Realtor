"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ListingGallery: React.FC = () => {
  const [active, setActive] = useState(0);

  const images = [
    "/assets/images/third/GetMediaFour (0).jfif",
    "/assets/images/third/GetMediaFour (1).jfif",
  ];

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg h-[500px]">
      <AnimatePresence initial={false}>
        <motion.img
          key={active}
          src={images[active]}
          alt={`Property image ${active + 1}`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* slider controls */}
      <button
        onClick={() =>
          setActive((active - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white rounded-full px-3 py-2 hover:bg-black/70 z-10"
      >
        ‹
      </button>
      <button
        onClick={() => setActive((active + 1) % images.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white rounded-full px-3 py-2 hover:bg-black/70 z-10"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 w-2 rounded-full transition ${
              active === i ? "bg-accent" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      
      <div className="absolute top-4 right-4 z-10">
        <button className="bg-white/90 hover:bg-white text-primary px-4 py-2 rounded-md text-sm font-medium shadow-lg transition-all flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          View All {images.length} Photos
        </button>
      </div>
    </div>
  );
};

export default ListingGallery;
