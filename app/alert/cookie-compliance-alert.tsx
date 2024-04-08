'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Board } from '@/components/ui/board';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ReRender } from '@/components/ui/re-render';
import { useState } from 'react';

export const CookieComplianceAlert = () => {
  return (
    <Board>
      <ReRender collapse={false}>
        <Content />
      </ReRender>
    </Board>
  );
};

const Content = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className={cn(
            'translate-y-1/5 relative max-w-md rounded-xl border p-4 shadow',
            'bg-gradient-to-br from-indigo-100 via-sky-100 via-20% to-emerald-100',
            'dark:from-indigo-900 dark:via-sky-900 dark:to-emerald-900',
          )}
          exit={{ y: 20, opacity: 0 }}
          id={'alert'}
          initial={{ y: 20, opacity: 0, scale: 0.9 }}
        >
          <h1 className={'font-bold'}>Cookie コンプライアンス</h1>
          <div className="mt-4 space-y-4 text-sm">
            <p>
              本サイトでは、可能な限り最高の Web サイト体験を提供するために
              Cookie を使用しています。
            </p>
            本サイトをご利用になる場合、Cookie の使用に同意してください。
            <p>
              詳細は{' '}
              <a className="underline" href="#">
                プライバシーポリシー
              </a>{' '}
              をご覧ください。
            </p>
          </div>
          <div className={'mt-4 text-right'}>
            <div className={'relative inline-block'}>
              <Button
                className={cn(
                  'bg-indigo-500 hover:bg-indigo-500/90',
                  'dark:bg-indigo-100 dark:hover:bg-indigo-100/90',
                )}
                disabled={!show}
                onClick={handleClick}
              >
                同意する
              </Button>
              <span className="absolute right-0 top-0 -mr-1 -mt-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500" />
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
