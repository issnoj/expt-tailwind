import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export const Board = React.forwardRef<HTMLDivElement, Props>(
  ({ children, id, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'w-full rounded border bg-background p-8 shadow',
          className,
        )}
        id={id}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Board.displayName = 'Board';
