import React, { useState, useEffect } from 'react';
import { Mountain, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Results', id: 'results' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Methodology', id: 'methodology' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-black ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-2 group focus:outline-none text-left"
          id="nav-logo-btn"
        >
          <div className="text-2xl font-black tracking-tighter uppercase italic text-black">
            NorthPeak<span className="not-italic font-light text-zinc-600">Digital</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-zinc-900">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="cursor-pointer hover:line-through transition-all text-zinc-900 focus:outline-none"
              id={`nav-link-${link.id}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-black text-white text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
            id="nav-audit-cta"
          >
            <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
            <span>Free Growth Audit</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border border-black text-black hover:bg-zinc-100 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-blue-600" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-black px-4 pt-4 pb-6 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider text-black hover:bg-zinc-100 transition-colors"
                id={`mobile-nav-link-${link.id}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-black">
            <button
              onClick={() => {
                onOpenAudit();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              id="mobile-nav-audit-cta"
            >
              <span>Schedule Free Growth Audit</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
