'use client';

import { DataTable } from '@/components/data-table/data-table';
import { columns, Pokemon } from './columns';
import { Board } from '@/components/ui/board';
import { Input } from '@/components/ui/input';

type Props = {
  data: Pokemon[];
};

export const StaticDataTableSample = ({ data }: Props) => {
  return (
    <Board title={'静的データテーブル'}>
      <DataTable
        className={'w-[600px]'}
        columns={columns}
        data={data}
        filterComponent={(table) => (
          <div className={'flex flex-col gap-2'}>
            <div className={'flex gap-2'}>
              <Input
                className="max-w-xs"
                onChange={(event) =>
                  table.getColumn('name')?.setFilterValue(event.target.value)
                }
                placeholder="名前で検索"
                value={
                  (table.getColumn('name')?.getFilterValue() as string) ?? ''
                }
              />
              <Input
                className="max-w-xs"
                onChange={(event) =>
                  table
                    .getColumn('weaknesses')
                    ?.setFilterValue(event.target.value)
                }
                placeholder="弱点で検索"
                value={
                  (table.getColumn('weaknesses')?.getFilterValue() as string) ??
                  ''
                }
              />
            </div>
            <div className={'flex items-center gap-2'}>
              <span className={'text-sm text-muted-foreground'}>身長：</span>
              <Input
                className="w-[6em]"
                onChange={(event) =>
                  table
                    .getColumn('height')
                    ?.setFilterValue((old: { from?: string; to?: string }) => {
                      return {
                        ...old,
                        from: event.target.value,
                      };
                    })
                }
                placeholder=""
                step={0.1}
                type={'number'}
                value={
                  ((
                    table.getColumn('height')?.getFilterValue() as {
                      from: string;
                    }
                  )?.['from'] as string) ?? ''
                }
              />
              ~
              <Input
                className="w-[6em]"
                onChange={(event) =>
                  table
                    .getColumn('height')
                    ?.setFilterValue((old: { from?: string; to?: string }) => {
                      return {
                        ...old,
                        to: event.target.value,
                      };
                    })
                }
                placeholder=""
                step={0.1}
                type={'number'}
                value={
                  ((
                    table.getColumn('height')?.getFilterValue() as {
                      to: string;
                    }
                  )?.['to'] as string) ?? ''
                }
              />
            </div>
          </div>
        )}
        initialState={{
          pagination: {
            pageIndex: 0,
            pageSize: 5,
          },
          columnFilters: [{ id: 'name', value: 'ch' }],
        }}
        visibilityState={{
          weight: false,
          spawn_chance: false,
        }}
      />
    </Board>
  );
};
