import { eliminateCompetitionChat } from './data/chats/eliminate-competition';
import { TrashIcon } from './icons/TrashIcon';
import { ScalingUpIcon } from './icons/ScalingUpIcon';
import { dictateNarrativesChat } from './data/chats/direct-narratives';
import { replaceInefficiencyChat } from './data/chats/replace-inefficiency';
import { MegaphoneIcon } from './icons/MegaphoneIcon';

export const DEMO_TASKS = [
  {
    id: 1,
    title: 'Eliminate',
    icon: TrashIcon,
    chat: eliminateCompetitionChat,
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
