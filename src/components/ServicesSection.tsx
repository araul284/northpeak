import React, { useState } from 'react';
import { TrendingUp, Code2, Search, Palette, Zap, BarChart3, ArrowUpRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForContact,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'growth' | 'tech' | 'brand'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#0052ff]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#0052ff]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#0052ff]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#0052ff]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#0052ff]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#0052ff]" />;
      default:
        return <TrendingUp className="w-5 h-5 text-[#0052ff]" />;
    }
  };

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative border-b border-black overflow-hidden">
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
            — Core Agency Capabilities
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter uppercase leading-none">
            Six Pillars of <span className="text-[#0052ff]">Growth</span>
          </h2>
          <p className="font-serif-italic text-zinc-600 text-lg sm:text-xl leading-relaxed">
            Engineered solutions built for scale. Every service is governed by unit economics and measurable outcomes.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex border border-black bg-white p-1 gap-1 overflow-x-auto max-w-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {[
              { id: 'all', label: 'All 6 Pillars' },
              { id: 'growth', label: 'Growth & Ads' },
              { id: 'tech', label: 'Tech & Code' },
              { id: 'brand', label: 'Brand & CRO' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#0a192f] text-white'
                    : 'text-black hover:bg-blue-50'
                }`}
                id={`filter-tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 6 Services Grid with Scroll Entrance Sliding Motion */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="group border border-black bg-white hover:bg-blue-50/40 p-6 flex flex-col justify-between transition-colors text-left shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,52,255,1)]"
                id={`service-card-${service.id}`}
              >
                <div className="space-y-4">
                  {/* Header: Icon & Metric Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-2.5 border border-black bg-blue-50 group-hover:bg-[#0a192f] transition-colors">
                      <div className="group-hover:text-white transition-colors">
                        {renderIcon(service.iconName)}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 border border-black bg-[#0052ff] text-white font-mono text-[10px] font-bold uppercase tracking-widest">
                      {service.featuredMetric}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-black text-black uppercase tracking-tight group-hover:text-[#0052ff] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-zinc-600 leading-relaxed font-medium">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Top Deliverables Checklist */}
                  <div className="pt-3 space-y-2 border-t border-black">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Key Deliverables:</p>
                    <ul className="space-y-1.5 text-xs text-black">
                      {service.deliverables.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#0052ff] shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-black flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 font-mono">
                    {service.timeline}
                  </span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-black hover:text-[#0052ff] transition-colors"
                    id={`view-service-details-${service.id}`}
                  >
                    <span>Scope</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0052ff]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Service Details */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectServiceForContact={onSelectServiceForContact}
        />

      </div>
    </section>
  );
};
