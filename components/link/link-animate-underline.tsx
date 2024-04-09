import { cn } from '@/lib/utils';

export const DIRECTIONS = [
  'center',
  'left',
  'left-right',
  'right',
  'right-left',
] as const;

export type LinkAnimateUnderlineProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    direction: (typeof DIRECTIONS)[number];
    duration?: number;
  };

export const LinkAnimateUnderline = ({
  direction = 'center',
  duration = 200,
  className,
  children,
  ...props
}: LinkAnimateUnderlineProps) => {
  return (
    <a
      className={cn(
        'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
        '[&:hover>span]:scale-x-100',
        direction === 'left-right' && '[&:hover>span]:origin-left',
        direction === 'right-left' && '[&:hover>span]:origin-right',
        className,
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          'absolute bottom-0 left-0 h-1 w-full bg-foreground transition-transform ease-out',
          'scale-x-0',
          direction === 'center' && 'origin-center',
          direction === 'left' && 'origin-left',
          direction === 'right-left' && 'origin-left',
          direction === 'right' && 'origin-right',
          direction === 'left-right' && 'origin-right',
        )}
        style={{ transitionDuration: `${duration}ms` }}
      />
    </a>
  );
};
