import { BookVisitSection } from "../components/home/BookVisitSection";
import { PremiumFooter } from "../components/home/PremiumFooter";
import { SiteHeader } from "../components/home/SiteHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5efe4] text-zinc-950">
      <SiteHeader />
      <BookVisitSection />
      <PremiumFooter />
    </main>
  );
}
