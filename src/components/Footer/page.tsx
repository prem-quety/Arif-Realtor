"use client";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 text-muted text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Newsletter */}
        <div>
          <img
            src="/assets/images/arif.webp"
            alt="Logo"
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
              <a href="#" className="hover:text-heading">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-heading">
                Buyers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-heading">
                Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-heading">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-heading">
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
            <li>📞 416-908-5600</li>
            <li>📧 info@arifrealty.com</li>
            <li>
              📍 Burnhamthorpe Rd W,
              <br />
              Mississauga, ON L5C 4E9
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center text-xs py-6 text-muted">
        © {new Date().getFullYear()} Arif Realty — All rights reserved.
      </div>
    </footer>
  );
}
