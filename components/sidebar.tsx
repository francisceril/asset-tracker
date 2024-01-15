import Link from "next/link";
import {
  DashboardIcon,
  LaptopIcon,
  CalendarIcon,
  SunIcon,
} from "@radix-ui/react-icons";

const links = [
  { title: "Dashboard", path: "/dashboard", icon: DashboardIcon },
  { title: "Devices", path: "/dashboard/devices", icon: LaptopIcon },
  { title: "Tickets", path: "/dashboard/tickes", icon: LaptopIcon },
  {
    title: "Subscriptions",
    path: "/dashboard/subscriptions",
    icon: CalendarIcon,
  },
];

export function Sidebar() {
  return (
    <aside className="bg-background fixed z-50 h-screen border-r border-dashed">
      <div className="flex h-full w-14 flex-col items-center px-2 py-4">
        <div className="text-2xl">🎉</div>

        <nav className="mt-8 flex flex-col space-y-2">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="hover:bg-foreground/20 rounded-lg p-2 transition"
            >
              <link.icon className="size-5" />
              <span className="sr-only">{link.title}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <SunIcon className="size-5" />
        </div>
      </div>
    </aside>
  );
}
