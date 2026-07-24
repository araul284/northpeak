import { ServiceItem, CaseStudy, PricingPlan } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'paid-acquisition',
    title: 'Paid Acquisition & Growth Ads',
    shortDesc: 'Scale revenue predictably across Meta, Google Ads, TikTok, and LinkedIn with data-driven creative testing.',
    fullDesc: 'We construct hyper-targeted paid media acquisition campaigns designed to maximize Return on Ad Spend (ROAS). Our team manages end-to-end creative production, audience segmentation, real-time attribution modeling, and aggressive daily budget scaling.',
    iconName: 'TrendingUp',
    category: 'growth',
    deliverables: [
      'Multi-channel Ad Account Audit & Setup',
      'High-converting Ad Creative & Video Scripting',
      'Weekly Automated ROAS & CAC Reporting',
      'Custom Landing Page Variations'
    ],
    timeline: '2 - 4 Weeks Setup, Ongoing Weekly Sprints',
    expectedOutcome: 'Average 3.4x ROAS increase within 90 days',
    featuredMetric: '+310% ROAS Growth'
  },
  {
    id: 'web-engineering',
    title: 'Custom Web & Product Development',
    shortDesc: 'Blazing-fast, ultra-responsive websites and web apps built with modern React, Tailwind, and headless CMS solutions.',
    fullDesc: 'We engineer bespoke digital platforms that pair conversion-focused UI/UX with enterprise-grade web performance. From lightning-fast marketing landing pages to full-scale web applications, every pixel is crafted for speed and security.',
    iconName: 'Code2',
    category: 'tech',
    deliverables: [
      'Custom React/Vite/Next.js Web Applications',
      'Headless CMS Integration (Sanity / Contentful)',
      'Sub-second Mobile Load Times (98+ Core Web Vitals)',
      'Interactive Web Components & Animations'
    ],
    timeline: '4 - 8 Weeks to Launch',
    expectedOutcome: '99.9% Uptime & 2.5x higher conversion velocity',
    featuredMetric: '99+ Lighthouse Score'
  },
  {
    id: 'seo-acceleration',
    title: 'Search Engine & AI Search Optimization',
    shortDesc: 'Dominate organic search results and generative AI search engines with technical SEO and authority building.',
    fullDesc: 'Search is evolving beyond Google to AI-native search engines like ChatGPT and Gemini. We combine technical site architecture fixes, programmatic content engines, and high-domain backlink outreach to rank your brand at the top.',
    iconName: 'Search',
    category: 'growth',
    deliverables: [
      'Comprehensive Technical SEO Architecture Audit',
      'Generative Engine Optimization (GEO) Strategy',
      'High-Authority Backlink Acquisition',
      'Monthly Keyword Ranking & Organic Traffic Reports'
    ],
    timeline: 'Ongoing (Initial Results in 60-90 Days)',
    expectedOutcome: 'Average 4.2x organic traffic surge in 6 months',
    featuredMetric: '4.2x Organic Growth'
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy & Visual Identity',
    shortDesc: 'Position your brand as an undisputed industry leader with custom visual systems, logo design, and messaging.',
    fullDesc: 'Stand out in crowded markets. We distill your brand’s core positioning into compelling visual identities, tone-of-voice frameworks, complete design systems, and pitch-ready sales collateral.',
    iconName: 'Palette',
    category: 'brand',
    deliverables: [
      'Brand Identity Guidelines & Logo Design System',
      'Typography & Color Palette Architecture',
      'Marketing Collateral & Pitch Deck Templates',
      'Tone of Voice & Messaging Bible'
    ],
    timeline: '3 - 5 Weeks',
    expectedOutcome: 'Cohesive enterprise brand presence across all touchpoints',
    featuredMetric: '100% Brand Consistency'
  },
  {
    id: 'cro-funnels',
    title: 'Conversion Rate Optimization (CRO)',
    shortDesc: 'Turn existing visitor traffic into paying customers through rigorous A/B testing, heatmaps, and funnel redesigns.',
    fullDesc: 'Don’t throw money at cold traffic until your bucket stops leaking. We analyze visitor behavior, user session recordings, and checkout friction points to systematically increase your site’s conversion rate.',
    iconName: 'Zap',
    category: 'growth',
    deliverables: [
      'User Heatmap & Session Recording Diagnostics',
      'Hypothesis-Driven A/B Testing Matrix',
      'Frictionless Checkout & Onboarding Redesign',
      'Micro-copy & Value Proposition Optimization'
    ],
    timeline: 'Monthly Sprint Cycles',
    expectedOutcome: 'Average +48% increase in visitor-to-lead conversion',
    featuredMetric: '+48% Conversion Lift'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Revenue Attribution',
    shortDesc: 'Gain total clarity on customer acquisition cost, customer lifetime value, and channel revenue contribution.',
    fullDesc: 'Eliminate marketing guesswork. We build custom multi-touch revenue attribution models, configure GA4 / server-side tagging, and build real-time executive dashboards so you know exactly which dollar produces profit.',
    iconName: 'BarChart3',
    category: 'tech',
    deliverables: [
      'Server-side Tagging & First-Party Data Setup',
      'Custom Executive Analytics Dashboards',
      'Multi-Touch Revenue Attribution Modeling',
      'LTV & Churn Predictive Analytics'
    ],
    timeline: '2 - 3 Weeks Initial Setup',
    expectedOutcome: '100% accurate attribution tracking across paid & organic',
    featuredMetric: '100% Data Accuracy'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'fintech-surge',
    client: 'ApexPay Fintech',
    industry: 'B2B SaaS / Financial Tech',
    serviceUsed: 'Paid Acquisition & Web Development',
    metric: '+340%',
    metricLabel: 'Qualified Demo Pipeline',
    summary: 'Redesigned ApexPay’s web experience and revamped LinkedIn & Meta ad funnels, reducing customer acquisition costs by 42%.',
    quote: 'NorthPeak Digital transformed our acquisition model in less than 60 days. Our sales team is receiving the highest quality inbound demos we’ve ever seen.',
    author: 'Elena Rostova',
    authorRole: 'Chief Marketing Officer, ApexPay',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    logoText: 'ApexPay',
    tags: ['Paid Media', 'React App', 'B2B SaaS']
  },
  {
    id: 'ecom-scale',
    client: 'Lumina Home Apparel',
    industry: 'Direct-To-Consumer E-Commerce',
    serviceUsed: 'CRO & Performance Marketing',
    metric: '$4.2M',
    metricLabel: 'Attributed Annual Revenue',
    summary: 'Scaled Lumina from $1.1M to $4.2M run-rate with high-converting video creatives, CRO funnel tweaks, and optimized email workflows.',
    quote: 'Working with NorthPeak felt like having a dedicated internal growth team. Their strategic execution and transparency are unmatched.',
    author: 'Marcus Vance',
    authorRole: 'Founder & CEO, Lumina Apparel',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    logoText: 'LUMINA',
    tags: ['D2C', 'Paid Ads', 'CRO Funnels']
  },
  {
    id: 'health-seo',
    client: 'NerveHealth Labs',
    industry: 'Health & Wellness Tech',
    serviceUsed: 'SEO & Content Strategy',
    metric: '520k+',
    metricLabel: 'Monthly Organic Visitors',
    summary: 'Built a top-ranking authority engine, capturing top 3 positions for over 180 high-intent healthcare keywords within 8 months.',
    quote: 'NorthPeak’s SEO strategy put us ahead of legacy competitors who spent ten times our marketing budget. The ROI is extraordinary.',
    author: 'Dr. Sarah Lin',
    authorRole: 'Head of Growth, NerveHealth',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    logoText: 'NerveHealth',
    tags: ['SEO Acceleration', 'Content Architecture']
  }
];

