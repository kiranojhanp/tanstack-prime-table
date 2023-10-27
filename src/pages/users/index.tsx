import { ServerDataTable } from "@/components/datatable/server-table";
import { columns } from "./columns";

export default function Users() {
  return (
    <div className="container mx-auto py-10">
      <ServerDataTable
        className="table-users"
        columns={columns}
        size="small"
        options={{
          globalFilterOptions: {
            placeholder: "Search email",
            id: "email",
          },
        }}
      />
    </div>
  );
}
