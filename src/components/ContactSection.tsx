import React, { useState } from 'react';
import { FAQS_DATA } from '../data/agencyData';
import { ContactFormData, FormErrors } from '../types';
import { Send, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Sparkles, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  initialService?: string;
  initialBudget?: string;
  customNote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Growth Marketing & Ads',
  initialBudget = '$10k - $25k/mo',
  customNote = '',
}) => {
  // Form State
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    companyName: '',
    serviceInterest: initialService,
    budgetRange: initialBudget,
    message: customNote,
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState('');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Sync if initial props change
  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceInterest: initialService }));
    }
  }, [initialService]);

  React.useEffect(() => {
    if (customNote) {
      setFormData(prev => ({ ...prev, message: customNote }));
    }
  }, [customNote]);

  // Client-Side Validation Logic
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.';
    }

    // Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid business email address.';
    }

    // Service Interest
    if (!formData.serviceInterest) {
      newErrors.serviceInterest = 'Please select a primary service interest.';
    }

    // Budget Range
    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select an estimated budget range.';
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your growth goals.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter at least 10 characters so we can prepare.';
    }

    // Terms Checkbox
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to our privacy policy to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error on change for this field
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomRef = 'NP-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRefId(randomRef);
    }, 1200);
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      serviceInterest: 'Growth Marketing & Ads',
      budgetRange: '$10k - $25k/mo',
      message: '',
      agreeTerms: false,
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative border-b border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] font-black text-[#0052ff]">
            — Initiate Growth Audit
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter uppercase leading-none">
            Ready To Claim Your <span className="text-[#0052ff]">Peak?</span>
          </h2>
          <p className="font-serif-italic text-zinc-600 text-lg sm:text-xl leading-relaxed">
            Complete the audit form below. A Senior Strategist will analyze your digital footprint and return a custom growth roadmap within 24 hours.
          </p>
        </motion.div>

        {/* Grid: Contact Form (Left 7 Cols) & Info/FAQ (Right 5 Cols) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 border-2 border-black bg-white p-6 sm:p-10 text-left relative shadow-[5px_5px_0px_0px_rgba(0,82,255,1)]"
          >
            
            {isSuccess ? (
              /* Success State */
              <div className="space-y-6 py-8 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-[#0a192f] text-white border border-black flex items-center justify-center mx-auto shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <CheckCircle2 className="w-10 h-10 text-[#38bdf8]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase text-black">Growth Audit Request Received</h3>
                  <p className="text-xs text-zinc-600 max-w-md mx-auto font-medium">
                    Thank you, <strong className="text-black">{formData.fullName}</strong>. Your audit brief has been assigned to our principal strategist.
                  </p>
                </div>

                <div className="p-4 border border-black bg-blue-50/60 text-left max-w-md mx-auto space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-zinc-500 font-bold uppercase">Ticket ID:</span>
                    <span className="text-[#0052ff] font-bold">{submittedRefId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 font-bold uppercase">Target Service:</span>
                    <span className="text-black font-bold">{formData.serviceInterest}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 font-bold uppercase">Expected Turnaround:</span>
                    <span className="text-black font-bold">&lt; 2 Hours</span>
                  </div>
                </div>

                <button
                  onClick={handleResetForm}
                  className="px-6 py-3 bg-[#0a192f] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#0052ff] transition-colors border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  id="contact-reset-btn"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              /* Actual Interactive Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-black">
                      Full Name <span className="text-[#0052ff]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 border bg-zinc-50 text-black placeholder-zinc-400 text-xs font-medium focus:bg-white focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-red-600 bg-red-50'
                          : 'border-black focus:border-[#0052ff]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[10px] text-red-600 font-bold flex items-center gap-1 mt-1 uppercase tracking-wider">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-black">
                      Business Email <span className="text-[#0052ff]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 border bg-zinc-50 text-black placeholder-zinc-400 text-xs font-medium focus:bg-white focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-600 bg-red-50'
                          : 'border-black focus:border-[#0052ff]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-600 font-bold flex items-center gap-1 mt-1 uppercase tracking-wider">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-black">
                      Company / Website URL
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. AcmeCorp.com"
                      className="w-full px-4 py-3 border border-black bg-zinc-50 text-black placeholder-zinc-400 text-xs font-medium focus:bg-white focus:outline-none transition-colors focus:border-[#0052ff]"
                    />
                  </div>

                  {/* Service Interest Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="serviceInterest" className="block text-xs font-bold uppercase tracking-wider text-black">
                      Primary Service Interest <span className="text-[#0052ff]">*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-black bg-zinc-50 text-black text-xs font-bold uppercase tracking-wider focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="Paid Acquisition & Growth Ads">Paid Acquisition & Growth Ads</option>
                      <option value="Custom Web & Product Development">Custom Web & Product Development</option>
                      <option value="Search Engine & AI Search Optimization">Search Engine & AI Search Optimization</option>
                      <option value="Brand Strategy & Visual Identity">Brand Strategy & Visual Identity</option>
                      <option value="Conversion Rate Optimization (CRO)">Conversion Rate Optimization (CRO)</option>
                      <option value="Data Analytics & Revenue Attribution">Data Analytics & Revenue Attribution</option>
                      <option value="Full Growth Transformation (Multi-Pillar)">Full Growth Transformation (Multi-Pillar)</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range Radio Pills */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black">
                    Estimated Monthly Ad / Growth Budget <span className="text-[#0052ff]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      '$2.5k - $5k/mo',
                      '$5k - $15k/mo',
                      '$15k - $50k/mo',
                      '$50k+/mo',
                    ].map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, budgetRange: range }));
                          if (errors.budgetRange) {
                            setErrors(prev => ({ ...prev, budgetRange: undefined }));
                          }
                        }}
                        className={`py-2.5 px-3 border text-[11px] font-bold uppercase tracking-wider transition-colors ${
                          formData.budgetRange === range
                            ? 'bg-[#0a192f] text-white border-black'
                            : 'bg-zinc-50 border-black text-black hover:bg-blue-50'
                        }`}
                        id={`budget-btn-${range.replace(/\s+/g, '')}`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                  {errors.budgetRange && (
                    <p className="text-[10px] text-red-600 font-bold uppercase tracking-wider">{errors.budgetRange}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-black">
                    Project Details & Primary Goals <span className="text-[#0052ff]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your current marketing channels, main challenges, and target revenue timeline..."
                    className={`w-full px-4 py-3 border bg-zinc-50 text-black placeholder-zinc-400 text-xs font-medium focus:bg-white focus:outline-none transition-colors ${
                      errors.message
                        ? 'border-red-600 bg-red-50'
                        : 'border-black focus:border-[#0052ff]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[10px] text-red-600 font-bold flex items-center gap-1 mt-1 uppercase tracking-wider">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="space-y-1">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-zinc-600 font-medium">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="mt-0.5 border-black bg-zinc-100 text-[#0052ff] focus:ring-0 w-4 h-4 cursor-pointer accent-[#0052ff]"
                      id="agreeTerms"
                    />
                    <span>
                      I agree to allow NorthPeak Digital to analyze provided domain details under non-disclosure terms. We never spam or sell your data.
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-[10px] text-red-600 font-bold uppercase tracking-wider pl-7">{errors.agreeTerms}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 bg-[#0a192f] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#0052ff] disabled:opacity-50 transition-colors border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Growth Brief...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit Growth Audit Brief</span>
                      <Send className="w-4 h-4 text-[#38bdf8]" />
                    </>
                  )}
                </button>

              </form>
            )}

          </motion.div>

          {/* Right Column: Direct Contact & FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            
            {/* Quick Contact Info Card */}
            <div className="border border-black bg-white p-6 sm:p-8 space-y-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-lg font-black uppercase tracking-tight text-black flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#0052ff]" />
                <span>Direct Access Points</span>
              </h3>

              <div className="space-y-3 text-xs font-medium">
                <div className="flex items-center gap-3 p-3 border border-black bg-blue-50/40">
                  <Mail className="w-4 h-4 text-[#0052ff] shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Email Enquiries</p>
                    <a href="mailto:hello@northpeakdigital.com" className="text-black font-bold hover:underline">
                      hello@northpeakdigital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border border-black bg-blue-50/40">
                  <Phone className="w-4 h-4 text-[#0052ff] shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Strategy Desk</p>
                    <p className="text-black font-bold">+1 (800) 482-9012</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border border-black bg-blue-50/40">
                  <MapPin className="w-4 h-4 text-[#0052ff] shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Headquarters</p>
                    <p className="text-black font-bold">San Francisco, CA & Denver, CO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div id="faq" className="border border-black bg-white p-6 sm:p-8 space-y-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-lg font-black uppercase tracking-tight text-black flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0052ff]" />
                <span>Frequently Asked Questions</span>
              </h3>

              <div className="space-y-2">
                {FAQS_DATA.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border border-black bg-zinc-50 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none"
                        id={`faq-btn-${idx}`}
                      >
                        <span className="text-xs font-bold uppercase tracking-wide text-black">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#0052ff] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-black shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-0 text-xs text-zinc-600 leading-relaxed border-t border-black mt-1 pt-3 font-medium bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
