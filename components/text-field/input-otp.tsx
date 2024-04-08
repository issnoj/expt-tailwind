'use client';

import { cn } from '@/lib/utils';
import { Key } from 'lucide-react';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

type InputPasswordProps = {
  value: string;
  onBlur: () => void;
  onExpired?: () => void;
  disabled?: boolean;
  className?: string;
  expireAt?: Date;
};

export const InputOtp = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  (
    {
      disabled,
      className,
      value,
      expireAt,
      onExpired,
      ...props
    }: InputPasswordProps,
    ref,
  ) => {
    const [focus, setFocus] = useState(false);
    const [expired, setExpired] = useState(false);
    const nowIndex = value.length < 6 ? value.length : 5;
    const values = value.split('');

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      const length = e.target.value.length;
      e.target.setSelectionRange(length, length);
      setFocus(true);
    };

    const handleBlur = () => {
      setFocus(false);
      props.onBlur();
    };

    const handleExpired = useCallback(() => {
      setExpired(true);
      if (!onExpired) return;
      onExpired();
    }, [onExpired]);

    return (
      <label
        className={cn(
          'relative inline-flex gap-4 border border-input pl-4 font-mono text-sm',
          disabled || expired
            ? 'cursor-not-allowed text-muted-foreground'
            : 'cursor-pointer',
          className,
        )}
      >
        <div className={cn('flex items-center')}>
          <Key size={'1em'} />
        </div>
        <div className={'flex h-10 items-center gap-2 p-1'}>
          {[...Array(6)].map((_, i) => {
            const active = nowIndex === i && focus;
            return (
              <div
                className={cn(
                  'flex h-8 w-[2em] items-center justify-center border',
                  active && 'border-2 border-foreground',
                  expired && 'collapse',
                )}
                key={i}
              >
                {active && values.length < 6 && (
                  <div
                    className={
                      'absolute h-[1em] animate-caret border-0 border-l-[1px] border-black font-thin'
                    }
                  />
                )}
                {values[i]}
              </div>
            );
          })}
          {expired && (
            <span className={'absolute text-xs text-destructive'}>
              有効期限が切れました
            </span>
          )}
        </div>
        {!!expireAt && (
          <div
            className={
              'flex w-[4em] items-center justify-center border-l bg-secondary'
            }
          >
            <Expire expireAt={expireAt} onExpired={handleExpired} />
          </div>
        )}
        <input
          className={cn(
            'absolute inset-0 opacity-0',
            'left-[calc(1em+32px)] w-[calc(12em+48px)]',
          )}
          disabled={disabled || expired}
          inputMode={'numeric'}
          maxLength={6}
          onFocus={handleFocus}
          pattern="^\d+$"
          ref={ref}
          {...props}
          onBlur={handleBlur}
        />
      </label>
    );
  },
);

InputOtp.displayName = 'InputOtp';

const Expire = React.memo(
  ({ expireAt, onExpired }: { expireAt: Date; onExpired: () => void }) => {
    const expireTime = expireAt.getTime();
    const [second, setSecond] = useState<number>(
      Math.max(0, Math.ceil((expireTime - Date.now()) / 1000)),
    );

    useEffect(() => {
      const id = setInterval(() => {
        const second = Math.max(0, Math.ceil((expireTime - Date.now()) / 1000));
        if (second <= 0) {
          onExpired();
          clearInterval(id);
          setSecond(0);
        } else {
          setSecond(second);
        }
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }, [expireTime, onExpired]);

    return <span>{second}s</span>;
  },
);

Expire.displayName = 'Expire';
