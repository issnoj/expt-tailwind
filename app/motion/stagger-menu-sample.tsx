import { StaggerMenu } from '@/app/motion/stagger-menu';
import React from 'react';
import { Board } from '@/components/ui/board';
import { Link } from '@/components/ui/link';

export const StaggerMenuSample = () => {
  return (
    <Board
      remark={
        <>
          Framer Motion の{' '}
          <Link
            href={'https://www.framer.com/motion/stagger/'}
            target={'_blank'}
          >
            stagger
          </Link>{' '}
          で遅延
        </>
      }
      title={'メニュー'}
    >
      <StaggerMenu />
    </Board>
  );
};
