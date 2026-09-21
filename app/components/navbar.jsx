"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineSparkles, HiCodeBracket } from "react-icons/hi2";

function Navbar() {
  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-4 z-50 my-4"
    >
      <nav className="mx-auto max-w-5xl rounded-full border border-white/10 bg-black/70 backdrop-blur-2xl px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-violet-500/40">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-9 h-9 bg-gradient-to-tr from-violet-600 via-pink-500 to-cyan-400 rounded-full flex items-center justify-center p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.4)]"
            >
              <div className="w-full h-full bg-black/90 rounded-full flex items-center justify-center">
                <HiCodeBracket className="text-violet-400 text-base group-hover:text-pink-400 transition-colors" />
              </div>
            </motion.div>
            <span className="text-white text-base font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent group-hover:from-violet-400 group-hover:to-pink-400 transition-all">
              ANIKET
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-3 py-1 border border-white/5">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  className="relative px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-all duration-200 rounded-full hover:bg-white/10 block"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1px] text-xs font-medium focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-400 transition-all duration-300 group-hover:opacity-100 opacity-80" />
            <span className="relative flex items-center gap-2 rounded-full bg-black/90 px-4 py-2 text-white transition-all duration-300 group-hover:bg-black/70">
              <span>Connect</span>
              <HiOutlineSparkles className="text-pink-400 group-hover:rotate-45 transition-transform" />
            </span>
          </Link>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
