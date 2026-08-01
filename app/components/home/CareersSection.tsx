"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Users
} from "lucide-react";
import { roles } from "./data";

export function CareersSection() {
  const doubledRoles = [...roles, ...roles];

  return (
    <section id="careers" className="border-y border-zinc-200 bg-[#ffffff] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hiring-border rounded-lg bg-[#ffffff] p-[1px] shadow-soft-panel">
          <div className="grid overflow-hidden rounded-lg bg-zinc-950 text-[#ffffff] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#ffffff]/15 bg-[#ffffff]/10 px-3 py-2 text-sm font-semibold">
                <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
                Careers
              </div>
              <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                Build the team that builds the city.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-300 sm:text-base">
                Construction moves on reliable people. This section gives site,
                sales, CRM, and operations teams a clean place to find their next role.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-sky-600 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-sm"
              >
                Explore open roles
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative min-h-[320px] overflow-hidden border-t border-[#ffffff]/10 bg-zinc-900 lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />
              <div className="relative flex h-full flex-col justify-center gap-5 py-8">
                {[0, 1, 2].map((row) => (
                  <div key={row} className="flex overflow-hidden">
                    <motion.div
                      className="marquee-track flex min-w-max gap-3"
                      style={{ animationDirection: row === 1 ? "reverse" : "normal" }}
                    >
                      {doubledRoles.map((role, index) => (
                        <span
                          key={`${role}-${index}-${row}`}
                          className="inline-flex h-12 items-center gap-2 rounded-lg border border-[#ffffff]/10 bg-[#ffffff] px-4 text-sm font-semibold text-zinc-950 shadow-xl"
                        >
                          <Users className="h-4 w-4 text-sky-600" />
                          {role}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
