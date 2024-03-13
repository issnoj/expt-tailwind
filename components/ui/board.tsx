import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
  remark?: React.ReactNode;
  id?: string;
  className?: string;
};

export const Board = React.forwardRef<HTMLDivElement, Props>(
  ({ children, title, remark, id, className, ...props }, ref) => {
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
        {!!title && <h6 className={'mb-8 font-bold'}>{title}</h6>}
        {!!remark && (
          <div className={'-mt-6 mb-8 text-sm text-muted-foreground'}>
            {remark}
          </div>
        )}
        {children}
      </div>
    );
  },
);

Board.displayName = 'Board';
