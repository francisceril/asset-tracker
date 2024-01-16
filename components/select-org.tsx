"use client";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const organizations = [{ value: "alhammadmedical" }, { value: "personal" }];

export function SelectOrganization() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[160px] justify-between text-xs"
        >
          {value
            ? organizations.find((org) => org.value === value)?.value
            : "Find organization..."}
          <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search org..." className="h-9 text-xs" />
          <CommandEmpty>No organization found.</CommandEmpty>
          <CommandGroup>
            {organizations.map((org) => (
              <CommandItem
                key={org.value}
                value={org.value}
                className="h-8 text-xs"
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {org.value}
                <CheckIcon
                  className={cn(
                    "ml-auto size-4",
                    value === org.value ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </Command>
        <div className="p-1">
          <Button variant="ghost" size="sm" className="w-full">
            <Plus className="mr-2 size-4" />
            New organization
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
