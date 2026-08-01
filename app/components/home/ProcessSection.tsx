"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail
} from "lucide-react";
import { useState } from "react";
import { processSteps } from "./data";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);
  const selectedStep = processSteps[activeStep];
  const SelectedStepIcon = selectedStep.icon;

  return (
    <section id="process" className="overflow-hidden border-y border-hairline bg-sand py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Buying Flow"
            title="From first inquiry to final handover, every step gets its own signal."
            copy="A clean path for home buyers: shortlist the right project, walk the site, review plans, and move toward possession with fewer blind spots."
            align="left"
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-white hover:shadow-sm"
            >
              Start inquiry
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:enquiry@yuvastructures.com"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white ring-1 ring-bronze/30 transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-white hover:shadow-sm"
            >
              Email sales
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <motion.figure
            key={selectedStep.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group mt-8 overflow-hidden rounded-lg border border-hairline bg-ink shadow-soft-panel"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedStep.image}
                alt={`${selectedStep.title} stage preview`}
                className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4">
                <div className="inline-flex items-center gap-2 rounded-lg bg-clay px-3 py-2 text-xs font-semibold text-ink">
                  <SelectedStepIcon className="h-4 w-4" />
                  {selectedStep.title}
                </div>
                <p className="mt-3 max-w-md text-sm leading-6 text-sand">
                  {selectedStep.detail}
                </p>
              </figcaption>
            </div>
          </motion.figure>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2">
          {processSteps.map((item, index) => (
            <motion.article
              key={item.title}
              onClick={() => setActiveStep(index)}
              onFocus={() => setActiveStep(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveStep(index);
                }
              }}
              onMouseEnter={() => setActiveStep(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              role="button"
              tabIndex={0}
              className={`group flex min-h-[15rem] flex-col rounded-lg border p-5 transition duration-200 hover:border-clay/70 hover:bg-sand hover:shadow-soft-panel ${
                activeStep === index
                  ? "border-clay/70 bg-sand shadow-soft-panel"
                  : "border-hairline bg-sand"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-sand text-ink shadow-sm transition group-hover:bg-bronze group-hover:text-[#ffffff]">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-2xl font-semibold text-ink-soft">{item.metric}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
