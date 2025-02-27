import type { ReactNode } from 'react';

export enum ChatRole {
  User,
  Assistant,
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
