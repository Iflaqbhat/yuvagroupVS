import {
  ArrowUpRight,
  MapPin
} from "lucide-react";
import { visitLocation } from "./data";

export function LocationMap() {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-hairline bg-sand shadow-soft-panel">
      <div className="relative h-[24rem] overflow-hidden">
        <iframe
          title={`${visitLocation.name} map`}
          src={visitLocation.embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0 grayscale-[0.12] transition duration-500 group-hover:scale-[1.015]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,237,0.12),rgba(9,9,11,0.08))]" />
        <div className="absolute left-4 top-4 rounded-xl border border-hairline bg-sand/95 p-4 shadow-xl backdrop-blur-md">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-bronze text-[#ffffff] shadow-sm">
              <MapPin className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">
                {visitLocation.name}
              </span>
              <span className="mt-1 block max-w-[15rem] text-xs leading-5 text-ink-soft">
                Chandapura, Bengaluru
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 border-t border-hairline bg-sand p-5 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-sm font-semibold text-ink">{visitLocation.company}</p>
          <p className="mt-1 text-sm leading-6 text-ink-soft">{visitLocation.address}</p>
        </div>
        <a
          href={visitLocation.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-[#ffffff] transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:shadow-sm"
        >
          Get directions
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
