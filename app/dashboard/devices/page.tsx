import { DataTable } from "./_components/table";
import { columns } from "./_components/columns";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { DashboardShell } from "@/components/shell";
import { DashboardHeader } from "@/components/header";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { AddDeviceSheet } from "./_components/add-device-sheet";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Devices",
  description: "Document and track your devices.",
};

export default async function Devices() {
  const supabase = createClient(cookies());
  const { data } = await supabase
    .from("devices")
    .select()
    .order("id", { ascending: false });

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Devices"
        text="Document and track all your devices."
      >
        <AddDeviceSheet />
      </DashboardHeader>
      <div>
        {data?.length === 200 ? (
          <DataTable columns={columns} data={data} />
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="laptop" />
            <EmptyPlaceholder.Title>No devices added</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any devices yet. Start adding your devices.
            </EmptyPlaceholder.Description>
            <AddDeviceSheet
              className={buttonVariants({
                variant: "outline",
                className: "text-foreground",
              })}
            />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
