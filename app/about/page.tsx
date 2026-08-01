import { BuyerFeedbackSection } from "../components/home/BuyerFeedbackSection";
import { CareersSection } from "../components/home/CareersSection";
import { CompanyIntroSection } from "../components/home/CompanyIntroSection";
import { FinalCTASection } from "../components/home/FinalCTASection";
import { SiteHeader } from "../components/home/SiteHeader";
import { TrustBand } from "../components/home/TrustBand";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5efe4] text-zinc-950">
      <SiteHeader />
      <CompanyIntroSection />
      <TrustBand />
      <BuyerFeedbackSection />
      <CareersSection />
      <FinalCTASection />
    </main>
  );
}
