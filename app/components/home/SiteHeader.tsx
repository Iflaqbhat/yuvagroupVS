"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Construction,
  Menu
} from "lucide-react";
import { useState } from "react";
import { navPreviews } from "./data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } }
};

export function SiteHeader() {
  const [activeNav, setActiveNav] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activePreview = activeNav === null ? null : navPreviews[activeNav];
  const PreviewIcon = activePreview?.icon ?? Construction;

  return (
    <header
      onMouseLeave={() => setActiveNav(null)}
      className="sticky top-0 z-50 border-b border-zinc-200 bg-[#fff8ed]/92 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-950 text-[#fff8ed] shadow-sm ring-1 ring-sky-400/30 transition group-hover:-translate-y-0.5 group-hover:bg-sky-700 group-hover:ring-sky-300">
            <Building2 className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold">
              Yuva <span className="text-sky-700">Group</span>
            </span>
            <span className="block text-xs text-zinc-500">Bengaluru Builders</span>
          </span>
        </a>

        <div className="relative hidden items-center gap-1 overflow-hidden rounded-xl border border-zinc-200 bg-[#fff8ed]/85 p-1 text-sm font-semibold text-zinc-600 shadow-sm ring-1 ring-[#fff8ed]/80 md:flex">
          <span className="pointer-events-none absolute inset-x-3 top-1 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          {navPreviews.map((item, index) => {
            const ItemIcon = item.icon;
            const isActive = activeNav === index;

            return (
              <motion.a
                key={item.href}
                onClick={() => setActiveNav(index)}
                onFocus={() => setActiveNav(index)}
                onMouseEnter={() => setActiveNav(index)}
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 520, damping: 38 }}
                className={`group relative isolate flex h-10 items-center gap-2 rounded-lg px-3.5 transition-colors duration-200 ${
                  isActive
                    ? "text-[#fff8ed]"
                    : "text-zinc-600 hover:bg-sky-700 hover:text-[#fff8ed]"
                }`}
                href={item.href}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-500 shadow-[0_10px_26px_rgba(2,132,199,0.3)] ring-1 ring-sky-400/40"
                    transition={{ type: "spring", stiffness: 520, damping: 40 }}
                  />
                ) : null}
                <span
                  className={`relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-md transition-colors duration-200 ${
                    isActive
                      ? "bg-[#fff8ed]/20 text-[#fff8ed]"
                      : "bg-zinc-100 text-zinc-500 group-hover:bg-[#fff8ed]/20 group-hover:text-[#fff8ed]"
                  }`}
                >
                  <ItemIcon className="h-3.5 w-3.5" />
                </span>
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="tel:+918282823395"
            className="inline-flex h-10 items-center justify-center rounded-md border border-sky-200 bg-[#fff8ed] px-4 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-700 hover:shadow-sm"
          >
            Call sales
          </a>
          <a
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-semibold text-[#fff8ed] ring-1 ring-sky-400/30 transition hover:-translate-y-0.5 hover:bg-sky-700 hover:text-[#fff8ed] hover:shadow-sm"
          >
            Book visit
          </a>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Open navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-md border border-zinc-200 bg-[#fff8ed] text-zinc-800 transition hover:border-sky-300 hover:text-sky-700 md:hidden"
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
            className="border-t border-zinc-200 bg-[#fff8ed] px-4 py-3 shadow-sm md:hidden"
          >
            <div className="grid gap-2">
              {navPreviews.map((item) => {
                const ItemIcon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between rounded-lg border border-zinc-200 bg-[#fbf3e6] px-3 py-3 text-sm font-semibold text-zinc-800 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                  >
                    <span className="flex items-center gap-2">
                      <span className="grid h-7 w-7 place-items-center rounded-md bg-[#fff8ed] text-zinc-500 shadow-sm transition group-hover:bg-sky-600 group-hover:text-[#fff8ed]">
                        <ItemIcon className="h-4 w-4" />
                      </span>
                      {item.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-sky-600" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activePreview ? (
          <motion.div
            key="nav-dropdown"
            initial={{ opacity: 0, y: -16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.99 }}
            transition={{ type: "spring", stiffness: 460, damping: 36 }}
            className="pointer-events-auto absolute inset-x-0 top-[72px] mx-auto hidden w-[900px] max-w-[calc(100vw-2rem)] pt-3 md:block"
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ delay: 0.03, duration: 0.16, ease: "easeOut" }}
              className="relative w-full"
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-zinc-200 bg-[#fff8ed]" />
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-[#fff8ed]/95 shadow-[0_32px_90px_rgba(2,8,23,0.18)] ring-1 ring-sky-100/90 backdrop-blur-xl">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-6 lg:p-7">
                    <motion.div
                      key={activePreview.href}
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.055 } }
                      }}
                    >
                      <motion.div
                        variants={fadeUp}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sky-600 to-cyan-500 text-[#fff8ed] shadow-md shadow-sky-600/25">
                            <PreviewIcon className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                              {activePreview.eyebrow}
                            </span>
                            <span className="mt-1 block text-sm font-semibold text-zinc-950">
                              {activePreview.stat}
                            </span>
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-700">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          Live
                        </span>
                      </motion.div>

                      <motion.h3
                        variants={fadeUp}
                        className="mt-5 max-w-lg text-2xl font-semibold leading-tight text-zinc-950 lg:text-[1.7rem]"
                      >
                        {activePreview.title}
                      </motion.h3>
                      <motion.p
                        variants={fadeUp}
                        className="mt-3 max-w-xl text-sm leading-6 text-zinc-600"
                      >
                        {activePreview.copy}
                      </motion.p>

                      <motion.div
                        variants={fadeUp}
                        className="mt-5 flex flex-wrap gap-2"
                      >
                        {activePreview.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-[#fff8ed] px-3 py-1.5 text-xs font-semibold text-sky-800 shadow-sm"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                            {highlight}
                          </span>
                        ))}
                      </motion.div>

                      <motion.div variants={fadeUp} className="mt-6">
                        <a
                          href={activePreview.href}
                          className="group inline-flex h-10 items-center gap-2 rounded-md bg-zinc-950 px-4 text-sm font-semibold text-[#fff8ed] ring-1 ring-sky-400/30 transition hover:-translate-y-0.5 hover:bg-sky-700 hover:text-[#fff8ed] hover:shadow-sm"
                        >
                          View {activePreview.label.toLowerCase()}
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="relative min-h-64 overflow-hidden border-t border-zinc-200 bg-zinc-200 lg:min-h-80 lg:border-l lg:border-t-0">
                    <motion.img
                      key={`${activePreview.href}-img`}
                      src={activePreview.image}
                      alt={`${activePreview.label} section preview`}
                      initial={{ opacity: 0.8, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
