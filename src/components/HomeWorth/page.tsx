// components/HomeValuationBanner.tsx
"use client";

export default function HomeValuationBanner() {
  return (
    <section
      className="relative h-[60vh] min-h-[420px] md:h-[70vh] max-h-[820px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/luxury-home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Vignette + gold aura */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_20%,rgba(193,151,62,0.18),transparent_60%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0.55),transparent_70%)]" />
      </div>

      {/* Glass content card */}
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-[0_10px_60px_rgba(0,0,0,0.35)]">
          <div className="p-8 md:p-12 text-center">
            <div className="mx-auto mb-5 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#C1973E] to-transparent" />
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              What’s Your Home Worth?
            </h2>
            <p className="mt-4 text-white/90 text-base md:text-[17px] leading-relaxed">
              Get a premium, data-driven valuation with local expertise and
              negotiation savvy. Position your property for top-of-market
              results.
            </p>

            {/* CTA */}
            <div className="mt-7 flex items-center justify-center gap-3">
              <a
                href="/contact"
                className="px-6 py-3 rounded-md font-medium text-white bg-accent hover:brightness-110 transition shadow-[0_8px_30px_rgba(193,151,62,0.35)]"
              >
                Request Free Home Valuation
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-md font-medium border border-white/40 text-white/95 hover:bg-white/10 transition"
              >
                Talk to Arif
              </a>
            </div>
          </div>
        </div>

        {/* Underline embellishment */}
        <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>

      {/* subtle film grain */}
      <style jsx>{`
        section::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.07;
          mix-blend-mode: soft-light;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
}
