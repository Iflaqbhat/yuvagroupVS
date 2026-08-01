"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { buyerFeedback } from "./data";
import { SectionHeading } from "./SectionHeading";

export function BuyerFeedbackSection() {
  return (
    <section className="border-y border-zinc-200 bg-[#ffffff] py-20 sm:py-24">
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
              className="group overflow-hidden rounded-lg border border-zinc-200 bg-[#ffffff] shadow-sm transition duration-200 hover:border-sky-300 hover:bg-[#ffffff] hover:shadow-soft-panel"
            >
              <div className="relative h-48 overflow-hidden bg-zinc-200">
                <img
                  src={item.image}
                  alt={`${item.project} buyer confidence`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-md bg-[#ffffff] px-3 py-2 text-xs font-semibold text-zinc-950 shadow-lg">
                  {item.name}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
                  <BadgeCheck className="h-5 w-5 text-sky-600 transition group-hover:scale-110" />
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{item.quote}</p>
                <p className="mt-4 text-xs font-semibold text-zinc-500">
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
