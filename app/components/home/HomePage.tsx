"use client";

import { BookVisitSection } from "./BookVisitSection";
import { FeaturedProjectsSection } from "./FeaturedProjectsSection";
import { HeroSection } from "./HeroSection";
import { PremiumFooter } from "./PremiumFooter";
import { PropertyHighlightsSection } from "./PropertyHighlightsSection";
import { SelectedServicesSection } from "./SelectedServicesSection";
import { ShortTestimonialsSection } from "./ShortTestimonialsSection";
import { SiteHeader } from "./SiteHeader";
import { TrustBand } from "./TrustBand";

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5efe4] text-zinc-950">
      <SiteHeader />
      <HeroSection />
      <PropertyHighlightsSection />
      <SelectedServicesSection />
      <FeaturedProjectsSection />
      <TrustBand />
      <ShortTestimonialsSection />
      <BookVisitSection />
      <PremiumFooter />
    </main>
  );
}
