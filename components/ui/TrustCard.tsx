"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  index: number;
}

export default function TrustCard({ title, description, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-l-4 border-[#F58220] pl-6 py-4"
    >
      <h3 className="text-lg font-semibold text-black">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
