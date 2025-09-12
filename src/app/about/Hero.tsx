"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[92vh] bg-black text-white overflow-hidden">
      {/* Background Image with soft fade */}
      <div className="absolute inset-0 opacity-0 animate-fade-in-slow">
        <Image
          src="/assets/images/depositphotos_680667652-stock-photo-perspective-view-two-story-modern.jpg"
          alt="Elegant real estate interior"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-accent font-medium mb-4 opacity-0 animate-slide-up delay-[200ms]">
            About Arif Realty
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight text-white opacity-0 animate-slide-up delay-[400ms]">
            Where Legacy Meets Loyalty
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed opacity-0 animate-slide-up delay-[600ms]">
            Our story is built on integrity, results, and personalized service.
            With roots in Mississauga and a reputation that spans generations,
            Arif Realty isn't just about deals — it's about trust.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 opacity-0 animate-slide-up delay-[800ms]">
            <a
              href="/mortgage"
              className="rounded-xl bg-accent text-white px-6 py-3 shadow hover:bg-accent/90 transition-colors"
            >
              Mortgage Calculator
            </a>
            <a
              href="/services"
              className="rounded-xl border border-white/30 text-white px-6 py-3 hover:bg-white/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
