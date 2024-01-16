import {
  Laptop,
  Desktop,
  ComputerTower,
  Printer,
  DeviceMobile,
  DeviceTablet,
  Phone,
  Monitor,
  Fingerprint,
} from "@phosphor-icons/react/dist/ssr";

export const statuses = [
  { value: "available", label: "Available" },
  { value: "assigned", label: "Assigned" },
  { value: "under repair", label: "Under Repair" },
  { value: "out of service", label: "Out of Service" },
  { value: "retired", label: "Retired" },
];

export const deviceTypes = [
  { value: "laptop", label: "Laptop", icon: Laptop },
  { value: "desktop", label: "Desktop", icon: Desktop },
  { value: "printer", label: "Printer", icon: Printer },
  { value: "monitor", label: "Monitor", icon: Monitor },
  { value: "scanner", label: "Scanner", icon: Printer },
  { value: "mobile", label: "Mobile", icon: DeviceMobile },
  { value: "phone", label: "Phone", icon: Phone },
  { value: "tablet", label: "Tablet", icon: DeviceTablet },
  { value: "router", label: "Router", icon: Laptop },
  { value: "switch", label: "Switch", icon: Laptop },
  { value: "access point", label: "Access Point", icon: Laptop },
  { value: "server", label: "Server", icon: ComputerTower },
  { value: "biometric", label: "Biometric", icon: Fingerprint },
];
