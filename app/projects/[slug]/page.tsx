import { notFound } from "next/navigation";
import { FinalCTASection } from "../../components/home/FinalCTASection";
import { PremiumFooter } from "../../components/home/PremiumFooter";
import { SiteHeader } from "../../components/home/SiteHeader";
import { StickyCTA } from "../../components/home/StickyCTA";
import { getProjectBySlug, projects } from "../../components/home/data";
import { ProjectHero } from "../../components/project/ProjectHero";
import { ProjectOverview } from "../../components/project/ProjectOverview";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5efe4] pb-20 text-zinc-950 md:pb-0">
      <SiteHeader />
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <FinalCTASection />
      <PremiumFooter />
      <StickyCTA />
    </main>
  );
}
