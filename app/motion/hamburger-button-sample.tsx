'use client';

import { Board } from '@/components/layouts/board';
import React, { useState } from 'react';
import { HamburgerButton } from '@/components/animate-button';

export const HamburgerButtonSample = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Board title={'アイコン'}>
      <HamburgerButton
        className={'bg-secondary text-blue-500'}
        onClick={handleClick}
        open={open}
      />
    </Board>
  );
};
