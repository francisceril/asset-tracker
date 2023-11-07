import { Item, columns } from "./columns";
import { DataTable } from "./data-table";
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
    <>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
