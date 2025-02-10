import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCoder() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mb-8"
    >
      {/* Glowing effect behind the image */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main image container */}
      <motion.div
        className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
          alt="Developer Avatar"
          className="w-full h-full object-contain bg-dark-800"
        />

        {/* Animated overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* Code snippet overlay */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-4 left-4 right-4"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1 }}
            className="overflow-hidden"
          >
            <code className="font-mono text-sm md:text-base bg-dark-800/90 p-3 rounded-lg block border border-blue-500/30 shadow-lg backdrop-blur-sm">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-blue-400">const</span>{" "}
                <span className="text-green-400">developer</span> = {"{"}
                <br />
                &nbsp;&nbsp;name: <span className="text-blue-400">"Himanshu Gupta"</span>,
                <br />
                &nbsp;&nbsp;role: <span className="text-blue-400">"Full Stack Developer"</span>
                <br />
                {"}"};
              </motion.span>
            </code>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-12 h-12 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}