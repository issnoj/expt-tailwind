'use client';

import * as React from 'react';
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';

import { cn } from '@/lib/utils';

type InputMultilineProps = TextareaAutosizeProps;

export const InputMultiline = React.forwardRef<
  HTMLTextAreaElement,
  InputMultilineProps
>(({ className, ...props }, ref) => {
  return (
    <TextareaAutosize
      className={cn(
        'bg-background focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

InputMultiline.displayName = 'InputMultilineText';
