'use client';

import { InputSimpleChat } from '@/app/chat/input-simple-chat';
import { useChat } from './use-chat';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Board } from '@/components/layouts/board';

const FormSchema = z.object({
  message: z.string().min(3, {
    message: '3文字以上入力してください',
  }),
});

export type SimpleChatSampleFormData = z.infer<typeof FormSchema>;

export const SimpleChatSample = () => {
  const { append, loading } = useChat();
  const form = useForm<SimpleChatSampleFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      message: '',
    },
  });
  const message = form.watch('message');

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    form.reset();
    append({
      content: data.message,
      createdAt: new Date(),
    });
  };

  return (
    <Board
      className={'w-96'}
      remark={
        <div>
          <ul>
            <li>
              ・<kbd>Enter</kbd> で送信
            </li>
            <li>
              ・<kbd>Shift</kbd> + <kbd>Enter</kbd> で改行
            </li>
          </ul>
        </div>
      }
      title={'シンプルチャット'}
    >
      <Form {...form}>
        <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
          <InputSimpleChat
            control={form.control}
            disabledButton={loading || message === ''}
            disabledInput={loading}
            onSubmit={form.handleSubmit(onSubmit)}
          />
        </form>
      </Form>
    </Board>
  );
};
