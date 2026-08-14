import { useEffect } from "react";
import { useLocation } from "react-router";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { LocationSection } from "../components/sections/LocationSection";
import { LocationGallerySection } from "../components/sections/LocationGallerySection";
import { AccommodationsIntroSection } from "../components/sections/AccommodationsIntroSection";
import { FloatingMenu } from "../components/layout/FloatingMenu";
import { Footer } from "../components/layout/Footer";

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="relative size-full">
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <LocationGallerySection />
      <AccommodationsIntroSection />
      <Footer />
      <FloatingMenu />
    </div>
  );
}