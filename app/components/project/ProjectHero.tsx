import {
  ArrowLeft,
  ArrowRight,
  MapPin
} from "lucide-react";
import Link from "next/link";
import type { Project } from "../home/data";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const stats = [
    { label: "Homes", value: project.homes },
    { label: "Booking", value: project.price },
    { label: "Possession", value: project.possession },
    { label: "Area", value: project.area }
  ];

  return (
    <section className="relative isolate min-h-[68vh] overflow-hidden bg-ink">
      <img
        src={project.image}
        alt={`${project.name} project`}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />

      <div className="relative mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-md border border-[#ffffff]/20 bg-sand/10 px-3 py-1.5 text-sm font-medium text-[#ffffff] backdrop-blur transition hover:border-[#ffffff]/40 hover:bg-sand/20"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        <span className="w-fit rounded-md bg-bronze-deep px-2.5 py-1 text-xs font-semibold text-[#ffffff]">
          {project.stage}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-[#ffffff] sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-3 flex items-start gap-2 text-base text-sand">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
          {project.location}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-sand/90">
          {project.headline}
        </p>

        <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#ffffff]/15 bg-sand/10 p-4 backdrop-blur-md"
            >
              <span className="block text-xs font-medium text-ink-soft">
                {stat.label}
              </span>
              <span className="mt-1.5 block text-sm font-semibold text-[#ffffff]">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-bronze px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:shadow-lg"
          >
            Book a site visit
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+918282823395"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#ffffff]/15 bg-sand/10 px-6 text-sm font-semibold text-[#ffffff] transition hover:-translate-y-0.5 hover:border-clay/70 hover:bg-sand/15 hover:shadow-lg"
          >
            Call sales
          </a>
        </div>
      </div>
    </section>
  );
}
