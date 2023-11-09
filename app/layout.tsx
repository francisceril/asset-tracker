import "@/app/ui/globals.css";
import { GeistSans } from "geist/font";
import type { Metadata } from "next";
import { ThemeProvider } from "@/app/ui/theme-provider";

import Header from "@/app/ui/header";

export const metadata: Metadata = {
  title: "Asset Inventory Tracker",
  description: "Document and track all your assets in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
