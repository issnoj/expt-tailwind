import { cn } from '@/lib/utils';

export const Link4 = () => {
  return (
    <a
      href={'#'}
      className={cn(
        'px-8 py-2 tracking-widest',
        'font-bold text-foreground/60 hover:text-foreground',
        'outline-blue-300',
        'hover:bg-foreground/5',
        'shadow-[0_0_0_4px_transparent] hover:shadow-[0_0_0_4px_theme(colors.foreground)]',
        'transform-gpu transition-all',
        'duration-500 ease-[cubic-bezier(.25,.5,.5,.7)]',
        // dark
        'dark:hover:shadow-[0_0_0_4px_theme(colors.foreground)]',
      )}
    >
      LINK
    </a>
  );
};
