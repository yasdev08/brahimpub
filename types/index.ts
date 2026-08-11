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
