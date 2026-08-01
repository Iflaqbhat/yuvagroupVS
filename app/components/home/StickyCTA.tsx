import {
  ArrowRight,
  Phone
} from "lucide-react";

export function StickyCTA() {
  return (
    <>
      {/* Mobile: sticky bottom bar (takes the last line) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-sand/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_40px_rgba(2,8,23,0.12)] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+918282823395"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-clay/50 bg-sand px-4 text-sm font-semibold text-ink transition active:bg-clay/20"
          >
            <Phone className="h-4 w-4 text-bronze" />
            Call sales
          </a>
          <a
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-[#ffffff] ring-1 ring-bronze/30 transition active:bg-bronze-deep"
          >
            Book visit
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Desktop: floating pill bottom-right */}
      <a
        href="/contact"
        className="fixed bottom-6 right-6 z-40 hidden h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-[#ffffff] shadow-[0_18px_50px_rgba(2,8,23,0.35)] ring-1 ring-bronze/30 transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:shadow-[0_22px_60px_rgba(2,132,199,0.3)] md:inline-flex"
      >
        Book a visit
        <ArrowRight className="h-4 w-4" />
      </a>
    </>
  );
}
