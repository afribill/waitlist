import { ReactNode } from "react";

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}

export interface WaitlistFormProps {
  variant?: 'hero' | 'footer';
  onSuccess?: () => void;
}
