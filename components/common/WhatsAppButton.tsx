"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <Link
        href="https://wa.me/6391157751?text=Hi%20Umanz%20Technology,%20I%20want%20to%20discuss%20a%20project"
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-2xl hover:scale-110 transition-transform"
      >
        {/* WhatsApp SVG (no extra library needed) */}
        <svg
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="white"
        >
          <path d="M19.11 17.18c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.11 2.83c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.82-1.27.23-.61.23-1.14.16-1.25-.07-.11-.25-.18-.52-.32z" />
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.5.74 4.83 2.02 6.78L4 29l7.4-1.94A11.95 11.95 0 0016 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 21.8c-2.07 0-3.99-.61-5.6-1.65l-.4-.25-4.39 1.15 1.17-4.28-.27-.44A9.76 9.76 0 016.2 15c0-5.41 4.39-9.8 9.8-9.8s9.8 4.39 9.8 9.8-4.39 9.8-9.8 9.8z" />
        </svg>
      </Link>
    </motion.div>
  );
}
