"use client";

export default function WhyWorkWithArifSection() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <span className="uppercase text-sm text-accent font-semibold tracking-wide">
          Why Work With A.Q. Mufti?
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-serif font-medium text-heading leading-snug">
          Discover What Makes A. Q. Mufti Stand Out As The Best Realtor In
          Mississauga
        </h2>

        <p className="mt-8 text-muted text-[17px] leading-relaxed">
          Choose A. Q. Mufti, a trusted real estate expert who understands your
          goals. With expertise in residential, commercial, and agricultural
          properties, he ensures a smooth experience. Whether you're exploring
          Mississauga homes for sale or other real estate needs, Mufti offers
          personalized service that guarantees success. Moreover, his in-depth
          knowledge and negotiation skills make every transaction easier. In
          addition, he’s dedicated to exceeding your expectations, every time.
        </p>

        <p className="mt-6 text-muted text-[17px] leading-relaxed">
          Known for his professionalism and integrity, A. Q. Mufti has earned
          prestigious awards, including the Queen’s Diamond Jubilee Medal and
          Mississauga Mayor’s Civic Service Award. These honors highlight his
          commitment to both real estate and the community. With Mufti by your
          side, you gain a trusted advisor who is committed to your success.
        </p>
      </div>

      <div className="w-full">
        <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10">
          <img
            src="/assets/images/arif.webp"
            alt="A. Q. Mufti"
            className="w-full object-cover"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <img
            src="/assets/images/arif.webp"
            alt="Mufti Real Estate Services Logo"
            className="h-12"
          />
        </div>
      </div>
    </section>
  );
}
