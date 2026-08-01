import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  FileCheck2,
  Ruler
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: CalendarDays,
    title: "Guided site visits",
    copy: "Book a walkthrough and understand progress, approach roads, and available inventory."
  },
  {
    icon: Ruler,
    title: "Plan review",
    copy: "Compare layout, facing, sunlight, unit mix, amenities, and payment schedule clearly."
  },
  {
    icon: FileCheck2,
    title: "Documentation support",
    copy: "Keep loan, floor-plan, checklist, and possession readiness aligned from inquiry to handover."
  }
];

export function SelectedServicesSection() {
  return (
    <section className="bg-[#f5efe4] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected Services"
            title="Support buyers need before they commit."
            copy="A short homepage preview of the service journey. The full service details live on a dedicated page."
            align="left"
          />
          <a
            href="/services"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-zinc-950 px-5 text-sm font-semibold text-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600 hover:text-[#fff8ed] hover:shadow-sm"
          >
            View services
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-lg border border-zinc-200 bg-[#fff8ed] p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-soft-panel"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-zinc-950 text-[#fff8ed] transition group-hover:bg-sky-600">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-zinc-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{service.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-800">
          <ClipboardCheck className="h-4 w-4" />
          Detailed process, amenities, and handover support are on the services page.
        </div>
      </div>
    </section>
  );
}
