import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { LocationSection } from "./components/sections/LocationSection";
import { MapSection } from "./components/sections/MapSection";
import { FloatingMenu } from "./components/layout/FloatingMenu";
import { AccommodationsIntroSection } from "./components/sections/AccommodationsIntroSection";
import { GeneralInfoSection } from "./components/sections/GeneralInfoSection";
import { HouseAreiaSection } from "./components/sections/HouseAreiaSection";
import { HouseHorizonteSection } from "./components/sections/HouseHorizonteSection";
import { HouseMareSection } from "./components/sections/HouseMareSection";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="relative size-full">
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <MapSection />
      <AccommodationsIntroSection />
      <GeneralInfoSection />
      <HouseAreiaSection  />
      <HouseMareSection  />
      <HouseHorizonteSection  />
      <Footer />
      <FloatingMenu />
    </div>
  );
}