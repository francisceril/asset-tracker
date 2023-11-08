import { Item, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import supabase from "@/lib/supabase";

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
