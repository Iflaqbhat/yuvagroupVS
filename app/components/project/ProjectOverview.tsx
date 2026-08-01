import { Check, MapPin, Route, KeyRound } from "lucide-react";
import type { Project } from "../home/data";

type ProjectOverviewProps = {
  project: Project;
};

const signals = [
  {
    icon: MapPin,
    title: "Location & Connectivity",
    copy: "Chosen around Bengaluru growth corridors, schools, and daily commute routes."
  },
  {
    icon: Route,
    title: "Construction Progress",
    copy: "Structure, slabs, masonry, and services are tracked through milestone checks on site."
  },
  {
    icon: KeyRound,
    title: "Handover Readiness",
    copy: "Floor plans, documentation, loan support, and possession readiness are kept visible."
  }
];

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-600">
            About the project
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-950">
            Living at {project.name}
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-600">
            {project.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {signals.map((signal) => (
              <div
                key={signal.title}
                className="rounded-xl border border-zinc-200 bg-[#fff8ed] p-4"
              >
                <signal.icon className="h-5 w-5 text-sky-600" />
                <h3 className="mt-3 text-sm font-semibold text-zinc-950">
                  {signal.title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-zinc-600">
                  {signal.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-[#fff8ed] p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Key highlights
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm leading-6 text-zinc-700"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-700">
                  <Check className="h-3 w-3" />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
