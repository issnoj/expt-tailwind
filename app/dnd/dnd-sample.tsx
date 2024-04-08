'use client';

import {
  Active,
  closestCenter,
  closestCorners,
  DndContext,
  DragCancelEvent,
  DragOverEvent,
  Over,
  pointerWithin,
  rectIntersection,
  useDndMonitor,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import { cn } from '@/lib/utils';
import { Board } from '@/components/ui/board';
import { useState } from 'react';
import type { DragEndEvent } from '@dnd-kit/core/dist/types';
import { ReRender } from '@/components/ui/re-render';
import { UniqueIdentifier } from '@dnd-kit/core/dist/types/other';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Flame, Trash } from 'lucide-react';

type Ball = {
  id: UniqueIdentifier;
  parent: UniqueIdentifier | undefined;
  type: 'circle' | 'rect';
};

const initialBalls: Ball[] = [
  {
    id: '1',
    parent: undefined,
    type: 'circle',
  },
  {
    id: '2',
    parent: undefined,
    type: 'circle',
  },
  {
    id: '3',
    parent: 'C',
    type: 'circle',
  },
  {
    id: '4',
    parent: undefined,
    type: 'rect',
  },
];

const validate = (
  over: Over,
  active: Active,
  balls: Ball[],
): { valid: boolean; errorMessage: string | null } => {
  const overData = over.data.current as {
    accepts: string[];
    acceptCount: number;
  } | null;
  const activeData = active.data.current as { type: string } | null;

  // ゴミ箱へのドロップや、データの制限がない場合はOK
  if (!overData || !activeData || over.id === 'trash') {
    return {
      valid: true,
      errorMessage: null,
    };
  }

  // 同じ要素をドロップしようとした場合はOK
  const same = balls.find(
    (ball) => ball.id === active.id && ball.parent === over.id,
  );
  if (same) {
    return {
      valid: true,
      errorMessage: null,
    };
  }

  // 許可されていないタイプの場合はNG
  if (!overData.accepts.includes(activeData.type)) {
    return {
      valid: false,
      errorMessage: '四角は入れられません',
    };
  }

  // 許可されている数を超えた場合はNG
  const count = balls.filter((ball) => ball.parent === over.id).length;
  if (count >= overData.acceptCount) {
    return {
      valid: false,
      errorMessage: '2個までです',
    };
  }

  return {
    valid: true,
    errorMessage: null,
  };
};

export const DndSample = () => {
  return (
    <Board title={'ボールを箱に入れる'}>
      <ReRender collapse={false} text={'リセット'}>
        <Content />
      </ReRender>
    </Board>
  );
};

const Content = () => {
  const containers = ['A', 'B', 'C'];
  const [balls, setBalls] = useState<Ball[]>(initialBalls);
  const [collisionType, setCollisionType] = useState('');

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || !validate(over, active, balls).valid) return;
    setBalls((prev) =>
      prev.map((ball) =>
        ball.id === active.id ? { ...ball, parent: over.id } : ball,
      ),
    );
  };

  return (
    <DndContext
      collisionDetection={(args) => {
        switch (collisionType) {
          case 'pointerWithin':
            return pointerWithin(args);
          case 'closestCenter':
            return closestCenter(args);
          case 'closestCorners':
            return closestCorners(args);
        }
        return rectIntersection(args);
      }}
      onDragEnd={handleDragEnd}
    >
      <div className={'space-y-4'}>
        <div className={'flex items-center gap-2'}>
          <span className={'shrink-0 text-sm text-foreground/60'}>
            衝突検出アルゴリズム：
          </span>
          <Select
            defaultValue={'rectIntersection'}
            onValueChange={(value) => setCollisionType(value)}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={'Select collision detection algorithm'}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={'rectIntersection'}>
                rectIntersection
              </SelectItem>
              <SelectItem value={'pointerWithin'}>
                pointerWithin (キーボード操作では動作しない)
              </SelectItem>
              <SelectItem value={'closestCenter'}>closestCenter</SelectItem>
              <SelectItem value={'closestCorners'}>closestCorners</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className={'flex gap-4'}>
          {balls.map((ball) => {
            if (!ball.parent) {
              return (
                <Ball ball={ball} key={ball.id}>
                  {ball.id}
                </Ball>
              );
            }
            return null;
          })}
        </div>

        <div className={'flex gap-2'}>
          {containers.map((id) => (
            <Droppable balls={balls} id={id} key={id} />
          ))}
          <BurnBarrel />
        </div>
        <Info />
      </div>
    </DndContext>
  );
};