export const PRICING_PLANS_DATA: PricingPlan[] = [
  {
    id: 'tier-starter',
    name: 'Growth Sprint',
    tagline: 'Ideal for emerging startups and focused brands needing fast, measurable channel validation.',
    monthlyPrice: 2499,
    annualMonthlyPrice: 1999,
    popular: false,
    idealFor: 'Startups & localized companies spending under $15k/mo on ads.',
    features: [
      'Management of up to 2 Ad Channels (Meta + Google)',
      '1 Custom High-Converting Landing Page',
      'Weekly Performance Analytics & ROAS Tracker',
      'Creative Ad Copy & 8 Image Variations / mo',
      'Bi-weekly Strategy Call & Slack Support',
      'Standard Technical SEO Optimization'
    ],
    notIncluded: [
      'Bespoke Web App Engineering',
      'Generative AI Search Optimization (GEO)',
      'Server-side Custom Tagging'
    ],
    ctaText: 'Start Growth Sprint'
  },
  {
    id: 'tier-scale',
    name: 'Scale & Dominance',
    tagline: 'Our signature multi-channel package designed for ambitious companies ready to lead their market.',
    monthlyPrice: 4999,
    annualMonthlyPrice: 3999,
    popular: true,
    idealFor: 'Scaling businesses spending $15k - $60k/mo looking for aggressive growth.',
    features: [
      'Management of up to 4 Ad Channels (Meta, Google, TikTok, LinkedIn)',
      'Custom React / Webflow Site Optimization & 3 Funnel Variations',
      'Continuous Conversion Rate Optimization (A/B Testing)',
      'Comprehensive Technical SEO & GEO Content Engine',
      'Video Scripting & 20 Custom Ad Creatives / mo',
      'Dedicated Senior Growth Lead & Daily Slack Access',
      'Custom Attribution Dashboard & First-Party Data Setup'
    ],
    notIncluded: [
      'Multi-region Enterprise Localization'
    ],
    ctaText: 'Claim Your Growth Plan'
  },
  {
    id: 'tier-enterprise',
    name: 'Enterprise Zenith',
    tagline: 'Full-service digital transformation, dedicated growth engineering squad, and custom SLA support.',
    monthlyPrice: 8999,
    annualMonthlyPrice: 7199,
    popular: false,
    idealFor: 'Established enterprises & venture-backed scale-ups with complex technical needs.',
    features: [
      'Unlimited Ad Channels & Global Campaign Scaling',
      'Full Bespoke Web & Mobile App Development',
      'Full Brand Strategy, Rebranding & Custom Design System',
      'Enterprise-grade Server-side Tagging & Custom ML Attribution',
      'Dedicated Squad: PM, Senior Developer, Ad Manager & Designer',
      'Guaranteed 1-hour SLA Response & Executive Board Reporting',
      'Quarterly In-Person Growth Workshops'
    ],
    ctaText: 'Discuss Enterprise Partnership'
  }
];

