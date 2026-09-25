// @flow strict
import Link from "next/link";
import { HiOutlineSparkles, HiCodeBracket } from "react-icons/hi2";
import { ThemeToggle } from "./theme-toggle";

function Navbar() {
  return (
    <div className="sticky top-4 z-50 my-4">
      <nav className="mx-auto max-w-5xl rounded-full border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl px-6 py-3 shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-violet-500/30">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-tr from-violet-600 to-pink-500 rounded-full flex items-center justify-center p-[1px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <div className="w-full h-full bg-black/80 rounded-full flex items-center justify-center">
                <HiCodeBracket className="text-violet-400 text-base group-hover:text-pink-400 transition-colors" />
              </div>
            </div>
            <span className="text-neutral-900 dark:text-white text-base font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent group-hover:from-violet-400 group-hover:to-pink-400 transition-all">
              ANIKET
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 bg-neutral-100 dark:bg-white/5 rounded-full px-3 py-1 border border-neutral-200 dark:border-white/5">
            <li>
              <Link className="px-3.5 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:text-white hover:bg-white/10 rounded-full transition-all" href="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className="px-3.5 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:text-white hover:bg-white/10 rounded-full transition-all" href="/#experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="px-3.5 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:text-white hover:bg-white/10 rounded-full transition-all" href="/#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="px-3.5 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:text-white hover:bg-white/10 rounded-full transition-all" href="/#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="px-3.5 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:text-white hover:bg-white/10 rounded-full transition-all" href="/blog">
                Blog
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* CTA Button */}
            <Link
              href="/#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1px] text-xs font-medium focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-400 transition-all duration-300 group-hover:opacity-100 opacity-80 animate-gradient" />
              <span className="relative flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-black/90 px-4 py-2 text-white transition-all duration-300 group-hover:bg-black/70">
                <span>Connect</span>
                <HiOutlineSparkles className="text-pink-400 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
