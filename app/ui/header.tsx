import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/app/ui/theme-toggle";

const Header = () => {
  return (
    <header className="borber-border bg-background fixed inset-x-0 z-50 border-b">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-x-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={50}
            className="-ml-3"
            priority
          />
          Asset Inventory
        </Link>

        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
