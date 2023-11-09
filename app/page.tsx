import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export default async function Home() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(code: string) {
          return cookieStore.get(code)?.value;
        },
      },
    },
  );

  const { data } = await supabase.from("device_assignments").select();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
