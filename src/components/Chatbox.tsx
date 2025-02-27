import { useEffect, useRef, useState } from 'react';
import MessageIcon from '../icons/MessageIcon';
import { ChatRole } from './HeaderChat';

type ChatMessage = {
  role: ChatRole;
  content: string;
};

interface ChatboxProps {
  chatStream: ChatMessage[];
}

const formatMessageContent = (content: string) => {
  return content.split('\n').map((line, i) => <p key={i}>{line}</p>);
};

const userMessage = (content: string) => {
  return (
    <div className='bg-gray-500/20 rounded-xl p-5 w-max ml-auto max-w-xs rounded-br-none'>
      {formatMessageContent(content)}
    </div>
  );
};

const assistantMessage = (content: string) => {
  return (
    <div className='bg-gray-100/20 rounded-xl p-4 mr-auto max-w-xs'>
      {formatMessageContent(content)}
      <div className='flex items-center gap-1 mt-2'>
        <MessageIcon className='text-gray-400' />
        <span className='text-xs text-gray-400'>AI Agent</span>
      </div>
    </div>
  );
};

const Chatbox = ({ chatStream }: ChatboxProps) => {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    setVisibleMessages([]);

    if (chatStream.length === 0) return;

    setVisibleMessages([chatStream[0]]);
    scrollToBottom();

    chatStream.slice(1).forEach((message, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message]);
      }, 1500 * (index + 1));
    });
  }, [chatStream]);

  useEffect(() => {
    if (visibleMessages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleMessages]);

  return (
    <div className='mt-6 bg-gray-600/20 rounded-xl p-4 '>
      <ul className='flex flex-col gap-6 min-h-[350px] max-h-[350px] overflow-y-auto text-base font-extralight'>
        {visibleMessages.map((message, index) => (
          <li key={index}>
            {message.role === ChatRole.User
              ? userMessage(message.content)
              : assistantMessage(message.content)}
          </li>
        ))}
        <div ref={messagesEndRef} />
      </ul>
      <div className='mt-4 flex justify-between items-center ring-1 ring-gray-500/20 rounded-xl'>
        <p className='h-full p-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-xl'>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
