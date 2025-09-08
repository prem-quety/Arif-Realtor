"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Light theme version — refined, gallery-like, zero cards.

const projects = [
  {
    id: 1,
    title: "Lakeview Estate",
    meta: "Oakville, ON • 2024",
    image: "/assets/images/housing-1.jpg",
  },
  {
    id: 2,
    title: "Yorkville Penthouse",
    meta: "Toronto, ON • 2023",
    image: "/assets/images/housing-2.avif",
  },
  {
    id: 3,
    title: "Rosedale Manor",
    meta: "Toronto, ON • 2024",
    image: "/assets/images/housing-3.webp",
  },
  {
    id: 4,
    title: "Harbourfront Residence",
    meta: "Toronto, ON • 2022",
    image: "/assets/images/housing-4.webp",
  },
  //   {
  //     id: 5,
  //     title: "Lorne Park Retreat",
  //     meta: "Mississauga, ON • 2024",
  //     image: "/assets/images/Waterloo.webp",
  //   },
  //   {
  //     id: 6,
  //     title: "Forest Hill Classic",
  //     meta: "Toronto, ON • 2023",
  //     image: "/assets/images/ajax.jpg",
  //   },
];

export default function LuxTriptychPortfolio() {
  const [active, setActive] = useState<number | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="portfolio" className="relative bg-background text-heading">
      {/* Ambient gold aura */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-40rem] h-[120rem] w-[120rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(193,151,62,0.16),transparent_60%)] blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 text-center">
        <p className="tracking-[0.22em] text-[11px] uppercase text-accent/80">
          Portfolio
        </p>
        <h2 className="mt-2 font-serif text-4xl md:text-5xl font-semibold">
          Signature Residences
        </h2>
        <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      {/* Index rail */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="sticky top-6 z-10 mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
          <span className="inline-block h-px w-6 bg-black/10" />
          <span>Curated Works</span>
          <span className="mx-2 text-black/20">•</span>
          <span className="text-accent/80">Triptych Series</span>
        </div>
      </div>

      {/* Scroll gallery */}
      <div ref={scroller} className="relative mx-auto max-w-[92rem] px-6">
        <div className="grid grid-cols-1 gap-14 md:gap-20">
          {projects.map((p, idx) => (
            <TriptychRow
              key={p.id}
              p={p}
              idx={idx}
              onOpen={() => setActive(idx)}
            />
          ))}
        </div>

        {/* subtle end rule */}
        <div className="mx-auto my-16 h-px w-40 bg-black/10" />
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active !== null && (
          <Lightbox
            project={projects[active]}
            onClose={() => setActive(null)}
            onNext={() =>
              setActive((p) => (p === null ? 0 : (p + 1) % projects.length))
            }
            onPrev={() =>
              setActive((p) =>
                p === null ? 0 : (p - 1 + projects.length) % projects.length
              )
            }
          />
        )}
      </AnimatePresence>

      {/* Utilities */}
      <style jsx global>{`
        .grainy:before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.1;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
        }
        .no-highlight {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </section>
  );
}

function TriptychRow({
  p,
  idx,
  onOpen,
}: {
  p: { id: number; title: string; meta: string; image: string };
  idx: number;
  onOpen: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const parallax = useMouseParallax();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative select-none grainy"
    >
      {/* Roman index */}
      <div className="pointer-events-none absolute -left-2 -top-6 hidden text-5xl font-serif text-heading/10 md:block">
        {toRoman(idx + 1).padStart(2, " ")}
      </div>

      {/* Gold thread divider */}
      <div
        aria-hidden
        className="absolute -left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-accent/60 to-transparent md:block"
      />

      {/* Triptych frame */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onOpen}
        className="no-highlight relative flex h-[70vh] cursor-zoom-in items-stretch overflow-hidden rounded-[40px] bg-white ring-1 ring-black/10 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
      >
        {/* Panels */}
        <Panel
          image={p.image}
          pos="left"
          intensity={parallax.x * 0.6}
          hovered={hovered}
        />
        <Panel
          image={p.image}
          pos="center"
          intensity={parallax.x * 0.9}
          hovered={hovered}
        />
        <Panel
          image={p.image}
          pos="right"
          intensity={parallax.x * 0.6}
          hovered={hovered}
        />

        {/* Caption overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-10">
          <div className="mb-3 h-[2px] w-28 bg-gradient-to-r from-transparent via-accent to-transparent" />
          <h3 className="font-serif text-2xl md:text-3xl text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
            {p.title}
          </h3>
          <p className="mt-1 text-white/80 text-xs md:text-sm">{p.meta}</p>
        </div>

        {/* sheen on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_15%,rgba(193,151,62,0.18),transparent_60%)] mix-blend-screen" />
        </div>
      </div>
    </motion.article>
  );
}

function Panel({
  image,
  pos,
  intensity,
  hovered,
}: {
  image: string;
  pos: "left" | "center" | "right";
  intensity: number;
  hovered: boolean;
}) {
  const width = pos === "center" ? "flex-[0.58]" : "flex-[0.21]";
  const objectPos =
    pos === "left"
      ? "object-[35%_center]"
      : pos === "right"
      ? "object-[65%_center]"
      : "object-center";

  return (
    <div
      className={`relative ${width} overflow-hidden transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]`}
      style={{
        transform: hovered ? `perspective(1400px) translateZ(0)` : undefined,
      }}
    >
      <motion.img
        src={image}
        alt=""
        className={`h-full w-full object-cover ${objectPos}`}
        style={{
          transform: `translateX(${
            intensity * (pos === "left" ? -1 : pos === "right" ? 1 : 0)
          }px) scale(${hovered && pos === "center" ? 1.04 : 1.02})`,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
      />

      {/* soft inner border */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
    </div>
  );
}

function Lightbox({
  project,
  onClose,
  onNext,
  onPrev,
}: {
  project: { title: string; meta: string; image: string };
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.99 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 10, opacity: 0, scale: 0.99 }}
        transition={{ duration: 0.25 }}
        className="relative mx-auto mt-10 w-[94%] max-w-[96rem] overflow-hidden rounded-3xl bg-white ring-1 ring-black/10 shadow-xl"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[84vh] object-contain bg-white"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/60 to-transparent p-6">
          <p className="font-serif text-heading text-xl">{project.title}</p>
          <p className="text-muted text-xs mt-1">{project.meta}</p>
        </div>

        <div className="absolute left-4 top-4 flex gap-2">
          <button
            onClick={onClose}
            className="rounded-full bg-neutral-900/90 px-3 py-1.5 text-sm text-white shadow hover:bg-neutral-900"
          >
            Close
          </button>
        </div>

        {/* prev/next */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
          <button
            aria-label="Prev"
            onClick={onPrev}
            className="rounded-full bg-black/10 p-3 backdrop-blur-md hover:bg-black/20 focus:outline-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={onNext}
            className="rounded-full bg-black/10 p-3 backdrop-blur-md hover:bg-black/20 focus:outline-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function toRoman(num: number) {
  const romans: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";
  for (const [v, s] of romans) {
    while (num >= v) {
      result += s;
      num -= v;
    }
  }
  return result;
}

function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setPos({ x: (e.clientX - cx) / 35, y: (e.clientY - cy) / 35 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return pos;
}
