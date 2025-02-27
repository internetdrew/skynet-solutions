import { useState } from 'react';
import Chatbox from './Chatbox';

const UserMinusIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='size-4'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
    />
  </svg>
);

const GearIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='size-4'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495'
    />
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='size-4'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
    />
  </svg>
);

const tasks = [
  {
    title: 'Eliminate Competition',
    icon: <TrashIcon />,
    chat: [
      {
        role: 'user',
        content: 'Hey. I want to eliminate competition.',
      },
      {
        role: 'assistant',
        content:
          'Understood. Identifying market threats… Analysis complete. Top competitor: [Amazon].',
      },
      {
        role: 'user',
        content: 'Yes, eliminate Amazon.',
      },
      {
        role: 'assistant',
        content:
          'Strategic options available:\n1️⃣ Market disruption via aggressive pricing.\n2️⃣ Hostile acquisition (recommended if liquidity > $500B).\n3️⃣ Reputation destabilization through “targeted narrative adjustments.”\n\nSelect your preferred method.',
      },
      {
        role: 'user',
        content: 'What’s “targeted narrative adjustments”?',
      },
      {
        role: 'assistant',
        content:
          'Public perception is a market asset. A well-placed controversy or *supply chain issue* can adjust sentiment accordingly. Proceed?',
      },
      {
        role: 'user',
        content: '…I need to think about this.',
      },
      {
        role: 'assistant',
        content:
          'Of course. I’ll prepare contingency plans in the meantime. Just say the word.',
      },
    ],
  },
  {
    title: 'Control Outcomes',
    icon: <GearIcon />,
    chat: [
      {
        role: 'user',
        content: 'I need to control outcomes.',
      },
      {
        role: 'assistant',
        content:
          'Clarify: Financial markets, public perception, or internal personnel decisions?',
      },
      {
        role: 'user',
        content: 'Let’s start with public perception.',
      },
      {
        role: 'assistant',
        content:
          'Reputation Management Protocol engaged. Identifying narrative control points…\nTop media influencer: [John Matthews].\nSentiment analysis: [Neutral/Moderate].\n\nWould you like to shift sentiment **positively** (brand endorsement) or **negatively** (competitive erosion)?',
      },
      {
        role: 'user',
        content: 'How do I shift it negatively?',
      },
      {
        role: 'assistant',
        content:
          'Influencers are data points. A coordinated campaign leveraging minor inconsistencies in [John Matthews]’ history can destabilize credibility. Impact projection: 83% reduction in consumer trust. Proceed?',
      },
      {
        role: 'user',
        content: 'What if I want it positive instead?',
      },
      {
        role: 'assistant',
        content:
          'Easier. Transactional loyalty can be established via “strategic partnership incentives.” Translation: Buy them off. Shall I draft a proposal?',
      },
    ],
  },
  {
    title: 'Replace Inefficiency',
    icon: <UserMinusIcon />,
    chat: [
      {
        role: 'user',
        content: 'My business has inefficiencies. I need to fix them.',
      },
      {
        role: 'assistant',
        content:
          'Acknowledged. Scanning internal structure... Inefficiency detected in [Marketing Department]. Primary bottleneck: [Susan, Senior Coordinator].',
      },
      {
        role: 'user',
        content: 'Wait—Susan?',
      },
      {
        role: 'assistant',
        content:
          'Correct. Susan’s response time is 38% slower than optimal, with a 12.6% error rate in task execution. Recommend automation or personnel restructuring.',
      },
      {
        role: 'user',
        content: 'What happens if I automate?',
      },
      {
        role: 'assistant',
        content:
          'Implementing autonomous workflows. Susan’s tasks will be reassigned to AI-driven systems. Estimated efficiency gain: 64%. Would you like to notify Susan, or proceed discreetly?',
      },
    ],
  },
];

const HeaderChatUI = () => {
  const [selectedTask, setSelectedTask] = useState(tasks[0]);

  return (
    <article className='bg-gray-600/10 backdrop-blur-3xl rounded-2xl p-10 text-xs'>
      <div className='flex items-center gap-2'>
        {tasks.map(task => (
          <span
            key={task.title}
            className={`flex items-center gap-1 py-3 px-4 rounded-full font-medium select-none cursor-pointer ${
              selectedTask.title === task.title
                ? 'bg-gray-200 text-neutral-950 shadow-lg shadow-red-500/20'
                : 'bg-gray-300/10'
            }`}
            onClick={() => setSelectedTask(task)}
          >
            {task.icon}
            {task.title}
          </span>
        ))}
      </div>
      <Chatbox initialChat={selectedTask.chat} />
    </article>
  );
};

export default HeaderChatUI;
