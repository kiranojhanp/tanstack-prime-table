import axios from "axios";
import type { ColumnFiltersState, SortingState } from "@tanstack/react-table";

interface FetcherProps {
  queryKey: (
    | string
    | {
        columnFilters: ColumnFiltersState;
        sorting: SortingState;
        pageIndex: number;
        pageSize: number;
      }
  )[];
  url: string;
}

const fetcher = async ({ queryKey, url }: FetcherProps) => {
  const baseUrl = new URL(url);
  const keyWithParams = queryKey[1];

  if (typeof keyWithParams !== "string") {
    const { columnFilters, pageIndex, pageSize, sorting } = keyWithParams;

    // append pagination params
    baseUrl.searchParams.append("_page", (pageIndex + 1).toString());
    baseUrl.searchParams.append("_limit", pageSize.toString());

    // append filter params
    for (const columnFilter of columnFilters) {
      const { id } = columnFilter;
      const value = columnFilter.value as any;
      baseUrl.searchParams.append(id, value.toString());
    }

    // append sorting params
    for (const sort of sorting) {
      const { desc, id } = sort;
      baseUrl.searchParams.append("_sort", id.toString());
      baseUrl.searchParams.append("_order", desc ? "desc" : "asc");
    }
  }

  const response = await axios.get(baseUrl.href);
  const data = await response.data;
  const count = (await response.headers["x-total-count"]) as number;
  return { data, count };
};

export { fetcher };
export type { FetcherProps };
