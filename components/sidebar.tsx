import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Devices,
  HouseLine,
  Ticket,
  CalendarCheck,
} from "@phosphor-icons/react/dist/ssr";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "./logo";

const links = [
  { title: "Dashboard", path: "/dashboard", icon: HouseLine },
  { title: "Devices", path: "/dashboard/devices", icon: Devices },
  { title: "Tickets", path: "/dashboard/tickets", icon: Ticket },
  {
    title: "Subscriptions",
    path: "/dashboard/subscriptions",
    icon: CalendarCheck,
  },
];

export function Sidebar() {
  return (
    <aside className="bg-background hide-scrollbar hidden w-14 overflow-y-auto border-r border-dashed md:block">
      <div className="flex h-screen flex-col items-center px-2 py-4">
        <div className="size-10 text-2xl">
          <Logo />
        </div>

        <nav className="mt-8 flex flex-col items-center gap-2">
          <TooltipProvider delayDuration={0}>
            {links.map((link, idx) => (
              <Tooltip key={idx} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.path}
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "icon",
                        className: "hover:dark:bg-accent/40 rounded-lg",
                      }),
                    )}
                  >
                    <link.icon weight="bold" size={20} />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-accent text-foreground border"
                >
                  <span className="ml-auto">{link.title}</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </div>
    </aside>
  );
}
