import { z } from "zod";

export const deviceSchema = z.object({
  id: z.string(),
  serial_number: z.string(),
  type: z.string(),
  manufacturer: z.string(),
  model: z.string(),
  status: z.string(),
  tag: z.string(),
  purchase_date: z.date(),
  notes: z.string(),
});

export type Device = z.infer<typeof deviceSchema>;
