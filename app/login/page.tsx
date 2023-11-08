"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="bg-background h-[500px] w-[400px]">
        <LoginForm />
      </div>
    </div>
  );
}
