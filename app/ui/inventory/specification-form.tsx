"use client";

import * as z from "zod";

import { Input } from "@/app/ui/input";
import { Button } from "@/app/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/ui/form";

const schema = z.object({
  processor: z.string(),
  memory: z.string(),
  storage: z.string(),
  display: z.string(),
  color: z.string(),
});

export default function Specification() {
  return (
    <div className="w-full border-t py-8">
      <h3 className="mb-6">Specification</h3>
      <div className="grid grid-cols-2 gap-4">
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
  );
}
