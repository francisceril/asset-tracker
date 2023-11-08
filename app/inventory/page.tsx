import { Item, columns } from "@/app/ui/inventory/columns";
import { DataTable } from "@/app/ui/inventory/table";

async function getData(): Promise<Item[]> {
  const { data, error } = await supabase.rpc("fetch_devices");

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data || [];
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-10 text-2xl font-medium">Asset Inventory</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
