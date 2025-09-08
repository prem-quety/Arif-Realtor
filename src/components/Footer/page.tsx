"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 text-muted text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Newsletter */}
        <div>
          <img
            src="/assets/images/arif.webp"
            alt="Arif Realtor Logo"
            className="h-10 mb-4"
          />
          <p className="text-heading font-serif text-xl mb-2">
            Subscribe To Our Newsletter
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="submit"
              className="inline-block bg-accent text-white px-4 py-2 rounded-md font-medium hover:bg-[#a3792f] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-heading font-medium mb-4">Navigation</p>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-heading">
                Home
              </a>
            </li>
            <li>
              <a href="/buyers" className="hover:text-heading">
                Buyers
              </a>
            </li>
            <li>
              <a href="/sellers" className="hover:text-heading">
                Sellers
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-heading">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-heading">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Areas We Serve */}
        <div>
          <p className="text-heading font-medium mb-4">Areas We Serve</p>
          <ul className="space-y-2">
            <li>Mississauga</li>
            <li>Oakville</li>
            <li>Milton</li>
            <li>Waterloo</li>
            <li>London</li>
            <li>Oxford</li>
            <li>Woodstock</li>
            <li>Niagara</li>
            <li>Thorold</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-heading font-medium mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> (647) 916-1000
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> (905) 997-3632
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> arif.realtor1@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} /> 885 Plymouth Dr Unit 2,
              <br /> Mississauga, ON. L5V 0B5
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/ArifRajer.RealEstate"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1877F2] transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/aarajer/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E4405F] transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/arifrajer/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0077B5] transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/16479161000"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#25D366] transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center text-xs py-6 text-muted">
        © {new Date().getFullYear()} Arif Rajer — Cityscape Real Estate Ltd.,
        Brokerage. All rights reserved.
      </div>
    </footer>
  );
}
