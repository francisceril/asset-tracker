"use client";

import Image from "next/image";
import { Button } from "@/app/ui/button";
import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="h-[500px] w-[400px] bg-background">
        <LoginForm />
      </div>
    </div>
  );
}
