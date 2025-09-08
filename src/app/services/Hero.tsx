"use client";

import { motion } from "framer-motion";

interface ServicesHeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function ServicesHero({
  title = "Bespoke Real Estate Services",
  subtitle = "Luxury homes, private estates, and high‑value assets across Mississauga & the GTA.",
  imageSrc = "/assets/images/luxury-home.jpg",
}: ServicesHeroProps) {
  return (
    <section
      className="relative isolate flex items-center"
      aria-label="Services Hero"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imageSrc}')`,
        }}
      />

      {/* Vignette + gold aura */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_20%,rgba(193,151,62,0.18),transparent_60%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0.55),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center md:text-left"
        >
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center justify-center md:justify-start gap-2 text-xs uppercase tracking-[0.18em] text-white/70">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span className="text-white/40">/</span>
            <span className="text-white">Services</span>
          </div>

          <h1 className="font-serif text-white text-4xl md:text-6xl leading-[1.05]">
            {title}
          </h1>

          <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl">
            {subtitle}
          </p>

          {/* Trust bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-white/85">
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-md">
              Discreet Representation
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-md">
              Market‑Leading Strategy
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-md">
              End‑to‑End Coordination
            </span>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-medium text-white shadow-[0_8px_30px_rgba(193,151,62,0.35)] hover:brightness-110 transition"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/40 text-white hover:bg-white/10 px-6 py-3 font-medium transition"
            >
              Speak to Arif
            </a>
          </div>
        </motion.div>

        {/* Decorative gold rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 h-[2px] w-28 md:w-32 bg-gradient-to-r from-transparent via-[#C1973E] to-transparent origin-left"
        />
      </div>

      {/* Subtle film grain */}
      <style jsx>{`
        section::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.07;
          mix-blend-mode: soft-light;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
}
