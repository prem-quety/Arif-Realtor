"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nadia Minetto",
    date: "18-01-2021",
    statement:
      "Mr. Rajer was the agent for the home we rented in December 2020. Arif was extremely helpful, open, transparent, and reliable through the whole process, he really cared about us, understood our needs, and fought hard for us as we were in a difficult situation. From the very first time I spoke to him, he was very reassuring and professional, making it very comforting to work with him and trust him. I highly recommend him to anyone looking to either rent or buy a home.",
  },
  {
    name: "Arvind Nair & Resmi Nair",
    date: "29-06-2022",
    statement:
      "I was referred to Arif by a friend. He carefully listened to my requirements, shared only relevant listings, and scheduled visits around my work schedule. The second property we saw perfectly matched my and my spouse's expectations. Arif professionally managed all formalities, facilitated seamless communication with the landlord, and even attended the key handover personally. His polite and professional demeanor stood out throughout the process. We highly recommend Arif and look forward to working with him again for future real estate needs. Thank you!",
  },
  {
    name: "Darren Griffiths",
    date: "13-09-2022",
    statement:
      "I was in the market for a rental home and had the pleasure of meeting Arif Rajer who was the listing agent. Arif was extremely accommodating and negotiated with the homeowner on my behalf which resulted in favorable lease terms. Customer service was both prompt and professional. I couldn't have asked for a better experience.",
  },
  {
    name: "Ashfaq Mohammed",
    statement:
      "Mr. Arif Rajer is truly phenomenal—professional, respectful, and always available. He responds promptly, respects client preferences, and provides insightful recommendations backed by detailed analysis. In early 2022, I was ready to buy my first home, but he advised me to wait, predicting a market drop by June. His insight proved accurate, and I saved significantly by purchasing then. Arif went above and beyond, even traveling multiple times between Cambridge and Kingston to help me find my dream home. Thanks to his dedication, I bought a wonderful property in a prime location. I’m deeply grateful and highly recommend Mr. Arif Rajer for all your real estate needs.",
  },
  {
    name: "Shariq",
    date: "14-07-2022",
    statement:
      "Thank you for your help and support in purchasing and renting my property. You made the process seamless by providing detailed explanations, guiding me step by step, and assisting with essential tasks like connecting with a lawyer. Your professionalism and dedication were evident throughout. I wouldn’t hesitate to recommend you to anyone seeking honest and reliable real estate assistance. Thank you again.",
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
