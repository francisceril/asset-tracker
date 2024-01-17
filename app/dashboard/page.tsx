import { DashboardShell } from "@/components/shell";
import { DashboardHeader } from "@/components/header";

export const metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" />
      <div></div>
    </DashboardShell>
  );
}
