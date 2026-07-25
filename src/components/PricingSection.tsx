import React, { useState } from 'react';
import { PRICING_PLANS_DATA } from '../data/agencyData';
import { Check, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white relative border-b border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] font-black text-[#0052ff]">
            — Transparent Investment
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter uppercase leading-none">
            Predictable <span className="text-[#0052ff]">Pricing</span>
          </h2>
          <p className="font-serif-italic text-zinc-600 text-lg sm:text-xl leading-relaxed">
            No percentage-of-spend markups or hidden fees. Choose the tier aligned with your growth horizon.
          </p>
        </motion.div>

        {/* Annual / Monthly Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className={`text-xs font-bold uppercase tracking-widest ${!isAnnual ? 'text-black' : 'text-zinc-500'}`}>
            Monthly Billing
          </span>
          
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-12 h-6 border border-black bg-zinc-200 p-0.5 transition-colors focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle annual billing discount"
            id="billing-toggle"
          >
            <div
              className={`w-4 h-4 bg-[#0052ff] transition-transform duration-150 ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${isAnnual ? 'text-black' : 'text-zinc-500'}`}>
              Annual Partnership
            </span>
            <span className="px-2 py-0.5 border border-black bg-[#0052ff] text-white text-[10px] font-mono font-bold uppercase tracking-widest">
              SAVE 20%
            </span>
          </div>
        </motion.div>

        {/* 3 Tiers Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS_DATA.map((plan, idx) => {
            const price = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className={`relative border-2 border-black p-7 sm:p-8 flex flex-col justify-between text-left transition-all ${
                  plan.popular
                    ? 'bg-[#0a192f] text-white shadow-[6px_6px_0px_0px_rgba(0,82,255,1)] lg:-translate-y-2'
                    : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }`}
                id={`pricing-card-${plan.id}`}
              >
                {/* Popular Ribbon */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 border border-black bg-[#0052ff] text-white font-black text-[10px] uppercase tracking-widest shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>Most Popular Growth Tier</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Tagline */}
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{plan.name}</h3>
                    <p className={`mt-2 text-xs font-medium min-h-[36px] leading-relaxed ${plan.popular ? 'text-blue-100/90' : 'text-zinc-600'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className={`pt-2 border-t ${plan.popular ? 'border-blue-900' : 'border-black'}`}>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
                        ${price.toLocaleString()}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? 'text-[#38bdf8]' : 'text-zinc-500'}`}>/ mo</span>
                    </div>
                    <p className={`text-[10px] uppercase font-mono tracking-wider mt-1 ${plan.popular ? 'text-blue-200/80' : 'text-zinc-500'}`}>
                      {isAnnual ? 'Billed annually' : 'Billed monthly, cancel anytime'}
                    </p>
                  </div>

                  {/* Ideal For */}
                  <div className={`p-3 border text-xs font-medium ${plan.popular ? 'border-blue-900 bg-[#0e223d] text-blue-100' : 'border-black bg-zinc-50 text-black'}`}>
                    <strong className={`uppercase font-bold tracking-wider ${plan.popular ? 'text-[#38bdf8]' : 'text-[#0052ff]'}`}>Best for:</strong> {plan.idealFor}
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3">
                    <p className={`text-[10px] font-bold uppercase tracking-widest font-mono ${plan.popular ? 'text-[#38bdf8]' : 'text-zinc-500'}`}>
                      What’s Included:
                    </p>
                    <ul className="space-y-2.5 text-xs font-medium">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-[#38bdf8]' : 'text-[#0052ff]'}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Not Included (if any) */}
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2">
                        <ul className="space-y-2 text-xs font-medium opacity-60">
                          {plan.notIncluded.map((feat, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <X className="w-3.5 h-3.5 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div className={`pt-8 mt-8 border-t ${plan.popular ? 'border-blue-900' : 'border-black'}`}>
                  <button
                    onClick={() => onSelectTier(plan.name)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 font-bold text-xs uppercase tracking-widest transition-colors border border-black ${
                      plan.popular
                        ? 'bg-[#0052ff] text-white hover:bg-[#1a66ff]'
                        : 'bg-[#0a192f] text-white hover:bg-[#0052ff]'
                    }`}
                    id={`pricing-cta-${plan.id}`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className={`w-4 h-4 ${plan.popular ? 'text-[#38bdf8]' : 'text-[#38bdf8]'}`} />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-3xl mx-auto p-5 border border-black bg-blue-50/60 flex items-center justify-center gap-3 text-xs text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <ShieldCheck className="w-5 h-5 text-[#0052ff] shrink-0" />
          <span>
            <strong className="uppercase tracking-wider text-[#0052ff]">100% Performance Guarantee:</strong> If we do not hit agreed campaign KPIs within the first 60 days, we work for free until we do.
          </span>
        </motion.div>

      </div>
    </section>
  );
};
