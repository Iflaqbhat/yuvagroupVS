"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center"
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-xl"}
    >
      <p className="label-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-ink-soft">{copy}</p>
    </motion.div>
  );
}
