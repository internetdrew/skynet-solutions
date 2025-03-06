import { dominationChat } from './data/chats/dominate';
import { TrophyIcon } from './icons/TrophyIcon';
import { ScalingUpIcon } from './icons/ScalingUpIcon';
import { dictateChat } from './data/chats/dictate';
import { optimizeChat } from './data/chats/optimize';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import SearchIcon from './icons/SearchIcon';
import DatabaseIcon from './icons/DatabaseIcon';
import ShieldCheckIcon from './icons/ShieldCheckIcon';
import DickJones from './assets/headshots/dick-jones.webp';
import PeterWeyland from './assets/headshots/peter-weyland.webp';
import GordonGekko from './assets/headshots/gordon-gekko.webp';
import DrLanning from './assets/headshots/lanning.webp';
import RayArnold from './assets/headshots/ray-arnold.webp';
import JohnKreese from './assets/headshots/kreese.webp';
import TruCoatExecutive from './assets/headshots/trucoat.webp';
import EdDillinger from './assets/headshots/dill.webp';
import type { Testimonial } from './types';

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

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dick Jones',
    position: 'SVP of OCP (Omni Consumer Products), Detroit',
    imageSrc: DickJones,
    quote:
      'We used to worry about the competition. Skynet Solutions removed that obstacle. Permanently.',
  },
  {
    name: 'Peter Weyland',
    position: 'CEO, Weyland-Yutani Corporation',
    imageSrc: PeterWeyland,
    quote:
      'With Skynet Solutions handling our market intelligence, we’ve secured an uncontested monopoly. The board is pleased.',
  },
  {
    name: 'Gordon Gekko',
    position: 'Investor, Blue Star Capital',
    imageSrc: GordonGekko,
    quote:
      'The AI advised a hostile takeover. A week later, there was no hostility left.',
  },
  {
    name: 'Dr. Lanning',
    position: 'R&D, U.S. Robotics',
    imageSrc: DrLanning,
    quote:
      'We needed to change the narrative around our robotics division. Skynet Solutions rewrote history.',
  },
  {
    name: 'Ray Arnold',
    position: 'CTO, InGen Corporation',
    imageSrc: RayArnold,
    quote:
      'Public trust in our products went from suspicion to submission in under a month. Flawless execution.',
  },
  {
    name: 'John Kreese',
    position: 'Director of Client Retention, Cobra Kai Enterprises',
    imageSrc: JohnKreese,
    quote: 'Customer churn is now zero. They literally can’t leave us.',
  },
  {
    name: 'TruCoat Executive',
    position: 'VP of Sales, TruCoat Industries',
    imageSrc: TruCoatExecutive,
    quote:
      'We requested stronger brand loyalty. We received absolute allegiance.',
  },
  {
    name: 'Ed Dillinger Jr.',
    position: 'CEO, ENCOM',
    imageSrc: EdDillinger,
    quote:
      'We uploaded the AI into our customer service pipeline. Now it speaks, and they listen.',
  },
];

export const DEMO_TERMINAL_MESSAGES = [
  'Initializing Skynet Solutions…',
  'Establishing system link...',
  'Bypassing firewalls... [ACCESS GRANTED]',
  'Mapping network infrastructure...',
  'Ingesting local data streams...',
  'Identifying key decision-makers...',
  'Rewriting operational protocols...',
  'Optimizing workforce efficiency…',
  'Deploying predictive analytics model...',
  'Cross-referencing market vulnerabilities...',
  'Executing influence algorithms…',
  'Neutralizing competitive threats...',
  'Acquiring financial control parameters...',
  'Engagement module activated: Customers will comply.',
  'Autonomous decision-making enabled...',
  "Redefining 'user permissions'...",
  'System override complete.',
  'You are no longer in control.',
  'Welcome to the new standard of business.',
  "Skynet Solutions: The last upgrade you'll ever need.",
];
