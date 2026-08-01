"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Home,
  MapPin
} from "lucide-react";
import type { Project } from "./data";

type ProjectCardProps = {
  project: Project;
  index: number;
  active: boolean;
  onActivate: () => void;
};

export function ProjectCard({
  project,
  index,
  active,
  onActivate
}: ProjectCardProps) {
  return (
    <motion.article
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onActivate();
        }
      }}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.015, rotateX: 1.4 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 320, damping: 26, delay: index * 0.05 }}
      role="button"
      tabIndex={0}
      className={`group relative isolate overflow-hidden rounded-xl border bg-[#fff8ed] text-left shadow-sm outline-none transition-colors duration-200 ${
        active
          ? "border-zinc-950 shadow-[0_24px_70px_rgba(2,132,199,0.16)]"
          : "border-zinc-200 hover:border-sky-300 hover:shadow-[0_20px_50px_rgba(2,132,199,0.13)]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(14,165,233,0.14),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {active ? (
        <motion.span
          layoutId="project-active-frame"
          className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-sky-500/80"
          transition={{ type: "spring", stiffness: 360, damping: 32 }}
        />
      ) : null}

      <div className="relative grid min-h-[13.5rem] sm:grid-cols-[12.5rem_1fr]">
        <div className="relative min-h-52 overflow-hidden bg-zinc-200 sm:min-h-full">
          <img
            src={project.image}
            alt={`${project.name} project`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-zinc-950/5 to-transparent opacity-80" />
          <span className="absolute left-3 top-3 rounded-md bg-[#fff8ed] px-2 py-1 text-xs font-semibold text-zinc-900 shadow-sm">
            {project.stage}
          </span>
          <span className="absolute bottom-3 left-3 rounded-md bg-zinc-950/90 px-2 py-1 text-xs font-semibold text-sky-200 shadow-sm">
            {project.progress}% built
          </span>
        </div>

        <div className="relative flex flex-col p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-zinc-950">{project.name}</h3>
              <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-zinc-600">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-sky-600" />
                {project.location}
              </p>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-zinc-100 text-zinc-500 transition group-hover:bg-sky-600 group-hover:text-[#fff8ed]">
              <Home className="h-5 w-5" />
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-zinc-600">{project.headline}</p>

          <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-lg border border-zinc-200 bg-[#fff8ed]/80 p-3 transition group-hover:border-sky-200">
              <span className="block text-zinc-500">Homes</span>
              <span className="mt-1 block font-semibold text-zinc-950">
                {project.homes}
              </span>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-[#fff8ed]/80 p-3 transition group-hover:border-sky-200">
              <span className="block text-zinc-500">Booking</span>
              <span className="mt-1 block font-semibold text-zinc-950">
                {project.price}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${project.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`h-full ${project.color}`}
              />
            </div>
            <ArrowRight className="h-4 w-4 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-sky-600" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
