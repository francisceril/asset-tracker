"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Sun, MoonStars } from "@phosphor-icons/react/dist/ssr";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      size="icon"
      variant="ghost"
      className="hover:dark:bg-accent/45 rounded-lg"
    >
      {isDark ? (
        <Sun size={20} weight="bold" />
      ) : (
        <MoonStars size={20} weight="bold" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
