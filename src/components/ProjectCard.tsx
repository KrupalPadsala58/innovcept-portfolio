import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../data/projects';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl flex flex-col h-full border border-gray-100 dark:border-slate-700"
    >
      <div className="relative h-48 w-full overflow-hidden group">
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
           {/* Overlay content if needed, e.g. quick view icon */}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-primary dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-sm rounded-full text-gray-700 dark:text-gray-200 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-highlight font-semibold hover:underline flex items-center gap-1"
          >
            Live Demo 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
             className="text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
          >
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
