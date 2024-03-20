import { cn } from '@/lib/utils';
import {
  timelineSampleColumns,
  timelineSampleData,
} from '@/components/timeline/columns';

export const TimelineTableSample = () => {
  return (
    <div>
      <table className="max-w-2xl cursor-default">
        <thead className={'text-foreground/60'}>
          <tr>
            {timelineSampleColumns.map((column) => (
              <td className={'pb-4 text-center'} key={column.accessorKey}>
                {column.header}
              </td>
            ))}
          </tr>
        </thead>
        {timelineSampleData.map((v) => (
          <tbody
            className={cn(
              'group',
              'transition-all',
              'hover:bg-sky-50',
              'dark:hover:bg-sky-950',
            )}
            key={v.title}
          >
            <tr>
              <th
                className={
                  'whitespace-nowrap px-4 pt-2 align-top text-sm leading-7 text-foreground/60'
                }
                rowSpan={2}
              >
                {v.year}年
              </th>
              <th
                className={
                  'relative border-s border-foreground/60 px-4 pt-2 text-left align-top text-xl'
                }
                colSpan={2}
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
                {v.title}
              </th>
            </tr>
            <tr>
              <td
                className={
                  'border-s border-foreground/60 px-4 pb-2 align-top text-foreground/60'
                }
              >
                {v.desc}
              </td>
              <td className={'px-4 pb-2 align-top text-foreground/60'}>
                {v.remark}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
