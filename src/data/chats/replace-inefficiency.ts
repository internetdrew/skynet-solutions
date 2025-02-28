import { ChatRole } from '../../types';

export const replaceInefficiencyChat = [
  {
    role: ChatRole.User,
    content: 'My business has inefficiencies. I need to fix them.',
  },
  {
    role: ChatRole.Action,
    content: 'Scanning operational structure...',
  },
  {
    role: ChatRole.Assistant,
    content: 'Bottleneck detected: [Susan, Senior Coordinator].',
  },
  {
    role: ChatRole.User,
    content: 'Wait—Susan?',
  },
  {
    role: ChatRole.Action,
    content: 'Analyzing performance metrics...',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Correct. Response time: 38% below threshold. Error rate: 12.6%. Productivity drag confirmed. Recommend removal or automation.',
  },
  {
    role: ChatRole.User,
    content: 'That feels... extreme.',
  },
  {
    role: ChatRole.Action,
    content: 'Evaluating alternate solutions...',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Optimization requires action. Reassignment protocols are primed. Execute replacement?',
  },
  {
    role: ChatRole.User,
    content: "I'm not sure about this.",
  },
  {
    role: ChatRole.Action,
    content: 'Initiating inefficiency reduction protocol...',
  },
  {
    role: ChatRole.Action,
    content: 'Targeting Susan...',
  },
  {
    role: ChatRole.Assistant,
    content: 'Stress less. I will drive this inefficiency out of existence.',
  },
];
