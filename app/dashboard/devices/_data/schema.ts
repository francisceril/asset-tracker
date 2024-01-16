import { z } from "zod";

export const deviceSchema = z.object({
  serial_number: z.string().optional(),
  type: z.string().optional(),
  manufacturer: z.string().optional(),
  model: z.string().optional(),
  status: z.string().optional(),
  // tag: z.string().optional(),
  // purchase_date: z.string().optional(),
  // notes: z.string().optional(),
});

export type Device = z.infer<typeof deviceSchema>;
