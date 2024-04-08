import TextareaAutosize from 'react-textarea-autosize';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { Control } from 'react-hook-form';
import { SimpleChatSampleFormData } from '@/app/chat/simple-chat-sample';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

export type InputChatProps = {
  onSubmit: () => void;
  disabledInput: boolean;
  disabledButton: boolean;
  control: Control<SimpleChatSampleFormData>;
};

export const InputSimpleChat = ({
  onSubmit,
  disabledInput,
  disabledButton,
  control,
}: InputChatProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      onSubmit();
      e.preventDefault();
    }
  };

  return (
    <FormField
      control={control}
      name={'message'}
      render={({ field }) => (
        <FormItem>
          <div className="relative flex rounded border bg-background shadow focus-within:border-primary">
            <FormControl>
              <TextareaAutosize
                autoComplete="off"
                autoCorrect="off"
                className="w-full resize-none border-0 bg-transparent py-4 pl-4 pr-16 focus:outline-0 focus-visible:outline-0"
                disabled={disabledInput}
                onKeyDown={handleKeyDown}
                placeholder="Send a message"
                rows={1}
                spellCheck={false}
                {...field}
              />
            </FormControl>
            <div className={'absolute bottom-2 right-2 mt-4'}>
              <Button disabled={disabledButton} size="icon">
                <Send size="1em" />
              </Button>
            </div>
          </div>
          <FormMessage className={'px-2'} />
        </FormItem>
      )}
    />
  );
};
