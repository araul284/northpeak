import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ResultsSection } from './components/ResultsSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Paid Acquisition & Growth Ads');
  const [customContactNote, setCustomContactNote] = useState<string>('');

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenAudit = () => {
    handleNavigate('contact');
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    setCustomContactNote(`Inquiry regarding the ${serviceTitle} pillar.`);
    handleNavigate('contact');
  };

  const handleSelectPricingTier = (tierName: string) => {
    setSelectedServiceForContact('Full Growth Transformation (Multi-Pillar)');
    setCustomContactNote(`Interested in the ${tierName} plan.`);
    handleNavigate('contact');
  };

  const handleOpenAuditWithCalcData = (monthlyRev: number, monthlySpend: number) => {
    setSelectedServiceForContact('Full Growth Transformation (Multi-Pillar)');
    setCustomContactNote(`Estimated Growth Brief - Current Monthly Revenue: $${monthlyRev.toLocaleString()}, Current Monthly Spend: $${monthlySpend.toLocaleString()}`);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-black selection:text-white antialiased overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar
        onNavigate={handleNavigate}
        onOpenAudit={handleOpenAudit}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onOpenAudit={handleOpenAudit}
          onNavigate={handleNavigate}
        />

        {/* Core Services Section (6 Pillars) */}
        <ServicesSection
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* Results, Case Studies & Interactive Growth Estimator */}
        <ResultsSection
          onOpenAuditWithData={handleOpenAuditWithCalcData}
        />

        {/* Pricing Tiers (3 Tiers with Annual Toggle) */}
        <PricingSection
          onSelectTier={handleSelectPricingTier}
        />

        {/* About & The NorthPeak Methodology */}
        <AboutSection />

        {/* Contact Form with Client-Side Validation & FAQs */}
        <ContactSection
          initialService={selectedServiceForContact}
          customNote={customContactNote}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}