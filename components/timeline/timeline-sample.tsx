import { cn } from '@/lib/utils';
import { timelineSampleData } from '@/components/timeline/columns';

export const TimelineSample = () => {
  return (
    <div>
      <ol className="relative max-w-2xl cursor-default border-s border-foreground/60">
        {timelineSampleData.map((v) => (
          <li
            className={cn(
              'group mb-2 rounded px-4 pb-2 pt-1',
              'transition-all',
              'hover:bg-sky-50',
              'dark:hover:bg-sky-950',
            )}
            key={v.title}
          >
            <span
              className={cn(
                'absolute -start-1.5 mt-1.5 size-3 rounded-full bg-foreground',
                'transition-all',
                'group-hover:bg-sky-500',
              )}
            />
            <span
              className={cn(
                'absolute -start-1.5 mt-1.5 size-3 rounded-full',
                'group-hover:animate-ping group-hover:bg-sky-300',
              )}
            />
            <time className="text-sm text-foreground/60">{v.year}年</time>
            <h3 className="my-1 text-lg font-bold">{v.title}</h3>
            <p className="text-foreground/60">{v.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};
