"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  index: number;
  slug?: string;
}

/* ✅ DEFINE COLORS HERE */
const COLORS = [
  "#6366F1", // indigo
  "#EF4444", // red
  "#38BDF8", // sky
  "#F58220", // brand orange
  "#22C55E", // green
  "#8B5CF6", // violet
];

/* ✅ ICONS (UNCHANGED) */
const ICONS = [
  <svg key="m" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 11v2a1 1 0 001 1h2l3 4V6L6 10H4a1 1 0 00-1 1z" />
    <path d="M14 8v8a5 5 0 000-8z" />
  </svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 20V10" />
    <path d="M10 20V4" />
    <path d="M16 20v-6" />
  </svg>,
  <svg key="s" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>,
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 20l9-5-9-5-9 5 9 5z" />
    <path d="M12 12V4" />
  </svg>,
  <svg key="co" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M8 17l-5-5 5-5" />
    <path d="M16 7l5 5-5 5" />
  </svg>,
  <svg key="su" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
    <path d="M12 8v4l3 3" />
  </svg>,
];

export default function ServiceCard({ title, description, index, slug }: Props) {
  const color = COLORS[index % COLORS.length];
  const Icon = ICONS[index % ICONS.length];

  return (
    <Link href={slug ? `/services/${slug}` : "#"} className="block">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        whileTap={{ scale: 0.97 }}
        className="relative overflow-hidden bg-[#F7F7F7] border border-black/10 p-8 shadow-md cursor-pointer h-full flex flex-col"

      >
        {/* COLOR OVERLAY */}
        <motion.div
          variants={{
            rest: { scaleY: 0 },
            hover: { scaleY: 1 },
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{ backgroundColor: color, transformOrigin: "bottom" }}
          className="absolute inset-0 z-0"
        />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col h-full">
          {/* ICON */}
          <div className="w-16 h-16 flex items-center justify-center mb-6"
               style={{ backgroundColor: `${color}20` }}>
            <div className="w-8 h-8">{Icon}</div>
          </div>

          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-sm leading-relaxed mb-6">{description}</p>

          <span className="mt-auto font-semibold inline-flex items-center gap-2">
            Read More →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
