import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-dark-800/80 backdrop-blur-sm rounded-xl overflow-hidden group transform transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 border border-white/5"
    >
      <motion.div 
        className="relative h-48 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
      </motion.div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm hover:bg-blue-500/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a 
            href={project.demoUrl}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </motion.a>
          <motion.a 
            href={project.githubUrl}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}