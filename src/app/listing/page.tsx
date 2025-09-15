"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ListingPage() {
  const [active, setActive] = useState(0);

  // Placeholder 45 images
  const images = Array.from(
    { length: 45 },
    (_, i) => `/assets/images/GetMedia (${i}).jpeg`
  );

  const features = {
    Type: "Detached",
    "Year Built": "2001",
    "Lot Size Area": "< 0.50",
    "Parking Spots": "4",
    "Garage Spaces": "2",
    Heating: "Forced Air, Gas",
    Cooling: "Central Air",
    Pool: "None",
    "Lease Term": "12 Months",
    Furnished: "Unfurnished",
    Region: "Peel",
    Status: "Active",
    "Additional Property Type": "Detached",
  };

  const propertyDetails = {
    Beds: "4+2",
    "Above Grade Bedrooms": "4",
    "Below Grade Bedrooms": "2",
    "Total Bathrooms": "5",
    "Full Bathrooms": "4",
    "Half Bathrooms": "1",
    Size: "2000-2500 sqft",
    "Above Grade Finished Area": "2,268 sqft / 210.7 m²",
    "Below Grade Finished Area": "814 sqft / 75.62 m²",
    "Building Area Total Range": "2000-2500 sqft",
    Stories: "2",
    "Interior Features": "In-Law Floorplan",
    Basement: "Finished",
    Fireplace: "Family Room, Gas",
    Appliances: "Built-In Oven, Water Heater",
    "Rooms Total": "18",
    "Property Type": "Residential Lease",
    Style: "Two Story",
    "Ownership Type": "Freehold/None",
    "Lot Size Range": "< 0.50",
    "Lot Size Dimensions": "31.99 x 109.91",
    "Garage/Parking Features":
      "Built In, Garage, Parking Available, Garage Door Opener",
    "Attached Garage": "Yes",
    "Exterior Features": "None",
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

          {/* slider controls */}
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

          {/* dots */}
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
          <p className="text-green-700 font-medium text-sm">● For Rent</p>
          <h3 className="mt-3 text-3xl font-semibold">$4,500</h3>
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
        </div>
      </section>

      {/* PROPERTY INFO */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="font-serif text-4xl md:text-5xl">
          3386 Gumwood Road Mississauga, ON L5N 8A4
        </h1>
        <p className="mt-2 text-muted">MLS® #W12362328</p>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-5xl mx-auto px-6 py-10 text-lg leading-relaxed text-muted">
        <p>
          Elegant and spacious detached home for lease in the sought-after
          Lisgar neighbourhood, featuring 4+2 bedrooms, 5 bathrooms, and over
          3,000 sq. ft. of finished living space. The main floor offers an
          inviting foyer, bright open-concept living and dining areas, a
          separate family room overlooking the backyard, and a gourmet kitchen
          with quartz countertops, stainless steel appliances, gas stove, and
          ample cabinetry. Hardwood and broadloom flooring, pot lights, and
          modern zebra blinds enhance the style and comfort throughout.
          Upstairs, the primary suite boasts a walk-in closet and 4-piece
          ensuite, while the second bedroom includes its own 3-piece ensuite;
          all bedrooms are generously sized and filled with natural light. The
          fully finished basement adds 2 bedrooms, a kitchen, sitting area, and
          3-piece bath ideal for extended family or in-law potential. Additional
          features include beautifully landscaped front and backyards, a double
          garage plus driveway parking for 4 vehicles. Conveniently located near
          top-rated schools, Lisgar GO Station, Meadowvale Bus Terminal,
          shopping centers, parks, trails, and major highways 401 & 407. Recent
          updates include fresh paint, modern lighting, pot lights, and window
          coverings, making this a move-in-ready home with flexible lease terms.
          House is Virtually Staged.
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
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Basement - Bathroom</td>
                <td className="px-4 py-3">--</td>
                <td className="px-4 py-3 text-muted">Three Piece Bathroom</td>
              </tr>

              {/* Lower Level */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={3}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Lower Level
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bedroom</td>
                <td className="px-4 py-3">12.96 x 11.68 ft</td>
                <td className="px-4 py-3 text-muted">Laminate, Closet</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Bedroom</td>
                <td className="px-4 py-3">12.96 x 9.54 ft</td>
                <td className="px-4 py-3 text-muted">Laminate, Closet</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Sitting Room</td>
                <td className="px-4 py-3">21.25 x 10.2 ft</td>
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
                <td className="px-4 py-3">--</td>
                <td className="px-4 py-3 text-muted">Two Piece Bathroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Breakfast Room / Nook</td>
                <td className="px-4 py-3">11.64 x 10 ft</td>
                <td className="px-4 py-3 text-muted">Open Concept</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Dining Room</td>
                <td className="px-4 py-3">12.6 x 11.81 ft</td>
                <td className="px-4 py-3 text-muted">Broadloom, Tile</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Family Room</td>
                <td className="px-4 py-3">15.38 x 13.61 ft</td>
                <td className="px-4 py-3 text-muted">Broadloom, Fireplace</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Kitchen</td>
                <td className="px-4 py-3">11.61 x 10 ft</td>
                <td className="px-4 py-3 text-muted">
                  Ceramic Tile, Built-in Features
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Living Room</td>
                <td className="px-4 py-3">24.1 x 11.74 ft</td>
                <td className="px-4 py-3 text-muted">Broadloom</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Powder Room</td>
                <td className="px-4 py-3">0.00 x 0.00 ft</td>
                <td className="px-4 py-3 text-muted">Two Piece Bathroom</td>
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
                <td className="px-4 py-3">--</td>
                <td className="px-4 py-3 text-muted">Three Piece Bathroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bathroom</td>
                <td className="px-4 py-3">--</td>
                <td className="px-4 py-3 text-muted">Four Piece Bathroom</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Bathroom</td>
                <td className="px-4 py-3">--</td>
                <td className="px-4 py-3 text-muted">Three Piece Bathroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bedroom</td>
                <td className="px-4 py-3">14.79 x 12 ft</td>
                <td className="px-4 py-3 text-muted">
                  Broadloom, Three Piece Bathroom, En Suite Bathroom
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Bedroom</td>
                <td className="px-4 py-3">12 x 11.81 ft</td>
                <td className="px-4 py-3 text-muted">Broadloom, Closet</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bedroom</td>
                <td className="px-4 py-3">0.00 x 0.00 ft</td>
                <td className="px-4 py-3 text-muted">
                  Four Piece Bathroom, En Suite Bathroom
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3">Primary Bedroom</td>
                <td className="px-4 py-3">17.58 x 13.38 ft</td>
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
                <td className="px-4 py-3 font-medium">Laundry Features</td>
                <td className="px-4 py-3 text-muted">Other</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Sewer</td>
                <td className="px-4 py-3 text-muted">Public Sewer</td>
              </tr>
              <tr>
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
                <td className="px-4 py-3 font-medium">Year Built</td>
                <td className="px-4 py-3 text-muted">2001</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Year Built Details</td>
                <td className="px-4 py-3 text-muted">16-30</td>
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

              {/* Homeowners Association */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={2}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Homeowners Association
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  Association Fee Includes
                </td>
                <td className="px-4 py-3 text-muted">
                  Air Conditioning, Parking
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* OTHER FACTS & FEATURES */}
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
                <td className="px-4 py-3 text-muted">$4,500</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Price per Sq Ft.</td>
                <td className="px-4 py-3 text-muted">$2</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Inclusions</td>
                <td className="px-4 py-3 text-muted">
                  Double Door Fridge, Gas Stove, B/I Dishwasher, Washer & Dryer,
                  Gas Fireplace, All Elf's, All Window Coverings, Zebra blinds,
                  CAC, Garage Door Opener w/Remote, Basement appliances.
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Directions</td>
                <td className="px-4 py-3 text-muted">
                  Tenth Line W & Derry Road
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Lease Considered</td>
                <td className="px-4 py-3 text-muted">Yes</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Possession</td>
                <td className="px-4 py-3 text-muted">
                  Close Plus 30 to 60 Days
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Listing Brokerage</td>
                <td className="px-4 py-3 text-muted">
                  CITYSCAPE REAL ESTATE LTD.
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Brokerage Phone</td>
                <td className="px-4 py-3 text-muted">905-241-2222</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Offers</td>
                <td className="px-4 py-3 text-muted">
                  Email Rental Application with IDs, Employment Letter, 2-3
                  Recent Paystubs & Complete Credit Report (PDF) to{" "}
                  <a
                    href="mailto:arif.realtor1@gmail.com"
                    className="text-accent hover:underline"
                  >
                    arif.realtor1@gmail.com
                  </a>
                  . 24 hrs required for due diligence. AAA Tenant, Non-Smoker.
                  Tenants responsible for utilities. Tenant insurance is
                  mandatory.
                </td>
              </tr>

              {/* Rental Information */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={2}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  Rental Information
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Furnished</td>
                <td className="px-4 py-3 text-muted">Unfurnished</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Owner Pays</td>
                <td className="px-4 py-3 text-muted">Parking Fee</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Lease Terms</td>
                <td className="px-4 py-3 text-muted">
                  Credit Check, Employment Letter, Lease Agreement, References
                  Required, Rental Application Required
                </td>
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
                <td className="px-4 py-3 text-muted">Peel</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Municipality</td>
                <td className="px-4 py-3 text-muted">Mississauga</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Neighbourhood</td>
                <td className="px-4 py-3 text-muted">Lisgar</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Community Features</td>
                <td className="px-4 py-3 text-muted">
                  Library, Near Schools, Park, Public Transportation
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Postal City</td>
                <td className="px-4 py-3 text-muted">Mississauga</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
