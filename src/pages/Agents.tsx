import React from 'react';
import { motion } from 'framer-motion';
import { Network, Headset, TrendingUp, Search, Briefcase, Workflow } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SplineScene from '../components/3d/SplineScene';

const AGENT_SCENE = 'https://prod.spline.design/U7Fb-TVMX2mmG1DE/scene.splinecode';

const Agents = () => {
  return (
    <PageTransition>
      <div className="w-full min-h-screen pt-32 pb-24">
        {/* HERO */}
        <section className="container mx-auto px-6 mb-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
            >
              INTELLIGENT AGENTS <br/>
              <span className="text-primary">THAT WORK FOR YOU</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 mb-8"
            >
              Deploy autonomous AI agents that act as an extension of your workforce. From customer service to deep market research, our agents handle the complexity so you can focus on growth.
            </motion.p>
          </div>
          <div className="lg:w-1/2 h-[400px] lg:h-[600px] w-full relative">
            <SplineScene scene={AGENT_SCENE} />
          </div>
        </section>

        {/* AGENTS GRID */}
        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Headset className="w-6 h-6"/>, title: 'Customer Service Agents', desc: 'Handles support tickets, resolves customer inquiries instantly, and escalates complex issues with full context.' },
              { icon: <TrendingUp className="w-6 h-6"/>, title: 'Sales Agents', desc: 'Identifies leads, personalizes outreach, and schedules meetings completely autonomously 24/7.' },
              { icon: <Network className="w-6 h-6"/>, title: 'Marketing Agents', desc: 'Generates campaign ideas, writes copy, and optimizes ad spending based on real-time performance.' },
              { icon: <Search className="w-6 h-6"/>, title: 'Research Agents', desc: 'Scours the web, analyzes competitor data, and compiles comprehensive reports in minutes.' },
              { icon: <Briefcase className="w-6 h-6"/>, title: 'Business Automation', desc: 'Connects your disparate SaaS tools and manages internal operational workflows securely.' },
              { icon: <Workflow className="w-6 h-6"/>, title: 'Custom Agents', desc: 'Need something specific? We build tailor-made agents designed exclusively for your unique business logic.' }
            ].map((agent, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {agent.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{agent.title}</h3>
                <p className="text-zinc-400 mb-6">{agent.desc}</p>
                <button className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                  View Capabilities
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Agents;
