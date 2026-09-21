// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { SpotlightCard } from "@/app/components/ui/spotlight";
import { HiUser, HiCodeBracket, HiSparkles } from "react-icons/hi2";

function AboutSection() {
  return (
    <div id="about" className="my-16 lg:my-28 relative">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
          <HiUser size={22} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          About <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-between">
          <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-4">
              <HiSparkles className="animate-spin" style={{ animationDuration: '4s' }} />
              <span>Who I Am</span>
            </div>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              {personalData.description}
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-neutral-400">Location</p>
                <p className="text-sm font-semibold text-white mt-0.5">{personalData.address}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-neutral-400">Designation</p>
                <p className="text-sm font-semibold text-white mt-0.5">{personalData.designation}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 col-span-2 sm:col-span-1">
                <p className="text-xs text-neutral-400">Status</p>
                <p className="text-sm font-semibold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Available
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>

        <div className="lg:col-span-5 flex justify-center items-center">
          <SpotlightCard className="p-4 sm:p-6 w-full flex flex-col items-center justify-center text-center">
            <div className="relative group rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-violet-600 via-pink-500 to-cyan-400">
              <div className="relative rounded-xl overflow-hidden bg-black">
                <Image
                  src={personalData.profile}
                  width={300}
                  height={300}
                  alt={personalData.name}
                  className="rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-bold text-white">{personalData.name}</h3>
              <p className="text-xs text-neutral-400 mt-1">{personalData.designation}</p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
