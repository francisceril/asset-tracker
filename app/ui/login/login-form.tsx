"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { Button } from "@/app/ui/button";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "francisceril.challoy@gmail",
      password: "password",
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: "francis@alhammadmedical.com",
      password: "password",
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="space-x-6">
      <Button onClick={handleSignIn}>Sign In</Button>
      <Button onClick={handleSignOut}>Sign Out</Button>
      <Button onClick={handleSignUp}>Sign Up</Button>
    </div>
  );
}
