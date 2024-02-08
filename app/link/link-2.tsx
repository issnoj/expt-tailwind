import { cn } from '@/lib/utils';

export const Link2 = () => {
  return (
    <a
      href={'#'}
      className={cn(
        'relative px-8 py-2 tracking-widest',
        'font-bold text-foreground/60 hover:text-foreground',
        '[&:hover>span]:w-full',
      )}
    >
      LINK
      <span
        className={cn(
          'absolute bottom-0 left-1/2 h-[4px] w-0 -translate-x-1/2 bg-foreground',
          'transition-all ease-out',
        )}
        aria-hidden="true"
      />
    </a>
  );
};
