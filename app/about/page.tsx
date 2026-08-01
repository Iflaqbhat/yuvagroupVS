import { BuyerFeedbackSection } from "../components/home/BuyerFeedbackSection";
import { CareersSection } from "../components/home/CareersSection";
import { CompanyIntroSection } from "../components/home/CompanyIntroSection";
import { FinalCTASection } from "../components/home/FinalCTASection";
import { PremiumFooter } from "../components/home/PremiumFooter";
import { SiteHeader } from "../components/home/SiteHeader";
import { StickyCTA } from "../components/home/StickyCTA";
import { TrustBand } from "../components/home/TrustBand";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5efe4] pb-20 text-zinc-950 md:pb-0">
      <SiteHeader />
      <CompanyIntroSection />
      <TrustBand />
      <BuyerFeedbackSection />
      <CareersSection />
      <FinalCTASection />
      <PremiumFooter />
      <StickyCTA />
    </main>
  );
}
