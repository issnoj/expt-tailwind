import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  direction?: 'col' | 'row' | undefined;
};

export const Display = ({ direction = 'col', children }: Props) => {
  return (
    <div
      className={cn(
        'grid h-screen',
        direction === 'row' ? 'grid-rows-2' : 'grid-cols-2',
      )}
    >
      <div className={'light grid place-items-center bg-background'}>
        {children}
      </div>
      <div
        className={'dark grid place-items-center bg-background text-foreground'}
      >
        {children}
      </div>
    </div>
  );
};
