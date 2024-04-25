'use client';

import { Board } from '@/components/layouts/board';
import React from 'react';
import { Button } from '@/components/ui/button';

const EACH_EVENT_HISTORY_LIMIT = 5;

export const ButtonEventSample = () => {
  const [histories, setHistories] = React.useState<Record<string, string[]>>(
    {},
  );

  const handleEvent = (e: React.FormEvent<HTMLButtonElement>) => {
    const name = e.nativeEvent.constructor.name;
    setHistories({
      ...histories,
      [name]: [e.type, ...(histories[name] ? histories[name] : [])],
    });
  };

  return (
    <Board className={'overflow-hidden'}>
      <div className={'flex flex-col gap-5 sm:flex-row'}>
        <Button
          className={'w-20 select-none'}
          onBlur={handleEvent}
          onClick={handleEvent}
          onContextMenu={handleEvent}
          onDoubleClick={handleEvent}
          onFocus={handleEvent}
          onKeyDown={handleEvent}
          onKeyUp={handleEvent}
          onMouseDown={handleEvent}
          onMouseOut={handleEvent}
          onMouseOver={handleEvent}
          onMouseUp={handleEvent}
          onScroll={handleEvent}
          onTouchCancel={handleEvent}
          onTouchEnd={handleEvent}
          onTouchStart={handleEvent}
          size={'sm'}
        >
          ボタン
        </Button>
        <div className={'flex flex-wrap gap-2 text-xs'}>
          {Object.keys(histories).map((key) => (
            <div className={'flex flex-col flex-wrap gap-1'} key={key}>
              <p className={'font-semibold'}>{key}</p>
              {histories[key].slice(0, EACH_EVENT_HISTORY_LIMIT).map((v, i) => (
                <p key={i}>
                  <span className={'tabular-nums text-foreground/60'}>
                    {String(histories[key].length - i).padStart(2, '0')}:
                  </span>
                  <span>{v}</span>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Board>
  );
};
