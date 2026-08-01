"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Home,
  MapPin
} from "lucide-react";
import Link from "next/link";
import type { Project } from "./data";

const MotionLink = motion(Link);

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <MotionLink
      href={`/projects/${project.slug}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 320, damping: 26, delay: index * 0.05 }}
      className="group relative isolate flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-[#ffffff] shadow-sm outline-none transition duration-200 hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_16px_40px_rgba(2,132,199,0.12)]"
    >
      <div className="relative h-52 shrink-0 overflow-hidden bg-zinc-200">
        <img
          src={project.image}
          alt={`${project.name} project`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-zinc-950/5 to-transparent" />
        <span className="absolute left-3 top-3 rounded-md bg-[#ffffff] px-2 py-1 text-xs font-semibold text-zinc-900 shadow-sm">
          {project.stage}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-zinc-950">{project.name}</h3>
            <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-zinc-600">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-sky-600" />
              {project.location}
            </p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-zinc-100 text-zinc-500">
            <Home className="h-5 w-5" />
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-zinc-600">{project.headline}</p>

        <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-lg border border-zinc-200 bg-[#ffffff]/80 p-3">
            <span className="block text-zinc-500">Homes</span>
            <span className="mt-1 block font-semibold text-zinc-950">
              {project.homes}
            </span>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-[#ffffff]/80 p-3">
            <span className="block text-zinc-500">Booking</span>
            <span className="mt-1 block font-semibold text-zinc-950">
              {project.price}
            </span>
          </div>
        </div>

        <div className="mt-5 flex flex-1 items-end">
          <span className="flex items-center gap-2 text-sm font-semibold text-sky-700 transition group-hover:gap-2.5 group-hover:text-sky-600">
            View details
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
