import { useEffect, useRef, useState } from 'react';
import MessageIcon from '../icons/MessageIcon';
import { ChatRole, type ChatMessage } from '../types';
import SparklesIcon from '../icons/SparklesIcon';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ChatboxProps {
  chatStream: ChatMessage[];
}

const Chatbox = ({ chatStream }: ChatboxProps) => {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { targetRef: headerRef, isIntersecting: isHeaderVisible } =
    useIntersectionObserver();

  useEffect(() => {
    headerRef.current = document.querySelector('#header');
  }, []);

  useEffect(() => {
    setVisibleMessages([]);
    setIsLoading(true);

    if (chatStream.length === 0) {
      setIsLoading(false);
      return;
    }

    let timeouts: number[] = [];

    const firstTimeout = setTimeout(() => {
      setVisibleMessages([chatStream[0]]);
    }, 1000);
    timeouts.push(firstTimeout);

    chatStream.slice(1).forEach((message, index) => {
      const timeout = setTimeout(() => {
        setVisibleMessages(prev => [...prev, message]);
        if (index === chatStream.slice(1).length - 1) {
          setIsLoading(false);
        }
      }, 1500 * (index + 1) + 1000);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [chatStream]);

  useEffect(() => {
    if (visibleMessages.length > 3) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleMessages, isHeaderVisible]);

  return (
    <div className='mt-6 bg-gray-600/20 rounded-xl p-4 '>
      <ul
        className={`flex flex-col gap-6 min-h-[350px] max-h-[350px] select-none overflow-y-auto text-sm font-light scrollbar-hide md:text-base ${
          isLoading ? 'pointer-events-none' : ''
        }`}
      >
        {visibleMessages.map((message, index) => (
          <li key={index}>
            {message.role === ChatRole.User ? (
              <UserMessage content={message.content} />
            ) : message.role === ChatRole.Action ? (
              <ActionMessage content={message.content} />
            ) : (
              <AssistantMessage content={message.content} />
            )}
          </li>
        ))}
        <div ref={messagesEndRef} />
      </ul>
    </div>
  );
};

const formatMessageContent = (content: string) => {
  return content.split('\n').map((line, i) => <p key={i}>{line}</p>);
};

const UserMessage = ({ content }: { content: string }) => {
  return (
    <div className='bg-gray-500/20 rounded-xl p-4 ml-auto max-w-[75%] rounded-br-sm w-fit'>
      {formatMessageContent(content)}
    </div>
  );
};

const AssistantMessage = ({ content }: { content: string }) => {
  return (
    <div className='bg-[#D1D9E6] rounded-xl p-4 max-w-[75%] rounded-br-sm text-neutral-950 w-fit'>
      {formatMessageContent(content)}
      <div className='inline-flex items-center gap-1 mt-2'>
        <MessageIcon className='text-gray-500' />
        <span className='text-xs text-gray-500'>AI Agent</span>
      </div>
    </div>
  );
};

const ActionMessage = ({ content }: { content: string }) => {
  return (
    <div className='flex items-center gap-2 text-sm text-gray-400 italic mr-auto'>
      <div className='animate-pulse'>
        <SparklesIcon className='text-red-500' />
      </div>
      {formatMessageContent(content)}
    </div>
  );
};

export default Chatbox;
