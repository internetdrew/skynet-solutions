import { useStore } from '@nanostores/react';
import { isDemoRequestModalOpen } from '../stores/demoRequestStore';
import { useEffect, useRef } from 'react';
import TerminalWindow from './TerminalWindow';
import { DEMO_TERMINAL_MESSAGES } from '../constants';

const DemoRequestModal = () => {
  const $isOpen = useStore(isDemoRequestModalOpen);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if ($isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [$isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      isDemoRequestModalOpen.set(false);
    };

    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('cancel', handleClose);
    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('cancel', handleClose);
    };
  }, [$isOpen]);

  if (!$isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className='bg-transparent backdrop:bg-black/50 open:inset-0 open:mx-auto open:my-auto'
    >
      <div className='mx-auto min-w-sm w-full md:min-w-lg'>
        <TerminalWindow
          messages={DEMO_TERMINAL_MESSAGES}
          onComplete={() => {
            isDemoRequestModalOpen.set(false);
          }}
        />
      </div>
    </dialog>
  );
};

export default DemoRequestModal;
