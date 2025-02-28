import { dominationChat } from './data/chats/dominate';
import { TrophyIcon } from './icons/TrophyIcon';
import { ScalingUpIcon } from './icons/ScalingUpIcon';
import { dictateChat } from './data/chats/dictate';
import { optimizeChat } from './data/chats/optimize';
import { MegaphoneIcon } from './icons/MegaphoneIcon';

export const DEMO_TASKS = [
  {
    id: 1,
    title: 'Dominate',
    icon: TrophyIcon,
    chat: dominationChat,
  },
  {
    id: 2,
    title: 'Dictate',
    icon: MegaphoneIcon,
    chat: dictateChat,
  },
  {
    id: 3,
    title: 'Optimize',
    icon: ScalingUpIcon,
    chat: optimizeChat,
  },
];
