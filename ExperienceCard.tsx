import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  index: number;
}

export default function ExperienceCard({ role, company, duration, location, description, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative p-6 bg-dark-800 rounded-xl border border-accent-500/10 hover:shadow-lg hover:shadow-accent-500/10 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-accent-500 rounded-l-xl" />
      <h3 className="text-xl font-bold text-white mb-1">{role}</h3>
      <h4 className="text-accent-500 font-semibold mb-2">{company}</h4>
      
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
      
      <ul className="space-y-2">
        {description.map((item, i) => (
          <motion.li
            key={i}
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="text-gray-400 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-accent-500/30 before:rounded-full"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}