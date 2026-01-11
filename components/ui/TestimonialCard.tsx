"use client";

import { motion } from "framer-motion";

interface Props {
  name: string;
  role: string;
  feedback: string;
  index: number;
}

const overlayVariants = {
  rest: { y: "100%" },
  hover: { y: "0%" },
};

export default function TestimonialCard({
  name,
  role,
  feedback,
  index,
}: Props) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      style={{ opacity: 0, transform: "translateY(30px)" }}
      className="relative overflow-hidden  bg-gray-100 border border-black/10 p-8 cursor-pointer group"
    >
      {/* 🔥 DARK OVERLAY */}
      <motion.div
        variants={overlayVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 bg-zinc-800 z-0 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <p className="text-gray-700 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          “{feedback}”
        </p>

        <div className="mt-6">
          <p className="font-semibold text-black group-hover:text-white transition-colors duration-300">
            {name}
          </p>
          <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
