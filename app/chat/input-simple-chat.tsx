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
import { Textarea } from '@/components/textarea';

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
  return (
    <FormField
      control={control}
      name={'message'}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative flex rounded border bg-background py-4 pl-4 pr-16 shadow focus-within:border-primary">
              <Textarea
                disabled={disabledInput}
                onSubmit={onSubmit}
                placeholder="Send a message"
                rows={1}
                {...field}
                submitEnter
              />
              <div className={'absolute bottom-2 right-2 mt-4'}>
                <Button disabled={disabledButton} size="icon">
                  <Send size="1em" />
                </Button>
              </div>
            </div>
          </FormControl>
          <FormMessage className={'px-2'} />
        </FormItem>
      )}
    />
  );
};
