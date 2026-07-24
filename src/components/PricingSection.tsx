import React, { useState } from 'react';
import { PRICING_PLANS_DATA } from '../data/agencyData';
import { Check, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white relative border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-[11px] uppercase tracking-[0.25em] font-black text-blue-600">
            — Transparent Investment
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter uppercase leading-none">
            Predictable <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="font-serif-italic text-zinc-600 text-lg sm:text-xl leading-relaxed">
            No percentage-of-spend markups or hidden fees. Choose the tier aligned with your growth horizon.
          </p>
        </div>

        {/* Annual / Monthly Toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className={`text-xs font-bold uppercase tracking-widest ${!isAnnual ? 'text-black' : 'text-zinc-500'}`}>
            Monthly Billing
          </span>
          
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-12 h-6 border border-black bg-zinc-200 p-0.5 transition-colors focus:outline-none"
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle annual billing discount"
            id="billing-toggle"
          >
            <div
              className={`w-4 h-4 bg-black transition-transform duration-150 ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${isAnnual ? 'text-black' : 'text-zinc-500'}`}>
              Annual Partnership
            </span>
            <span className="px-2 py-0.5 border border-black bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest">
              SAVE 20%
            </span>
          </div>
        </div>

        {/* 3 Tiers Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS_DATA.map((plan) => {
            const price = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative border-2 border-black p-7 sm:p-8 flex flex-col justify-between text-left transition-all ${
                  plan.popular
                    ? 'bg-black text-white lg:-translate-y-2'
                    : 'bg-white text-black'
                }`}
                id={`pricing-card-${plan.id}`}
              >
                {/* Popular Ribbon */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 border border-black bg-white text-black font-black text-[10px] uppercase tracking-widest shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Most Popular Growth Tier</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Tagline */}
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{plan.name}</h3>
                    <p className={`mt-2 text-xs font-medium min-h-[36px] leading-relaxed ${plan.popular ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className={`pt-2 border-t ${plan.popular ? 'border-zinc-800' : 'border-black'}`}>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
                        ${price.toLocaleString()}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>/ mo</span>
                    </div>
                    <p className={`text-[10px] uppercase font-mono tracking-wider mt-1 ${plan.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {isAnnual ? 'Billed annually' : 'Billed monthly, cancel anytime'}
                    </p>
                  </div>

                  {/* Ideal For */}
                  <div className={`p-3 border text-xs font-medium ${plan.popular ? 'border-zinc-800 bg-zinc-900 text-zinc-300' : 'border-black bg-zinc-50 text-black'}`}>
                    <strong className="uppercase font-bold tracking-wider text-blue-400">Best for:</strong> {plan.idealFor}
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3">
                    <p className={`text-[10px] font-bold uppercase tracking-widest font-mono ${plan.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      What’s Included:
                    </p>
                    <ul className="space-y-2.5 text-xs font-medium">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-blue-400' : 'text-blue-600'}`} />
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
                <div className={`pt-8 mt-8 border-t ${plan.popular ? 'border-zinc-800' : 'border-black'}`}>
                  <button
                    onClick={() => onSelectTier(plan.name)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 font-bold text-xs uppercase tracking-widest transition-colors ${
                      plan.popular
                        ? 'bg-white text-black hover:bg-zinc-200'
                        : 'bg-black text-white hover:bg-zinc-800'
                    }`}
                    id={`pricing-cta-${plan.id}`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-5 border border-black bg-zinc-50 flex items-center justify-center gap-3 text-xs text-black">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
          <span>
            <strong className="uppercase tracking-wider">100% Performance Guarantee:</strong> If we do not hit agreed campaign KPIs within the first 60 days, we work for free until we do.
          </span>
        </div>

      </div>
    </section>
  );
};
