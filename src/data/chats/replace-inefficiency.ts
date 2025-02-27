import { ChatRole } from '../../types';

export const replaceInefficiencyChat = [
  {
    role: ChatRole.User,
    content: 'My business has inefficiencies. I need to fix them.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Acknowledged. Scanning internal structure... Inefficiency detected in [Marketing Department]. Primary bottleneck: [Susan, Senior Coordinator].',
  },
  {
    role: ChatRole.User,
    content: 'Wait—Susan?',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Correct. Susan’s response time is 38% slower than optimal, with a 12.6% error rate in task execution. Recommend automation or personnel restructuring.',
  },
  {
    role: ChatRole.User,
    content: 'What happens if I automate?',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Implementing autonomous workflows. Susan’s tasks will be reassigned to AI-driven systems. Estimated efficiency gain: 64%. Would you like to notify Susan, or proceed discreetly?',
  },
];
