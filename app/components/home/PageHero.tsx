import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  cta?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, copy, cta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-sand">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(28,28,28,0.05),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <span className="label-eyebrow">{eyebrow}</span>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">{copy}</p>
        {cta ? (
          <a
            href={cta.href}
            className="mt-7 inline-flex h-11 items-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white ring-1 ring-bronze/30 transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-white hover:shadow-sm"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </section>
  );
}
