import {
  Building2,
  ClipboardCheck,
  MapPin
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const introPoints = [
  {
    icon: Building2,
    title: "Residential focus",
    copy: "Homes planned around practical layouts, site progress, and everyday buyer decisions."
  },
  {
    icon: MapPin,
    title: "Growth corridors",
    copy: "Locations around Electronic City, Attibele, Anekal, and connected Bengaluru routes."
  },
  {
    icon: ClipboardCheck,
    title: "Clear buying path",
    copy: "Site visits, plan review, documentation, and handover steps are kept visible."
  }
];

export function CompanyIntroSection() {
  return (
    <section className="border-b border-hairline bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Yuva Group"
          title="A construction partner for Bengaluru home buyers."
          copy="The homepage should give buyers confidence quickly: who builds, where the projects are, and what the next step looks like."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {introPoints.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-hairline bg-sand p-5 transition hover:-translate-y-1 hover:border-clay/70 hover:bg-sand hover:shadow-soft-panel"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-[#ffffff] transition group-hover:bg-bronze">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
