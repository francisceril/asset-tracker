"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
import { DataTableViewOptions } from "@/app/ui/inventory/data-table-view-options";

import { statuses } from "./data";
import { DataTableFacetedFilter } from "@/app/ui/inventory/data-table-faceted-filter";
import Form from "@/app/ui/inventory/create-form";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <>
      <div>
        <Form />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Filter serial number..."
            value={
              (table.getColumn("serial_number")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("serial_number")
                ?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              column={table.getColumn("status")}
              title="Status"
              options={statuses}
            />
          )}
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
        <DataTableViewOptions table={table} />
      </div>
    </>
  );
}
