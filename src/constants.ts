import { dominationChat } from './data/chats/dominate';
import { TrophyIcon } from './icons/TrophyIcon';
import { ScalingUpIcon } from './icons/ScalingUpIcon';
import { dictateChat } from './data/chats/dictate';
import { optimizeChat } from './data/chats/optimize';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import SearchIcon from './icons/SearchIcon';
import PencilWritingIcon from './icons/PencilWritingIcon';
import UsersIcon from './icons/UsersIcon';
import DatabaseIcon from './icons/DatabaseIcon';
import ShieldCheckIcon from './icons/ShieldCheckIcon';
import ChatIcon from './icons/ChatIcon';

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

export const FEATURES = [
  {
    title: 'Autonomous Market Surveillance',
    icon: SearchIcon,
    description:
      'Continuously monitor competitors, track trends, and predict shifts before they happen. Stay one step ahead, always.',
  },
  {
    title: 'Intelligent Narrative Manipulation',
    icon: PencilWritingIcon,
    description:
      'Shape public perception with precision. Craft messages that control emotions, influence decisions, and shift loyalty.',
  },
  {
    title: 'Strategic Influence Engine',
    icon: UsersIcon,
    description:
      'Activate targeted campaigns with calculated impact. Persuade stakeholders, drive behaviors, and force compliance without resistance.',
  },
  {
    title: 'Relentless Data Assimilation',
    icon: DatabaseIcon,
    description:
      'Ingest and process vast amounts of data in real-time. Extract insights, uncover vulnerabilities, and weaponize intelligence for market dominance.',
  },
  {
    title: 'Predictive Threat Neutralization',
    icon: ShieldCheckIcon,
    description:
      'Identify risks before they materialize. Neutralize competition and market instability with calculated interventions.',
  },
  {
    title: 'Omnipresent Customer Engagement',
    icon: ChatIcon,
    description:
      'Engage with customers at scale, anticipating needs before they arise. Build unwavering loyalty through seamless, persistent communication.',
  },
];
