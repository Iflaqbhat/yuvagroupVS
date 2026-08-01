import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  cta?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, copy, cta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-[#ffffff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(14,165,233,0.10),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-zinc-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">{copy}</p>
        {cta ? (
          <a
            href={cta.href}
            className="mt-7 inline-flex h-11 items-center gap-2 rounded-md bg-zinc-950 px-5 text-sm font-semibold text-white ring-1 ring-sky-400/30 transition hover:-translate-y-0.5 hover:bg-sky-700 hover:text-white hover:shadow-sm"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </section>
  );
}
