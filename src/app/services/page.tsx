"use client";

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 py-24 bg-black/90 text-white">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Premium Services
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            We don’t just sell homes — we curate lifestyles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Luxury Property Listings",
              desc: "Handpicked estates with breathtaking views and timeless architecture.",
            },
            {
              title: "Private Tours",
              desc: "Schedule one-on-one viewings with zero distractions. Champagne optional.",
            },
            {
              title: "Investment Advisory",
              desc: "Real estate strategies that grow your wealth — not your headache.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/80">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
