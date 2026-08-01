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
    <section id="featured-projects" className="border-y border-hairline bg-sand py-16 sm:py-20">
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
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white ring-1 ring-bronze/30 transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-white hover:shadow-sm"
          >
            Explore all projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={`/projects/${project.slug}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 320, damping: 28, delay: index * 0.05 }}
              className="group relative isolate h-[27rem] overflow-hidden rounded-xl border border-hairline bg-ink shadow-sm transition hover:border-clay hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)]"
            >
              <img
                src={project.image}
                alt={`${project.name} featured project`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                <span className="rounded-md bg-sand px-2 py-1 text-xs font-semibold text-ink shadow-sm">
                  {project.stage}
                </span>
              </div>

              <div className="absolute inset-x-4 bottom-4 translate-y-[calc(100%-4.5rem)] rounded-lg border border-hairline bg-sand p-4 text-ink shadow-xl transition duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate text-lg font-semibold text-ink">{project.name}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-bronze transition group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs leading-4 text-ink-soft">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-bronze" />
                  {project.location}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink-soft">{project.headline}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-md border border-hairline bg-sand p-3">
                    <span className="block text-xs font-medium text-ink-soft">Homes</span>
                    <span className="mt-1 block font-semibold text-ink">
                      {project.homes}
                    </span>
                  </div>
                  <div className="rounded-md border border-hairline bg-sand p-3">
                    <span className="block text-xs font-medium text-ink-soft">Booking</span>
                    <span className="mt-1 block font-semibold text-ink">
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
