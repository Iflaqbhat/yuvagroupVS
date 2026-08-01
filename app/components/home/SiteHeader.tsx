"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
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

type MenuColumnProps = {
  label: string;
  dotClass: string;
  image: string;
  imageHref: string;
  count: number;
  links: { slug: string; name: string; meta: string }[];
};

function MenuColumn({
  label,
  dotClass,
  image,
  imageHref,
  count,
  links
}: MenuColumnProps) {
  return (
    <motion.div variants={menuItem} className="flex flex-col">
      <div className="flex items-center gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          {label}
        </span>
        <span className="rounded-full bg-sand-deep px-1.5 py-0.5 text-[10px] font-semibold text-ink-soft">
          {count}
        </span>
      </div>

      <a
        href={imageHref}
        className="group relative mt-3 block overflow-hidden rounded-xl border border-hairline transition duration-200 hover:-translate-y-0.5 hover:border-clay/70 hover:shadow-soft-panel"
      >
        <img
          src={thumb(image)}
          alt={`${label} projects`}
          loading="lazy"
          className="h-36 w-full object-cover"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
        <span className="absolute bottom-2.5 left-3 text-sm font-semibold text-sand">
          {label}
        </span>
        <span className="absolute right-2.5 top-2.5 grid h-7 w-7 place-items-center rounded-full bg-sand/90 text-ink transition duration-200 group-hover:bg-bronze group-hover:text-sand">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </a>

      <div className="mt-2 flex flex-1 flex-col">
        {links.slice(0, 2).map((link) => (
          <a
            key={link.slug}
            href={`/projects/${link.slug}`}
            className="flex min-h-[2.6rem] items-center justify-between gap-2 rounded-lg px-2 py-1.5 transition hover:bg-sand-deep"
          >
            <span className="truncate text-sm font-medium text-ink">{link.name}</span>
            <span className="shrink-0 text-xs font-semibold text-bronze">{link.meta}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

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
        className="group relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-ink-soft transition-colors duration-200 hover:bg-sand-deep hover:text-ink"
      >
        Projects
        <ChevronDown
          className={`h-4 w-4 text-ink-soft transition-transform duration-200 group-hover:text-bronze ${
            open ? "rotate-180" : ""
          }`}
        />
        <span className="absolute inset-x-3 bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-bronze transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </a>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.99, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 8, scale: 0.99, x: "-50%" }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            className="absolute left-1/2 top-full z-50 mt-3 w-[1024px] max-w-[calc(100vw-2rem)]"
          >
            <div className="overflow-hidden rounded-2xl border border-hairline bg-sand shadow-[0_28px_70px_-16px_rgba(60,45,30,0.28)]">
              <div className="h-px bg-gradient-to-r from-transparent via-bronze to-transparent" />
              <motion.div
                variants={menuContainer}
                initial="hidden"
                animate="show"
                className="grid grid-cols-3 gap-5 p-5"
              >
                <MenuColumn
                  label="Ongoing"
                  dotClass="bg-bronze"
                  image={ongoing[0]?.image ?? ""}
                  imageHref="/projects"
                  count={ongoing.length}
                  links={ongoing.map((project) => ({
                    slug: project.slug,
                    name: project.name,
                    meta: `${project.progress}%`
                  }))}
                />
                <MenuColumn
                  label="Ready to move"
                  dotClass="bg-emerald-600"
                  image={ready[0]?.image ?? ""}
                  imageHref="/projects"
                  count={ready.length}
                  links={ready.map((project) => ({
                    slug: project.slug,
                    name: project.name,
                    meta: project.possession
                  }))}
                />
                <MenuColumn
                  label="Completed"
                  dotClass="bg-indigo-600"
                  image={completedProjects[0]?.image ?? ""}
                  imageHref="/projects#completed-projects"
                  count={completedProjects.length}
                  links={completedProjects.map((project) => ({
                    slug: project.slug,
                    name: project.name,
                    meta: "Sold out"
                  }))}
                />
              </motion.div>

              <div className="flex items-center justify-center border-t border-hairline px-5 py-5">
                <a
                  href="/projects"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-ink px-6 text-sm font-semibold text-[#ffffff] ring-1 ring-bronze/30 transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-[#ffffff] hover:shadow-sm"
                >
                  Explore all projects
                  <ArrowRight className="h-4 w-4" />
                </a>
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
    <header className="sticky top-0 z-50 border-b border-hairline bg-[#ffffff]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-[#ffffff] shadow-sm ring-1 ring-bronze/30 transition group-hover:-translate-y-0.5 group-hover:bg-bronze-deep group-hover:ring-clay">
            <Building2 className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold">
              Yuva <span className="text-bronze">Group</span>
            </span>
            <span className="block text-xs text-ink-soft">Bengaluru Builders</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <ProjectsMenu />
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-md px-3 py-2 text-sm font-semibold text-ink-soft transition-colors duration-200 hover:bg-sand-deep hover:text-ink"
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-bronze transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="tel:+918282823395"
            className="inline-flex h-10 items-center justify-center rounded-md border border-clay/50 bg-sand px-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-clay hover:text-bronze hover:shadow-sm"
          >
            Call sales
          </a>
          <a
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-ink px-4 text-sm font-semibold text-[#ffffff] ring-1 ring-bronze/30 transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-[#ffffff] hover:shadow-sm"
          >
            Book visit
          </a>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Open navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-md border border-hairline bg-sand text-ink transition hover:border-clay/70 hover:text-bronze md:hidden"
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
            className="border-t border-hairline bg-sand px-4 py-3 shadow-sm md:hidden"
          >
            <div className="grid gap-2">
              <button
                type="button"
                aria-expanded={mobileProjectsOpen}
                onClick={() => setMobileProjectsOpen((open) => !open)}
                className="group flex items-center justify-between rounded-lg border border-hairline bg-sand px-3 py-3 text-sm font-semibold text-ink transition hover:border-clay/70 hover:bg-clay/20 hover:text-bronze"
              >
                Projects
                <ChevronDown
                  className={`h-4 w-4 text-ink-soft transition-transform duration-200 ${
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
                  className="group flex items-center justify-between rounded-lg border border-hairline bg-sand px-3 py-3 text-sm font-semibold text-ink transition hover:border-clay/70 hover:bg-clay/20 hover:text-bronze"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-bronze" />
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
          ? "border-clay/50 bg-clay/20 text-bronze hover:border-clay/70 hover:bg-sand-deep"
          : "border-hairline bg-sand text-ink-soft hover:border-clay/50 hover:bg-clay/20 hover:text-bronze"
      }`}
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5 text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-bronze" />
    </a>
  );
}
