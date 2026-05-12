import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { LocationSection } from "../components/sections/LocationSection";
import { MapSection } from "../components/sections/MapSection";
import { FloatingMenu } from "../components/layout/FloatingMenu";
import { AccommodationsIntroSection } from "../components/sections/AccommodationsIntroSection";
import { GeneralInfoSection } from "../components/sections/GeneralInfoSection";
import { AccommodationsCarousel } from "../components/sections/AccommodationCarousel";
import { Footer } from "../components/layout/Footer";

export function Home() {
  return (
    <div className="relative size-full">
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <MapSection />
      <AccommodationsIntroSection />
      <GeneralInfoSection />
      <AccommodationsCarousel />
      <Footer />
      <FloatingMenu />
    </div>
  );
}
