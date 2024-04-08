'use client';

import { useState } from 'react';
import { HamburgerButton } from '@/components/ui/hamburger-button';

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <HamburgerButton
      className={'bg-secondary text-blue-500'}
      onClick={handleClick}
      open={open}
    />
  );
};
