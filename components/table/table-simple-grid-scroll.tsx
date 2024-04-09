import { cn } from '@/lib/utils';

type Columns = Array<{ accessKey: string; header: string }>;

export type TableSimpleGridScrollProps = {
  columns: Columns;
  data: Array<Record<string, React.ReactNode>>;
  className?: string;
};

export const TableSimpleGridScroll = ({
  columns,
  data,
  className,
}: TableSimpleGridScrollProps) => {
  return (
    <div className={'overflow-x-scroll'}>
      <table className={cn('table-fixed', className)}>
        <thead className={'bg-blue-200 dark:bg-blue-900'}>
          <tr>
            {columns.map((column) => (
              <th
                className={'whitespace-nowrap px-4 py-2'}
                key={column.accessKey}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              className={'odd:bg-blue-200/40 dark:odd:bg-blue-900/40'}
              key={i}
            >
              {columns.map((column, j) => (
                <td
                  className={cn('whitespace-nowrap px-4 py-2')}
                  data-label={column.header}
                  key={`${i}-${j}`}
                >
                  {row[column.accessKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
