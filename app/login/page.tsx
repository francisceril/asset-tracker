import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="bg-background h-[500px] w-[400px]">
        <h1 className="text-3xl">Login</h1>
        <p>Use your Microsoft Account to login</p>
        <form>
          <Button className="flex items-center gap-x-2">
            <Image
              src="/images/ms-logo.png"
              alt="Microsoft Logo"
              width={64}
              height={64}
              className="w-4"
            />
            Login with Microsoft Account
          </Button>
        </form>
      </div>
    </div>
  );
}