export const TRUST_CLIENTS = [
  { name: 'ApexPay Fintech', label: 'ApexPay' },
  { name: 'Lumina Apparel', label: 'LUMINA' },
  { name: 'NerveHealth', label: 'NerveHealth' },
  { name: 'Vanguard Logistics', label: 'VANGUARD' },
  { name: 'Aetheric AI', label: 'AETHERIC' },
  { name: 'Solstice Cloud', label: 'Solstice' }
];

export const FAQS_DATA = [
  {
    q: 'How quickly can we expect to see results?',
    a: 'For Paid Media and CRO, initial campaign optimizations and conversion lifts usually occur within 14–21 days. SEO and organic brand growth typically begin compounding around 60 to 90 days.'
  },
  {
    q: 'Do you require long-term binding contracts?',
    a: 'No. We operate on flexible month-to-month contracts or discounted quarterly/annual agreements because we rely on performance and revenue generation to retain our partners, not legal handcuffs.'
  },
  {
    q: 'Will I have a dedicated team member point of contact?',
    a: 'Yes. Every NorthPeak client is assigned a Senior Growth Strategist and direct access to a dedicated Slack channel with our developers and creative designers.'
  },
  {
    q: 'How do you handle ad spend and creative rights?',
    a: 'You maintain 100% ownership of your ad accounts, assets, code, and domains at all times. All ad spend is paid directly to platforms without hidden percentage markups.'
  }
];
