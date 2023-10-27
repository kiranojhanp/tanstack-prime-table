import { ServerDataTable } from "@/components/datatable/server-table";
import { columns } from "./columns";

export default function Users() {
  return (
    <div className="container mx-auto py-10">
      <ServerDataTable
        className="table-users"
        columns={columns}
        globalFilterPlaceholder="Search email"
        size="small"
      />
    </div>
  );
}
