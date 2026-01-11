"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/features/portfolio/portfolioData";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function Portfolio() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Our <span className="text-[#fd9c52]">Work</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We partner with businesses to solve real problems and deliver
            measurable results.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolio.map((item, index) => (
            <CaseStudyCard
              key={item.title}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
