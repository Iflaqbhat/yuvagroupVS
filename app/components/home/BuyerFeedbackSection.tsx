"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { buyerFeedback } from "./data";
import { SectionHeading } from "./SectionHeading";

export function BuyerFeedbackSection() {
  return (
    <section className="border-y border-hairline bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Buyer Confidence"
          title="A good construction website should make trust visible."
          copy="Yuva Group balances project imagery, site progress, and practical buyer feedback so every visit starts with more confidence."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {buyerFeedback.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-lg border border-hairline bg-sand shadow-sm transition duration-200 hover:border-clay/70 hover:bg-sand hover:shadow-soft-panel"
            >
              <div className="relative h-48 overflow-hidden bg-sand-deep">
                <img
                  src={item.image}
                  alt={`${item.project} buyer confidence`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-md bg-sand px-3 py-2 text-xs font-semibold text-ink shadow-lg">
                  {item.name}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <BadgeCheck className="h-5 w-5 text-bronze transition group-hover:scale-110" />
                </div>
                <p className="mt-4 text-sm leading-6 text-ink-soft">{item.quote}</p>
                <p className="mt-4 text-xs font-semibold text-ink-soft">
                  — {item.name}, {item.project}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
