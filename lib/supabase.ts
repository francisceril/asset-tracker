import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://jveyqgmwofayfqvusqnv.supabase.co";

export default createClient(
  SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
