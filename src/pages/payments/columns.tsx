import { ColumnDef } from "@tanstack/react-table";
import type { Payment } from "@/data";
import { ActionsMenu } from "@/components/datatable/actions";
import { Checkbox } from "primereact/checkbox";

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onChange={(value) => table.toggleAllPageRowsSelected(!!value.checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(value) => row.toggleSelected(!!value.checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      if (!column.getCanSort()) {
        return <div>Email</div>;
      }

      return (
        <div className="p-column-header-content">
          <span className="p-column-title">Email</span>
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
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <>
          <ActionsMenu
            onView={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </>
      );
    },
  },
];
