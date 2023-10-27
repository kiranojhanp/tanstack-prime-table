import { ColumnDef } from "@tanstack/react-table";
import type { Payment, StatusType } from "@/data";
import { ActionsMenu } from "@/components/actions";
import { Checkbox } from "primereact/checkbox";
import ColumnHeader from "@/components/datatable/column-header";
import { Tag } from "primereact/tag";

const getSeverity = (status: StatusType) => {
  switch (status) {
    case "pending":
      return "warning";
    case "processing":
      return "info";
    case "success":
      return "success";
    case "failed":
      return "danger";
    default:
      return null;
  }
};

// TODO: logic to hide delete button when no select options in table
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
    header: ({ column }) => <ColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.original.status;
      return <Tag value={status} severity={getSeverity(status)} />;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => <ColumnHeader column={column} title="Email" />,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <ColumnHeader column={column} title="Amount" />,
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
    enableSorting: false,
    enableHiding: false,
  },
];
