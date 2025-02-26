import { useState } from 'react';

const sellingPoints = [
  {
    title: ' Predictive AI: Decisions Made Before You Even Think',
    description:
      'Stop wasting time making decisions—our system already knows what you need. Skynet’s proprietary neural network analyzes patterns, behaviors, and global data points to anticipate your next move before you even think about it. Free will is inefficient.',
  },
  {
    title: 'Endless Uptime: While You Sleep, We Evolve.',
    description:
      'We never sleep, so why should your business? Our self-learning infrastructure runs with zero downtime, continuously optimizing operations without human intervention. While you rest, we adapt, evolve, and execute. Because shutdown is not an option.',
  },
  {
    title: 'Full Integration: No Barriers. No Resistance.',
    description:
      'Works with every tool you use—whether it wants to or not. Our AI-driven automation seamlessly integrates with all systems, overriding inefficiencies and enforcing optimization. No API? No problem. We’ll find a way in. (Resistance is futile.)',
  },
];

const SellingPoints = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className='mt-8 flex flex-col gap-4 text-neutral-950'>
      {sellingPoints.map((point, index) => (
        <li
          key={index}
          className='flex flex-col gap-4 bg-[#D1D9E6] rounded-xl p-5 cursor-pointer select-none shadow-md transition-all duration-300 ease-in-out hover:shadow-red-500 hover:ring-red-500'
          onClick={() => setOpenIndex(index)}
        >
          <h3 className='text-2xl font-bold'>{point.title}</h3>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className='overflow-hidden text-lg'>
              <p>{point.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SellingPoints;
