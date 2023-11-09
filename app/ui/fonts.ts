import { Inter, Lusitana } from "next/font/google";
import { GeistSans, GeistMono } from "geist/font";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const geistSans = GeistSans;
export const geistMono = GeistMono;
