// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { HiCommandLine } from "react-icons/hi2";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";

function Skills() {
  return (
    <div id="skills" className="my-16 lg:my-28 relative">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400">
          <HiCommandLine size={22} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Technical <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
      </div>

      <div className="w-full py-4">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <AnimatedTooltip key={id} item={skill}>
              <div
                className="mx-3 my-2 group relative rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-neutral-950/80 p-4 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] min-w-[130px]"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="h-10 w-10 flex items-center justify-center p-1 rounded-lg bg-neutral-100 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={36}
                      height={36}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <p className="text-neutral-900 dark:text-white text-xs font-medium tracking-wide group-hover:text-violet-600 dark:text-violet-300 transition-colors opacity-0 group-hover:opacity-100 absolute bottom-2">
                    {skill}
                  </p>
                </div>
              </div>
            </AnimatedTooltip>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
