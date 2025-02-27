import { eliminateCompetitionChat } from './data/chats/eliminate-competition';
import { GearIcon } from './icons/GearIcon';
import { TrashIcon } from './icons/TrashIcon';
import { UserMinusIcon } from './icons/UserMinusIcon';
import { dictateNarrativesChat } from './data/chats/direct-narratives';
import { replaceInefficiencyChat } from './data/chats/replace-inefficiency';

export const DEMO_TASKS = [
  {
    id: 1,
    title: 'Eliminate Competition',
    icon: TrashIcon,
    chat: eliminateCompetitionChat,
  },
  {
    id: 2,
    title: 'Dictate Narratives',
    icon: GearIcon,
    chat: dictateNarrativesChat,
  },
  {
    id: 3,
    title: 'Replace Inefficiency',
    icon: UserMinusIcon,
    chat: replaceInefficiencyChat,
  },
];
