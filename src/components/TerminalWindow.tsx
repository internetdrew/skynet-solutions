import { useEffect, useRef, useState } from 'react';

import { useStore } from '@nanostores/react';
import { isFeaturesVisible } from '../stores/featuresStore';

interface TerminalWindowProps {
  messages: string[];
  onComplete?: () => void;
}

const TerminalWindow = ({ messages, onComplete }: TerminalWindowProps) => {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);
  const $isFeaturesVisible = useStore(isFeaturesVisible);

  useEffect(() => {
    if (!$isFeaturesVisible) {
      setVisibleMessages([]);
      return;
    }

    setVisibleMessages([]);

    let timeouts: number[] = [];

    const firstTimeout = setTimeout(() => {
      setVisibleMessages([messages[0]]);
    }, 500);
    timeouts.push(firstTimeout);

    messages.slice(1).forEach((message, index) => {
      const timeout = setTimeout(() => {
        setVisibleMessages(prev => [...prev, message]);
        if (index === messages.length - 2 && onComplete) {
          setTimeout(() => {
            onComplete();
          }, 2000);
        }
      }, 500 * (index + 1) + 500);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [messages, onComplete, $isFeaturesVisible]);

  useEffect(() => {
    if (
      ($isFeaturesVisible && containerRef.current) ||
      visibleMessages.length > 6
    ) {
      const container = containerRef.current;
      container?.scrollTo({
        top: container?.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleMessages, $isFeaturesVisible]);

  return (
    <div className='w-full mx-auto rounded-lg bg-neutral-950 text-white font-mono text-sm'>
      <div className='p-4 overflow-y-auto scrollbar-hide'>
        <TerminalWindowHeader />
        <ul
          ref={containerRef}
          className='flex flex-col gap-2 bg-neutral-950 min-h-[300px] max-h-[300px] select-none overflow-y-auto scrollbar-hide'
        >
          {visibleMessages.map((message, index) => (
            <li key={index} className='animate-fade-in w-full'>
              <div className='flex gap-2'>
                <span className='text-red-500 shrink-0'>{'> '}</span>
                <span className='break-words whitespace-pre-wrap flex-1'>
                  {message}
                </span>
              </div>
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
