import { dominationChat } from './data/chats/domination';
import { TrophyIcon } from './icons/TrophyIcon';
import { ScalingUpIcon } from './icons/ScalingUpIcon';
import { dictateNarrativesChat } from './data/chats/direct-narratives';
import { replaceInefficiencyChat } from './data/chats/replace-inefficiency';
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
    chat: dictateNarrativesChat,
  },
  {
    id: 3,
    title: 'Optimize',
    icon: ScalingUpIcon,
    chat: replaceInefficiencyChat,
  },
];
