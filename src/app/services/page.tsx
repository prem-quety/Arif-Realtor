"use client";

import { AnimatePresence, motion } from "framer-motion";
import ServicesHero from "./Hero";
import { useState } from "react";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <main className="bg-background text-heading" id="services">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl leading-tight"
          >
            Bespoke Real Estate Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-muted"
          >
            Luxury homes, private estates, and high‑value assets across
            Mississauga & the GTA.
          </motion.p>
        </section>

        {/* DIVIDER */}
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-px w-28 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent origin-center"
          />
        </div>

        {/* SERVICES */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <Service title="Luxury Homes">
              Private previews, gated estates, waterfront retreats — tailored
              acquisition strategy for top‑tier residences.
            </Service>
            <Service title="Exclusive Penthouses">
              Skyline views, discreet negotiations, and rare offerings in
              Toronto’s most coveted towers.
            </Service>
            <Service title="Custom Bungalows">
              Architect‑driven builds and legacy properties curated to your
              lifestyle, taste, and privacy.
            </Service>
            <Service title="Commercial & Industrial">
              Factories, warehouses, land assemblies — structured deals that
              balance yield with growth.
            </Service>
            <Service title="Investment Portfolios">
              Multi‑unit holdings, cash‑flow modeling, and long‑term exit
              planning that compounds wealth.
            </Service>
            <Service title="Development Projects">
              From raw land to finished communities — zoning, partners, and
              strategy under one umbrella.
            </Service>
          </div>
        </section>

        {/* PROOF STRIP */}
        <section className="mx-auto max-w-6xl px-6 py-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[15px] md:text-base text-heading"
          >
            Negotiation expertise, precise timing, and local intelligence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm text-muted"
          >
            <span className="text-heading/80">Discreet Transactions</span>
            <span className="mx-3 text-muted">•</span>
            <span className="text-heading/80">Global Network</span>
            <span className="mx-3 text-muted">•</span>
            <span className="text-heading/80">Generational Assets</span>
          </motion.p>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-6xl px-6 py-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-lg md:text-xl"
          >
            Consult — Strategy — Market — Close
          </motion.p>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href="/contact"
            className="inline-block rounded-md bg-accent px-8 py-3 font-medium text-white text-lg shadow-[0_8px_40px_rgba(193,151,62,0.4)] hover:brightness-110 transition"
          >
            Work With Arif
          </motion.a>
          <p className="mt-2 text-sm text-muted">
            Confidential consultations. High‑stakes results.
          </p>
        </section>

        <style jsx global>{`
          details {
            position: relative;
          }
          details > summary {
            list-style: none;
            cursor: pointer;
          }
          details > summary::-webkit-details-marker {
            display: none;
          }
        `}</style>
      </main>
    </>
  );
}

function Service({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.details
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group border-b border-black/10 pb-5"
    >
      <summary className="flex items-baseline justify-between py-2 cursor-pointer select-none">
        <h3 className="font-serif text-2xl">{title}</h3>
        <span
          aria-hidden
          className={`text-accent text-sm opacity-80 transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          ＋
        </span>
      </summary>

      {/* Animated content wrapper */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.p
              variants={{ open: { y: 0 }, collapsed: { y: -6 } }}
              transition={{ duration: 0.35 }}
              className="mt-1 text-muted"
            >
              {children}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.details>
  );
}
