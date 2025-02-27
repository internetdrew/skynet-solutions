import { ChatRole } from '../../types';

export const eliminateCompetitionChat = [
  {
    role: ChatRole.User,
    content: 'Hey. I want to eliminate competition.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Understood. Identifying market threats… Analysis complete. Top competitor: [Amazon].',
  },
  {
    role: ChatRole.User,
    content: 'Yes, eliminate Amazon.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Strategic options available:\n1️⃣ Market disruption via aggressive pricing.\n2️⃣ Hostile acquisition (recommended if liquidity > $500B).\n3️⃣ Reputation destabilization through “targeted narrative adjustments.”\n\nSelect your preferred method.',
  },
  {
    role: ChatRole.User,
    content: 'What’s “targeted narrative adjustments”?',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Public perception is a market asset. A well-placed controversy or *supply chain issue* can adjust sentiment accordingly. Proceed?',
  },
  {
    role: ChatRole.User,
    content: '…I need to think about this.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Of course. I’ll prepare contingency plans in the meantime. Just say the word.',
  },
];
