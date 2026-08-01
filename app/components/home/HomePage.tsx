"use client";

import { BookVisitSection } from "./BookVisitSection";
import { FeaturedProjectsSection } from "./FeaturedProjectsSection";
import { HeroSection } from "./HeroSection";
import { PremiumFooter } from "./PremiumFooter";
import { PropertyHighlightsSection } from "./PropertyHighlightsSection";
import { SelectedServicesSection } from "./SelectedServicesSection";
import { ShortTestimonialsSection } from "./ShortTestimonialsSection";
import { SiteHeader } from "./SiteHeader";
import { StickyCTA } from "./StickyCTA";
import { TrustBand } from "./TrustBand";

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#ffffff] pb-20 text-zinc-950 md:pb-0">
      <SiteHeader />
      <HeroSection />
      <PropertyHighlightsSection />
      <SelectedServicesSection />
      <FeaturedProjectsSection />
      <TrustBand />
      <ShortTestimonialsSection />
      <BookVisitSection />
      <PremiumFooter />
      <StickyCTA />
    </main>
  );
}
