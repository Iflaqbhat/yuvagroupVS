"use client";

import { useState } from "react";
import { FinalCTASection } from "../components/home/FinalCTASection";
import { ProjectSection } from "../components/home/ProjectSection";
import { SiteHeader } from "../components/home/SiteHeader";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <main className="min-h-screen bg-[#f5efe4] text-zinc-950">
      <SiteHeader />
      <ProjectSection
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <FinalCTASection />
    </main>
  );
}
