"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ListingPage2() {
  const [active, setActive] = useState(0);

  // Placeholder 50 images
  const images = Array.from(
    { length: 50 },
    (_, i) => `/assets/images/second/GetMedia (${i}).jfif`
  );

  const features = {
    Type: "Detached",
    "Parking Spots": "4",
    "Garage Spaces": "2",
    Heating: "Forced Air, Gas",
    Cooling: "Central Air",
    Pool: "Above Ground",
    Region: "Hamilton",
    Status: "Active",
    "Additional Property Type": "Detached",
  };

  const propertyDetails = {
    Beds: "4+1",
    "Above Grade Bedrooms": "4",
    "Below Grade Bedrooms": "1",
    "Total Bathrooms": "4",
    "Full Bathrooms": "3",
    "Half Bathrooms": "1",
    Size: "2000-2500 sqft",
    "Above Grade Finished Area": "2,226 sqft / 206.8 m²",
    "Below Grade Finished Area": "800 sqft / 74.32 m²",
    "Building Area Total Range": "2000-2500 sqft",
    Storeys: "2",
    Basement: "Finished",
    Flooring: "Carpet Free",
    Fireplace: "Electric, Living Room",
    Appliances: "Built-In Oven, Cooktop, Water Heater",
    "Rooms Total": "17",
    "Property Type": "Residential",
    Style: "Two Story",
    "Lot Size Dimensions": "39.09 x 89.73",
    "Parking Spots": "4",
    "Garage Spaces": "2",
    "Garage/Parking Features":
      "Attached, Garage, Parking Available, Garage Door Opener",
    "Attached Garage": "Yes",
    "Exterior Features": "None",
    "Direction Faces": "East",
  };

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <main className="bg-background text-heading mt-24">
      {/* IMAGE SLIDER + CARD */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative overflow-hidden rounded-2xl shadow-lg h-[500px]">
          <AnimatePresence initial={false}>
            <motion.img
              key={active}
              src={images[active]}
              alt={`Property image ${active + 1}`}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Slider controls */}
          <button
            onClick={() =>
              setActive((active - 1 + images.length) % images.length)
            }
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white rounded-full px-3 py-2 hover:bg-black/70"
          >
            ‹
          </button>
          <button
            onClick={() => setActive((active + 1) % images.length)}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white rounded-full px-3 py-2 hover:bg-black/70"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.slice(0, 8).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 w-2 rounded-full transition ${
                  active === i ? "bg-accent" : "bg-white/50"
                }`}
              />
            ))}
            {images.length > 8 && (
              <span className="text-xs text-white/70 ml-2">
                +{images.length - 8} more
              </span>
            )}
          </div>
        </div>

        {/* Agent Card */}
        <div className="lg:col-span-1 rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/10 p-6 h-fit">
          <p className="text-red-600 font-medium text-sm">● For Sale</p>
          <h3 className="mt-3 text-3xl font-semibold">$1,564,998</h3>
          <p className="mt-1 text-sm text-muted">
            Estimated Monthly Cost: $7,997
          </p>
          <span className="mt-2 inline-block rounded-full bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-semibold">
            New Listing
          </span>

          <hr className="my-4 border-black/10" />

          <p className="text-xs font-semibold text-muted">CONTACT YOUR AGENT</p>
          <p className="mt-2 font-medium text-heading">ARIF ALI RAJER</p>
          <a href="/contact" className="text-sm text-accent hover:underline">
            View Profile
          </a>

          <div className="mt-5 space-y-3">
            <a
              href="/contact"
              className="block w-full rounded-md bg-accent px-4 py-3 text-center text-white font-medium shadow hover:brightness-110 transition"
            >
              Request a Tour
            </a>
            <a
              href="/contact"
              className="block w-full rounded-md border border-black/20 px-4 py-3 text-center font-medium hover:bg-black/5 transition"
            >
              Contact Agent
            </a>
          </div>

          <hr className="my-4 border-black/10" />

          <div className="space-y-3">
            <p className="text-sm text-muted">
              Compare this property to others you’ve recently viewed or saved.
            </p>
            <a
              href="#"
              className="block w-full rounded-md border border-accent text-accent px-4 py-3 text-center font-medium hover:bg-accent hover:text-white transition"
            >
              Start Comparing
            </a>
          </div>
        </div>
      </section>

      {/* PROPERTY INFO */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="font-serif text-4xl md:text-5xl">
          28 Celano Drive Hamilton, ON L8B 1V3
        </h1>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            href="#"
            className="text-accent hover:underline text-sm font-medium"
          >
            View Virtual Tour
          </a>
          <a
            href="#"
            className="text-accent hover:underline text-sm font-medium"
          >
            View All 50 Photos
          </a>
        </div>
        <p className="mt-2 text-muted">MLS® # X12518322</p>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-5xl mx-auto px-6 py-10 text-lg leading-relaxed text-muted">
        <p>
          Welcome to 28 Celano Drive, a beautifully upgraded and meticulously
          maintained 4+1 bedroom, 4-bathroom home offering approximately 3,026
          sq. ft. of finished living space, built in 2017 and ideally set
          directly on Cranberry Park with private park access. The bright main
          level features an open-concept layout with hardwood flooring, a custom
          kitchen with quartz countertops, upgraded cabinetry, KitchenAid
          stainless steel appliances, and complemented by a brand-new LG 36″
          refrigerator and Samsung dishwasher. A spacious Great Room with a
          fireplace and a separate den perfect for a home office complete the
          main floor. The second level offers new flooring, a primary bedroom
          with a 3-piece ensuite and walk-in closet, three additional bedrooms,
          second-floor laundry, and a generous family room. The fully finished
          basement includes an additional bedroom, full bathroom, and a
          recreational area with pantry, ideal for extended family or guests.
          The home is enhanced with new LED lighting throughout and marble and
          stone finishes in the kitchen and all bathrooms. The fully fenced
          backyard features a deck and an extra-large hot tub that doubles as a
          swimming pool, creating a private retreat backing onto Cranberry Park.
          Located in one of Waterdown’s most desirable neighbourhoods, this
          move-in-ready home is close to excellent schools, shopping,
          restaurants, parks, and major highways including the QEW, 403, and
          407. A perfect opportunity to own a modern family home that blends
          comfort, style, and an exceptional setting.
        </p>
      </section>

      {/* FEATURES TABLE */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Property Features</h2>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base">
            <tbody>
              {Object.entries(features).map(([k, v]) => (
                <tr key={k} className="even:bg-black/[0.02]">
                  <td className="px-4 py-3 font-medium text-heading/90">{k}</td>
                  <td className="px-4 py-3 text-muted">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PROPERTY DETAILS TABLE */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Property Details</h2>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base">
            <tbody>
              {Object.entries(propertyDetails).map(([k, v]) => (
                <tr key={k} className="even:bg-black/[0.02]">
                  <td className="px-4 py-3 font-medium text-heading/90">{k}</td>
                  <td className="px-4 py-3 text-muted">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* ROOM DETAILS TABLE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Room Details</h2>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base">
            <thead className="bg-black/[0.03]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-heading/80">
                  Room Type
                </th>
                <th className="px-4 py-3 text-left font-semibold text-heading/80">
                  Room Length/Width
                </th>
                <th className="px-4 py-3 text-left font-semibold text-heading/80">
                  Room Features
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Basement */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={3}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Basement
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bathroom</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3 text-muted">Three Piece Bathroom</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Bedroom</td>
                <td className="px-4 py-3">9.84 x 8.2 ft</td>
                <td className="px-4 py-3 text-muted">Laminate</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Living Room</td>
                <td className="px-4 py-3">19.68 x 13.12 ft</td>
                <td className="px-4 py-3 text-muted">Laminate</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Recreation</td>
                <td className="px-4 py-3">16.4 x 8.2 ft</td>
                <td className="px-4 py-3 text-muted">Laminate</td>
              </tr>

              {/* Main Level */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={3}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Main Level
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bathroom</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3 text-muted">Two Piece Bathroom</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Den</td>
                <td className="px-4 py-3">9.54 x 6.49 ft</td>
                <td className="px-4 py-3 text-muted">Hardwood</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Dining Room</td>
                <td className="px-4 py-3">12.82 x 11.15 ft</td>
                <td className="px-4 py-3 text-muted">Hardwood, Open Concept</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Foyer</td>
                <td className="px-4 py-3">0.00 x 0.00 ft</td>
                <td className="px-4 py-3 text-muted">Hardwood</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Great Room</td>
                <td className="px-4 py-3">15.74 x 12.66 ft</td>
                <td className="px-4 py-3 text-muted">
                  Fireplace, Recessed Lighting
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Kitchen</td>
                <td className="px-4 py-3">11.84 x 11.68 ft</td>
                <td className="px-4 py-3 text-muted">
                  Built-In Features, Stone Counters
                </td>
              </tr>

              {/* Second Level */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={3}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Second Level
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bathroom</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3 text-muted">Four Piece Bathroom</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Bathroom</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3 text-muted">Three Piece Bathroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bedroom</td>
                <td className="px-4 py-3">10.33 x 10.23 ft</td>
                <td className="px-4 py-3 text-muted">Laminate, Vinyl</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Bedroom</td>
                <td className="px-4 py-3">10.23 x 10.17 ft</td>
                <td className="px-4 py-3 text-muted">Closet</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bedroom</td>
                <td className="px-4 py-3">10.66 x 9.68 ft</td>
                <td className="px-4 py-3 text-muted">Closet</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Family Room</td>
                <td className="px-4 py-3">16.56 x 10.82 ft</td>
                <td className="px-4 py-3 text-muted">Laminate</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Primary Bedroom</td>
                <td className="px-4 py-3">18.17 x 12.23 ft</td>
                <td className="px-4 py-3 text-muted">
                  Four Piece Bathroom, En Suite Bathroom, Walk-In Closet(s)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* BUILDING DETAILS TABLE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Building Details</h2>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base">
            <tbody>
              {/* Utilities */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={2}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Utilities
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Heating</td>
                <td className="px-4 py-3 text-muted">Forced Air, Gas</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Cooling</td>
                <td className="px-4 py-3 text-muted">Central Air</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Sewer</td>
                <td className="px-4 py-3 text-muted">Public Sewer</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Water Source</td>
                <td className="px-4 py-3 text-muted">Public</td>
              </tr>

              {/* Construction */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={2}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Construction
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  Construction Materials
                </td>
                <td className="px-4 py-3 text-muted">Brick, Shingle Siding</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Style</td>
                <td className="px-4 py-3 text-muted">Two Story</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Foundation Details</td>
                <td className="px-4 py-3 text-muted">None</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Property Attached</td>
                <td className="px-4 py-3 text-muted">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* OTHER FACTS & FEATURES TABLE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Other Facts & Features</h2>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base">
            <tbody>
              {/* Other Facts */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={2}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Other Facts & Features
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">List Price</td>
                <td className="px-4 py-3 text-muted">$1,564,998</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Price per Sq Ft.</td>
                <td className="px-4 py-3 text-muted">$703</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Inclusions</td>
                <td className="px-4 py-3 text-muted">
                  Fridge, Stove, Dishwasher, Range Hood, Washer, Dryer, All
                  Window Coverings, All Light Fixtures
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Exclusions</td>
                <td className="px-4 py-3 text-muted">
                  Staging Furniture, Basement Exercise items.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Directions</td>
                <td className="px-4 py-3 text-muted">
                  Spring Creek Dr & Avonsyde Blvd
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Lease Considered</td>
                <td className="px-4 py-3 text-muted">No</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Possession</td>
                <td className="px-4 py-3 text-muted">Immediately</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Listing Brokerage</td>
                <td className="px-4 py-3 text-muted">
                  CITYSCAPE REAL ESTATE LTD.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  Listing Brokerage Phone
                </td>
                <td className="px-4 py-3 text-muted">905-241-2222</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Offers</td>
                <td className="px-4 py-3 text-muted">
                  Offers welcome anytime. Please include Schedule B and Form 801
                  and allow 24 hours irrevocable. Submit offers via email to{" "}
                  <a
                    href="mailto:arif.realtor1@gmail.com"
                    className="text-accent hover:underline"
                  >
                    arif.realtor1@gmail.com
                  </a>
                  .
                </td>
              </tr>

              {/* Legal & Financial */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={2}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Legal & Financial Details
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Tax Year</td>
                <td className="px-4 py-3 text-muted">2025</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Annual Taxes</td>
                <td className="px-4 py-3 text-muted">$8,044</td>
              </tr>

              {/* Location */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={2}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Location
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Region</td>
                <td className="px-4 py-3 text-muted">Hamilton</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Municipality</td>
                <td className="px-4 py-3 text-muted">Hamilton</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Neighbourhood</td>
                <td className="px-4 py-3 text-muted">Waterdown</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Community Features</td>
                <td className="px-4 py-3 text-muted">
                  Fenced Yard, Golf, Library, Other
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Postal City</td>
                <td className="px-4 py-3 text-muted">Hamilton</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* SCHOOLS TABLE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Nearby Schools</h2>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base">
            <tbody>
              {/* Elementary Schools */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={3}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Elementary Schools
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  St. Thomas Catholic Elementary School
                </td>
                <td className="px-4 py-3 text-muted">Public Schools</td>
                <td className="px-4 py-3 text-muted">
                  Distance: 1.82 km • Grades: JK-8
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">
                  Mary Hopkins Public School
                </td>
                <td className="px-4 py-3 text-muted">Public Schools</td>
                <td className="px-4 py-3 text-muted">
                  Distance: 2.26 km • Grades: JK-5 • Program: French Immersion
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Allan A. Greenleaf</td>
                <td className="px-4 py-3 text-muted">Public Schools</td>
                <td className="px-4 py-3 text-muted">
                  Distance: 3.16 km • Grades: JK-8
                </td>
              </tr>

              {/* Secondary Schools */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={3}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Secondary Schools
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  Waterdown District High School
                </td>
                <td className="px-4 py-3 text-muted">Public Schools</td>
                <td className="px-4 py-3 text-muted">
                  Distance: 3.07 km • Grades: 9-12
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">
                  Fern Hill – Burlington
                </td>
                <td className="px-4 py-3 text-muted">Private Schools</td>
                <td className="px-4 py-3 text-muted">Distance: 6.01 km</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  Burlington Royal Arts Academy
                </td>
                <td className="px-4 py-3 text-muted">Private Schools</td>
                <td className="px-4 py-3 text-muted">Distance: 6.22 km</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs text-muted leading-relaxed">
          *All information displayed is believed to be accurate but is not
          guaranteed and should be independently verified. To confirm school
          attendance areas or program offerings, please contact the school
          directly.
        </p>
      </section>
    </main>
  );
}
