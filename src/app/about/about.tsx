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
      <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/assets/images/arif.avif"
          alt="Arif Realtor"
          fill
          className="object-fill object-center"
        />
      </div>

      {/* Right Content */}
      <div>
        <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">
          About
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-heading mb-6">
          Arif Realtor
        </h2>
        <p className="text-muted mb-5 leading-relaxed">
          Arif Realtor is a trusted real estate service based in the Greater
          Toronto Area, known for delivering results with integrity and
          professionalism. Whether buying a home, leasing commercial space, or
          investing in agricultural property, Arif Realtor provides personalized
          strategies tailored to your goals. With deep roots in Mississauga and
          a legacy that spans generations, our mission is to build lasting
          relationships—not just close deals.
        </p>
        <p className="text-muted mb-8 leading-relaxed">
          With deep roots in Mississauga and a legacy that spans generations,
          our mission is to build lasting relationships—not just close deals.
        </p>
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
