import React from 'react';
import { Board } from '@/components/layouts/board';
import { cn } from '@/lib/utils';

const lorem = 'Lorem Ipsum';

const patterns = [
  {
    title: '下線',
    rows: [
      {
        text: lorem,
        className: 'underline',
      },
      {
        text: lorem,
        className: 'underline decoration-double',
      },
      {
        text: lorem,
        className: 'underline decoration-dotted',
      },
      {
        text: lorem,
        className: 'underline decoration-dashed',
      },
      {
        text: lorem,
        className: 'underline decoration-wavy',
      },
    ],
  },
  {
    title: '上線',
    rows: [
      {
        text: lorem,
        className: 'overline',
      },
      {
        text: lorem,
        className: 'overline decoration-double',
      },
      {
        text: lorem,
        className: 'overline decoration-dotted',
      },
      {
        text: lorem,
        className: 'overline decoration-dashed',
      },
      {
        text: lorem,
        className: 'overline decoration-wavy',
      },
    ],
  },
  {
    title: '打ち消し線',
    rows: [
      {
        text: lorem,
        className: 'line-through',
      },
      {
        text: lorem,
        className: 'line-through decoration-double',
      },
      {
        text: lorem,
        className: 'line-through decoration-dotted',
      },
      {
        text: lorem,
        className: 'line-through decoration-dashed',
      },
      {
        text: lorem,
        className: 'line-through decoration-wavy',
      },
    ],
  },
  {
    title: '線の太さ',
    rows: [
      {
        text: lorem,
        className: 'underline decoration-1',
      },
      {
        text: lorem,
        className: 'underline decoration-2',
      },
      {
        text: lorem,
        className: 'underline decoration-4',
      },
      {
        text: lorem,
        className: 'underline decoration-8',
      },
    ],
  },
  {
    title: '線の位置',
    rows: [
      {
        text: lorem,
        className: 'underline underline-offset-1',
      },
      {
        text: lorem,
        className: 'underline underline-offset-2',
      },
      {
        text: lorem,
        className: 'underline underline-offset-4',
      },
      {
        text: lorem,
        className: 'underline underline-offset-8',
      },
    ],
  },
];

export const TextDecorationSample = () => {
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
      <div className={cn('border p-4', className)}>{props.children}</div>
    </div>
  );
};
