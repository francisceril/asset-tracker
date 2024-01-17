import { DashboardShell } from "@/components/shell";
import { DashboardHeader } from "@/components/header";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashBoardDevicesLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Devices"
        text="Document and track all your devices."
      />

      <div className="flex items-center justify-between">
        <div className="flex gap-x-2">
          <Skeleton className="h-[32px] w-[250px] rounded-md" />
          <Skeleton className="h-[32px] w-[93px] rounded-md" />
          <Skeleton className="h-[32px] w-[78px] rounded-md" />
          <Skeleton className="h-[32px] w-[100px] rounded-md" />
          <Skeleton className="h-[32px] w-[93px] rounded-md" />
        </div>
      </div>
      <Skeleton className="h-[400px] rounded-md border" />
    </DashboardShell>
  );
}
