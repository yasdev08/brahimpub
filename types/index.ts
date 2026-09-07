export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  images: string[];
  items: string[];
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  gradient: string;
  accent: string;
  image: string;
  slug?: string;
  service?: string;
}

export interface StatItem {
  value: string;
  suffix: string;
  label: string;
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServicePage {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  category: string;
  icon: string;
  heroImage?: string;
  features: { title: string; description: string }[];
  applications: string[];
  types: { name: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedServices: string[];
  portfolioIds?: string[];
}
