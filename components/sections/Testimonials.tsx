"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/features/testimonials/testimonialsData";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            What Our <span className="text-[#fd9c52]">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-grey-600">
            Trusted by businesses for quality, reliability, and long-term
            collaboration.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.name}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
