import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { HiFolderOpen } from "react-icons/hi2";

const Projects = () => {
  return (
    <div id='projects' className="my-16 lg:my-28 relative">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400">
          <HiFolderOpen size={22} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Featured <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.slice(0, 4).map((project, index) => (
          <div key={index} className="w-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
