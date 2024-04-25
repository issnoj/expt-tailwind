'use client';

import { List, ListItem } from '@/components/list/list';
import { cn } from '@/lib/utils';
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Board } from '@/components/layouts/board';
import { Link } from '@/components/ui/link';

const degrees = [-80, -50, -20, 0, 20, 50, 80];

export const RotateSample = () => {
  return (
    <Board className={'flex flex-col gap-5'}>
      <List>
        <ListItem>
          指定方法は複数あるが x y z のベクトル + 角度指定が分かりやすい且つ柔軟
          <List>
            <ListItem>
              X軸回転 : <code>rotate: 1 0 0 90deg</code>
            </ListItem>
            <ListItem>
              Y軸回転 : <code>rotate: 0 1 0 90deg</code>
            </ListItem>
            <ListItem>
              Z軸回転 : <code>rotate: 0 0 1 90deg</code>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          Z軸回転は平面上の回転なので transform-style, 視点系の設定は不要
        </ListItem>
        <ListItem>
          要素の裏側を見せないようにするには{' '}
          <Link
            external
            href={
              'https://developer.mozilla.org/ja/docs/Web/CSS/backface-visibility'
            }
          >
            backface-visibility
          </Link>{' '}
          を hidden に指定する
        </ListItem>
      </List>
      <div className={'flex flex-col gap-10'}>
        <XRotate />
        <YRotate />
        <ZRotate />
      </div>
    </Board>
  );
};

const XRotate = () => {
  const [perspective, setPerspective] = React.useState(200);

  const handleValueChange = (value: number[]) => {
    setPerspective(value[0]);
  };

  return (
    <div>
      <p>X軸回転</p>
      <div className={'my-5 max-w-xl pl-10 text-sm'}>
        <p>perspective: {perspective}px</p>
        <Slider
          className={'mt-1 w-full'}
          defaultValue={[200]}
          max={300}
          min={0}
          onValueChange={handleValueChange}
          step={1}
        />
      </div>
      <div className={'flex flex-col gap-2 overflow-x-auto px-10 py-5'}>
        {[
          { name: '左端視点', perspectiveOrigin: 'left center' },
          { name: '中央視点', perspectiveOrigin: 'center center' },
          { name: '右端視点', perspectiveOrigin: 'right center' },
        ].map((v, i) => (
          <div className={'flex gap-2'} key={i}>
            <p
              className={
                'mr-5 grid place-items-center text-sm text-foreground/60'
              }
            >
              {v.name}
            </p>
            {degrees.map((degree) => (
              <CardWrapper
                key={degree}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective,
                  perspectiveOrigin: v.perspectiveOrigin,
                }}
              >
                <Card style={{ rotate: `1 0 0 ${degree}deg` }}>{degree}</Card>
              </CardWrapper>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const YRotate = () => {
  const [perspective, setPerspective] = React.useState(200);

  const handleValueChange = (value: number[]) => {
    setPerspective(value[0]);
  };

  return (
    <div>
      <p>Y軸回転</p>
      <div className={'my-5 max-w-xl pl-10 text-sm'}>
        <p>perspective: {perspective}px</p>
        <Slider
          className={'mt-1 w-full'}
          defaultValue={[200]}
          max={300}
          min={0}
          onValueChange={handleValueChange}
          step={1}
        />
      </div>
      <div className={'flex flex-col gap-2 overflow-x-auto px-10 py-5'}>
        {[
          { name: '左端視点', perspectiveOrigin: 'left center' },
          { name: '中央視点', perspectiveOrigin: 'center center' },
          { name: '右端視点', perspectiveOrigin: 'right center' },
        ].map((v, i) => (
          <div className={'flex gap-2'} key={i}>
            <p
              className={
                'mr-5 grid place-items-center text-sm text-foreground/60'
              }
            >
              {v.name}
            </p>
            {degrees.map((degree) => (
              <CardWrapper
                key={degree}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective,
                  perspectiveOrigin: v.perspectiveOrigin,
                }}
              >
                <Card style={{ rotate: `0 1 0 ${degree}deg` }}>{degree}</Card>
              </CardWrapper>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ZRotate = () => {
  return (
    <div>
      <p>Z軸回転</p>
      <div className={'flex gap-2 overflow-x-auto p-10'}>
        {degrees.map((v) => (
          <CardWrapper key={v}>
            <Card style={{ rotate: `0 0 1 ${v}deg` }}>{v}</Card>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

const CardWrapper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex size-16 ring-1', className)} {...props} />
);

const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'grid size-16 origin-center place-items-center bg-gradient-to-tl from-red-300 via-purple-300 to-blue-300 text-xs',
      className,
    )}
    {...props}
  />
);
