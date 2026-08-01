"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  Share2,
  ShieldCheck,
} from "lucide-react";
import {
  projects,
  visitLocation
} from "./data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const projectLinks = projects.map((project) => ({
  label: project.name,
  href: `/projects/${project.slug}`,
  meta:
    project.stage === "Ongoing"
      ? `${project.progress}%`
      : project.stage === "Ready To Move"
        ? "Ready now"
        : "Sold out"
}));

const legalLinks = [
  { label: "Privacy Policy", href: "https://yuvagroup.in/privacy-policy/" },
  { label: "Terms and Conditions", href: "https://yuvagroup.in/terms-and-conditions/" },
  { label: "Karnataka RERA", href: "https://rera.karnataka.gov.in/" }
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: Share2
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/yuva-structures-pvt-ltd/",
    icon: BriefcaseBusiness
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/results?search_query=Yuva+Group+Bengaluru",
    icon: PlayCircle
  }
];

export function PremiumFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden bg-ink text-[#ffffff]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(176,139,95,0.20),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(214,177,131,0.10),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,248,237,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,248,237,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1.85fr]">
          <div>
            <a href="/" className="group inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sand text-ink shadow-sm transition group-hover:-translate-y-0.5 group-hover:bg-clay/40">
                <Building2 className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-semibold">
                  Yuva <span className="text-clay">Group</span>
                </span>
                <span className="block text-xs text-sand/60">Bengaluru Builders</span>
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-6 text-sand/75">
              Residential construction and buyer support for Bengaluru growth-corridor homes, from the first site visit to handover readiness.
            </p>

            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-sand/60">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay" />
              {visitLocation.name} · Chandapura, Bengaluru
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-[#ffffff]/12 bg-white/5 text-sand/80 transition hover:-translate-y-0.5 hover:border-clay/70 hover:bg-bronze/20 hover:text-[#ffffff]"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Quick Links" links={quickLinks} />
            <FooterColumn title="Projects" links={projectLinks} />

            <div>
              <h3 className="text-lg font-medium text-[#ffffff]">Contact</h3>
              <div className="mt-4 space-y-3 text-sm text-sand/75">
                <p className="text-xs font-semibold uppercase tracking-wider text-sand/50">
                  {visitLocation.name}
                </p>
                <a
                  href={`tel:${visitLocation.phone.replaceAll(" ", "")}`}
                  className="group flex items-start gap-2 transition hover:text-[#ffffff]"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-clay transition group-hover:scale-110" />
                  <span>{visitLocation.phone}</span>
                </a>
                <a
                  href={`tel:${visitLocation.phoneSecondary.replaceAll(" ", "")}`}
                  className="group flex items-start gap-2 transition hover:text-[#ffffff]"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-clay transition group-hover:scale-110" />
                  <span>{visitLocation.phoneSecondary}</span>
                </a>
                <a
                  href={`mailto:${visitLocation.email}`}
                  className="group flex items-start gap-2 transition hover:text-[#ffffff]"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-clay transition group-hover:scale-110" />
                  {visitLocation.email}
                </a>
                <div>
                  <a
                    href={visitLocation.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-2 transition hover:text-[#ffffff]"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay transition group-hover:scale-110" />
                    <span className="leading-5">{visitLocation.address}</span>
                  </a>
                  <a
                    href={visitLocation.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#ffffff]/12 bg-white/5 px-3 py-1.5 text-xs font-medium text-sand/80 transition hover:border-clay/70 hover:bg-bronze/20 hover:text-[#ffffff]"
                  >
                    Get directions
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <FooterColumn title="Legal" links={legalLinks} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#ffffff]/10 pt-6 text-xs leading-5 text-sand/60 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 Yuva Group. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#ffffff]/10 bg-white/5 px-3 py-2 text-sand/70">
              <ShieldCheck className="h-4 w-4 text-clay" />
              RERA and legal disclosures to be verified before launch
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="grid h-9 w-9 place-items-center rounded-lg border border-[#ffffff]/10 bg-white/5 text-sand/70 transition hover:border-clay/70 hover:bg-bronze/20 hover:text-[#ffffff]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: { label: string; href: string; meta?: string }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-medium text-[#ffffff]">{title}</h3>
      <div className="mt-4 space-y-3">
        {links.map((link) => (
          <a
            key={`${title}-${link.label}`}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex items-center justify-between gap-3 text-sm text-sand/75 transition hover:text-[#ffffff]"
          >
            <span>{link.label}</span>
            {link.meta ? (
              <span className="shrink-0 text-xs font-medium text-clay">{link.meta}</span>
            ) : (
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
