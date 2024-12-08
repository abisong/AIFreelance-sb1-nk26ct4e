import React from 'react';
import { ProjectCard } from '../components/project/ProjectCard';

const SAMPLE_PROJECTS = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    link: '#'
  },
  {
    id: '2',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time analytics dashboard with machine learning insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
    link: '#'
  }
];

export function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}