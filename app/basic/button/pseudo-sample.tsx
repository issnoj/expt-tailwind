'use client';

import { Board } from '@/components/layouts/board';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

const pseudoClasses = [
  ':hover',
  ':active',
  ':focus',
  ':focus-visible',
  ':focus-within',
];

export const PseudoSample = () => {
  const [containerState, setContainerState] = React.useState<string[]>([]);
  const [buttonState, setButtonState] = React.useState<string[]>([]);
  const [button2State, setButton2State] = React.useState<string[]>([]);
  const [button3State, setButton3State] = React.useState<string[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const button2Ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    function checkState() {
      if (buttonRef.current === null || containerRef.current === null) {
        return;
      }

      const newButtonState: string[] = [];
      const newButton2State: string[] = [];
      const newContainerState: string[] = [];
      pseudoClasses.forEach((v) => {
        if (buttonRef.current?.matches(v)) {
          newButtonState.push(v);
        }
        if (button2Ref.current?.matches(v)) {
          newButton2State.push(v);
        }
        if (containerRef.current?.matches(v)) {
          newContainerState.push(v);
        }
      });

      setButtonState(newButtonState);
      setButton2State(newButton2State);
      setContainerState(newContainerState);
    }

    const intervalId = setInterval(() => {
      checkState();
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [buttonRef]);

  return (
    <Board>
      <div className={'flex flex-col flex-wrap gap-2 sm:flex-row'}>
        <div
          className={'flex select-none flex-col gap-5 border p-5'}
          ref={containerRef}
        >
          コンテナ
          <div className={'flex flex-row gap-5 sm:flex-col'}>
            <Button className={'w-20'} ref={buttonRef} size={'sm'}>
              ボタン1
            </Button>
            <Button className={'w-20'} ref={button2Ref} size={'sm'}>
              ボタン2
            </Button>
          </div>
        </div>
        <div className={'overflow-x-auto'}>
          <Table className={'text-xs sm:text-sm'}>
            <TableHeader>
              <TableRow>
                <TableHead className={'whitespace-nowrap'}>
                  疑似クラス
                </TableHead>
                <TableHead className={'whitespace-nowrap'}>コンテナ</TableHead>
                <TableHead className={'whitespace-nowrap'}>ボタン1</TableHead>
                <TableHead className={'whitespace-nowrap'}>ボタン2</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pseudoClasses.map((v, i) => (
                <TableRow key={i}>
                  <TableHead>{v}</TableHead>
                  <TableCell className={cn('text-center')}>
                    <span
                      className={cn(
                        'collapse',
                        containerState.includes(v) && 'visible',
                      )}
                    >
                      {'\u{2705}'}
                    </span>
                  </TableCell>
                  <TableCell className={cn('text-center')}>
                    <span
                      className={cn(
                        'collapse',
                        buttonState.includes(v) && 'visible',
                      )}
                    >
                      {'\u{2705}'}
                    </span>
                  </TableCell>
                  <TableCell className={cn('text-center')}>
                    <span
                      className={cn(
                        'collapse',
                        button2State.includes(v) && 'visible',
                      )}
                    >
                      {'\u{2705}'}
                    </span>
                  </TableCell>
                  <TableCell className={cn('text-center')}>
                    <span
                      className={cn(
                        'collapse',
                        button3State.includes(v) && 'visible',
                      )}
                    >
                      {'\u{2705}'}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Board>
  );
};
