export interface Freelancer {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rate: number;
  rating: number;
  skills: string[];
  verified: boolean;
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'freelancer';
  subscription?: 'free' | 'basic' | 'pro' | 'enterprise';
  trialStartDate?: Date;
  monthlyViewsLeft?: number;
}

export interface SubscriptionPlan {
  id: string;
  title: string;
  price: number;
  features: string[];
  recommended?: boolean;
  isFree?: boolean;
  monthlyViews?: number;
}