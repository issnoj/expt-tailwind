'use client';

import { cn } from '@/lib/utils';
import { Board } from '@/components/ui/board';

export const OtherLinkSample = () => {
  return (
    <Board title={'その他'}>
      <div className={'flex gap-4'}>
        <a
          className={cn(
            'px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
            'shadow-[0_0_0_4px_transparent] outline outline-4 outline-foreground/60',
            'hover:shadow-[0_0_0_4px_theme(colors.foreground)] hover:outline-offset-[10px] hover:outline-transparent',
            'ease-[cubic-bezier(.25,.5,.5,.7)] transform-gpu transition-all duration-500',
          )}
          href={'#'}
        >
          LINK
        </a>
      </div>
    </Board>
  );
};
