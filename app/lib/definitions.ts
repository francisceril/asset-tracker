export type Device = {
  id: string;
  manufacturer: string;
  model: string;
  serial_number: string;
  device_type: string;
  specifications: object;
  purchase_date: string;
  warranty_expiry_date: string;
  location: string;
  status: "assigned" | "available" | "out of order" | "decommissioned";
};
