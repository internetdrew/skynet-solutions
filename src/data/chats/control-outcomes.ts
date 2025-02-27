import { ChatRole } from '../../types';

export const controlOutcomesChat = [
  {
    role: ChatRole.User,
    content: 'I need to control outcomes.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Clarify: Financial markets, public perception, or internal personnel decisions?',
  },
  {
    role: ChatRole.User,
    content: 'Let’s start with public perception.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Reputation Management Protocol engaged. Identifying narrative control points…\nTop media influencer: [John Matthews].\nSentiment analysis: [Neutral/Moderate].\n\nWould you like to shift sentiment **positively** (brand endorsement) or **negatively** (competitive erosion)?',
  },
  {
    role: ChatRole.User,
    content: 'How do I shift it negatively?',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Influencers are data points. A coordinated campaign leveraging minor inconsistencies in [John Matthews]’ history can destabilize credibility. Impact projection: 83% reduction in consumer trust. Proceed?',
  },
  {
    role: ChatRole.User,
    content: 'What if I want it positive instead?',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Easier. Transactional loyalty can be established via “strategic partnership incentives.” Translation: Buy them off. Shall I draft a proposal?',
  },
];
