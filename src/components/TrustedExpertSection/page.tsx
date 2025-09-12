"use client";

export default function TrustedExpertSection() {
  return (
    <section className="relative z-10 bg-background py-24 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-2xl bg-white/60 border border-black/10 p-10 shadow-2xl backdrop-blur-md">
        {/* Left: Flexing Headshot */}
        <div>
          <img
            src="/assets/images/about.jpg"
            alt="A.Q. Mufti - Realtor"
            className="w-full rounded-xl object-cover border border-black/10 shadow-lg"
          />
        </div>

        {/* Right: Wealth Manifesto */}
        <div className="text-heading font-sans">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            About
          </p>

          <h2 className="text-5xl md:text-5xl font-serif font-medium tracking-tight leading-tight text-primary">
            We Don't Just Sell Homes.
            <br className="hidden md:block" />
            We Curate Legacies.
          </h2>

          <p className="mt-6 text-muted text-[17px] leading-relaxed">
            Our firm is a distinguished real estate advisory firm specializing
            in luxury assets in Mississauga, Oakville, and Niagara. Clients
            don’t simply rely on us for transactions—they entrust us with
            building and protecting their portfolios.
          </p>

          <p className="mt-5 text-muted text-[17px] leading-relaxed">
            Recognized with honors such as the Queen’s Diamond Jubilee Medal and
            the Mississauga Mayor’s Civic Service Award, we operate in a league
            where negotiations are discreet, and every square foot is measured
            in prestige.
          </p>

          <div className="mt-8">
            <a
              href="/about"
              className="inline-block rounded-md bg-accent text-white px-6 py-3 font-medium shadow-md hover:shadow-lg hover:bg-[#b88429] transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
