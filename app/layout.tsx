import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Asset Manager",
    template: "%s | Asset Manager",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("overflow-y-hidden antialiased", GeistMono.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
