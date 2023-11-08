"use client";

import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="h-[500px] w-[400px]">
        <LoginForm />
      </div>
    </main>
  );
}
