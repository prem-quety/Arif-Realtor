"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Samantha Patel",
    date: "12-03-2023",
    statement:
      "Arif made renting our condo stress-free. Clear communication, fast paperwork, and he even checked in after move-in. Highly professional.",
  },
  {
    name: "Jason & Emily Wright",
    date: "05-09-2023",
    statement:
      "We were nervous first-time buyers, but Arif guided us step by step. He was honest about pricing, patient during visits, and got us our dream home under budget.",
  },
  {
    name: "Mark D’Souza",
    date: "22-01-2024",
    statement:
      "Smoothest leasing process I’ve ever experienced. Arif handled everything with speed and accuracy. Felt like a true partner throughout.",
  },
  {
    name: "Olivia Chen",
    date: "14-05-2024",
    statement:
      "What stood out was Arif’s market insight. He advised me to wait a month before listing—his timing was spot-on and I closed above asking.",
  },
  {
    name: "Ravi Sharma",
    date: "02-11-2024",
    statement:
      "Arif was always available, from late-night calls to early morning showings. A rare mix of professionalism and genuine care.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#faf7f0] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="tracking-[0.18em] uppercase text-xs font-semibold text-[#7c6a2b]">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-900">
            Client Reviews
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-[28px] border border-amber-100/60 bg-white/90 p-12 shadow-[0_18px_60px_rgba(0,0,0,0.10)] hover:shadow-[0_28px_80px_rgba(0,0,0,0.14)] backdrop-blur-sm transition"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

              {/* elegant watermark quote */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-4 text-[140px] leading-none font-serif text-amber-200/30 select-none"
              >
                &ldquo;
              </span>

              <p className="relative mt-2 text-[1.06rem] leading-8 text-neutral-700 italic">
                “{t.statement}”
              </p>

              <div className="mt-10 flex items-end justify-between">
                <p className="text-neutral-900">
                  <span className="block text-xs tracking-[0.18em] uppercase text-amber-700/70">
                    — Client
                  </span>
                  {/* load a signature font (e.g. Great Vibes / Parisienne) and swap below */}
                  <p className="font-serif text-xl italic text-neutral-900 border-b border-[#d4af37] inline-block pb-1">
                    {t.name}
                  </p>
                </p>
                {t.date && (
                  <span className="text-xs text-neutral-500">{t.date}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
