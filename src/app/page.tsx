"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero"; // choose A or B above
import Services from "@/components/Services";

import TrustedExpertSection from "../components/TrustedExpertSection/page";
import CallToJourneySection from "../components/CallToJourneySection/page";
import WhyWorkWithArifSection from "../components/WhyWorkWithArifSection/WhyWorkWithArifSection";
import AreasCoveredSection from "../components/AreasCoveredSection/AreasCoveredSection";
import FooterSection from "../components/Footer/page";
import HomeValuationBanner from "../components/HomeWorth/page";
import Testimonials from "@/components/Testimonials/page";
import PortfolioGallery from "@/components/Portfolio/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <Nav /> */}
      <Hero />
      <Services />
      <TrustedExpertSection />
      <CallToJourneySection />
      <WhyWorkWithArifSection />
      <AreasCoveredSection />
      <PortfolioGallery />
      <Testimonials />
      <HomeValuationBanner />
      {/* <FooterSection /> */}
    </main>
  );
}
