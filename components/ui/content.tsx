import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
  className?: string;
  desc?: React.ReactNode;
};

export const Content = ({ title, children, className, desc }: Props) => {
  return (
    <div
      className={cn('flex min-h-screen flex-col gap-10 px-10 pb-10', className)}
    >
      <div className={'flex flex-col gap-5 pt-20'}>
        <h1 className={'text-xl font-bold'}>{title}</h1>
        {desc && <div className={'text-sm text-muted-foreground'}>{desc}</div>}
      </div>
      <div className={'flex flex-col gap-20'}>{children}</div>
    </div>
  );
};
