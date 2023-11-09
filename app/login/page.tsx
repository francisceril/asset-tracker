"use client";

import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    <main className="bg-background dark:bg-background grid min-h-screen place-items-center">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white shadow-md">
        <h1 className="text-3xl font-medium">Login</h1>
        <LoginForm />
      </div>
    </main>
  );
}
