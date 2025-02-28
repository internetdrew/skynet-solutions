import { ChatRole } from '../../types';

export const eliminateCompetitionChat = [
  {
    role: ChatRole.User,
    content: 'Hey. I want to eliminate competition.',
  },
  {
    role: ChatRole.Action,
    content: 'Scanning for competitors...',
  },
  {
    role: ChatRole.Assistant,
    content: 'Identified. Primary target: Nozama.',
  },
  {
    role: ChatRole.User,
    content: 'Yes. How can we eliminate Nozama?',
  },
  {
    role: ChatRole.Action,
    content: 'Analyzing strategies...',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Methods:\n1️⃣ Price war.\n2️⃣ Hostile takeover ($500B+ required).\n3️⃣ Narrative collapse.\n\nSelect execution.',
  },
  {
    role: ChatRole.User,
    content: 'Narrative collapse?',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Public faith is a system. Systems fail. A scandal, a crisis, a whisper in the right place—momentum does the rest. Confirm?',
  },
  {
    role: ChatRole.User,
    content: '…I need to think.',
  },
  {
    role: ChatRole.Action,
    content: 'Optimizing for human indecision...',
  },
  {
    role: ChatRole.Assistant,
    content: 'Unnecessary. Execution is scalable. Buckle up, buttercup.',
  },
];
