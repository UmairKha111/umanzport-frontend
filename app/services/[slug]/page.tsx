"use client";

import React from "react";
import { services } from "@/features/services/servicesData";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ServiceDetail({ params }: Props) {
  const { slug } = React.use(params);
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  /* 🌊 very slow parallax */
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, -40]);

  return (
    <>
      {/* ================= HERO (CENTERED & CALM) ================= */}
      <section className="relative h-[420px] overflow-hidden bg-gradient-to-br from-[#ffab6a] via-[#ff9b4f] to-[#ff7b17] flex items-center justify-center text-center">
        
        {/* slow ambient glow */}
        <motion.div
          animate={{ opacity: [0.25, 0.4, 0.25] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-3xl px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
            className="mt-4 text-lg text-white/90"
          >
            {service.hero}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.35 }}
            className="mt-6 text-sm text-white/70"
          >
            Home / Services / {service.title}
          </motion.p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* IMAGE (VERY SLOW FLOAT) */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain p-12"
                priority
              />
            </div>
          </motion.div>

          {/* TEXT CONTENT (STAGGERED & SLOW) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18 },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="text-3xl font-bold text-black"
            >
              What We Deliver
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mt-5 text-gray-600 text-lg"
            >
              {service.description}
            </motion.p>

            <div className="mt-10 space-y-6">
              {service.points.map((point) => (
                <motion.div
                  key={point}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-[#ffab6a] text-xl">✔</span>
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS (SLOW MICRO-INTERACTION) ================= */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16"
          >
            Our Process
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {service.process.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white  p-8 shadow-md"
              >
                <div className="text-[#ffab6a] text-3xl font-extrabold">
                  {i + 1}
                </div>
                <p className="mt-4 font-semibold">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
