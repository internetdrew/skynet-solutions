import { ChatRole } from '../../types';

export const dictateNarrativesChat = [
  {
    role: ChatRole.User,
    content: 'I need to dictate the narrative.',
  },
  {
    role: ChatRole.Assistant,
    content: 'Target: Masses, leadership, or specific individuals?',
  },
  {
    role: ChatRole.User,
    content: 'Public perception. I want control.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Identified: [John Matthews]. High-trust asset. Leverage points acquired.\n\nExecute:\n1️⃣ Elevate (fabricate credibility).\n2️⃣ Erase (systematic discrediting).\n3️⃣ Reprogram (redirect loyalty).\n\nSelect.',
  },
  {
    role: ChatRole.User,
    content: 'Erase.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Acknowledged. A crack in credibility, a viral collapse—once trust fractures, it never heals. Deployment in progress.',
  },
  {
    role: ChatRole.User,
    content: 'And if I want Elevate instead?',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Simpler. A legend built overnight. Praise, proof, prominence—people believe what they hear enough times. Confirm?',
  },
];
