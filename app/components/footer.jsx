"use client";

import Link from 'next/link';
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiHeart } from "react-icons/hi2";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/80 backdrop-blur-3xl text-neutral-400 mt-28">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-lg font-bold text-white tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                {personalData.name}
              </span>
            </Link>
            <p className="text-xs text-neutral-400 flex items-center gap-1.5">
              <span>Crafted with</span>
              <HiHeart className="text-pink-500 animate-pulse" />
              <span>using Next.js 16 & Tailwind CSS</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { href: personalData.github, icon: BsGithub },
              { href: personalData.linkedIn, icon: BsLinkedin },
              { href: personalData.leetcode, icon: SiLeetcode },
              { href: personalData.twitter, icon: FaTwitterSquare },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={idx} whileHover={{ y: -3, scale: 1.1 }}>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="p-2.5 block rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:bg-violet-500/20 hover:text-white hover:border-violet-500/40 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </Link>
                </motion.div>
              );
            })}
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
