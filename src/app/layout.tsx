import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "../components/Footer/page";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arif Realtor | Premium Real Estate in GTA",
  description:
    "Trusted real estate services in Mississauga, Toronto, and across Ontario. Discover luxury homes, condos, and investment opportunities with Arif Realtor.",
  keywords: [
    "Mississauga real estate",
    "Toronto luxury homes",
    "Ontario realtor",
    "buy house GTA",
    "sell property Ontario",
    "Arif Realtor",
  ],
  authors: [{ name: "Arif Rajer", url: "https://arifrealtor.com" }],
  openGraph: {
    title: "Arif Realtor — Premium Real Estate in GTA",
    description:
      "Helping families and investors find their dream homes and properties in Mississauga, Toronto, Cambridge, Kitchener, and beyond.",
    url: "https://arifrealtor.com",
    siteName: "Arif Realtor",
    images: [
      {
        url: "https://arifrealtor.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arif Realtor - Premium Real Estate",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Realtor — Premium Real Estate in GTA",
    description:
      "Curated listings, expert guidance, and trusted real estate service across Ontario.",
    images: ["https://arifrealtor.com/assets/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arifrealtor.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Arif Rajer | Realtor®",
              url: "https://arifrealtor.com",
              logo: "https://arifrealtor.com/assets/images/arif.png",
              image: "https://arifrealtor.com/assets/images/arif.png",
              description:
                "Trusted Realtor® in Mississauga, Toronto, Cambridge, Kitchener, and Hamilton. Helping clients buy, sell, and invest in premium Ontario real estate.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mississauga",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              areaServed: [
                { "@type": "Place", name: "Greater Toronto Area" },
                { "@type": "Place", name: "Cambridge" },
                { "@type": "Place", name: "Kitchener" },
                { "@type": "Place", name: "Hamilton" },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-647-916-1000",
                contactType: "customer service",
                areaServed: "CA",
                availableLanguage: ["English", "Urdu"],
              },
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${font.className} bg-white text-gray-900 antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
