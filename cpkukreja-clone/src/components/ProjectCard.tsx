'use client';

import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.link} className="group block">
      <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-500 text-sm font-medium">Project Image</span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{project.category}</p>
      </div>
    </Link>
  );
}
