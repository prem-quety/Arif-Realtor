"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav className="pointer-events-auto mx-auto mt-4 w-[94%] max-w-7xl rounded-2xl bg-white/60 backdrop-blur-md shadow-xl border border-white/40 px-6 py-4 text-gray-800">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-block">
              <img
                src="/assets/images/arif.webp"
                alt="Arif Realtor Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            {/* <a
              href="#listings"
              className="hover:text-gray-900 transition-colors"
            >
              Listings
            </a> */}
            <Link
              href="/about"
              className="hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/mortgage"
              className="hover:text-gray-900 transition-colors"
            >
              Mortgage Calculator
            </Link>
            <a
              href="/contact"
              className="rounded-lg border border-gray-300 bg-white/70 px-5 py-2 hover:bg-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
