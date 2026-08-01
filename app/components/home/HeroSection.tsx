"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays
} from "lucide-react";
import { fadeUp } from "./animation";
import { heroVideo } from "./data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950 text-[#ffffff]">
      <video
        aria-label="Construction team working on site"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="auto"
        src={heroVideo}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.94)_0%,rgba(9,9,11,0.72)_48%,rgba(12,74,110,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(14,165,233,0.22),transparent_34%)]" />

      <div
        className="relative mx-auto flex max-w-7xl flex-col px-4 py-12 sm:px-6 lg:px-8"
        style={{ minHeight: "min(760px, calc(100svh - 72px))" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
          className="flex w-full max-w-3xl flex-1 flex-col items-start justify-center text-left"
        >
          <motion.div variants={fadeUp}>
            <h1 className="max-w-[22rem] break-words text-4xl font-semibold leading-[1.08] text-[#ffffff] sm:max-w-5xl sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              Building Bengaluru homes with{" "}
              <span className="text-sky-300 drop-shadow-[0_0_22px_rgba(14,165,233,0.45)]">
                clarity
              </span>{" "}
              from foundation to handover.
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 w-full max-w-[22rem] break-words text-base leading-7 text-zinc-200 sm:max-w-2xl sm:text-lg"
          >
            Residential projects planned for working families, first-home buyers,
            and investors who want visible progress, practical amenities, and a
            confident next step.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-sky-400 px-5 text-sm font-semibold text-zinc-950 shadow-lg shadow-sky-950/30 ring-1 ring-cyan-300/50 transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:ring-cyan-200"
            >
              Schedule a site visit
              <CalendarDays className="h-4 w-4" />
            </a>
            <a
              href="/projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-sky-300/50 bg-sky-500/10 px-5 text-sm font-semibold text-[#ffffff] shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-500/20"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
