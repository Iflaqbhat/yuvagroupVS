"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Construction
} from "lucide-react";
import {
  projectImages,
  projects,
  type Project
} from "./data";

type ProjectConsoleProps = {
  selectedProject: Project;
  activeProject: number;
  setActiveProject: (index: number) => void;
};

export function ProjectConsole({
  selectedProject,
  activeProject,
  setActiveProject
}: ProjectConsoleProps) {
  return (
    <div className="metal-panel overflow-hidden rounded-lg border border-hairline shadow-soft-panel">
      <div className="flex flex-col gap-4 border-b border-hairline bg-sand/80 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Construction className="h-4 w-4 text-bronze" />
            Site progress board
          </div>
          <p className="mt-1 text-sm text-ink-soft">
            Milestones, visit slots, and handover readiness in one view.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1 rounded-lg border border-hairline bg-sand p-1">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              onClick={() => setActiveProject(index)}
              className={`h-9 rounded-md px-2 text-xs font-semibold transition ${
                activeProject === index
                  ? "bg-ink text-[#ffffff] shadow-sm"
                  : "text-ink-soft hover:bg-sand hover:text-ink"
              }`}
            >
              {project.name.replace("Yuva ", "")}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="border-b border-hairline p-4 lg:border-b-0 lg:border-r">
          <div className="relative h-64 overflow-hidden rounded-lg bg-sand-deep sm:h-72">
            <motion.img
              key={selectedProject.image}
              src={selectedProject.image}
              alt={`${selectedProject.name} residential architecture`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-lg bg-sand/95 p-3 shadow-lg">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {selectedProject.name}
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">
                    {selectedProject.location}
                  </p>
                </div>
                <span className="rounded-md bg-ink px-2 py-1 text-xs font-semibold text-[#ffffff]">
                  {selectedProject.stage}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Homes", selectedProject.homes],
              ["Booking", selectedProject.price]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-hairline bg-sand p-3">
                <p className="text-xs font-medium text-ink-soft">{label}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {[
              ["Foundation reviewed", "Site teams track structure, services, and safety checks"],
              ["Visit slot confirmed", "Buyers get weekday and weekend walkthrough options"],
              ["Handover prepared", "Loan, floor plan, documents, and possession stay aligned"]
            ].map(([title, copy], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-3 border-b border-hairline pb-3 last:border-b-0 last:pb-0"
              >
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-ink text-[#ffffff]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-ink-soft">
                    {copy}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ImageRail() {
  return (
    <div className="grid min-h-[420px] gap-4 sm:grid-cols-2 lg:grid-cols-1">
      <motion.figure
        whileHover={{ y: -4 }}
        className="group relative h-52 overflow-hidden rounded-lg border border-hairline bg-sand-deep shadow-soft-panel transition hover:border-clay/70 sm:h-auto"
      >
        <img
          src={projectImages[3]}
          alt="Construction cranes and structure"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <figcaption className="absolute inset-x-3 bottom-3 rounded-lg bg-sand/95 p-3 text-sm font-semibold text-ink shadow-lg">
          Construction tracked from foundation to handover
        </figcaption>
      </motion.figure>

      <motion.figure
        whileHover={{ y: -4 }}
        className="group relative h-52 overflow-hidden rounded-lg border border-hairline bg-sand-deep shadow-soft-panel transition hover:border-clay/70 sm:h-auto"
      >
        <img
          src={projectImages[4]}
          alt="Construction planning table"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <figcaption className="absolute inset-x-3 bottom-3 rounded-lg bg-sand/95 p-3 text-sm font-semibold text-ink shadow-lg">
          Transparent planning for buyers and investors
        </figcaption>
      </motion.figure>
    </div>
  );
}
