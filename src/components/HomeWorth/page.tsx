// components/HomeValuationBanner.tsx

"use client";

import React from "react";

const HomeValuationBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/assets/images/luxury-home.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 px-6 max-w-3xl text-white">
        <h2 className="text-4xl font-serif text-white mb-4">
          What's Your Home Worth?
        </h2>
        <p className="text-white/90 text-sm md:text-base mb-6">
          Discover your home's true value with expert guidance. Leverage
          tailored strategies and deep market insights to maximize your
          property’s potential. Start your journey to top-dollar returns today!
        </p>
        <button className="border border-accent text-accent hover:bg-accent hover:text-white transition px-6 py-2 rounded-md font-medium">
          Request Free Home Valuation
        </button>
      </div>
    </section>
  );
};

export default HomeValuationBanner;
