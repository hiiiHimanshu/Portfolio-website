import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollProgress from './components/animations/ScrollProgress';
import LoadingSpinner from './components/animations/LoadingSpinner';
import AnimatedBackground from './components/animations/AnimatedBackground';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="bg-dark-900 relative">
      <AnimatedBackground />
      <AnimatePresence>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ScrollProgress />
            <Hero />
            <Skills />
            <WorkExperience />
            <Projects />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;