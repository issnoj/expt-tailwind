'use client';

import { List, ListItem } from '@/components/list/list';
import { cn } from '@/lib/utils';
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Board } from '@/components/layouts/board';

export const ScaleSample = () => {
  return (
    <Board className={'flex flex-col gap-5'}>
      <List>
        <ListItem>
          拡大率は X軸、Y軸、Z軸の順に半角スペース区切りで指定。値が 1 なら X,
          Y軸の倍率
          <List>
            <ListItem>
              <code>scale: 2</code> : X, Y軸に 2 倍
            </ListItem>
            <ListItem>
              <code>scale: 2 3</code> : X軸に 2 倍、Y軸に 3 倍
            </ListItem>
            <ListItem>
              <code>scale: 2 3 4</code> : X軸に 2 倍、Y軸に 3 倍、Z軸に 4 倍
            </ListItem>
          </List>
        </ListItem>
      </List>
      <div className={'flex flex-col gap-10'}>
        <Scale />
      </div>
    </Board>
  );
};

const Scale = () => {
  const [perspective, setPerspective] = React.useState(200);
  const [perspectiveOrigin, setPerspectiveOrigin] = React.useState({
    x: 100,
    y: 100,
  });
  const [state, setState] = React.useState({ x: 1, y: 1, z: 1 });
  const [rotateY, setRotateY] = React.useState(0);

  const handleChangeOriginX = (value: number[]) => {
    setPerspectiveOrigin({ ...perspectiveOrigin, x: value[0] });
  };
  const handleChangeOriginY = (value: number[]) => {
    setPerspectiveOrigin({ ...perspectiveOrigin, y: value[0] });
  };
  const handleValueChange = (value: number[]) => {
    setPerspective(value[0]);
  };
  const handleChangeStateX = (value: number[]) => {
    setState({ ...state, x: value[0] });
  };
  const handleChangeStateY = (value: number[]) => {
    setState({ ...state, y: value[0] });
  };
  const handleChangeStateZ = (value: number[]) => {
    setState({ ...state, z: value[0] });
  };
  const handleRotateY = (value: number[]) => {
    setRotateY(value[0]);
  };

  return (
    <div>
      <div className={'my-5 max-w-xl text-sm'}>
        <p>
          perspective-origin:{' '}
          {`${perspectiveOrigin.x}px ${perspectiveOrigin.y}px`}
        </p>
        <div className={'mt-2 flex gap-5'}>
          <div className={'mt-2 flex grow items-center gap-2'}>
            <span>x:</span>
            <Slider
              defaultValue={[perspectiveOrigin.x]}
              max={400}
              min={-400}
              onValueChange={handleChangeOriginX}
              step={1}
            />
            {/*<Input onChange={handleChangeOriginX} value={perspectiveOrigin.x} />*/}
          </div>
          <div className={'mt-2 flex grow items-center gap-2'}>
            <span>y:</span>
            <Slider
              defaultValue={[perspectiveOrigin.y]}
              max={400}
              min={-400}
              onValueChange={handleChangeOriginY}
              step={1}
            />
            {/*<Input onChange={handleChangeOriginY} value={perspectiveOrigin.y} />*/}
          </div>
        </div>
      </div>
      <div className={'my-5 max-w-xl text-sm'}>
        <p>perspective: {perspective}px</p>
        <Slider
          className={'mt-2 w-full'}
          defaultValue={[200]}
          max={300}
          min={0}
          onValueChange={handleValueChange}
          step={1}
        />
      </div>
      <div className={'my-5 max-w-xl text-sm'}>
        <p>rotateY: {rotateY}deg</p>
        <Slider
          className={'mt-2 w-full'}
          defaultValue={[rotateY]}
          max={180}
          min={-180}
          onValueChange={handleRotateY}
          step={1}
        />
      </div>
      <div className={'my-5 max-w-xl text-sm'}>
        <p>x: {state.x}</p>
        <Slider
          className={'mt-2 w-full'}
          defaultValue={[state.x]}
          max={5}
          min={0}
          onValueChange={handleChangeStateX}
          step={0.1}
        />
      </div>
      <div className={'my-5 max-w-xl text-sm'}>
        <p>y: {state.y}</p>
        <Slider
          className={'mt-2 w-full'}
          defaultValue={[state.y]}
          max={5}
          min={0}
          onValueChange={handleChangeStateY}
          step={0.1}
        />
      </div>
      <div className={'my-5 max-w-xl text-sm'}>
        <p>z: {state.z}</p>
        <Slider
          className={'mt-2 w-full'}
          defaultValue={[state.z]}
          max={5}
          min={0}
          onValueChange={handleChangeStateZ}
          step={0.1}
        />
      </div>
      <div className={'mt-10 flex flex-col gap-2 px-10'}>
        <BallWrapper
          style={{
            transformStyle: 'preserve-3d',
            perspective,
            perspectiveOrigin: `${perspectiveOrigin.x}px ${perspectiveOrigin.y}px`,
            background: [
              'linear-gradient(0deg, transparent 1px 4px, hsl(var(--foreground)/0.2) 5px) 0 0 / 5px 5px',
              'linear-gradient(90deg, transparent 1px 4px, hsl(var(--foreground)/0.2) 5px) 0 0 / 5px 5px',
            ].join(','),
          }}
        >
          <Ball
            style={{
              scale: `${state.x} ${state.y} ${state.z}`,
              translate: '0 0',
              rotate: `0 1 0 ${rotateY}deg`,
              transformStyle: 'preserve-3d',
              perspective: '200px',
              perspectiveOrigin: 'center center',
            }}
            title={`${state.x} ${state.y} ${state.z}`}
          />
          <div
            className={'absolute z-10 size-1 animate-pulse bg-blue-400'}
            style={{
              top: `${perspectiveOrigin.y}px`,
              left: `${perspectiveOrigin.x}px`,
            }}
          />
        </BallWrapper>
      </div>
    </div>
  );
};

const BallWrapper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'relative flex size-[200px] items-center justify-center ring-1',
      className,
    )}
    {...props}
  />
);

const Ball = ({
  title,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { title: string }) => (
  <div
    className={cn(
      'relative grid size-[50px] place-items-center bg-red-400/80 text-xs',
      className,
    )}
    {...props}
  >
    <div className={'absolute top-[1.2em] whitespace-nowrap'}>{title}</div>
    <div
      className={'absolute size-[50px] bg-blue-400/80'}
      style={{
        transformOrigin: 'left',
        rotate: '0 1 0 90deg',
      }}
    />
    <div
      className={'absolute size-[50px] bg-green-400/80'}
      style={{
        transformOrigin: 'right',
        rotate: '0 1 0 -90deg',
      }}
    />
    <div
      className={'absolute size-[50px] bg-yellow-400/80'}
      style={{
        transformOrigin: 'right',
        translate: '0 0 -50px',
      }}
    />
  </div>
);
