import { Header } from "@/components/header";
import { NewDeviceSheet } from "./_components/new-device-sheet";
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
    <>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
