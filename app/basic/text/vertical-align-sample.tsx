import React from 'react';
import { Board } from '@/components/layouts/board';
import { cn } from '@/lib/utils';

export const VerticalAlignSample = () => {
  return (
    <Board>
      <div className={'w-full overflow-x-auto'}>
        <Mesh className={'min-w-max text-[60px] leading-loose'}>
          <Span>Cascading</Span>
          {[
            'align-top',
            'align-middle',
            'align-bottom',
            'align-text-top',
            'align-text-bottom',
            'align-sub',
            'align-super',
          ].map((v, i) => (
            <Indicator className={cn(v)} key={i}>
              {v.slice(6)}
            </Indicator>
          ))}
        </Mesh>
      </div>
    </Board>
  );
};

const Span = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <span className={cn('bg-blue-500/20', className)}>{children}</span>;
};

const Mesh = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative inline-block overflow-hidden bg-background',
        className,
      )}
    >
      <div
        className={
          'absolute left-0 top-0 h-[1lh] w-px border-l border-dashed border-foreground/30'
        }
      />
      <span className={'relative inline-block w-0 align-baseline'}>
        {[
          'bottom-[calc(4*1ex/2)] border-dashed',
          'bottom-[calc(3*1ex/2)] border-dashed',
          'bottom-[calc(2*1ex/2)] border-dashed',
          'bottom-[calc(1*1ex/2)] border-dashed',
          'bottom-[calc(0*1ex/2)]',
          'bottom-[calc(-1*1ex/2)] border-dashed',
          'bottom-[calc(-2*1ex/2)] border-dashed',
        ].map((v, i) => (
          <span
            className={cn(
              v,
              'absolute left-0 h-px w-screen border-b border-foreground/30',
            )}
            key={i}
          />
        ))}
      </span>
      {children}
    </div>
  );
};

const Indicator = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <span className={cn('bg-cyan-200 text-[14px] dark:bg-cyan-800', className)}>
    {children}
  </span>
);
