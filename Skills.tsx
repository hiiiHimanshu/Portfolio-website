import React from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Server, Cpu, Cloud, Code, Layout, GitBranch } from 'lucide-react';
import ParallaxSection from './animations/ParallaxSection';
import FloatingOrbs from './animations/FloatingOrbs';

const skills = [
  { icon: Globe, name: 'Frontend Development', desc: 'React, Vue' },
  { icon: Server, name: 'Backend Development', desc: 'Node.js' },
  { icon: Database, name: 'Databases', desc: ' MongoDB' },
  { icon: Cloud, name: 'Cloud Services', desc: 'AWS, Azure' },
  { icon: Code, name: 'Languages', desc: 'C,Java, Python' },
  { icon: Layout, name: 'UI/UX', desc: 'Figma, Adobe XD' },
  { icon: GitBranch, name: 'Version Control', desc: 'Git, GitHub' },
  { icon: Cpu, name: 'System Design', desc: 'Architecture, Scalability' },
];

export default function Skills() {
  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      <FloatingOrbs />
      
      <div className="container mx-auto px-6 relative z-10">
        <ParallaxSection>
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
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-gray-400">Expertise across the full development stack</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 87, 34, 0.2)"
                }}
                className="p-6 bg-dark-800 rounded-xl transition-all duration-300 border border-accent-500/10"
              >
                <motion.div 
                  className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {React.createElement(skill.icon, { className: "w-6 h-6 text-accent-500" })}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
}