import React from 'react';

interface ChatboxProps {
  initialChat: {
    role: string;
    content: string;
  }[];
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
