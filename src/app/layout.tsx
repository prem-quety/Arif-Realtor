import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Nav from "@/components/Nav"; // <-- add this
import Footer from "../components/Footer/page";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "arifrealtor — Premium Real Estate",
  description:
    "Curated luxury listings, private tours, and white-glove service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white text-gray-900 antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
