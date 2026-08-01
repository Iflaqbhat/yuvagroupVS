"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Menu
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Amenities", href: "/services#amenities" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-md px-3 py-2 text-sm font-semibold text-zinc-600 transition-colors duration-200 hover:text-zinc-950"
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
