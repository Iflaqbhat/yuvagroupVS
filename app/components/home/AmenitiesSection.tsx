"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  amenities,
  amenityDetails
} from "./data";
import { SectionHeading } from "./SectionHeading";

export function AmenitiesSection() {
  const [activeAmenity, setActiveAmenity] = useState(0);
  const selectedAmenity = amenityDetails[activeAmenity % amenityDetails.length];

  return (
    <section id="amenities" className="bg-[#f5efe4] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Amenities"
          title="Lifestyle features that make the address feel complete."
          copy="Practical community spaces, service infrastructure, and security features are organized around daily living."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.label}
                onClick={() => setActiveAmenity(index)}
                onFocus={() => setActiveAmenity(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveAmenity(index);
                  }
                }}
                onMouseEnter={() => setActiveAmenity(index)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                role="button"
                tabIndex={0}
                className={`group rounded-lg border bg-[#fff8ed] p-4 shadow-sm transition duration-200 hover:border-sky-300 hover:shadow-soft-panel ${
                  activeAmenity === index ? "border-sky-300 shadow-soft-panel" : "border-zinc-200"
                }`}
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-zinc-950 text-[#fff8ed] transition group-hover:bg-sky-600 group-hover:text-[#fff8ed]">
                  <amenity.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-semibold text-zinc-950">{amenity.label}</p>
                <p className="mt-2 text-xs leading-5 text-zinc-500">
                  Planned as a daily-use feature for comfort, movement, and long-term maintenance.
                </p>
              </motion.div>
            ))}
          </div>

          <motion.figure
            key={`${selectedAmenity.title}-${activeAmenity}`}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="group overflow-hidden rounded-lg border border-zinc-200 bg-[#fff8ed] shadow-soft-panel"
          >
            <div className="relative h-80 overflow-hidden bg-zinc-200">
              <img
                src={selectedAmenity.image}
                alt={`${selectedAmenity.title} amenity preview`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/5 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-sm font-semibold text-sky-200">
                  {amenities[activeAmenity].label}
                </p>
                <h3 className="mt-1 text-3xl font-semibold text-[#fff8ed]">
                  {selectedAmenity.title}
                </h3>
              </div>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-2">
              <p className="text-sm leading-6 text-zinc-600 sm:col-span-2">
                {selectedAmenity.copy}
              </p>
              {["Resident-first planning", "Built for repeated use"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-zinc-200 bg-[#f5efe4] p-3 text-sm font-semibold text-zinc-800 transition hover:border-sky-300 hover:bg-[#fff8ed]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
