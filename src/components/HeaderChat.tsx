import Chatbox from './Chatbox';
import { useState } from 'react';
import { DEMO_TASKS } from '../constants';

const HeaderChat = () => {
  const [selectedTaskId, setSelectedTaskId] = useState(DEMO_TASKS[0].id);

  return (
    <article className='bg-gray-600/10 backdrop-blur-3xl rounded-2xl p-4 xl:p-10'>
      <div className='flex items-center flex-wrap gap-2'>
        {DEMO_TASKS.map(task => (
          <span
            key={task.title}
            className={`flex text-xs items-center gap-1 py-3 px-4 rounded-full font-medium select-none cursor-pointer ${
              selectedTaskId === task.id
                ? 'bg-gray-200 text-neutral-950 shadow-lg shadow-red-500/20'
                : 'bg-gray-300/10'
            }`}
            onClick={() => setSelectedTaskId(task.id)}
          >
            <task.icon />
            {task.title}
          </span>
        ))}
      </div>
      <Chatbox
        chatStream={
          DEMO_TASKS.find(task => task.id === selectedTaskId)?.chat || []
        }
      />
    </article>
  );
};

export default HeaderChat;
