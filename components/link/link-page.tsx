'use client';

import { Sample } from '@/components/sample';
import { cn } from '@/lib/utils';
import { Content } from '@/components/ui/content';

export const LinkPage = () => {
  return (
    <Content title={'リンク'}>
      <Sample
        code={`
<a
  href={'#'}
  className={cn(
    'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
    '[&:hover>span]:w-full',
  )}
>
  LINK
  <span
    className={cn(
      'absolute bottom-0 h-[4px] w-0 bg-foreground transition-all ease-out',
      'left-0',
    )}
  />
</a>
`}
        meta={'5,12'}
      >
        <a
          className={cn(
            'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
            '[&:hover>span]:w-full',
          )}
          href={'#'}
        >
          LINK
          <span
            className={cn(
              'absolute bottom-0 h-[4px] w-0 bg-foreground transition-all ease-out',
              'left-0',
            )}
          />
        </a>
      </Sample>
      <Sample
        code={`
<a
  href={'#'}
  className={cn(
    'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
    '[&:hover>span]:w-full',
  )}
>
  LINK
  <span
    className={cn(
      'absolute bottom-0 h-[4px] w-0 bg-foreground transition-all ease-out',
      'left-1/2 -translate-x-1/2',
    )}
  />
</a>
`}
        meta={'5,12'}
      >
        {' '}
        <a
          className={cn(
            'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
            '[&:hover>span]:w-full',
          )}
          href={'#'}
        >
          LINK
          <span
            className={cn(
              'absolute bottom-0 h-[4px] w-0 bg-foreground transition-all ease-out',
              'left-1/2 -translate-x-1/2',
            )}
          />
        </a>
      </Sample>
      <Sample
        code={`
<a
  href={'#'}
  className={cn(
    'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
    '[&:hover>span]:origin-left [&:hover>span]:scale-x-100',
  )}
>
  LINK
  <span
    className={cn(
      'absolute bottom-0 left-0 h-[4px] w-full bg-foreground transition-transform ease-out',
      'origin-right scale-x-0',
    )}
  />
</a>
`}
        meta={`5,12`}
      >
        <a
          className={cn(
            'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
            '[&:hover>span]:origin-left [&:hover>span]:scale-x-100',
          )}
          href={'#'}
        >
          LINK
          <span
            className={cn(
              'absolute bottom-0 left-0 h-[4px] w-full bg-foreground transition-transform ease-out',
              'origin-right scale-x-0',
            )}
          />
        </a>
      </Sample>
      <Sample
        code={`
<a
  href={'#'}
  className={cn(
    'px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
    'shadow-[0_0_0_4px_transparent] outline outline-4 outline-foreground/60',
    'hover:shadow-[0_0_0_4px_theme(colors.foreground)] hover:outline-offset-[10px] hover:outline-transparent',
    'transform-gpu transition-all duration-500 ease-[cubic-bezier(.25,.5,.5,.7)]',
  )}
>
  LINK
</a>
`}
      >
        <a
          className={cn(
            'px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
            'shadow-[0_0_0_4px_transparent] outline outline-4 outline-foreground/60',
            'hover:shadow-[0_0_0_4px_theme(colors.foreground)] hover:outline-offset-[10px] hover:outline-transparent',
            'transform-gpu transition-all duration-500 ease-[cubic-bezier(.25,.5,.5,.7)]',
          )}
          href={'#'}
        >
          LINK
        </a>
      </Sample>
      <Sample
        code={`
<a
  href={'#'}
  className={cn(
    'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
    '[&:hover>span]:scale-x-100',
  )}
>
  LINK
  <span
    className={cn(
      'absolute bottom-0 left-0 h-full w-full bg-foreground/10 transition-transform ease-out',
      'origin-left scale-x-0',
    )}
  />
</a>
`}
        meta={'5,12'}
      >
        <a
          className={cn(
            'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
            '[&:hover>span]:scale-x-100',
          )}
          href={'#'}
        >
          LINK
          <span
            className={cn(
              'absolute bottom-0 left-0 h-full w-full bg-foreground/10 transition-transform ease-out',
              'origin-left',
              'scale-x-0',
            )}
          />
        </a>
      </Sample>
      <Sample desc={'transform-origin を right に'}>
        <a
          className={cn(
            'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
            '[&:hover>span]:scale-x-100',
          )}
          href={'#'}
        >
          LINK
          <span
            className={cn(
              'absolute bottom-0 left-0 h-full w-full bg-foreground/10 transition-transform ease-out',
              'origin-right',
              'scale-x-0',
            )}
          />
        </a>
      </Sample>
      <Sample desc={'transform-origin を center に'}>
        <a
          className={cn(
            'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
            '[&:hover>span]:scale-x-100',
          )}
          href={'#'}
        >
          LINK
          <span
            className={cn(
              'absolute bottom-0 left-0 h-full w-full bg-foreground/10 transition-transform ease-out',
              'origin-center',
              'scale-x-0',
            )}
          />
        </a>
      </Sample>
      <Sample
        code={`
<a
  href={'#'}
  className={cn(
    'relative inline-block px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
    'overflow-hidden [&:hover>span]:translate-x-[-10%]',
  )}
>
  LINK
  <span
    className={cn(
      'absolute bottom-0 left-0 h-[100%] w-[200%] bg-foreground/20 transition-transform ease-out',
      'translate-x-[-100%] skew-x-[45deg]',
    )}
  />
</a>
`}
        meta={'5,12'}
      >
        <a
          className={cn(
            'relative inline-block px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
            'overflow-hidden [&:hover>span]:translate-x-[-10%]',
          )}
          href={'#'}
        >
          LINK
          <span
            className={cn(
              'absolute bottom-0 left-0 h-full w-[200%] bg-foreground/20 transition-transform ease-out',
              'translate-x-[-100%] skew-x-[45deg]',
            )}
          />
        </a>
      </Sample>
      <Sample
        code={`
<a
  href={'#'}
  className={cn(
    'relative inline-block px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
    'overflow-hidden [&:hover>span]:scale-110',
  )}
>
  LINK
  <span
    className={cn(
      'absolute w-[100%] rounded-[100%] bg-foreground/20 transition-all ease-out',
      // inset-0,m-auto で中央配置, h-0,pt-[100%] で高さを横幅と同じにして円に
      'inset-0 m-auto h-0 pt-[100%]',
      'm-auto origin-center scale-0',
    )}
  />
</a>
`}
        meta={'5,13,14'}
      >
        <a
          className={cn(
            'relative inline-block px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
            'overflow-hidden [&:hover>span]:scale-110',
          )}
          href={'#'}
        >
          LINK
          <span
            className={cn(
              'absolute w-[100%] rounded-[100%] bg-foreground/20 transition-all ease-out',
              'inset-0 m-auto h-0 pt-[100%]',
              'origin-center scale-0',
            )}
          />
        </a>
      </Sample>
    </Content>
  );
};
