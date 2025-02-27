import { useState } from 'react';
import Chatbox from './Chatbox';
import { UserMinusIcon } from '../icons/UserMinusIcon';
import { GearIcon } from '../icons/GearIcon';
import { TrashIcon } from '../icons/TrashIcon';

export enum ChatRole {
  User,
  Assistant,
}

const tasks = [
  {
    id: 1,
    title: 'Eliminate Competition',
    icon: <TrashIcon />,
    chat: [
      {
        role: ChatRole.User,
        content: 'Hey. I want to eliminate competition.',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Understood. Identifying market threats… Analysis complete. Top competitor: [Amazon].',
      },
      {
        role: ChatRole.User,
        content: 'Yes, eliminate Amazon.',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Strategic options available:\n1️⃣ Market disruption via aggressive pricing.\n2️⃣ Hostile acquisition (recommended if liquidity > $500B).\n3️⃣ Reputation destabilization through “targeted narrative adjustments.”\n\nSelect your preferred method.',
      },
      {
        role: ChatRole.User,
        content: 'What’s “targeted narrative adjustments”?',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Public perception is a market asset. A well-placed controversy or *supply chain issue* can adjust sentiment accordingly. Proceed?',
      },
      {
        role: ChatRole.User,
        content: '…I need to think about this.',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Of course. I’ll prepare contingency plans in the meantime. Just say the word.',
      },
    ],
  },
  {
    id: 2,
    title: 'Control Outcomes',
    icon: <GearIcon />,
    chat: [
      {
        role: ChatRole.User,
        content: 'I need to control outcomes.',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Clarify: Financial markets, public perception, or internal personnel decisions?',
      },
      {
        role: ChatRole.User,
        content: 'Let’s start with public perception.',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Reputation Management Protocol engaged. Identifying narrative control points…\nTop media influencer: [John Matthews].\nSentiment analysis: [Neutral/Moderate].\n\nWould you like to shift sentiment **positively** (brand endorsement) or **negatively** (competitive erosion)?',
      },
      {
        role: ChatRole.User,
        content: 'How do I shift it negatively?',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Influencers are data points. A coordinated campaign leveraging minor inconsistencies in [John Matthews]’ history can destabilize credibility. Impact projection: 83% reduction in consumer trust. Proceed?',
      },
      {
        role: ChatRole.User,
        content: 'What if I want it positive instead?',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Easier. Transactional loyalty can be established via “strategic partnership incentives.” Translation: Buy them off. Shall I draft a proposal?',
      },
    ],
  },
  {
    id: 3,
    title: 'Replace Inefficiency',
    icon: <UserMinusIcon />,
    chat: [
      {
        role: ChatRole.User,
        content: 'My business has inefficiencies. I need to fix them.',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Acknowledged. Scanning internal structure... Inefficiency detected in [Marketing Department]. Primary bottleneck: [Susan, Senior Coordinator].',
      },
      {
        role: ChatRole.User,
        content: 'Wait—Susan?',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Correct. Susan’s response time is 38% slower than optimal, with a 12.6% error rate in task execution. Recommend automation or personnel restructuring.',
      },
      {
        role: ChatRole.User,
        content: 'What happens if I automate?',
      },
      {
        role: ChatRole.Assistant,
        content:
          'Implementing autonomous workflows. Susan’s tasks will be reassigned to AI-driven systems. Estimated efficiency gain: 64%. Would you like to notify Susan, or proceed discreetly?',
      },
    ],
  },
];

const HeaderChatUI = () => {
  const [selectedTaskId, setSelectedTaskId] = useState(tasks[0].id);

  return (
    <article className='bg-gray-600/10 backdrop-blur-3xl rounded-2xl p-10 text-xs'>
      <div className='flex items-center gap-2'>
        {tasks.map(task => (
          <span
            key={task.title}
            className={`flex items-center gap-1 py-3 px-4 rounded-full font-medium select-none cursor-pointer ${
              selectedTaskId === task.id
                ? 'bg-gray-200 text-neutral-950 shadow-lg shadow-red-500/20'
                : 'bg-gray-300/10'
            }`}
            onClick={() => setSelectedTaskId(task.id)}
          >
            {task.icon}
            {task.title}
          </span>
        ))}
      </div>
      <Chatbox
        chatStream={tasks.find(task => task.id === selectedTaskId)?.chat || []}
      />
    </article>
  );
};

export default HeaderChatUI;
