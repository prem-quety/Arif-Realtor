"use client";
import { useState, useRef } from "react";

export default function Hero() {
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPaused(!paused);
  };

  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/interior.mp4" // replace with your loop
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid h-full max-w-7xl place-items-center px-6 text-center text-white">
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest text-white/70">
            PREMIUM REAL ESTATE
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            Find Your Next{" "}
            <span className="text-white/90 underline decoration-white/40">
              Remarkable
            </span>{" "}
            Address
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Curated listings, private tours, and white-glove service—tailored
            for you.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/mortgage"
              className="rounded-xl bg-white px-6 py-3 text-gray-900 shadow hover:opacity-90"
            >
              Mortgage Calculator
            </a>
            <a
              href="#services"
              className="rounded-xl border border-white/40 px-6 py-3 hover:bg-white/10"
            >
              Our Services
            </a>
            <button
              onClick={toggleVideo}
              className="rounded-xl border border-white/40 px-4 py-3 text-sm hover:bg-white/10"
            >
              {paused ? "Play Background" : "Pause Background"}
            </button>
          </div>

          {/* trust badges */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-left text-sm text-white/80">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <div className="text-2xl font-bold">250+</div>
              Verified Listings
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <div className="text-2xl font-bold">98%</div>
              Client Satisfaction
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <div className="text-2xl font-bold">24/7</div>
              Dedicated Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
