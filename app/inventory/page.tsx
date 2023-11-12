import { createBrowserClient } from "@supabase/ssr";
import { Item, columns } from "@/app/ui/inventory/columns";
import { DataTable } from "@/app/ui/inventory/table";
import CreateForm from "@/app/ui/inventory/create-form";

async function getData(): Promise<Item[]> {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  const { data, error } = await supabase.from("device_details").select();

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

      <CreateForm />
    </div>
  );
}
