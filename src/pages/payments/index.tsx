import { DataTable } from "@/components/datatable/table";
import { payments, type Payment } from "@/data";
import { columns } from "./columns";

function getData(): Payment[] {
  return payments;
}

export default function Payments() {
  const data = getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable
        className="table-payments"
        columns={columns}
        data={data}
        globalFilterPlaceholder="Search email"
        // size="small"
      />
    </div>
  );
}
