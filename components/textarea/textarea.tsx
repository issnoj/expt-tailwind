import React from 'react';
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';
import { cn } from '@/lib/utils';

type Props = TextareaAutosizeProps & {
  disabled: boolean;
  onSubmit: () => void;
  submitEnter?: boolean;
  className?: string;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ disabled, onSubmit, submitEnter = false, className, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key !== 'Enter') return;
      if (submitEnter && !e.shiftKey && !e.nativeEvent.isComposing) {
        onSubmit();
        e.preventDefault();
      }
      if (!submitEnter && e.ctrlKey && !e.nativeEvent.isComposing) {
        onSubmit();
        e.preventDefault();
      }
    };
    return (
      <TextareaAutosize
        autoComplete="off"
        autoCorrect="off"
        className={cn(
          'w-full resize-none border-0 bg-transparent',
          'focus:outline-0 focus-visible:outline-0',
          'disabled:cursor-not-allowed',
          className,
        )}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        ref={ref}
        rows={1}
        spellCheck={false}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
