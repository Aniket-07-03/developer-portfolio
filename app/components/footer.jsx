// @flow strict
import Link from 'next/link';
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiHeart } from "react-icons/hi2";

function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-2xl text-neutral-600 dark:text-neutral-400 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
              <span className="bg-gradient-to-r from-violet-600 to-pink-500 dark:from-violet-400 dark:to-pink-400 bg-clip-text text-transparent">
                {personalData.name}
              </span>
            </Link>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
              <span>Crafted with</span>
              <HiHeart className="text-pink-500 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
            <Link
              href={personalData.github}
              target="_blank"
              className="p-2 rounded-full border border-neutral-200 dark:border-white/5 bg-neutral-100 dark:bg-white/5 hover:bg-violet-500/20 hover:text-violet-600 dark:hover:text-violet-300 hover:border-violet-500/30 transition-all duration-300"
            >
              <BsGithub size={18} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="p-2 rounded-full border border-neutral-200 dark:border-white/5 bg-neutral-100 dark:bg-white/5 hover:bg-violet-500/20 hover:text-violet-600 dark:hover:text-violet-300 hover:border-violet-500/30 transition-all duration-300"
            >
              <BsLinkedin size={18} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="p-2 rounded-full border border-neutral-200 dark:border-white/5 bg-neutral-100 dark:bg-white/5 hover:bg-violet-500/20 hover:text-violet-600 dark:hover:text-violet-300 hover:border-violet-500/30 transition-all duration-300"
            >
              <SiLeetcode size={18} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="p-2 rounded-full border border-neutral-200 dark:border-white/5 bg-neutral-100 dark:bg-white/5 hover:bg-violet-500/20 hover:text-violet-600 dark:hover:text-violet-300 hover:border-violet-500/30 transition-all duration-300"
            >
              <FaTwitterSquare size={18} />
            </Link>
          </div>

          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
