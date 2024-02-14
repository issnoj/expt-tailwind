import { Markdown } from '@/components/ui/markdown';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  code?: string;
  meta?: string;
  desc?: string;
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
              'flex cursor-pointer items-center gap-2 text-foreground/40 hover:text-foreground',
              showCode && 'text-foreground',
            )}
          >
            <Switch checked={showCode} onCheckedChange={handleCheckedChange} />
            コードを表示する
          </Label>
        )}
        {desc && <p>{desc}</p>}
        {showCode && code && (
          <Markdown markdown={`~~~tsx ${meta} ${code}~~~`} />
        )}
      </div>
    </div>
  );
};
