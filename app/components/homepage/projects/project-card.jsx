// @flow strict

import * as React from 'react';
import { SpotlightCard } from '@/app/components/ui/spotlight';
import Link from 'next/link';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <SpotlightCard className="w-full p-6 sm:p-8 border-white/10 hover:border-violet-500/40">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
            {project.role}
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            {project.name}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tools */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tools?.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-cyan-300 hover:border-cyan-500/40 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.code || project.demo) && (
          <div className="mt-4 flex items-center gap-4 pt-4 border-t border-white/10">
            {project.code && (
              <Link
                href={project.code}
                target="_blank"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                <FaCode size={14} className="text-violet-400" />
                <span>Code</span>
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                <FaExternalLinkAlt size={12} className="text-pink-400" />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </SpotlightCard>
  );
};

export default ProjectCard;
