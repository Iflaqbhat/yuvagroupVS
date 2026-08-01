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
    <section className="relative isolate min-h-[68vh] overflow-hidden bg-zinc-950">
      <img
        src={project.image}
        alt={`${project.name} project`}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-zinc-950/20" />

      <div className="relative mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-md border border-[#fff8ed]/20 bg-[#fff8ed]/10 px-3 py-1.5 text-sm font-medium text-[#fff8ed] backdrop-blur transition hover:border-[#fff8ed]/40 hover:bg-[#fff8ed]/20"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        <span className="w-fit rounded-md bg-sky-500 px-2.5 py-1 text-xs font-semibold text-[#fff8ed]">
          {project.stage}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-[#fff8ed] sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-3 flex items-start gap-2 text-base text-zinc-100">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
          {project.location}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-zinc-200">
          {project.headline}
        </p>

        <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#fff8ed]/15 bg-[#fff8ed]/10 p-4 backdrop-blur-md"
            >
              <span className="block text-xs font-medium text-zinc-300">
                {stat.label}
              </span>
              <span className="mt-1.5 block text-sm font-semibold text-[#fff8ed]">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#fff8ed] px-6 text-sm font-semibold text-sky-950 transition hover:-translate-y-0.5 hover:bg-sky-50 hover:shadow-lg"
          >
            Book a site visit
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+918282823395"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#fff8ed]/15 bg-[#fff8ed]/10 px-6 text-sm font-semibold text-[#fff8ed] transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-[#fff8ed]/15 hover:shadow-lg"
          >
            Call sales
          </a>
        </div>
      </div>
    </section>
  );
}
