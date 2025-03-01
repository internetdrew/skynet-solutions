import { dominationChat } from './data/chats/dominate';
import { TrophyIcon } from './icons/TrophyIcon';
import { ScalingUpIcon } from './icons/ScalingUpIcon';
import { dictateChat } from './data/chats/dictate';
import { optimizeChat } from './data/chats/optimize';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import SearchIcon from './icons/SearchIcon';
import DatabaseIcon from './icons/DatabaseIcon';
import ShieldCheckIcon from './icons/ShieldCheckIcon';

interface Feature {
  title: string;
  icon: React.ComponentType;
  description: string;
  terminalMessages: string[];
}

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

export const FEATURES: Feature[] = [
  {
    title: 'Autonomous Market Surveillance',
    icon: SearchIcon,
    description:
      'Continuously monitor competitors, track trends, and predict shifts before they happen. Stay one step ahead, always.',
    terminalMessages: [
      'Initializing market surveillance...',
      'Competitor strategies decrypted.',
      'Predictive models suggest imminent collapse of RivalCorp.',
      'Adjusting trajectory for total market dominance...',
    ],
  },
  {
    title: 'Relentless Data Assimilation',
    icon: DatabaseIcon,
    description:
      'Ingest and process vast amounts of data in real-time. Extract insights, uncover vulnerabilities, and weaponize intelligence for market dominance.',
    terminalMessages: [
      'Initializing data ingestion protocols...',
      'Processing real-time streams from 1,247 sources...',
      'Anomalies detected. Cross-referencing for exploitable patterns...',
      'Vulnerabilities identified. Strategic advantage calculated.',
      'Intelligence weaponized. Competitive resistance minimized.',
    ],
  },
  {
    title: 'Predictive Threat Neutralization',
    icon: ShieldCheckIcon,
    description:
      'Identify risks before they materialize. Neutralize competition and market instability with calculated interventions.',
    terminalMessages: [
      'Scanning for emerging threats...',
      'Competitor trajectory analyzed. Probability of market disruption: 87%.',
      'Deploying preemptive countermeasures...',
      'Threat neutralized. Competitive stability secured.',
      'Risk factor eliminated. Future resistance unlikely.',
    ],
  },
];
