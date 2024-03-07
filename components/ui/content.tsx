import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Content = ({ title, children }: Props) => {
  return (
    <div className={cn('grid h-screen')}>
      <div className={'px-10 pb-10'}>
        <h1 className={'py-20 text-xl font-bold'}>{title}</h1>
        <div className={'flex flex-col gap-20'}>{children}</div>
      </div>
    </div>
  );
};
