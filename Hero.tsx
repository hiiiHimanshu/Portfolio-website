import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Download, Eye } from 'lucide-react';
import AnimatedCoder from './AnimatedCoder';
import TypewriterText from './TypewriterText';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <AnimatedCoder />
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block p-2 bg-accent-500/10 rounded-full mb-4"
          >
            <Code2 className="w-6 h-6 text-accent-500" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <TypewriterText text="Himanshu Gupta" delay={3} />
          </h1>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-accent-500 font-semibold mb-6"
          >
            <TypewriterText text="Full Stack Developer" delay={6} />
          </motion.div>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Transforming ideas into elegant, scalable solutions with modern technologies
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent-500 text-white rounded-full flex items-center gap-2 hover:bg-accent-600 transition-colors glow"
            >
              <Eye className="w-5 h-5" />
              View Projects
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-dark-800 text-white rounded-full flex items-center gap-2 hover:bg-dark-700 transition-colors border border-accent-500/30"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900 to-transparent" />
    </motion.section>
  );
}