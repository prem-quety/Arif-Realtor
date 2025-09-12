"use client";

export default function WhyWorkWithArifSection() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <span className="uppercase text-sm text-accent font-semibold tracking-wide">
          Why Work With Arif Realtor?
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-serif font-medium text-heading leading-snug">
          Discover What Makes Arif Realtor Stand Out In The Luxury Real Estate
          Market
        </h2>

        <p className="mt-8 text-muted text-[17px] leading-relaxed">
          Choose Arif Realtor, a trusted real estate professional who
          understands your vision. Arif's expertise in high-end residential and
          investment properties ensures every client experiences a smooth and
          rewarding journey. Whether you’re exploring luxury homes in
          Mississauga or prime real estate across the GTA, Arif provides
          personalized guidance designed to exceed expectations.
        </p>

        <p className="mt-6 text-muted text-[17px] leading-relaxed">
          Known for his professionalism, integrity, and deep market knowledge,
          Arif has built a reputation as a realtor who puts clients first. His
          strong negotiation skills and attention to detail simplify every
          transaction, while his dedication to excellence sets him apart. With
          Arif by your side, you gain not just a realtor, but a trusted partner
          committed to your success.
        </p>
      </div>

      <div className="w-full">
        <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10">
          <img
            src="/assets/images/luxury-area.jpg"
            alt="Arif Realtor"
            className="w-full object-cover"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <img
            src="/assets/images/arif.webp"
            alt="Arif Realtor Logo"
            className="h-12"
          />
        </div>
      </div>
    </section>
  );
}
