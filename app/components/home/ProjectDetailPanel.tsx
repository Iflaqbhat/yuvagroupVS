"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Construction,
  MapPin
} from "lucide-react";
import {
  projectSignals,
  type Project
} from "./data";

export function ProjectDetailPanel({ project }: { project: Project }) {
  return (
    <motion.aside
      key={project.name}
      initial={{ opacity: 0, x: 28, rotateY: -4 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.36, ease: "easeOut" }}
      className="relative isolate overflow-hidden rounded-xl border border-sky-200/80 bg-zinc-950 text-[#fff8ed] shadow-[0_30px_90px_rgba(2,8,23,0.28)] ring-1 ring-sky-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-cyan-400 to-sky-700" />

      <div className="relative">
        <div className="relative h-[22rem] overflow-hidden bg-zinc-800">
          <motion.img
            key={project.image}
            src={project.image}
            alt={`${project.name} construction detail`}
            initial={{ opacity: 0.75, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent" />
          <div className="absolute inset-x-5 bottom-5">
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#fff8ed]/15 bg-[#fff8ed]/10 px-3 py-2 text-sm font-semibold backdrop-blur-md">
              <BadgeCheck className="h-4 w-4 text-cyan-300" />
              Selected Project
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-[#fff8ed]">{project.name}</h3>
            <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-zinc-100">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
              {project.location}
            </p>
          </div>
        </div>

        <div className="relative p-5 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Stage", project.stage],
              ["Homes", project.homes],
              ["Progress", `${project.progress}%`]
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-[#fff8ed]/10 bg-[#fff8ed]/10 p-4 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-[#fff8ed]/15"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300">
                  {label}
                </span>
                <span className="mt-2 block text-base font-semibold text-[#fff8ed]">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold text-zinc-200">Site milestone</span>
              <span className="font-semibold text-[#fff8ed]">{project.progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-md bg-[#fff8ed]/15">
              <motion.div
                key={project.progress}
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`h-full ${project.color}`}
              />
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {projectSignals.map((signal) => (
              <div
                key={signal.title}
                className="group rounded-lg border border-[#fff8ed]/10 bg-[#fff8ed]/5 p-4 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-[#fff8ed]/10"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#fff8ed] text-zinc-950 transition group-hover:bg-sky-500 group-hover:text-[#fff8ed]">
                  <Construction className="h-4 w-4" />
                </span>
                <h4 className="mt-4 text-sm font-semibold text-[#fff8ed]">
                  {signal.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{signal.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
