import React from 'react';
import { motion } from 'framer-motion';

export default function TimelineDot() {
  return (
    <div className="absolute left-0 w-4 h-4">
      <motion.div
        className="w-4 h-4 bg-accent-500 rounded-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-accent-500/30"
        initial={{ scale: 0 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </div>
  );
}