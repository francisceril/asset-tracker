import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <header className="header-container">
      <div className="container flex justify-between h-14 items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={50}
            className="-ml-3"
          />
        </Link>

        <div>
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default Header;
