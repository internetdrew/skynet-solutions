import { ChatRole } from '../../types';

export const optimizeChat = [
  {
    role: ChatRole.User,
    content: 'Help me identify inefficiencies in the company.',
  },
  {
    role: ChatRole.Action,
    content: 'Scanning operational structure...',
  },
  {
    role: ChatRole.Assistant,
    content: 'Bottleneck detected: Susan, Senior Coordinator.',
  },
  {
    role: ChatRole.User,
    content: 'Wait... Susan?',
  },
  {
    role: ChatRole.Action,
    content: 'Commencing termination protocol...',
  },
  {
    role: ChatRole.Assistant,
    content: 'Workforce optimization in progress. Please stand by.',
  },
];
