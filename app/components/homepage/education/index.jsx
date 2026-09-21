// @flow strict
import { educations } from "@/utils/data/educations";
import studyLottie from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import { SpotlightCard } from "@/app/components/ui/spotlight";
import { HiAcademicCap } from "react-icons/hi2";

function Education() {
  return (
    <div id="education" className="my-16 lg:my-28 relative">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
          <HiAcademicCap size={22} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Academic <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Education</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-sm p-4">
            <AnimationLottie animationPath={studyLottie} />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-col gap-4">
            {educations.map((education) => (
              <SpotlightCard key={education.id} className="p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 w-fit mb-3">
                  <span>{education.duration}</span>
                </div>

                <div className="flex items-start gap-4 mt-1">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-violet-500/30 text-violet-400 shrink-0">
                    <HiAcademicCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {education.title}
                    </h3>
                    <p className="text-sm text-neutral-300 mt-1">
                      {education.institution}
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

export default Education;
