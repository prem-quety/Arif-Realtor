// src/app/about/page.tsx
import AboutTwoColumnSection from "./about";
import Hero from "./Hero"; // adjust if path is different
import MapSection from "./Map";
import WhyChooseArif from "./WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="bg-background text-heading">
      <Hero />
      <AboutTwoColumnSection />
      <WhyChooseArif />
      <MapSection />
    </main>
  );
}
