import { DataTable } from "./_components/table";
import { columns } from "./_components/columns";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export default async function Devices() {
  const supabase = createClient(cookies());
  const { data } = await supabase
    .from("devices")
    .select()
    .order("id", { ascending: false });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl">Devices</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
