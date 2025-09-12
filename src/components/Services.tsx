"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  key: string;
  title: string;
  desc: string;
  details: string;
  href: string;
  bullets: string[];
}

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  const items: Service[] = [
    {
      key: "acquisition",
      title: "Concierge Acquisition",
      desc: "Entrust us once. We discreetly source, screen, and secure the ideal estate, with private viewings tailored exclusively to you.",
      details:
        "From curated previews to final negotiations, we deliver a seamless acquisition experience—defined by privacy, precision, and sophistication.",
      href: "#",
      bullets: [
        "Confidential representation with absolute discretion",
        "Access to a refined network of trusted vendors",
        "Streamlined process with transparent, timely reporting",
      ],
    },
    {
      key: "private-sales",
      title: "Private Portfolio Sales",
      desc: "Discreet listings, qualified buyers, no noise. We deliver precision pricing and negotiation under the highest confidentiality.",
      details:
        "Your property deserves a stage as refined as its value. We present it to a vetted buyer network with cinematic media, private showings, and seamless offer management.",
      href: "#",
      bullets: [
        "Confidential sales under strict NDA",
        "Access to an exclusive pool of qualified buyers",
        "Controlled process with expert negotiation",
      ],
    },
    {
      key: "global-suite",
      title: "Global Marketing Suite",
      desc: "Sotheby-grade storytelling through film, twilight photography, print features, and global syndication—crafted to captivate.",
      details:
        "We create world-class brand assets and deliver international exposure, ensuring your property is presented with cinematic impact to the right audience, everywhere.",
      href: "#",
      bullets: [
        "Architectural film and luxury photography",
        "Editorial features and global distribution",
        "Strategic placement with lasting visibility",
      ],
    },
    {
      key: "off-market",
      title: "Discreet Off-Market Access",
      desc: "Enter a private network where billion-dollar properties change hands quietly—never reaching the public market.",
      details:
        "Gain priority entry to private sellers and exclusive “whisper” listings, managed with strict discretion and full compliance at every step.",
      href: "#",
      bullets: [
        "Confidential access to rare properties",
        "Priority introductions to private sellers",
        "A secure process guided with discretion ",
      ],
    },
    {
      key: "advisory",
      title: "Investment Advisory",
      desc: "Institutional-grade diligence, yield modeling, and bespoke portfolio strategies—crafted for long-term growth and security.",
      details:
        "We provide data-driven analysis, underwriting, and tailored asset planning to align your portfolio with risk and reward.",
      href: "#",
      bullets: [
        "Rigorous due diligence and market insights",
        "Customized strategies for sustained growth",
        "Disciplined planning with transparent reporting ",
      ],
    },
    {
      key: "relocation",
      title: "Relocation Concierge",
      desc: "A seamless move, orchestrated end-to-end—from schools and clubs to services and turnkey settling-in.",
      details:
        "We handle every detail of your transition with white-glove precision, from local orientation to elite introductions, ensuring a stress-free relocation experience.",
      href: "#",
      bullets: [
        "Personalized settling-in with curated services",
        "Access to premium schools, clubs, and networks",
        "Full coordination with discreet oversight",
      ],
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Luxe background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#faf7f0]" />
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.18),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Bespoke Service
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold tracking-tight text-neutral-900">
            The Premium Real Estate Collection
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
            Minimal, discreet, and outcomes-obsessed. Designed for clients who
            value time, privacy, and precision.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          {items.map((s, i) => (
            <motion.button
              type="button"
              key={s.key}
              onClick={() => setSelected(s)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group relative w-full max-w-[28rem] mx-auto overflow-hidden rounded-3xl border border-neutral-100 bg-white/95 p-12 text-left shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              {/* Gold gradient bar */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#d4af37] to-[#c5a24f]" />

              {/* Glow accent */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.25),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative flex flex-col h-full">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-5 flex-grow text-neutral-700 leading-relaxed text-lg">
                  {s.desc}
                </p>
                <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-[#7c6a2b] transition group-hover:text-[#d4af37]">
                  Learn more
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="transition group-hover:translate-x-0.5"
                  >
                    <path
                      fill="currentColor"
                      d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                    />
                  </svg>
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-24 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-10 py-4 text-base font-medium text-neutral-900 shadow-md backdrop-blur-md transition hover:border-[#d4af37] hover:text-[#7c6a2b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            Request a private consultation
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="transition group-hover:translate-x-0.5"
            >
              <path
                fill="currentColor"
                d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
              />
            </svg>
          </a>
        </div>
      </div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ServiceModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => closeRef.current?.focus(), 10);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [service, onClose]);

  const contactHref = service
    ? `/contact?subject=${encodeURIComponent("Inquiry: " + service.title)}`
    : "#";

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          initial={false}
        >
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative mx-auto mt-24 w-[92%] max-w-3xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl"
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
            {/* Gold bar + title */}
            <div className="relative">
              <div className="h-1 w-full bg-gradient-to-r from-[#d4af37] to-[#c5a24f]" />
              <h3 className="px-6 py-5 font-serif text-3xl font-semibold text-neutral-900">
                {service.title}
              </h3>
            </div>

            <div className="px-6 pb-7 sm:px-8">
              <p className="max-w-2xl text-neutral-700">{service.details}</p>

              <div className="mt-6 grid gap-3 text-sm text-neutral-700">
                {service.bullets.map((b, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Dot /> {b}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={contactHref}
                  className="inline-flex items-center justify-center rounded-full border border-[#d4af37] bg-[#d4af37] px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-[#b9934a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                >
                  Contact us about this service
                </a>
                <button
                  ref={closeRef}
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
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

function Dot() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
      <circle cx="5" cy="5" r="5" fill="#d4af37" />
    </svg>
  );
}
