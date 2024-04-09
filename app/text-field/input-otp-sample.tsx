'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import { InputOtp } from '@/components/input-text';
import { ReRender } from '@/components/ui/re-render';

const FormSchema = z.object({
  code: z.string().regex(/^[0-9]{6}$/, {
    message: '6つの数字を入力してください',
  }),
});

type Props = {
  expireAt: Date;
};

export const InputOtpSample = ({ expireAt }: Props) => {
  const [localExpireAt, setLocalExpireAt] = useState(expireAt);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code: '',
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <ReRender
      callback={() => {
        form.reset();
        const newExpireAt = new Date(Date.now() + 1000 * 10);
        setLocalExpireAt(newExpireAt);
      }}
      collapse={false}
    >
      <Form {...form}>
        <form
          className="space-y-4"
          noValidate
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOtp
                    disabled={loading}
                    expireAt={localExpireAt}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </ReRender>
  );
};
