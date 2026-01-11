"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/features/services/servicesData";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-24 bg-white">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
           Explore Our <span className="text-[#fd9c52]">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We help businesses grow through technology, design, and digital
            strategy.
          </p>
        </motion.div>

        {/* Services Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

        {services.map((service, index) => (
  <ServiceCard
    key={service.slug}
    title={service.title}
    description={service.description}
    slug={service.slug}
    index={index}
  />
))}

        </div>
      </div>
    </section>
  );
}
