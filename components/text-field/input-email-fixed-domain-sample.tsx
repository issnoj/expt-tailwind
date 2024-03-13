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
import { InputEmailFixedDomain } from '@/components/ui/text-field/input-email-fixed-domain';
import { useState } from 'react';

const FormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: '入力してください',
    })
    .regex(/^(?!\.)[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]{1,63}(?<!\.)$/, {
      message: '入力された文字列が不正です',
    }),
});

export const InputEmailFixedDomainSample = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
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
    <div>
      <Form {...form}>
        <form
          className="space-y-4"
          noValidate
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputEmailFixedDomain
                    disabled={loading}
                    domain={'gmail.com'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
