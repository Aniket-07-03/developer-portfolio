// @flow strict

import { experiences } from "@/utils/data/experience";
import { SpotlightCard } from "@/app/components/ui/spotlight";
import { BsBriefcase } from "react-icons/bs";
import experienceLottie from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import { HiBriefcase } from "react-icons/hi2";

function Experience() {
  return (
    <div id="experience" className="my-16 lg:my-28 relative">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400">
          <HiBriefcase size={22} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Work <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-md p-4">
            <AnimationLottie animationPath={experienceLottie} />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-col gap-4">
            {experiences.map((exp) => (
              <SpotlightCard key={exp.id} className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-600 dark:text-violet-300 w-fit">
                    <span>{exp.duration}</span>
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">{exp.company}</span>
                </div>

                <div className="flex items-start gap-4 mt-2">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-violet-500/30 text-violet-600 dark:text-violet-400 shrink-0">
                    <BsBriefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white tracking-wide">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                      {exp.company}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
