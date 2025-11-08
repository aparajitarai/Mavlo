"use client";

import type { ReactNode } from "react";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle(): ReactNode {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="secondary" size="icon" onClick={toggle} className="rounded-full">
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonStar className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
