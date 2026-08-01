"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin
} from "lucide-react";
import { projects } from "./data";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="border-y border-zinc-200 bg-[#fff8ed] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured Projects"
            title="A quick look at Yuva addresses."
            copy="Three featured projects stay on the homepage. Full listings, stage details, and milestones are on the projects page."
            align="left"
          />
          <a
            href="/projects"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-sky-200 bg-[#fff8ed] px-5 text-sm font-semibold text-sky-700 transition hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-50 hover:shadow-sm"
          >
            Explore all projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-4 [perspective:1200px] lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href="/projects"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                rotateX: 3,
                rotateY: index === 0 ? -4 : index === 2 ? 4 : 0
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 320, damping: 28, delay: index * 0.05 }}
              className="group relative isolate h-[27rem] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 shadow-sm outline-none transition [transform-style:preserve-3d] hover:border-sky-300 hover:shadow-[0_24px_70px_rgba(2,132,199,0.16)]"
            >
              <img
                src={project.image}
                alt={`${project.name} featured project`}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                <span className="rounded-md bg-[#fff8ed] px-2 py-1 text-xs font-semibold text-zinc-950 shadow-sm">
                  {project.stage}
                </span>
                <span className="rounded-md bg-zinc-950/85 px-2 py-1 text-xs font-semibold text-sky-200 shadow-sm">
                  {project.progress}% built
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-2xl font-semibold text-[#fff8ed]">{project.name}</h3>
                <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-zinc-100">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                  {project.location}
                </p>
              </div>

              <div className="absolute inset-x-4 bottom-4 translate-y-[calc(100%-4.25rem)] rounded-lg border border-[#fff8ed]/15 bg-[#fff8ed]/95 p-4 text-zinc-950 shadow-xl backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-zinc-950">{project.name}</span>
                  <ArrowRight className="h-4 w-4 text-sky-600 transition group-hover:translate-x-0.5" />
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{project.headline}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-md border border-zinc-200 bg-[#f5efe4] p-3">
                    <span className="block text-xs font-medium text-zinc-500">Homes</span>
                    <span className="mt-1 block font-semibold text-zinc-950">
                      {project.homes}
                    </span>
                  </div>
                  <div className="rounded-md border border-zinc-200 bg-[#f5efe4] p-3">
                    <span className="block text-xs font-medium text-zinc-500">Booking</span>
                    <span className="mt-1 block font-semibold text-zinc-950">
                      {project.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
