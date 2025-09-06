"use client";

export default function Services() {
  const items = [
    {
      title: "Buyer Representation",
      desc: "From discovery to keys—private tours, negotiation and closing handled end-to-end.",
      href: "#",
    },
    {
      title: "Seller Strategy",
      desc: "Staging, media, and pricing strategy designed to maximize your sale.",
      href: "#",
    },
    {
      title: "Private Tours",
      desc: "Discreet, appointment-only tours with your comfort and privacy in mind.",
      href: "#",
    },
  ];

  return (
    <section
      id="services"
      className="relative z-10 bg-white/60 text-gray-900 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Everything you need for a seamless real estate journey.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group rounded-2xl border border-gray-200 bg-white/50 p-6 backdrop-blur-md shadow-md transition-all hover:-translate-y-1 hover:border-gray-300 hover:bg-white/70"
            >
              <div className="text-xl font-semibold">{s.title}</div>
              <p className="mt-2 text-gray-700">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 group-hover:text-black">
                Learn more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="transition group-hover:translate-x-0.5"
                >
                  <path
                    fill="currentColor"
                    d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
