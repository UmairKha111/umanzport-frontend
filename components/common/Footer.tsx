import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-2">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block px-14 -m-10">
            <Image
              src="/logofoot.png"
              alt="Umanz Technology Logo"
              width={200}
              height={70}
              priority
            />
          </Link>

          <p className=" text-sm text-gray-400 max-w-xs">
            We build scalable digital products, websites, and marketing solutions
            designed for long-term growth.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-4 mt-6">
            <SocialIcon href="https://www.facebook.com/people/Umanz-Technology/61585621847147/" label="Facebook">
              <FacebookIcon />
            </SocialIcon>

            <SocialIcon href="https://www.instagram.com/umanztechnology/" label="Instagram">
              <InstagramIcon />
            </SocialIcon>

            <SocialIcon href="https://www.linkedin.com/company/umanz-technology/posts/?feedView=all" label="LinkedIn">
              <LinkedInIcon />
            </SocialIcon>

            <SocialIcon href="https://x.com/UmanzTechnology" label="Twitter">
              <TwitterIcon />
            </SocialIcon>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Full Stack Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>Social Media Management</li>
            <li>Branding & Identity</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>umanztechnology@gmail.com</li>
            <li>+91 7052568655</li>
            <li>IIM Road, Lucknow, Uttar Pradesh, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Umanz Technology. All rights reserved.
      </div>
    </footer>
  );
}

/* ----------------- UI HELPERS ----------------- */

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E05A00] hover:border-[#E05A00] transition"
    >
      {children}
    </a>
  );
}

/* ----------------- SVG ICONS ----------------- */

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M4 3a2 2 0 100 4 2 2 0 000-4zM3 8h2v13H3zM8 8h2v2h.1a3 3 0 012.9-2c3.1 0 3.7 2 3.7 4.6V21h-2v-6.2c0-1.5 0-3.4-2-3.4s-2.3 1.6-2.3 3.3V21H8z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M22 5.9c-.7.3-1.4.5-2.2.6a3.8 3.8 0 001.7-2.1 7.4 7.4 0 01-2.4.9A3.7 3.7 0 0016.3 4c-2.1 0-3.8 1.7-3.8 3.8 0 .3 0 .6.1.9A10.5 10.5 0 013 5.1a3.8 3.8 0 001.2 5.1 3.7 3.7 0 01-1.7-.5v.1c0 1.9 1.3 3.4 3 3.8a3.8 3.8 0 01-1.7.1 3.8 3.8 0 003.6 2.6A7.5 7.5 0 012 18.6a10.6 10.6 0 005.7 1.7c6.9 0 10.7-5.7 10.7-10.7v-.5c.7-.5 1.3-1.1 1.8-1.8z" />
    </svg>
  );
}
