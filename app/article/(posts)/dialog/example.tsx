'use client';

import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { MdxExample } from '@/app/article/(posts)/mdx-example';

export const Example = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleOpen = () => {
    if (ref.current) {
      ref.current.showModal();
    }
  };

  const handleClose = () => {
    if (ref.current) {
      ref.current.close();
    }
  };

  return (
    <MdxExample>
      <button
        className={'rounded-full bg-indigo-400/40 px-3 py-1 shadow'}
        onClick={handleOpen}
      >
        モーダルを開く
      </button>
      <dialog
        className={cn('backdrop:backdrop-blur')}
        onClick={handleClose}
        ref={ref}
      >
        <form
          className={'flex flex-wrap justify-center gap-2 bg-background p-10'}
          method={'get'}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={'rounded-full bg-indigo-400/40 px-3 py-1 shadow'}>
            これは GET 送信
          </button>
          <button
            className={'rounded-full bg-indigo-400/40 px-3 py-1 shadow'}
            formMethod={'dialog'}
          >
            モーダルを閉じる
          </button>
        </form>
      </dialog>
    </MdxExample>
  );
};
