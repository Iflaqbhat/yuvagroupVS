import { completedProjects } from "./data";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function CompletedProjectsSection() {
  return (
    <section id="completed-projects" className="relative overflow-hidden bg-[#ffffff] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Completed Projects"
          title="Delivered addresses that keep the record honest."
          copy="Beyond the active sites, these completed communities show what a Yuva Group handover actually looks like — keys, documents, and neighbours already in place."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