const Info = ({ className }: { className?: string }) => {
  const [eventCount, setEventCount] = useState<{
    cancel: number;
    end: number;
    move: number;
    over: number;
    start: number;
  }>({
    cancel: 0,
    end: 0,
    move: 0,
    over: 0,
    start: 0,
  });
  const [message, setMessage] = useState('');

  useDndMonitor({
    onDragStart(event) {
      setMessage(`Drag Start ${event.active.id}`);
      setEventCount((prev) => ({ ...prev, start: prev.start++ }));
    },
    onDragEnd(event) {
      setMessage(`Drag End ${event.active.id} -> ${event?.over?.id}`);
      setEventCount((prev) => ({ ...prev, end: prev.end++ }));
    },
    onDragCancel(event: DragCancelEvent) {
      setMessage(`Drag Cancel ${event.active.id}`);
      setEventCount((prev) => ({ ...prev, cancel: prev.cancel++ }));
    },
    onDragMove(event: DragCancelEvent) {
      setMessage(
        `Drag Move ${event.active.id} -> ${event?.over?.id} (x,y)=(${Math.ceil(event.delta.x)},${Math.ceil(event.delta.y)})`,
      );
      setEventCount((prev) => ({ ...prev, move: prev.move++ }));
    },
    onDragOver(event: DragOverEvent) {
      setMessage(`Drag Over ${event.active.id} -> ${event?.over?.id}`);
      setEventCount((prev) => ({ ...prev, over: prev.over++ }));
    },
  });

  return (
    <div className={cn('border p-1 text-xs', className)}>
      <pre>{message}</pre>
      <pre>{JSON.stringify(eventCount, null, 2)}</pre>
    </div>
  );
};

const Droppable = ({ id, balls }: { id: UniqueIdentifier; balls: Ball[] }) => {
  const { isOver, setNodeRef, over, active } = useDroppable({
    id,
    data: {
      accepts: ['circle'],
      acceptCount: 2,
    },
  });
  const result =
    over && active
      ? validate(over, active, balls)
      : {
          valid: true,
          errorMessage: null,
        };
  const filteredBalls = balls.filter((ball) => ball.parent === id);

  return (
    <div
      className={cn(
        'relative flex h-24 w-36 items-center gap-4 rounded-xl border bg-background p-4',
        'before:absolute before:-top-2 before:left-2 before:rounded-full before:bg-background before:px-2 before:text-xs before:text-foreground/60 before:content-[attr(data-label)]',
        result.valid && isOver && 'border-sky-500 bg-sky-500/10',
      )}
      data-label={id}
      ref={setNodeRef}
    >
      {filteredBalls.map((ball) => (
        <Ball ball={ball} key={ball.id}>
          {ball.id}
        </Ball>
      ))}
      {isOver && !result.valid && (
        <div
          className={
            'absolute bottom-1 left-0 w-full text-center text-xs text-destructive/60'
          }
        >
          {result.errorMessage}
        </div>
      )}
    </div>
  );
};

const Ball = ({
  ball,
  children,
}: {
  ball: Ball;
  children: React.ReactNode;
}) => {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useDraggable({
      id: ball.id,
      data: {
        type: ball.type,
      },
    });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(1.1)`,
      }
    : undefined;

  return (
    <button
      className={cn(
        'size-10 touch-none border bg-background font-bold text-foreground/60 hover:bg-secondary',
        'bg-gradient-radial from-white from-20% to-gray-200',
        'hover:text-foreground',
        ball.type === 'circle' ? 'rounded-full' : 'rounded',
        isDragging && 'z-50 shadow-lg',
      )}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
};

const BurnBarrel = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'trash',
  });

  return (
    <div
      className={cn(
        'grid w-20 place-content-center rounded border text-foreground/60',
        isOver
          ? 'border-red-800 bg-red-800/20 text-red-500'
          : 'border-border bg-secondary/60',
      )}
      ref={setNodeRef}
    >
      {isOver ? (
        <Flame className={'pointer-events-none animate-bounce'} />
      ) : (
        <Trash />
      )}
    </div>
  );
};
