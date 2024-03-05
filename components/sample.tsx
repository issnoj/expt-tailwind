'use client';

import { Markdown } from '@/components/ui/markdown';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  code?: string;
  meta?: string;
  desc?: React.ReactNode;
};

export const Sample = ({ code, meta, desc, children }: Props) => {
  const [showCode, setShowCode] = useState(false);
  const handleCheckedChange = (value: boolean) => {
    setShowCode(value);
  };

  return (
    <div className={'flex flex-wrap gap-10'}>
      <div className={'pr-10'}>{children}</div>
      <div className={'flex flex-col gap-2'}>
        {code && (
          <Label
            className={cn(
              'flex cursor-pointer items-center gap-2 text-foreground/60 hover:text-foreground',
              showCode && 'text-foreground',
            )}
          >
            <Switch
              aria-label={'コードを表示する'}
              checked={showCode}
              onCheckedChange={handleCheckedChange}
            />
            コードを表示する
          </Label>
        )}
        {desc && <div>{desc}</div>}
        {showCode && code && (
          <Markdown markdown={`~~~tsx ${meta} ${code}\n~~~`} />
        )}
      </div>
    </div>
  );
};
