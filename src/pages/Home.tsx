import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, Zap, Globe, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SplineScene from '../components/3d/SplineScene';
import { cn } from '../utils/utils';

// SPLINE URLS
const HERO_SCENE = 'https://prod.spline.design/izow8QsZqwvQaQfF/scene.splinecode';
const PRODUCT_SCENE = 'https://prod.spline.design/pPOLEPpqBmohl4xY/scene.splinecode';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, 100]);

  return (
    <PageTransition>
      <div ref={containerRef} className="w-full">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0">
            <SplineScene scene={HERO_SCENE} />
          </div>
          
          <motion.div 
            style={{ opacity: heroOpacity, y: heroY }}
            className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20 pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-md"
            >
              The Future of Automation is Here
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight max-w-5xl"
            >
              AI AGENTS FOR THE NEXT <br className="hidden md:block"/> 
              <span className="text-gradient">GENERATION OF BUSINESS</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-zinc-400 max-w-2xl mb-10"
            >
              Build intelligent AI agents that automate workflows, interact with customers, and transform the way your business operates.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
            >
              <button className="glass-button bg-primary/20 hover:bg-primary/40 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2">
                Build Your AI Agent <ArrowRight className="w-4 h-4" />
              </button>
              <button className="glass-button px-8 py-4 rounded-full font-medium text-white">
                Explore Solutions
              </button>
            </motion.div>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-zinc-500 uppercase">Scroll to explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
          </motion.div>
        </section>

        {/* TRUSTED BY */}
        <section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto px-6 flex flex-col items-center">
            <p className="text-sm text-zinc-500 uppercase tracking-widest mb-8">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for logos */}
              {['ACME CORP', 'GLOBAL SYS', 'NEXUS TECH', 'QUANTUM AI', 'CYBER DYNAMICS'].map((name, i) => (
                <div key={i} className="text-xl font-bold tracking-tighter text-white/80">{name}</div>
              ))}
            </div>
          </div>
        </section>

        {/* AI SOLUTIONS GRID */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Intelligent Solutions</h2>
              <p className="text-zinc-400 text-lg">We deliver custom AI integrations that give you a competitive edge, automating the mundane and unlocking the extraordinary.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'AI Agents', icon: <Bot className="w-8 h-8 text-primary"/>, desc: 'Autonomous entities that execute complex multi-step workflows without human intervention.' },
                { title: 'AI Chatbots', icon: <MessageSquare className="w-8 h-8 text-secondary"/>, desc: 'Conversational interfaces that understand context, nuance, and user intent perfectly.' },
                { title: 'AI Automation', icon: <Zap className="w-8 h-8 text-accent"/>, desc: 'Seamless integration between your tools, driven by intelligent decision-making algorithms.' },
                { title: 'AI Websites', icon: <Globe className="w-8 h-8 text-primary"/>, desc: 'Dynamic digital experiences that adapt in real-time to user behavior and preferences.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{item.desc}</p>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-primary transition-colors">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3D PRODUCT SHOWCASE */}
        <section className="py-32 bg-gradient-to-b from-transparent to-primary/5 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Interact with the Future</h2>
                <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                  Our core reasoning engine is built to handle complex multimodal inputs, giving your agents the power to see, hear, and understand exactly like a human.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {['Real-time processing', 'Contextual memory', 'Multimodal analysis', 'Secure & Private'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                      <span className="text-zinc-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="glass-button bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-full font-medium">
                  View Technical Specs
                </button>
              </div>
              
              <div className="lg:w-1/2 w-full relative" style={{ height: '560px' }}>
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '24px' }}>
                  <SplineScene scene={PRODUCT_SCENE} className="z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-24 border-y border-white/10 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
              {[
                { num: '50+', label: 'AI Projects' },
                { num: '30+', label: 'Custom Agents' },
                { num: '100K+', label: 'Tasks Automated' },
                { num: '24/7', label: 'Continuous Operation' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">{stat.num}</div>
                  <div className="text-sm md:text-base text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 relative z-10 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to build your AI Agent?</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Stop waiting for the future. Start building it today with our cutting-edge AI architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button bg-primary/80 hover:bg-primary text-white px-10 py-5 rounded-full font-bold text-lg">
                Start a Project
              </button>
              <button className="glass-button px-10 py-5 rounded-full font-bold text-lg text-white">
                Talk to AI
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
