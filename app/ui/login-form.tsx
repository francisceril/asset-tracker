"use client";

import { Button } from "./button";
import { createBrowserClient } from "@supabase/ssr";
import { MouseEvent } from "react";

export default function LoginForm() {
  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "azure",
      options: {
        scopes: "email",
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <Button className="mt-6 w-full" onClick={handleLogin}>
      Sign in
    </Button>
  );
}
