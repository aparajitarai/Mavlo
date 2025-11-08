"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/mocks/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function MobileNav(): ReactElement {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-1 border-t border-border bg-background px-3 py-2 shadow-2xl lg:hidden">
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex flex-1 flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium",
            pathname === item.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          <item.icon className="h-5 w-5" />
          {item.title}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
}
