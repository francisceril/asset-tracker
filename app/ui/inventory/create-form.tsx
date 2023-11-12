"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { cn } from "@/app/lib/utils";
import { createBrowserClient } from "@supabase/ssr";

import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Input } from "@/app/ui/input";
import { Button } from "@/app/ui/button";
import { Calendar } from "@/app/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandInput,
} from "@/app/ui/command";

const schema = z.object({
  serial_number: z.string(),
  device_type: z.string(),
  manufacturer: z.string(),
  model: z.string(),
  specifications: z.string(),
  purchase_date: z.date(),
  status: z.string(),
  processor: z.string(),
  memory: z.string(),
  storage: z.string(),
  display: z.string(),
  color: z.string(),
  assigned_to: z.string(),
});

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

const users = [
  { label: "Francis", value: "francis@alhammadmedical.com" },
  { label: "Mohammed", value: "m.hammed@alhammadmedical.com" },
] as const;

async function onSubmit(form: z.infer<typeof schema>) {
  const { data, error } = await supabase
    .from("devices")
    .insert([
      {
        serial_number: form.serial_number,
        device_type: form.device_type,
        manufacturer: form.manufacturer,
        model: form.model,
        specifications: form.specifications,
        purchase_date: form.purchase_date,
        status: form.status,
      },
    ])
    .select();

  if (error) {
    console.error(error);

    // Unique constraint violation for serial_number
    if (error.code === "23505") {
      alert("Device with this serial number already exists");
    }
  } else {
    console.log("Device created", data);
    const deviceId = data![0].id;

    // get user.email from session
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const userEmail = session!.user.email;

    const { error } = await supabase.from("device_logs").insert([
      {
        device_id: deviceId,
        user_principal_name: userEmail,
        action: "create",
        details: "Device created",
        event_timestamp: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error(error);
    } else {
      console.log("Device log created");
    }
  }
}

export default function CreateForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="max-w-[50vw]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h3 className="mb-8">Properties</h3>
          <div className="mb-8 grid grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="serial_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Serial Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="device_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type of device" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="desktop">Desktop</SelectItem>
                        <SelectItem value="monitor">Monitor</SelectItem>
                        <SelectItem value="keyboard">Phone</SelectItem>
                        <SelectItem value="printer">Printer</SelectItem>
                        <SelectItem value="scanner">Scanner</SelectItem>
                        <SelectItem value="projector">Projector</SelectItem>
                        <SelectItem value="ups">UPS</SelectItem>
                        <SelectItem value="router">Router</SelectItem>
                        <SelectItem value="switch">Switch</SelectItem>
                        <SelectItem value="access_point">
                          Access Point
                        </SelectItem>
                        <SelectItem value="server">Server</SelectItem>
                        <SelectItem value="storage">Storage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="manufacturer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manufacturer</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="purchase_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purchase Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "yyyy-MM-dd")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("2000-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem
                          value="available"
                          className="flex items-center"
                        >
                          <span className="mr-2 inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                          Available
                        </SelectItem>
                        <SelectItem value="assigned">
                          <span className="mr-2 inline-flex h-3 w-3 rounded-full bg-yellow-500"></span>
                          Assigned
                        </SelectItem>
                        <SelectItem value="out of order">
                          <span className="mr-2 inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                          Out of Order
                        </SelectItem>
                        <SelectItem value="decommissioned">
                          <span className="mr-2 inline-flex h-3 w-3 rounded-full bg-gray-500"></span>
                          Decommissioned
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* display specification if device type is laptop, desktop or server */}
          {(form.watch("device_type") === "laptop" ||
            form.watch("device_type") === "desktop" ||
            form.watch("device_type") === "server") && (
            <div className="py-16">
              <h3 className="mb-8">Specification</h3>
              <div className="grid grid-cols-2 gap-8">
                <FormField
                  name="processor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Processor</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  name="memory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Memory</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  name="storage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Storage</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  name="display"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Display</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}

          <FormField
            control={form.control}
            name="assigned_to"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assign to</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value
                          ? users.find(
                              (assigned_to) =>
                                assigned_to.value === field.value,
                            )?.label
                          : "Select user"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search users"
                        className="h-9"
                      />
                      <CommandEmpty>No user found.</CommandEmpty>
                      <CommandGroup>
                        {users.map((user) => (
                          <CommandItem
                            value={user.value}
                            key={user.value}
                            onSelect={() =>
                              form.setValue("assigned_to", user.value)
                            }
                            className={cn(
                              "flex items-center",
                              user.value === field.value && "bg-gray-100",
                            )}
                          >
                            {user.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                user.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          <div className="space-x-2">
            <Button type="submit">Save</Button>
            <Button variant={"secondary"}>Cancel</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
