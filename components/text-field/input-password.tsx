'use client';

import { cn } from '@/lib/utils';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import * as React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type InputPasswordProps = {
  disabled?: boolean;
  className?: string;
};

export const InputPassword = React.forwardRef<
  HTMLInputElement,
  InputPasswordProps
>(({ disabled, className, ...props }: InputPasswordProps, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label
      className={cn(
        'inline-flex gap-4 border border-input pl-4 font-mono text-sm',
        'focus-within:ring-2 focus-within:ring-ring',
        disabled
          ? 'cursor-not-allowed text-muted-foreground'
          : 'cursor-pointer',
        className,
      )}
    >
      <div className={cn('flex items-center')}>
        <Lock size={'1em'} />
      </div>
      <Input
        autoComplete={'new-password'}
        className={
          'disabled:opacity-1 rounded-none border-0 px-0 focus-visible:ring-0 focus-visible:ring-offset-0'
        }
        disabled={disabled}
        placeholder={'Password'}
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        {...props}
      />
      <div>
        <Button
          className={cn('flex items-center rounded-none')}
          onClick={() => setShowPassword((prev) => !prev)}
          size={'icon'}
          type={'button'}
          variant={'ghost'}
        >
          {showPassword ? <Eye size={'1.5em'} /> : <EyeOff size={'1.5em'} />}
        </Button>
      </div>
    </label>
  );
});

InputPassword.displayName = 'InputPassword';
