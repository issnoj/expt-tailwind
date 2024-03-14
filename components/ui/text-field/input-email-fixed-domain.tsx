import * as React from 'react';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';

type InputEmailFixedDomainProps = {
  value: string;
  domain: string;
  disabled?: boolean;
  className?: string;
};

export const InputEmailFixedDomain = React.forwardRef<
  HTMLInputElement,
  InputEmailFixedDomainProps
>(
  (
    {
      value,
      domain,
      disabled,
      className,
      ...props
    }: InputEmailFixedDomainProps,
    ref,
  ) => {
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
            'disabled:opacity-1 w-0 min-w-[5ch] max-w-[20ch] rounded-none border-0 px-0 text-right focus-visible:ring-0 focus-visible:ring-offset-0'
          }
          disabled={disabled}
          placeholder={'-----'}
          ref={ref}
          style={{
            width: value !== '' ? `${value.length}ch` : 0,
          }}
          type="text"
          value={value}
          {...props}
        />
        <div className={'flex items-center'}>@{domain}</div>
      </label>
    );
  },
);

InputEmailFixedDomain.displayName = 'InputEmailFixedDomain';
