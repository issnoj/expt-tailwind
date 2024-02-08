import { cn } from '@/lib/utils';

export const Link3 = () => {
  return (
    <a
      href={'#'}
      className={cn(
        'relative px-8 py-2 tracking-widest',
        'font-bold text-foreground/60 hover:text-foreground',
        '[&:hover>span]:origin-top-left [&:hover>span]:scale-x-100',
      )}
    >
      LINK
      <span
        className={cn(
          'absolute bottom-0 left-0 h-[4px] w-full bg-foreground',
          'origin-top-right scale-x-0',
          'transition-transform duration-300 ease-out',
        )}
        aria-hidden="true"
      />
    </a>
  );
};
