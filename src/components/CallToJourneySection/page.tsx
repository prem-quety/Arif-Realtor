"use client";

export default function CallToJourneySection() {
  return (
    <section
      className="relative z-10 bg-cover bg-center py-24 px-6 text-white"
      style={{ backgroundImage: "url('/assets/images/bg-houses.webp')" }}
    >
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-accent font-medium tracking-wide backdrop-blur-sm border border-white/20">
          Your Path to Homeownership and Beyond
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-serif font-medium leading-tight text-black drop-shadow-xl">
          Let The Best Realtor In Mississauga Guide You Forward, <br />
          Helping You Achieve Your Real Estate Goals, And Buy Mississauga Homes
          For Sale
        </h2>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Buying Card */}
        <div className="rounded-2xl overflow-hidden border border-white/30 bg-white/60 backdrop-blur-md shadow-lg">
          <div className="relative">
            <img
              src="/assets/images/depositphotos_366578560-stock-photo-suburban-two-story-house-premium.jpg"
              alt="Buying Home"
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 left-4 bg-accent text-white p-2 rounded-full shadow">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3l7 6v12H5V9l7-6z" />
              </svg>
            </div>
          </div>
          <div className="p-6 text-heading">
            <h3 className="text-2xl font-serif font-semibold mb-2">
              Buying Home
            </h3>
            <p className="text-muted text-[16px] leading-relaxed">
              Find your dream home with confidence. Guided by our expertise,
              we’re here for every step of your journey—turning your vision into
              reality.
            </p>
            <div className="mt-6">
              <a
                href="/services"
                className="inline-block bg-accent text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#b88429] transition"
              >
                Search Homes
              </a>
            </div>
          </div>
        </div>

        {/* Selling Card */}
        <div className="rounded-2xl overflow-hidden border border-white/30 bg-white/60 backdrop-blur-md shadow-lg">
          <div className="relative">
            <img
              src="/assets/images/depositphotos_540468498-stock-photo-cottage-style-house-street-residential.jpg"
              alt="Selling Home"
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 left-4 bg-accent text-white p-2 rounded-full shadow">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3l7 6v12H5V9l7-6z" />
              </svg>
            </div>
          </div>
          <div className="p-6 text-heading">
            <h3 className="text-2xl font-serif font-semibold mb-2">
              Selling Home
            </h3>
            <p className="text-muted text-[16px] leading-relaxed">
              Selling with AQ Mufti Realty means a journey of hope and
              opportunity. We’ll showcase your property’s potential, navigate
              the market, and empower you for your next adventure.
            </p>
            <div className="mt-6">
              <a
                href="/services"
                className="inline-block bg-accent text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#b88429] transition"
              >
                Sell with Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
