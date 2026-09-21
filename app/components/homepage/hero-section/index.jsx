"use client";

// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";
import { SpotlightCard, GlowingBadge } from "@/app/components/ui/spotlight";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-8 lg:py-16">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-12 w-full">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center">
          <GlowingBadge icon={HiSparkles} className="mb-6">
            Available for New Projects & Roles
          </GlowingBadge>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.15]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </h1>

          <p className="mt-4 text-xl font-medium text-neutral-300">
            A passionate{" "}
            <span className="text-cyan-400 underline decoration-cyan-500/30 underline-offset-4">
              {personalData.designation}
            </span>{" "}
            building high-performance web applications and sleek digital experiences.
          </p>

          {/* Social Links */}
          <div className="my-8 flex items-center gap-3">
            {[
              { href: personalData.github, icon: BsGithub, label: "GitHub" },
              { href: personalData.linkedIn, icon: BsLinkedin, label: "LinkedIn" },
              { href: personalData.leetcode, icon: SiLeetcode, label: "LeetCode" },
              { href: personalData.twitter, icon: FaTwitterSquare, label: "Twitter" },
              { href: personalData.facebook, icon: FaFacebook, label: "Facebook" },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="p-3 rounded-xl border border-white/10 bg-white/5 text-neutral-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1px] font-medium text-sm"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2 rounded-full bg-black/90 px-6 py-3.5 text-white transition-all duration-300 group-hover:bg-black/60">
                <span>Contact Me</span>
                <RiContactsFill size={16} className="text-pink-400 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-violet-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
            >
              <span>Get Resume</span>
              <MdDownload size={18} className="text-violet-400" />
            </Link>
          </div>
        </div>

        {/* Dynamic Code Showcase Terminal */}
        <div className="order-1 lg:order-2">
          <SpotlightCard className="p-1 sm:p-2 border-violet-500/20 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/5">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-amber-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="text-xs font-mono text-neutral-400">developer.ts</span>
            </div>

            <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-neutral-300">
              <div>
                <span className="text-pink-400">const</span>{" "}
                <span className="text-violet-300">developer</span>{" "}
                <span className="text-pink-400">=</span>{" "}
                <span className="text-neutral-400">{"{"}</span>
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-neutral-200">name:</span>{" "}
                <span className="text-amber-300">&apos;ANIKET MHALUNGEKAR&apos;</span>,
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-neutral-200">role:</span>{" "}
                <span className="text-amber-300">&apos;Full Stack Developer&apos;</span>,
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-neutral-200">skills:</span>{" "}
                <span className="text-neutral-400">[</span>
              </div>
              <div className="pl-8 sm:pl-12 text-amber-300">
                &apos;React&apos;, &apos;Next.js&apos;, &apos;TypeScript&apos;, &apos;Node.js&apos;, &apos;TailwindCSS&apos;, &apos;Docker&apos;
              </div>
              <div className="pl-4 sm:pl-6 text-neutral-400">],</div>
              <div className="pl-4 sm:pl-6">
                <span className="text-neutral-200">hardWorker:</span>{" "}
                <span className="text-emerald-400">true</span>,
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-neutral-200">problemSolver:</span>{" "}
                <span className="text-emerald-400">true</span>,
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-emerald-400">hireable:</span>{" "}
                <span className="text-pink-400">function</span>() {"{"}
              </div>
              <div className="pl-8 sm:pl-12">
                <span className="text-pink-400">return</span>{" "}
                <span className="text-cyan-400">this</span>.hardWorker &amp;&amp;{" "}
                <span className="text-cyan-400">this</span>.problemSolver;
              </div>
              <div className="pl-4 sm:pl-6">{"}"}</div>
              <div>{"};"}</div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
