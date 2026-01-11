"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Three.js background (UNCHANGED)
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      
      {/* 🔹 Three.js Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* 🔹 White Overlay */}
      <div className="absolute inset-0 bg-white/85 z-10" />

      {/* 🔹 CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center w-full">

          {/* 🟠 IMAGE FIRST ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[450px] order-1 lg:order-2"
          >
            <Image
              src="/hero-d2.png"
              alt="Umanz Technology digital solutions illustration"
              fill
              priority
              className="
                object-contain
                lg:object-cover
                lg:scale-125
              "
            />
          </motion.div>

          {/* 🟠 TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
              Building <span className="text-[#F58220]">Digital Solutions</span>
              <br className="hidden sm:block" />
              That Drive Growth
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              We build high-performance websites, scalable digital products, and growth-driven marketing strategies that help brands scale with confidence.
            </p>

            {/* 🔘 CTA BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-[#F58220] text-white font-semibold hover:opacity-90 transition text-center"
              >
                View Our Blogs
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 border border-gray-300 text-black font-semibold hover:bg-black hover:text-white transition text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
