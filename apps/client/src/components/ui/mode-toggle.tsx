"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Sun className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
      <Moon className="h-[1.2rem] w-[1.2rem] dark:hidden" />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  );
}
