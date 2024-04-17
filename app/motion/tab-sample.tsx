'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Board } from '@/components/ui/board';

const tabs = [
  { icon: '🍅', label: 'Tomato' },
  { icon: '🥬', label: 'Lettuce' },
  { icon: '🧀', label: 'Cheese' },
];

export const TabSample = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Board
      remark={'同じ layoutId を使うことで、別要素からアニメーション'}
      title={'タブ'}
    >
      <div className="flex h-[100px] w-[300px] flex-col rounded border bg-background">
        <nav className={'h-[40px]'}>
          <ul className={'flex w-full border-b-2'}>
            {tabs.map((item) => (
              <li
                className={cn(
                  'relative flex-1 cursor-pointer p-1 pb-2',
                  item === selectedTab ? 'bg-secondary' : '',
                )}
                key={item.label}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div
                    className="absolute inset-x-0 bottom-0 h-1 bg-blue-500"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main className={'flex h-full items-center justify-center'}>
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              initial={{ y: 10, opacity: 0 }}
              key={selectedTab ? selectedTab.label : 'empty'}
              transition={{ duration: 0.2 }}
            >
              {selectedTab.icon}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </Board>
  );
};
