"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[420px] flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            About <span className="text-[#F58220]">Umanz</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Building brands through technology & strategy
          </p>
        </motion.div>
      </section>

      {/* ================= ABOUT INTRO ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/about-main.png"
              alt="About Umanz Technology"
              width={520}
              height={520}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-black leading-tight">
              We Design, Build <br />
              <span className="text-[#F58220]">& Scale Digital Products</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Umanz Technology is a digital solutions studio focused on creating
              meaningful online experiences. We combine strategy, design, and
              engineering to help businesses grow in a competitive digital world.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
              Our approach is simple — understand the problem deeply, design with
              purpose, and deliver scalable solutions that perform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-black text-center"
          >
            What We Do Best
          </motion.h2>

          <div className="mt-20 grid md:grid-cols-3 gap-12">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl border border-black/10 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-28 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-14 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-extrabold text-[#F58220]">
                {stat.value}
              </p>
              <p className="mt-3 text-white/70 text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ================= DATA ================= */

const expertise = [
  {
    title: "Web Development",
    desc:
      "Robust, scalable, and high-performance websites tailored to your business goals.",
  },
  {
    title: "UI / UX Design",
    desc:
      "Human-centered design that improves usability, engagement, and conversion.",
  },
  {
    title: "Digital Marketing",
    desc:
      "Growth-focused strategies driven by data, creativity, and performance metrics.",
  },
];

const stats = [
  { value: "800+", label: "Clients Served" },
  { value: "1200+", label: "Projects Completed" },
  { value: "10+", label: "Years of Experience" },
];
