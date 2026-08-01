import { BadgeCheck } from "lucide-react";

const stats = [
  ["10+", "completed projects"],
  ["5", "growth-corridor locations"],
  ["100%", "visit-first sales flow"],
  ["1:1", "site visit support"]
];

export function TrustBand() {
  return (
    <section className="border-b border-zinc-200 bg-[#ffffff]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map(([value, label]) => (
          <div key={label} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-zinc-950 text-[#ffffff]">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-2xl font-semibold text-zinc-950">{value}</span>
              <span className="text-sm text-zinc-500">{label}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
