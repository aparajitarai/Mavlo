"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, secondaryNav } from "@/mocks/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

export function Sidebar(): ReactElement {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:border-r lg:bg-card/60 lg:px-6 lg:py-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-display font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-background shadow-soft">
            M
          </span>
          Mavlo
        </Link>
        <Button size="icon" variant="outline" className="rounded-full">
          <Settings2 className="h-4 w-4" />
          <span className="sr-only">System settings</span>
        </Button>
      </div>
      <div className="mt-10 space-y-8">
        <nav>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Main</p>
          <ul className="mt-3 space-y-1.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="flex-1">{item.title}</span>
                  {item.badge ? (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">{item.badge}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Support</p>
          <ul className="mt-3 space-y-1.5">
            {secondaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground",
                    pathname === item.href && "bg-secondary text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-auto rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Workspace health</p>
        <p className="mt-1 text-xs leading-relaxed">
          Stay ahead with automated insights about your projects, clients, and team performance.
        </p>
        <Button className="mt-4 w-full" variant="default">
          View suggestions
        </Button>
      </div>
    </aside>
  );
}
