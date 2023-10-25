import { payments, type Payment } from "@/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

function getData(): Payment[] {
  return payments;
}

export default function Payments() {
  const data = getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
