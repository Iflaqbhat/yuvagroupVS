import { AmenitiesSection } from "../components/home/AmenitiesSection";
import { FinalCTASection } from "../components/home/FinalCTASection";
import { PremiumFooter } from "../components/home/PremiumFooter";
import { ProcessSection } from "../components/home/ProcessSection";
import { SelectedServicesSection } from "../components/home/SelectedServicesSection";
import { SiteHeader } from "../components/home/SiteHeader";
import { StickyCTA } from "../components/home/StickyCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5efe4] pb-20 text-zinc-950 md:pb-0">
      <SiteHeader />
      <SelectedServicesSection />
      <ProcessSection />
      <AmenitiesSection />
      <FinalCTASection />
      <PremiumFooter />
      <StickyCTA />
    </main>
  );
}
