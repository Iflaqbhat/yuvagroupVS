import { ProjectCard } from "./ProjectCard";
import { projects } from "./data";
import { SectionHeading } from "./SectionHeading";

export function ProjectSection() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#f5efe4] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Find the right Yuva address by stage, location, and lifestyle."
          copy="Explore active and ready homes with the details buyers care about first: location, stage, unit mix, and next visit availability."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
