import React from "react";
import type { Column } from "@tanstack/react-table";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

const ColumnHeader = <TData, TValue>({
  column,
  title,
  className = "",
}: DataTableColumnHeaderProps<TData, TValue>) => {
  if (!column.getCanSort()) {
    return <div {...{ className }}>{title}</div>;
  }

  return (
    <div className="p-column-header-content">
      <span className="p-column-title">{title}</span>
      <span className="p-sortable-column-icon">
        {column.getIsSorted() === "desc" ? (
          <i className="pi pi-sort-amount-down-alt" />
        ) : column.getIsSorted() === "asc" ? (
          <i className="pi pi-sort-amount-up-alt" />
        ) : (
          <i className="pi pi-sort-alt" />
        )}
      </span>
    </div>
  );
};

export default ColumnHeader;
