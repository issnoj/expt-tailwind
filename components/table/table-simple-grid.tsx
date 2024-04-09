import { cn } from '@/lib/utils';

type Columns = Array<{ accessKey: string; header: string }>;

export type TableSimpleGridProps = {
  columns: Columns;
  data: Array<Record<string, React.ReactNode>>;
  className?: string;
};

export const TableSimpleGrid = ({
  columns,
  data,
  className,
}: TableSimpleGridProps) => {
  return (
    <table className={cn('w-full table-fixed lg:w-auto', className)}>
      <thead
        className={cn(
          'hidden bg-blue-200 lg:table-header-group',
          'dark:bg-blue-900',
        )}
      >
        <tr>
          {columns.map((column) => (
            <th className={'px-8 py-2'} key={column.accessKey}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            className={cn(
              'mt-1 block bg-transparent first:mt-0 lg:table-row lg:odd:bg-blue-200/40',
              'dark:lg:odd:bg-blue-900/40',
            )}
            key={i}
          >
            {columns.map((column, j) => {
              if (j === 0) {
                return (
                  <th
                    className={cn(
                      'mb-1 block bg-blue-200 px-4 py-2 lg:table-cell lg:bg-transparent',
                      'dark:bg-blue-900 dark:lg:bg-transparent',
                    )}
                    key={`${i}-${j}`}
                  >
                    {row[column.accessKey]}
                  </th>
                );
              }
              return (
                <td
                  className={cn(
                    'relative flex px-2 py-2 pl-[80px] lg:table-cell lg:px-4',
                    'before:absolute before:left-0 before:inline-block before:w-[4em] before:rounded-full before:bg-blue-200/40 before:text-center before:align-middle before:font-bold before:content-[attr(data-label)] lg:before:content-[]',
                    'dark:before:bg-blue-900/40',
                  )}
                  data-label={column.header}
                  key={`${i}-${j}`}
                >
                  {row[column.accessKey]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
