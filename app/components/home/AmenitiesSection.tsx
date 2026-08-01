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
    <section id="amenities" className="bg-sand py-20 sm:py-24">
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
                className={`group rounded-lg border bg-sand p-4 shadow-sm transition duration-200 hover:border-clay/70 hover:shadow-soft-panel ${
                  activeAmenity === index ? "border-clay/70 shadow-soft-panel" : "border-hairline"
                }`}
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-[#ffffff] transition group-hover:bg-bronze group-hover:text-[#ffffff]">
                  <amenity.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-semibold text-ink">{amenity.label}</p>
                <p className="mt-2 text-xs leading-5 text-ink-soft">
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
            className="group overflow-hidden rounded-lg border border-hairline bg-sand shadow-soft-panel"
          >
            <div className="relative h-80 overflow-hidden bg-sand-deep">
              <img
                src={selectedAmenity.image}
                alt={`${selectedAmenity.title} amenity preview`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-sm font-semibold text-sand">
                  {amenities[activeAmenity].label}
                </p>
                <h3 className="mt-1 text-3xl font-semibold text-[#ffffff]">
                  {selectedAmenity.title}
                </h3>
              </div>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-2">
              <p className="text-sm leading-6 text-ink-soft sm:col-span-2">
                {selectedAmenity.copy}
              </p>
              {["Resident-first planning", "Built for repeated use"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-hairline bg-sand p-3 text-sm font-semibold text-ink transition hover:border-clay/70 hover:bg-sand"
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
