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

type SelectedServicesSectionProps = {
  isFullPage?: boolean;
};

export function SelectedServicesSection({
  isFullPage = false
}: SelectedServicesSectionProps) {
  return (
    <section className="bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={isFullPage ? "Services" : "Selected Services"}
            title="Support buyers need before they commit."
            copy={
              isFullPage
                ? "The complete buyer-support journey — guided walkthroughs, plan review, and documentation help from first inquiry to handover."
                : "A short homepage preview of the service journey. The full service details live on a dedicated page."
            }
            align="left"
          />
          {!isFullPage ? (
            <a
              href="/services"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-white hover:shadow-sm"
            >
              View services
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-lg border border-hairline bg-sand p-5 shadow-sm transition hover:-translate-y-1 hover:border-clay/70 hover:shadow-soft-panel"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-[#ffffff] transition group-hover:bg-bronze">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{service.copy}</p>
            </article>
          ))}
        </div>

        {!isFullPage ? (
          <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-hairline bg-sand-deep px-3 py-2 text-sm font-semibold text-bronze">
            <ClipboardCheck className="h-4 w-4" />
            Detailed process, amenities, and handover support are on the services page.
          </div>
        ) : null}
      </div>
    </section>
  );
}
