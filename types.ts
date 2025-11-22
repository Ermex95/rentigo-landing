import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  text: string;
  image: string;
}