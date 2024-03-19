'use client';

import { InputMultiline } from '@/components/ui/text-field/input-multiline';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const FormSchema = z.object({
  message: z.string().min(3, {
    message: '3文字以上入力してください',
  }),
});

export type FormData = z.infer<typeof FormSchema>;

export const LinedMultilineSample = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <Form {...form}>
        <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div
                    className={
                      'flex flex-col overflow-hidden rounded border border-input bg-background p-2 shadow focus-within:border-primary'
                    }
                  >
                    <InputMultiline
                      className={
                        'bg-[linear-gradient(0deg,hsl(var(--foreground)_/_0.2)_1px,transparent_1px)] bg-[length:1em_1lh] bg-local'
                      }
                      disabled={loading}
                      maxRows={6}
                      minRows={3}
                      placeholder={'文章を入力してください'}
                      rows={3}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className={'flex justify-end'}>
            <Button className={'mt-4'} disabled={loading}>
              送信
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
