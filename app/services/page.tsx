import { AmenitiesSection } from "../components/home/AmenitiesSection";
import { FinalCTASection } from "../components/home/FinalCTASection";
import { ProcessSection } from "../components/home/ProcessSection";
import { SelectedServicesSection } from "../components/home/SelectedServicesSection";
import { SiteHeader } from "../components/home/SiteHeader";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5efe4] text-zinc-950">
      <SiteHeader />
      <SelectedServicesSection />
      <ProcessSection />
      <AmenitiesSection />
      <FinalCTASection />
    </main>
  );
}
