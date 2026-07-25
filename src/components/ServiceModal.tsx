import React from 'react';
import { X, CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectServiceForContact,
}) => {
  return (
    <AnimatePresence>
      {service && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white border-2 border-black p-6 sm:p-8 space-y-6 text-left max-h-[90vh] overflow-y-auto shadow-[6px_6px_0px_0px_rgba(0,82,255,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black text-white hover:bg-[#0052ff] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5 text-[#38bdf8]" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="inline-block px-2.5 py-0.5 bg-[#0052ff] text-white text-[10px] font-bold uppercase tracking-widest font-mono border border-black">
                {service.featuredMetric}
              </div>
              <h2 id="service-modal-title" className="text-3xl font-black uppercase tracking-tight text-black">
                {service.title}
              </h2>
            </div>

            {/* Full Description */}
            <p className="font-serif-italic text-zinc-700 text-base sm:text-lg leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Deliverables List */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#0052ff] font-mono">
                Included Deliverables & Scope
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 border border-black bg-blue-50/50 text-black text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0052ff] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline & Expected Outcome */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 border border-black bg-zinc-50 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0052ff] shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">Timeline</p>
                  <p className="text-xs font-black uppercase tracking-wide text-black">{service.timeline}</p>
                </div>
              </div>

              <div className="p-4 border border-black bg-zinc-50 flex items-center gap-3">
                <Target className="w-5 h-5 text-[#0052ff] shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">Target Outcome</p>
                  <p className="text-xs font-black uppercase tracking-wide text-black">{service.expectedOutcome}</p>
                </div>
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-4 border-t border-black flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs font-medium text-zinc-600">
                Ready to integrate this pillar into your growth engine?
              </p>
              <button
                onClick={() => {
                  onSelectServiceForContact(service.title);
                  onClose();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0a192f] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#0052ff] transition-colors border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <span>Inquire About {service.title.split('&')[0]}</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
