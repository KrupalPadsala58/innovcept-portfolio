import { useState } from 'react';
import Head from 'next/head';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const filters = ['All', 'React', 'Next.js', 'Node.js', 'Python', 'Java'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.techStack.some(tech => tech.includes(filter) || tech === filter));

  return (
    <>
      <Head>
        <title>Projects | Innovcept</title>
      </Head>

      <div className="bg-gray-50 dark:bg-slate-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">My Portfolio</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          A showcase of my recent work, side projects, and open source contributions.
        </p>
      </div>

      <SectionWrapper>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? 'bg-highlight text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredProjects.length > 0 ? (
             filteredProjects.map((project) => (
               <ProjectCard key={project.id} project={project} />
             ))
           ) : (
             <div className="col-span-full text-center py-20">
               <p className="text-xl text-gray-500">No projects found for this filter.</p>
             </div>
           )}
        </div>
      </SectionWrapper>
    </>
  );
}
