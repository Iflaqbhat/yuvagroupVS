import {
  ArrowRight,
  Phone
} from "lucide-react";

export function StickyCTA() {
  return (
    <>
      {/* Mobile: sticky bottom bar (takes the last line) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-[#fff8ed]/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_40px_rgba(2,8,23,0.12)] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+918282823395"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-sky-200 bg-[#fff8ed] px-4 text-sm font-semibold text-zinc-800 transition active:bg-sky-50"
          >
            <Phone className="h-4 w-4 text-sky-700" />
            Call sales
          </a>
          <a
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 text-sm font-semibold text-[#fff8ed] ring-1 ring-sky-400/30 transition active:bg-sky-700"
          >
            Book visit
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Desktop: floating pill bottom-right */}
      <a
        href="/contact"
        className="fixed bottom-6 right-6 z-40 hidden h-12 items-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-[#fff8ed] shadow-[0_18px_50px_rgba(2,8,23,0.35)] ring-1 ring-sky-400/30 transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-[0_22px_60px_rgba(2,132,199,0.3)] md:inline-flex"
      >
        Book a visit
        <ArrowRight className="h-4 w-4" />
      </a>
    </>
  );
}
