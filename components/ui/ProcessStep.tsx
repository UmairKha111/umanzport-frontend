"use client";

import { motion } from "framer-motion";

interface Props {
  step: string;
  title: string;
  description: string;
  index: number;
}

export default function ProcessStep({
  step,
  title,
  description,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-6"
    >
      <div className="text-[#F58220] font-extrabold text-2xl">
        {step}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-black">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
