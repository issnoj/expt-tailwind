import { cn } from '@/lib/utils';

export type TableSimpleProps = {
  data: Array<{
    title: string;
    value: string | number;
  }>;
  className?: string;
};

export const TableSimple = ({ data, className }: TableSimpleProps) => {
  return (
    <table
      className={cn('w-full table-fixed border-separate lg:w-auto', className)}
    >
      <tbody className={'flex w-full flex-col lg:table-row-group'}>
        {data.map((row) => (
          <tr className={'flex flex-col lg:table-row'} key={row.title}>
            <th
              className={
                'whitespace-nowrap bg-blue-200 px-8 py-2 dark:bg-blue-900'
              }
            >
              {row.title}
            </th>
            <td className={'bg-blue-200/40 px-8 py-2 dark:bg-blue-900/40'}>
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
