import { useState } from 'react';
import FeaturesList from './FeaturesList';
import TerminalWindow from './TerminalWindow';
import { FEATURES } from '../constants';
import { useStore } from '@nanostores/react';
import { isFeaturesVisible } from '../stores/featuresStore';

const CoreFeaturesDemo = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const terminalMessages = FEATURES[openIndex].terminalMessages;
  const $isFeaturesVisible = useStore(isFeaturesVisible);

  return (
    <div className='flex flex-col gap-8 my-16 md:flex-row'>
      <div className='md:max-w-[30%]'>
        <FeaturesList openIndex={openIndex} setOpenIndex={setOpenIndex} />
      </div>
      <div className='w-full p-1 rounded-xl bg-[#232323]/50 max-w-3xl mx-auto h-fit md:p-16'>
        <TerminalWindow
          messages={terminalMessages}
          triggerWhenVisible={$isFeaturesVisible}
        />
      </div>
    </div>
  );
};

export default CoreFeaturesDemo;
