import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SplineScene from '../components/3d/SplineScene';

const CONTACT_SCENE = 'https://prod.spline.design/hWZSBLh5KXeJ6hEK/scene.splinecode';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="w-full min-h-screen relative pt-32 pb-24 overflow-hidden flex items-center">
        {/* Background 3D */}
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
          <SplineScene scene={CONTACT_SCENE} />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
            >
              LET'S BUILD <br/>
              <span className="text-accent">SOMETHING INTELLIGENT.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-400 mb-12 max-w-md"
            >
              Tell us about your project, and we'll show you how AI can completely transform your operations.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-1/2"
          >
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Name</label>
                        <input type="text" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Email</label>
                        <input type="email" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Project Type</label>
                      <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option value="agents" className="bg-[#030303]">Autonomous Agents</option>
                        <option value="chatbots" className="bg-[#030303]">AI Chatbots</option>
                        <option value="websites" className="bg-[#030303]">AI Websites</option>
                        <option value="other" className="bg-[#030303]">Custom Automation</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Message</label>
                      <textarea required rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" className="glass-button bg-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 mt-4 hover:bg-primary/80">
                      Initialize Contact <Send className="w-5 h-5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Transmission Received</h3>
                    <p className="text-zinc-400">Our AI routing system has logged your request. A human specialist will contact you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
