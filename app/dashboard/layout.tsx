import { SelectOrganization } from "@/components/select-org";
import { Sidebar } from "@/components/sidebar";
import { UserAccountNav } from "@/components/user-nav";
import { Bell } from "@phosphor-icons/react/dist/ssr";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen max-h-screen">
      <div className="flex h-full">
        <Sidebar />
        <main className="scrollbar-none flex w-full flex-1 flex-col overflow-x-hidden">
          <header className="bg-background flex h-12 max-h-12 items-center justify-between border-b border-dashed px-8 py-2">
            <SelectOrganization />
            <div className="ml-auto flex items-center gap-x-2">
              <Bell size={20} weight="regular" />
              <UserAccountNav />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-12">{children}</main>
        </main>
      </div>
    </div>
  );
}
