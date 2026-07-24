import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/agencyData';
import { Star, Quote, Calculator, TrendingUp, DollarSign, ArrowRight, Award } from 'lucide-react';

interface ResultsSectionProps {
  onOpenAuditWithData?: (revenue: number, spend: number) => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenAuditWithData }) => {
  const [activeTab, setActiveTab] = useState<'case-studies' | 'calculator'>('case-studies');

  // ROI Calculator State
  const [monthlyRev, setMonthlyRev] = useState<number>(50000);
  const [monthlySpend, setMonthlySpend] = useState<number>(12000);

  // Calculations
  const projected12MoRevLift = Math.round(monthlyRev * 12 * 0.42); // 42% average top-line growth
  const projectedROAS = (3.4).toFixed(1);
  const projectedExtraAdRev = Math.round(monthlySpend * 12 * 3.4);

  return (
    <section id="results" className="py-20 sm:py-28 bg-white relative border-b border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-[11px] uppercase tracking-[0.25em] font-black text-blue-600">
            — Measured Impact & Case Studies
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter uppercase leading-none">
            Proven <span className="text-blue-600">Performance</span>
          </h2>
          <p className="font-serif-italic text-zinc-600 text-lg sm:text-xl leading-relaxed">
            We measure our success strictly by client revenue expansion, enterprise valuation, and market capture.
          </p>
        </div>

        {/* Big Numbers Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { metric: '$42M+', label: 'Attributed Revenue', sub: 'In 2025–2026' },
            { metric: '3.4x', label: 'Average ROAS Lift', sub: 'Across 120+ Brands' },
            { metric: '98.4%', label: 'Client Retention', sub: 'Month-over-month' },
            { metric: '4.2x', label: 'Organic Search Surge', sub: 'In 6-Month Windows' },
          ].map((stat, i) => (
            <div key={i} className="p-5 sm:p-6 border border-black bg-zinc-50 text-center space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-black font-mono tracking-tight">{stat.metric}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">{stat.label}</p>
              <p className="text-[10px] text-zinc-500 font-mono">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* View Mode Toggle: Case Studies vs. Interactive ROI Calculator */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex border border-black bg-white p-1 gap-1">
            <button
              onClick={() => setActiveTab('case-studies')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                activeTab === 'case-studies'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-zinc-100'
              }`}
              id="tab-case-studies"
            >
              <Award className="w-4 h-4 text-blue-400" />
              <span>Verified Case Studies</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                activeTab === 'calculator'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-zinc-100'
              }`}
              id="tab-calculator"
            >
              <Calculator className="w-4 h-4 text-blue-400" />
              <span>Interactive Estimator</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Case Studies & Testimonials */}
        {activeTab === 'case-studies' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CASE_STUDIES_DATA.map((cs) => (
              <div
                key={cs.id}
                className="border border-black bg-white p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left"
              >
                <div className="space-y-4">
                  {/* Metric Ribbon */}
                  <div className="flex items-center justify-between pb-4 border-b border-black">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                      {cs.industry}
                    </span>
                    <span className="text-xl font-black text-blue-600 font-mono">
                      {cs.metric}
                    </span>
                  </div>

                  {/* Client Name & Summary */}
                  <div>
                    <h3 className="text-xl font-black uppercase text-black">{cs.client}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mt-0.5">{cs.serviceUsed}</p>
                    <p className="mt-3 text-xs text-zinc-600 leading-relaxed font-medium">
                      {cs.summary}
                    </p>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="p-4 border border-black bg-zinc-50 relative space-y-2">
                    <Quote className="w-4 h-4 text-blue-600" />
                    <p className="font-serif-italic text-xs text-black leading-relaxed">
                      "{cs.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Metadata */}
                <div className="pt-4 border-t border-black flex items-center gap-3">
                  <img
                    src={cs.avatarUrl}
                    alt={cs.author}
                    className="w-10 h-10 border border-black object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase text-black">{cs.author}</p>
                    <p className="text-[10px] font-medium text-zinc-500">{cs.authorRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Interactive ROI Estimator */}
        {activeTab === 'calculator' && (
          <div className="mt-10 max-w-4xl mx-auto border-2 border-black bg-white p-6 sm:p-10 space-y-8 text-left">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                <span>Estimate Your 12-Month Growth Potential</span>
              </h3>
              <p className="font-serif-italic text-zinc-600 text-sm">
                Adjust your baseline metrics to calculate estimated revenue lift and ROAS with NorthPeak Digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Controls */}
              <div className="space-y-6">
                {/* Control 1: Monthly Revenue Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold uppercase tracking-wider text-black">Current Monthly Revenue</label>
                    <span className="font-mono text-blue-600 font-bold">${monthlyRev.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={monthlyRev}
                    onChange={(e) => setMonthlyRev(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-200 rounded-none appearance-none cursor-pointer accent-black"
                    id="slider-monthly-rev"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>$10k</span>
                    <span>$250k</span>
                    <span>$500k+</span>
                  </div>
                </div>

                {/* Control 2: Monthly Ad / Tech Spend Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold uppercase tracking-wider text-black">Current Marketing Spend</label>
                    <span className="font-mono text-blue-600 font-bold">${monthlySpend.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="100000"
                    step="1000"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-200 rounded-none appearance-none cursor-pointer accent-black"
                    id="slider-monthly-spend"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>$2k</span>
                    <span>$50k</span>
                    <span>$100k+</span>
                  </div>
                </div>
              </div>

              {/* Live Output Card */}
              <div className="border border-black bg-zinc-50 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">Projected Outcomes</span>
                  
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">Estimated 12-Month Revenue Lift</p>
                    <p className="text-3xl font-black text-blue-600 font-mono">
                      +${projected12MoRevLift.toLocaleString()}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">Projected ROAS</p>
                      <p className="text-xl font-black text-black font-mono">{projectedROAS}x</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">12-Mo Ad Revenue</p>
                      <p className="text-xl font-black text-black font-mono">${projectedExtraAdRev.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (onOpenAuditWithData) {
                      onOpenAuditWithData(monthlyRev, monthlySpend);
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                  id="calc-lock-in-cta"
                >
                  <span>Apply These Projections To Audit</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
