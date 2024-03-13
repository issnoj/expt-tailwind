'use client';

import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import * as React from 'react';

type InputEmailProps = {
  disabled?: boolean;
  className?: string;
};

export const InputEmail = React.forwardRef<HTMLInputElement, InputEmailProps>(
  ({ disabled, className, ...props }: InputEmailProps, ref) => {
    return (
      <label className={cn('relative block border', className)}>
        <div
          className={cn(
            'absolute bottom-0 top-0 flex w-[3em] items-center justify-center rounded-full text-sm',
            disabled ? 'cursor-default' : 'cursor-pointer ',
          )}
        >
          <Mail size={'1em'} />
        </div>
        <Input
          className={'rounded-none border-0 pl-[3em]'}
          disabled={disabled}
          id={'email'}
          placeholder={'Email'}
          ref={ref}
          type="email"
          {...props}
        />
      </label>
    );
  },
);

InputEmail.displayName = 'InputEmail';
