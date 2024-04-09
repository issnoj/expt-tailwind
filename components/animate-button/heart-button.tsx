import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
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

export type HeartButtonState = {
  value: number;
  clicked: boolean;
};

type Props = {
  initialState: HeartButtonState;
  onClicked: (state: HeartButtonState) => void;
};

export const HeartButton = ({ initialState, onClicked }: Props) => {
  const [state, setState] = useState<HeartButtonState>(initialState);

  const handleClick = useCallback(() => {
    const newState = {
      value: state.clicked ? state.value - 1 : state.value + 1,
      clicked: !state.clicked,
    };
    setState(newState);
    onClicked(newState);
  }, [onClicked, state.clicked, state.value]);

  return (
    <motion.button
      className={
        'flex h-8 items-center gap-2 overflow-hidden rounded-full bg-secondary px-4'
      }
      onClick={handleClick}
      whileTap={{ scale: 1.1 }}
    >
      <Heart
        className={cn(
          state.clicked ? 'fill-red-500 text-primary' : 'text-red-500',
        )}
        size={'1em'}
        strokeWidth={state.clicked ? 0 : 2}
      />
      <div className={'relative'}>
        <div className={'collapse font-mono'}>{state.value}</div>
        <AnimatePresence custom={state.clicked} initial={false}>
          <motion.div
            animate={'center'}
            className={'absolute left-0 top-0 font-mono'}
            custom={state.clicked}
            exit={'exit'}
            initial="enter"
            key={state.value}
            transition={{
              ease: 'easeIn',
            }}
            variants={variants}
          >
            {state.value}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.button>
  );
};
