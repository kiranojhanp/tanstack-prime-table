import clsx from "clsx";
import { InputText } from "primereact/inputtext";
import * as React from "react";
import type { SizeType } from "./table";

const TableToolbar = ({
  handleGlobalSearch,
  globalFilterPlaceholder,
  size,
  value,
}: {
  handleGlobalSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  globalFilterPlaceholder?: string;
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

  return (
    <div className="p-datatable-header">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          className={`${inputClasses}`}
          placeholder={globalFilterPlaceholder ?? "Keyword Search"}
          value={value ?? ""}
          onChange={(event) => handleGlobalSearch(event)}
        />
      </span>
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
>(({ ...props }, ref) => <th ref={ref} {...props} />);
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
