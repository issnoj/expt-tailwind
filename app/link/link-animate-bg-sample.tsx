'use client';

import { cn } from '@/lib/utils';
import { Board } from '@/components/ui/board';
import {
  LinkAnimateBg,
  LinkAnimateBgProps,
} from '@/components/link/link-animate-bg';

export const LinkAnimateBgSample = () => {
  const props = [
    { direction: 'h-center' },
    { direction: 'left' },
    { direction: 'left-right' },
    { direction: 'right' },
    { direction: 'right-left' },
    { direction: 'v-center' },
    { direction: 'top' },
    { direction: 'top-bottom' },
    { direction: 'bottom' },
    { direction: 'bottom-top' },
  ] as LinkAnimateBgProps[];
  return (
    <Board title={'背景アニメーション・リンク'}>
      <div className={'flex flex-col gap-4'}>
        <div className={'flex gap-4'}>
          {props.map((props, index) => (
            <LinkAnimateBg href={'#'} key={index} {...props}>
              LINK
            </LinkAnimateBg>
          ))}
        </div>
        <div className={'flex gap-4'}>
          {props.map((props, index) => (
            <LinkAnimateBg
              className={
                'text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 [&>span]:bg-blue-400/10'
              }
              href={'#'}
              key={index}
              {...props}
            >
              LINK
            </LinkAnimateBg>
          ))}
        </div>
        <div className={'flex gap-4'}>
          <a
            className={cn(
              'relative border px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
              'inline-block overflow-hidden [&:hover>span]:translate-x-[-10%]',
            )}
            href={'#'}
          >
            LINK
            <span
              className={cn(
                'absolute bottom-0 left-0 h-full w-[200%] bg-foreground/10 transition-transform ease-out',
                'translate-x-[-100%] skew-x-[45deg]',
              )}
            />
          </a>

          <div className="relative flex overflow-hidden border border-blue-400 [&:hover>span]:translate-x-[-10%]">
            <a
              className={cn(
                'relative px-8 py-2 font-bold text-blue-400 hover:text-white',
                'z-10 inline-block overflow-hidden [&:hover>span]:translate-x-[-10%]',
              )}
              href={'#'}
            >
              LINK
            </a>
            <span
              className={cn(
                'absolute bottom-0 left-0 h-full w-[200%] bg-blue-400 transition-all ease-out',
                'translate-x-[-100%] skew-x-[45deg]',
              )}
            />
          </div>
          <a
            className={cn(
              'relative border px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
              'inline-block overflow-hidden [&:hover>span]:translate-x-[-10%]',
            )}
            href={'#'}
          >
            LINK
            <span
              className={cn(
                'absolute bottom-0 left-0 h-full w-[200%] bg-foreground/10 transition-transform ease-out',
                'translate-x-[-100%] skew-x-[-45deg]',
              )}
            />
          </a>
          <a
            className={cn(
              'relative border px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
              'inline-block overflow-hidden [&:hover>span]:translate-x-[100%]',
            )}
            href={'#'}
          >
            LINK
            <span
              className={cn(
                'absolute bottom-0 right-0 h-full w-[200%] bg-foreground/10 transition-transform ease-out',
                'translate-x-[10%] skew-x-[-45deg]',
              )}
            />
          </a>
        </div>
      </div>
    </Board>
  );
};
