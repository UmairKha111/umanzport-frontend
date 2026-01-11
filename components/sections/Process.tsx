"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/features/process/processData";
import ProcessStep from "@/components/ui/ProcessStep";

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: TEXT + STEPS */}
        <div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-black">
              How We <span className="text-[#fd9c52]">Work</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A transparent, structured process designed to deliver results
              without confusion or delays.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.step}
                {...step}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative py-12"
        >
          <img
            src="/how-we-work.png"
            alt="Our workflow and process"
            className="w-full shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
