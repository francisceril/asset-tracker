"use client";

import { Button } from "@/app/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
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
} from "@/app/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Item = {
  serial_number: string;
  device_type: string;
  purchase_date: string;
  assigned_user: string;
  status: string;
  notes: string;
  manufacturer: string;
  model: string;
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
          className="hover:bg-none! w-full px-0"
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
          className="hover:bg-none! px-0"
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
          className="hover:bg-none! px-0"
        >
          Model
        </Button>
      );
    },
  },
  {
    accessorKey: "assigned_user",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-none! px-0"
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
          className="hover:bg-none! px-0"
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
          className="hover:bg-none! px-0"
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
          className="hover:bg-none! px-0"
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
          className="hover:bg-none! w-full px-0"
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
            className={`mg-auto h-3 w-3 rounded-full ${
              item.status === "available"
                ? "bg-green-500"
                : item.status === "assigned"
                ? "bg-yellow-500"
                : item.status === "out of order"
                ? "bg-red-500"
                : item.status === "decommisioned"
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
