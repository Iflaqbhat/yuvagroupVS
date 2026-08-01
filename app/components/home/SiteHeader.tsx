"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Construction,
  Menu
} from "lucide-react";
import { useState } from "react";
import { navPreviews } from "./data";

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
                whileHover={{ y: -0.5 }}
                transition={{ type: "spring", stiffness: 520, damping: 38 }}
                className={`group relative isolate flex h-10 items-center gap-2 overflow-hidden rounded-lg px-3.5 transition-colors ${
                  isActive ? "text-[#fff8ed]" : "hover:bg-sky-50 hover:text-zinc-950"
                }`}
                href={item.href}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-lg bg-zinc-950 shadow-[0_12px_28px_rgba(2,8,23,0.16)] ring-1 ring-sky-400/30"
                    transition={{ type: "spring", stiffness: 520, damping: 40 }}
                  />
                ) : null}
                <span
                  className={`relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-md transition ${
                    isActive
                      ? "bg-sky-500 text-[#fff8ed] shadow-sm"
                      : "bg-zinc-100 text-zinc-500 group-hover:bg-sky-100 group-hover:text-sky-700"
                  }`}
                >
                  <ItemIcon className="h-3.5 w-3.5" />
                </span>
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute inset-x-4 bottom-1 z-10 h-0.5 origin-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-600 transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
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
            initial={{ opacity: 0, y: -10, scale: 0.99, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, scale: 0.99, filter: "blur(5px)" }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-auto absolute inset-x-0 top-[72px] hidden justify-center px-4 pt-3 md:flex"
          >
            <div className="relative w-full max-w-[900px]">
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-zinc-200 bg-[#fff8ed]" />
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-[#fff8ed]/95 p-2 shadow-[0_28px_90px_rgba(2,8,23,0.16)] ring-1 ring-sky-100/80 backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-[#f5efe4]">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(14,165,233,0.055)_1px,transparent_1px),linear-gradient(rgba(14,165,233,0.055)_1px,transparent_1px)] bg-[size:30px_30px]" />
                  <div className="relative h-1 overflow-hidden bg-sky-100">
                    <motion.span
                      key={activePreview.href}
                      initial={{ x: "-44%" }}
                      animate={{ x: "0%" }}
                      transition={{ duration: 0.34, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-blue-700 via-cyan-400 to-sky-700"
                    />
                  </div>

                  <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="p-5 lg:p-6">
                      <motion.div
                        key={`${activePreview.href}-copy`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-zinc-950 text-[#fff8ed] shadow-sm ring-1 ring-sky-400/30">
                              <PreviewIcon className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                                {activePreview.eyebrow}
                              </span>
                              <span className="mt-1 block text-sm font-semibold text-zinc-950">
                                {activePreview.stat}
                              </span>
                            </span>
                          </div>
                          <BadgeCheck className="h-5 w-5 text-sky-600" />
                        </div>

                        <h3 className="mt-5 max-w-lg text-2xl font-semibold leading-tight text-zinc-950">
                          {activePreview.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
                          {activePreview.copy}
                        </p>
                      </motion.div>

                      <div className="mt-5 grid gap-2 sm:grid-cols-3">
                        {activePreview.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="rounded-lg border border-zinc-200 bg-[#fff8ed] px-3 py-3 text-xs font-semibold leading-5 text-zinc-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
                          >
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <a
                        href={activePreview.href}
                        className="group mt-5 inline-flex h-10 items-center gap-2 rounded-md bg-zinc-950 px-4 text-sm font-semibold text-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600 hover:text-[#fff8ed]"
                      >
                        View {activePreview.label.toLowerCase()}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </a>
                    </div>

                    <div className="relative min-h-60 overflow-hidden border-t border-zinc-200 bg-zinc-200 lg:border-l lg:border-t-0">
                      <motion.img
                        key={activePreview.image}
                        src={activePreview.image}
                        alt={`${activePreview.label} section preview`}
                        initial={{ opacity: 0.72, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.36, ease: "easeOut" }}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-transparent to-transparent" />
                      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[#fff8ed]/15 bg-[#fff8ed]/95 p-3 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold text-zinc-950">
                            {activePreview.label}
                          </span>
                          <ArrowRight className="h-4 w-4 text-sky-600" />
                        </div>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-200">
                          <motion.div
                            key={`${activePreview.href}-bar`}
                            initial={{ width: "18%" }}
                            animate={{ width: "82%" }}
                            transition={{ duration: 0.38, ease: "easeOut" }}
                            className="h-full bg-sky-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
