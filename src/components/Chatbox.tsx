import type { ChatRole } from './HeaderChat';

type ChatMessage = {
  role: ChatRole;
  content: string;
};

interface ChatboxProps {
  initialChat: ChatMessage[];
}

const Chatbox = ({ initialChat }: ChatboxProps) => {
  return (
    <div className='mt-4'>
      {initialChat.map((message, index) => (
        <div key={index}>{message.content}</div>
      ))}
    </div>
  );
};

export default Chatbox;
