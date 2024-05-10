'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { useAppContext } from '@/app/provider';

type Props = {
  children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
  const { isOpenMenu } = useAppContext();
  return (
    <main
      className={cn(
        'w-full pb-20 transition-transform md:pl-72',
        isOpenMenu ? 'translate-x-72' : '',
      )}
    >
      {children}
    </main>
  );
};
