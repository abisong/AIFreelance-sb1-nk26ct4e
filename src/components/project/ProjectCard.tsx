import React from 'react';
import type { Project } from '../../types';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm bg-gray-100 rounded-full text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 font-medium"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}