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
    <section id="book-visit" className="bg-sand py-16 sm:py-20">
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
              className="group flex items-center gap-3 rounded-lg border border-hairline bg-sand p-4 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-clay/70 hover:shadow-soft-panel"
            >
              <Phone className="h-5 w-5 text-bronze transition group-hover:scale-110" />
              <span>
                <span className="block text-xs text-ink-soft">Call sales</span>
                {visitLocation.phone}
              </span>
            </a>
            <a
              href={`mailto:${visitLocation.email}`}
              className="group flex items-center gap-3 rounded-lg border border-hairline bg-sand p-4 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-clay/70 hover:shadow-soft-panel"
            >
              <Mail className="h-5 w-5 text-bronze transition group-hover:scale-110" />
              <span>
                <span className="block text-xs text-ink-soft">Email</span>
                {visitLocation.email}
              </span>
            </a>
          </div>

          <div className="mt-6">
            <LocationMap />
          </div>
        </div>

        <form className="self-start rounded-xl border border-hairline bg-sand p-5 shadow-soft-panel transition hover:border-clay/50 sm:p-6 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-sand-deep px-3 py-2 text-sm font-semibold text-bronze">
            <CalendarDays className="h-4 w-4" />
            Site visit request
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-ink">Name</span>
              <input
                className="mt-2 h-11 w-full rounded-md border border-hairline px-3 text-sm outline-none transition hover:border-clay/50 focus:border-bronze"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink">Phone</span>
              <input
                className="mt-2 h-11 w-full rounded-md border border-hairline px-3 text-sm outline-none transition hover:border-clay/50 focus:border-bronze"
                placeholder="+91"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-ink">Project</span>
              <select className="mt-2 h-11 w-full rounded-md border border-hairline px-3 text-sm outline-none transition hover:border-clay/50 focus:border-bronze">
                {projects.map((project) => (
                  <option key={project.name}>{project.name}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-ink">Preferred window</span>
            <textarea
              className="mt-2 min-h-28 w-full resize-none rounded-md border border-hairline p-3 text-sm outline-none transition hover:border-clay/50 focus:border-bronze"
              placeholder="Date, budget, BHK preference, and visit timing"
            />
          </label>

          <button
            type="button"
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-white hover:shadow-sm"
          >
            Book site visit
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="mt-4 text-xs leading-5 text-ink-soft">
            The team can confirm availability and directions before the visit.
          </p>
        </form>
      </div>
    </section>
  );
}
