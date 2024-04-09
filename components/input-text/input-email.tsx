'use client';

import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import * as React from 'react';

type InputEmailProps = React.InputHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  className?: string;
};

export const InputEmail = React.forwardRef<HTMLInputElement, InputEmailProps>(
  ({ disabled, className, ...props }: InputEmailProps, ref) => {
    return (
      <label
        className={cn(
          'inline-flex gap-4 border border-input px-4 font-mono text-sm',
          'focus-within:ring-2 focus-within:ring-ring',
          disabled
            ? 'cursor-not-allowed text-muted-foreground'
            : 'cursor-pointer',
          className,
        )}
      >
        <div className={cn('flex items-center')}>
          <Mail size={'1em'} />
        </div>
        <Input
          className={
            'disabled:opacity-1 rounded-none border-0 px-0 focus-visible:ring-0 focus-visible:ring-offset-0'
          }
          disabled={disabled}
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
