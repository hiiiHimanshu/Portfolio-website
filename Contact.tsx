import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-accent-500 mx-auto mb-6"
            />
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400">Let's discuss your next project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-dark-800 p-8 rounded-xl border border-accent-500/10"
            >
              <form>
                <div className="mb-6">
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-700 border border-accent-500/20 rounded-lg text-white focus:outline-none focus:border-accent-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-dark-700 border border-accent-500/20 rounded-lg text-white focus:outline-none focus:border-accent-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 bg-dark-700 border border-accent-500/20 rounded-lg text-white focus:outline-none focus:border-accent-500 transition-colors h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors glow"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-dark-800 p-8 rounded-xl border border-accent-500/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, text: 'hello@example.com' },
                  { icon: Github, text: 'github.com/username' },
                  { icon: Linkedin, text: 'linkedin.com/in/username' },
                  { icon: Twitter, text: '@username' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-gray-400 hover:text-accent-500 transition-colors"
                  >
                    <item.icon className="w-6 h-6" />
                    <span>{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}