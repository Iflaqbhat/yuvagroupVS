import { AmenitiesSection } from "../components/home/AmenitiesSection";
import { FinalCTASection } from "../components/home/FinalCTASection";
import { PageHero } from "../components/home/PageHero";
import { PremiumFooter } from "../components/home/PremiumFooter";
import { ProcessSection } from "../components/home/ProcessSection";
import { SelectedServicesSection } from "../components/home/SelectedServicesSection";
import { SiteHeader } from "../components/home/SiteHeader";
import { StickyCTA } from "../components/home/StickyCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] pb-20 text-zinc-950 md:pb-0">
      <SiteHeader />
      <PageHero
        eyebrow="Services"
        title="Buyer support from the first site visit to handover."
        copy="Everything Yuva Group does around the homes — guided walkthroughs, plan review, documentation support, and the amenities that come with each project."
        cta={{ label: "Book a site visit", href: "/contact" }}
      />
      <SelectedServicesSection isFullPage />
      <ProcessSection />
      <AmenitiesSection />
      <FinalCTASection />
      <PremiumFooter />
      <StickyCTA />
    </main>
  );
}
