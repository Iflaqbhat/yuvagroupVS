"use client";

import { motion, useReducedMotion } from "framer-motion";
import { propertyHighlights } from "./data";
import { SectionHeading } from "./SectionHeading";

export function PropertyHighlightsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-zinc-200 bg-[#ffffff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Yuva Group"
          title="A construction partner for Bengaluru home buyers."
          copy="A quick, visual overview of what matters first: completed work, location confidence, site visits, and hands-on buying support."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {propertyHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 280, damping: 26, delay: index * 0.04 }}
              className="group overflow-hidden rounded-xl border border-zinc-200 bg-[#ffffff] shadow-sm transition hover:border-sky-300 hover:shadow-soft-panel"
            >
              <div className="relative aspect-[1.18] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} real estate preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/78 via-zinc-950/18 to-transparent" />
                <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-lg bg-[#ffffff] text-zinc-950 shadow-lg ring-1 ring-sky-100">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="absolute bottom-4 left-4 rounded-lg border border-[#ffffff]/15 bg-[#ffffff]/92 px-3 py-2 text-xs font-semibold text-sky-800 shadow-lg backdrop-blur-md">
                  {item.metric}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{item.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
