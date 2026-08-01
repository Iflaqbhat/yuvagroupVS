import {
  ArrowRight,
  CalendarDays,
  Phone
} from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="bg-[#ffffff] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 text-[#ffffff] shadow-soft-panel lg:grid-cols-[1fr_auto]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#ffffff]/15 bg-[#ffffff]/10 px-3 py-2 text-sm font-semibold">
            <CalendarDays className="h-4 w-4 text-cyan-300" />
            Site visits open
          </div>
          <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to compare projects in person?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-300 sm:text-base">
            Share your preferred project and visit window. The contact page keeps the full inquiry form and sales details.
          </p>
        </div>
        <div className="flex flex-col gap-3 border-t border-[#ffffff]/10 p-6 sm:flex-row lg:flex-col lg:justify-center lg:border-l lg:border-t-0 lg:p-10">
          <a
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-sky-600 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-sm"
          >
            Book a visit
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+918282823395"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#ffffff]/15 bg-[#ffffff]/10 px-5 text-sm font-semibold text-[#ffffff] transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-[#ffffff]/15 hover:shadow-sm"
          >
            <Phone className="h-4 w-4" />
            Call sales
          </a>
        </div>
      </div>
    </section>
  );
}
