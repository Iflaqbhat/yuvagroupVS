import { BookVisitSection } from "../components/home/BookVisitSection";
import { PremiumFooter } from "../components/home/PremiumFooter";
import { SiteHeader } from "../components/home/SiteHeader";
import { StickyCTA } from "../components/home/StickyCTA";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] pb-20 text-zinc-950 md:pb-0">
      <SiteHeader />
      <BookVisitSection />
      <PremiumFooter />
      <StickyCTA />
    </main>
  );
}
