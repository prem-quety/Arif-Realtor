"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { PiggyBank, Wallet, FileText, Lock } from "lucide-react";

export default function WhyChooseUs() {
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
      className={`relative bg-[#f9f6e8] text-[#1f1f1f] font-[Inter] transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Top Heading */}
      <div className="max-w-5xl mx-auto text-center py-24 px-6">
        <p className="uppercase tracking-widest text-sm text-[#d4af37] font-semibold">
          Services
        </p>
        <h2 className="text-5xl font-extrabold tracking-tight mt-2">
          Why Choose Us?
        </h2>
      </div>

      {/* Hero Grid */}
      <div className="grid md:grid-cols-2 gap-0 items-stretch bg-white rounded-t-[3rem] overflow-hidden shadow-xl max-w-[1600px] mx-auto">
        {/* Image */}
        <div className="relative min-h-[500px]">
          <Image
            src="/assets/images/depositphotos_540468498-stock-photo-cottage-style-house-street-residential.jpg"
            alt="Keys to home"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Features */}
        <div className="bg-[#f5f2dc] py-20 px-10 md:px-20 flex items-center">
          <div className="w-full space-y-10">
            <Feature
              icon={<PiggyBank size={24} />}
              title="No Downpayment"
              desc="Start strong with zero up front. We’ll get you home without burning your wallet."
            />
            <Feature
              icon={<Wallet size={24} />}
              title="All Cash Offer"
              desc="Cut through red tape. We deal in power moves — all cash, no questions."
            />
            <Feature
              icon={<FileText size={24} />}
              title="Experts In Your Corner"
              desc="Negotiators. Closers. Hustlers. Our team brings results, not excuses."
            />
            <Feature
              icon={<Lock size={24} />}
              title="Locked In Pricing"
              desc="No fine print. No B.S. You get luxury treatment with transparent pricing."
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 text-center bg-white py-16 px-6 border-t border-[#eee]">
        <Stat number="305" label="Area Population" />
        <Stat number="1,090" label="Total Properties" />
        <Stat number="209" label="Average House" />
        <Stat number="67" label="Total Branches" />
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      <div className="h-14 w-14 rounded-full bg-white border-2 border-[#d4af37] shadow-lg flex items-center justify-center text-[#d4af37] shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1 tracking-tight">{title}</h4>
        <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="py-4">
      <p className="text-4xl font-bold text-[#d4af37]">{number}</p>
      <p className="text-sm text-gray-700 mt-1 tracking-wide">{label}</p>
    </div>
  );
}
