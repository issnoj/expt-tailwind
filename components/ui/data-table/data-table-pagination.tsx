import { Table } from '@tanstack/react-table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export const DataTablePagination = <TData,>({
  table,
}: DataTablePaginationProps<TData>) => {
  return (
    <div className="flex items-center justify-between space-x-4 font-mono">
      {table.getFilteredSelectedRowModel().rows.length > 0 ? (
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} selected
        </div>
      ) : (
        <div className={'flex-1 text-sm text-muted-foreground'}>
          {table.getFilteredRowModel().rows.length}
        </div>
      )}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Select
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
            value={`${table.getState().pagination.pageSize}`}
          >
            <SelectTrigger className="w-[5em]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 15].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
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
      </div>
    </div>
  );
};
