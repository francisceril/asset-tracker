import { Item, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import supabase from "@/lib/supabase";

async function getData(): Promise<Item[]> {
  const { data, error } = await supabase.rpc("fetch_device_data");

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
      <h1 className="text-2xl mb-10 font-medium">Asset Inventory</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
