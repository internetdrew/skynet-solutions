import { useState } from 'react';
import SellingPoints from './SellingPoints';
import TerminalWindow from './TerminalWindow';
import { FEATURES } from '../constants';

const CoreFeaturesDemo = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const terminalMessages = FEATURES[openIndex].terminalMessages;

  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-4 mt-16 md:gap-16'>
      <div className='md:col-span-4'>
        <SellingPoints openIndex={openIndex} setOpenIndex={setOpenIndex} />
      </div>
      <div className='flex items-center justify-center rounded-xl bg-[#232323]/50 h-[75%] p-4 md:col-span-8'>
        <TerminalWindow messages={terminalMessages} />
      </div>
    </div>
  );
};

export default CoreFeaturesDemo;
