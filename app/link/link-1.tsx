import { cn } from '@/lib/utils';

export const Link1 = () => {
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
          'absolute bottom-0 left-0 h-[4px] w-0 bg-foreground',
          'transition-all duration-300 ease-out',
        )}
        aria-hidden="true"
      />
    </a>
  );
};
