"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface Area {
  name: string;
  image: string;
  blurb: string;
}

export default function AreasCoveredSection() {
  const prefersReduce = useReducedMotion();
  const [selected, setSelected] = useState<Area | null>(null);

  const areas: Area[] = [
    {
      name: "Mississauga",
      image: "/assets/images/Mississauga.jpg",
      blurb: "Lakeside living, vibrant squares, and calm suburban pockets.",
    },
    {
      name: "Oakville",
      image: "/assets/images/Oakville.jpg",
      blurb: "Tree-lined streets, harbours, and stately neighbourhoods.",
    },
    {
      name: "Milton",
      image: "/assets/images/Milton.jpg",
      blurb: "Family-first communities with quick access to escarpment trails.",
    },
    {
      name: "Waterloo",
      image: "/assets/images/Waterloo.webp",
      blurb: "Campus energy meets refined residential streets and tech hubs.",
    },
    {
      name: "Ajax",
      image: "/assets/images/AJAX.jpg",
      blurb: "Quiet waterfronts, parks, and easy commuter links.",
    },
    {
      name: "Toronto",
      image: "/assets/images/Toronto.webp",
      blurb:
        "Iconic skyline, distinct neighbourhoods, culture on every corner.",
    },
    {
      name: "Oshawa",
      image: "/assets/images/Oshawa.webp",
      blurb: "Historic cores balanced with new, modern communities.",
    },
    {
      name: "Niagara Falls",
      image: "/assets/images/Niagara.jpg",
      blurb: "Wine country charm and scenic riverside living.",
    },
    {
      name: "Pickering",
      image: "/assets/images/Pickering.avif",
      blurb: "Waterfront boardwalks and calm, well-kept streets.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReduce ? 0 : 0.06,
        delayChildren: prefersReduce ? 0 : 0.06,
      },
    },
  };

  const slug = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  return (
    <section className="relative bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.12),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 pt-10 text-sm text-neutral-500"
        >
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-900">GTA & Beyond</span>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4 }}
          className="py-10 text-center"
        >
          <h2 className="font-serif text-5xl sm:text-6xl font-semibold tracking-tight text-neutral-900">
            <span className="bg-gradient-to-r from-[#c5a24f] via-[#d4af37] to-[#c5a24f] bg-clip-text text-transparent">
              Areas We Cover
            </span>
          </h2>
          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            Minimal, high-end browsing for serious buyers. Tap a card to open a
            clean, focused overview.
          </p>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {areas.map((area) => (
            <AreaCard
              key={area.name}
              area={area}
              onOpen={() => setSelected(area)}
            />
          ))}
        </motion.div>
      </div>

      <LocationModal
        area={selected}
        onClose={() => setSelected(null)}
        slug={slug}
      />
    </section>
  );
}

function AreaCard({ area, onOpen }: { area: Area; onOpen: () => void }) {
  const { name, image } = area;
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      className="group relative block w-full overflow-hidden rounded-2xl border border-neutral-200/70 bg-white text-left transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={`${name} homes & neighbourhoods`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-end justify-between">
            <h3 className="font-serif text-3xl font-semibold text-white drop-shadow-sm">
              {name}
            </h3>
            <Chevron className="opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </div>
          <div className="mt-3 h-px w-14 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
      </div>
      <div className="flex items-center justify-end border-t border-neutral-200/70 bg-white px-5 py-3 text-sm text-neutral-700">
        <span className="text-neutral-500 group-hover:text-neutral-800">
          View
        </span>
      </div>
    </motion.button>
  );
}

function LocationModal({
  area,
  onClose,
  slug,
}: {
  area: Area | null;
  onClose: () => void;
  slug: (s: string) => string;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!area) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => closeRef.current?.focus(), 10);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [area, onClose]);

  return (
    <AnimatePresence>
      {area && (
        <motion.div
          key="modal"
          aria-modal="true"
          role="dialog"
          aria-labelledby="location-title"
          className="fixed inset-0 z-50"
          initial={false}
        >
          <motion.div
            className="absolute inset-0 backdrop-blur-sm bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative mx-auto mt-20 w-[92%] max-w-3xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.99,
              transition: { duration: 0.2 },
            }}
          >
            <div className="relative h-52 sm:h-64">
              <Image
                src={area.image}
                alt="Location banner"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <h3
                id="location-title"
                className="absolute bottom-4 left-5 font-serif text-3xl font-semibold text-white drop-shadow-sm"
              >
                {area.name}
              </h3>
            </div>

            <div className="p-6 sm:p-8">
              <p className="max-w-2xl text-neutral-700">{area.blurb}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#d4af37] bg-[#d4af37] px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-[#b9934a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                >
                  Contact Us for More Info
                </Link>
                <button
                  ref={closeRef}
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Chevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={`h-5 w-5 text-white ${props.className ?? ""}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
