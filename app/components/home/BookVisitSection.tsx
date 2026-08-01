import {
  ArrowRight,
  CalendarDays,
  Mail,
  Phone
} from "lucide-react";
import { LocationMap } from "./LocationMap";
import {
  projects,
  visitLocation
} from "./data";
import { SectionHeading } from "./SectionHeading";

export function BookVisitSection() {
  return (
    <section id="book-visit" className="bg-[#ffffff] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Book A Visit"
            title="See the site, then decide with confidence."
            copy="Pick a project, open directions, and share your visit window. The map keeps the next step practical instead of buried in the page."
            align="left"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${visitLocation.phone.replaceAll(" ", "")}`}
              className="group flex items-center gap-3 rounded-lg border border-zinc-200 bg-[#ffffff] p-4 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-soft-panel"
            >
              <Phone className="h-5 w-5 text-sky-600 transition group-hover:scale-110" />
              <span>
                <span className="block text-xs text-zinc-500">Call sales</span>
                {visitLocation.phone}
              </span>
            </a>
            <a
              href={`mailto:${visitLocation.email}`}
              className="group flex items-center gap-3 rounded-lg border border-zinc-200 bg-[#ffffff] p-4 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-soft-panel"
            >
              <Mail className="h-5 w-5 text-sky-600 transition group-hover:scale-110" />
              <span>
                <span className="block text-xs text-zinc-500">Email</span>
                {visitLocation.email}
              </span>
            </a>
          </div>

          <div className="mt-6">
            <LocationMap />
          </div>
        </div>

        <form className="self-start rounded-xl border border-zinc-200 bg-[#ffffff] p-5 shadow-soft-panel transition hover:border-sky-200 sm:p-6 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-800">
            <CalendarDays className="h-4 w-4" />
            Site visit request
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-zinc-800">Name</span>
              <input
                className="mt-2 h-11 w-full rounded-md border border-zinc-200 px-3 text-sm outline-none transition hover:border-sky-200 focus:border-sky-700"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-zinc-800">Phone</span>
              <input
                className="mt-2 h-11 w-full rounded-md border border-zinc-200 px-3 text-sm outline-none transition hover:border-sky-200 focus:border-sky-700"
                placeholder="+91"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-zinc-800">Project</span>
              <select className="mt-2 h-11 w-full rounded-md border border-zinc-200 px-3 text-sm outline-none transition hover:border-sky-200 focus:border-sky-700">
                {projects.map((project) => (
                  <option key={project.name}>{project.name}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-zinc-800">Preferred window</span>
            <textarea
              className="mt-2 min-h-28 w-full resize-none rounded-md border border-zinc-200 p-3 text-sm outline-none transition hover:border-sky-200 focus:border-sky-700"
              placeholder="Date, budget, BHK preference, and visit timing"
            />
          </label>

          <button
            type="button"
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700 hover:text-white hover:shadow-sm"
          >
            Book site visit
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="mt-4 text-xs leading-5 text-zinc-500">
            The team can confirm availability and directions before the visit.
          </p>
        </form>
      </div>
    </section>
  );
}
