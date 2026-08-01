import { CompletedProjectsSection } from "../components/home/CompletedProjectsSection";
import { FinalCTASection } from "../components/home/FinalCTASection";
import { PremiumFooter } from "../components/home/PremiumFooter";
import { ProjectSection } from "../components/home/ProjectSection";
import { SiteHeader } from "../components/home/SiteHeader";
import { StickyCTA } from "../components/home/StickyCTA";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] pb-20 text-zinc-950 md:pb-0">
      <SiteHeader />
      <ProjectSection />
      <CompletedProjectsSection />
      <FinalCTASection />
      <PremiumFooter />
      <StickyCTA />
    </main>
  );
}
