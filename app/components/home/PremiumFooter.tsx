"use client";

import { motion } from "framer-motion";
import {
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
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

const legalLinks = [
  ["Privacy Policy", "https://yuvagroup.in/privacy-policy/"],
  ["Terms and Conditions", "https://yuvagroup.in/terms-and-conditions/"],
  ["Karnataka RERA", "https://rera.karnataka.gov.in/"],
  ["Directions", visitLocation.directionsUrl]
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
      className="relative overflow-hidden bg-[#101820] text-[#fff8ed]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(14,165,233,0.22),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(16,185,129,0.12),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,248,237,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,248,237,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1.85fr]">
          <div>
            <a href="/" className="group inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#fff8ed] text-zinc-950 shadow-sm transition group-hover:-translate-y-0.5 group-hover:bg-sky-200">
                <Building2 className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-semibold">
                  Yuva <span className="text-sky-300">Group</span>
                </span>
                <span className="block text-xs text-zinc-400">Bengaluru Builders</span>
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-6 text-zinc-300">
              Residential construction and buyer support for Bengaluru growth-corridor homes, from the first site visit to handover readiness.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-[#fff8ed]/10 bg-[#fff8ed]/10 text-zinc-300 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-500/15 hover:text-sky-200"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Quick Links" links={quickLinks} />
            <FooterColumn
              title="Projects"
              links={projects.map((project) => [project.name, "/projects"])}
            />

            <div>
              <h3 className="text-sm font-semibold text-[#fff8ed]">Contact</h3>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <a
                  href={`tel:${visitLocation.phone.replaceAll(" ", "")}`}
                  className="group flex items-start gap-2 transition hover:text-sky-200"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-300 transition group-hover:scale-110" />
                  {visitLocation.phone}
                </a>
                <a
                  href={`mailto:${visitLocation.email}`}
                  className="group flex items-start gap-2 transition hover:text-sky-200"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-300 transition group-hover:scale-110" />
                  {visitLocation.email}
                </a>
                <a
                  href={visitLocation.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-2 transition hover:text-sky-200"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300 transition group-hover:scale-110" />
                  <span>{visitLocation.address}</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#fff8ed]">Legal</h3>
              <div className="mt-4 space-y-3">
                {legalLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-3 text-sm text-zinc-300 transition hover:text-sky-200"
                  >
                    <span>{label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-[#fff8ed]/10 pt-6 text-xs leading-5 text-zinc-400 md:grid-cols-[1fr_auto] md:items-center">
          <p>Copyright © 2026 Yuva Group. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#fff8ed]/10 bg-[#fff8ed]/10 px-3 py-2 text-zinc-300">
              <ShieldCheck className="h-4 w-4 text-sky-300" />
              RERA and legal disclosures to be verified before launch
            </span>
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
  links: string[][];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#fff8ed]">{title}</h3>
      <div className="mt-4 space-y-3">
        {links.map(([label, href]) => (
          <a
            key={`${title}-${label}`}
            href={href}
            className="group flex items-center justify-between gap-3 text-sm text-zinc-300 transition hover:text-sky-200"
          >
            <span>{label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  );
}
