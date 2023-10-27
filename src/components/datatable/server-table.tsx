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
  PaginationState,
} from "@tanstack/react-table";

import axios from "axios";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
} from "@/components/datatable/helpers";

import {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from "react";

import clsx from "clsx";
import { Paginator } from "primereact/paginator";
import { useQuery } from "@tanstack/react-query";

export type SizeType = "small" | "normal" | "large";
interface DataTableProps<TData, TValue> {
  className: string;
  columns: ColumnDef<TData, TValue>[];
  options: {
    globalFilterOptions: {
      id: string;
      placeholder?: string;
    };
  };
  size?: SizeType;
}

// Dropdown using primereact
// Dropdown component based on primereact using prime react classes
const INITIAL_PAGE_INDEX = 0;
const ROWS_PER_PAGE = [10, 20, 30];
const BASE_TAG = "users";
const BASE_URL = "https://api.fake-rest.refine.dev/users";

const fetcherFn = async ({ queryKey, url }: { queryKey: any; url: string }) => {
  const params = queryKey.queryKey[1];
  const response = await axios.get(url, {
    params: {
      _page: params.pageIndex + 1,
      _limit: params.pageSize,
    },
  });
  const data = await response.data;
  const count = (await response.headers["x-total-count"]) as number;
  return { data, count };
};

const ServerDataTable = <TData extends { id: string | number }, TValue>({
  className,
  columns,
  options: { globalFilterOptions },
  size = "normal",
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: INITIAL_PAGE_INDEX,
    pageSize: ROWS_PER_PAGE[0],
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: [BASE_TAG, { ...pagination }],
    queryFn: async (queryKey) =>
      await fetcherFn({
        url: BASE_URL,
        queryKey,
      }),
  });

  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    debugTable: true,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    pageCount: data?.count ?? -1,
    state: {
      columnFilters,
      columnVisibility,
      pagination,
      rowSelection,
      sorting,
    },
  });

  const mappedSelectedRows = table
    .getFilteredSelectedRowModel()
    .rows.map((row) => ({ id: row.original.id }));

  const handleGlobalSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      table
        .getColumn(globalFilterOptions.id)
        ?.setFilterValue(event.target.value);
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

  const handleSort = useCallback(
    (event: SyntheticEvent, sortHandler?: (event: SyntheticEvent) => void) => {
      event.stopPropagation();
      if (sortHandler) {
        sortHandler(event);
      }
    },
    []
  );

  if (isLoading || isError) return null;
  return (
    <div className="card">
      <div className={`${tableClasses} ${className}`}>
        <TableToolbar
          {...{
            handleGlobalSearch,
            globalFilterPlaceholder: globalFilterOptions.placeholder ?? "",
            mappedSelectedRows,
            size,
            value: table
              .getColumn(globalFilterOptions.id)
              ?.getFilterValue() as string,
          }}
        />
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(
                  ({ column, getContext, id, isPlaceholder }) => {
                    const {
                      columnDef,
                      getCanSort,
                      getIsSorted,
                      getToggleSortingHandler,
                    } = column;

                    // TODO: extract to utils
                    const tableHeadClasses = clsx({
                      "p-sortable-column": getCanSort(),
                      "p-highlight":
                        getIsSorted() === "asc" || getIsSorted() === "desc",
                    });

                    return (
                      <TableHead
                        key={id}
                        className={tableHeadClasses}
                        onClick={(event) => {
                          if (getCanSort()) {
                            handleSort(event, getToggleSortingHandler());
                          }
                        }}
                      >
                        {isPlaceholder
                          ? null
                          : flexRender(columnDef.header, getContext())}
                      </TableHead>
                    );
                  }
                )}
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

        <div className="p-paginator-bottom p-paginator p-component">
          <Paginator
            first={pagination.pageIndex * pagination.pageSize}
            rows={pagination.pageSize}
            totalRecords={
              data?.count ?? table.getFilteredRowModel().rows?.length
            }
            rowsPerPageOptions={ROWS_PER_PAGE}
            onPageChange={(event) => {
              const currentPageIndex = Math.ceil(event.first / event.rows);
              setPagination({
                pageIndex: currentPageIndex,
                pageSize: event.rows,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { ServerDataTable };