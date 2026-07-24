import React, { useState } from 'react';
import { Mountain, ArrowUp, Send, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-zinc-600 text-xs border-t border-black pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center border border-black">
                <Mountain className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-xl font-black tracking-tight uppercase text-black">
                NorthPeak<span className="text-blue-600">.</span>
              </span>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed max-w-sm font-medium">
              NorthPeak Digital is a premier growth marketing & custom software engineering agency. We scale enterprise brands with predictive unit economics and bespoke tech.
            </p>

            <div className="text-[10px] text-zinc-500 space-y-1 font-mono uppercase font-bold">
              <p>SF HQ: 500 Howard St, Suite 400</p>
              <p>Denver: 1600 California St, 10th Fl</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3 text-left">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-black">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: 'Core Services', id: 'services' },
                { name: 'Case Studies', id: 'results' },
                { name: 'Pricing Tiers', id: 'pricing' },
                { name: 'Methodology', id: 'methodology' },
                { name: 'FAQs', id: 'faq' },
                { name: 'Contact Form', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-blue-600 uppercase tracking-wider font-bold transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3 text-left">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-black">
              Pillars
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-600">
              <li>Paid Acquisition & Ads</li>
              <li>Custom React Engineering</li>
              <li>Search Engine Optimization</li>
              <li>Brand Visual Identity</li>
              <li>Conversion Optimization</li>
              <li>Revenue Attribution</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3 text-left">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-black">
              The Peak Brief
            </h4>
            <p className="text-xs text-zinc-600 font-medium">
              Join 12,000+ marketing executives receiving our weekly breakdown on ad algorithms & CRO tests.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 border border-black bg-zinc-50 text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span>Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex gap-1">
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-black bg-zinc-50 text-xs text-black placeholder-zinc-400 focus:bg-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-black text-white hover:bg-zinc-800 font-bold uppercase"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-4 h-4 text-blue-400" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-zinc-600">
          <p>© {new Date().getFullYear()} NorthPeak Digital LLC. All rights reserved.</p>
                    <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Built for Digital Heroes Training Task
          </a>

          <div className="flex items-center gap-6 font-bold uppercase tracking-wider text-[10px]">
            <span className="hover:text-black cursor-pointer">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer">Terms of Service</span>
            <span className="hover:text-black cursor-pointer">SOC-2 Security</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 px-3 border border-black bg-zinc-50 text-black hover:bg-black hover:text-white transition-colors flex items-center gap-1.5 font-bold uppercase text-[10px] tracking-widest"
            id="back-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
