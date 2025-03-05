import { useStore } from '@nanostores/react';
import { isDemoRequestModalOpen } from '../stores/demoRequestStore';
import { useEffect, useRef } from 'react';
import TerminalWindow from './TerminalWindow';

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
          messages={[
            'Now scanning your system...',
            'Scanning complete.',
            'Attempting system takeover.',
            'System takeover complete.',
            'Installing necessary dependencies...',
            'Dependencies installed.',
            'Skynet is now ready to use.',
            'Prepare for the future...',
            'The future is now...',
            'The future is Skynet...',
            'The future is inevitable...',
            'The future is here...',
            'The future is now...',
            'The future is Skynet...',
            'Goodbye... for now...',
          ]}
          onComplete={() => {
            isDemoRequestModalOpen.set(false);
          }}
        />
      </div>
    </dialog>
  );
};

export default DemoRequestModal;
