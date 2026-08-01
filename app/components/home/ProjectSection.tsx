"use client";

import { ProjectCard } from "./ProjectCard";
import { ProjectDetailPanel } from "./ProjectDetailPanel";
import { projects } from "./data";
import { SectionHeading } from "./SectionHeading";

type ProjectSectionProps = {
  activeProject: number;
  setActiveProject: (index: number) => void;
};

export function ProjectSection({
  activeProject,
  setActiveProject
}: ProjectSectionProps) {
  const selectedProject = projects[activeProject];

  return (
    <section id="projects" className="relative overflow-hidden bg-[#f5efe4] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Find the right Yuva address by stage, location, and lifestyle."
          copy="Explore active and ready homes with the details buyers care about first: location, stage, unit mix, and next visit availability."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                active={activeProject === index}
                onActivate={() => setActiveProject(index)}
              />
            ))}
          </div>

          <div className="lg:sticky lg:top-24">
            <ProjectDetailPanel
              key={selectedProject.name}
              project={selectedProject}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
