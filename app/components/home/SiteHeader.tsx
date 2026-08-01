"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  MapPin,
  Menu
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { completedProjects, projects } from "./data";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Amenities", href: "/services#amenities" },
  { label: "Contact", href: "/contact" }
];

const thumb = (url: string) => url.replace("w=1400", "w=640&q=60");

const ongoing = projects.filter((project) => project.stage === "Ongoing");
const ready = projects.filter((project) => project.stage.includes("Ready"));

const menuContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.02 } }
};

const menuItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } }
};

function ProjectsMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const openMenu = () => {
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), 80);
  };

  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), 180);
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <a
        href="/projects"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
        onFocus={openMenu}
        aria-expanded={open}
        className="group relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-950"
      >
        Projects
        <ChevronDown
          className={`h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:text-sky-600 ${
            open ? "rotate-180" : ""
          }`}
        />
        <span className="absolute inset-x-3 bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-sky-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </a>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            className="absolute left-1/2 top-full z-50 mt-3 w-[680px] max-w-[calc(100vw-2rem)] -translate-x-1/2"
          >
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-[#ffffff] shadow-[0_28px_70px_-16px_rgba(2,6,23,0.25)]">
              <div className="h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
              <motion.div
                variants={menuContainer}
                initial="hidden"
                animate="show"
                className="grid grid-cols-3 gap-5 p-5"
              >
                {/* Ongoing */}
                <motion.div variants={menuItem}>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      Ongoing
                    </span>
                    <span className="rounded-full bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500">
                      {ongoing.length}
                    </span>
                  </div>
                  <div className="mt-3 grid gap-3">
                    {ongoing.map((project) => (
                      <a
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block overflow-hidden rounded-xl border border-zinc-200 bg-[#ffffff] transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-soft-panel"
                      >
                        <div className="relative h-24 overflow-hidden">
                          <img
                            src={thumb(project.image)}
                            alt={project.name}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                          <span className="absolute left-2 top-2 rounded-md bg-zinc-950/80 px-2 py-0.5 text-[10px] font-semibold text-[#ffffff] backdrop-blur">
                            {project.stage}
                          </span>
                        </div>
                        <div className="p-3">
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate text-sm font-semibold text-zinc-950">
                              {project.name}
                            </span>
                            <span className="shrink-0 text-xs font-semibold text-sky-700">
                              {project.progress}%
                            </span>
                          </div>
                          <p className="mt-1 flex items-center gap-1 text-[11px] leading-4 text-zinc-500">
                            <MapPin className="h-3 w-3 shrink-0" />
                            {project.location}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Ready to move */}
                <motion.div variants={menuItem}>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      Ready to move
                    </span>
                    <span className="rounded-full bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500">
                      {ready.length}
                    </span>
                  </div>
                  <div className="mt-3 grid gap-3">
                    {ready.map((project) => (
                      <a
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block overflow-hidden rounded-xl border border-zinc-200 bg-[#ffffff] transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-soft-panel"
                      >
                        <div className="relative h-24 overflow-hidden">
                          <img
                            src={thumb(project.image)}
                            alt={project.name}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                          <span className="absolute left-2 top-2 rounded-md bg-emerald-600/90 px-2 py-0.5 text-[10px] font-semibold text-[#ffffff] backdrop-blur">
                            {project.stage}
                          </span>
                        </div>
                        <div className="p-3">
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate text-sm font-semibold text-zinc-950">
                              {project.name}
                            </span>
                            <span className="shrink-0 text-xs font-semibold text-emerald-700">
                              {project.possession}
                            </span>
                          </div>
                          <p className="mt-1 flex items-center gap-1 text-[11px] leading-4 text-zinc-500">
                            <MapPin className="h-3 w-3 shrink-0" />
                            {project.location}
                          </p>
                        </div>
                      </a>
                    ))}
                    <a
                      href="/contact"
                      className="group block rounded-xl border border-dashed border-sky-300 bg-sky-50/60 p-3 text-center transition duration-200 hover:-translate-y-0.5 hover:bg-sky-50"
                    >
                      <p className="text-xs font-semibold text-zinc-900">Visiting soon?</p>
                      <p className="mt-1 text-[11px] leading-5 text-zinc-600">
                        Book a walkthrough and see the site before you commit.
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700">
                        Book a site visit
                        <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </div>
                </motion.div>

                {/* Completed */}
                <motion.div variants={menuItem}>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      Completed
                    </span>
                    <span className="rounded-full bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500">
                      {completedProjects.length}
                    </span>
                  </div>
                  <div className="mt-3 grid gap-3">
                    {completedProjects.map((project) => (
                      <a
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-[#ffffff] p-2.5 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-soft-panel"
                      >
                        <img
                          src={thumb(project.image)}
                          alt={project.name}
                          loading="lazy"
                          className="h-14 w-14 shrink-0 rounded-lg object-cover ring-1 ring-black/5"
                        />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-zinc-950">
                            {project.name}
                          </p>
                          <p className="text-[11px] leading-4 text-zinc-500">
                            Handed over · {project.location}
                          </p>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-zinc-300 transition group-hover:translate-x-0.5 group-hover:text-sky-600" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <div className="flex items-center justify-between gap-4 border-t border-zinc-200 bg-zinc-950 px-5 py-3.5">
                <p className="text-xs leading-5 text-zinc-400">
                  Every Yuva address, at every stage —{" "}
                  <span className="font-semibold text-[#ffffff]">
                    ongoing, ready, and delivered.
                  </span>
                </p>
                <div className="flex shrink-0 items-center gap-3">
                  <a
                    href="/projects"
                    className="text-xs font-semibold text-sky-300 transition hover:text-sky-200 hover:underline"
                  >
                    Explore all projects
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex h-8 items-center gap-1.5 rounded-md bg-sky-600 px-3 text-xs font-semibold text-[#ffffff] transition hover:-translate-y-0.5 hover:bg-sky-500"
                  >
                    Book a site visit
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[#ffffff]/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-950 text-[#ffffff] shadow-sm ring-1 ring-sky-400/30 transition group-hover:-translate-y-0.5 group-hover:bg-sky-700 group-hover:ring-sky-300">
            <Building2 className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold">
              Yuva <span className="text-sky-700">Group</span>
            </span>
            <span className="block text-xs text-zinc-500">Bengaluru Builders</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <ProjectsMenu />
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-md px-3 py-2 text-sm font-semibold text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-950"
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-sky-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="tel:+918282823395"
            className="inline-flex h-10 items-center justify-center rounded-md border border-sky-200 bg-[#ffffff] px-4 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-700 hover:shadow-sm"
          >
            Call sales
          </a>
          <a
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-semibold text-[#ffffff] ring-1 ring-sky-400/30 transition hover:-translate-y-0.5 hover:bg-sky-700 hover:text-[#ffffff] hover:shadow-sm"
          >
            Book visit
          </a>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Open navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-md border border-zinc-200 bg-[#ffffff] text-zinc-800 transition hover:border-sky-300 hover:text-sky-700 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-zinc-200 bg-[#ffffff] px-4 py-3 shadow-sm md:hidden"
          >
            <div className="grid gap-2">
              <button
                type="button"
                aria-expanded={mobileProjectsOpen}
                onClick={() => setMobileProjectsOpen((open) => !open)}
                className="group flex items-center justify-between rounded-lg border border-zinc-200 bg-[#ffffff] px-3 py-3 text-sm font-semibold text-zinc-800 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
              >
                Projects
                <ChevronDown
                  className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${
                    mobileProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {mobileProjectsOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-1.5 pl-2">
                      <MobileSubLink href="/projects" label="Ongoing projects" onClick={closeMobile} />
                      <MobileSubLink href="/projects" label="Ready to move" onClick={closeMobile} />
                      <MobileSubLink href="/projects#completed-projects" label="Completed projects" onClick={closeMobile} />
                      <MobileSubLink href="/projects" label="View all projects" onClick={closeMobile} primary />
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between rounded-lg border border-zinc-200 bg-[#ffffff] px-3 py-3 text-sm font-semibold text-zinc-800 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-sky-600" />
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function MobileSubLink({
  href,
  label,
  primary = false,
  onClick
}: {
  href: string;
  label: string;
  primary?: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group flex items-center justify-between rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
        primary
          ? "border-sky-200 bg-sky-50 text-sky-700 hover:border-sky-300 hover:bg-sky-100"
          : "border-zinc-100 bg-zinc-50 text-zinc-600 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
      }`}
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-sky-600" />
    </a>
  );
}
