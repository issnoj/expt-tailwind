'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { carouselSampleData } from '@/app/carousel/carousel-sample-data';
import * as React from 'react';
import { Board } from '@/components/ui/board';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const images = carouselSampleData;

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export const PseudoCarousel = () => {
  const [page, setPage] = useState({ page: 0, direction: 0 });
  const imageIndex = wrap(0, images.length, page.page);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage({ page: page.page + newDirection, direction: newDirection });
    },
    [page.page],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        paginate(-1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        paginate(1);
      }
    },
    [paginate],
  );

  return (
    <Board
      remark={
        <div>
          DOM削除時にアニメーションすることによるカルーセル
          <br />
          Framer Motion の AnimatePresence を利用
        </div>
      }
      title={'疑似カルーセル'}
    >
      <div
        className={
          'relative flex h-[200px] flex-col gap-4 overflow-hidden bg-black'
        }
        onKeyDownCapture={handleKeyDown}
      >
        <AnimatePresence custom={page.direction} initial={false}>
          <motion.div
            animate="center"
            className={
              'absolute top-0 flex size-full items-center justify-center'
            }
            custom={page.direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            exit="exit"
            initial="enter"
            key={page.page}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            variants={variants}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={''}
              className={'pointer-events-none h-[150px]'}
              src={images[imageIndex].src}
            />
          </motion.div>
        </AnimatePresence>
        <MoveButton
          className={'left-2 top-1/2 -translate-y-1/2'}
          onClick={() => paginate(-1)}
        >
          <ChevronLeft />
        </MoveButton>
        <MoveButton
          className={'right-2 top-1/2 -translate-y-1/2'}
          onClick={() => paginate(1)}
        >
          <ChevronRight />
        </MoveButton>
      </div>
    </Board>
  );
};

const MoveButton = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Button
      className={cn(
        'absolute z-10 rounded-full border-0 bg-transparent text-white hover:bg-white/80',
        className,
      )}
      onClick={onClick}
      size={'icon'}
      variant={'outline'}
    >
      {children}
    </Button>
  );
};
