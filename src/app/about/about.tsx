"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutTwoColumnSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left Image */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/assets/images/arif.png"
          alt="Arif Realtor"
          fill
          className="object-cover object-center "
        />
      </div>

      {/* Right Content */}
      <div>
        <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">
          About
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-heading ">
          Arif Realtor
        </h2>
        <p className="block text-md leading-none mb-5">
          Arif Rajer | Realtor® | Helping You Navigate Real Estate with
          Integrity & Expertise
        </p>
        <p className="text-muted mb-5 leading-relaxed">
          I’m Arif Rajer, a passionate and dedicated real estate professional
          proudly serving clients across Ontario. My primary focus is on the
          Greater Toronto Area, Cambridge, Waterloo, Kitchener, and Hamilton,
          under Cityscape Real Estate Ltd., Brokerage.
        </p>
        <p className="text-muted mb-5 leading-relaxed">
          My journey began in the field of Pharmacy. I earned my degree from
          Bahauddin Zakariya University in Multan, Pakistan, followed by an
          M.Phil in Pharmaceutical Chemistry. I initially built my career
          working in research and pharmaceutical promotions, collaborating with
          esteemed multinational companies and medical professionals.
        </p>
        <p className="text-muted mb-5 leading-relaxed">
          In 1994, I embraced new horizons in the UAE, serving as a registered
          pharmacist with prestigious pharmacy groups like Al-Yousuf Medicine
          and Ibn Sina Pharmacies. These years strengthened my professional
          discipline, commitment to client satisfaction, and keen attention to
          detail.
        </p>
        <p className="text-muted mb-5 leading-relaxed">
          Immigrating to Canada in 2011 with my family presented fresh
          opportunities. After exploring various paths, I found my true calling
          in real estate in March 2020. My diverse background and global
          perspective allow me to expertly assist clients in buying, selling,
          investing, Pre-Construction, relocation, and commercial real estate.
        </p>
        <p className="text-muted mb-8 leading-relaxed">
          Over the past five years, I've facilitated over fifty real estate
          transactions, earning prestigious industry awards for three
          consecutive years. My commitment to integrity, diligence, and
          exceptional client care has formed lasting relationships, built
          primarily on satisfied clients’ referrals and trust.
        </p>
        <p className="text-muted mb-8 leading-relaxed">
          Understanding that real estate decisions are among life's most
          significant milestones, I approach each client interaction with
          careful listening, transparent communication, and personalized
          strategies tailored to each client's needs. With comprehensive market
          knowledge and strong negotiation skills, I aim to deliver outstanding
          value and results.
        </p>
        <p className="text-muted mb-8 leading-relaxed">
          I am committed to securing the best possible deal and guiding and
          supporting my clients throughout their entire real estate journey and
          beyond.
        </p>

        <p className="font-semibold mb-5 leading-relaxed">
          Let's connect! I would be delighted to help you achieve your real
          estate goals.
        </p>
        <p className="font-semibold mb-5 leading-relaxed">
          Arif Rajer | Realtor®{" "}
        </p>
        <p>📞 647-916-1000 </p>
        <p>📧 Arif.realtor1@gmail.com </p>
        <p>🌐 arifrealtor.com </p>
        <Link
          href="/contact"
          className="inline-block rounded-xl bg-accent text-white px-6 py-3 shadow hover:bg-accent/90 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
