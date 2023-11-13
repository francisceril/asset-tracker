import { createBrowserClient } from "@supabase/ssr";
import { Item, columns } from "@/app/ui/inventory/columns";
import { DataTable } from "@/app/ui/inventory/table";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

async function fetchData(): Promise<Item[]> {
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
  const data = await fetchData();
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  } else {
    console.log(session);
  }

  return (
    <div className="container mx-auto pt-28">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
