'use client';

import { useState } from 'react';
import { projects, categories } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import FilterTabs from '@/components/FilterTabs';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Having been in the industry for over five decades now, we have been a part of the most significant 
            housing projects ranging from private residences to residential societies to large-scale townships. 
            Each project for us brings new opportunity to design a unique concept which instills a distinct identity to it.
          </p>
        </div>

        <FilterTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
