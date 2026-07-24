export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  timeline: string;
  expectedOutcome: string;
  category: 'growth' | 'tech' | 'brand';
  featuredMetric: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  serviceUsed: string;
  metric: string;
  metricLabel: string;
  summary: string;
  quote: string;
  author: string;
  authorRole: string;
  avatarUrl: string;
  logoText: string;
  tags: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  idealFor: string;
  ctaText: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  companyName: string;
  serviceInterest: string;
  budgetRange: string;
  message: string;
  agreeTerms: boolean;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  companyName?: string;
  serviceInterest?: string;
  budgetRange?: string;
  message?: string;
  agreeTerms?: string;
}
