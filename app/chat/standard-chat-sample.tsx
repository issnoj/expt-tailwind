'use client';

import { useChat } from './use-chat';
import { InputStandardChat } from '@/app/chat/input-standard-chat';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { useState } from 'react';
import { Board } from '@/components/ui/board';

const FILE_TYPES = ['image/webp', 'image/jpeg', 'image/png', 'image/svg+xml'];

const FormSchema = z.object({
  message: z.string().min(3, {
    message: '3文字以上入力してください',
  }),
  file: z
    .custom<FileList | null>()
    .refine(
      (fileList) => {
        if (!fileList || fileList.length === 0) {
          return true;
        }
        const file = fileList[0];
        return file.size <= 5 * 1024 * 1024;
      },
      {
        message: 'ファイルサイズが大きすぎます（最大5MB）',
      },
    )
    .refine(
      (fileList) => {
        if (!fileList || fileList.length === 0) {
          return true;
        }
        const file = fileList[0];
        return FILE_TYPES.includes(file.type);
      },
      {
        message: 'サポートされていないファイル形式です',
      },
    ),
});

export type StandardChatSampleFormData = z.infer<typeof FormSchema>;

export const StandardChatSample = () => {
  const { append, loading, setLoading } = useChat();
  const form = useForm<StandardChatSampleFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      message: '',
      file: null,
    },
  });
  const message = form.watch('message');
  const [fileUuid, setFileUuid] = useState<string>();

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    form.reset();
    append({
      content: data.message,
      createdAt: new Date(),
      files: fileUuid ? [fileUuid] : [],
    });
  };

  const handleChangeFile = async (
    file: File | undefined,
    callback?: (success: boolean) => void,
  ) => {
    if (!file) {
      setFileUuid(undefined);
      form.setValue('file', null);
      return;
    }
    setLoading(true);
    const uuid = await new Promise<string | undefined>((resolve) => {
      setTimeout(() => {
        resolve('some-uuid');
      }, 1000);
    });
    setFileUuid(uuid);
    setLoading(false);
    if (callback) callback(true);
  };

  return (
    <Board
      className={'w-96'}
      remark={
        <div>
          <ul>
            <li>
              ・<kbd>Enter</kbd> で改行
            </li>
            <li>
              ・<kbd>Ctrl</kbd> + <kbd>Enter</kbd> で送信
            </li>
            <li>・絵文字</li>
            <li>・1つの画像ファイル添付</li>
          </ul>
        </div>
      }
      title={'標準チャット'}
    >
      <Form {...form}>
        <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
          <InputStandardChat
            control={form.control}
            disabledButton={loading || message === ''}
            disabledInput={loading}
            getMessage={() => form.getValues('message')}
            onChangeFile={handleChangeFile}
            onSubmit={form.handleSubmit(onSubmit)}
            setMessage={(value) => form.setValue('message', value)}
            trigger={form.trigger}
          />
        </form>
      </Form>
    </Board>
  );
};
