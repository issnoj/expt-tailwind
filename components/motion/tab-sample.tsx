import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const tabs = [
  { icon: '🍅', label: 'Tomato' },
  { icon: '🥬', label: 'Lettuce' },
  { icon: '🧀', label: 'Cheese' },
];

export const TabSample = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="flex h-[100px] w-[300px] flex-col rounded border">
      <nav className={'h-[40px]'}>
        <ul className={'border-b-1 flex w-full border-b'}>
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
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
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
  );
};

const Test = ({ text, checked }: { text?: string; checked: boolean }) => {
  const [count, setCount] = useState(0);
  return <div>{text}</div>;
};

const Test2 = () => {
  const value = true;
  return (
    <>
      <Test checked={value} text="aaaaa" />
      <Test checked={false} />
      <Test checked />
      {'test'}
      <div />
    </>
  );
};
