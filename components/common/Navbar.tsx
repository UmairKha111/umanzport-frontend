"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { services } from "@/features/services/servicesData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // desktop services
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
          ${scrolled ? "bg-white border-b border-black/10" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-3 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-v2.png"
              alt="Umanz Technology"
              width={260}
              height={70}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-14 text-sm font-extrabold relative">

            <Link href="/" className="nav-underline text-gray-800 hover:text-black">
              Home
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <span className="nav-underline cursor-pointer text-gray-800 hover:text-black">
                Services
              </span>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-72 bg-white shadow-xl border border-black/10"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center justify-between px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition"
                      >
                        {service.title}
                        <span className="text-gray-400">›</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
{/* portfolio */}
            <Link href="/blog" className="nav-underline text-gray-800 hover:text-black">
              Blogs
            </Link>

            <Link href="/about" className="nav-underline text-gray-800 hover:text-black">
              About
            </Link>

            <Link href="/contact" className="nav-underline text-gray-800 hover:text-black">
              Contact
            </Link>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block px-6 py-2 text-sm font-semibold bg-[#F58220] text-white hover:opacity-90 transition"
          >
            Let’s Talk
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-[5px]"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-[80%] bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setMobileOpen(false)}
                className="mb-6 text-lg font-bold"
              >
                ✕ Close
              </button>

              <nav className="flex flex-col gap-6 text-lg font-semibold">
                <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

                <div className="space-y-3">
                  <p className="text-gray-500 text-sm">Services</p>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-800"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>

                <Link href="/portfolio" onClick={() => setMobileOpen(false)}>Blogs</Link>
                <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
