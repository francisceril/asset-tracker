"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  MoreHorizontal,
  Laptop,
  Computer,
  Printer,
  Smartphone,
  Router,
  Monitor,
  Scan,
  Phone,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Item = {
  serial_number: string;
  device_type: string;
  purchase_date: string;
  assigned_to: string;
  status: string;
  notes: string;
  manufacturer: string;
  model: string;
  warranty_expiration_date: string;
  location: string;
};

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "device_type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none! w-full"
        >
          Type
        </Button>
      );
    },
    cell: ({ row }) => {
      const item = row.original;

      return (
        <div className="flex items-center justify-center">
          {item.device_type === "Laptop" ? (
            <Laptop className="h-4 w-4" />
          ) : item.device_type === "Desktop" ? (
            <Computer className="h-4 w-4" />
          ) : item.device_type === "Mobile Phone" ? (
            <Smartphone className="h-4 w-4" />
          ) : item.device_type === "Printer" ? (
            <Printer className="h-4 w-4" />
          ) : item.device_type === "Router" ? (
            <Router className="h-4 w-4" />
          ) : item.device_type === "Monitor" ? (
            <Monitor className="h-4 w-4" />
          ) : item.device_type === "Scanner" ? (
            <Scan className="h-4 w-4" />
          ) : item.device_type === "Phone" ? (
            <Phone className="h-4 w-4" />
          ) : (
            ""
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "manufacturer",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none!"
        >
          Manufacturer
        </Button>
      );
    },
  },
  {
    accessorKey: "model",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none!"
        >
          Model
        </Button>
      );
    },
  },
  {
    accessorKey: "assigned_to",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none!"
        >
          Assigned User
        </Button>
      );
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none!"
        >
          Location
        </Button>
      );
    },
  },
  {
    accessorKey: "purchase_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none!"
        >
          Purchase Date
        </Button>
      );
    },
  },
  {
    accessorKey: "serial_number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none!"
        >
          Serial Number
        </Button>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0 hover:bg-none! w-full"
        >
          Status
        </Button>
      );
    },
    cell: ({ row }) => {
      const item = row.original;

      return (
        <div className="flex items-center justify-center">
          <span
            className={`h-3 w-3 rounded-full mg-auto ${
              item.status === "Available"
                ? "bg-green-500"
                : item.status === "Assigned"
                ? "bg-yellow-500"
                : item.status === "Out of Order"
                ? "bg-red-500"
                : item.status === "Retired"
                ? "bg-gray-500"
                : ""
            }`}
          ></span>
        </div>
      );
    },
  },
  {
    accessorKey: "notes",
    header: "Notes",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(item.serial_number)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View upgrade/repair history</DropdownMenuItem>
            <DropdownMenuItem>View user history</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Retire item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
