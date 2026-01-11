"use client";

import { motion } from "framer-motion";
import { trustPoints } from "@/features/trust/trustData";
import TrustCard from "@/components/ui/TrustCard";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: TEXT + IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Why Businesses <br />
              <span className="text-[#fd9c52]">Choose Us</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We work as an extension of your team, focusing on long-term success,
              not short-term delivery.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/why-choose-us.png"
              alt="Business strategy and digital growth"
              className="w-full shadow-xl"
            />
          </div>
        </motion.div>

        {/* RIGHT: TRUST POINTS (UNCHANGED) */}
        <div className="space-y-16">
          {trustPoints.map((point, index) => (
            <TrustCard
              key={point.title}
              title={point.title}
              description={point.description}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
