import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const MdxExample = ({ children }: Props) => {
  return <div className={cn('my-10 flex border p-2')}>{children}</div>;
};
