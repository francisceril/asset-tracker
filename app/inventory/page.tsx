import { Item, columns } from "./columns";
import { DataTable } from "./data-table";
import supabase from "@/lib/supabase";

async function getData(): Promise<Item[]> {
  const { data } = await supabase.from("device").select();

  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
