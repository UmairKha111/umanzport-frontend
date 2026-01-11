"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  index: number;
}

const overlayVariants = {
  rest: { y: "100%" },
  hover: { y: "0%" },
};

export default function CaseStudyCard({
  title,
  category,
  problem,
  solution,
  result,
  index,
}: Props) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      // ✅ scroll reveal (use variants-free animation)
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay: index * 0.12 }}
      style={{ opacity: 0, transform: "translateY(50px)" }}
      className="relative overflow-hidden  bg-gray-100 border border-black/10 p-10 cursor-pointer group"
    >
      <motion.div
        variants={overlayVariants}
        transition={{ duration: .3, ease: "easeInOut" }}
        className="absolute inset-0 bg-zinc-800 z-0 pointer-events-none"
      />

      <div className="relative z-10">
        <span className="text-sm font-semibold text-[#F58220]">
          {category}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-black group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        <div className="mt-6 space-y-4 text-gray-700 group-hover:text-gray-300 transition-colors duration-300">
          <p>
            <strong className="text-black group-hover:text-white transition-colors duration-300">
              Problem:
            </strong>{" "}
            {problem}
          </p>

          <p>
            <strong className="text-black group-hover:text-white transition-colors duration-300">
              Solution:
            </strong>{" "}
            {solution}
          </p>

          <p>
            <strong className="text-black group-hover:text-white transition-colors duration-300">
              Result:
            </strong>{" "}
            {result}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
