import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'AI Companion',
    description: 'An intelligent AI chatbot with personality customization and natural language processing',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS', 'TypeScript'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Event Manager',
    description: 'Full-featured event management platform with real-time updates and ticket handling',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'EV Buddy',
    description: 'Smart EV charging station locator with real-time availability and route planning',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80',
    tags: ['React Native', 'Maps API', 'Firebase', 'Redux'],
    demoUrl: '#',
    githubUrl: '#'
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-dark-900/50 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent-500 mx-auto mb-6"
          />
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Innovative solutions for modern challenges
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}