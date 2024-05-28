import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import { SearchTestDataConditions, TestData } from '@/app/api/test/actions';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

const columnHelper = createColumnHelper<TestData>();

const columns = [
  columnHelper.accessor('id', {
    enableSorting: true,
  }),
  columnHelper.accessor('name', {
    enableSorting: true,
  }),
  columnHelper.accessor('address', {
    enableSorting: true,
  }),
];

export type ServerDataTableProps = {
  data: TestData[];
  total: number;
  conditions: Required<SearchTestDataConditions>;
  onChange: (conditions: SearchTestDataConditions) => void;
};

export const ServerDataTable = ({
  data,
  total,
  conditions,
  onChange,
}: ServerDataTableProps) => {
  const [pagination, setPagination] = React.useState({
    pageSize: conditions.limit,
    pageIndex: conditions.page - 1,
  });
  const [sorting, setSorting] = React.useState([
    {
      id: conditions.field as string,
      desc: conditions.order === 'desc',
    },
  ]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
    onPaginationChange: (updater) => {
      const newPagination =
        updater instanceof Function ? updater(pagination) : updater;
      setPagination(updater);
      onChange(getNewConditions(newPagination, sorting));
    },
    onSortingChange: (updater) => {
      const newSorting =
        updater instanceof Function ? updater(sorting) : updater;
      setSorting(updater);
      table.resetPageIndex();
      onChange(getNewConditions({ ...pagination, pageIndex: 0 }, newSorting));
    },
    state: {
      pagination,
      sorting,
    },
    rowCount: total,
  });

  return (
    <>
      <Table className={'table'}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {header.column.getCanSort() && (
                    <>
                      <button
                        className={cn(
                          header.column.getIsSorted() === 'asc' &&
                            'pointer-events-none opacity-50',
                        )}
                        onClick={() => {
                          table.setSorting([
                            {
                              id: header.id as string,
                              desc: false,
                            },
                          ]);
                        }}
                      >
                        🔼
                      </button>
                      <button
                        className={cn(
                          header.column.getIsSorted() === 'desc' &&
                            'pointer-events-none opacity-50',
                        )}
                        onClick={() => {
                          table.setSorting([
                            {
                              id: header.id as string,
                              desc: true,
                            },
                          ]);
                        }}
                      >
                        🔽
                      </button>
                    </>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center space-x-2">
        <Button
          className="hidden lg:flex"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
          size={'sm'}
          variant="outline"
        >
          <span className="sr-only">Go to first page</span>
          <ChevronsLeft size={'1em'} />
        </Button>
        <Button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          size={'sm'}
          variant="outline"
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeft size={'1em'} />
        </Button>
        <Button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          size={'sm'}
          variant="outline"
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRight size={'1em'} />
        </Button>
        <Button
          className="hidden lg:flex"
          disabled={!table.getCanNextPage()}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          size={'sm'}
          variant="outline"
        >
          <span className="sr-only">Go to last page</span>
          <ChevronsRight size={'1em'} />
        </Button>
      </div>
    </>
  );
};

function getNewConditions(pagination: PaginationState, sorting: SortingState) {
  const page =
    pagination.pageIndex !== 0 ? pagination.pageIndex + 1 : undefined;
  const limit = pagination.pageSize;
  const field = sorting.length ? sorting[0].id : undefined;
  const order = sorting.length ? (sorting[0].desc ? 'desc' : 'asc') : undefined;
  return {
    page,
    limit,
    field,
    order,
  } as SearchTestDataConditions;
}
