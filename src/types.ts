import type { ReactNode } from 'react';

export enum ChatRole {
  User,
  Assistant,
  Action,
}

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export interface Task {
  id: number;
  title: string;
  icon: ReactNode;
  chat: ChatMessage[];
}

export interface Testimonial {
  name: string;
  position: string;
  imageSrc: ImageMetadata;
  quote: string;
}
