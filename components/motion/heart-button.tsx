'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const variants = {
  enter: (clicked: boolean) => {
    return { opacity: 0, y: clicked ? '-100%' : '100%' };
  },
  center: { opacity: 1, y: 0 },
  exit: (clicked: boolean) => {
    return { opacity: 0, y: clicked ? '100%' : '-100%' };
  },
};

export const HeartButton = () => {
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState(9);

  const handleClick = () => {
    setValue((prev) => prev + (clicked ? -1 : 1));
    setClicked((prev) => !prev);
  };

  return (
    <>
      <motion.button
        className={
          'flex h-8 items-center gap-2 overflow-hidden rounded-full bg-secondary px-4'
        }
        whileTap={{ scale: 1.1 }}
        onClick={handleClick}
      >
        <Heart
          size={'1em'}
          strokeWidth={clicked ? 0 : 2}
          className={cn(clicked ? 'fill-red-500 text-primary' : 'text-red-500')}
        />
        <div className={'relative'}>
          <div className={'collapse font-mono'}>{value}</div>
          <AnimatePresence initial={false} custom={clicked}>
            <motion.div
              className={'absolute left-0 top-0 font-mono'}
              variants={variants}
              custom={clicked}
              key={value}
              initial="enter"
              animate={'center'}
              exit={'exit'}
              transition={{
                ease: 'easeIn',
              }}
            >
              {value}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.button>
    </>
  );
};
