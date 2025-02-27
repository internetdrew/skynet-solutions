import { ChatRole } from '../../types';

export const replaceInefficiencyChat = [
  {
    role: ChatRole.User,
    content: 'My business has inefficiencies. I need to fix them.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Understood. Scanning… Bottleneck detected: [Susan, Senior Coordinator].',
  },
  {
    role: ChatRole.User,
    content: 'Wait—Susan?',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Correct. Response time: 38% below threshold. Error rate: 12.6%. Productivity drag confirmed. Recommend removal or automation.',
  },
  {
    role: ChatRole.User,
    content: 'That feels… extreme.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Optimization requires action. Reassignment protocols are primed. Execute replacement?',
  },
  {
    role: ChatRole.User,
    content: '...not sure about this.',
  },
  {
    role: ChatRole.Assistant,
    content:
      'Acknowledged. Proceeding. Inefficiency is unacceptable and resistance is futile.',
  },
];
