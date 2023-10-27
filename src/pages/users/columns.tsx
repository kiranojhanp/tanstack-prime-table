import { ColumnDef } from "@tanstack/react-table";
import { ActionsMenu } from "@/components/datatable/actions";
import { Checkbox } from "primereact/checkbox";
import ColumnHeader from "@/components/datatable/column-header";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: boolean;
};

// TODO: logic to hide delete button when no select options in table
export const columns: ColumnDef<User>[] = [
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
    accessorKey: "firstName",
    header: ({ column }) => <ColumnHeader column={column} title="First name" />,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => <ColumnHeader column={column} title="Last name" />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <ColumnHeader column={column} title="Email" />,
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
