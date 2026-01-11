"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-28 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
        >
          Ready to Build Something
          <br />
          <span className="text-[#fd9c52]">Meaningful?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Let’s discuss your goals and see how we can help you grow through
          thoughtful design and reliable technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-10 py-4  bg-[#F58220] text-white font-semibold hover:opacity-90 transition"
          >
            Start a Conversation
          </Link>

          <Link
            href="/portfolio"
            className="px-10 py-4  border border-white/30 text-white font-semibold hover:border-white transition"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
