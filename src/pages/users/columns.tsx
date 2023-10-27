import { ColumnDef } from "@tanstack/react-table";
import { ActionsMenu } from "@/components/datatable/actions";
import { Checkbox } from "primereact/checkbox";
import ColumnHeader from "@/components/datatable/column-header";

type User = {
  id: string;
  name: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
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
    accessorKey: "name",
    header: ({ column }) => <ColumnHeader column={column} title="Name" />,
  },
  {
    accessorKey: "username",
    header: ({ column }) => <ColumnHeader column={column} title="Username" />,
  },
  {
    accessorKey: "website",
    header: ({ column }) => <ColumnHeader column={column} title="Website" />,
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
