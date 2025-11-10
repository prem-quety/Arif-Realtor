"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ListingPage3() {
  const [active, setActive] = useState(0);

  // Placeholder 37 images
  const images = Array.from(
    { length: 37 },
    (_, i) => `/assets/images/GetMediaTwo (${i}).jfif`
  );

  // Temporary features (we’ll expand when you send the rest)
  const features = {
    Type: "Condominium",
    "Year Built": "2023",
    "Garage Spaces": "0",
    Heating: "Forced Air, Gas",
    Cooling: "Central Air",
    "Lease Term": "12 Months",
    Furnished: "Unfurnished",
    Region: "Toronto",
    Status: "Active",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <main className="bg-background text-heading mt-24">
      {/* IMAGE SLIDER + AGENT CARD */}
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

          {/* Controls */}
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
          <p className="text-green-700 font-medium text-sm">● For Rent</p>
          <h3 className="mt-3 text-3xl font-semibold">$2,590</h3>

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
          2433 Dufferin Street #509 Toronto, ON M6E 3T3
        </h1>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            href="#"
            className="text-accent hover:underline text-sm font-medium"
          >
            View All 37 Photos
          </a>
        </div>
        <p className="mt-2 text-muted">MLS® # W12510430</p>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-5xl mx-auto px-6 py-10 text-lg leading-relaxed text-muted">
        <p>
          Welcome to 8 Haus Condominiums on Dufferin Street, where modern design
          meets comfort and convenience. This beautiful corner unit, located on
          the 5th floor, features two spacious bedrooms and two full bathrooms
          across approximately 952 square feet of thoughtfully designed living
          space. The bright, open-concept layout is enhanced by floor-to-ceiling
          windows that fill the suite with natural light. The sleek kitchen is
          equipped with stainless steel appliances and elegant modern finishes,
          while high ceilings add an extra sense of space and sophistication. A
          locker is included for added storage convenience. Perfectly located
          with convenient access to Highway 401, Allen Expressway, recreational
          trails, a community centre, shopping areas, and a variety of
          restaurants, this home is ideal for those seeking both comfort and
          connectivity. The building offers a 24-hour concierge for security and
          assistance, ample visitor parking, and bicycle storage. Residents can
          enjoy a fully equipped fitness centre, a formal party room with
          kitchenette, and outdoor patios complete with gas BBQs and furnished
          lounge areas—perfect for relaxing or entertaining guests. Experience
          stylish urban living at its finest in this modern and well-connected
          community.
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

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Property Details</h2>

        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base border-collapse">
            <thead className="bg-black/[0.03]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-heading/80 w-[25%]"></th>
                <th className="px-4 py-3 text-left font-semibold text-heading/80 w-[35%]">
                  Feature
                </th>
                <th className="px-4 py-3 text-left font-semibold text-heading/80 w-[40%]">
                  Details
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Interior Details */}
              <tr>
                <td
                  rowSpan={10}
                  className="bg-black/[0.02] font-semibold text-heading px-4 py-3 align-top"
                >
                  Interior Details
                </td>
                <td className="px-4 py-3">Beds</td>
                <td className="px-4 py-3 text-muted">2</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Full Bathrooms</td>
                <td className="px-4 py-3 text-muted">2</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Size</td>
                <td className="px-4 py-3 text-muted">900–999 sqft</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Above Grade Finished Area</td>
                <td className="px-4 py-3 text-muted">949 sqft / 88.16 m²</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Building Area Total Range</td>
                <td className="px-4 py-3 text-muted">900–999 sqft</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Storeys</td>
                <td className="px-4 py-3 text-muted">1</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Basement</td>
                <td className="px-4 py-3 text-muted">None</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Flooring</td>
                <td className="px-4 py-3 text-muted">Carpet Free</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Appliances</td>
                <td className="px-4 py-3 text-muted">
                  Built-In Oven, Water Heater
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Rooms Total</td>
                <td className="px-4 py-3 text-muted">8</td>
              </tr>

              {/* Exterior Details */}
              <tr>
                <td
                  rowSpan={7}
                  className="bg-black/[0.02] font-semibold text-heading px-4 py-3 align-top"
                >
                  Exterior Details
                </td>
                <td className="px-4 py-3">Property Type</td>
                <td className="px-4 py-3 text-muted">Residential Lease</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Garage Spaces</td>
                <td className="px-4 py-3 text-muted">—</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Garage/Parking Features</td>
                <td className="px-4 py-3 text-muted">No Garage</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Other Parking Details</td>
                <td className="px-4 py-3 text-muted">Parking Type: None</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Patio and Porch</td>
                <td className="px-4 py-3 text-muted">Terrace</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Direction Faces</td>
                <td className="px-4 py-3 text-muted">East</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Entry Level</td>
                <td className="px-4 py-3 text-muted">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ROOM DETAILS TABLE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Room Details</h2>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base border-collapse">
            <thead className="bg-black/[0.03]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-heading/80 w-[18%]"></th>
                <th className="px-4 py-3 text-left font-semibold text-heading/80 w-[22%]">
                  Room Type
                </th>
                <th className="px-4 py-3 text-left font-semibold text-heading/80 w-[25%]">
                  Room Length/Width
                </th>
                <th className="px-4 py-3 text-left font-semibold text-heading/80 w-[35%]">
                  Room Features
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  rowSpan={8}
                  className="bg-black/[0.02] font-semibold text-heading px-4 py-3 align-top"
                >
                  Rooms in Property
                </td>
                <td className="px-4 py-3">Bathroom</td>
                <td className="px-4 py-3">--</td>
                <td className="px-4 py-3 text-muted">Three Piece Bathroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bathroom</td>
                <td className="px-4 py-3">--</td>
                <td className="px-4 py-3 text-muted">Three Piece Bathroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bedroom</td>
                <td className="px-4 py-3">10 x 9.51 ft</td>
                <td className="px-4 py-3 text-muted">Laminate, Closet</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Dining Room</td>
                <td className="px-4 py-3">16.33 x 12.6 ft</td>
                <td className="px-4 py-3 text-muted">Balcony</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Kitchen</td>
                <td className="px-4 py-3">9.74 x 6.43 ft</td>
                <td className="px-4 py-3 text-muted">
                  Built-In Features, Granite Counters
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Laundry</td>
                <td className="px-4 py-3">0.00 x 0.00 ft</td>
                <td className="px-4 py-3 text-muted">--</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Living Room</td>
                <td className="px-4 py-3">16.33 x 12.6 ft</td>
                <td className="px-4 py-3 text-muted">Laminate, Balcony</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Primary Bedroom</td>
                <td className="px-4 py-3">12.92 x 9.32 ft</td>
                <td className="px-4 py-3 text-muted">
                  Laminate, Three Piece Bathroom, En Suite Bathroom
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Building Details</h2>

        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base border-collapse">
            <thead className="bg-black/[0.03]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-heading/80 w-[25%]"></th>
                <th className="px-4 py-3 text-left font-semibold text-heading/80 w-[35%]">
                  Feature
                </th>
                <th className="px-4 py-3 text-left font-semibold text-heading/80 w-[40%]">
                  Details
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Utilities */}
              <tr>
                <td
                  rowSpan={3}
                  className="bg-black/[0.02] font-semibold text-heading px-4 py-3 align-top"
                >
                  Utilities
                </td>
                <td className="px-4 py-3">Heating</td>
                <td className="px-4 py-3 text-muted">Forced Air, Gas</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Cooling</td>
                <td className="px-4 py-3 text-muted">Central Air</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Laundry Features</td>
                <td className="px-4 py-3 text-muted">En Suite Laundry</td>
              </tr>

              {/* Construction */}
              <tr>
                <td
                  rowSpan={3}
                  className="bg-black/[0.02] font-semibold text-heading px-4 py-3 align-top"
                >
                  Construction
                </td>
                <td className="px-4 py-3">Construction Materials</td>
                <td className="px-4 py-3 text-muted">Brick, Concrete</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Year Built</td>
                <td className="px-4 py-3 text-muted">2023</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Year Built Details</td>
                <td className="px-4 py-3 text-muted">0–5</td>
              </tr>

              {/* Homeowners Association */}
              <tr>
                <td
                  rowSpan={3}
                  className="bg-black/[0.02] font-semibold text-heading px-4 py-3 align-top"
                >
                  Homeowners Association
                </td>
                <td className="px-4 py-3">Association Name</td>
                <td className="px-4 py-3 text-muted">
                  Melbourne Property Management Inc.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Association Amenities Include</td>
                <td className="px-4 py-3 text-muted">
                  Meeting/Banquet/Party Room
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Association Fee Includes</td>
                <td className="px-4 py-3 text-muted">
                  Common Areas, Air Conditioning, Insurance, Recreation
                  Facilities
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Other Facts & Features</h2>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base">
            <tbody>
              {/* General Facts */}
              <tr className="bg-black/[0.04]">
                <td
                  colSpan={2}
                  className="px-4 py-2 font-semibold text-heading"
                >
                  General Facts
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">List Price</td>
                <td className="px-4 py-3 text-muted">$2,590</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Price per Sq Ft.</td>
                <td className="px-4 py-3 text-muted">$3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Inclusions</td>
                <td className="px-4 py-3 text-muted">
                  Fridge, Stove, Dishwasher, Microwave, Stacked Washer/Dryer. 1
                  locker. Blinds.
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Directions</td>
                <td className="px-4 py-3 text-muted">
                  Dufferin St & Hopewell Ave
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Lease Considered</td>
                <td className="px-4 py-3 text-muted">Yes</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Possession</td>
                <td className="px-4 py-3 text-muted">Immediately</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Listing Brokerage</td>
                <td className="px-4 py-3 text-muted">
                  CITYSCAPE REAL ESTATE LTD.
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">
                  Listing Brokerage Phone
                </td>
                <td className="px-4 py-3 text-muted">905-241-2222</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Offers</td>
                <td className="px-4 py-3 text-muted">
                  Email Rental Application with IDs, Employment Letter, Recent
                  Paystubs & Complete Credit Report with score in PDF to{" "}
                  <a
                    href="mailto:arif.realtor1@gmail.com"
                    className="underline hover:text-heading"
                  >
                    arif.realtor1@gmail.com
                  </a>
                  . 24 Hrs. Required for Due Diligence. AAA Tenant, Non-Smoker.
                  Tenants are responsible for utilities. Tenant insurance is a
                  must.
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
                <td className="px-4 py-3 font-medium">Availability Date</td>
                <td className="px-4 py-3 text-muted">Nov 5, 2025</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Furnished</td>
                <td className="px-4 py-3 text-muted">Unfurnished</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Owner Pays</td>
                <td className="px-4 py-3 text-muted">
                  Common Area Maintenance, Insurance, Recreational
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">
                  Lease Terms Description
                </td>
                <td className="px-4 py-3 text-muted">
                  Credit Check, Deposit Required, Employment Letter, Lease
                  Agreement, References Required, Rental Application Required
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
                <td className="px-4 py-3 text-muted">Toronto</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Municipality</td>
                <td className="px-4 py-3 text-muted">Toronto W04</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Neighbourhood</td>
                <td className="px-4 py-3 text-muted">Briar Hill-Belgravia</td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">Community Features</td>
                <td className="px-4 py-3 text-muted">
                  Park, Public Transportation
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Postal City</td>
                <td className="px-4 py-3 text-muted">Toronto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl mb-6">Schools</h2>
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
                  Fairbank Public School
                </td>
                <td className="px-4 py-3 text-muted">Public School</td>
                <td className="px-4 py-3 text-muted">
                  Distance: 0.63 km · Grades: JK–8
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">
                  St Thomas Aquinas Catholic School
                </td>
                <td className="px-4 py-3 text-muted">Public School</td>
                <td className="px-4 py-3 text-muted">
                  Distance: 0.71 km · Grades: JK–8
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  Sts Cosmas and Damian Catholic School
                </td>
                <td className="px-4 py-3 text-muted">Public School</td>
                <td className="px-4 py-3 text-muted">
                  Distance: 0.92 km · Grades: JK–8
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
                  Dante Alighieri Academy
                </td>
                <td className="px-4 py-3 text-muted">Public School</td>
                <td className="px-4 py-3 text-muted">
                  Distance: 1.83 km · Grades: 9–12
                </td>
              </tr>
              <tr className="even:bg-black/[0.02]">
                <td className="px-4 py-3 font-medium">
                  John Polanyi Collegiate Institute
                </td>
                <td className="px-4 py-3 text-muted">Public School</td>
                <td className="px-4 py-3 text-muted">
                  Distance: 2.21 km · Grades: 9–12
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  York Memorial Collegiate Institute
                </td>
                <td className="px-4 py-3 text-muted">Public School</td>
                <td className="px-4 py-3 text-muted">
                  Distance: 2.26 km · Grades: 9–12
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted mt-4 leading-relaxed">
          *All information displayed is believed to be accurate but is not
          guaranteed and should be independently verified. To confirm school
          attendance areas or program offerings, please contact the school
          directly.
        </p>
      </section>
    </main>
  );
}
