"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// mock data – replace with DB or API later
const listings = [
  {
    id: "1",
    address: "3386 Gumwood Road, Mississauga, ON",
    price: "$4,500/mo",
    beds: "4+2",
    baths: "5",
    size: "2000–2500 sqft",
    image: "/assets/images/GetMedia (0).jpeg",
    mls: "W12362328",
  },
  {
    id: "1",
    address: "3386 Gumwood Road, Mississauga, ON",
    price: "$4,500/mo",
    beds: "4+2",
    baths: "5",
    size: "2000–2500 sqft",
    image: "/assets/images/GetMedia (0).jpeg",
    mls: "W12362328",
  },
  {
    id: "1",
    address: "3386 Gumwood Road, Mississauga, ON",
    price: "$4,500/mo",
    beds: "4+2",
    baths: "5",
    size: "2000–2500 sqft",
    image: "/assets/images/GetMedia (0).jpeg",
    mls: "W12362328",
  },
];

export default function ListingsPage() {
  return (
    <main className="bg-background text-heading mt-24">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl md:text-5xl text-center">
          Featured Listings
        </h1>
        <p className="mt-3 text-muted text-center">
          Explore premium homes and rentals across GTA.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing, i) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/10 overflow-hidden group hover:shadow-[0_12px_50px_rgba(0,0,0,0.12)] transition"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Link href={`/listing`}>
                  <img
                    src={listing.image}
                    alt={listing.address}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
                  />
                </Link>
                <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  MLS® {listing.mls}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{listing.price}</h3>
                <p className="text-muted mt-1">{listing.address}</p>
                <div className="mt-4 flex items-center gap-6 text-sm text-muted">
                  <span>🛏 {listing.beds} Beds</span>
                  <span>🛁 {listing.baths} Baths</span>
                  <span>📐 {listing.size}</span>
                </div>
                <Link
                  href={`/listing`}
                  className="inline-block mt-6 rounded-md bg-accent px-5 py-2 text-white font-medium shadow hover:brightness-110 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
