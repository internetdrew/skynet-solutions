import { useEffect, useRef, useState } from 'react';

import { useStore } from '@nanostores/react';
import { isFeaturesVisible } from '../stores/featuresStore';

interface TerminalWindowProps {
  messages: string[];
}

const TerminalWindow = ({ messages }: TerminalWindowProps) => {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const $isFeaturesVisible = useStore(isFeaturesVisible);

  useEffect(() => {
    setVisibleMessages([]);

    let timeouts: number[] = [];

    const firstTimeout = setTimeout(() => {
      setVisibleMessages([messages[0]]);
    }, 500);
    timeouts.push(firstTimeout);

    messages.slice(1).forEach((message, index) => {
      const timeout = setTimeout(() => {
        setVisibleMessages(prev => [...prev, message]);
      }, 500 * (index + 1) + 500);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [messages]);

  useEffect(() => {
    if ($isFeaturesVisible && containerRef.current) {
      const container = containerRef.current;
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleMessages, $isFeaturesVisible]);

  return (
    <div className='w-full mx-auto min-h-[300px] rounded-lg overflow-hidden bg-neutral-950 text-white font-mono text-sm'>
      <div ref={containerRef} className='p-4 overflow-y-auto scrollbar-hide'>
        <TerminalWindowHeader />
        <ul className='flex flex-col gap-2 bg-neutral-950'>
          {visibleMessages.map((message, index) => (
            <li key={index} className='animate-fade-in'>
              <span className='text-red-500'>{'> '}</span>
              {message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TerminalWindowHeader = () => {
  return (
    <div className='flex items-center mb-4'>
      <div className='flex space-x-2 items-center'>
        <div className='w-3 h-3 rounded-full bg-red-500'></div>
        <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
        <div className='w-3 h-3 rounded-full bg-green-500'></div>
      </div>
    </div>
  );
};

export default TerminalWindow;
