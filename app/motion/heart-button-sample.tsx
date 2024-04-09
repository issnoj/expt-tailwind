'use client';

import { Board } from '@/components/ui/board';
import React, { useCallback } from 'react';
import { Link } from '@/components/ui/link';
import { HeartButton, HeartButtonState } from '@/components/animate-button';

export const HeartButtonSample = () => {
  const handleClicked = useCallback((state: HeartButtonState) => {
    console.log(state);
  }, []);

  return (
    <Board
      remark={
        <div>
          Framer Motion の{' '}
          <Link
            href="https://www.framer.com/motion/animate-presence/"
            target="_blank"
          >
            AnimatePresence
          </Link>{' '}
          を使用
          <br />
          Exit animations の{' '}
          <Link
            href="https://codesandbox.io/p/sandbox/framer-motion-image-gallery-pqvx3?file=%2Fsrc%2FExample.tsx&from-embed="
            target="_blank"
          >
            サンプル
          </Link>{' '}
          を参考に作成
        </div>
      }
      title={'ライクボタン'}
    >
      <HeartButton
        initialState={{
          value: 9,
          clicked: false,
        }}
        onClicked={handleClicked}
      />
    </Board>
  );
};
