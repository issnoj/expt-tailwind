'use client';

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
  ColumnFiltersState,
  VisibilityState,
  InitialTableState,
  Table as ReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { DataTableViewOptions } from '@/components/ui/data-table/data-table-view-options';
import { DataTablePagination } from '@/components/ui/data-table/data-table-pagination';

type Props<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  initialState?: InitialTableState;
  visibilityState?: VisibilityState;
  filterComponent?: (table: ReactTable<TData>) => React.ReactNode;
};

export const DataTable = <TData, TValue>({
  columns,
  data,
  className,
  initialState,
  visibilityState = {},
  filterComponent,
}: Props<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>(visibilityState);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    columns,
    data,
    initialState,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // ソート
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // フィルター
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    // 表示
    onColumnVisibilityChange: setColumnVisibility,
    // 選択
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className={cn(className)}>
      {filterComponent && filterComponent(table)}
      <div className="flex flex-col gap-2 px-2">
        <DataTableViewOptions table={table} />
        <DataTablePagination table={table} />
      </div>
      <div className={'mt-2 rounded-md border'}>
        <Table>
          <TableHeader className={'bg-sky-50 dark:bg-sky-950'}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  data-state={row.getIsSelected() && 'selected'}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
