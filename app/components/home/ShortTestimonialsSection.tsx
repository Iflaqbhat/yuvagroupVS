"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck
} from "lucide-react";
import { buyerFeedback } from "./data";
import { SectionHeading } from "./SectionHeading";

export function ShortTestimonialsSection() {
  return (
    <section className="bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Buyer Confidence"
            title="Short signals from buyers."
            copy="Keep the homepage lightweight. More detailed buyer stories can live away from the main page."
            align="left"
          />
          <a
            href="/about"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white ring-1 ring-bronze/30 transition hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-white hover:shadow-sm"
          >
            About Yuva
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {buyerFeedback.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-lg border border-hairline bg-sand p-5 shadow-sm transition hover:border-clay/70 hover:shadow-soft-panel"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-[#ffffff] transition group-hover:bg-bronze">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold text-ink-soft">
                  — {item.name}, {item.project}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{item.quote}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
