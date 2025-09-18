"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav className="pointer-events-auto mx-auto mt-4 w-full max-w-7xl rounded-2xl bg-white/60 backdrop-blur-md shadow-xl border border-white/40 px-6 py-4 text-gray-800">
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

          {/* Desktop Nav */}
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
            <Link
              href="/about"
              className="hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/mylistings"
              className="hover:text-gray-900 transition-colors"
            >
              My Listings
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-4 flex flex-col gap-4 font-medium text-gray-700 md:hidden">
            <Link
              href="/"
              className="hover:text-gray-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-gray-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/mortgage"
              className="hover:text-gray-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              Mortgage Calculator
            </Link>
            <Link
              href="/mylistings"
              className="hover:text-gray-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              My Listings
            </Link>
            <a
              href="/contact"
              className="rounded-lg border border-gray-300 bg-white/70 px-5 py-2 hover:bg-white transition text-center"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
