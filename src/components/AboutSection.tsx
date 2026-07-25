import React from 'react';
import { Target, Cpu, RefreshCw, Rocket, Code, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Deep Audit & Blueprint',
      desc: 'We inspect your technical stack, past campaign data, conversion bottlenecks, and competitor positioning to establish unit economics.',
      icon: Target,
    },
    {
      num: '02',
      title: 'Rapid Engineering Sprint',
      desc: 'We build high-converting React landing pages, set up server-side tracking, and produce multi-format ad creatives.',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Agile Creative Loops',
      desc: 'Through weekly data feedback loops, we scale winning ad angles, eliminate ad fatigue, and continuously optimize on-site CRO.',
      icon: RefreshCw,
    },
    {
      num: '04',
      title: 'Exponential Revenue Scale',
      desc: 'Once campaign profitability is verified, we expand budgets, unlock new channels, and cement market leadership.',
      icon: Rocket,
    },
  ];

  return (
    <section id="methodology" className="py-20 sm:py-28 bg-white relative border-b border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] font-black text-[#0052ff]">
            — The NorthPeak Method
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter uppercase leading-none">
            Engineering <span className="text-[#0052ff]">Precision</span>
          </h2>
          <p className="font-serif-italic text-zinc-600 text-lg sm:text-xl leading-relaxed">
            Most agencies sell bloated retainers with junior staff. We deploy dedicated senior growth engineers on a transparent 4-stage sprint cycle.
          </p>
        </motion.div>

        {/* 4-Step Methodology Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-black bg-white p-6 sm:p-7 space-y-4 text-left hover:bg-blue-50/50 transition-colors shadow-[3px_3px_0px_0px_rgba(0,82,255,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black font-mono text-[#0052ff]">{step.num}</span>
                  <div className="p-2 border border-black bg-[#0a192f] text-white">
                    <Icon className="w-4 h-4 text-[#38bdf8]" />
                  </div>
                </div>

                <h3 className="text-base font-black uppercase tracking-wide text-black">{step.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Values / Guarantees Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 border-2 border-black bg-zinc-50 p-8 sm:p-10 text-left grid grid-cols-1 md:grid-cols-3 gap-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="space-y-2">
            <h4 className="text-sm font-black uppercase tracking-wide text-black flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#0052ff]" />
              <span>Senior Squad Execution</span>
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-medium">
              No junior account managers. You work directly with principal growth leads, senior software engineers, and lead designers.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-black uppercase tracking-wide text-black flex items-center gap-2">
              <Code className="w-4 h-4 text-[#0052ff]" />
              <span>Full Code & Asset IP</span>
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-medium">
              You own 100% of all code repositories, ad accounts, creative assets, and analytics setups from day one.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-black uppercase tracking-wide text-black flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0052ff]" />
              <span>Direct Slack Sync</span>
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-medium">
              Get asynchronous updates, real-time campaign alerts, and weekly video strategy reviews directly in your team's Slack.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
