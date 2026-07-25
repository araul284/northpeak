import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { TRUST_CLIENTS } from '../data/agencyData';

interface HeroProps {
  onOpenAudit: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-white border-b border-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="text-[11px] uppercase tracking-[0.25em] font-black text-[#0052ff]">
              — The Agency of Ascent
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tighter uppercase leading-[0.88]">
              Scaling Your<br />
              <span className="text-[#0052ff]">Digital Summit.</span>
            </motion.h1>

            {/* Serif Italic Subtitle */}
            <motion.p variants={itemVariants} className="font-serif-italic text-lg sm:text-xl text-zinc-600 max-w-xl leading-relaxed">
              We combine precision engineering with creative altitude to push high-growth brands beyond the baseline into market leadership.
            </motion.p>

            {/* Feature Highlights */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-bold uppercase tracking-wider text-zinc-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff] shrink-0" />
                <span>3.4x ROAS Lift</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff] shrink-0" />
                <span>Zero Lock-In</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff] shrink-0" />
                <span>Senior Squad Only</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0a192f] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#0052ff] transition-colors border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                id="hero-primary-cta"
              >
                <span>Schedule Free Growth Audit</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </button>

              <button
                onClick={() => onNavigate('results')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-black text-black font-bold uppercase text-xs tracking-widest hover:bg-blue-50 hover:text-[#0052ff] transition-colors"
                id="hero-secondary-cta"
              >
                <span>View Case Studies</span>
              </button>
            </motion.div>

            {/* Rating & Social Proof summary */}
            <motion.div variants={itemVariants} className="pt-4 flex items-center gap-4 text-xs text-zinc-500 border-t border-zinc-200">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client Avatar 1" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client Avatar 2" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Client Avatar 3" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-black ml-1 font-mono">4.9 / 5.0</span>
                </div>
                <p className="text-zinc-500 font-medium">Trusted by 120+ founders & marketing executives</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Metric Grid */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="border border-black bg-zinc-50 p-6 sm:p-8 space-y-6 text-left shadow-[4px_4px_0px_0px_rgba(10,25,47,0.25)]">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-black">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#0a192f] text-white">
                    <TrendingUp className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-black">Client Portfolio Metrics</h3>
                    <p className="text-[10px] text-zinc-500 font-mono">Real-Time Aggregated Performance</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-[#0052ff] text-white text-[10px] font-mono font-bold uppercase tracking-widest border border-black">
                  LIVE
                </span>
              </div>

              {/* Editorial Grid of Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-black space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Attributed Revenue</p>
                  <p className="text-2xl sm:text-3xl font-black text-black font-mono">$42.8M+</p>
                  <p className="text-[10px] text-[#0052ff] font-bold uppercase tracking-wider">↑ +28.4% YoY</p>
                </div>

                <div className="p-4 bg-white border border-black space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Average ROAS</p>
                  <p className="text-2xl sm:text-3xl font-black text-[#0052ff] font-mono">3.42x</p>
                  <p className="text-[10px] text-zinc-500 font-mono">Target: 2.5x threshold</p>
                </div>

                <div className="p-4 bg-white border border-black space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Client Retention</p>
                  <p className="text-2xl sm:text-3xl font-black text-black font-mono">98.4%</p>
                  <p className="text-[10px] text-zinc-500 font-mono">Month-over-month</p>
                </div>

                <div className="p-4 bg-white border border-black space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Page Load Speed</p>
                  <p className="text-2xl sm:text-3xl font-black text-black font-mono">0.4s</p>
                  <p className="text-[10px] text-[#0052ff] font-bold uppercase tracking-wider">Top 1% Global</p>
                </div>
              </div>

              {/* Highlight Box */}
              <div className="p-4 bg-[#0a192f] text-white flex items-center gap-3 border border-black">
                <Sparkles className="w-5 h-5 text-[#38bdf8] shrink-0" />
                <p className="text-xs font-medium">
                  <strong className="text-[#38bdf8] uppercase tracking-wider">The NorthPeak Method:</strong> High-performance code paired with mathematical ad scaling.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Client Logos Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-black"
        >
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Empowering Market Leaders & High-Growth Scale-Ups
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {TRUST_CLIENTS.map((client, idx) => (
              <div key={idx} className="text-black font-black text-base sm:text-lg uppercase tracking-widest hover:text-[#0052ff] transition-colors cursor-default">
                {client.label}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};