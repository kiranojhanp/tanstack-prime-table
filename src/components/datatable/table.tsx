import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
} from "@/components/datatable/helpers";

import { Button } from "../ui/button";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

import clsx from "clsx";

export type SizeType = "small" | "normal" | "large";
interface DataTableProps<TData, TValue> {
  className: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  globalFilterPlaceholder?: string;
  size?: SizeType;
}

// Dropdown using primereact
// Custom paginator based on primereact paginator component
// Dropdown component based on primereact using prime react classes

const DataTable = <TData extends { id: string | number }, TValue>({
  className,
  columns,
  data,
  globalFilterPlaceholder,
  size = "normal",
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleGlobalSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      table.getColumn("email")?.setFilterValue(event.target.value);
    },
    [table]
  );

  const tableClasses = useMemo(() => {
    return clsx({
      "p-datatable p-component p-datatable-responsive-scroll": true,
      "p-datatable-sm": size === "small",
      "": size === "normal",
      "p-datatable-lg": size === "large",
    });
  }, [size]);

  return (
    <div className="card">
      <div className={`${tableClasses} ${className}`}>
        <TableToolbar
          {...{
            handleGlobalSearch,
            globalFilterPlaceholder,
            size,
            value: table.getColumn("email")?.getFilterValue() as string,
          }}
        />
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
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
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  data-id={row.original.id ?? row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      data-label={cell.column.id}
                      className={
                        cell.column.id ? `column-${cell.column.id}` : ``
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>No results.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export { DataTable };
