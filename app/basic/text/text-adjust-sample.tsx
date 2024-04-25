import React from 'react';
import { Board } from '@/components/layouts/board';
import { cn } from '@/lib/utils';

const lorem =
  'Lorem Ipsum is dummy text of the printing. Lorem Ipsum has been the dummy text.';

const patterns = [
  {
    title: '省略',
    rows: [
      {
        text: lorem,
        className: 'truncate',
      },
      {
        text: lorem,
        className: 'line-clamp-1',
      },
      {
        text: lorem,
        className: 'line-clamp-2',
      },
      {
        text: lorem,
        className: 'line-clamp-3',
      },
      {
        text: lorem,
        className: 'line-clamp-4',
      },
    ],
  },
  {
    title: '行幅',
    rows: [
      {
        text: lorem,
        className: 'text-wrap',
      },
      {
        text: lorem,
        className: 'text-nowrap',
      },
      {
        text: lorem,
        className: 'text-balance',
      },
      {
        text: lorem,
        className: 'text-pretty',
      },
    ],
  },
  {
    title: '改行',
    rows: [
      {
        text: lorem,
        className: 'break-normal',
      },
      {
        text: lorem,
        className: 'break-words',
      },
      {
        text: lorem,
        className: 'break-all',
      },
      {
        text: lorem,
        className: 'break-keep',
      },
    ],
  },
  {
    title: '間隔',
    rows: [
      {
        text: lorem,
        className: 'tracking-tighter',
      },
      {
        text: lorem,
        className: 'tracking-tight',
      },
      {
        text: lorem,
        className: 'tracking-normal',
      },
      {
        text: lorem,
        className: 'tracking-wide',
      },
      {
        text: lorem,
        className: 'tracking-wider',
      },
      {
        text: lorem,
        className: 'tracking-widest',
      },
    ],
  },
  {
    title: '行間',
    rows: [
      {
        text: lorem,
        className: 'leading-none',
      },
      {
        text: lorem,
        className: 'leading-tight',
      },
      {
        text: lorem,
        className: 'leading-snug',
      },
      {
        text: lorem,
        className: 'leading-normal',
      },
      {
        text: lorem,
        className: 'leading-relaxed',
      },
      {
        text: lorem,
        className: 'leading-loose',
      },
    ],
  },
];

export const TextAdjustSample = () => {
  return (
    <Board className={'overflow-hidden'}>
      <div className={'flex flex-wrap gap-x-2 gap-y-10'}>
        {patterns.map((v, i) => (
          <Card key={i} title={v.title}>
            {v.rows.map((vv, j) => (
              <CardContent className={vv.className} key={j}>
                {vv.text}
              </CardContent>
            ))}
          </Card>
        ))}
      </div>
    </Board>
  );
};

const Card = ({ title, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={'overflow-hidden pr-4'} {...props}>
      <p className={'mb-5 font-medium'}>{title}</p>
      <div className={'flex flex-col gap-5'}>{props.children}</div>
    </div>
  );
};

const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={'text-xs'} {...props}>
      {className && (
        <code className={'block w-fit bg-cyan-300/30 px-1'}>{className}</code>
      )}
      <div className={cn('w-40 border', className)}>{props.children}</div>
    </div>
  );
};
