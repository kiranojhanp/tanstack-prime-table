import clsx from "clsx";
import { InputText } from "primereact/inputtext";
import * as React from "react";
import type { SizeType } from "./table";
import { Button } from "primereact/button";

const TableToolbar = ({
  handleGlobalSearch,
  globalFilterPlaceholder,
  mappedSelectedRows,
  size,
  value,
}: {
  handleGlobalSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  globalFilterPlaceholder?: string;
  mappedSelectedRows?: { id: string | number }[];
  size?: SizeType;
  value?: string;
}) => {
  const inputClasses = React.useMemo(() => {
    return clsx({
      "p-inputtext-sm": size === "small",
      "": size === "normal",
      "p-inputtext-lg ": size === "large",
    });
  }, [size]);

  const buttonClasses = React.useMemo(() => {
    return clsx({
      "p-button-sm": size === "small",
      "": size === "normal",
      "p-button-lg ": size === "large",
    });
  }, [size]);

  return (
    <div className="p-datatable-header">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          className={inputClasses}
          placeholder={globalFilterPlaceholder ?? "Keyword Search"}
          value={value ?? ""}
          onChange={(event) => handleGlobalSearch(event)}
        />
      </span>
      <div className="p-datatable-header-button-group">
        <Button
          className={buttonClasses}
          disabled={mappedSelectedRows && mappedSelectedRows.length <= 0}
          icon="pi pi-trash"
          label="Delete"
          severity="danger"
          onClick={() => {
            // delete data in bulk
            console.log(mappedSelectedRows);
          }}
        />
        <Button className={buttonClasses} icon="pi pi-plus" label="New" />
      </div>
    </div>
  );
};

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="p-datatable-wrapper">
    <table className="p-datatable-table" ref={ref} {...props} />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead className={className ?? "p-datatable-thead"} ref={ref} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody className={className ?? "p-datatable-tbody"} ref={ref} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ ...props }, ref) => <tfoot ref={ref} {...props} />);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ ...props }, ref) => <tr ref={ref} {...props} />);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th className={className ?? "p-column-header-content"} ref={ref} {...props} />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ ...props }, ref) => <td ref={ref} {...props} />);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ ...props }, ref) => <caption ref={ref} {...props} />);
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableToolbar,
};
